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
  spentPoints: {
    combat: 0,
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
    //////////////////////// akku

    function plusAkku(branch, row) {
      for (let i = row; i < draft["rowStates"][branch].length; i += 1) {
        draft["rowStates"][branch][i]["akku"] += 1;
      }
    }

    // ДОБАВИТЬ MINUS_AKKU И CLEAR_ROW_AKKU ФУНКЦИИ
    // ИНАЧЕ У НАС БУДУТ ОТКРЫВАТЬСЯ РЯДЫ ДАЖЕ ПРИ СБРОСЕ ОЧКОВ

    //////////////////// spent points

    function addSpentPoint(branch) {
      draft["spentPoints"][branch] += 1;
    }

    function removeSpentPoint(branch) {
      draft["spentPoints"][branch] -= 1;
    }

    function clearSpentPoint(branch, value) {
      draft["spentPoints"][branch] -= value;
    }

    function checkRowToUnlock(branch, row) {
      // это функция сравнивание необходимое количество очков для открытия следующего ряда
      // с аккумулятором следующего ряда (аккумулятор работает как лавина)
      // и если эти значения равны, то следующий ряд переходит в мод editable
      if (row < draft["rowStates"][branch].length - 1) {
        // исключаем последний ряд из проверок
        // чтобы не было undefined ошибок

        let nextRow = row + 1;
        let pointsToUnlock =
          draft["rowStates"][branch][nextRow]["pointsToUnlock"];
        let akku = draft["rowStates"][branch][nextRow]["akku"];
        if (pointsToUnlock === akku) {
          draft["rowStates"][branch][nextRow]["mode"] = "editable";
        }
      }

      // draft["rowStates"][branch].forEach(({ pointsToUnlock, akku }, i) => {
      //   if (i > 1) {
      //     if (draft["spentPoints"][branch] >= pointsToUnlock) {
      //       draft["rowStates"][branch][i]["mode"] = "editable";
      //     }
      //   }
      // });
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
        addSpentPoint(action.branch);
        checkRowToUnlock(action.branch, action.row);
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
