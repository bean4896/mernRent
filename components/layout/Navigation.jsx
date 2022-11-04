import Toggle from './toggle';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b-[0.5px] dark:border-neutral-600 ">
      <div className='nav-container'>
      <nav className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
       <div>
          <Link href='/'><h1> Home Page</h1></Link>
       </div>

        <div className='flex flex-row align-middle'> 
          <ul className='flex flex-row space-x-4'>
            <Link href='/newmemory'><button className='btn rounded-md text-yellow-400 bg-yellow-50 dark:bg-yellow-900'>Add Item</button></Link>
            <Link href='/auth'><button className='btn rounded-md text-yellow-400 bg-yellow-50 dark:bg-yellow-900'>Login</button></Link>
            <Link href='/auth'><button className='btn rounded-md text-[#ffffff] bg-purple-900 dark:text-yellow-400'>Register</button></Link>
          </ul>
          <Toggle />
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;