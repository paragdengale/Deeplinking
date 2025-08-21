import { get } from 'axios';

const fetchPost = async (id) => {
  try {
    const results = await get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return results.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error; // Re-throw the error to propagate it if needed
  }
};

export default fetchPost;

