import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if(!user) return <h1>Not Logged In</h1>
  return <div>Profile : {user}</div>;
};

export default Profile;
