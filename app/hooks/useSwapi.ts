import { useState, useEffect, useCallback } from 'react'
import axiosInstance from '../utils/axiosInstance'

interface SwapiHookResult<T> {
  data: T[]
  loading: boolean
  error: string | null
  search: (query: string) => Promise<void>
  loadMore: () => Promise<void>
  hasMore: boolean
}

export function useSwapi<T>(initialUrl: string): SwapiHookResult<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [nextPage, setNextPage] = useState<string | null>(null)

  const fetchData = useCallback(async (url: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await axiosInstance.get(url)
      setData(prevData => [...prevData, ...response.data.results])
      setNextPage(response.data.next)
    } catch (err) {
      setError('An error occurred while fetching data')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const search = useCallback(async (query: string) => {
    setData([])
    setNextPage(null)
    await fetchData(`${initialUrl}?search=${query}`)
  }, [fetchData, initialUrl])

  const loadMore = useCallback(async () => {
    if (nextPage) {
      await fetchData(nextPage)
    }
  }, [fetchData, nextPage])

  useEffect(() => {
    fetchData(initialUrl)
  }, [fetchData, initialUrl])

  return {
    data,
    loading,
    error,
    search,
    loadMore,
    hasMore: !!nextPage,
  }
}

