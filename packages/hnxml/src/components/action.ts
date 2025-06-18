import type { HXConditionalActions } from "../standard/action/index.ts";
import { Task } from "../standard/action/task.ts";
import { Trigger } from "../standard/action/trigger.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ConditionalActions: HXConditionalActions;
      OnConnect: Trigger.OnConnect;
      HasFlays: Trigger.HasFlags;
      OnAdminGained: Trigger.OnAdminGained;
      Instantly: Trigger.Instantly;
      OnDisconnect: Trigger.OnDisconnect;
      RunFunction: Task.RunFunction
      LoadMission: Task.LoadMission
      AddAsset: Task.AddAsset
      CopyAsset: Task.CopyAsset
      AddMissionToHubServer: Task.AddMissionToHubServer
      RemoveMissionFromHubServer: Task.RemoveMissionFromHubServer
      AddThreadToMissionBoard: Task.AddThreadToMissionBoard
      AddIRCMessage: Task.AddIRCMessage
      CrashComputer: Task.CrashComputer
      DeleteFile: Task.DeleteFile
      AddConditionalActions: Task.AddConditionalActions
      SaveGame: Task.SaveGame
      LaunchHackScript: Task.LaunchHackScript
      SwitchToTheme: Task.SwitchToTheme
      StartScreenBleedEffect: Task.StartScreenBleedEffect
      CancelScreenBleedEffect: Task.CancelScreenBleedEffect
      AppendToFile: Task.AppendToFile
      KillExe: Task.KillExe
      HideNode: Task.HideNode
      GivePlayerUserAccount: Task.GivePlayerUserAccount
      ChangeIP: Task.ChangeIP
      HideAllNodes: Task.HideAllNodes
      ShowNode: Task.ShowNode
      SetLock: Task.SetLock
      ChangeAlertIcon: Task.ChangeAlertIcon
      ChangeNetmapSortMethod: Task.ChangeNetmapSortMethod
    }
  }
}
