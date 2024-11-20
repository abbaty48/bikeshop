import { FormEventHandler, useCallback, useState } from "react";
import { RiMenuSearchLine } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

export default function SearchFold({ placeHolder, label, loading, disabled, onSubmit, onAbort }: {
    placeHolder?: string,
    label?: string,
    loading?: boolean,
    disabled?: boolean,
    onAbort?: () => void,
    onSubmit?: FormEventHandler<HTMLFormElement>
}) {
    const [term, setTerm] = useState<string>('')
    const [isExpanded, setIsExpanded] = useState(false)
    const abortSearch = () => { setIsExpanded(false); setTerm(''); onAbort?.call(null); }
    const toggleExpand = () => { setIsExpanded(!isExpanded); isExpanded && onAbort?.call(null); };

    const changeTerm = useCallback((e: React.ChangeEvent<HTMLInputElement> | undefined) => setTerm(e?.target.value ?? ''), [])

    // add onAbort event handler
    return (
        <search className={`sticky top-15 mt-10 z-10 flex items-center justify-between rounded-full bg-c2 overflow-hidden w-max hover:animate-pulse`} aria-expanded={false}>
            {
                loading && <div className={'absolute w-full h-full flex items-center justify-between gap-2  bg-c2'}>
                    <button type={'button'} aria-label='Close and Abort performing the searching.' className='rounded-full p-2 transition-all hover:scale-90'
                        onClick={abortSearch}><CgClose /></button>
                    <div className="flex-1 flex items-center gap-2">
                        <AiOutlineLoading className="animate-spin" />
                        <span>Searching for {term}</span>
                    </div>
                </div>
            }
            {
                isExpanded ?
                    <button type={'button'} aria-label='Close and Abort performing the searching.' className='rounded-full p-2 transition-all hover:scale-90'
                        onClick={toggleExpand}><CgClose /></button> :
                    <button type={'button'} aria-label='Would you like to perform a search for a product?' className='rounded-full p-2 transition-all hover:scale-90'
                        onClick={toggleExpand}><RiMenuSearchLine /></button>
            }
            <form role="search" aria-label={label} aria-expanded="false"
                className={`flex-1 origin-right transition-transform ${isExpanded ? 'inline-block' : 'hidden'}`} onSubmit={onSubmit}>
                <fieldset disabled={loading || disabled} className={'flex gap-1 justify-between items-center bg-c2/50'}>
                    <label className={'flex-1'} autoFocus><input type="search" autoFocus={true} name="term" placeholder={placeHolder} value={term} className={'w-full bg-transparent px-2 py-3 border-none border-l outline-none text-c3 font-light text-xs'} onChange={changeTerm} /></label>
                    <button type="submit" aria-label="Submit searching" disabled={!term} className="px-2 transition-all hover:scale-90 disabled:pointer-events-none disabled:opacity-10" ><CiSearch /></button>
                </fieldset>
            </form>
        </search>
    )
}
