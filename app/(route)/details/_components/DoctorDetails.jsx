import { Facebook, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookAppointment from "./BookAppointment";

const DoctorDetails = ({ doctor }) => {
  //   console.log(doctor);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
        <div>
          {/* image */}

          <Image
            src={doctor?.attributes?.Image?.data[0]?.attributes?.url}
            alt="doctor image"
            width={300}
            height={300}
            className="rounded-lg "
          />
        </div>
        <div className="col-span-2 mt-5 flex flex-col md:px-10">
          {/* dr info */}
          <h2 className="font-bold text-2xl mt-5 ">
            {doctor?.attributes?.Name}
          </h2>
          <h2 className="flex gap-2 text-gray-500">
            <GraduationCap /> {doctor?.attributes?.Year_of_Experience} Years of
            Experience
          </h2>
          <h2 className="text-md flex gap-2 text-gray-500">
            <MapPin />
            <span>{doctor?.attributes?.Address}</span>
          </h2>
          <h2 className="text-[10px] bg-blue-100 rounded-full px-3 text-primary w-max">
            {doctor?.attributes?.categories.data[0]?.attributes?.Name}
          </h2>

          <BookAppointment doctor={doctor} />
        </div>
      </div>
      <div>
        <div className="p-5 border rounded-lg mt-5">
          <h2 className="font-bold text-2xl mt-5 ">About Me</h2>
          <p className="text-gray-500 tracking-wide ">
            {doctor?.attributes?.About}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
