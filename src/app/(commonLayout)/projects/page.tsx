// import { getAllProject } from "@/app/utils/actions/projectManagement";
// import { TProject } from "@/types/types";
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaExternalLinkSquareAlt } from "react-icons/fa";
// export const metadata: Metadata = {
//   title: "HUMAYUN | Projects",
 
// };
// const ProjectsPage = async () => {
//   const projects = await getAllProject();

//   //   console.log(projects?.data);
//   return (
//     <div className="container mx-auto">
//       <div className="flex items-center justify-center lg:pb-16 pb-5">
//         <h1 className="text-2xl md:text-3xl text-center text-white font-bold inline-block">
//           All <span className="text-[#64B5F6]">Projects</span>
//         </h1>
//       </div>

//       <div className="space-y-5 lg:space-y-8 mb-10 hidden lg:block">
//         {projects?.data?.map((blog: TProject) => (
//           <div
//             key={blog._id}
//             className="flex gap-4 flex-col lg:flex-row lg:px-10 px-3  items-center h-auto"
//           >
//             <div className="w-full lg:w-[30%] overflow-hidden rounded-xl flex items-center justify-center  h-[250px]">
//               <Image
//                 className="object-cover rounded-xl h-full "
//                 src={blog?.image}
//                 alt="Card Image"
//                 height={800}
//                 width={500}
//               />
//             </div>
//             <div className="w-full lg:w-[70%]  h-full flex flex-col justify-between">
//               <div>
//                 <div className="flex  items-center lg:justify-between gap-4 flex-col md:flex-row ">
//                   <div className="flex items-center  gap-5">
//                     <h2 className="text-2xl text-center md:text-left font-semibold text-white">
//                       {blog?.title}
//                     </h2>
//                   </div>
//                   <div className="lg:flex hidden text-blue-200 lg:gap-7 gap-1 lg:ml-7">
//                     <Link href={`/projects/${blog?._id}`}>
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Details
//                         <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                       </p>
//                     </Link>
//                     <Link href={blog?.live_link} target="_blank">
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Live Site{" "}
//                         <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                       </p>
//                     </Link>
//                     <Link href={blog.client_link} target="_blank">
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Client Code{" "}
//                         <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                       </p>
//                     </Link>
//                     <Link href={blog.server_link} target="_blank">
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Server Code{" "}
//                         <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                       </p>
//                     </Link>
//                   </div>
//                   {/* mobile */}
//                   <div className="flex lg:hidden text-blue-200 justify-evenly w-full ">
//                     <Link href={`/projects/${blog?._id}`}>
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Details
//                         <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                       </p>
//                     </Link>
//                     <Link href={blog?.live_link} target="_blank">
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Live
//                         <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                       </p>
//                     </Link>
//                     <Link href={blog.client_link} target="_blank">
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Client
//                         <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                       </p>
//                     </Link>
//                     <Link href={blog.server_link} target="_blank">
//                       <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                         Server
//                         <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                       </p>
//                     </Link>
//                   </div>
//                 </div>
//                 <p className="text-justify pt-5 text-white">
//                   {blog?.short_description}
//                 </p>
//               </div>

//               <p className="pt-2 font-semibold text-white">
//                 Technology Used : {blog?.technology}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
      

