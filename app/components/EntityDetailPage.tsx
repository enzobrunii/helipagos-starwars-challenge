'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navigation from './Navigation'
import BackButton from './BackButton'
import Logo from './Logo'
import DetailView from './DetailView'
import Loading from './Loading'

interface EntityDetailPageProps {
  category: 'people' | 'planets' | 'starships'
  title: string
}

export default function EntityDetailPage({ category, title }: EntityDetailPageProps) {
  const [entity, setEntity] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    async function fetchEntity() {
      setLoading(true)
      try {
        const response = await fetch(`/api/${category}/${params.id}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch ${category}`)
        }
        const data = await response.json()
        setEntity(data)
      } catch (error) {
        console.error(`Error fetching ${category}:`, error)
        setEntity(null)
      } finally {
        setLoading(false)
      }
    }

    fetchEntity()
  }, [params.id, category])

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Logo />
        <BackButton />
        {loading ? (
          <Loading />
        ) : entity ? (
          <DetailView 
            title={entity?.name || `Unknown ${title}`} 
            data={entity} 
            excludeFields={['created', 'edited', 'url']}
          />
        ) : (
          <p className="text-center pixel-text text-yellow-400">{title} not found</p>
        )}
      </div>
    </div>
  )
}

