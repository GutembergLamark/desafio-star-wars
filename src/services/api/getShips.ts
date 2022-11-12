import api from ".";

interface IGetShips {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
}

const getShips = async (page: number, limit = 10) => {
  const response = await api.get<IGetShips>("/starships", {
    params: {
      limit,
      page,
    },
  });

  return response.data;
};

export default getShips;
