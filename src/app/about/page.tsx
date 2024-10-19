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

export default function Page() {
  const className = "flex flex-col border-b gap-8 pb-8";

  const intro = (
    <div className={className}>
      <div className="flex flex-row justify-between items-center">
        <FadeIn>
          <div className="mb-5">
            <Image
              src="/tyra.jpg"
              alt="Tyra"
              width={200}
              height={200}
              style={{
                borderRadius: "30px",
                border: "4px double #ffffff",
                padding: "2px",
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "50px",
              }}
            />
          </div>
        </FadeIn>

        <FadeIn>
          <H1>All about Tyra!</H1>
        </FadeIn>

        <div className="flex">
          <SpinningDiamond size="120px" rotate={-360} />
          <SpinningDiamond size="50px" rotate={360} />
          <SpinningDiamond size="100px" rotate={360} />
          <SpinningDiamond size="30px" rotate={-360} />
          <SpinningDiamond size="80px" rotate={-360} />
          <SpinningDiamond size="30px" rotate={360} />
          <SpinningDiamond size="15px" rotate={-360} />
        </div>
      </div>

      <ScrollSection>
        <H2>
          I&apos;m a Junior Front-end Software Engineer currently working in a
          very expensive flat in London, England (please help).
        </H2>
      </ScrollSection>
      <ScrollSection>
        <H2>
          My hobbies include thinking diligently and gloriously of the joys of
          Tajin with lime Clasíco seasoning™ and occasionally rollerskating to
          the dulcet tones of Kaytranada.
        </H2>
      </ScrollSection>
      <ScrollSection>
        <H2>
          My life seems to be a slow journey of mediocre choices and, according
          to my Monzo wrapped, a plethora of McDonalds orders.
        </H2>
      </ScrollSection>
    </div>
  );

  const summary = (
    <div className={className}>
      <ScrollSection>
        <H2>Summary</H2>
      </ScrollSection>

      <ScrollSection>
        <Text>
          In my short 26 years I&apos;ve worn a lot of hats but I&apos;m happy
          to say I&apos;ve always remained a creative. I&apos;ve spent my time
          as a software engineer, a customer success representative, supermarket
          assistant and pizza artist.
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
          As for my education, I very erronously studied English at the
          University of Sheffield and graduated with a first. That being said, I
          realised that studying humanities was a huge flop and needed to get a
          career that would actually make me money, or, indeed, have the funding
          to be able to hire me at all.
        </Text>
      </ScrollSection>

      <ScrollSection>
        <Text>
          So now here I am, a tumblr goblin turned framer motion extraordinaire
          just dying to dazzle you with mediocre animations and a penchant for
          the colour green. I hope it didn&apos;t make you too sick to your
          stomach.
        </Text>
      </ScrollSection>
    </div>
  );

  const skills = (
    <div className={className}>
      <ScrollSection>
        <H2>Skills</H2>
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
        <H2>Links</H2>
      </ScrollSection>

      <ScrollSection>
        <FadeIn>
          <Link
            href="https://blackcodher.com/"
            className="mr-[3px] text-xl hover:text-[#4EB17A] cursor-crosshair"
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
          <H2>Contact</H2>
        </ScrollSection>

        <ScrollSection>
          <li>Email: tyra.anglin@gmail.com</li>
        </ScrollSection>

        <ScrollSection>
          <li>
            <Link href="linkedin.com/siatyraanglin">LinkedIn</Link>
          </li>
        </ScrollSection>
        <ScrollSection>
          <li>
            <Link href="https://github.com/tyraanosaurus">Github</Link>/
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
