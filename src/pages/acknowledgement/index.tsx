import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styles from "./styles.module.css";
const Acknowledgement = () => {
  return (
    <div className="h-screen grid items-center">
      <div className="container mx-auto grid md:grid-cols-5 lg:grid-cols-4" style={{ zIndex: 1 }}>
        <div className="max-sm:h-[10vh]"></div>
        <div className={`w-full grid justify-self-center md:col-span-4 lg:col-span-3 border border-slate-700 ${styles.acknowledgementPage}`}>
          <div
            className="ps-5 text-xl max-md:text-xl font-bold max-md:text-xl text-white p-2"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
            }}
          > Acknowledgements </div>
          <div className='md:overflow-y-auto md:h-[70vh] md:max-h-[720px] pb-4' style={{ background: "rgb(255, 255, 255, 0.5)", }}>
            <div className="mt-3">
              <div className="grid p-5">
                <FaQuoteLeft color="#7e7e7e" size={20} />
                <p className="text-center text-md md:mx-14">
                  I could not have undertaken this journey without my senior supervisor. I am also grateful to my classmates and office mates for their assistant and moral support.
                  Lastly, I would be remiss in not mentioning my family, especially my mother. Their belief in me has kept my spirits and motivation high during this process. I would also like to thank my cat for all the entertainment and emotional support.
                </p>
                <div className="flex justify-end">
                  <FaQuoteRight color="#7e7e7e" size={20} />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end pt-4 pe-10">
              <div className="text-center">
                <div className="text-lg"> Thanawut Tuamprajak </div>
                <text className="">Best sincerely </text>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="">  </div>
        <div className="overflow-y-auto md:max-h-[80vh] md:px-10 px-5 border border-slate-700 w-full grid justify-self-center md:col-span-5">
          <div className="my-5">
            <div className="flex items-center">
              <BiSolidLike size={35} />
              <text className="ms-2 text-4xl max-md:text-3xl"> Acknowledgements </text>
            </div>
            
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Acknowledgement