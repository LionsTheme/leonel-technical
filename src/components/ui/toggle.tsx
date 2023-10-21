"use client";

/**
 * Este archivo contiene el código para un componente de interruptor de alternancia (toggle).
 * Utiliza el paquete "@radix-ui/react-toggle" para implementar el interruptor.
 * También utiliza el paquete "class-variance-authority" para gestionar las variantes del interruptor.
 * El componente Toggle acepta propiedades como "variant" y "size" para personalizar su apariencia.
 */

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Definir las variantes y valores predeterminados del interruptor
const toggleVariants = cva("toggle", {
  variants: {
    variant: {
      default: "bg-black/80 text-white",
      outline: "border border-input bg-transparent",
    },
    size: {
      default: "w-6 h-6 rounded-[6px]",
      sm: "w-5 h-5 rounded",
      lg: "w-8 h-8 rounded-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Componente Toggle
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
