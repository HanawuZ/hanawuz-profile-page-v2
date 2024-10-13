import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { title, children } = props;
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4"
        style={{
          zIndex: 100,
        }}
      >
        <div />
        <div className="w-full justify-self-center md:col-span-4 lg:col-span-3 min-h-[90vh]">
          <div className="md:self-center	w-full ">
            <div className="sm:mt-10 max-md:ms-3 flex justify-center">
              <text className="text-2xl font-bold max-md:mt-5 mt-10 max-md:ms-3">
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

export default PageLayout;
