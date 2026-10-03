export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/Abhisheksharma91122",
  );
  const data = await response.json();
  return data;
};