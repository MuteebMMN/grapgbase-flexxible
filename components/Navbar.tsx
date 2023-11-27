import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant/constants'
import AuthProviders from './AuthProviders'


const Navbar = () => {
const session={}

  return (
    <div>
      <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
                <img src="./logo.svg" width={115} height={43} alt="flexibles"/>
                </Link>
            <ul className='xl:flex hidden  text-small  gap-7'>
                {NavLinks.map((link)=>(
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>
        <div className='flexCenter gap-7'>
            {session ?(
                <>
                userphoto
                <Link href="/create-project">
                SHare work
                </Link>
                </>
            ): (
                <AuthProviders />
            )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
