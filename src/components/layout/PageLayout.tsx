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
    <div className="h-full">
      <div className="grid md:grid-cols-5 lg:grid-cols-4 z-[100]">
        <div className="" />
        <div
          className="w-full md:flex md:col-span-4 lg:col-span-3 justify-center"
          style={{
            height: "calc(100vh - 57px)",
          }}
        >
          <div
            className="w-full flex justify-center"
            style={{
              height: "calc(100vh - 57px)",
            }}
          >
            <div className="max-md:px-5 px-8 w-full overflow-y-auto">
              <div
                className="mt-5 mb-5 max-md:mb-24 min-h-[90vh] py-4 max-w-[1280px]"
                style={{
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                  backgroundColor: themes[mode].sheetBackground,
                }}
              >
                <div
                  className="flex justify-center mt-4"
                  style={{
                    color: themes[mode].primaryText,
                  }}
                >
                  <text className="text-2xl uppercase font-bold ">{title}</text>
                </div>
                {children}
              </div>
            </div>
            {/*
             */}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
<div className="h-full">
      <div className="grid md:grid-cols-5 lg:grid-cols-4 z-[100]">
        <div />
        <div
          className="w-full md:flex md:col-span-4 lg:col-span-3 justify-center"
          style={{
            height: "calc(100vh - 57px)",
          }}
        >
          <div className="min-h-[90vh] px-10 w-full pb-28 md:pb-0">
            <div
              className="md:self-center min-h-[80vh] "
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
*/
export default PageLayout;
