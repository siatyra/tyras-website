import { motion } from "framer-motion";
import { TextProps } from "./text";

export const H2 = ({ children }: TextProps): JSX.Element => {
  const className = "font-Lora bold text-3xl";
  const text = children?.split(" ");

  return (
    <h2 className={className}>
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
    </h2>
  );
};
