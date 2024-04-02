import { Heading } from "./Heading";
import { Section } from "./Section";

export function Benefits() {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Converse de forma mais inteligente, não mais difícil, com o Brainwave"
        />
      </div>
    </Section>
  );
}
