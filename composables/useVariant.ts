export const useVariant = () => {
  return useColorMode().value === 'light' ? 'outline' : 'soft';
};