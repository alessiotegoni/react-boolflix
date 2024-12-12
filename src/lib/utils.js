import { movieApi } from "../configs/api";

export const fetchTMDB = async (endpoint, types, params, updater) => {
  const urlEnd = endpoint === "/genre" ? "/list" : "";
  try {
    if (Array.isArray(types)) {
      for (const type of types) {
        const { data } = await movieApi.get(`${endpoint}/${type}${urlEnd}`, {
          params,
        });
        updater(type, data);
      }
    } else {
      const { data } = await movieApi.get(`${endpoint}/${types}${urlEnd}`, {
        params,
      });
      updater(types, data);
    }
  } catch (err) {
    console.error(err);
  }
};
