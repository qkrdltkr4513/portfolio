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
    Black10: string;
    Black20: string;
    Black30: string;
    Black40: string;
    Black50: string;
    Black60: string;
    Black70: string;
    Black80: string;
    Black90: string;
    White10: string;
    White20: string;
    White30: string;
    White40: string;
    White50: string;
    White60: string;
    White70: string;
    White80: string;
    White90: string;
    'Brand/Z_blue': string;
    'Brand/Z_green': string;
    'Brand/Z_purple': string;
    'Brand/01': string; // 분홍
    'Brand/02': string; // 노랑
    'Brand/03': string; // 청록
    'Brand/04': string; // 연분홍
    'Brand/05': string; // 주황
    'Brand/06': string; // 하늘색
    'Brand/07': string; // 빨강
    'Brand/Z_blue_Pressed': string;
    'Theme/no_name': string;
    'ERROR/red': string;
    Kakao: string;
    Naver: string;
    CoupangEats: string;
    SoldOut: string;
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
    SubTitle: string;
    H1: string;
    H2: string;
    Body1: string;
    Body2: string;
    Body3: string;
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
    Black10: '#0000001a',
    Black20: '#00000033',
    Black30: '#0000004d',
    Black40: '#00000066',
    Black50: '#00000080', // Dimmed Effect Color
    Black60: '#00000099',
    Black70: '#000000b3', // Dimmed Effect Color
    Black80: '#000000cc',
    Black90: '#000000e6',
    White10: '#ffffff1a',
    White20: '#ffffff33',
    White30: '#ffffff4d',
    White40: '#ffffff66',
    White50: '#ffffff80',
    White60: '#ffffff99',
    White70: '#ffffffb3',
    White80: '#ffffffcc',
    White90: '#ffffffe6',
    'Brand/Z_blue': '#3246FA',
    'Brand/Z_blue_Pressed': '#232CD2',
    'Brand/Z_green': '#BEFF32',
    'Brand/Z_purple': '#875AFF',
    'Brand/01': '#FF1978', // 분홍
    'Brand/02': '#FFE100', // 노랑
    'Brand/03': '#00D2AA', // 청록
    'Brand/04': '#FF82DC', // 연분홍
    'Brand/05': '#FF8200', // 주황
    'Brand/06': '#00DCFF', // 하늘색
    'Brand/07': '#FF1E1E', // 빨강
    'Theme/no_name': '#F9FF6E',
    'ERROR/red': '#FF2626',
    Kakao: '#FEE500',
    Naver: '#03C75A',
    CoupangEats: '#935227',
    SoldOut: '#1D1D1B',
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
    Title: 'font-size: 20px line-height: 20px;',
    SubTitle: 'font-size: 18px line-height: 18px;',
    H1: 'font-size: 16px line-height: 16px;',
    H2: 'font-size: 15px line-height: 15px;',
    Body1: 'font-size: 14px line-height: 14px;',
    Body2: 'font-size: 12px line-height: 12px;',
    Body3: 'font-size: 10px line-height: 10px;',
  },
};
