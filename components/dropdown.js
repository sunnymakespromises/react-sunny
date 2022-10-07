import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { DropdownProvider, useDropdownContext } from './dropdownContext'
import Container from './container'

const Wrapper = forwardRef(({ children, container = false, ...extras }, wrapperRef) => {
    const { expanding } = useDropdownContext()
    const [ , , , trigger ] = expanding
    if (trigger == 'header') {
        if (Object.keys(extras).length != 0 || container) {
            return (
                <Button>
                    <Container {...extras} ref = {wrapperRef}>
                            {children}
                    </Container>
                </Button>
            )
        }
        else {
            return (
                <Button>
                    {React.cloneElement(children, { ref: wrapperRef })}
                </Button>
            )
        }
    }
    else {
        if (Object.keys(extras).length != 0 || container) {
            return (
                <Container {...extras} canClick ref = {wrapperRef}>
                    {children}
                </Container>
            )
        }
        else {
            return (
                React.cloneElement(children, { canClick: true, ref: wrapperRef })
            )
        }
    }
})

export function Header({ children, container = false, ...extras }) {
    if (Object.keys(extras).length != 0 || container) {
        return (
            <Container {...extras}>
                { children }
            </Container>
        )
    }
    else {
        return (
            <>
                {children}
            </>
        )
    }
}

export function List({ children, container = false, ...extras }) {
    if (Object.keys(extras).length != 0 || container) {
        return (
            <Container {...extras}>
                { children }
            </Container>
        )
    }
    else {
        return (
            <>
                {children}
            </>
        )
    }
}

export function Option({ children, value, onSelect = null, container = false,  ...extras }) {
    const { selecting } = useDropdownContext()
    const [ selection , select ] = selecting
    if (select != undefined && selection != null) {
        onSelect = select
    }
    if (Object.keys(extras).length != 0 || container) {
        return (
            <Container {...extras} canClick {...{onClick: () => onSelect(value)}}>
                {children}
            </Container>
        )
    }
    else {
        return (
            React.cloneElement(children, { canClick: true, onClick: () => onSelect(value) })
        )
    }
}

export function Button({ children, container = false, ...extras }) {
    const { expanding } = useDropdownContext()
    const [ , toggle, behavior, ] = expanding
    const event = behavior == 'hover' ? { onMouseEnter: toggle, onMouseLeave: toggle } : { onClick: toggle } 
    if (Object.keys(extras).length != 0 || container) {
        return (
            <Container {...extras} canClick {...event}>
                {children}
            </Container>
        )
    }
    else {
        return (
            React.cloneElement(children, { canClick: true, ...event })
        )
    }
}

export default function Dropdown({ behavior, trigger, onToggle, onSelect = null, children, container = false, ...extras }) {
    const wrapperRef = useRef()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                toggle(false)
            }
        }
        window.addEventListener('click', handleClickOutside, true)
        return () => {
            window.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    const [isExpanded, setIsExpanded] = useState(false)
    const toggle = ( value ) => {
        if (value != true && value != false) {
            setIsExpanded(!isExpanded)
            if (onToggle != null) {
                onToggle(!isExpanded)
            }
        }
        else {
            setIsExpanded(value)
            if (onToggle != null) {
                onToggle(value)
            }
        }
    }

    const expanding = { expanding: [isExpanded, toggle, behavior, trigger] }

    var selecting = { selecting }
    if (onSelect != null) {
        const [selection, setSelection] = useState(null)
        const select = (value) => {
            setSelection(value)
            onSelect(value)
        }
        selecting = { selecting: [selection, select] }
    }

    return (
        <DropdownProvider value = {{ ...expanding, ...selecting  }}>
            <Wrapper ref = {wrapperRef} container {...extras}>
                {children}
            </Wrapper>
        </DropdownProvider>
    ) 
}