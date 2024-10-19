import { motion } from "framer-motion";
import { TextProps } from "./text";

export const H1 = ({ children }: TextProps): JSX.Element => {
  const className = "font-Lora text-4xl sm:text-5xl md:text-6xl lg:text-7xl";
  const text = children?.split(" ");

  return (
    <h1 className={className}>
      {text?.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 8,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </h1>
  );
};
