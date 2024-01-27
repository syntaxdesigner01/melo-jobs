'use client'

import Image from "next/image";
import Button from "./Button";
import { useSelector } from "react-redux";


export default function AllJobs() {

 const jobList = useSelector((state:any) => state?.data)
  

  return (
    <div className="mt-10">
     
     {
      jobList?.length > 0 ?  <h1 className="text-center font-bold text-3xl">All Jobs</h1> : ''
     }

      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {jobList?.map((job:dataReturn, index:number) => {
          return (
            <div className="shadow-md p-4 flex flex-col gap-2">
              <Image
                src={job?.company?.logo}
                alt="logo"
                height={50}
                width={50}
                className="rounded-full"
              />

              <p>Job Title: {job.title}</p>
              <p>Company: {job.company.name}</p>
              <p>Posted date: {job.postDate}</p>
              <Button id={job.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
