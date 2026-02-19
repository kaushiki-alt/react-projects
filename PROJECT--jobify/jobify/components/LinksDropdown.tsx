'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { AlignLeft } from 'lucide-react'
import links from '@/utils/links'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const LinksDropdown = () => {
  const pathname = usePathname();
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant='outline' size='icon' className='lg'>
          <AlignLeft />
          <span className='sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52 lg:hidden ' align='start' sideOffset={20}>
        {links.map((link) => {
          const {href, icon, label} = link;
          return (
<DropdownMenuItem key={label}>
  <Button asChild variant={pathname == href ? 'default' : 'link'}>
      <Link href={href} className='flex gap-2 items-center'>
  {icon}
   <span className='label'>{label}</span>
  </Link>
  </Button>

</DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown
