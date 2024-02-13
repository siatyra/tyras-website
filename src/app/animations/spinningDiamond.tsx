import { motion } from "framer-motion";
import { SpinningDiamondProps } from "../interfaces";


export const SpinningDiamond: React.FC<SpinningDiamondProps> = ({size, rotate}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      height={size}
      width={size}
      x="0px"
      y="0px"
      animate={{
        rotate: rotate,
        opacity: 1,
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      <motion.path
        fill="#4EB17A"
        d="M86.67,50c0,.25-.18,.46-.43,.49-28.21,4.19-31.55,7.54-35.74,35.74-.04,.24-.25,.43-.49,.43s-.46-.18-.49-.43c-4.19-28.21-7.54-31.55-35.74-35.74-.24-.04-.43-.25-.43-.49s.18-.46,.43-.49c28.21-4.19,31.55-7.54,35.74-35.74,.04-.24,.25-.43,.49-.43s.46,.18,.49,.43c4.19,28.21,7.54,31.55,35.74,35.74,.24,.04,.43,.25,.43,.49Z"
      />
    </motion.svg>
  )
}
