'use client'

import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import List from './List'
import Loading from './Loading'
import { useSwapi } from '../hooks/useSwapi'

interface Entity {
  name: string;
  url: string;
}

interface EntityListPageProps {
  title: string;
  category: 'people' | 'planets' | 'starships';
}

const EntityListPage: React.FC<EntityListPageProps> = ({ title, category }) => {
  const { data: entities, loading, error, search, loadMore, hasMore } = useSwapi<Entity>(`/${category}`);

  const handleSearch = (query: string) => {
    search(query);
  };

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Logo />
        <h2 className="text-2xl font-bold mb-4 pixel-text text-center text-yellow-400">{title}</h2>
        <SearchBar onSearch={handleSearch} />
        {loading && entities.length === 0 ? (
          <Loading />
        ) : (
          <List 
            items={entities} 
            category={category} 
            onLoadMore={loadMore}
            hasMore={hasMore}
          />
        )}
      </div>
    </div>
  )
}

export default EntityListPage

