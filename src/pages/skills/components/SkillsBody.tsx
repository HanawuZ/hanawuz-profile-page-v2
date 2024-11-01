import Badge from "@/components/Badge";
import skillList from "@/constants/locales/skills";
import { useProfileContext } from "@/context/ProfileContext";
import themes from "@/theme";

const SkillsBody = () => {
  const { language, mode } = useProfileContext();
  return (
    <div className="grid gap-6 m-4">
      {skillList[language]?.map((skill, index) => (
        <div 
          key={index} 
          className="max-md:mx-4 mt-6"
        >
          <div 
            className="font-bold w-full flex gap-3 items-center"
            style={{
              color: themes[mode].primaryText,
            }}
          >
            <span>{skill.icon}</span>
            <text className="text-lg"> {skill.title} </text>
          </div>
          <div className="flex flex-wrap mt-3 gap-2">
            {skill.tech?.map((tech, index) => (
              <Badge key={index} {...tech} />
            ))}
          </div>
          <div className="mt-6 max-w-[100vw]">
            <p 
              className="break-normal hyphens-auto leading-relaxed tracking-wide"
              style={{
                color: themes[mode].secondaryText,
              }}
            >
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { SkillsBody };
