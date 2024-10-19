import { SpinningDiamond } from "@/app/animations/spinningDiamond"
import { Wrapper } from "../Wrapper"
import { H2 } from "./h2"
import { ScrollSection } from "@/app/animations/scrollSections"

type HeaderSparklesProps = {
  text: string
  isMobile: boolean
}

export const HeaderSparkles = ({ text, isMobile }: HeaderSparklesProps) => {
  return (
    <ScrollSection>
    <Wrapper direction='row'>
    <H2>{text}</H2>
    {!isMobile && (
      <>
        <SpinningDiamond size="30px" rotate={-360} />
        <SpinningDiamond size="30px" rotate={360} />
        <SpinningDiamond size="15px" rotate={-360} />
        </>
    )}

  </Wrapper>
</ScrollSection>

  )
}

