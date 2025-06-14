import { HXGoal, HXGoals } from "./goals.ts";
import { render } from "jsx-xml";

export interface HXEmail {
  sender: string;
  subject: string;
  body: string;
  attachments: void;
  children?: never;
}

interface Note {
  title: string;
}

export interface HXMission {
  id: string;
  activeCheck?: "true" | "false";
  shouldIgnoreSenderVerification?: "true" | "false";
  children: void | MissionChildren;
}

type MissionChildren = void | HXGoals | HXEmail;

// 用于测试
const __xml = (
  <mission id="awa" activeCheck="true" shouldIgnoreSenderVerification="true">
    <goals>{undefined}</goals>
  </mission>
);
const __xml2 = (
  <mission id="awa" activeCheck="true" shouldIgnoreSenderVerification="true">
    <goals>
      <goal type="clearfolder" target="awa" path="" />
    </goals>
  </mission>
);
// console.log(render(xml).end({ headless: true, allowEmptyTags: true }));
