import type { ConditionalActionsElement } from "../standard/action/index.ts";
import { Trigger } from "../standard/action/trigger.ts";

/**
 * Action's IntrinsicElements
 */
export interface TriggerElements {
  ConditionalActions: ConditionalActionsElement;
  OnConnect: Trigger.OnConnect;
  HasFlays: Trigger.HasFlags;
  OnAdminGained: Trigger.OnAdminGained;
  Instantly: Trigger.Instantly;
  OnDisconnect: Trigger.OnDisconnect;
}
export const ConditionalActions = "ConditionalActions";
export const OnConnect = "OnConnect";
export const HasFlays = "HasFlays";
export const OnAdminGained = "OnAdminGained";
export const Instantly = "Instantly";
export const OnDisconnect = "OnDisconnect";
