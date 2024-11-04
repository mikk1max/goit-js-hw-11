const apiKey = import.meta.env.PIXABAY_API_KEY;

const options = new URLSearchParams({
  key: '46868133-33c4a6dc591014855bc3379a8',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

function fetchUsers(q) {
  return fetch(`https://pixabay.com/api/?q=${q}&${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default fetchUsers;