import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

import { combat, signs, alchemy } from "../../db";

const skillsState = {
  branches: ["Фехтование", "Знаки", "Алхимия", "Умения", "Мутагены"],
  showPointsinRow: [false, true, true, true, true],
  combat: combat,
  signs: signs,
  alchemy: alchemy,
  generalSkill: {},
  mutagens: {},
};

const skills = (state = skillsState, action) =>
  produce(state, (draft) => {
    if (action.type === "SET_PIZZAS") {
      draft.items = action.payload;
      draft.isLoaded = true;
    }
    if (action.type === "SET_LOADED") {
      draft.isLoaded = action.payload;
    }
    if (action.type === "PLUS_SKILL_POINT") {
      draft[action.branch][action.row][action.skill].points += 1;
    }
    if (action.type === "MINUS_SKILL_POINT") {
      draft[action.branch][action.row][action.skill].points -= 1;
    }
    if (action.type === "CLEAR_SKILL") {
      draft[action.branch][action.row][action.skill].points = 0;
    }
  });

export default skills;
