import { useContext } from "react";
import { FragmentLinkContext } from "./fragmentLinkContext";

export function useFragmentLink() {
    return useContext(FragmentLinkContext)
}
