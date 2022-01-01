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

  const updateState = (newState) => {
    setState(newState);
  }

  return {state, updateStateProp, updateState};
}