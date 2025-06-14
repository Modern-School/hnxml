import type { HXConditionalActions } from "./index.tsx";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      conditionalactions: HXConditionalActions;
    }
  }
}
