import { ZoomThumbnails } from "./zoomThumbnails";
import { ZoomControls } from "./zoomControls";
import { ZoomImage } from "./zoomImage";
import { useZoom } from "./useZoom";
import { HTMLAttributes } from "react";

type Props = {
    srcSet: {
        base: string,
        thumbnail_1?: string,
        thumbnail_2?: string,
        thumbnail_3?: string,
    };
    zoomScale?: number;
    maxInDepthZoomScale?: number;
} & HTMLAttributes<HTMLElement>

export default function Zoom({ srcSet, zoomScale, maxInDepthZoomScale }: Props) {
    const { scalePercent, isLoading, isFailed, isZoomed, resetZoom, zoomIn, zoomOut, canZoomIn, canZoomOut } = useZoom({
        zoomScale,
        url: srcSet.base,
        maxInDepthZoomScale,
    })

    return (
        <div className="grid grid-rows-[minmax(200px,_1fr)_auto_auto] md:grid-rows-none gap-8 md:grid-cols-[auto_1fr_auto] items-center justify-center md:h-screen">
            {/* controls */}
            <ZoomControls isFailed={isFailed} isZoomed={isZoomed} canZoomIn={canZoomIn} canZoomOut={canZoomOut} zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
            {/* Image */}
            <ZoomImage url={srcSet.base} scalePercentage={scalePercent} isLoading={isLoading} isFailed={isFailed}
                isZoomed={isZoomed} />
            {/* Thumbnails */}
            <ZoomThumbnails srcSet={srcSet} isFailed={isFailed} isLoading={isLoading} />
        </div>
    )
};
