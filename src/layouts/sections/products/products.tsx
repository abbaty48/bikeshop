import { useFragmentLink } from "@components/fragmentLink/useFragmentLink";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import View from "@sections/products/view";
import { useMemo, useRef } from "react";

export default function Products() {
    const { params } = useFragmentLink()
    const ref1 = useRef<HTMLElement | null>(null)
    const isIntersected = useIntersectionObserver(ref1, { threshold: 0.25 })

    const Fragment = useMemo(() => {
        return params?.['type'] === 'bikes' ? <View kind="bikes" header="Cycles" /> :
            <View kind="accessories" header="Cycles Accessories." />
    }, [params])

    return (
        <article id={'products'} ref={ref1} className="h-fit">
            {isIntersected && Fragment}
        </article>
    )
}
