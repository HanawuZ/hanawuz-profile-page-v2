import Head from "next/head";

interface WebHeaderProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

const WebHeader = (props: WebHeaderProps) => {
  const { title, description, url, image } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@0xThana" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> 
    </Head>
  );
};

export { WebHeader };
