import { HXCustomFaction } from "../standard/faction/index.ts";
import { FactionTrigger } from "../standard/faction/index.ts";

/**
 * Faction's IntrinsicElements
 */
export interface Elements {
  CustomFaction: HXCustomFaction;
  Action: FactionTrigger;
}
