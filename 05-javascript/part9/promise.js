function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error while fetching data!")
      }
    }, 2000);
  });
}

fetchData()
    .then((data) => {
        console.log(data)
        return data.toUpperCase()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {console.log(error)})
