import { useFetch, createFetch } from "@vueuse/core";

const getMyToken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("my-token");
    }, 1000);
  });
};

const request = createFetch({
  baseUrl: "https://my-api.com",
  options: {
    async beforeFetch({ options }) {
      const myToken = await getMyToken();
      options.headers.Authorization = `Bearer ${myToken}`;

      return { options };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});

export default request;
