import Head from 'next/head';
import { useRouter } from 'next/router';
import Seo from '@components/common/Seo';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Thumbnail from '@components/Thumbnail';
import ThumbnailContent from '@components/ThumbnailContent';

import { THUMBNAIL_LIST, PAGE_INFOS, SEO_STATIC_INFO } from '@core/constants';

const Home = () => {
  const router = useRouter();

  // 전달 받은 URL로 페이지 이동한다.
  const moveToPage = (pageUrl: string) => {
    router.push(pageUrl);
  };

  return (
    <>
      <Seo
        title={SEO_STATIC_INFO.home.title}
        description={SEO_STATIC_INFO.home.description}
        url={SEO_STATIC_INFO.home.url}
        imageName={SEO_STATIC_INFO.home.imageName}
      />
      {/* <Head>
        <title>[포트폴리오] - Home</title>
        <meta></meta>
      </Head> */}
      <GridBox>
        <GridCard
          columnSize={'1 / 3'}
          height={305}
          isResizeHeight
          imageName="img-main-about-me2"
          onClick={() => moveToPage(PAGE_INFOS.ABOUT.path)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[0].type}
                main={THUMBNAIL_LIST[0].main}
                sub={THUMBNAIL_LIST[0].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'3 / 4'}
          height={305}
          isResizeHeight
          imageName="img-main-resume"
          onClick={() => moveToPage(PAGE_INFOS.RESUME.path)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[1].type}
                main={THUMBNAIL_LIST[1].main}
                sub={THUMBNAIL_LIST[1].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'4 / 5'}
          height={305}
          isResizeHeight
          imageName="img-main-commerce"
          onClick={() => moveToPage(`${PAGE_INFOS.WORK.path}/detail/?workId=23`)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[2].type}
                main={THUMBNAIL_LIST[2].main}
                sub={THUMBNAIL_LIST[2].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'1 / 2'}
          height={305}
          isResizeHeight
          imageName="img-main-mobile-app"
          onClick={() => moveToPage(`${PAGE_INFOS.WORK.path}/detail/?workId=26`)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[3].type}
                main={THUMBNAIL_LIST[3].main}
                sub={THUMBNAIL_LIST[3].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'2 / 3'}
          height={305}
          isResizeHeight
          imageName="img-main-smart-building"
          onClick={() => moveToPage(`${PAGE_INFOS.WORK.path}/detail/?workId=10`)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[4].type}
                main={THUMBNAIL_LIST[4].main}
                sub={THUMBNAIL_LIST[4].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'3 / 5'}
          height={305}
          isResizeHeight
          imageName="img-main-all-project"
          onClick={() => moveToPage(PAGE_INFOS.WORK.path)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[5].type}
                main={THUMBNAIL_LIST[5].main}
                sub={THUMBNAIL_LIST[5].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'1 / 3'}
          height={305}
          isResizeHeight
          imageName="img-main-dashboard"
          onClick={() => moveToPage(PAGE_INFOS.DASHBOARD.path)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[6].type}
                main={THUMBNAIL_LIST[6].main}
                sub={THUMBNAIL_LIST[6].sub}
              />
            }
          />
        </GridCard>
        <GridCard
          columnSize={'3 / 5'}
          height={305}
          isResizeHeight
          imageName="img-main-contact"
          onClick={() => moveToPage(PAGE_INFOS.ABOUT.path)}
        >
          <Thumbnail
            textContent={
              <ThumbnailContent
                type={THUMBNAIL_LIST[7].type}
                main={THUMBNAIL_LIST[7].main}
                sub={THUMBNAIL_LIST[7].sub}
              />
            }
          />
        </GridCard>
      </GridBox>
    </>
  );
};

export default Home;
