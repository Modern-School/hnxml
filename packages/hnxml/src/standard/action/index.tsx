import { HXTrigger } from "./trigger.ts";

export interface HXConditionalActions {
  children: void | HXTrigger | HXTrigger[];
}

export function ConditionalActions(props: HXConditionalActions) {
  return <conditionalactions {...props}></conditionalactions>;
}
