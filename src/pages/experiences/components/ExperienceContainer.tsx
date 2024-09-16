interface ExperienceContainerProps {
  className?: string;
  workplace?: string;
  location?: string;
  position: string;
  period: string;
  children: React.ReactNode;
}

const ExperienceContainer = (props: ExperienceContainerProps) => {
  const { className, workplace, location, position, period, children } = props;
  return (
    <div id="experience" className={className}>
      <div className="sm:flex max-md:mx-4 mt-2">
        <div className="font-bold w-full">
          {workplace?.toUpperCase()}
        </div>
        <div className="font-bold w-full sm:text-end">
          {location}
        </div>
      </div>
      <div className="sm:flex max-md:mx-4 max-md:text-sm max-sm:mt-2">
        <div className="italic w-full">
          {position}
        </div>
        <div className="sm:text-end w-full">
          {period}
        </div>
      </div>
      {children}
    </div>
  );
};

export { ExperienceContainer };
