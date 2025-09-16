import { BASE_URL } from '../utils/constants';

// GET REQUEST FOR ALL VEHICLES
export const getAllVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/vehicles`);
    if (!response.ok) {
      throw new Error('Could not fetch all the vehicles!');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
