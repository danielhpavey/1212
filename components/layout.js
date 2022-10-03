import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Layout({ children }) {
    const router = useRouter();
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    const closeMenu = () => {
        setActive(false)
    }
    useEffect(() => {
        router.events.on('routeChangeStart', closeMenu);

        return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-700'>
      <button
          aria-label="Menu"
          className="absolute z-50 right-0 inline-flex p-3 hover:bg-blue-600 text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
              >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
      </button>
      <menu className={`${
            active ? '' : 'hidden'
          }   sticky top-0`}>
	  <a href="/">Home</a>
      </menu>
      <header className="h-80 bg-sunflower bg-cover bg-center">
      </header>
      <main className=''>{children}</main>
      <footer className=''>
      </footer>
    </div>
  );
}

