import { AllTasks } from "../action/task.ts";

export interface HXCustomFaction {
  name: string;
  id: string;
  playerVal: string;
  children: void | FactionTrigger | FactionTrigger[];
}

export interface FactionTrigger {
  ValueRequired?: string;
  Flags?: string;
  children: void | AllTasks | AllTasks[];
}
