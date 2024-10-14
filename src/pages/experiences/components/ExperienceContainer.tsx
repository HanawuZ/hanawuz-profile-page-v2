import { useProfileContext } from "@/context/ProfileContext";
import themes from "@/theme";

interface ExperienceContainerProps {
  className?: string;
  workplace?: string;
  location?: string;
  position?: string;
  period?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const ExperienceContainer = (props: ExperienceContainerProps) => {
  const { className, workplace, location, position, period, children, style } =
    props;
  const { mode } = useProfileContext();
  return (
    <div id="experience" className={className} style={style}>
      <div
        style={{
          color: themes[mode].primaryText,
        }}
      >
        <div className="sm:flex max-md:mx-4 mt-2">
          <div className="font-bold w-full">{workplace?.toUpperCase()}</div>
          <div className="font-bold w-full sm:text-end">{location}</div>
        </div>
        <div className="sm:flex max-md:mx-4 max-md:text-sm max-sm:mt-2">
          <div className="italic w-full">{position}</div>
          <div className="sm:text-end w-full">{period}</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export { ExperienceContainer };
