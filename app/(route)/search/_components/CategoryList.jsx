"use client";
import React from "react";
import { useState, useEffect } from "react";
import GlobalApi from "../../../utils/GlobalApi";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  const params = usePathname();
  const categoryN = params.split("/")[2];

  useEffect(() => {
    getCategoryList();
    // console.log(params);
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      //   console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  //   console.log(categoryList);
  return (
    <div className="h-screen mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-hidden">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup className="" heading="Suggestions">
            {categoryList &&
              categoryList.map((category, index) =>index<8 && (
                <CommandItem key={index}>
                  <Link
                    href={`/search/${category.attributes?.Name}`}
                    className={`flex p-2 gap-2 text-[14px] text-blue-600 items-center rounded-md cursor-pointer w-full${
                      categoryN == category.attributes?.Name && " bg-blue-100 "
                    }`}
                  >
                    <Image
                      src={category.attributes?.Icon?.data?.attributes?.url}
                      width={25}
                      height={25}
                      alt="icon"
                    />
                    <label>{category.attributes?.Name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
