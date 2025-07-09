import { Task } from "../standard/action/task.ts";

/**
 * Action Task's IntrinsicElements
 */
export interface Elements {
  RunFunction: Task.RunFunction;
  LoadMission: Task.LoadMission;
  AddAsset: Task.AddAsset;
  CopyAsset: Task.CopyAsset;
  AddMissionToHubServer: Task.AddMissionToHubServer;
  RemoveMissionFromHubServer: Task.RemoveMissionFromHubServer;
  AddThreadToMissionBoard: Task.AddThreadToMissionBoard;
  AddIRCMessage: Task.AddIRCMessage;
  CrashComputer: Task.CrashComputer;
  DeleteFile: Task.DeleteFile;
  AddConditionalActions: Task.AddConditionalActions;
  SaveGame: Task.SaveGame;
  LaunchHackScript: Task.LaunchHackScript;
  SwitchToTheme: Task.SwitchToTheme;
  StartScreenBleedEffect: Task.StartScreenBleedEffect;
  CancelScreenBleedEffect: Task.CancelScreenBleedEffect;
  AppendToFile: Task.AppendToFile;
  KillExe: Task.KillExe;
  HideNode: Task.HideNode;
  GivePlayerUserAccount: Task.GivePlayerUserAccount;
  ChangeIP: Task.ChangeIP;
  HideAllNodes: Task.HideAllNodes;
  ShowNode: Task.ShowNode;
  SetLock: Task.SetLock;
  ChangeAlertIcon: Task.ChangeAlertIcon;
  ChangeNetmapSortMethod: Task.ChangeNetmapSortMethod;
}
