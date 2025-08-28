/**
 * Hnxml Standard目前提供以下这几种 Hacknet Extension XML 类型的规范：
 *
 * Actions(行动): {@link HXConditionalActions}
 *
 * Factions(阵营): {@link HXCustomFaction}
 *
 * Missions(任务): {@link HXMission}
 *
 * Computers(电脑，也习惯称作 Nodes 节点): {@link HXComputer}
 *
 * 所有 types 或 interfaces 都包含一个`children`属性，用于定义该 XML
 * 标签对应的子元素的 types 或 interfaces 。若元素为自闭合标签（无子元素），则`children`属性变为可选且类型为`never`。
 * 比如：{@link Trigger.HasFlags} {@link Computer.tracker}
 *
 * @localeEnglish Hnxml Standard now provides specifications for these types ofHacknet Extension XML:
 *
 * Actions: {@link HXConditionalActions}
 *
 * Factions: {@link HXCustomFaction}
 *
 * Missions: {@link HXMission}
 *
 * Computers(or Nodes): {@link HXComputer}
 *
 * All types or interfaces include a `children` property, which specifies the
 * corresponding type/interface for child elements of that XML tag. If an element
 * is self-closing (has no children), the `children` property becomes optional and
 * its type is set to `never`.
 * For example: {@link Trigger.HasFlags} {@link Computer.tracker}
 * @module
 */
export type { ConditionalActionsElement } from "./src/standard/action/index.ts";
export type { AllTriggers, Trigger } from "./src/standard/action/trigger.ts";
export type {
  AllTasks,
  Task,
  TaskElement,
} from "./src/standard/action/task.ts";

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
  ComputerChildren,
  ComputerIcon,
  HXComputer,
} from "./src/standard/computer/index.ts";
export type { AllDaemons, Daemon } from "./src/standard/computer/daemon.ts";
export type { HacknetExtension } from "./src/standard/info/index.ts";
export const empty = " ";
