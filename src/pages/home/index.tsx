import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Thumbnail from '@components/Thumbnail';
import ThumbnailContent from '@components/ThumbnailContent';

import { THUMBNAIL_LIST } from '@core/constants';
import { imgAustin } from '@assets/images';

const Home = () => {
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
          onClick={() => console.log(112313)}
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
          onClick={() => console.log(112313)}
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
          onClick={() => console.log(112313)}
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
          onClick={() => console.log(112313)}
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
          onClick={() => console.log(112313)}
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
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'1 / 3'} height={305}>
        <Thumbnail
          textContent={
            <ThumbnailContent
              type={THUMBNAIL_LIST[6].type}
              main={THUMBNAIL_LIST[6].main}
              sub={THUMBNAIL_LIST[6].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={305}>
        테스트 8
      </GridCard>
    </GridBox>
  );
};

export default Home;
