import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
