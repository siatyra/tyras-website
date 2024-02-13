'use client'

import { H1 } from '../assets/text/h1'
import { H2 } from '../assets/text/h2'
import { FadeIn } from '../animations/fadeAnimation'
import Link from 'next/link'
import { Sparkles } from '../assets/sparkles'


export default function Page() {
  const className = 'text-xl hover:text-[#4EB17A] cursor-crosshair'
  return (
    <div className='flex flex-col justify-start gap-5'>
        <div className='flex flex-col justify-start gap-5'>
          <H1>
            My work so far
          </H1>


          <H2>
            This should be bulked out a little more as the year goes on!
            For now you might enjoy my first project - 
            an app I made as part of the Black CodHer software development bootcamp.

            It is a simple app that pulls Doja Cats tweets from Twitter and displays them in a fun way.
            It is no longer deployed but I have the relevant links below. Enjoy!
          </H2>

            <Link className={className} href='https://drive.google.com/file/d/1SCj0nwYoizSITEb_ySIsSIrsgOgWHIZP/view?usp=drive_link'>
              Demo
            </Link>
            <Link className={className} href='https://docs.google.com/presentation/d/1TuwJQwfF6XZPkMFdTnSa9KElk4M70P4KV6Q_7LMmiRA'>
              Presentation
            </Link>
            <Link className={className} href='https://github.com/black-codher-bootcamp-2021-jackson/personal-project-siatyra'>
              Project on Github
            </Link>
        </div>
      
      <FadeIn>
        <Sparkles />
      </FadeIn>
    </div> 
  )
}