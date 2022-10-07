import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Responsive({mobile = false, desktop = false, children}) {
    const [isClient, setIsClient] = useState(false);
    const isMobile = useMediaQuery({ orientation: 'portrait' });
    const isDesktop = useMediaQuery({ orientation: 'landscape' });
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        } 
    }, []);
    if (isClient) {
        if (mobile && isMobile) {
            return (
                <>
                    {children}
                </>
            )
        }
        else if (desktop && isDesktop) {
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

export function isMobile({ }) {
    const [isClient, setIsClient] = useState(false);
    const isMobile = useMediaQuery({ orientation: 'portrait' });
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') { setIsClient(true); } 
    }, []);
    if (isClient) {
        return isMobile;
    }
    else { return false }
}

export function isDesktop({ }) {
    const [isClient, setIsClient] = useState(false);
    const isDesktop = useMediaQuery({ orientation: 'landscape' });
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') { setIsClient(true); } 
    }, []);
    if (isClient) {
        return isDesktop;
    }
    else { return false }
}