//       <div className="space-y-5 lg:space-y-8 mb-10 block lg:hidden">
//         {projects?.data?.map((blog: TProject) => (
//           <div
//             key={blog._id}
//             className="flex gap-4 flex-col lg:flex-row lg:px-10 px-3 h-full items-center"
//           >
//             <div className="w-full lg:w-[30%] overflow-hidden rounded-xl flex items-center justify-center  h-[250px]">
//               <Image
//                 className="object-cover rounded-xl h-full "
//                 src={blog?.image}
//                 alt="Card Image"
//                 height={800}
//                 width={500}
//               />
//             </div>
//             <div className="w-full lg:w-[70%] h-full">
//               <div className="flex  items-center lg:justify-between gap-4 flex-col md:flex-row ">
//                 <div className="flex items-center  gap-5">
//                   <h2 className="text-2xl text-center md:text-left font-semibold text-white">
//                     {blog?.title}
//                   </h2>
//                 </div>
//                 <div className="lg:flex hidden text-blue-200 lg:gap-7 gap-1 lg:ml-7">
//                   <Link href={`/projects/${blog?._id}`}>
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Details
//                       <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                     </p>
//                   </Link>
//                   <Link href={blog?.live_link} target="_blank">
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Live Site{" "}
//                       <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                     </p>
//                   </Link>
//                   <Link href={blog.client_link} target="_blank">
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Client Code{" "}
//                       <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                     </p>
//                   </Link>
//                   <Link href={blog.server_link} target="_blank">
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Server Code{" "}
//                       <FaExternalLinkSquareAlt className="mb-[2px] lg:ml-2" />
//                     </p>
//                   </Link>
//                 </div>
//                 {/* mobile */}
//                 <div className="flex lg:hidden text-blue-200 justify-evenly w-full ">
//                   <Link href={`/projects/${blog?._id}`}>
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Details
//                       <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                     </p>
//                   </Link>
//                   <Link href={blog?.live_link} target="_blank">
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Live
//                       <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                     </p>
//                   </Link>
//                   <Link href={blog.client_link} target="_blank">
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Client
//                       <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                     </p>
//                   </Link>
//                   <Link href={blog.server_link} target="_blank">
//                     <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
//                       Server
//                       <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
//                     </p>
//                   </Link>
//                 </div>
//               </div>
//               <p className="text-justify pt-5 text-white">
//                 {blog?.short_description}
//               </p>

//               <p className="pt-2 font-semibold text-white">
//                 Technology Used : {blog?.technology}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;



import { getAllProject } from "@/app/utils/actions/projectManagement"
import type { TProject } from "@/types/types"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkSquareAlt } from "react-icons/fa"

export const metadata: Metadata = {
  title: "HUMAYUN | Projects",
}

const ProjectsPage = async () => {
  const projects = await getAllProject()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with gradient underline */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-white relative">
          All <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          <span className="absolute -bottom-3 left-0 right-0 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></span>
        </h1>
      </div>

      {/* Projects Grid - Single implementation for all screen sizes */}
      <div className="space-y-10 md:space-y-16 mb-10">
        {projects?.data?.map((project: TProject) => (
          <div
            key={project._id}
            className="group bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px]"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-5">
              {/* Project Image */}
              <div className="w-full lg:w-[35%] overflow-hidden rounded-lg">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    src={project?.image || "/placeholder.svg"}
                    alt={project?.title || "Project Image"}
                    height={800}
                    width={500}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-[65%] flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project?.title}
                  </h2>

                  {/* Project Links - Desktop */}
                  <div className="hidden md:flex flex-wrap gap-4 mb-4">
                    <ProjectLink href={`/projects/${project?._id}`} label="Details" />
                    <ProjectLink href={project?.live_link} label="Live Site" external />
                    <ProjectLink href={project.client_link} label="Client Code" external />
                    <ProjectLink href={project.server_link} label="Server Code" external />
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{project?.short_description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h3 className="text-white font-semibold mb-2">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project?.technology.split(",").map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links - Mobile */}
                <div className="flex md:hidden justify-between flex-wrap gap-y-2 mt-4 border-t border-gray-700 pt-4">
                  <ProjectLink href={`/projects/${project?._id}`} label="Details" compact />
                  <ProjectLink href={project?.live_link} label="Live" external compact />
                  <ProjectLink href={project.client_link} label="Client" external compact />
                  <ProjectLink href={project.server_link} label="Server" external compact />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Reusable link component
const ProjectLink = ({
  href,
  label,
  external = false,
  compact = false,
}: {
  href: string
  label: string
  external?: boolean
  compact?: boolean
}) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className={`
        inline-flex items-center gap-1.5
        ${compact ? "text-sm" : "text-base"}
        text-blue-300 hover:text-blue-400 transition-colors duration-200
        ${compact ? "px-2 py-1" : "px-3 py-1.5"} 
        rounded-md hover:bg-blue-900/20
      `}
    >
      {label}
      <FaExternalLinkSquareAlt className={compact ? "text-xs" : "text-sm"} />
    </Link>
  )
}

export default ProjectsPage
