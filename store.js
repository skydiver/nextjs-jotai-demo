import { atom } from "jotai";

export const pageStore = atom({
  status: "ok",
  owner: "Martín M.",
  counter: 0
});
