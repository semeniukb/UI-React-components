import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const typographyStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
type TypographyProps<Tag extends TypographyTag> = ReactTagProps<Exclude<Tag, "span">> & {
  tag?: TypographyTag;
} & VariantProps<typeof typographyStyles>;

export const Typography = <Tag extends TypographyTag>({
  tag = "div",
  weight,
  emphasis,
  italic,
  underline,
  align,
  size,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component
      className={cn(typographyStyles({ size, weight, emphasis, italic, underline, align, className }))}
      {...props}
    />
  );
};
