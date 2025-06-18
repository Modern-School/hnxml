import { HXTrigger } from "./trigger.ts";

export interface HXConditionalActions {
  children: void | HXTrigger | HXTrigger[];
}
