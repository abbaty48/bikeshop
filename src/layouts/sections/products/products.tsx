import { useFragmentLink } from "@components/fragmentLink/useFragmentLink";
import { useInView } from "@react-spring/web";
import View from "@sections/products/view";
import { useMemo } from "react";

export default function Products() {
    const { params } = useFragmentLink()
    const [ref, isIntersected] = useInView()

    const Fragment = useMemo(() => {
        return params?.['type'] === 'bikes' ? <View kind="bikes" header="Cycles" /> :
            <View kind="accessories" header="Cycles Accessories." />
    }, [params])

    return (
        <article id={'products'} ref={ref} className="h-fit">
            {isIntersected && Fragment}
        </article>
    )
}
