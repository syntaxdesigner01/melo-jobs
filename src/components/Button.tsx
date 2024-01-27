'use client'
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/Store/store";
import { useDispatch } from "react-redux";
export default function Button({id}:any) {
    const route = useRouter()
    const dispatch = useDispatch<AppDispatch>()

const getAllJobs = ()=>{
    
}

  return (
    <button onClick={()=>route.push(`/jobs/${id}`)} className="bg-black text-white px-2 py-1 rounded-md">
                View More
              </button>
  )
}
