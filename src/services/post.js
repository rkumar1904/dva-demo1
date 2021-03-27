
import axios from 'axios';

export async function getPost(params) {
  console.log('url params', params);
  return axios.get('https://theglobalknowledgeworker.com/wp-json/wp/v2/posts');
}