import { Placement } from "@floating-ui/core"

export interface AnTooltipProps {
  content?: string
  placement?: Placement
  trigger?: "click" | "hover"
}