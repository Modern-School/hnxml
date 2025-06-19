import type { HXConditionalActions } from "../standard/action/index.ts";

import { Trigger } from "../standard/action/trigger.ts";

export interface Elements {
  ConditionalActions: HXConditionalActions;
  OnConnect: Trigger.OnConnect;
  HasFlays: Trigger.HasFlags;
  OnAdminGained: Trigger.OnAdminGained;
  Instantly: Trigger.Instantly;
  OnDisconnect: Trigger.OnDisconnect;
}
