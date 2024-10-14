import { ReactNode } from "react";
import { useProfileContext } from "@/context/ProfileContext";
interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { darkMode } = useProfileContext();
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
        <div className="w-full md:flex md:col-span-4 lg:col-span-3 md:min-h-[100vh] md:py-10 max-md:pt-4 lg:px-4">
          <div 
            className="md:self-center w-full border border-slate-300 min-h-[80vh] lg:min-h-[90vh] pb-2 mt-10 max-sm:mt-4"
            style={{
              boxShadow: darkMode ? "0 0 20px 0 rgba(0, 0, 0, 0.5)" : "0 0 20px 0 rgba(255, 255, 255, 0.4)",
            }}
          >
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

export default PageLayout;
