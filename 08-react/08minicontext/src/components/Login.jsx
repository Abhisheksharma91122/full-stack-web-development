import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    setUser(formData.username);
    setFormData({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Login</div>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />{" "}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
