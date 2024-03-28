import { Section } from "./Section";
import { Button } from "./Button";

import { curve } from "../assets";

export function Hero() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore as Possibilidades de Conversas com IA com o{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curva"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Liberte o poder da IA dentro do Brainwave. Aumente sua produtividade
            com o Brainwave, o aplicativo de chat AI aberto.
          </p>
          <Button href="/pricing" white>
            Começar
          </Button>
        </div>
      </div>
    </Section>
  );
}
