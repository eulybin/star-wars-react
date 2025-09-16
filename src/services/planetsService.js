import { BASE_URL } from '../utils/constants';

// GET REQUEST FOR ALL PLANETS
export const getAllPlanets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/planets`);
    if (!response.ok) {
      throw new Error('Could not fetch all the planets!');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
