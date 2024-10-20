import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log(params.slug);

  let title = 'docs';
  if (params.slug?.length == 1) {
    title = params.slug[0];
  }
  if (params.slug?.length == 2) {
    title = `${params.slug[0]} ${params.slug[1]}`;
  }
  return (
    <div>
      <h1>catch all segments</h1>
      <h1>Navbar</h1>
      <h1>title: {title}</h1>
      <h1>footer</h1>
    </div>
  );
};

export default Docs;
