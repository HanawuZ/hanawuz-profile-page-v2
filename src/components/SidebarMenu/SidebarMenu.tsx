import Link from 'next/link';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import { useProfileContext } from '@/context/ProfileContext';
import styles from "./styles.module.css";



const SidebarMenu = () => {
  const pathname = usePathname();
  const { screenWidth } = useProfileContext();
  return (
    <div className={`ps-5 absolute w-full h-lvh border border-blue-500`}>
      <div className='grid grid-cols-5  w-full h-lvh border border-slate-700' style={{zIndex:""}}>
        <div className='border border-green-600 mt-24'>
          <div className={`grid gap-y-3 border border-slate-700`}>
            <Link href="/" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
              <div
                className={`py-1 px-2 flex items-center`}
                style={{
                  background: pathname === '/' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                  transform: pathname === '/' ? 'scale(1.05)' : '',
                  color: pathname === '/' ? 'white' : '',
                  transition: '0.2s',
                }}
              >
                <AiFillExclamationCircle size={40} />
                <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>About me</div>
              </div>
            </Link>
            <Link href="/detail" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
              <div
                className={`py-1 px-2 flex items-center`}
                style={{
                  background: pathname === '/detail' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                  transform: pathname === '/detail' ? 'scale(1.05)' : '',
                  color: pathname === '/detail' ? 'white' : '',
                  transition: '0.2s',
                }}
              >
                <AiFillExclamationCircle size={40} />
                <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>Detail</div>

              </div>
            </Link>
            <Link href="/experiences" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
              <div
                className={`py-1 px-2 flex items-center`}
                style={{
                  background: pathname === '/experiences' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                  transform: pathname === '/experiences' ? 'scale(1.05)' : '',
                  color: pathname === '/experiences' ? 'white' : '',
                  transition: '0.2s',
                }}
              >
                <AiFillExclamationCircle size={40} />
                <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>Experiences</div>

              </div>
            </Link>
            <Link href="/projects" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
              <div
                className={`py-1 px-2 flex items-center`}
                style={{
                  background: pathname === '/projects' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                  transform: pathname === '/projects' ? 'scale(1.05)' : '',
                  color: pathname === '/projects' ? 'white' : '',
                  transition: '0.2s',
                }}
              >
                <AiFillExclamationCircle size={40} />
                <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>Projects</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='col-span-4 border border-green-600' 
        style={{
          zIndex:"-1"
        }}></div>
      </div>
      {/* 
      <div className="min-[768px]:ms-20 h-lvh bg-blue-500 flex items-center">
        <div className={`grid gap-y-3`}>
          <Link href="/" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
            <div
              className={`py-1 px-2 flex items-center`}
              style={{
                background: pathname === '/' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                transform: pathname === '/' ? 'scale(1.05)' : '',
                color: pathname === '/' ? 'white' : '',
                transition: '0.2s',
              }}
            >
              <AiFillExclamationCircle size={40} />
              <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>About me</div>
            </div>
          </Link>
          <Link href="/detail" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
            <div
              className={`py-1 px-2 flex items-center`}
              style={{
                background: pathname === '/detail' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                transform: pathname === '/detail' ? 'scale(1.05)' : '',
                color: pathname === '/detail' ? 'white' : '',
                transition: '0.2s',
              }}
            >
              <AiFillExclamationCircle size={40} />
              <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>Detail</div>

            </div>
          </Link>
          <Link href="/experiences" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
            <div
              className={`py-1 px-2 flex items-center`}
              style={{
                background: pathname === '/experiences' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                transform: pathname === '/experiences' ? 'scale(1.05)' : '',
                color: pathname === '/experiences' ? 'white' : '',
                transition: '0.2s',
              }}
            >
              <AiFillExclamationCircle size={40} />
              <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>Experiences</div>

            </div>
          </Link>
          <Link href="/projects" className={`${screenWidth > 900 ? '' : 'grid justify-center'} ${styles.sidebarMenu}`}>
            <div
              className={`py-1 px-2 flex items-center`}
              style={{
                background: pathname === '/projects' ? 'linear-gradient(45deg, #e52e71, #ff8a00)' : '',
                transform: pathname === '/projects' ? 'scale(1.05)' : '',
                color: pathname === '/projects' ? 'white' : '',
                transition: '0.2s',
              }}
            >
              <AiFillExclamationCircle size={40} />
              <div className={`ms-3 flex items-center ${styles.sidebarMenuLabel}`}>Projects</div>
            </div>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default SidebarMenu;
