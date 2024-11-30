import { useRouter } from 'next/router';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Thumbnail from '@components/Thumbnail';
import ThumbnailContent from '@components/ThumbnailContent';

import { THUMBNAIL_LIST, PAGE_INFOS } from '@core/constants';
import { imgAustin } from '@assets/images';

const Home = () => {
  const router = useRouter();

  //
  const moveToPage = (pageUrl: string) => {
    router.push(pageUrl);
  };

  return (
    <GridBox>
      <GridCard columnSize={'1 / 3'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: true,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[0].type}
              main={THUMBNAIL_LIST[0].main}
              sub={THUMBNAIL_LIST[0].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.ABOUT.path)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 4'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[1].type}
              main={THUMBNAIL_LIST[1].main}
              sub={THUMBNAIL_LIST[1].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.RESUME.path)}
        />
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[2].type}
              main={THUMBNAIL_LIST[2].main}
              sub={THUMBNAIL_LIST[2].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.WORK.path)}
        />
      </GridCard>
      <GridCard columnSize={'1 / 2'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[3].type}
              main={THUMBNAIL_LIST[3].main}
              sub={THUMBNAIL_LIST[3].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.WORK.path)}
        />
      </GridCard>
      <GridCard columnSize={'2 / 3'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[4].type}
              main={THUMBNAIL_LIST[4].main}
              sub={THUMBNAIL_LIST[4].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.WORK.path)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[5].type}
              main={THUMBNAIL_LIST[5].main}
              sub={THUMBNAIL_LIST[5].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.WORK.path)}
        />
      </GridCard>
      <GridCard columnSize={'1 / 3'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[6].type}
              main={THUMBNAIL_LIST[6].main}
              sub={THUMBNAIL_LIST[6].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.DASHBOARD.path)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={305}>
        <Thumbnail
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[7].type}
              main={THUMBNAIL_LIST[7].main}
              sub={THUMBNAIL_LIST[7].sub}
            />
          }
          onClick={() => moveToPage(PAGE_INFOS.ABOUT.path)}
        />
      </GridCard>
    </GridBox>
  );
};

export default Home;
