//import { stringify } from "querystring";

//const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const searchPexelsApi = async (query: string) => {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      'Content-Type': 'application/json',
     Authorization: 'gafdR2iEX4u4A7AAfijiy5pHjqhr2kpc44G4BQqJmc40a9MyqXiSf2Ry'
    },
  });

  const data = await response.json()

  return data;
}

  //gafdR2iEX4u4A7AAfijiy5pHjqhr2kpc44G4BQqJmc40a9MyqXiSf2Ry