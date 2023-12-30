import { NextResponse } from 'next/server'


const PROJECT_REF = process.env.PROJECT_REF;
const ANON_KEY = process.env.ANON_KEY ?? '';

export async function GET() {
    const res = await fetch(`https://${PROJECT_REF}.supabase.co/rest/v1/comments?apikey=${ANON_KEY}`)
    const data = await res.json()
    return NextResponse.json(data)
}
