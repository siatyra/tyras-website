import { cva, type VariantProps } from "class-variance-authority";

type WrapperProps = {
  children: React.ReactNode;
} & VariantProps<typeof wrapperCva>;

export const wrapperCva = cva(["flex"], {
  variants: {
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      apart: "justify-between",
      together: "justify-around",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    gap: {
      none: "gap-0",
      tiny: "gap-1",
      small: "gap-2",
      medium: "gap-4",
      large: "gap-8",
    },
    spacer: {
      medium: "mb-4",
      large: "mb-8",
    },
    fill: {
      width: "w-full",
      height: "h-full",
    },
    border: {
      bottom: "border-b",
    },
  },
  defaultVariants: {
    direction: "column",
    gap: "large",
  },
});

export const Wrapper = ({
  children,
  align,
  justify,
  direction,
  gap,
  spacer,
  fill,
  border,
}: WrapperProps) => {
  return (
    <div
      className={wrapperCva({
        align,
        justify,
        direction,
        gap,
        spacer,
        fill,
        border,
      })}
    >
      {children}
    </div>
  );
};
