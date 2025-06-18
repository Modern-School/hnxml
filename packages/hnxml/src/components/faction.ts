import { HXCustomFaction } from "../standard/faction/index.ts";
import { FactionTrigger } from "../standard/faction/index.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      CustomFaction: HXCustomFaction;
      Action: FactionTrigger;
    }
  }
}
