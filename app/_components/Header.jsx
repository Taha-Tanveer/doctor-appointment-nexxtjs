"use client";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const { user } = useKindeBrowserClient();
  useEffect(() => {
    // console.log(user);
  });

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <img src="/logo.svg" alt="" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => {
            return (
              <Link key={item.id} href={item.path}>
                <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out ">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      {user ? (
        <>
          {" "}
          <Popover>
            <PopoverTrigger>
              <Image
                src={user?.picture ? user?.picture : ""}
                alt="profile image"
                width={50}
                height={50}
                className="rounded-full"
              />
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:bg-slate-200 p-2 rounded-md">
                  Profile
                </li>
                <li className="cursor-pointer hover:bg-slate-200 p-2 rounded-md">
                  My Booking
                </li>
                <li className="cursor-pointer hover:bg-slate-200 p-2 rounded-md">
                  <LogoutLink>Log Out</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
