/**
 * These are the "programs" running on nodes that do things.
 * @module
 */

import { ComputerIcon } from "./index.ts";
import { Computer } from "./index.ts";

export namespace Daemon {
  export type tracker = { children?: never };

  export namespace eosDevice {
    export interface root {
      name: string;
      id: string;
      icon: ComputerIcon;
      empty?: "true" | "false";
      passOverride?: string;
      children: void | Children | Children[];
    }
    export type note = { children: void | string };
    export interface mail {
      username: string;
      pass: string;
      children?: never;
    }
    export type file = Computer.file;
    export type Children = note | mail | file;
  }
  export namespace mailServer {
    export interface root {
      name: string;
      color: string;
      generateJunk: "true" | "false";
      children: void | email | email;
    }
    export interface email {
      recipient: string;
      sender: string;
      subject: string;
      children: void | string;
    }
  }
  export interface uploadServerDaemon {
    name: string;
    folder: string;
    needsAuth: string;
    color: string;
    children?: never;
  }
  export interface addWebServer {
    name: string;
    url: string;
    children?: never;
  }
  export interface addOnlineWebServer {
    name: string;
    url: string;
    children?: never;
  }

  export type deathRowDatabase = { children?: never };
  export type academicDatabase = { children?: never };
  export type ispSystem = { children?: never };
  export namespace messageBoard {
    export interface root {
      name: string;
      children: void | thread | thread[];
    }
    export type thread = { children: string };
  }
  export type MedicalDatabase = { children?: never };
  export interface HeartMonitor {
    patient: string;
    children?: never;
  }
  export type PointClicker = { children?: never };
  export type SongChangerDaemon = { children?: never };
  export interface variableMissionListingServer {
    name: string;
    iconPath: string;
    articleFolderPath: string;
    color: string;
    assigner: "true" | "false";
    public: "true" | "false";
    title: string;
    children?: never;
  }
  export interface missionHubServer {
    groupName: string;
    serviceName: string;
    missionFolderPath: string;
    themeColor: string;
    lineColor: string;
    backgroundColor: string;
    allowAbandon: "true" | "false";
  }
  export interface CreditsDaemon {
    Title: string;
    ButtonText: string;
    ConditionalActionSetToRunOnButtonPressPath: string;
  }
  export type FastActionHost = { children?: never };

  export interface memoryDumpFile {
    name: string;
    path: string;
    children: Memory.root;
  }

  export namespace Memory {
    export type root = { children: MemoryChildren | MemoryChildren[] };
    type MemoryChildren = Commands | Data | Images;

    export type Commands = { children: Command | Command[] };
    export type Command = { children: string };
    export type Data = { children: Block | Block[] };
    export type Block = { children: string };
    export type Images = { children: Image | Image[] };
    export type Image = { children: string };
  }

  export type CustomConnectDisplayDaemon = { children?: never };

  export interface LogoCustomConnectDisplayDaemon {
    logo: string;
    title: string;
    overdrawLogo: string;
    buttonAlignment: "left" | "middle" | "right";
    children?: never;
  }

  export interface WhitelistAuthenticatorDaemon {
    Remote?: string;
    SelfAuthenticating?: "true" | "false";
    children?: never;
  }

  export interface MarkovTextDaemon {
    Name: string;
    SourceFilesContentFolder: string;
    children?: never;
  }

  export namespace IRCDaemon {
    export interface root {
      themeColor: string;
      name: string;
      needsLogin: "true" | "false";
      children: IRCDaemonChildren | IRCDaemonChildren[];
    }
    type IRCDaemonChildren = user | post;
    export interface user {
      name: string;
      color: string;
      children?: never;
    }
    export interface post {
      user: string;
      children: void | string;
    }
  }
}
