/**
 * Used like setFaction:entropy, sets the player's current faction to the faction with the given idName
 */
export const setFaction = (FACTION_ID: string): string =>
  `setFaction:${FACTION_ID}`;

/**
 * This adds val in rank to the player's current active faction
 */
export const addRank = (): string => `addRank`;

/**
 * Same as AddRank, but it won't send a faction update report email
 */
export const addRankSilent = (): string => `addRankSilent`;

/**
 * this adds the val to the specified faction. I.E: "addRankFaction:CSEC"
 */
export const addRankFaction = (FACTION_NAME: string): string =>
  `addRankFaction:${FACTION_NAME}`;
/**
 * Adds the defined (1 or more) flags to the current session. Flags can unlock missions and do other tasks
 */
export const addFlags = (...args: string[]): string =>
  `addFlags:${args.join(",")}`;

/**
 * Removes the listed flags if they exist.
 */
export const removeFlags = (...args: string[]): string =>
  `removeFlags:${args.join(",")}`;

/**
 * changes to the song defined in val:
 * ```c#
 * // This is how it's implemented in the game. Language: C#
 * switch (value)
 * {
 * default:
 *   MusicManager.transitionToSong("Music\\Revolve");
 *   break;
 * case 2:
 *   MusicManager.transitionToSong("Music\\The_Quickening");
 *   break;
 * case 3:
 *   MusicManager.transitionToSong("Music\\TheAlgorithm");
 *   break;
 * case 4:
 *   MusicManager.transitionToSong("Music\\Ryan3");
 *   break;
 * case 5:
 *   MusicManager.transitionToSong("Music\\Bit(Ending)");
 *   break;
 * case 6:
 *   MusicManager.transitionToSong("Music\\Rico_Puestel-Roja_Drifts_By");
 *   break;
 * case 7:
 *   MusicManager.transitionToSong("Music\\out_run_the_wolves");
 *   break;
 * case 8:
 *   MusicManager.transitionToSong("Music\\Irritations");
 *   break;
 * case 9:
 *   MusicManager.transitionToSong("Music\\Broken_Boy");
 *   break;
 * case 10:
 *   MusicManager.transitionToSong("Music\\Ryan10");
 *   break;
 * case 11:
 *   MusicManager.transitionToSong("Music\\tetrameth");
 *   break;
 * }
 */
export const changeSong = (): string => `changeSong`;

/**
 * Load in a new action file.
 */
export const loadConditionalActions = (path: string): string =>
  `loadConditionalActions:${path}`;

/**
 * Sets the server with the given ID to be the new hub server visually on the netmap.
 *
 * this adds the little spinny things around it, like CSEC has in the base game.
 */
export const setHubServer = (SERVER_ID: string): string =>
  `setHubServer:${SERVER_ID}`;

/**
 * Sets the server with the given ID to be the new asset server visually on the netmap.
 *
 * this adds the little star inside it
 */
export const setAssetServer = (SERVER_ID: string): string =>
  `setAssetServer:${SERVER_ID}`;

/**
 * Fades the music into the song file specified. Needs the whole path like: Music/Song.ogg
 *
 * Songs must be in Ogg Vorbis (.ogg) format\
 * Songs will not play on the XNA branch!
 */
export const playCustomSong = (PATH_TO_SONG: string): string =>
  `playCustomSong:${PATH_TO_SONG}`;

/**
 * Plays the specified song above without the fade in - instantly snaps to it.
 */
export const playCustomSongImmediatley = (PATH_TO_SONG: string): string =>
  `playCustomSongImmediatley:${PATH_TO_SONG}`;

/**
 * Plays the specified song above without the fade in - instantly snaps to it.
 *
 * This function fixes Matt's mistake of writing `Immediatley` instead of `Immediately`.
 * @see {@link playCustomSongImmediatley}
 */
export const playCustomSongImmediately = playCustomSongImmediatley;

/**
 * ```c#
 * // This is how it's implemented in the game. Language: C#
 * switch (value)
 * {
 * default:
 *   MusicManager.transitionToSong("DLC\\Music\\Remi2");
 *   break;
 * case 2:
 *   MusicManager.transitionToSong("DLC\\Music\\snidelyWhiplash");
 *   break;
 * case 3:
 *   MusicManager.transitionToSong("DLC\\Music\\Slow_Motion");
 *   break;
 * case 4:
 *   MusicManager.transitionToSong("DLC\\Music\\World_Chase");
 *   break;
 * case 5:
 *   MusicManager.transitionToSong("DLC\\Music\\HOME_Resonance");
 *   break;
 * case 6:
 *   MusicManager.transitionToSong("DLC\\Music\\Remi_Finale");
 *   break;
 * case 7:
 *   MusicManager.transitionToSong("DLC\\Music\\RemiDrone");
 *   break;
 * case 8:
 *   MusicManager.transitionToSong("DLC\\Music\\DreamHead");
 *   break;
 * case 9:
 *   MusicManager.transitionToSong("DLC\\Music\\Userspacelike");
 *   break;
 * case 10:
 *   MusicManager.transitionToSong("DLC\\Music\\CrashTrack");
 *   break;
 * }
 * ```
 */
export const changeSongDLC = (): string => `changeSongDLC`;

export default {
  setFaction,
  addRank,
  addRankSilent,
  addFlags,
  removeFlags,
  changeSong,
  loadConditionalActions,
  setHubServer,
  setAssetServer,
  playCustomSong,
  playCustomSongImmediately,
  playCustomSongImmediatley,
  changeSongDLC,
};
