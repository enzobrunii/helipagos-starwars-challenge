import React, { useState, FormEvent } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(query)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="p-2 border-4 border-yellow-400 bg-black text-white w-full pixel-borders focus:outline-none focus:border-yellow-500 transition-colors"
      />
    </form>
  )
}

export default SearchBar

