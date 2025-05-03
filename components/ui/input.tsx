import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { cn } from "~/lib/utils";

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        "focus:border-[#202B37] font-ClashRegular rounded-[20px] py-3 ps-5 border border-[#E4E7EC] bg-transparent text-[#141C24] placeholder:text-[#CED2DA]",
        props.editable === false && "opacity-50 web:cursor-not-allowed",
        className
      )}
      style={{ fontSize: 16 }}
      placeholderClassName={cn(
        "text-[#CED2DA] text-base",
        placeholderClassName
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
