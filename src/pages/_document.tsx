import Document, { Html, Head, Main, NextScript } from 'next/document';
import Seo from '@components/common/Seo';
import { SEO_STATIC_INFO } from '@core/constants';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/portfolio/favicon.ico" />
          <Seo
            title={SEO_STATIC_INFO.main.title as string}
            description={SEO_STATIC_INFO.main.description as string}
            url={SEO_STATIC_INFO.main.url}
            imageName={SEO_STATIC_INFO.main.imageName}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
