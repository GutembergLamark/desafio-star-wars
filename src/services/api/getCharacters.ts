import api from ".";

interface IGetCharacters {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
}

const getCharacters = async (page: number, limit = 10) => {
  const response = await api.get<IGetCharacters>("/people", {
    params: {
      limit,
      page,
    },
  });

  return response.data;
};

export default getCharacters;
