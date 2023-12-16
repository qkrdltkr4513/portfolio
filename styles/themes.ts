export interface ThemesProps {
  // 색상
  colors: {
    Black: string;
    White: string;
    'White/0.6': string;
    'Gray/01': string;
    'Gray/02': string;
    'Gray/03': string;
    'Gray/04': string;
    'Gray/05': string;
    'Gray/06': string;
    'Gray/07': string;
    'Gray/08': string;
    'Gray/09': string;
    'Gray/10': string;
    'Gray/11': string;
    'Gray/12': string;
    'Gray/13': string;
    'Gray/14': string;
    'Gray/15': string;
    'Black/01': string;
    'Black/02': string;
    'Black/03': string;
    'Black/04': string;
    'Black/05': string;
    'Black/06': string;
    'Black/07': string;
    'Black/08': string;
    'Black/09': string;
    'White/01': string;
    'White/02': string;
    'White/03': string;
    'White/04': string;
    'White/05': string;
    'White/06': string;
    'White/07': string;
    'White/08': string;
    'White/09': string;
    Blue: string;
    Green: string;
    Purple: string;
    Pink: string; // 분홍
    Yellow: string; // 노랑
    BlueGreen: string; // 청록
    LightPink: string; // 연분홍
    Orange: string; // 주황
    Skyblue: string; // 하늘색
    Red: string; // 빨강
    Title: string; // 제목에 사용되고 옅은 노랑
    Contents: string; // sub title과 내용에 사용
  };

  // 글씨 두께
  fontWeight: {
    Bold: string;
    SemiBold: string;
    Medium: string;
    Normal: string;
    Light: string;
  };

  // 글씨 크기
  fontSize: {
    Title: string;
    MainTitle: string;
    SubTitle: string;
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    Body1: string;
    Body2: string;
    Body3: string;
    ClampTitle: string;
    ClampMainTitle: string;
    ClampSubTitle: string;
    ClampH1: string;
    ClampH2: string;
    ClampBody1: string;
    ClampBody2: string;
    ClampBody3: string;
  };
}

export const themes: ThemesProps = {
  // 색상
  colors: {
    Black: '#000000',
    White: '#FFFFFF',
    'White/0.6': '#ffffff99',
    'Gray/01': '#F9F9F9',
    'Gray/02': '#F5F5F5',
    'Gray/03': '#F5F4F3',
    'Gray/04': '#EFEFEF',
    'Gray/05': '#ECECEC',
    'Gray/06': '#DFDFDF',
    'Gray/07': '#CECECE',
    'Gray/08': '#C1C1C1',
    'Gray/09': '#A5A5A5',
    'Gray/10': '#8B8B8B',
    'Gray/11': '#6F6F6F',
    'Gray/12': '#3D3D3D',
    'Gray/13': '#333333',
    'Gray/14': '#242424',
    'Gray/15': '#171717',
    'Black/01': '#0000001a',
    'Black/02': '#00000033',
    'Black/03': '#0000004d',
    'Black/04': '#00000066',
    'Black/05': '#00000080',
    'Black/06': '#00000099',
    'Black/07': '#000000b3',
    'Black/08': '#000000cc',
    'Black/09': '#000000e6',
    'White/01': '#ffffff1a',
    'White/02': '#ffffff33',
    'White/03': '#ffffff4d',
    'White/04': '#ffffff66',
    'White/05': '#ffffff80',
    'White/06': '#ffffff99',
    'White/07': '#ffffffb3',
    'White/08': '#ffffffcc',
    'White/09': '#ffffffe6',
    Blue: '#3246FA',
    Green: '#BEFF32',
    Purple: '#875AFF',
    Pink: '#FF1978', // 분홍
    Yellow: '#FFE100', // 노랑
    BlueGreen: '#00D2AA', // 청록
    LightPink: '#FF82DC', // 연분홍
    Orange: '#FF8200', // 주황
    Skyblue: '#00DCFF', // 하늘색
    Red: '#FF1E1E', // 빨강
    Title: '#FFC552', // 제목에 사용되고 옅은 노랑
    Contents: '#D9D5C9', // sub title과 내용에 사용
  },

  // 글씨 두께
  fontWeight: {
    Bold: 'font-weight: 700;',
    SemiBold: 'font-weight: 600;',
    Medium: 'font-weight: 500;',
    Normal: 'font-weight: 400;',
    Light: 'font-weight: 300;',
  },

  // 글씨 크기
  fontSize: {
    Title: 'font-size: 28px; line-height: 28px;',
    MainTitle: 'font-size: 22px; line-height: 22px;',
    SubTitle: 'font-size: 12px; line-height: 12px;',
    H1: 'font-size: 18px; line-height: 18px;',
    H2: 'font-size: 17px; line-height: 17px;',
    H3: 'font-size: 16px; line-height: 16px;',
    H4: 'font-size: 15px; line-height: 15px;',
    Body1: 'font-size: 14px; line-height: 14px;',
    Body2: 'font-size: 12px; line-height: 12px;',
    Body3: 'font-size: 10px; line-height: 10px;',

    ClampTitle: 'font-size: clamp(26px, 18vw, 320px); line-height: 1;',
    ClampMainTitle: 'font-size: clamp(22px, 10vw, 30px); line-height: 1;',
    ClampSubTitle: 'font-size: clamp(20px, 9vw, 28px); line-height: 1;',
    ClampH1: 'font-size: clamp(18px, 8vw, 26px); line-height: 1;',
    ClampH2: 'font-size: clamp(16px, 6vw, 24px); line-height: 1;',
    ClampBody1: 'font-size: clamp(14px, 4vw, 22px); line-height: 1;',
    ClampBody2: 'font-size: clamp(12px, 3vw, 20px); line-height: 1;',
    ClampBody3: 'font-size: clamp(10px, 2vw, 18px); line-height: 1;',
  },
};
