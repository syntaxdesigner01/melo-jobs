'use client'
import { useParams } from 'next/navigation'


export default function page() {

    const param =useParams<{id:string}>()
  return (
    <div>page {param.id}</div>
  )
}
