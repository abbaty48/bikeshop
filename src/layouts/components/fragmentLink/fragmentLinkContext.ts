import { createContext } from 'react'

type TLocation = Pick<Location, 'hash' | 'host' | 'href' | 'hostname' | 'origin' | 'pathname' | 'search'>
export type FragmentLinkState = TLocation & {
    params?: Record<string, any>
}
export const FragmentLinkContext = createContext({} as FragmentLinkState & { mutateFragmentState: (state: FragmentLinkState) => void })
