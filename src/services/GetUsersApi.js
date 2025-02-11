export const fetchUsers = async (page, limit) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  return res.json();
};
