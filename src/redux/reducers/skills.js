import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

import { combat, signs, alchemy, general } from "../../db";

export const skillsState = {
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
  availablePoints: 30,
  combat: combat,
  signs: signs,
  alchemy: alchemy,
  general: general,
  mutagens: {},
};

function akkuHandler(draft, mode, branch, row, value = 1) {
  // это minusAkku и plusAkku
  // в зависимости от 3-го параметра это и minus и clear
  for (let i = row; i < draft["rowStates"][branch].length; i += 1) {
    if (mode === "plus") {
      draft["rowStates"][branch][i]["akku"] += 1;
    } else if (mode === "minus") {
      draft["rowStates"][branch][i]["akku"] -= value;
    }
  }
}

function clearRow(draft, branch, row) {
  draft["rowStates"][branch][row]["akku"] =
    draft["rowStates"][branch][row - 1]["akku"];

  for (let skill in draft[branch][row]) {
    draft[branch][row][skill]["points"] = 0;
  }
}

function clearRowFrom(draft, branch, row) {
  const objLength = Object.keys(draft[branch][row]).length;

  for (let rowIndex = row; rowIndex < objLength; rowIndex += 1) {
    clearRow(draft, branch, rowIndex);
  }
}

function checkLock(draft, branch) {
  for (let i = 1; i < draft["rowStates"][branch].length; i += 1) {
    if (
      draft["rowStates"][branch][i]["pointsToUnlock"] >
      draft["rowStates"][branch][i - 1]["akku"]
    ) {
      clearRowFrom(draft, branch, i);
      draft["rowStates"][branch][i]["mode"] = "disabled";
    } else {
      {
        draft["rowStates"][branch][i]["mode"] = "editable";
      }
    }
  }
}

function availablePointsHadler(draft, value) {
  draft["availablePoints"] += value;
}

const skills = (state = skillsState, action) =>
  produce(state, (draft) => {
    // НУЖНО ВЫНЕСТИ ЭТИ ФУНКЦИИ ЗА ПРЕДЕЛЫ IMMER, А ТО ОНИ КАЖДЫЙ
    // РАЗ ОБЪЯВЛЯЮТСЯ - ВОЗМОЖНО НАДО ВЕСЬ ЭТОТ ДРАФТ
    // ПЕРЕНЕСТИ В АРГУМЕНТЫ ФУНКЦИИ

    if (action.type === "SET_LOADED") {
      draft.isLoaded = action.payload;
    }
    if (action.type === "PLUS_SKILL_POINT") {
      const points = draft[action.branch][action.row][action.skill].points;
      const pointsLimit =
        draft[action.branch][action.row][action.skill].pointsLimit;
      if (points < pointsLimit) {
        akkuHandler(draft, "plus", action.branch, action.row);
        checkLock(draft, action.branch);
        availablePointsHadler(draft, -1);
        draft[action.branch][action.row][action.skill].points += 1;
      }
    }
    if (action.type === "MINUS_SKILL_POINT") {
      const points = draft[action.branch][action.row][action.skill].points;
      if (points > 0) {
        akkuHandler(draft, "minus", action.branch, action.row);
        checkLock(draft, action.branch);

        draft[action.branch][action.row][action.skill].points -= 1;
      }
    }
    if (action.type === "CLEAR_SKILL") {
      const points = draft[action.branch][action.row][action.skill].points;

      if (points > 0) {
        akkuHandler(draft, "minus", action.branch, action.row, points);
        checkLock(draft, action.branch);
        draft[action.branch][action.row][action.skill].points = 0;
      }
    }
    if (action.type === "SWITCH_BRANCH") {
      draft.activeBranch = action.branch;
    }
  });

export default skills;
