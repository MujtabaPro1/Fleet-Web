import { useState, useEffect } from 'react'

export function checkDevice(device: any) {

  switch (device) {
    case 'desktop':
      if (typeof window !== "undefined") {
        return (window?.innerWidth > 1023) ? true : false;
      }
      break;
    case 'ipad':
      if (typeof window !== "undefined") {
        return (window?.innerWidth >= 768 && window?.innerWidth < 1024) ? true : false;
      }
      break;
    case 'ipad-mobile':
      if (typeof window !== "undefined") {
        return (window?.innerWidth < 1024) ? true : false;
      }
      break;
    case 'mobile':
      if (typeof window !== "undefined") {
        return (window?.innerWidth < 768) ? true : false;
      }
      break;
    case 'isdesktop':
      if (typeof window !== "undefined") {
        return (window?.innerWidth > 768) ? true : false;
      }
      break;
  }

}

const useIsDevice = (device: any) => {
  const [windWidth, setWindWidth] = useState<any>(false);

  useEffect(() => {
    const updateMobile = () => {
      setWindWidth(checkDevice(device));
    }
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [device]);
  
  return windWidth;
}

export default useIsDevice;