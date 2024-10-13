
import { AcknowledgementBody } from "./components/AcknowledgementBody";
import { WebHeader } from "@/components/WebHeader";
import PageLayout from "@/components/layout/PageLayout";
import { useProfileContext } from "@/context/ProfileContext";
import pageLocales from "@/constants/locales/page";
const Acknowledgement = () => {

  const { language } = useProfileContext();
  const acknowledgementTitle = pageLocales[language].acknowledgement;
  return (
    <>
      <WebHeader
        title="Thanawut - Acknowledgements"
        description="This is my acknowledgements page"
      />
      <PageLayout title={acknowledgementTitle.toUpperCase()}>
        <AcknowledgementBody />
      </PageLayout>
    </>
  );
};

export default Acknowledgement;
