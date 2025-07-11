import type { HXGoals } from "./goals.ts";
import type { HXMissionEmail } from "./email.ts";

export namespace Mission {
  export interface start {
    val: string;
    suppress: boolean;
    children: string;
  }
  export interface end {
    val: string;
    children: string;
  }
  export interface next {
    IsSilent: boolean;
    children: string;
  }
  export interface branchs {
    children: " " | branch | branch[];
  }
  export interface branch {
    children: string;
  }
}

type MissionChildren =
  | HXGoals
  | HXMissionEmail
  | Mission.start
  | Mission.end
  | Mission.next
  | Mission.branchs;

export interface HXMission {
  id: string;
  activeCheck?: boolean;
  shouldIgnoreSenderVerification?: boolean;
  children: " " | MissionChildren | MissionChildren[];
}
