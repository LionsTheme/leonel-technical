/**
 * Este es el código para el componente de botón.
 * Utiliza la biblioteca class-variance-authority para gestionar las variantes del botón.
 * El componente Button acepta varias propiedades, incluidas las propiedades estándar de HTML para un botón.
 * El componente se puede utilizar como un botón HTML o como un componente Slot de Radix.
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Definición de las variantes del botón utilizando class-variance-authority
const buttonVariants = cva("btn font-sans", {
  variants: {
    types: {
      primary: "btn-primary",
      accent: "btn-accent",
    },
    variant: {
      contained: "",
      outline: "btn-outline",
    },
    withIcon: {
      false: null,
      true: "btn-icon",
    },
    size: {
      lg: "px-8 py-[0.875rem] rounded-lg text-xl leading-[1.438rem]",
      sm: "px-[1.125rem] py-2 rounded-sm text-sm",
    },
  },
  defaultVariants: {
    types: "primary",
    variant: "contained",
    withIcon: false,
    size: "lg",
  },
});

// Definición de las propiedades del componente Button
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Definición del componente Button
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, types, variant, withIcon, size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "",
          buttonVariants({ types, variant, withIcon, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
