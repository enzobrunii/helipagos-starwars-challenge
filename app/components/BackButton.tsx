'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2 bg-black text-yellow-400 hover:bg-yellow-900 transition-colors pixel-borders mb-4"
    >
      <span className="pixel-text">◄ Back</span>
    </button>
  )
}

