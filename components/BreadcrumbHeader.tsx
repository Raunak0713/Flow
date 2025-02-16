"use client"

import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "./ui/breadcrumb"
import React from "react"

const BreadcrumbHeader = () => {
  const pathname = usePathname()
  const paths = pathname === "/" ? [""] : pathname.split("/")
  return (
    <div className="flex items-center flex-start">
      <Breadcrumb>
         <BreadcrumbList>
           {paths.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize" href={`/${path}`}>
                  {path === "" ? "Home" : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
           ))} 
         </BreadcrumbList>
      </Breadcrumb>
    </div>  
  )
}

export default BreadcrumbHeader