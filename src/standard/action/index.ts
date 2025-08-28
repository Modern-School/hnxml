import type { AllTriggers, Trigger } from "./trigger.ts";

/**
 * Action 可以根据特定条件来修改、控制游戏内容。检测条件的东西叫做 Trigger (触发器)。
 * 当条件满足后，Trigger 会被触发，触发 Trigger 后干的事情叫做 Task (行为，……其实更应该叫做任务，但是任务和Mission冲突了)
 *
 * 为了减少歧义，请尽量不使用译文。
 *
 * 注：Trigger 对应声明元素曾经被FBIK.称作条件标签。Task 对应声明元素曾经被FBIK.称作行为标签。
 * 见：[Hacknet-Extension-Tutorial/Actions](https://github.com/FBIKdot/Hacknet-Extension-Tutorial/blob/main/Content/Actions.md)
 *
 * `<ConditionalActions>` 是 Actions 的根元素。 `<ConditionalActions>` 的子元素是 Trigger。
 * @localeEnglish `<ConditionalActions>` is the root element of Actions.
 * Child Elements of `<ConditionalActions>` are all types of Trigger
 *
 * @see {@link Trigger}, {@link AllTriggers}
 */
export interface ConditionalActionsElement {
  /**
   * `<ConditionalActions>` 的子元素是所有种类的 Trigger
   * @localeEnglish Child Elements of `<ConditionalActions>` are all types of Trigger
   * @see {@link Trigger}, {@link AllTriggers}
   */
  children: " " | AllTriggers | AllTriggers[];
}
