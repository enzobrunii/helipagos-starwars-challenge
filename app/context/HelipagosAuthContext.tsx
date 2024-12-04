'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useHelipagosAuth } from '../hooks/useHelipagosAuth'

interface AuthContextType {
  accessToken: string | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function HelipagosAuthProvider({ children }: { children: ReactNode }) {
  const auth = useHelipagosAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a HelipagosAuthProvider')
  }
  return context
}

