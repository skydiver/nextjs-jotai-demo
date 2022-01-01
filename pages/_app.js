import { useHydrateAtoms } from "jotai/utils";
import { pageStore } from "../store";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const { initialState } = pageProps;

  useHydrateAtoms(initialState ? [[pageStore, initialState]] : []);

  return <Component {...pageProps} />;
}
