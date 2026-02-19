'use client'
import links from '@/utils/links'
import logo from '@/assets/logo.svg'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Sidebar = () => {
  const pathname = usePathname()
  console.log(pathname);
  
  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Image src={logo} alt='logo' className='mx-auto'/>
      <div className="flex flex-col gap-4 mt-20">      
        {
    links.map((link) => {
      const {href, label, icon} = link;
      return (
        <Button asChild
        variant={pathname == href ? 'default': 'link'} 
        key={label}>
          <Link href={href} className='flex items-center gap-2'>{icon} 
          <span className=''>{label}</span>
          </Link>
        </Button>
      )
    })
    }
    </div>
    </aside>
  )
}

export default Sidebar
