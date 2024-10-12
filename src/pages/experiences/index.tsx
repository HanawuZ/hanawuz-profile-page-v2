import { WebHeader } from "@/components/WebHeader";
import { ExperienceBody } from "./components/ExperienceBody";
import PageLayout from "@/components/layout/PageLayout";

const Experiences = () => {
  return (
    <>
      <WebHeader title="Thanawut - Experiences" />
      <PageLayout title="EXPERIENCES">
        <ExperienceBody />
      </PageLayout>
    </>
  );
};

export default Experiences;
