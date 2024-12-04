import { useState, useEffect } from 'react'

interface AuthState {
  accessToken: string | null
  isAuthenticated: boolean
}

export function useHelipagosAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    isAuthenticated: false,
  })

  const login = async (username: string, password: string) => {
    try {
      const formData = new FormData()
      formData.append('username', username)
      formData.append('password', password)

      const response = await fetch('https://sandbox-be.helipagos.com/api/auth/login', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        const newAuthState = {
          accessToken: data.access_token,
          isAuthenticated: true,
        }
        setAuthState(newAuthState)
        localStorage.setItem('authState', JSON.stringify(newAuthState))
        return true
      } else {
        throw new Error('Authentication failed')
      }
    } catch (error) {
      console.error('Error authenticating with Helipagos:', error)
      return false
    }
  }

  const logout = () => {
    setAuthState({ accessToken: null, isAuthenticated: false })
    localStorage.removeItem('authState')
  }

  useEffect(() => {
    const storedAuthState = localStorage.getItem('authState')
    if (storedAuthState) {
      setAuthState(JSON.parse(storedAuthState))
    }
  }, [])

  return { ...authState, login, logout }
}

