import { renderHook, act } from '@testing-library/react'
import { useHelipagosAuth } from '../useHelipagosAuth'

describe('useHelipagosAuth', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('initializes with unauthenticated state', () => {
    const { result } = renderHook(() => useHelipagosAuth())
    expect(result.current.isAuthenticated).toBe(false)
    expect(result.current.accessToken).toBeNull()
  })

  it('updates state on successful login', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ access_token: 'test_token' }),
    })

    const { result } = renderHook(() => useHelipagosAuth())

    await act(async () => {
      const success = await result.current.login('testuser', 'password')
      expect(success).toBe(true)
    })

    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.accessToken).toBe('test_token')
  })

  it('handles login failure', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    })

    const { result } = renderHook(() => useHelipagosAuth())

    await act(async () => {
      const success = await result.current.login('testuser', 'wrong_password')
      expect(success).toBe(false)
    })

    expect(result.current.isAuthenticated).toBe(false)
    expect(result.current.accessToken).toBeNull()
  })

  it('clears auth state on logout', () => {
    localStorage.setItem('authState', JSON.stringify({ accessToken: 'test_token', isAuthenticated: true }))

    const { result } = renderHook(() => useHelipagosAuth())

    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.accessToken).toBe('test_token')

    act(() => {
      result.current.logout()
    })

    expect(result.current.isAuthenticated).toBe(false)
    expect(result.current.accessToken).toBeNull()
    expect(localStorage.getItem('authState')).toBeNull()
  })
})

