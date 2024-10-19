import { ReactNode } from "react";
import { useProfileContext } from "@/context/ProfileContext";
import themes from "@/theme";
interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { mode } = useProfileContext();
  const { title, children } = props;
  return (
    <div  className="h-full">
      <div className="grid md:grid-cols-5 lg:grid-cols-4 z-[100]">
        <div />
        <div
          className="w-full md:flex md:col-span-4 lg:col-span-3 justify-center"
          style={{
            height: "calc(100vh - 57px)",
          }}
        >
          <div className="min-h-[90vh] px-10 w-full">
            <div
              className="md:self-center w-full min-h-[80vh] my-10 max-md:mb-28 py-6"
              style={{
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                backgroundColor: themes[mode].sheetBackground,
              }}
            >
              <div
                className="flex justify-center"
                style={{
                  color: themes[mode].primaryText,
                }}
              >
                <text className="text-2xl uppercase font-bold ">{title}</text>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
<div className="h-full md:overflow-y-auto sm:px-8  max-md:mb-24">
      <div className="grid md:grid-cols-5 lg:grid-cols-4 z-[100]" >
        <div />
        <div className="w-full md:flex md:col-span-4 lg:col-span-3 md:min-h-[100vh] md:py-10  px-4">
          <div 
            className="md:self-center w-full min-h-[80vh] lg:min-h-[90vh] pb-8 mt-10 max-sm:mt-4"
            style={{
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundColor: themes[mode].sheetBackground,
            }}
          >
            <div 
              className="pt-8 flex justify-center"
              style={{
                color: themes[mode].primaryText,
              }}
            >
              <text className="text-2xl uppercase font-bold ">
                {title}
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
export default PageLayout;
