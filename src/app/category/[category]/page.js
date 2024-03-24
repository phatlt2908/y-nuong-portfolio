import ImageList from "@/components/image-list";

import portfolioApi from "@/service/portfolioApi";

export async function getServerSideProps(context) {
  const { params } = context;
  console.log("params >>> ", params);

  const category = await portfolioApi.getCategoryInfo(params.categoryCode);

  return {
    props: { category },
  };
}

export default function CategoryDetail({ params }) {
  return (
    <>
      <h1 className="title is-1 has-text-centered">{category.name}</h1>
      <ImageList imageList={category.images} />
    </>
  );
}
