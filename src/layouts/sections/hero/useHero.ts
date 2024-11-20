import { useSessionAPI } from "@hooks/api/useSessionAPI"
import { useAuth } from "@hooks/useAuth"
import { useCallback, useState } from "react"

type TProps = {
    video: React.RefObject<HTMLVideoElement>
}
export function useHero({ video }: TProps) {
    const { unSession, setSession } = useSessionAPI()
    const [onVideo, setOnVideo] = useState(false)
    const [isPlayed, setIsPlayed] = useState(false)
    const { userProfile } = useAuth()

    const isAuth = userProfile !== null;

    const playAt = useCallback(async (index: number) => {
        const videoSrc = [
            "https://videos.pexels.com/video-files/5790079/5790079-hd_1920_1080_30fps.mp4",
            "https://videos.pexels.com/video-files/5789979/5789979-hd_1920_1080_30fps.mp4",
            "https://videos.pexels.com/video-files/5790177/5790177-hd_1920_1080_30fps.mp4" // substitute this with another one
        ];
        if (!video.current) return
        video.current.src = videoSrc[index]
        await video.current.play()
    }, [])

    const toggleVideoOn = useCallback(async () => {
        await video.current?.play();
        setIsPlayed(true)
        // video.current?.addEventListener('play', () => setIsPlayed(true))
        video.current?.addEventListener('playing', () => setOnVideo(true))
        video.current?.addEventListener('pause', () => setOnVideo(false))
    }, [])

    const handleSession = useCallback((e: React.MouseEvent<HTMLAnchorElement | undefined>) => {
        e.preventDefault();
        if (isAuth) unSession();
        else setSession();
    }, [userProfile])

    return { isAuth, isPlayed, onVideo, playAt, toggleVideoOn, handleSession }
}
