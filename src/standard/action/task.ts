import type { AllTriggers, Trigger } from "./trigger.ts";

/**
 * This module contains all Action task.
 *
 * Some usage and examples are from <https://github.com/AutumnRivers/hacknet-vscode>,
 * with some minor adjustments made on my part.
 * Thank you AutumnRivers!
 * @module
 */

/**
 * 这些是 Task。Trigger 的子元素是所有种类的 Task 。
 *
 * @localeEnglish The Task. Child Elements of Trigger are all types of Task.
 * @see {@link Trigger}, {@link AllTriggers}
 */
export namespace Task {
  /**
   * 运行 function
   * @localeEnglish Run a function
   * @example
   * ```xml
   * <RunFunction FunctionName="changeSong" FunctionValue="2" DelayHost="delayNode" Delay="1.0"/>
   * ```
   */
  export interface RunFunction {
    FunctionName: string;
    FunctionValue?: number;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 加载一个任务并且发送任务的邮件。（任务和邮件是绑定关系的）
   * @localeEnglish Load a mission and send its email.
   * @example
   * ``xml
   * <LoadMission MissionName="Missions/SurpriseMission.xml"/>
   * ```
   */
  export interface LoadMission {
    MissionName: string;
    children?: never;
  }

  /**
   * 添加文件
   * @localeEnglish Remotely add an asset to the target node.
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
   * 复制文件
   * @localeEnglish Copy a file from a remote node.
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
   * 给任务中心添加任务
   * @localeEnglish Add a mission file to a mission hub.
   * @example
   * ```xml
   * <AddMissionToHubServer MissionFilepath="Missions/HubMission.xml" TargetComp="missionHub" AssignmentTag="Kaguya" StartsComplete="true"/>
   * ```
   */
  export interface AddMissionToHubServer {
    MissionFilepath: string;
    TargetComp: string;
    AssignmentTag?: string;
    children?: never;
  }

  /**
   * 从任务中心删除任务
   * @localeEnglish Remove a mission file from a mission hub.
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
   * 给一个和原主线剧情的 /el 论坛那样的论坛添加帖子
   * @localeEnglish Add a thread to an /el Sec-like board.
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
   * 给 IRC/DHS 添加聊天记录。
   *
   * IRC(DHS)聊天记录添加的 Delay 所需缓存内容在IRC(DHS)的 runtime 目录生成，而不是 DelayHost，因此该 Task 可以在不需要 `DelayHost`的情况下被 `Delay`。以下为在IRC(DHS)节点的 `runtime` 目录位置:
   * - IRC: `/IRC/runtime`
   * - IRCHub(DHS): `/HomeBase/runtime`
   * @localeEnglish Add a generic IRC message.
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
    Delay?: number;
    children: string;
  }

  /**
   * 使节点崩溃，相当于给一个节点运行`forkbomb`。
   * @localeEnglish Crash a node
   * @example
   * ```xml
   * <CrashComputer TargetComp="playerComp" CrashSource="enemyNode" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface CrashComputer {
    TargetComp: string;
    CrashSource: string;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 删除文件。
   * @localeEnglish Delete a file.
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
    Delay?: number;
    children?: never;
  }

