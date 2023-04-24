import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ")

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
