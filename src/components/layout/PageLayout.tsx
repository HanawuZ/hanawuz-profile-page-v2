import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { title, children } = props;
  return (
    <div className="h-full md:overflow-y-auto sm:px-8 max-sm:mt-6 max-md:mb-24">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4"
        style={{
          zIndex: 100,
        }}
      >
        <div />
        <div className="w-full md:flex md:col-span-4 lg:col-span-3 md:min-h-[96vh] md:py-10 max-md:pt-4 lg:px-4">
          <div className="md:self-center w-full border border-slate-300 min-h-[80vh] lg:min-h-[90vh] shadow-lg pb-2">
            <div className="mt-8 max-md:ms-3 flex justify-center">
              <text className="text-2xl uppercase font-bold max-md:ms-3">
                {title}
              </text>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
<div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6 max-md:mb-32 mb-16">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4"
        style={{
          zIndex: 100,
        }}
      >
        <div />
        <div className="w-full justify-self-center md:col-span-4 lg:col-span-3 min-h-[90vh] border border-red-800">
          Hello
        </div>
        <div className="w-full justify-self-center md:col-span-4 lg:col-span-3 min-h-[90vh] border border-red-800">
          <div className="md:self-center	w-full border border-slate-800 rounded-xl">
            <div className="sm:mt-10 max-md:ms-3 flex justify-center">
              <text className="text-2xl uppercase font-bold max-md:mt-5 mt-10 max-md:ms-3">
                {title}
              </text>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
*/

export default PageLayout;
