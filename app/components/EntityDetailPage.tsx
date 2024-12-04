'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navigation from './Navigation';
import BackButton from './BackButton';
import Logo from './Logo';
import DetailView from './DetailView';
import Loading from './Loading';

interface Entity {
  name: string;
  [key: string]: any;
}

interface EntityDetailPageProps {
  category: 'people' | 'planets' | 'starships';
  title: string;
}

export default function EntityDetailPage({ category, title }: EntityDetailPageProps) {
  const [entity, setEntity] = useState<Entity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    if (!params.id) return;

    async function fetchEntity() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/${category}/${params.id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${category}`);
        }
        const data = await response.json();
        setEntity(data);
      } catch (err) {
        setError('An error occurred while fetching the data.');
        console.error(err);
        setEntity(null);
      } finally {
        setLoading(false);
      }
    }

    fetchEntity();
  }, [params.id, category]);

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Logo />
        <BackButton />
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : entity ? (
          <DetailView
            title={entity.name || `Unknown ${title}`}
            data={entity}
            excludeFields={['created', 'edited', 'url']}
          />
        ) : (
          <p className="text-center pixel-text text-yellow-400">{title} not found</p>
        )}
      </div>
    </div>
  );
}
