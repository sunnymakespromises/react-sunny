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

function getAspect(window) {
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window
        return width/height
    }
    else {
        return false
    }
}

export function aspectRatio() {
    const [isClient, setIsClient] = useState(false)
    const [aspect, setAspect] = useState(getAspect())
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        } 
    }, [])
    useEffect(() => {
        if (isClient) {
            function handleResize() {
                setAspect(getAspect(window))
            }
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [isClient])
    return aspect
}

export function isLandscape() {
    const [isClient, setIsClient] = useState(false)
    const [aspect, setAspect] = useState(getAspect())
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        } 
    }, [])
    useEffect(() => {
        if (isClient) {
            function handleResize() {
                setAspect(getAspect(window))
            }
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [isClient])
    return (isClient ? aspect > 1 : false)
}

export function isPortrait() {
    const [isClient, setIsClient] = useState(false)
    const [aspect, setAspect] = useState(getAspect())
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        } 
    }, [isClient])
    useEffect(() => {
        if (isClient) {
            function handleResize() {
                console.log('hiya')
                setAspect(getAspect())
            }
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [isClient])
    return (isClient ? aspect < 1 : false)
}