import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckBoxPrimitive.CheckboxProps{}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckBoxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500"/>
      </CheckBoxPrimitive.Indicator>
    </CheckBoxPrimitive.Root>
  )
}