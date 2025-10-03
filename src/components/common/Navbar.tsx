/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { IoClose } from "react-icons/io5";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react'
import { navbarItems, workerMenus, employerMenus } from '@/constants/navbarDatas'
import { myFetch } from '@/utils/myFetch'
import { brandLogo, profileImg } from '@/assets/assets'
import { EUserRole, getUserRole } from '@/utils/getUserRole'




const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // determine user role and set dropdown items accordingly
  const userRole = getUserRole();
  const dropdownItems = userRole === EUserRole.EMPLOYER ? employerMenus : workerMenus;

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname === url || pathname.startsWith(`${url}/`);
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await myFetch("/users/my-profile", {
        method: "GET",
        tags: ["user"]
      });
      // console.log("Nav User Data:", response);
      setUser(response?.data);
    };
    getUser();
  }, [pathname]);

  const hadleRedirect = (url: string) => {
    if (url === "/logout") {
      return router.push("/");
    }
    router.push(url);
  };


  return (
    <div className='bg-white h-22 flex items-center sticky top-0 z-50'>
      <div className='w-full maxWidth flex justify-between items-center py-3 px-2'>
        {/* Brand Logo */}
        <Link href="/" className='flex justify-start items-center'>
          <Image src={brandLogo} alt="Brand Logo" width={100} height={20} className='w-30 h-6 object-fit' />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden grow lg:flex justify-center items-center gap-1 font-semibold text-gray-700'>
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer px-3 py-1 rounded-sm transition-all duration-300 ${isActive(item.url)
                ? 'bg-brandClr1 text-white font-bold'
                : 'hover:bg-brandClr1 hover:text-white'
                }`}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Log in / Mobile Menu Trigger */}
        <div className='flex justify-end items-center gap-4 relative'>
          {true ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className='flex items-center gap-2 cursor-pointer'>
                  <div className='max-md:hidden w-12 h-12 rounded-full overflow-hidden border-2 border-primary'>
                    <Image src={user ? user?.profile : profileImg} alt="User Profile" width={200} height={200} className='object-fit' />
                  </div>
                  <p className='hidden xl:inline-block font-bold text-gray-700'>Md. Kamran Ali</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {dropdownItems.map((item, index) => (
                  <DropdownMenuItem key={index} onClick={() => hadleRedirect(item.url)} className={`${isActive(item.url)
                    ? 'bg-brandClr1 text-white font-bold'
                    : 'hover:bg-brandClr1 hover:text-white'
                    }`}>{item.title}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className='hidden lg:inline-block border-2 border-brandClr1 text-brandClr1 font-semibold py-1 px-4 rounded-full customShadow4'>Log in</Link>
          )}

          {/* Mobile Menu */}
          <div className='lg:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className='cursor-pointer'>
                <Menu className="w-6 h-6 text-gray-600" />
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetHeader className='flex flex-row items-center justify-between pt-8'>
                  <SheetTitle className="">
                    <Image src={brandLogo} alt="Brand Logo" width={100} height={20} className='w-30 h-6 object-fit' />
                  </SheetTitle>
                  <SheetClose>
                    <IoClose size={24} className='text-gray-600 hover:text-gray-800 cursor-pointer' />
                  </SheetClose>
                </SheetHeader>

                <ul className='flex flex-col mt-6 gap-2 font-medium text-gray-700 px-2'>
                  {user && (
                    <li onClick={() => setOpen(false)} className='cursor-pointer hover:bg-gray-100 py-2 rounded'>
                      <Link href="/profile" className='flex gap-2 items-center'>
                        <span className='w-12 h-12 block rounded-full overflow-hidden border-2 border-primary'>
                          <Image src={user ? user?.profile : profileImg} alt="User Profile" width={100} height={100} />
                        </span>
                        <span className='flex flex-col text-gray-600 text-sm'>
                          {user?.fullName}
                        </span>
                      </Link>
                    </li>
                  )}

                  {navbarItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => setOpen(false)}
                      className={`cursor-pointer px-3 py-1 rounded transition-colors duration-200 ${isActive(item.url)
                        ? 'bg-gray-200 text-primary font-semibold'
                        : 'hover:bg-gray-100'
                        }`}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                  <li className=' py-4'>
                    {!user && (
                      <Link href="/login" className='block bg-brandClr1 text-white font-semibold px-4 py-1 rounded mt-2 text-center customShadow4'>Log in</Link>
                    )}
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
