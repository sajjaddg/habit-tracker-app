import { cva, VariantProps } from "class-variance-authority"
import { FC } from "react"
import { Text } from "react-native"
import { cn } from "~/lib/utils"

const fontWeights = {
  weight: {
    bold: "font-ClashBold",
    semiBold: "font-ClashSemibold",
    medium: "font-ClashMedium",
    regular: "font-ClashRegular",
  },
}

const fontVariants = {
  variants: {
    ...fontWeights,
    defaultVariants: {
      weight: "regular",
    },
  },
}

const h4Variants = cva("text-4xl leading-[44px] text-primary", { ...fontVariants })
type H4Props = React.ComponentProps<typeof Text> & VariantProps<typeof h4Variants>
const H4: FC<H4Props> = ({ weight, className, ...props }) => <Text className={cn(h4Variants({ weight }), className)} {...props} />

const h5Variants = cva("text-[1.75rem] leading-9 text-primary", { ...fontVariants })
type H5Props = React.ComponentProps<typeof Text> & VariantProps<typeof h5Variants>
const H5: FC<H5Props> = ({ weight, className, ...props }) => <Text className={cn(h5Variants({ weight }), className)} {...props} />

const h6Variants = cva("text-2xl text-primary", { ...fontVariants })
type H6Props = React.ComponentProps<typeof Text> & VariantProps<typeof h6Variants>
const H6: FC<H6Props> = ({ weight, className, ...props }) => <Text className={cn(h6Variants({ weight }), className)} {...props} />

const subtitleVariants = cva("text-xl text-primary", { ...fontVariants })
type SubtitleProps = React.ComponentProps<typeof Text> & VariantProps<typeof subtitleVariants>
const Subtitle: FC<SubtitleProps> = ({ weight, className, ...props }) => (
  <Text className={cn(subtitleVariants({ weight }), className)} {...props} />
)

const pVariants = cva("text-primary", {
  variants: {
    ...fontWeights,
    size: {
      lg: "text-lg",
      m: "text-base",
      sm: "text-sm",
    },
    defaultVariants: {
      weight: "regular",
      size: "m",
    },
  },
})
type PProps = React.ComponentProps<typeof Text> & VariantProps<typeof pVariants>
const P: FC<PProps> = ({ weight, size, className, ...props }) => (
  <Text className={cn(pVariants({ weight, size }), className)} {...props} />
)

const captionVariants = cva("text-xs text-primary", { ...fontVariants })
type CaptionProps = React.ComponentProps<typeof Text> & VariantProps<typeof captionVariants>
const Caption: FC<CaptionProps> = ({ weight, className, ...props }) => (
  <Text className={cn(captionVariants({ weight }), className)} {...props} />
)

export { H4, H5, H6, Subtitle, P, Caption }
