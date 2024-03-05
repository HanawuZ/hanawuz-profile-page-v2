import Link from 'next/link';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { useProfileContext } from '@/context/ProfileContext';
import { FaBriefcase } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { IoCodeSlashSharp } from "react-icons/io5";

const SidebarMenuMobile = () => {
  const pathname = usePathname();

  return (
    <div className="flex mt-2" style={{ zIndex: 2 }}>
      <Link href="/" className='mx-1'>
        <div
          className={`py-1 px-2 flex items-center`}
          style={{
            background: pathname === '/' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
            transform: pathname === '/' ? 'scale(1.05)' : '',
            color: pathname === '/' ? 'white' : '',
            transition: '0.2s',
          }}
        >
          <AiFillExclamationCircle size={35} />
        </div>
      </Link>
      <Link href="/skills" className='mx-1'>
        <div
          className={`py-1 px-2 flex items-center`}
          style={{
            background: pathname === '/skills' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
            transform: pathname === '/skills' ? 'scale(1.05)' : '',
            color: pathname === '/skills' ? 'white' : '',
            transition: '0.2s',
          }}
        >
          <IoCodeSlashSharp size={35} />
        </div>
      </Link>
      <Link href="/experiences" className='mx-2'>
        <div
          className={`py-1 px-2 flex items-center`}
          style={{
            background: pathname === '/experiences' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
            transform: pathname === '/experiences' ? 'scale(1.05)' : '',
            color: pathname === '/experiences' ? 'white' : '',
            pointerEvents: 'none',
            transition: '0.2s',
          }}
        >
          <FaBriefcase size={35} />
        </div>
      </Link>
      <Link href="/projects" className="mx-1">
        <div
          className={`py-1 px-2 flex items-center}`}
          style={{
            background: pathname === '/projects' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
            transform: pathname === '/projects' ? 'scale(1.05)' : '',
            color: pathname === '/projects' ? 'white' : '',
            transition: '0.2s',
          }}
        >
          <PiProjectorScreenChart size={35} />
        </div>
      </Link>
      <Link href="/acknowledgement" className="mx-2">
        <div
          className={`py-1 px-2 flex items-center`}
          style={{
            background: pathname === '/acknowledgement' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
            transform: pathname === '/acknowledgement' ? 'scale(1.05)' : '',
            color: pathname === '/acknowledgement' ? 'white' : '',
            transition: '0.2s',
          }}
        >
          <BiSolidLike size={35} />
        </div>
      </Link>
    </div>
  )
}
export default SidebarMenuMobile