import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../button";

type CardActionProps = {
  className?: string;
  showInfo?: boolean;
  cardDisabled: boolean;
};

/**
 * Componente que renderiza un botón con diferentes propiedades según las props recibidas.
 * Si cardDisabled es true, el botón se muestra deshabilitado con el texto "No disponible".
 * De lo contrario, el botón se muestra habilitado con el texto "Jugar ahora".
 * Si showInfo es true, el botón se oculta.
 */
const CardAction: FC<CardActionProps> = ({
  className,
  showInfo,
  cardDisabled,
}) => {
  return (
    <Button
      className={cn(
        "card-action-btn bg-accent/60 active:bg-accent/100",
        className,
        [showInfo && "hidden"]
      )}
      variant="contained"
      types="accent"
      size="sm"
      disabled={cardDisabled}
    >
      {cardDisabled ? "No disponible" : "Jugar ahora"}
    </Button>
  );
};

export default CardAction;
