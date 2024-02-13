'use client'

import { H1 } from './assets/text/h1'
import { Sparkles } from './assets/sparkles';
import { FadeIn } from './animations/fadeAnimation'


export default function Home() {
  return (
    <div>
      <FadeIn>
        <div className='flex items-center justify-center mb-10'>
          <H1>
            Tyra Anglin is a Junior Front-end Software Engineer.
          </H1>
        </div>
      </FadeIn>
      <FadeIn delay={3} duration={5}>
        <div className='flex items-center justify-center mb-10'>
          <H1>
            She enjoys working on fun things and eating crisps.
          </H1>
        </div>
      </ FadeIn>
      <FadeIn>
        <Sparkles />
      </FadeIn>
    </div>
  )
}
