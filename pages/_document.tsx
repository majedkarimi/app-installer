import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head />
      <body>
        <div id="overlay"></div>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
