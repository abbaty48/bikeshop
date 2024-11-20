import { PropsWithChildren, useCallback, useEffect, useState } from "react"
import { FragmentLinkContext, FragmentLinkState } from './fragmentLinkContext'

export default function FragmentLinkProvider({ children }: PropsWithChildren) {

    const [fragmentState, setFragmentState] = useState<FragmentLinkState>({ ...window.location })
    useEffect(() => { window.addEventListener('hashchange', (_) => { mutateFragmentState({ ...fragmentState, ...location }) }) }, [])
    const mutateFragmentState = useCallback((state: Partial<FragmentLinkState>) => { setFragmentState(s => ({ ...s, ...state })) }, [])

    return (<FragmentLinkContext.Provider value={{ ...fragmentState, mutateFragmentState }}>{children}</FragmentLinkContext.Provider>)
}
