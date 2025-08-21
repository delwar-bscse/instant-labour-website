"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomRangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  showTooltip?: boolean
  tooltipClassName?: string
}

const CustomRange = React.forwardRef<HTMLInputElement, CustomRangeProps>(
  (
    {
      className,
      min = 0,
      max = 100,
      value,
      onChange,
      tooltipClassName,
      ...props
    },
    ref
  ) => {

    const minNum = Number(min)
    const maxNum = Number(max)
    const valNum =
      typeof value === "string"
        ? Number(value || minNum)
        : Number(value ?? minNum)

    const percent =
      ((valNum - minNum) / Math.max(1, maxNum - minNum)) * 100

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full appearance-none accent-brandClr2",
            "h-2 rounded-full bg-brandClr2",
            // Track
            "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-brandClr2",
            "[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-brandClr2",
            // Thumb
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:mt-[-4px]", // align center
            "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-yellow-500 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow",
            className
          )}
          {...props}
        />

        
          <div
            className={cn(
              "pointer-events-none absolute -top-6 translate-x-[-64%] rounded-md bg-brandClr2 px-2 py-1 text-xs text-white shadow transition-opacity",
              tooltipClassName
            )}
            style={{ left: `calc(${percent}%)` }}
          >
            {valNum}
            <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-brandClr2" />
          </div>
      </div>
    )
  }
)

CustomRange.displayName = "CustomRange"
export default CustomRange
