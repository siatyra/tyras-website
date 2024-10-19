"use client";

import { H1 } from "../assets/text/h1";
import { H2 } from "../assets/text/h2";
import { Text } from "../assets/text/text";
import { FadeIn } from "../animations/fadeAnimation";
import Image from "next/image";
import Link from "next/link";
import { ScrollSection } from "../animations/scrollSections";
import { SpinningDiamond } from "../animations/spinningDiamond";
import { Sparkles } from "../assets/sparkles";
import { Wrapper } from "../assets/Wrapper";
import { useEffect, useState } from "react";
import { HeaderSparkles } from "../assets/text/HeaderSparkles";
import Head from "next/head";
import { handleIsMobile } from "../assets/util";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const className = "flex flex-col border-b gap-8 pb-8";

  useEffect(() => {
    handleIsMobile(setIsMobile);
  }, []);

  const intro = (
    <div className={className}>
      <ScrollSection>
        <Wrapper>
          <Wrapper direction="row">
            <HeaderSparkles
              text="Hi there! It's me, Tyra."
              isMobile={isMobile}
            />
          </Wrapper>

          <H2>
            I'm a Frontend Software engineer with big dreams and a bigger heart,
            working in an even bigger city (London).
          </H2>
        </Wrapper>
      </ScrollSection>
      <ScrollSection>
        <H2>
          My hobbies include thinking diligently and gloriously of the joys of
          Tajin with lime Clasíco seasoning™ and occasionally rollerskating to
          the dulcet tones of Kaytranada.
        </H2>
      </ScrollSection>
    </div>
  );

  const summary = (
    <div className={className}>
      <ScrollSection>
        <HeaderSparkles text="Summary" isMobile={isMobile} />
      </ScrollSection>

      <ScrollSection>
        <Text>
          In my short 27 years I&apos;ve worn a lot of hats but I&apos;m happy
          to say I&apos;ve always remained a creative. I&apos;ve spent my time
          as a software engineer, a customer success representative, a
          supermarket assistant and even a pizza artist.
        </Text>
      </ScrollSection>

      <ScrollSection>
        <Text>
          Over the past two years I&apos;ve been honing my skills as a developer
          and have been lucky enough to work with some amazing people who helped
          me to grow after I successfully completed the Black CodHer full-stack
          software development bootcamp at the beginning of 2022.
        </Text>
      </ScrollSection>

      <ScrollSection>
        <Text>
          As for my education, I studied English at the University of Sheffield
          and graduated with a first before covid hit and really made me
          reconsider all my life choices. Post-realisation I decided to take a
          leap of faith and dive headfirst into the world of tech, a world I had
          always been interested in but had never had the encouragement to
          explore.
        </Text>
      </ScrollSection>

      <ScrollSection>
        <Text>
          So now here I am, a wannabe react extraordinaire now trying to learn
          all! of the things about software engineering.
        </Text>
      </ScrollSection>
    </div>
  );

  const skills = (
    <div className={className}>
      <ScrollSection>
        <HeaderSparkles text="Skills" isMobile={isMobile} />
      </ScrollSection>

      <ScrollSection>
        <Text>
          I`m super interested in all creative technologies and am currently
          studying game development in my spare time for funsies. However, my
          main skills lie in:
        </Text>
      </ScrollSection>

      <ScrollSection>
        <p className="text-xl">Languages:</p>
      </ScrollSection>

      <ul className="text-lg">
        <ScrollSection>
          <li>React</li>
        </ScrollSection>
        <ScrollSection>
          <li>Typescript</li>
        </ScrollSection>
        <ScrollSection>
          <li>Javascript</li>
        </ScrollSection>
      </ul>

      <ScrollSection>
        <p className="text-xl">Testing frameworks:</p>
      </ScrollSection>

      <ul className="text-lg">
        <ScrollSection>
          <li>React testing library</li>
        </ScrollSection>

        <ScrollSection>
          <li>Jest</li>
        </ScrollSection>

        <ScrollSection>
          <li>Cypress</li>
        </ScrollSection>

        <ScrollSection>
          <li>Storybook</li>
        </ScrollSection>

        <ScrollSection>
          <li>Playwright</li>
        </ScrollSection>
      </ul>
    </div>
  );

  const links = (
    <div className={className}>
      <ScrollSection>
        <HeaderSparkles text="Links" isMobile={isMobile} />
      </ScrollSection>

      <ScrollSection>
        <FadeIn>
          <Link
            href="https://blackcodher.com/"
            className="mr-[3px] text-xl hover:text-[#4EB17A] cursor-crosshair italic"
          >
            Black CodHer full-stack software development bootcamp
          </Link>
        </FadeIn>
      </ScrollSection>
    </div>
  );

  const contact = (
    <div className={className}>
      <ul className="text-lg">
        <ScrollSection className="pb-8">
          <HeaderSparkles text="Contact" isMobile={isMobile} />
        </ScrollSection>

        <ScrollSection>
          <li>Email: tyra.anglin@gmail.com</li>
        </ScrollSection>

        <ScrollSection>
          <li className="italic">
            <Link href="linkedin.com/siatyraanglin">LinkedIn</Link>
          </li>
        </ScrollSection>
        <ScrollSection>
          <li className="italic">
            <Link href="https://github.com/tyraanosaurus">Github</Link>
          </li>
        </ScrollSection>
        <ScrollSection>
          <li className="italic">
            <Link href="https://github.com/siatyra">Old Github</Link>
          </li>
        </ScrollSection>
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col justify-start gap-8">
      <ScrollSection>{intro}</ScrollSection>

      <ScrollSection>{summary}</ScrollSection>

      <ScrollSection>{skills}</ScrollSection>

      <ScrollSection>{links}</ScrollSection>

      <ScrollSection>{contact}</ScrollSection>

      <ScrollSection>
        <Sparkles />
      </ScrollSection>
    </div>
  );
}
