const useIsMobile = (windowWidth: number) => {
  if(windowWidth <= 700) return true
  return false
};
export { useIsMobile };
