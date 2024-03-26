"use client";

import { useState, useEffect } from "react";

import ImageList from "@/components/image-list";
import portfolioApi from "@/service/portfolioApi";
import SpinnerLoading from "@/components/spinner-loading";

export default function CategoryDetail({ params }) {
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    portfolioApi
      .getCategoryInfo(params.category)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <div>
            <h1 className="title is-1 has-text-centered">{category.name}</h1>
            {category && category?.images.length ? (
              <ImageList imageList={category.images} />
            ) : (
              <h3 className="title is-3 has-text-centered">No Data</h3>
            )}
          </div>
        </>
      )}
    </>
  );
}
