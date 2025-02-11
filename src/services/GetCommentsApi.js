export const fetchUserComments = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );
  return res.json();
};
