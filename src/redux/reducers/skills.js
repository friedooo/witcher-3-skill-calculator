import produce from "immer";
import { act } from "react-dom/test-utils";
import { current } from "immer";

import { combat, signs, alchemy } from "../../db";

const skillsState = {
  branches: ["combat", "signs", "alchemy", "general", "mutagens"],
  showPointsInRow: [false, true, true, true, true],
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
      draft[action.branch][action.row][action.skill].points += 1;
    }
    if (action.type === "MINUS_SKILL_POINT") {
      draft[action.branch][action.row][action.skill].points -= 1;
    }
    if (action.type === "CLEAR_SKILL") {
      draft[action.branch][action.row][action.skill].points = 0;
    }
    if (action.type === "SWITCH_BRANCH") {
      draft.activeBranch = action.branch;
    }
  });

export default skills;
