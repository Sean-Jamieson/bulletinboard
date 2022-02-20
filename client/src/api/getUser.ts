const axios = require("axios");

export const getUser = async (email: string): Promise<any> => {
  const options = {
    method: "GET",
    url: "https://dev-bg75jgi2.us.auth0.com/api/v2/users-by-email",
    params: { search_engine: "v3", email: email },
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_AUTH0_API}`,
    },
  };

  const response = await axios.request(options);
  return response.data[0];
};
