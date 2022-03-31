import filters from "../reducers/filters";
import skills from "../reducers/skills";
import { skillState } from "../reducers/skills";

describe("single skill testing", () => {
  test("should plus one point to skill", () => {
    const action = {
      type: "PLUS_SKILL_POINT",
      branch: "combat",
      row: 1,
      skill: "Muscle Memory",
    };

    const newState = skills(skillState, action);
    expect(newState.combat[1]["Muscle Memory"]["points"]).toBe(1);
  });
});
