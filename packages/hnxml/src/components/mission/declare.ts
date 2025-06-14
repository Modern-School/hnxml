import { HXEmail, HXMission } from "./index.tsx";
import { HXGoal, HXGoals } from "./goals.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mission: HXMission;
      goals: HXGoals;
      goal: HXGoal;
      email: HXEmail;
    }
  }
}
