"use server";

export const fetchOne = async (id) => {
  const response = await fetch(`https://shikimori.one/api/animes?${id}`);
  const one = await response.json();

  return one;
};
