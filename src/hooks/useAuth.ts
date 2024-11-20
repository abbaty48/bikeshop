import { AuthContext } from "@states/contexts/authContext";
import { useContext } from "react";

export function useAuth() { return useContext(AuthContext) }
