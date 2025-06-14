import "./declare.ts";

export interface HXConditionalActions {
  children: void | string;
}

export function ConditionalActions(props: HXConditionalActions) {
  return <conditionalactions {...props}></conditionalactions>;
}

// 测试用
const __xml3 = <ConditionalActions>awa</ConditionalActions>;
