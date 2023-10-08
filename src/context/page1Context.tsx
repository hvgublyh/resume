import {createContext} from 'react';

export interface IInfoContext {
  origin: string;
  modifyOrigin?: (origin:string) => void;
}

const defaultState = {
  origin: '',
}

export const InfoContext = createContext<IInfoContext>(defaultState)