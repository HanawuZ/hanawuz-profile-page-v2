import ExperienceContainer from "./ExperienceContainer";
import ListItem from "@/components/ui/Listing/ListItem";
import { useProfileContext } from "@/context/ProfileContext";
import experiences from "@/constants/locales/experiences";
import themes from "@/theme";
import type { ExperienceDetail } from "@/constants/locales/experiences";

const ExperienceBody = () => {
  const { language, mode } = useProfileContext();
  return (
    <div className="m-4">
      {experiences[language]?.map((experience, index) => (
        <ExperienceContainer
          key={index}
          className="mx-4 mt-10 leading-relaxed tracking-wide"
          workplace={experience?.workplace}
          location={experience?.location}
          position={experience?.position}
          period={experience?.period}
        >
          <div key={index} className="text-white">
            {experience.details?.map((detail, index) => (
              <>
                {detail.type === "introduction" && (
                  <ExperienceDetailIntroduction
                    className="mt-3 max-md:text-sm"
                    detail={detail}
                    style={{ color: themes[mode].secondaryText }}
                  />
                )}
                {detail.type === "body" && 
                  <ExperienceDetailBody 
                    detail={detail}
                  />
                }
              </>
            ))}
          </div>

          {/*  
          <div key={index} className="mt-3">
                <text className="font-bold">{detail.title}</text>
                <ul 
                  className="max-md:text-sm list-disc max-md:mx-6 md:mx-10 break-normal hyphens-auto"
                  style={{ color: themes[mode].secondaryText }}
                >
                  {detail.list.map((item,index) => (
                    <ListItem key={index}>
                      <div className="ms-2 break-normal hyphens-auto">
                        {item}
                      </div>
                    </ListItem>
                  ))}    
                </ul>
              </div>
          */}

          {/* <ul 
            className="max-md:text-sm mt-3 list-disc max-md:mx-6 md:mx-10 break-normal hyphens-auto"
            style={{
              color: themes[mode].secondaryText
            }}
          >
            {experience.detail?.map((detail, index) => (
              <ListItem key={index}>
                <p className="ms-2 break-normal hyphens-auto">
                  {detail}
                </p>
              </ListItem>
            ))}
          </ul> */}
        </ExperienceContainer>
      ))}
    </div>
  );
};

const ExperienceDetailIntroduction = (props: ExperienceDetailProp) => {
  const { detail, className, style } = props;
  return (
    <div className={className} style={style}>
      {detail?.list.map((item, index) => item.description)}
    </div>
  );
};


//-------------------------------------------------------------------------------
const ExperienceDetailBody = (props: ExperienceDetailProp) => {
  const { detail, className, style } = props;
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2">
        {detail.titleIcon}
        <text className="font-bold">{detail.title}</text>
      </div>
      <div className="ms-2 mt-2 max-md:text-sm leading-relaxed tracking-wide">
        <ul className="max-md:text-sm list-disc max-md:mx-6 md:mx-10 break-normal hyphens-auto">
          {
            detail.list.map((item, index) => (
              <ListItem key={index}> 
                <div>{item.description} </div>
                <ul className="max-md:text-sm list-disc max-md:mx-3 md:mx-10 break-normal hyphens-auto">
                {
                  item.sublist.map((item, index) => (
                    <ListItem key={index} className="max-md:ms-2">{item}</ListItem>
                  ))
                }
                </ul>
              </ListItem>
            ))
          }
        </ul>
      </div>
      {/* <ul className="max-md:text-sm list-disc max-md:mx-6 md:mx-10 break-normal hyphens-auto">
        {detail.list.map((item, index) => (
          <ListItem key={index} className="max-md:ms-2">{item}</ListItem>
        ))}
      </ul> */}
    </div>
  );
};

interface ExperienceDetailProp {
  detail: ExperienceDetail;
  className?: string;
  style?: React.CSSProperties;
}

export default ExperienceBody;
