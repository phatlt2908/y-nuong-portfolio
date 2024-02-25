import { categories } from "@/constant";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.code,
  }));
}

export default function CategoryDetail({ params }) {
  const category = params.category;

  return (
    <>
      <h1>{category}</h1>
    </>
  );
}
