import { useProfileContext } from "@/context/ProfileContext";
import styles from "./styles.module.css";
import Head from "next/head";
import { AcknowledgementBody } from "./components/AcknowledgementBody";
import { WebHeader } from "@/components/WebHeader";
const Acknowledgement = () => {
  const { screenWidth } = useProfileContext();
  return (
    <>
      <WebHeader
        title="Thanawut - Acknowledgements"
        description="This is my acknowledgements page"
      />
      <AcknowledgementBody />
    </>
  );
};

export default Acknowledgement;
