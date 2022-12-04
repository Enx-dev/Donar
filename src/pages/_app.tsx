import type { AppProps } from "next/app";
import { DonarProvider } from "../DonarBackend/Donar";
import "../styles/index.css";
// import "@fontsource/play";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DonarProvider>
      <Component {...pageProps} />{" "}
    </DonarProvider>
  );
}
