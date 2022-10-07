import React, { createContext, useContext } from 'react'
const DropdownContext = createContext()

export function DropdownProvider(props) {
	const { value, children } = props
	return (
	   <DropdownContext.Provider value = { value }>
		    { children }
	   </DropdownContext.Provider>
	)
}

export function useDropdownContext() {
	return useContext(DropdownContext)
}