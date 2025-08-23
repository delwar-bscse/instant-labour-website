import * as React from "react"

import { cn } from "@/lib/utils"

const variantClasses: Record<string, string> = {
  borderblack: "border border-gray-400 bg-white focus-visible:ring-0 bg-white rounded-none focus-visible:bg-white focus-visible:border-gray-700 outline-none",
  yelloBg: "bg-[#FEF6E7] focus:bg-[#FEF6E7]/60 border-0 focus-visible:ring-0 focus-visible:border-0 outline-none  h-10",
}

type TextareaProps = React.ComponentProps<"textarea"> & {
  variant?: keyof typeof variantClasses
}

function Textarea({ className, variant, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        " placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-48 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        variant ? variantClasses[variant] : "",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
