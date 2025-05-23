import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      {/* <link rel="icon" href="/favicon.png" /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
