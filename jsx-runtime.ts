export { Fragment, jsx, jsxs } from "jsx-xml/jsx-runtime";
export type {
  JsxXmlComponentElement,
  JsxXmlElement,
  JsxXmlTagElement,
} from "jsx-xml/jsx-runtime";

import { TriggerElements } from "./src/components/action.ts";
import { ComputerElements } from "./src/components/computer.ts";
import { FactionElements } from "./src/components/faction.ts";
import { InfoElements } from "./src/components/info.ts";
import { MissionElements } from "./src/components/mission.ts";
import { TaskElements } from "./src/components/task.ts";
/**
 * the JSX namespace for using hnxml with JSX/TSX
 */
export namespace JSX {
  export type IntrinsicElements =
    & TriggerElements
    & ComputerElements
    & FactionElements
    & InfoElements
    & MissionElements
    & TaskElements;
}
