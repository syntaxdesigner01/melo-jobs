import Image from "next/image"


export default function AllJobs() {
    const jobList = [
        { 'id': '3811189111', 'title': 'Full Stack JS', 'url': 'https://www.linkedin.com/jobs/view/3811189111', 'referenceId': 'ppeIp2bIGdlsdv4V9+aTag==', 'posterId': '364648347', 'company': { 'name': 'Braintrust', 'logo': 'https://media.licdn.com/dms/image/C560BAQHbQYFSQsK__A/company-logo_200_200/0/1630511738029/usebraintrust_logo?e=1714003200&v=beta&t=EsYA5nlxOFIQ-rlVMm5riaU9BAc0qYLc2JQA9qhjSOA', 'url': 'https://www.linkedin.com/company/usebraintrust/life', 'staffCountRange': {}, 'headquarter': {} }, 'location': 'EMEA (Remote)', 'type': 'Full-time', 'postDate': '3 days ago' },
        { 'id': '3811189111', 'title': 'Full Stack JS', 'url': 'https://www.linkedin.com/jobs/view/3811189111', 'referenceId': 'ppeIp2bIGdlsdv4V9+aTag==', 'posterId': '364648347', 'company': { 'name': 'Braintrust', 'logo': 'https://media.licdn.com/dms/image/C560BAQHbQYFSQsK__A/company-logo_200_200/0/1630511738029/usebraintrust_logo?e=1714003200&v=beta&t=EsYA5nlxOFIQ-rlVMm5riaU9BAc0qYLc2JQA9qhjSOA', 'url': 'https://www.linkedin.com/company/usebraintrust/life', 'staffCountRange': {}, 'headquarter': {} }, 'location': 'EMEA (Remote)', 'type': 'Full-time', 'postDate': '3 days ago' }
    ]
    return (
        <div className="mt-10">
            <h1 className="text-center font-bold text-3xl">All Jobs</h1>

            <div className="pt-10 grid grid-cols-5 gap-10">
                {
                    jobList.map((job, index) => {
                        return (
                            <div className="shadow-md">
                                <Image src={job.company.logo} alt="logo" height={50} width={50} className="rounded-full" />

                                <p>Job Title: {job.title}</p>
                                <p>Company: {job.company.name}</p>
                                <p>Posted date: {job.postDate}</p>
                                <button className="bg-black text-white px-2 py-1 rounded-md">View More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
