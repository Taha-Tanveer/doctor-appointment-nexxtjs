import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctoList = ({ doctorList ,heading = "Popular Doctors"}) => {
  //   console.log(doctorList);
  return (
    <div className="mb-10 ">
      <h2 className="font-bold text-xl">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
        {doctorList.length>0 ?
          doctorList.map((doctor, index) => {
            return (
              <div
                key={doctor.id}
                className="flex flex-col items-center gap-3 border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary transition-all ease-in-out hover:shadow-sm"
              >
                <Image
                  src={doctor.attributes?.Image?.data[0]?.attributes?.url}
                  alt=""
                  width={500}
                  height={200}
                  className="h-[200px] w-full rounded-3xl object-cover"
                />

                <div className="mt-3 place-self-start flex flex-col gap-1">
                  <h2 className="text-[10px] bg-blue-100 rounded-full px-3 text-primary">
                    {doctor.attributes?.categories.data[0]?.attributes?.Name}
                  </h2>
                  <h2 className="font-bold">{doctor.attributes?.Name}</h2>
                  <h2 className="text-primary text-sm">
                    {doctor.attributes?.Year_of_Experience} Years
                  </h2>
                  <h2 className="text-gray-500 text-sm">
                    {doctor.attributes?.Address}
                  </h2>
                  <Link href={`/details/${doctor.id}`} className="w-full">
                  <h2 className="p-2 px-3 rounded-full border-[1px]  border-primary text-primary w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out">
                    Book Now
                  </h2>
                  </Link>
                </div>
              </div>
            );
          })
          //skeleton effect
          :[1,2,3,4,5,6].map((item,index)=> <div className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse" key={index}></div>)
        }
      </div>
    </div>
  );
};

export default DoctoList;
