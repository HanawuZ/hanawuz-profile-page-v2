
import { AcknowledgementBody } from "./components/AcknowledgementBody";
import { WebHeader } from "@/components/WebHeader";
import PageLayout from "@/components/layout/PageLayout";
const Acknowledgement = () => {
  return (
    <>
      <WebHeader
        title="Thanawut - Acknowledgements"
        description="This is my acknowledgements page"
      />
      <PageLayout title="ACKNOWLEDGEMENT">
        <AcknowledgementBody />
      </PageLayout>
    </>
  );
};

export default Acknowledgement;
