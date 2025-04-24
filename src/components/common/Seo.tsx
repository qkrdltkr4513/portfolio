import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  url: string;
  imageName?: string;
}

const Seo = ({ title, description, url, imageName }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="[포트폴리오] FE Developer - 박이삭" />
      {imageName && <meta property="og:image" content={`${imageName}`} />}

      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageName && <meta name="twitter:image" content={imageName} />} */}
    </Head>
  );
};

export default Seo;
