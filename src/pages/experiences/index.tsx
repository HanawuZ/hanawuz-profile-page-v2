import { WebHeader } from "@/components/WebHeader";
import { ExperienceBody } from "./components/ExperienceBody";
import PageLayout from "@/components/layout/PageLayout";
import { useProfileContext } from "@/context/ProfileContext";
import pageLocales from "@/constants/locales/page";
const Experiences = () => {
  const { language } = useProfileContext();
  return (
    <>
      <WebHeader 
        title={`Thanawut - ${pageLocales[language].experiences}`}
        description="This is my experiences page"
      />
      <PageLayout title={pageLocales[language].experiences}>
        <ExperienceBody />
      </PageLayout>
    </>
  );
};

export default Experiences;
