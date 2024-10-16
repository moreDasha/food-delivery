export const TABLET_WIDTH = 840;
export const MOBILE_WIDTH = 530;

export const checkViewport = (width: number) => {
  return window.innerWidth < width;
};