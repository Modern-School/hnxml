/**
 * This module contains Triggers of Action.
 * The usage and examples are from `IntroExtension\Actions\ExampleConditionalActionSet.xml`,
 * with some minor adjustments made on my part.
 *
 * @module
 */

import { TaskElement } from "./task.ts";

/**
 * the Trigger. Child Elements of Trigger are all types of Task.
 *
 * @localeCN 这些是 Trigger。Trigger 的子元素是所有种类的 Task 。
 * @see {@link Task}, {@link AllTasks}
 */
export namespace Trigger {
  /**
   * This one is checked when the player connects to the PC with ID in the target field.
   *
   * @localeCN 检测玩家连接到某个节点的 Trigger。
   * @example
   * ```xml
   * <OnConnect target="advExamplePC" needsMissionComplete="true" requiredFlags="decypher">
   *     <!-- Tasks... -->
   * </OnConnect>
   * ```
   */
  export interface OnConnect {
    /**
     * Computer ID
     */
    target: string;
    /**
     * Needs mission complete or not
     *
     * @localeCN 是否需要任务完成
     */
    needsMissionComplete?: "true" | "false";
    /**
     * Require Flags "Flag1,Flag2,Flag3..."
     *
     * @localeCN 需要获得的所有目标Flags。书写方式：```"Flag1,Flag2,Flag3..."```
     */
    requiredFlags?: string;
    children: TaskElement;
  }
  /**
   * Triggers once the player has *all* of the flags in a comma separated list in requiredFlags.
   *
   * @localeCN 当玩家获得所有目标Flags后触发的 Trigger。
   * @example
   * ```xml
   * <HasFlags requiredFlags="decypher,otherFlag">
   *     <!-- Tasks ... -->
   * </HasFlags>
   * ```
   */
  export interface HasFlags {
    /**
     * Require Flags "Flag1,Flag2,Flag3..."
     *
     * @localeCN 需要获得的所有目标Flags。书写方式：```"Flag1,Flag2,Flag3..."```
     */
    requiredFlags: string;
    children: TaskElement;
  }

  /**
   * triggered once the player gets admin access to the target machine
   *
   * @localeCN 当玩家获得目标节点的管理员后触发的 Trigger
   * @example
   * ```xml
   * <OnAdminGained target="advExamplePC">
   *     <!-- Tasks -->
   * </OnAdminGained>
   * ```
   */
  export interface OnAdminGained {
    /**
     * Computer ID
     */
    target: string;
    children: TaskElement;
  }

  /**
   * this triggers immediately, as soon as this is finished loading
   *
   * @localeCN 此 Trigger 一完成加载就触发
   *
   * @example
   * ```
   * <Instantly>
   *    <!-- Tasks -->
   * </Instantly>
   * ```
   */
  export interface Instantly {
    /**
     * Needs mission complete or not
     *
     * @localeCN 是否需要任务完成
     */
    needsMissionComplete: "true" | "false";
    children: TaskElement;
  }

  /**
   * Triggers if the player has none of the flags in the list
   *
   * This trigger was written in `IntroExtension\Actions\ExampleConditionalActionSet.xml` but it was **not implemented** yet
   *
   * @localeCN 玩家没有某些 Flags 触发的 Trigger。
   *
   * 这个Trigger被写在`IntroExtension\Actions\ExampleConditionalActionSet.xml`里面，但是没有实现（没法用）。
   */
  type DoesNotHaveFlags = never;

  /**
   * Triggers when the player disconnects from nodes , or connects to their own computer.
   * You can remove the target tag (or set it to "NONE") to have this trigger when the player disconnects from anything.
   *
   * @localeCN 当玩家从某个节点断开连接 (disconnect)，或者连接 (connect) 玩家自己的节点。（注：断开连接会连接到玩家自己的节点）
   * 你可以不声明`target`属性（或者把`target`属性的值改为`"NONE"`）来让玩家从任意节点断开连接后触发。
   *
   * @example
   * ```xml
   * <OnDisconnect target="advExamplePC">
   *     <!-- Tasks -->
   * </OnDisconnect>
   * ```
   */
  export interface OnDisconnect {
    target?: string;
    children: TaskElement;
  }
}

/**
 * All types of the Trigger
 * @localeCN 所有类型的 Trigger
 */
export type AllTriggers =
  | Trigger.OnConnect
  | Trigger.HasFlags
  | Trigger.OnAdminGained
  | Trigger.Instantly
  | Trigger.OnDisconnect;
