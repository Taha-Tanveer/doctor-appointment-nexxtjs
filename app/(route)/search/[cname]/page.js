"use client";
import GlobalApi from "@/app/utils/GlobalApi";
import React, { useEffect } from "react";
import {getDoctorByCategory} from "@/app/utils/GlobalApi";
import DoctoList from "@/app/_components/DoctoList";

const Search = ({ params }) => {
  const [doctors, setDoctors] = React.useState([]);
  useEffect(() => {
    // console.log(params.cname);
    getDoctors();
  }, []);
  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((resp) => {
      // console.log(resp);
      setDoctors(resp.data.data);
    });
  };
  return <div>
    <DoctoList heading={params.cname} doctorList={doctors}/>
  </div>;
};

export default Search;
