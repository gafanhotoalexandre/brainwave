import ButtonGradient from "./assets/svg/ButtonGradient";

import { Benefits } from "./components/Benefits";
import { Colaboration } from "./components/Colaboration";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />

        <Benefits />
        <Colaboration />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
