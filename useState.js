import { useAtom } from "jotai";
import { pageStore } from "./store";

export function useState() {

  const [state, updateState] = useAtom(pageStore);

  const setState = (property, value) => {
    updateState({
      ...state,
      [property]: value
    });
  }

  return [state, setState];
}