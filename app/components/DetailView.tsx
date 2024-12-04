import React from 'react'
import Link from 'next/link'

interface DetailViewProps {
  title: string
  data: Record<string, any>
  excludeFields?: string[]
}

export default function DetailView({ title, data, excludeFields = [] }: DetailViewProps) {
  if (!data) {
    return <p className="text-center pixel-text text-yellow-400">No data available</p>
  }

  const renderValue = (key: string, value: any) => {
    if (key === 'homeworld' && typeof value === 'string') {
      const planetId = value.split('/').filter(Boolean).pop()
      return (
        <Link href={`/planets/${planetId}`} className="text-yellow-400 hover:text-white transition-colors">
          View Homeworld
        </Link>
      )
    }
    return Array.isArray(value) ? value.length : value?.toString() || 'N/A'
  }

  return (
    <div className="bg-black p-6 pixel-borders">
      <h2 className="text-2xl font-bold mb-4 pixel-text text-yellow-400">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => {
          if (excludeFields.includes(key)) return null
          return (
            <div key={key} className="mb-2">
              <span className="text-yellow-400 pixel-text">{key.replace(/_/g, ' ')}:</span>
              <span className="ml-2 text-white pixel-text">
                {renderValue(key, value)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

