import { ThemeProvider } from 'next-themes'
import React from 'react'

interface AppProviderProps {
  children : React.ReactNode
}

const AppProvider = ({ children } : AppProviderProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      { children }
    </ThemeProvider>
  )
}

export default AppProvider