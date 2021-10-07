export const request = async (params) => {
  return await fetch('/.netlify/functions/movie', {
    method: 'POST',
    body: JSON.stringify(params),
  }).then((res) => res.json());
};
