import { atom } from "jotai";

export const jotaiStore = atom({
  status: "ok",
  owner: "Martín M.",
  counter: 0
});
