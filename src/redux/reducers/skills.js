import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

import { combat, signs, alchemy } from "../../db";

const skillsState = {
  branches: ["combat", "signs", "alchemy", "general", "mutagens"],
  rowStates: {
    combat: [
      { mode: "constant", pointsToUnlock: 0, akku: 0 },
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
      { mode: "disabled", pointsToUnlock: 8, akku: 0 },
      { mode: "disabled", pointsToUnlock: 20, akku: 0 },
      { mode: "disabled", pointsToUnlock: 30, akku: 0 },
    ],
    signs: [
      { mode: "constant", pointsToUnlock: 0, akku: 0 },
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
      { mode: "disabled", pointsToUnlock: 6, akku: 0 },
      { mode: "disabled", pointsToUnlock: 18, akku: 0 },
      { mode: "disabled", pointsToUnlock: 28, akku: 0 },
    ],
    alchemy: [
      { mode: "constant", pointsToUnlock: 0, akku: 0 },
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
      { mode: "disabled", pointsToUnlock: 8, akku: 0 },
      { mode: "disabled", pointsToUnlock: 20, akku: 0 },
      { mode: "disabled", pointsToUnlock: 28, akku: 0 },
    ],
    general: [
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
      { mode: "editable", pointsToUnlock: 0, akku: 0 },
    ],
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
    //////////////////////// akku

    function plusAkku(branch, row) {
      for (let i = row; i < draft["rowStates"][branch].length; i += 1) {
        draft["rowStates"][branch][i]["akku"] += 1;
      }
    }

    function minusAkku(branch, row, value = 1) {
      // в зависимости от 3-го параметра это и minus и clear
      for (let i = row; i < draft["rowStates"][branch].length; i += 1) {
        draft["rowStates"][branch][i]["akku"] -= value;
      }
    }

    function checkRowToUnlock(branch, row) {
      draft["rowStates"][branch].forEach((row, i) => {
        if (i > 0) {
          // чтобы не трогать первый ряд, который constant
          if (row.pointsToUnlock === row.akku) {
            row.mode = "editable";
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
        plusAkku(action.branch, action.row);
        checkRowToUnlock(action.branch);
        draft[action.branch][action.row][action.skill].points += 1;
      }
    }
    if (action.type === "MINUS_SKILL_POINT") {
      let points = draft[action.branch][action.row][action.skill].points;
      if (points > 0) {
        minusAkku(action.branch, action.row);
        draft[action.branch][action.row][action.skill].points -= 1;
      }
    }
    if (action.type === "CLEAR_SKILL") {
      const points = draft[action.branch][action.row][action.skill].points;

      if (points > 0) {
        draft[action.branch][action.row][action.skill].points = 0;
        minusAkku(action.branch, action.row, points);
      }
    }
    if (action.type === "SWITCH_BRANCH") {
      draft.activeBranch = action.branch;
    }
  });

export default skills;
