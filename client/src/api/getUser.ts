const axios = require("axios").default;
export const getUser = async (email: string): Promise<any> => {
  let options = {
    method: "GET",
    url: "https://dev-bg75jgi2.us.auth0.com/api/v2/users-by-email",
    params: { search_engine: "v3", email },
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_AUTH0_API}`,
    },
  };

  axios
    .request(options)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error: any) {
      return error;
    });
};
