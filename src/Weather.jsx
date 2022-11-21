const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${X - RapidAPI - Key}`,
    "X-RapidAPI-Host": `${X - RapidAPI - Host}`,
  },
};

fetch(`${process.env.REACT_APP_API_URL}`, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
