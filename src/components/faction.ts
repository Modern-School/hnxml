import { HXCustomFaction } from "../standard/faction/index.ts";
import { FactionTrigger } from "../standard/faction/index.ts";

/**
 * Faction's IntrinsicElements
 */
export interface FactionElements {
  CustomFaction: HXCustomFaction;
  Action: FactionTrigger;
}
export const CustomFaction = "CustomFaction";
export const Action = "Action";
