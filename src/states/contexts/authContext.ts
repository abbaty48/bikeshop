import { TAuthStates } from "@libs/types";
import { createContext } from "react";

export const AuthContext = createContext<TAuthStates>({} as TAuthStates)
