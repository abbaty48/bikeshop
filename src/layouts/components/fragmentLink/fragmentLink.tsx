import { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react'
import { useFragmentLink } from './useFragmentLink'

type TProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
    to: string,
    active?: boolean,
    params?: Record<string, any>,
}
export default function FragmentLink({ children, params, to, ...rest }: TProps) {
    const { mutateFragmentState } = useFragmentLink()
    const handleClick = (_: MouseEvent<HTMLAnchorElement | undefined>) => {
        mutateFragmentState(({ ...location, params }))
    }
    return (<a href={to} {...rest} onClick={handleClick}>{children}</a>)
}
