"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctoList from "./_components/DoctoList";
import GlobalApi from "./utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [doctorList , setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  };

  return (
    <div>
      {/* Hero section */}
      <Hero />
      {/* search bar + categories */}
      <CategorySearch />
      {/* popular doctors list */}
      <DoctoList doctorList={doctorList}/>
    </div>
  );
}
