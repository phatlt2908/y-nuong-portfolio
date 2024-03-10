import { categories } from "@/constant";

import ImageList from "@/components/image-list";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.code,
  }));
}

export default function CategoryDetail({ params }) {
  const categoryCode = params.category;
  const category = categories.find((item) => item.code === categoryCode);

  return (
    <>
      <h1 className="title is-1 has-text-centered">{category.name}</h1>
      <ImageList imageList={category.imgs} />
    </>
  );
}
