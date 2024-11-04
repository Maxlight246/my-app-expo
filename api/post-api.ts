export const getPostApi = {
  url: "https://jsonplaceholder.typicode.com/posts?userId=1",
};

export const createPostApi = {
  url: "https://jsonplaceholder.typicode.com/posts",
  options: (text: any, number: any) => {
    return {
      method: "POST",
      body: JSON.stringify({
        title: text,
        body: number,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  },
};
