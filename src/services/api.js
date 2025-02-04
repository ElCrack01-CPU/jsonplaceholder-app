export const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (page = 1, limit = 5) => {
  const response = await fetch(`${API_URL}/users?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Error fetching users');
  return response.json();
};

export const fetchPosts = async (page = 1, limit = 5) => {
  const response = await fetch(`${API_URL}/posts?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Error fetching posts');
  return response.json();
};

export const fetchComments = async (page = 1, limit = 5) => {
  const response = await fetch(`${API_URL}/comments?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Error fetching comments');
  return response.json();
};