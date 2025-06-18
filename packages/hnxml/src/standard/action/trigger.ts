import { HXTask } from "./task.ts";

type Tasks = void | HXTask | HXTask[];

export namespace Trigger {
  /**
   * This one is checked when the player connects to the PC with ID in the target field. needsMissionComplete and reqiuredFlags are optional
   * additional checks that you can apply.
   */
  export interface OnConnect {
    target: string;
    needsMissionComplete?: "true" | "false";
    children: Tasks;
  }
  /**
   * Triggers once the player has *all* of the flags in a comma separated list in requiredFlags
   */
  export interface HasFlags {
    requiredFlags: string;
    children: Tasks;
  }

  export interface OnAdminGained {
    target: string;
    children: Tasks;
  }

  /**
   * this triggers immediately, as soon as this is finished loading! Actions will happen in the order they appear in this file.
   */
  export interface Instantly {
    children: Tasks;
  }

  /**
   * Triggers if the player has none of the flags in the list
   *
   * This trigger was written in `IntroExtension\Actions\ExampleConditionalActionSet.xml` but it was **not implemented** yet
   */
  type DoesNotHaveFlags = never;

  export interface OnDisconnect {
    target: string;
    children: Tasks;
  }
}

export type HXTrigger =
  | Trigger.OnConnect
  | Trigger.HasFlags
  | Trigger.OnAdminGained
  | Trigger.Instantly
  | Trigger.OnDisconnect;
