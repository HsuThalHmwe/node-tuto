const fetchData = async () => {
  const response = await fetch("http://localhost:3000/data");
  console.log(response);
};
console.log("heyyyyy");
fetchData();
