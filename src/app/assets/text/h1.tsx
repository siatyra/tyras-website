import { TextProps } from "../../interfaces"
import { motion } from 'framer-motion';

export const H1 = ({
  children,
  }: TextProps ): JSX.Element => { 
  const className = 'font-Lora bold text-7xl'
  const text = children?.split(' ')

  return (
    <h1 className={className}>
      {text?.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 8,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
      </motion.span>
      ))}
    </h1>
  )
}