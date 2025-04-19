import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useCommon = () => {
  // 햄버거 오픈시 바디 스크롤 방지
  const setBodyOverflowHidden = useCallback((isBodyOverflowHidden: boolean) => {
    if (isBodyOverflowHidden) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, []);

  //
  const getWindowWidth = () => {
    const [width, setWidth] = useState<number>();

    const handleResize = useCallback(
      debounce(() => {
        setWidth(window.outerWidth);
      }, 200),
      [],
    );

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        handleResize.cancel(); // cleanup debounce
      };
    }, [handleResize]);

    return width as number;
  };

  return {
    setBodyOverflowHidden,
    getWindowWidth,
  };
};

export default useCommon;
