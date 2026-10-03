// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Abhisheksharma91122")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="text-3xl text-center text-white bg-gray-600 p-12">
        Github : {data?.login}{" "}
        Followers : {data?.followers}
        <img src={data?.avatar_url} alt="Profile image" />
      </div>
    </>
  );
};

export default Github;
