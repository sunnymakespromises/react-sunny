import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Responsive({portrait = false, landscape = false, children}) {
    const [isClient, setIsClient] = useState(false)
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isLandscape = useMediaQuery({ orientation: 'landscape' })
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        } 
    }, []);
    if (isClient) {
        if (portrait && isPortrait) {
            return (
                <>
                    {children}
                </>
            )
        }
        else if (landscape && isLandscape) {
            return (
                <>
                    {children}
                </>
            )
        }
        else {
            return <></>
        }
    }
    else {
        return <></>
    }
}

export function isPortrait({ }) {
    const [isClient, setIsClient] = useState(false)
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') { setIsClient(true); } 
    }, [])
    if (isClient) {
        return isPortrait
    }
    else { return false }
}

export function isLandscape({ }) {
    const [isClient, setIsClient] = useState(false)
    const isLandscape = useMediaQuery({ orientation: 'landscape' })
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') { setIsClient(true); } 
    }, [])
    if (isClient) {
        return isLandscape
    }
    else { return false }
}