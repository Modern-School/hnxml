export namespace HacknetExtension {
  export type AllInfos =
    | Language
    | Name
    | AllowSaves
    | StartingVisibleNodes
    | StartingMission
    | Description
    | Faction
    | StartsWithTutorial
    | IntroStartupSong
    | SequencerTargetID
    | SequencerSpinUpTime
    | SequencerFlagRequiredForStart
    | ActionsToRunOnSequencerStart
    | WorkshopDescription
    | WorkshopVisibility
    | WorkshopTags
    | WorkshopPreviewImagePath
    | WorkshopPublishID;

  export interface root {
    children: void | AllInfos | AllInfos[];
  }

  /**
   * Extension language
   * Current supported list:
   *  - English : en-us
   *  - German : de-de
   *  - French : fr-be
   *  - Russian : ru-ru
   *  - Spanish : es-ar
   *  - Korean : ko-kr
   *  - Japanese : ja-jp
   *  - Chinese, simplified : zh-cn
   * @example
   * ```xml
   * <Language>en-us</Language>
   * ```
   */
  export interface Language {
    children:
      | "en-us"
      | "de-de"
      | "fr-be"
      | "ru-ru"
      | "es-ar"
      | "ko-kr"
      | "ja-jp"
      | "zh-cn";
  }

  /**
   * Max name length is 128 characters
   */
  export interface Name {
    children: string;
  }
  export interface AllowSaves {
    children: "true" | "false";
  }
  export interface StartingVisibleNodes {
    children: string;
  }
  export interface StartingMission {
    children: string;
  }
  /**
   * Conditional action set that is loaded in as soon as a new session is created
   * This is useful to do setup stuff, like giving the player programs, assigning them a faction etc.
   * If you don't need this, set it to "NONE", or just delete the tag
   */
  export interface StartingActions {
    children: string;
  }
  export interface Description {
    children: string;
  }
  export interface Faction {
    children: string;
  }
  export interface StartsWithTutorial {
    children: "true" | "false";
  }
  export interface HasIntroStartup {
    children: "true" | "false";
  }
  /**
   * Custom Theme path or Base Themes' names
   *
   * Base Themes are named:
   * TerminalOnlyBlack, HacknetBlue, HacknetTeal, HacknetYellow, HackerGreen, HacknetWhite, HacknetPurple, HacknetMint
   */
  export interface StartingTheme {
    children: string;
  }
  export interface IntroStartupSong {
    children: string;
  }

  export interface SequencerTargetID {
    children: string;
  }
  export interface SequencerSpinUpTime {
    children: string;
  }
  export interface SequencerFlagRequiredForStart {
    children: string;
  }
  export interface ActionsToRunOnSequencerStart {
    children: string;
  }

  export interface WorkshopDescription {
    children: string;
  }
  export interface WorkshopLanguage {
    children: string;
  }
  export interface WorkshopVisibility {
    children: "0" | "1" | "2";
  }
  export interface WorkshopTags {
    children: string;
  }
  /**
   * Supported formats are .png, .jpg and .gif
   */
  export interface WorkshopPreviewImagePath {
    children: string;
  }
  export interface WorkshopPublishID {
    children: string | number;
  }
}
