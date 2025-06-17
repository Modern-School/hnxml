import { HXMission, Mission } from "./index.ts";
import { HXMissionEmail, MissionEmail } from "./email.ts";
import { HXGoal, HXGoals } from "./goals.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mission: HXMission;
      goals: HXGoals;
      goal: HXGoal;
      missionStart: Mission.start;
      missionEnd: Mission.end;
      nextMission: Mission.next;
      branchMissions: Mission.branchs;
      branch: Mission.branch;
      email: HXMissionEmail;
      sender: MissionEmail.sender;
      subject: MissionEmail.subject;
      body: MissionEmail.body;
      attachments: MissionEmail.attachments;
      note: MissionEmail.Attachment.note;
      link: MissionEmail.Attachment.link;
      account: MissionEmail.Attachment.account;
    }
  }
}
