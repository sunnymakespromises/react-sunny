import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { DropdownProvider, useDropdownContext } from './DropdownContext'
import Container from './Container'

const Wrapper = forwardRef(({ children, container = false, ...extras }, wrapperRef) => {
    const { expanding } = useDropdownContext()
    const [ , , , , trigger ] = expanding
    if (trigger == 'header') {
        if (Object.keys(extras).length != 0 || container) {
            return (
                <Activator>
                    <Container {...extras} canClick ref = {wrapperRef}>
                            {children}
                    </Container>
                </Activator>
            )
        }
        else {
            return (
                <Activator>
                    {React.cloneElement(children, { canClick: true, ref: wrapperRef })}
                </Activator>
            )
        }
    }
    else {
        if (Object.keys(extras).length != 0 || container) {
            return (
                <Container {...extras} ref = {wrapperRef}>
                    {children}
                </Container>
            )
        }
        else {
            return (
                React.cloneElement(children, { ref: wrapperRef })
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

export function Option({ children, value, container = false, initial = false, active = true,  ...extras }) {
    const { selecting } = useDropdownContext()
    const [ , select, initialize] = selecting
    useEffect(() => {
        if (initial) {
            initialize(value)
        }
    }, [])
    if (Object.keys(extras).length != 0 || container) {
        if (active) {
            return (
                <Container {...extras} canClick {...{onClick: () => select(value)}}>
                    {children}
                </Container>
            )
        }
        else {
            return (
                <Container {...extras} canClick>
                    {children}
                </Container>
            )
        }
    }
    else {
        if (active) {
            return (
                React.cloneElement(children, { canClick: true, onClick: () => select(value) })
            )
        }
        else {
            return (
                React.cloneElement(children, { canClick: true })
            )
        }
    }
}

export function Button({ children, container = false, ...extras }) {
    const { expanding } = useDropdownContext()
    const [ toggle, open, close, behavior, trigger] = expanding
    if (trigger == 'header') {
        if (Object.keys(extras).length != 0 || container) {
            return (
                <Container {...extras}>
                    {children}
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
    else {
        if (Object.keys(extras).length != 0 || container) {
            return (
                <Activator>
                    <Container {...extras}>
                        {children}
                    </Container>
                </Activator>
            )
        }
        else {
            return (
                <Activator>
                    {children}
                </Activator>
            )
        }
    }
}

function Activator({ children }) {
    const { expanding } = useDropdownContext()
    const [ toggle, open, close, behavior, ] = expanding
    const event = behavior == 'hover' ? { onMouseEnter: open, onMouseLeave: close } : { onClick: toggle }
    return (
        React.cloneElement(children, { canClick: true, ...event })
    )
}

export default function Dropdown({ behavior, trigger, onToggle, onSelect, children, container = false, ...extras }) {
    const wrapperRef = useRef()
    const [selection, setSelection] = useState(null)
    const [isExpanded, setIsExpanded] = useState(false)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                close()
            }
        }
        window.addEventListener('click', handleClickOutside, true)
        return () => {
            window.removeEventListener('click', handleClickOutside, true)
        }
    }, [])
    
    const toggle = ( value ) => {
        if (typeof(value) != 'boolean') {
            if (isExpanded) { close() }
            else { open() }
        }
        else {
            if (value) { open() }
            else { close() }
        }
    }
    const open = () => {
        setIsExpanded(true)
        onToggle(true)
    }
    const close = () => {
        setIsExpanded(false)
        onToggle(false)
    }
    const select = ( value ) => {
        setSelection(value)
        onSelect(value)
    }

    const initialize = ( value ) => {
        if (selection == null) {
            select(value)
        }
    }
    const expanding = { expanding: [toggle, open, close, behavior, trigger] }
    const selecting = { selecting: [selection, select, initialize] }

    return (
        <DropdownProvider value = {{ ...expanding, ...selecting  }}>
            <Wrapper ref = {wrapperRef} container {...extras}>
                {children}
            </Wrapper>
        </DropdownProvider>
    ) 
}