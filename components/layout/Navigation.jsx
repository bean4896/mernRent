import Toggle from './toggle';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b-[0.5px] dark:border-neutral-600 ">
      <div className='nav-container'>
      <nav className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
       <div>
          <img src='../images/memo.svg'></img>
       </div>

        <div className='flex flex-row align-middle'> 
          <ul className='flex flex-row space-x-4'>
            <button className='btn rounded-md text-yellow-400 bg-yellow-50 dark:bg-yellow-900'>Login</button>
            <button className='btn rounded-md text-[#ffffff] bg-purple-900 dark:text-yellow-400'>Register</button>
          </ul>
          <Toggle />
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;