import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

import { combat, signs, alchemy } from "../../db";

const skillsState = {
  branches: ["combat", "signs", "alchemy", "general", "mutagens"],
  showButtonsInRow: [false, true, true, true, true],
  disabledRows: {
    combat: [false, false, true, true, true],
    signs: [false, false, true, true, true],
    alchemy: [false, false, true, true, true],
    general: [false, false, false, false, false],
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
    if (action.type === "SET_LOADED") {
      draft.isLoaded = action.payload;
    }
    if (action.type === "PLUS_SKILL_POINT") {
      let points = draft[action.branch][action.row][action.skill].points;
      const pointsLimit =
        draft[action.branch][action.row][action.skill].pointsLimit;
      if (points < pointsLimit) {
        draft[action.branch][action.row][action.skill].points += 1;
      }
    }
    if (action.type === "MINUS_SKILL_POINT") {
      let points = draft[action.branch][action.row][action.skill].points;
      if (points > 0) {
        draft[action.branch][action.row][action.skill].points -= 1;
      }
    }
    if (action.type === "CLEAR_SKILL") {
      draft[action.branch][action.row][action.skill].points = 0;
    }
    if (action.type === "SWITCH_BRANCH") {
      draft.activeBranch = action.branch;
    }
  });

export default skills;
