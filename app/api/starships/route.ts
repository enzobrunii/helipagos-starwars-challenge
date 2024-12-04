import { NextResponse } from 'next/server'
import axiosInstance from '../../utils/axiosInstance';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search') || ''
  const page = searchParams.get('page') || '1'

  try {
    const res = await axiosInstance.get(`starships/?search=${search}&page=${page}`);
    const data = res.data;

    // Modify the 'next' URL to use our API route
    if (data.next) {
      const nextUrl = new URL(data.next)
      data.next = `/api/starships?search=${search}&page=${nextUrl.searchParams.get('page')}`
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching starships:', error);
    return NextResponse.json({ error: 'Failed to fetch starships' }, { status: 500 })
  }
}

