import type { AppProps } from 'next/app';
import Container from '@components/common/Container';
import Header from '@components/common/Header';
import Body from '@components/common/Body';
import { GlobalStyles } from '@styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {/* TODO: script 컴포넌트를 통하여 GA 추가 */}
        <Body>
          <Component {...pageProps} />
        </Body>
      </Container>
    </>
  );
}

export default MyApp;
