import { notFound } from 'next/navigation'
import React from 'react'

const SectionDetail = ({params} : {
   params:{
      id: string
      sectionId: string
   }
}) => {

    if (parseInt(params.sectionId) > 100) {
      return notFound();
    }
  return (
    <div>
      <h1>note {params.id} section {params.sectionId}</h1>
    </div>
  )
}

export default SectionDetail
