function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Abhishek", url: "https://AbhishekSharma.com" });
    }, 2000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data: ", userData);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

getUserData();
