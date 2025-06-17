import ExperienceContainer from "./ExperienceContainer";
import ListItem from "@/components/ui/Listing/ListItem";
import { useProfileContext } from "@/context/ProfileContext";
import experiences from "@/constants/locales/experiences";
import themes from "@/theme";
import type { ExperienceDetail } from "@/constants/locales/experiences";
import styles from "./styles.module.css";

const ExperienceBody = () => {
  const { language, mode } = useProfileContext();
  return (
    <div className="m-4">
      {experiences[language]?.map((experience, index) => (
        <ExperienceContainer
          key={index}
          className="mx-4 mt-10 mb-20 leading-relaxed tracking-wide"
          workplace={experience?.workplace}
          location={experience?.location}
          position={experience?.position}
          period={experience?.period}
        >
          <div key={`exp-container-${index}`} className="text-white">
            {experience.details?.map((detail, index) => (
              <>
                {detail.type === "introduction" && (
                  <ExperienceDetailIntroduction
                    key={`exp-intro-${index}`}
                    className="mt-6"
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
          <div className={`${styles.experienceDivider} ${styles.experienceDividerTransparent}`}></div>
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
    <div className="mt-8">
      <div className="flex items-center gap-2">
        {detail.titleIcon}
        <div className="font-bold text-lg">{detail.title}</div>
      </div>
      <div className="ms-2 mt-2 leading-relaxed tracking-wide">
        <ul className=" list-disc break-normal hyphens-auto">
          {
            detail.list.map((item, index) => (
              <div key={index} className="mb-8 mt-4">
                <div>{item.description} </div>
                <ul className="list-disc max-md:mx-3 ms-8 break-normal hyphens-auto">
                {
                  item.sublist.map((item, index) => (
                    <ListItem key={index} className="max-md:ms-2">{item}</ListItem>
                  ))
                }
                </ul>
              </div>
              // <ListItem className="mt-4" key={index}> 
              //   <div>{item.description} </div>
                // <ul className="max-md:text-sm list-disc max-md:mx-3 md:mx-10 break-normal hyphens-auto">
                // {
                //   item.sublist.map((item, index) => (
                //     <ListItem key={index} className="max-md:ms-2">{item}</ListItem>
                //   ))
                // }
                // </ul>
              // </ListItem>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

interface ExperienceDetailProp {
  detail: ExperienceDetail;
  className?: string;
  style?: React.CSSProperties;
}

export default ExperienceBody;
