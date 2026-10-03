import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  return <div className="text-center text-3xl bg-amber-600 p-2">User : {id}</div>;
};

export default User;
User;
