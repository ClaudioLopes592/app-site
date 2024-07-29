import { FiSearch } from 'react-icons/fi'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'

export function Header() {
    return (
        <header className="w-full flex items-center px-2 py-4 bg-blue-950 h-14 shadow-md">
            <div className='flex items-center gap-2'>
            <FiSearch size={20} color='#fff'/>
                <input
                className='w-80 rounded bg-slate-500 text-white'
                type='text'
                placeholder='Pesquisar mais de 11.200 tutoriais'
                name='pesquisar'
                />
            </div>
            <div className="flex w-full items-center justify-between ml-72">
                <Image
                src={logo}
                alt='logotipo do site'
                width={200}
                height={80}
                />
                <div className='flex gap-5 items-center mr-3'>
                <Link href={'/'} className='text-white'>
                    Fórum
                </Link>
                <Link href={'/'} className='bg-yellow-500 px-5 py-1'>
                    Doar
                </Link>
                </div>
            </div>
        </header>
    )
}
