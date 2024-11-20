import { useSessionAPI } from '@hooks/api/useSessionAPI'
import { LiaLuggageCartSolid } from 'react-icons/lia'
import { CiLogout } from 'react-icons/ci'
import Fab from '@components/fab'

export default function UserFab() {
    const { unSession } = useSessionAPI()
    return (
        <Fab actions={[
            { label: "Logout", icon: <CiLogout />, onClick: unSession },
            { label: "Carts", icon: <LiaLuggageCartSolid />, onClick: console.log },
        ]} />
    )
}
