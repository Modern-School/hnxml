# hnxml.js

A TypeScript implementation of Hacknet Extension XML.

Work in progress

## Usage

Add package `@modernschoolproject/hnxml`

```bash
# deno 
deno add jsr:@modernschoolproject/hnxml
# npm
npx jsr add @modernschoolproject/hnxml
# yarn
yarn add jsr:@modernschoolproject/hnxml
# pnpm
pnpm i jsr:@modernschoolproject/hnxml
# bun
bunx jsr add @modernschoolproject/hnxml
```

Edit the `tsconfig.json` or `compilerOptions` in `deno.json`

```json
{
  "jsx": "react-jsx",
  "jsxImportSource": "@modernschoolproject/hnxml"
}
```

## Example

```ts
import { render } from "@modernschoolproject/hnxml";

declare module "@modernschoolproject/hnxml/jsx-runtime" {
  namespace JSX {
    type IntrinsicElements =
      import("@modernschoolproject/hnxml/jsx/mission").Elements;
  }
}

console.log(
  render(
    <mission id="awa" activeCheck="true" shouldIgnoreSenderVerification="true">
      {undefined}
    </mission>,
  ).end({ headless: true, allowEmptyTags: true }),
);
```
