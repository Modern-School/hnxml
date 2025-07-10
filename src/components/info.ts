import { HacknetExtension } from "../standard/info/index.ts";

/**
 * ExtensionInfo's IntrinsicElements
 */
export interface Elements {
  HacknetExtension: HacknetExtension.root;
  Language: HacknetExtension.Language;
  Name: HacknetExtension.Name;
  AllowSaves: HacknetExtension.AllowSaves;
  StartingVisibleNodes: HacknetExtension.StartingVisibleNodes;
  StartingMission: HacknetExtension.StartingMission;
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
