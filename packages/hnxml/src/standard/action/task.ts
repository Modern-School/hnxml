/**
 * This module contains all Action task. The usage and examples are from <https://github.com/AutumnRivers/hacknet-vscode>, with some minor adjustments made on my part. Thank you AutumnRivers!
 * @module
 */

export namespace Task {
  /**
   * Run a mission function.
   * @example
   * ```xml
   * <RunFunction FunctionName="changeSong" FunctionValue="2" DelayHost="delayNode" Delay="1.0"/>
   * ```
   */
  export interface RunFunction {
    FunctionName: string;
    FunctionValue: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Load a mission and send its email.
   * @example ``xml
   * <LoadMission MissionName="Missions/SurpriseMission.xml"/>
   * ```
   */
  export interface LoadMission {
    MissionName: string;
    children?: never;
  }

  /**
   * Remotely add an asset to the target node.
   * @example
   * ```xml
   * <AddAsset FileName="test" FileContents="test" TargetComp="playerComp" TargetFolderpath="home"/>
   * ```
   */
  export interface AddAsset {
    FileName: string;
    FileContents: string;
    TargetComp: string;
    TargetFolderpath: string;
    children?: never;
  }

  /**
   * Copy a file from a remote node.
   * @example
   * ```xml
   * <CopyAsset DestFilePath="home" DestComp="playerComp" SourceComp="assetNode" SourceFileName="copycat.txt" SourceFilePath="home/copy"/>
   * ```
   */
  export interface CopyAsset {
    DestFilePath: string;
    DestComp: string;
    SourceComp: string;
    SourceFileName: string;
    SourceFilePath: string;
    children?: never;
  }

  /**
   * Add a mission file to a mission hub.
   * @example
   * ```xml
   * <AddMissionToHubServer MissionFilepath="Missions/HubMission.xml" TargetComp="missionHub" AssignmentTag="Kaguya"/>
   * ```
   */
  export interface AddMissionToHubServer {
    MissionFilepath: string;
    TargetComp: string;
    AssignmentTag?: string;
    children?: never;
  }

  /**
   * Remove a mission file from a mission hub.
   * @example
   * ```xml
   * <RemoveMissionFromHubServer MissionFilepath="Missions/HubMission.xml" TargetComp="missionHub"/>
   * ```
   */
  export interface RemoveMissionFromHubServer {
    MissionFilepath: string;
    TargetComp: string;
    children?: never;
  }

  /**
   * Add a thread to an /el Sec-like board.
   * @example
   * ```xml
   * <AddThreadToMissionBoard ThreadFilepath="Docs/Thread.txt" TargetComp="elSec"/>
   * ```
   */
  export interface AddThreadToMissionBoard {
    ThreadFilepath: string;
    TargetComp: string;
    children?: never;
  }

  /**
   * Add a generic IRC message.
   * @example
   * ```xml
   * <AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">HI</AddIRCMessage>
   * <AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">!ATTACHMENT:note#%#Note Title#%#Note Content line1
   * Note line 2
   * Note line 3</AddIRCMessage>
   * <AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">!ATTACHMENT:link#%#enemyNode#%#123.123.123.123</AddIRCMessage>
   * <AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">!ATTACHMENT:account#%#enemyNode#%#123.123.123.123#%#username#%#password</AddIRCMessage>
   * ```
   */
  export interface AddIRCMessage {
    Author: string;
    TargetComp: string;
    Delay?: string;
    children: string;
  }

  /**
   * Crash a node
   * @example
   * ```xml
   * <CrashComputer TargetComp="playerComp" CrashSource="enemyNode" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface CrashComputer {
    TargetComp: string;
    CrashSource: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Delete a file.
   * @example
   * ```xml
   * <DeleteFile TargetComp="playerComp" FilePath="home" FileName="deleteme.txt" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface DeleteFile {
    TargetComp: string;
    FilePath: string;
    FileName: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Load in a new action file.
   * @example
   * ```xml
   * <AddConditionalActions Filepath="Actions/NextAction.xml" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface AddConditionalActions {
    Filepath: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Save the game.
   * @example
   * ```xml
   * <SaveGame DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface SaveGame {
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Launch a hacker script.
   * @example
   * ```xml
   * <LaunchHackScript Filepath="Scripts/HackerScript.txt" DelayHost="delayNode" Delay="0" SourceComp="enemyNode" TargetComp="playerComp" RequireLogsOnSource="false" RequireSourceIntact="true"/>
   * ```
   */
  export interface LaunchHackScript {
    Filepath: string;
    SourceComp?: string;
    TargetComp?: string;
    RequireLogsOnSource: "true" | "false";
    RequireSourceIntact: "true" | "false";
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Flicker the player into a new theme.
   * @example
   * ```xml
   * <SwitchToTheme ThemePathOrName="Themes/ExampleTheme.xml" FlickerInDuration="3.0" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface SwitchToTheme {
    ThemePathOrName: string;
    FlickerInDuration: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Start a screen bleed effect, mostly used in sequencers.
   * @example
   * ```xml
   * <StartScreenBleedEffect AlertTitle="Sequencer Attack" CompleteAction="Actions/ScreenBleedFailed.xml" TotalDurationSeconds="" DelayHost="delayNode" Delay="0">Break into the Moonshine servers
   * Delete all files and backups
   * Get out of there!</StartScreenBleedEffect>
   * ```
   */
  export interface StartScreenBleedEffect {
    AlertTitle: string;
    CompleteAction: string;
    TotalDurationSeconds: string;
    DelayHost?: string;
    Delay?: string;
    children: string;
  }

  /**
   * Stop a screen bleed effect.
   * @example
   * ```xml
   * <CancelScreenBleedEffect DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface CancelScreenBleedEffect {
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Append text to a file.
   * @example
   * ```xml
   * <AppendToFile DelayHost="delayNode" Delay="0" TargetComp="companyWhitelist" TargetFolderpath="Whitelist" TargetFilename="list.txt">#PLAYER_IP#</AppendToFile>
   * ```
   */
  export interface AppendToFile {
    TargetComp: string;
    TargetFolderpath: string;
    TargetFilename: string;
    DelayHost?: string;
    Delay?: string;
    children: string;
  }
  /**
   * Kill any currently running exe with the title. Use * in ExeName to kill all currently running executables.
   * @example
   * ```xml
   * <KillExe DelayHost="delayNode" Delay="0" ExeName="*"/>
   * ```
   */
  export interface KillExe {
    ExeName: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Hide a node from the NetMap.
   * @example
   * ```xml
   * <HideNode DelayHost="delayNode" Delay="0" TargetComp="companySecurity"/>
   * ```
   */
  export interface HideNode {
    TargetComp: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Give the player an existing account so they can automatically login to the specified node.
   * @example
   * ```xml
   * <GivePlayerUserAccount DelayHost="delayNode" Delay="0" TargetComp="teamHub" Username="#PLAYERNAME#"/>
   * ```
   */
  export interface GivePlayerUserAccount {
    TargetComp: string;
    Username: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }
  /**
   * Change the IP of a specified node. Leave NewIP blank for a random IP.
   * @example
   * ```xml
   * <ChangeIP  DelayHost="delayNode" Delay="0" TargetComp="finalNode" NewIP="123.123.123.123"/>
   * ```
   */
  export interface ChangeIP {
    TargetComp: string;
    NewIP: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Hides all nodes visible on the NetMap.
   * @example
   * ```xml
   * <HideAllNodes DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface HideAllNodes {
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Reveals a node on the NetMap.
   * @example
   * ```xml
   * <ShowNode DelayHost="delayNode" Delay="0" Target="storageServer"/>
   * ```
   */
  export interface ShowNode {
    Target: string;
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }
  /**
   * Locks or hides the specified module. Choices are terminal, ram, netmap, and display.
   * @example
   * ```xml
   * <SetLock DelayHost="delayNode" Delay="0" Module="terminal" IsLocked="true" IsHidden="false"/>
   * ```
   */
  export interface SetLock {
    Module: string;
    IsLocked: "true" | "false";
    IsHidden: "true" | "false";
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * LABYRINTHS DLC ONLY - Change the mail icon to irc, irchub, board, or mail.
   * @example
   * ```xml
   * <ChangeAlertIcon Target="mainHub" Type="irchub" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface ChangeAlertIcon {
    Target: string;
    Type: "mail" | "irc" | "irchub" | "board";
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }

  /**
   * Change the way the netmap is sorted.
   * @example
   * ```xml
   * <ChangeNetmapSortMethod DelayHost="delayNode" Delay="0" Method="grid"/>
   * ```
   */
  export interface ChangeNetmapSortMethod {
    Method: "catter" | "grid" | "seqgrid" | "CHAOS";
    DelayHost?: string;
    Delay?: string;
    children?: never;
  }
}
export type HXTask =
  | Task.RunFunction
  | Task.LoadMission
  | Task.AddAsset
  | Task.CopyAsset
  | Task.AddMissionToHubServer
  | Task.AddThreadToMissionBoard
  | Task.AddIRCMessage
  | Task.CrashComputer
  | Task.DeleteFile
  | Task.SaveGame
  | Task.LaunchHackScript
  | Task.SwitchToTheme
  | Task.StartScreenBleedEffect
  | Task.CancelScreenBleedEffect
  | Task.AppendToFile
  | Task.KillExe
  | Task.HideNode
  | Task.GivePlayerUserAccount
  | Task.ChangeIP
  | Task.HideAllNodes
  | Task.ShowNode
  | Task.SetLock;
