import { HacknetExtension } from "../standard/info/index.ts";

/**
 * ExtensionInfo's IntrinsicElements
 */
export interface InfoElements {
  HacknetExtension: HacknetExtension.root;
  Language: HacknetExtension.Language;
  Name: HacknetExtension.Name;
  AllowSaves: HacknetExtension.AllowSaves;
  StartingVisibleNodes: HacknetExtension.StartingVisibleNodes;
  StartingMission: HacknetExtension.StartingMission;
  StartingActions: HacknetExtension.StartingActions;
  Description: HacknetExtension.Description;
  Faction: HacknetExtension.Faction;
  StartsWithTutorial: HacknetExtension.StartsWithTutorial;
  HasIntroStartup: HacknetExtension.HasIntroStartup;
  StartingTheme: HacknetExtension.StartingTheme;
  IntroStartupSong: HacknetExtension.IntroStartupSong;
  SequencerTargetID: HacknetExtension.SequencerTargetID;
  SequencerSpinUpTime: HacknetExtension.SequencerSpinUpTime;
  SequencerFlagRequiredForStart: HacknetExtension.SequencerFlagRequiredForStart;
  ActionsToRunOnSequencerStart: HacknetExtension.ActionsToRunOnSequencerStart;
  WorkshopDescription: HacknetExtension.WorkshopDescription;
  WorkshopLanguage: HacknetExtension.WorkshopLanguage;
  WorkshopVisibility: HacknetExtension.WorkshopVisibility;
  WorkshopTags: HacknetExtension.WorkshopTags;
  WorkshopPreviewImagePath: HacknetExtension.WorkshopPreviewImagePath;
  WorkshopPublishID: HacknetExtension.WorkshopPublishID;
}

const _HacknetExtension = "HacknetExtension";
export { _HacknetExtension as HacknetExtension };
export const Language = "Language";
export const Name = "Name";
export const AllowSaves = "AllowSaves";
export const StartingVisibleNodes = "StartingVisibleNodes";
export const StartingMission = "StartingMission";
export const StartingActions = "StartingActions";
export const Description = "Description";
export const Faction = "Faction";
export const StartsWithTutorial = "StartsWithTutorial";
export const HasIntroStartup = "HasIntroStartup";
export const StartingTheme = "StartingTheme";
export const IntroStartupSong = "IntroStartupSong";
export const SequencerTargetID = "SequencerTargetID";
export const SequencerSpinUpTime = "SequencerSpinUpTime";
export const SequencerFlagRequiredForStart = "SequencerFlagRequiredForStart";
export const ActionsToRunOnSequencerStart = "ActionsToRunOnSequencerStart";
export const WorkshopDescription = "WorkshopDescription";
export const WorkshopLanguage = "WorkshopLanguage";
export const WorkshopVisibility = "WorkshopVisibility";
export const WorkshopTags = "WorkshopTags";
export const WorkshopPreviewImagePath = "WorkshopPreviewImagePath";
export const WorkshopPublishID = "WorkshopPublishID";
