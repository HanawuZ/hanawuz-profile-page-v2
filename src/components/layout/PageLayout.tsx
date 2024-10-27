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
        <div/>
        <div
          className="w-full md:flex md:col-span-4 lg:col-span-3 justify-center"
          style={{
            height: "calc(100vh - 57px)",
          }}
        >
          <div className="h-full w-full overflow-y-auto md:py-4">
            <div className="w-full flex justify-center">
              <div
                className="min-h-[90vh] max-md:w-[90vw] md:w-[80vw] lg:w-[70vw] max-md:mb-28 my-5 mx-5 py-10"
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
    </div>
  );
};
export default PageLayout;
