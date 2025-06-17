export interface HXMissionEmail {
  children: [
    MissionEmail.sender,
    MissionEmail.subject,
    MissionEmail.body,
    MissionEmail.attachments,
  ];
}

export namespace MissionEmail {
  export type sender = { children: string };
  export type subject = { children: string };
  export type body = { children: string };
  type attachmentsChildren = sender | subject | body;
  export interface attachments {
    children: void | attachmentsChildren | attachmentsChildren[];
  }
  export namespace Attachment {
    export interface note {
      title: string;
      children: string;
    }

    export interface link {
      comp: string;
      children?: never;
    }

    export interface account {
      comp: string;
      user: string;
      pass: string;
      children?: never;
    }
  }
}
