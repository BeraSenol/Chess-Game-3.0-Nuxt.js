export const useButtonVariant = () => {
  return useColorMode().value === 'light' ? 'outline' : 'soft';
};