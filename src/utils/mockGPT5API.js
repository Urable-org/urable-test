export const mockGPT5API = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          message: "This is a mock response from GPT-5 API."
        }
      });
    }, 1000);
  });
};
