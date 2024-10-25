const useIsMobile = (windowWidth: number) => {
  if(windowWidth <= 365) return true
  return false
};
export { useIsMobile };
