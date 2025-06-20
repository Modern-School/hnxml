/**
 * # hnxml.js
 *
 * a TypeScript-defined XML schema specification for Hacknet Extension, enabling
 * JSX-compatible authoring. Additionally implements generator tools for other
 * Hacknet Extension related content.
 * @module
 */

export type { HXConditionalActions } from "./src/standard/action/index.ts";
export type { HXTrigger, Trigger } from "./src/standard/action/trigger.ts";
export type { HXTask, Task } from "./src/standard/action/task.ts";

export type {
  FactionTrigger,
  HXCustomFaction,
} from "./src/standard/faction/index.ts";

export type { HXMission, Mission } from "./src/standard/mission/index.ts";
export type { Goal, HXGoal, HXGoals } from "./src/standard/mission/goals.ts";
export type {
  HXMissionEmail,
  MissionEmail,
} from "./src/standard/mission/email.ts";

export type {
  Computer,
  ComputerIcon,
  HXComputer,
} from "./src/standard/computer/index.ts";
export type { Daemon } from "./src/standard/computer/daemon.ts";
