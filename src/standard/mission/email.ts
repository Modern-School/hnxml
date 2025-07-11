export interface HXMissionEmail {
  children: MissionEmailChildren | MissionEmailChildren[];
}
export type MissionEmailChildren =
  | MissionEmail.sender
  | MissionEmail.subject
  | MissionEmail.body
  | MissionEmail.attachments;

export namespace MissionEmail {
  export type sender = { children: string };
  export type subject = { children: string };
  export type body = { children: string };
  type AttachmentsChildren =
    | Attachment.note
    | Attachment.link
    | Attachment.account;
  export interface attachments {
    children: void | AttachmentsChildren | AttachmentsChildren[];
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
