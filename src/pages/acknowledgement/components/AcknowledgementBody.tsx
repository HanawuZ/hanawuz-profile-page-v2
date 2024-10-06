import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AcknowledgementBody = () => {
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 "
        style={{
          zIndex: 100,
        }}
      >
        <div></div>
        <div className="w-full grid justify-self-center md:col-span-4 lg:col-span-3 min-h-[90vh]">
          <div className="w-full flex justify-center">
            <text className="text-2xl text-center font-bold max-md:mt-5 mt-10 max-md:ms-3">
              ACKNOWLEDGEMENTS
            </text>
          </div>
          <div className="">
            <div className="mt-3">
              <div className="grid p-5">
                <FaQuoteLeft color="#7e7e7e" size={20} />
                <p className="text-center text-md md:mx-14">
                  🌟 Special Thanks - I would like to take a moment to express
                  my heartfelt gratitude to all those who have contributed,
                  inspired, or supported me along the journey. Your
                  encouragement, feedback, and shared enthusiasm have been
                  invaluable. Many thanks to my mentor for their invaluable
                  guidance and feedback throughout this journey. Lastly, thank
                  you to my family for believing in me, even when I doubted
                  myself.
                </p>
                <div className="flex justify-end">
                  <FaQuoteRight color="#7e7e7e" size={20} />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end pt-4 pe-10 mb-8">
              <div className="text-center">
                <div className="text-lg"> Thanawut Tuamprajak </div>
                <text className="">Best sincerely </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AcknowledgementBody };
