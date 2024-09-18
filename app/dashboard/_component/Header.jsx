"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-4 items-center justify-between shadow-sm'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100}  style={{ width: "auto", height: "auto" }}   />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-amber-600 font-bold'}`}>Dashboard</li>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-amber-600 font-bold'}`}>Questions</li>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-amber-600 font-bold'}`}>Upgrade</li>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-amber-600 font-bold'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}