import ArrayButton from "./components/ArrayButton.jsx";
import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <br />
      <ArrayButton />
    </>
  );
}
