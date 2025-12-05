import { HXMission, Mission } from "../standard/mission/index.ts";
import { HXMissionEmail, MissionEmail } from "../standard/mission/email.ts";
import { HXGoal, HXGoals } from "../standard/mission/goals.ts";
import { Daemon } from "../standard/computer/daemon.ts";

/**
 * Mission's IntrinsicElements
 */
export interface MissionElements {
  mission: HXMission;
  goals: HXGoals;
  goal: HXGoal;
  missionStart: Mission.start;
  missionEnd: Mission.end;
  nextMission: Mission.next;
  branchMissions: Mission.branchs;
  branch: Mission.branch;
  email: HXMissionEmail | Daemon.mailServer.email;
  sender: MissionEmail.sender;
  subject: MissionEmail.subject;
  body: MissionEmail.body;
  attachments: MissionEmail.attachments;
  note: MissionEmail.Attachment.note;
  link: MissionEmail.Attachment.link;
  account: MissionEmail.Attachment.account;
}
