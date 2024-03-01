"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect } from "react";
import GlobalApi from "../utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="flex items-center flex-col mb-10 gap-2">
      <h2 className="text-4xl font-bold tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="capitalize text-gray-400 text-xl px-5">
        Search your doctor & book appointment
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="Search ..." />
        <Button type="submit">
          <Search className="w-6 h-6 mr-2" /> Search
        </Button>
      </div>
      {/* Display List of Category */}
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 mt-5">
        {categoryList.length > 0 ? categoryList.map(
          (category, index) =>
            index < 6 && (
              <Link href={`/search/${category.attributes?.Name}`}
                key={index}
                className="flex flex-col text-center items-center p-5 bg-slate-100 rounded-lg m-2 gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer"
              >
                <Image
                  src={category.attributes?.Icon?.data?.attributes?.url}
                  width={40}
                  height={40}
                  alt=""
                />
                <label className="text-blue-600 text-sm ">
                  {category.attributes?.Name}
                </label>
              </Link>
            )
        ):
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[130px] bg-slate-200 rounded-lg cursor-pointer animate-pulse m-2 w-[130px]"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default CategorySearch;
