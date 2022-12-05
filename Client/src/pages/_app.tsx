import type { AppProps } from "next/app";
import "../styles/index.css";
import { DonarProvider } from "../DonarBackend/Donar";
// import "@fontsource/play";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DonarProvider>
      <Component {...pageProps} />{" "}
    </DonarProvider>
  );
}