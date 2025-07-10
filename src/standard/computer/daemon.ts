/**
 * These are the "programs" running on nodes that do things.
 * @module
 */

export namespace Daemon {
  export namespace mailServer {
    export interface root {
      name: string;
      color: string;
      generateJunk: boolean;
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
    assigner: boolean;
    public: boolean;
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
    allowAbandon: boolean;
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
    SelfAuthenticating?: boolean;
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
      needsLogin: boolean;
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
  export namespace DatabaseDaemon {
    export namespace GitCommitEntry {
      type GitCommitEntryChildren =
        | EntryNumber
        | ChangeFiles
        | Message
        | UserName
        | SourceIP;
      export interface root {
        children: GitCommitEntryChildren;
      }
      export type EntryNumber = { children: string };
      export type ChangeFiles = { children: _String };
      export type _String = { children: string };
      export type Message = { children: string };
      export type UserName = { children: string };
      export type SourceIP = { children: string };
    }

    export namespace TextRecord {
      type TextRecordChildren = Title | Data;

      export interface root {
        children: TextRecordChildren;
      }

      export type Title = { children: string };
      export type Data = { children: string };
    }
    export namespace OnlineAccount {
      type OnlineAccountChildren = ID | Username | BanStatus | Notes;

      export interface root {
        children: OnlineAccountChildren;
      }

      export type ID = { children: string };
      export type Username = { children: string };
      export type BanStatus = { children: string };
      export type Notes = { children: string };
    }

    export namespace CAROData {
      type CARODataChildren =
        | UserID
        | Headshots
        | Kills
        | Rank
        | Crowbars
        | InventoryID
        | BanStatus;

      export interface root {
        children: CARODataChildren;
      }

      export type UserID = { children: string };
      export type Headshots = { children: string };
      export type Kills = { children: string };
      export type Rank = { children: string };
      export type Crowbars = { children: string };
      export type InventoryID = { children: string };
      export type BanStatus = { children: string };
    }

    export namespace Account {
      type AccountChildren =
        | ID
        | Cash
        | Bank
        | Apartments
        | Vehicles
        | PegasusVehicles
        | Rank
        | RP
        | Kills;

      export interface root {
        children: AccountChildren;
      }

      export type ID = { children: string };
      export type Cash = { children: string };
      export type Bank = { children: string };
      export type Apartments = { children: string };
      export type Vehicles = { children: string };
      export type PegasusVehicles = { children: string };
      export type Rank = { children: string };
      export type RP = { children: string };
      export type Kills = { children: string };
    }
    export namespace SurveillanceProfile {
      type SurveillanceProfileChildren =
        | Name
        | Age
        | HomeCity
        | Notes
        | CriminalRecord;

      export interface root {
        children: SurveillanceProfileChildren;
      }

      export type Name = { children: string };
      export type Age = { children: string };
      export type HomeCity = { children: string };
      export type Notes = { children: string };
      export type CriminalRecord = { children: string };
    }
    export namespace AgentDetails {
      type AgentDetailsChildren = Codename | RealName | IP | SpecialNotes;

      export interface root {
        children: AgentDetailsChildren;
      }

      export type Codename = { children: string };
      export type RealName = { children: string };
      export type IP = { children: string };
      export type SpecialNotes = { children: string };
    }
    type DatabaseDaemonDataTypeString<T> = T extends GitCommitEntry.root
      ? "GitCommitEntry"
      : T extends TextRecord.root ? "TextRecord"
      : T extends OnlineAccount.root ? "OnlineAccount"
      : T extends CAROData.root ? "CAROData"
      : T extends Account.root ? "Account"
      : T extends SurveillanceProfile.root ? "SurveillanceProfile"
      : T extends AgentDetails.root ? "AgentDetails"
      : never;
    export interface root<T> {
      Permissions?: "public" | "private";
      DataType: DatabaseDaemonDataTypeString<T>;
      Foldername?: string;
      Color: string;
      AdminEmailAccount: string;
      AdminEmailHostID: string;
      Name: string;
    }
    export type AllDatabaseDaemon =
      | GitCommitEntry.root
      | TextRecord.root
      | OnlineAccount.root
      | CAROData.root
      | Account.root
      | SurveillanceProfile.root
      | AgentDetails.root;
  }
}

export type AllDaemons =
  | Daemon.mailServer.root
  | Daemon.uploadServerDaemon
  | Daemon.addWebServer
  | Daemon.addOnlineWebServer
  | Daemon.deathRowDatabase
  | Daemon.academicDatabase
  | Daemon.ispSystem
  | Daemon.messageBoard.root
  | Daemon.MedicalDatabase
  | Daemon.PointClicker
  | Daemon.SongChangerDaemon
  | Daemon.variableMissionListingServer
  | Daemon.missionHubServer
  | Daemon.CreditsDaemon
  | Daemon.FastActionHost
  | Daemon.memoryDumpFile
  | Daemon.Memory.root
  | Daemon.CustomConnectDisplayDaemon
  | Daemon.LogoCustomConnectDisplayDaemon
  | Daemon.WhitelistAuthenticatorDaemon
  | Daemon.MarkovTextDaemon
  | Daemon.IRCDaemon.root
  | Daemon.DatabaseDaemon.root<Daemon.DatabaseDaemon.AllDatabaseDaemon>;
