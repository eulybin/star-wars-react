import { BASE_URL } from '../utils/constants';

// GET REQUEST FOR ALL PEOPLE
export const getAllPeople = async () => {
  try {
    const response = await fetch(`${BASE_URL}/people`);
    if (!response.ok) {
      throw new Error('Could not fetch all the people!');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
