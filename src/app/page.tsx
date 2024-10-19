"use client";

import { H1 } from "./assets/text/h1";
import { Sparkles } from "./assets/sparkles";
import { FadeIn } from "./animations/fadeAnimation";
import { Wrapper } from "./assets/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <FadeIn>
        <Wrapper align='center' justify='center' spacer='large'>
          <H1>Tyra Anglin is a Frontend Software Engineer.</H1>
        </Wrapper>
      </FadeIn>
      <FadeIn delay={3} duration={5}>
      <Wrapper align='center' justify='center' spacer='large'>
          <H1>She enjoys working on fun things and eating crisps.</H1>
      </Wrapper>
      </FadeIn>
      <FadeIn>
        <Sparkles />
      </FadeIn>
    </Wrapper>
  );
}
