import type { HXConditionalActions } from "../standard/action/index.tsx";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      conditionalactions: HXConditionalActions;
    }
  }
}
