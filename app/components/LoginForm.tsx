'use client'

import { useState } from 'react'
import { useHelipagosAuth } from '../hooks/useHelipagosAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useHelipagosAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const success = await login(username, password)
    if (success) {
      router.push('/')
    } else {
      setError('Login failed. Please check your credentials.')
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="bg-black pixel-borders p-8">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 pixel-text text-center">Login</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-yellow-400 pixel-text mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="pixel-borders w-full p-2 bg-black text-white"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-yellow-400 pixel-text mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="pixel-borders w-full p-2 bg-black text-white"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 pixel-borders focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            href="/"
            className="bg-black hover:bg-yellow-900 text-yellow-400 font-bold py-2 px-4 pixel-borders focus:outline-none focus:shadow-outline"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  )
}

