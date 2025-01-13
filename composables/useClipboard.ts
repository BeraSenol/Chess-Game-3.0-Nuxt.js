export const useClipboard = () => {
  const succes = ref<boolean>(false);
  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      succes.value = true;
    } catch (error) {
      succes.value = false;
    }
  };
  return { succes, copyToClipboard };
};