const swap = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/films/");
    console.log(res.json());
    // return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default swap;
