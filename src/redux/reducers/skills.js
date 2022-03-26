import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

import { combat, signs, alchemy } from "../../db";

const skillsState = {
  branches: ["combat", "signs", "alchemy", "general", "mutagens"],
  rowStates: {
    combat: ["constant", "editable", "disabled", "disabled", "disabled"],
    signs: ["constant", "editable", "disabled", "disabled", "disabled"],
    alchemy: ["constant", "editable", "disabled", "disabled", "disabled"],
    general: ["editable", "editable", "editable", "editable"],
  },
  pointsToUnlockRow: {
    combat: [0, 0, 8, 20, 30], // закину этот стейт в rowStates, буду делать один большой стейт
    signs: [0, 0, 6, 18, 28],
    alchemy: [0, 0, 8, 20, 28],
    general: [0, 0, 0, 0],
  },
  spentPoints: {
    combat: 0, // [0, 0, 0, 0, 0], НО СДЕЛАТЬ ЕЩЕ ОТДЕЛЬНЫЙ СТЕЙТ ВНУТРИ rowStates аля TotalSpentInBranch,
    // Для функции checkRowToUnlock
    signs: 0,
    alchemy: 0,
    general: 0,
  },
  activeBranch: "combat",
  combat: combat,
  signs: signs,
  alchemy: alchemy,
  general: {},
  mutagens: {},
};

const skills = (state = skillsState, action) =>
  produce(state, (draft) => {
    function addSpentPoint(branch) {
      draft["spentPoints"][branch] += 1;
    }

    function removeSpentPoint(branch) {
      draft["spentPoints"][branch] -= 1;
    }

    function clearSpentPoint(branch, value) {
      draft["spentPoints"][branch] -= value;
    }

    function checkRowToUnlock(branch) {
      draft["pointsToUnlockRow"][branch].forEach((points, i) => {
        if (i > 1) {
          if (draft["spentPoints"][branch] >= points) {
            draft["rowStates"][branch][i] = "editable";
          }
        }
      });
    }

    if (action.type === "SET_LOADED") {
      draft.isLoaded = action.payload;
    }
    if (action.type === "PLUS_SKILL_POINT") {
      let points = draft[action.branch][action.row][action.skill].points;
      const pointsLimit =
        draft[action.branch][action.row][action.skill].pointsLimit;
      if (points < pointsLimit) {
        addSpentPoint(action.branch);
        checkRowToUnlock(action.branch);
        draft[action.branch][action.row][action.skill].points += 1;
      }
    }
    if (action.type === "MINUS_SKILL_POINT") {
      let points = draft[action.branch][action.row][action.skill].points;
      if (points > 0) {
        removeSpentPoint(action.branch);
        draft[action.branch][action.row][action.skill].points -= 1;
      }
    }
    if (action.type === "CLEAR_SKILL") {
      clearSpentPoint(
        action.branch,
        draft[action.branch][action.row][action.skill].points
      );
      draft[action.branch][action.row][action.skill].points = 0;
    }
    if (action.type === "SWITCH_BRANCH") {
      draft.activeBranch = action.branch;
    }
  });

export default skills;
