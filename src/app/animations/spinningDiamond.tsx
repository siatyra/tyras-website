import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';
import { motion } from "framer-motion";
import { SpinningDiamondProps } from "../interfaces";

export const SpinningDiamond: React.FC<SpinningDiamondProps> = ({
  size,
  rotate,
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      height={size}
      width={size}
      x="0px"
      y="0px"
      preserveAspectRatio="xMidYMid meet"
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
    <Icon path={mdiStarFourPoints} size="100%" color="#FFFFFF" />
    </motion.svg>
  );
};
