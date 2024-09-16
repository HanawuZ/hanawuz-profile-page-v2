import Head from "next/head";

interface ExperienceHeaderProps {
  title?: string;
}

const ExperienceHeader = (props: ExperienceHeaderProps) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export { ExperienceHeader }
