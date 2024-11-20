import { ReactNode, useMemo, useState } from 'react'
import { CgMenu, CgMenuGridO } from 'react-icons/cg'
import { useAuth } from '@hooks/useAuth'

type TFabAction = {
    label: string,
    icon: ReactNode,
    onClick: () => void
}
export default function Fab({ actions }: { actions: TFabAction[] }) {
    const { userProfile } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const onmouseEnter = () => { setIsOpen(true); }
    const onmouseLeave = () => { setIsOpen(false) }

    const onRender = useMemo(() => {
        return userProfile && (<div className={`fab-container ${isOpen && 'open'}`} onMouseEnter={onmouseEnter} onMouseLeave={onmouseLeave} aria-expanded={isOpen} aria-label={isOpen ? 'collapse the fab menu' : 'expand the fab menu.'}>
            <button className='fab-button' aria-label='Expand/Collapse Fab Menu list.'>
                <CgMenu />
                <img src={userProfile?.picture} alt={''} className='absolute inset-0 w-full h-full border-none outline-none rounded-full object-cover'/>
            </button>
            <menu>
                {actions.map((action, i) => <button key={action.label}
                    aria-label={action.label}
                    style={{ transitionDelay: `${i * 25}ms` }}
                    className={`fab-action ${isOpen && 'open'}`} onClick={action.onClick}>
                    {action.icon}
                    <span className="font-oldStandardTT font-semibold">{action.label}</span>
                </button>)}
            </menu>

        </div>
        )
    }, [isOpen, userProfile, actions])

    return onRender
}
