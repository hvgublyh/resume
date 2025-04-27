import { createContext } from "react";

export type IInfoContext = {
  modifyOrigin?: (origin: string) => void;
  origin: string;
}

const defaultState = {
  origin: "",
};

export const InfoContext = createContext<IInfoContext>(defaultState);
