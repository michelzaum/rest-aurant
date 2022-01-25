import { API } from './api';

export async function getAllCategories() {
  try {
    const { data } = await API.get('/categories');
    return data;
  } 
  catch (ex) {
    console.log('Error in "getAllCategories" function in "category.ts" file: ', ex);
  }
}