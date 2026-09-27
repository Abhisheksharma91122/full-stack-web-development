import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-600 rounded-2xl">vite with tailwind</h1>
      <Card carName="BMW" model="M4 competition" />
      <Card />
      <Card />
    </>
  );
}

export default App;
