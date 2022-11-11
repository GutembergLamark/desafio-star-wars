import api from ".";

const getCharacters = async (page: number, limit = 10) => {
  const response = await api.get("/people", {
    params: {
      limit,
      page,
    },
  });

  return response.data;
};

export default getCharacters;
