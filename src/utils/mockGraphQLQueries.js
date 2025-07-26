export const mockGraphQLQueries = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com"
          }
        }
      });
    }, 1000);
  });
};
