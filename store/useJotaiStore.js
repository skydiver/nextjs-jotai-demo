import { useAtom } from "jotai";
import { jotaiStore } from "./jotaiStore";

export function useJotaiStore() {

  const [state, setState] = useAtom(jotaiStore);

  const updateStateProp = (property, value) => {
    setState({
      ...state,
      [property]: value
    });
  }

  return {state, updateStateProp};
}