import {notFound} from 'next/navigation';
import React from 'react'

const Notes = ({params}: {params:{
   id: string
}}) => {

   if (parseInt(params.id) > 100) {
      return notFound()
   }
  return (
    <div>
      <h1>note {params.id}</h1>
    </div>
  );
}

export default Notes
