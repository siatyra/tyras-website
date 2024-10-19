import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

type TextProps = {
  children?: string;
  type?: string;
  size?: string;
} & VariantProps<typeof textCva>;

export const textCva = cva(["font-Lora bold"], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

export const Text = ({ children, size }: TextProps): JSX.Element => {
  const text = children?.split(" ");

  return (
    <p
      className={textCva({
        size,
      })}
    >
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
    </p>
  );
};
