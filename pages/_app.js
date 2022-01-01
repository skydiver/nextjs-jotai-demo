import { useHydrateAtoms } from "jotai/utils";
import { jotaiStore } from "../store/jotaiStore";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const { initialState } = pageProps;

  useHydrateAtoms(initialState ? [[jotaiStore, initialState]] : []);

  return <Component {...pageProps} />;
}
