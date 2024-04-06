import ButtonGradient from "./assets/svg/ButtonGradient";

import { Benefits } from "./components/Benefits";
import { Colaboration } from "./components/Collaboration";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />

        <Benefits />
        <Colaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
