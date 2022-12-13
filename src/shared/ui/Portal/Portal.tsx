import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement 
}

export const Portal = ({element = document.body,children}:PortalProps) => {
    
    return createPortal(children, element)
}