import { ExperienceContainer } from "./ExperienceContainer";
import ListItem from "@/components/ui/Listing/ListItem";
import { useProfileContext } from "@/context/ProfileContext";
import experiences from "@/constants/locales/experiences";
import themes from "@/theme";

const ExperienceBody = () => {
  const { language, mode } = useProfileContext();
  return (
    <div className="m-4">
      {experiences[language]?.map((experience, index) => (
        <ExperienceContainer
          key={index}
          className="mx-4 mt-8 leading-relaxed tracking-wide"
          workplace={experience?.workplace}
          location={experience?.location}
          position={experience?.position}
          period={experience?.period}
        >
          <ul 
            className="max-md:text-sm mt-3 list-disc mx-10 break-all"
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
          </ul>
        </ExperienceContainer>
      ))}
    </div>
  );
};

export { ExperienceBody };