  /**
   * 加载一个新的 Action。
   *
   * 注：Action 不可以通过 Task AddConditionalActions 加载自己
   * @localeEnglish Load in a new action file.
   * @example
   * ```xml
   * <AddConditionalActions Filepath="Actions/NextAction.xml" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface AddConditionalActions {
    Filepath: string;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 保存游戏
   * @localeEnglish Save the game.
   * @example
   * ```xml
   * <SaveGame DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface SaveGame {
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 加载一个 HackerScript
   * @localeEnglish Launch a hacker script.
   * @example
   * ```xml
   * <LaunchHackScript Filepath="Scripts/HackerScript.txt" DelayHost="delayNode" Delay="0" SourceComp="enemyNode" TargetComp="playerComp" RequireLogsOnSource="false" RequireSourceIntact="true"/>
   * ```
   */
  export interface LaunchHackScript {
    Filepath: string;
    SourceComp?: string;
    TargetComp?: string;
    RequireLogsOnSource?: boolean;
    RequireSourceIntact?: boolean;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }
  /**
   * 在闪烁 UI 中更改 theme
   * @localeEnglish Flicker the player into a new theme.
   * @example
   * ```xml
   * <SwitchToTheme ThemePathOrName="Themes/ExampleTheme.xml" FlickerInDuration="3.0" DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface SwitchToTheme {
    ThemePathOrName: string;
    FlickerInDuration: number;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 开始红屏效果，常用于搭配 Sequencers。关闭它的 Task 是 {@link CancelScreenBleedEffect}
   * @localeEnglish Start a screen bleed effect, mostly used in sequencers. Task to stop it is {@link CancelScreenBleedEffect}
   * @example
   * ```xml
   * <StartScreenBleedEffect AlertTitle="Sequencer Attack" CompleteAction="Actions/ScreenBleedFailed.xml" TotalDurationSeconds="0" DelayHost="delayNode" Delay="0">Break into the Moonshine servers
   * Delete all files and backups
   * Get out of there!</StartScreenBleedEffect>
   * ```
   */
  export interface StartScreenBleedEffect {
    AlertTitle: string;
    CompleteAction: string;
    TotalDurationSeconds: string;
    DelayHost?: string;
    Delay?: number;
    children: string;
  }

  /**
   * Stop a screen bleed effect. Task to start it is {@link StartScreenBleedEffect}
   * @localeEnglish 停止红屏效果。开始红屏效果的 Task 是 {@link StartScreenBleedEffect}
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
   * @localeEnglish 给一个文件的末尾添加内容。
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
   * 结束当前运行的 exe 进程。
   * @localeEnglish Kill any currently running exe with the title.
   * @example
   * ```xml
   * <KillExe DelayHost="delayNode" Delay="0" ExeName="*"/>
   * ```
   */
  export interface KillExe {
    /**
     * Use `*` to kill all currently running executables.
     * 使用 `*` 来结束所有 exe 进程。
     */
    ExeName: string;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 从 `NetMap` 中隐藏 Node
   * @localeEnglish Hide a node from the NetMap.
   * @example
   * ```xml
   * <HideNode DelayHost="delayNode" Delay="0" TargetComp="companySecurity"/>
   * ```
   */
  export interface HideNode {
    TargetComp: string;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 给玩家一个已经存在的账号使得玩家可以在相关节点上自动登录。
   * @localeEnglish Give the player an existing account so they can automatically login to the specified node.
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
   * 给某个节点更改 IP。
   * @localeEnglish Change the IP of a specified node.
   * @example
   * ```xml
   * <ChangeIP  DelayHost="delayNode" Delay="0" TargetComp="finalNode" NewIP="123.123.123.123"/>
   * ```
   */
  export interface ChangeIP {
    TargetComp: string;
    /**
     * Leave it blank for a random IP.
     * 不声明该属性可以使更改后的 IP 随机。
     */
    NewIP?: string;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 从 `NetMap` 中隐藏所有 Node
   * @localeEnglish Hides all nodes visible on the NetMap.
   * @example
   * ```xml
   * <HideAllNodes DelayHost="delayNode" Delay="0"/>
   * ```
   */
  export interface HideAllNodes {
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * 使 Node 在 `NetMap` 上出现
   * @localeEnglish Reveals a node on the NetMap.
   * @example
   * ```xml
   * <ShowNode DelayHost="delayNode" Delay="0" Target="storageServer"/>
   * ```
   */
  export interface ShowNode {
    Target: string;
    DelayHost?: string;
    Delay?: number;
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
    Module: "terminal" | "ram" | "netmap" | "display";
    IsLocked: boolean;
    IsHidden: boolean;
    DelayHost?: string;
    Delay?: number;
    children?: never;
  }

  /**
   * （需要DLC）更改右上角图标。
   * @localeEnglish LABYRINTHS DLC ONLY - Change the mail icon to irc, irchub, board, or mail.
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
   * 改变 `netmap` 的排序方式
   * @localeEnglish Change the way the netmap is sorted.
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

/**
 * 所有类型的 Task.
 * @localeEnglish all types of Task
 */
export type AllTasks =
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

export type TaskElement = void | AllTasks | AllTasks[];
