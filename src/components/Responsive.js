import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Responsive({portrait = false, landscape = false, children}) {
    const [isClient, setIsClient] = useState(false)
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isLandscape = useMediaQuery({ orientation: 'landscape' })
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        } 
    }, [])
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

function getAspect() {
    const { innerWidth: width, innerHeight: height } = window
    return width/height
}

export function aspectRatio() {
    const [aspect, setAspect] = useState(getAspect())
    useEffect(() => {
        function handleResize() {
            setAspect(getAspect())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return aspect
}

export function isLandscape() {
    const [aspect, setAspect] = useState(getAspect())
    useEffect(() => {
        function handleResize() {
            setAspect(getAspect())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (aspect > 1)
}

export function isPortrait() {
    const [aspect, setAspect] = useState(getAspect())
    useEffect(() => {
        function handleResize() {
            setAspect(getAspect())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (aspect < 1)
}