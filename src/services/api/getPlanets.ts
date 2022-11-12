import api from ".";

interface IGetPlanets {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
}

const getPlanets = async (page: number, limit = 10) => {
  const response = await api.get<IGetPlanets>("/planets", {
    params: {
      limit,
      page,
    },
  });

  return response.data;
};

export default getPlanets;
