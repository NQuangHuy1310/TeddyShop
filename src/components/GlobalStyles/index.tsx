import React from 'react'
import './GlobalStyles.scss'

interface globalStylesProps {
  children: React.ReactNode
}

function GlobalStyles({ children }: globalStylesProps) {
  return <div>{children}</div>
}

export default GlobalStyles
