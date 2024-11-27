"use client";

import { H2 } from "../assets/text/h2";
import { Text } from "../assets/text/text";
import { FadeIn } from "../animations/fadeAnimation";
import Link from "next/link";
import { Sparkles } from "../assets/sparkles";
import { ScrollSection } from "../animations/scrollSections";
import { Wrapper } from "../assets/Wrapper";
import { HeaderSparkles } from "../assets/text/HeaderSparkles";
import { useEffect, useState } from "react";
import { handleIsMobile } from "../assets/util";
import { H1 } from "../assets/text/h1";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleIsMobile(setIsMobile);
  }, []);


  const className = "hover:text-[#4EB17A] cursor-crosshair italic";
  return (
    <div className="flex flex-col justify-start gap-5">
      <div className="flex flex-col justify-start gap-5">
        <H1>Portfolio</H1>
        <HeaderSparkles text="My work so far" isMobile={isMobile} />


        <ScrollSection>
          <Wrapper border="bottom">
            <ScrollSection>
              <Text>
                This should be bulked out a little more as the year goes on! For
                now you might enjoy my first project - an app I made as part of
                the Black CodHer software development bootcamp.
              </Text>
            </ScrollSection>
            <ScrollSection>
              <Text>
                It is a simple app that pulls Doja Cats tweets from Twitter and
                displays them in a fun way. It is no longer deployed but I have
                the relevant links below. Enjoy!
              </Text>
            </ScrollSection>
            <Wrapper spacer="large">
              <ScrollSection>
                <Link
                  className={className}
                  href="https://drive.google.com/file/d/1SCj0nwYoizSITEb_ySIsSIrsgOgWHIZP/view?usp=drive_link"
                >
                  Demo
                </Link>
              </ScrollSection>
              <ScrollSection>
                <Link
                  className={className}
                  href="https://docs.google.com/presentation/d/1TuwJQwfF6XZPkMFdTnSa9KElk4M70P4KV6Q_7LMmiRA"
                >
                  Presentation
                </Link>
              </ScrollSection>
              <ScrollSection>
                <Link
                  className={className}
                  href="https://github.com/black-codher-bootcamp-2021-jackson/personal-project-siatyra"
                >
                  Project on Github
                </Link>
              </ScrollSection>
            </Wrapper>
          </Wrapper>
        </ScrollSection>
        <ScrollSection>
          <Wrapper>
            <ScrollSection>
              <HeaderSparkles text="Works in progress" isMobile={isMobile} />
            </ScrollSection>
            <ScrollSection>
              <Text>
                I have ADHD and don't really like any of the organisation boards
                I found out there currently so I'm in the process of creating my
                own.
              </Text>
            </ScrollSection>
            <ScrollSection>
              <Text>
                It is currently in the relatively early stages but I hope for it
                to be able to do the following:
              </Text>
            </ScrollSection>

            <Wrapper>
              <ScrollSection>
                <Text size="md">1. Look super cute!</Text>
              </ScrollSection>

              <ScrollSection>
                <Text size="md">2. Be a single page application</Text>
              </ScrollSection>

              <ScrollSection>
                <Text size="md">
                  3. Allow me to fetch, create, edit and delete items on my task
                  board
                </Text>
              </ScrollSection>

              <ScrollSection>
                <Text size="md">
                  4. Mark tasks completed/incomplete and have a store of
                  completed tasks
                </Text>
              </ScrollSection>

              <ScrollSection>
                <Text size="md">
                  5. Mark tasks as perpetual (must be done each day) vs
                  time-based and make sure perpetual tasks don't get stored when
                  they are completed
                </Text>
              </ScrollSection>

              <ScrollSection>
                <Text size="md">
                  6. Order them in terms of their different priorities
                </Text>
              </ScrollSection>

              <ScrollSection>
                <Text>
                  Honestly I have a lot of hopes for it! If you'd like to see
                  where the app is being developed you can find it at the link
                  below.
                </Text>
              </ScrollSection>
              <ScrollSection>
                <Link
                  className={className}
                  href="https://github.com/tyraanosaurus/todos"
                >
                  Project on Github
                </Link>
              </ScrollSection>
            </Wrapper>
          </Wrapper>
        </ScrollSection>
      </div>

      <FadeIn>
        <Sparkles />
      </FadeIn>
    </div>
  );
}
