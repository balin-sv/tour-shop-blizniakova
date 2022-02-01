export const getAllItemsList = async () => {
  try {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
