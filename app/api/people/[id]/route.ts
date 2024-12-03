import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (res.status !== 200) {
    throw new Error(`Unexpected response status: ${res.status}`);
  }
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: 'Person not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}

