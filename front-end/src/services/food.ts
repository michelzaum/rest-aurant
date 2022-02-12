import { API } from './api';

export const getAllFoods = async() => {
  try {
    const { data } = await API.get('/foods');
    return data;
  }
  catch (ex) {
    console.log('Error in "getAllFoods" function in food.ts file: ', ex)
  }
}