"use client";
import GlobalApi from "@/app/utils/GlobalApi";
import React, { useEffect } from "react";
import DoctorDetails from "../_components/DoctorDetails";

const Details = ({ params }) => {
  const [doctor, setDoctor] = React.useState();
  const getDoctorsById = async () => {
    await GlobalApi.getDoctorById(params.recordid).then((resp) => {
      // console.log(resp);
      setDoctor(resp.data.data);
    });
  };
  useEffect(() => {
    getDoctorsById();
  }, []);

  // console.log(params.recordid);

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-4">
      {/* dr details */}
        <div className="col-span-3">
          <DoctorDetails doctor={doctor} />
        </div>
        <div>
          {/* doctor sugg */}
        </div>
      </div>
    </div>
  );
};

export default Details;
