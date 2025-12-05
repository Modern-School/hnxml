import { Task } from "../standard/action/task.ts";

/**
 * Action Task's IntrinsicElements
 */
export interface TaskElements {
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
export const RunFunction = "RunFunction";
export const LoadMission = "LoadMission";
export const AddAsset = "AddAsset";
export const CopyAsset = "CopyAsset";
export const AddMissionToHubServer = "AddMissionToHubServer";
export const RemoveMissionFromHubServer = "RemoveMissionFromHubServer";
export const AddThreadToMissionBoard = "AddThreadToMissionBoard";
export const AddIRCMessage = "AddIRCMessage";
export const CrashComputer = "CrashComputer";
export const DeleteFile = "DeleteFile";
export const AddConditionalActions = "AddConditionalActions";
export const SaveGame = "SaveGame";
export const LaunchHackScript = "LaunchHackScript";
export const SwitchToTheme = "SwitchToTheme";
export const StartScreenBleedEffect = "StartScreenBleedEffect";
export const CancelScreenBleedEffect = "CancelScreenBleedEffect";
export const AppendToFile = "AppendToFile";
export const KillExe = "KillExe";
export const HideNode = "HideNode";
export const GivePlayerUserAccount = "GivePlayerUserAccount";
export const ChangeIP = "ChangeIP";
export const HideAllNodes = "HideAllNodes";
export const ShowNode = "ShowNode";
export const SetLock = "SetLock";
export const ChangeAlertIcon = "ChangeAlertIcon";
export const ChangeNetmapSortMethod = "ChangeNetmapSortMethod";
