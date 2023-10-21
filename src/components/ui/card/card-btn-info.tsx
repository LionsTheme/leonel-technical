"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { InfoIcon } from "@/components/icon";
import { Toggle } from "../toggle";

/**
 * Propiedades del componente CardBtnInfo.
 */
type cardBtnInfoProps = {
  className?: string;
  showInfo?: boolean;
  handleShowInfo: (pressed: boolean) => void;
};

/**
 * Este archivo contiene el código de un componente de botón de información de una tarjeta.
 * El componente muestra un ícono de información y permite alternar la visualización de información adicional.
 */
const cardBtnInfo: FC<cardBtnInfoProps> = ({
  className,
  handleShowInfo,
  showInfo,
}) => {
  /**
   * Maneja el evento de alternar la visualización de información.
   * @param pressed - Indica si el botón está presionado o no.
   */
  const handleToggleInfo = (pressed: boolean): void => {
    handleShowInfo(pressed);
  };

  return (
    <Toggle
      className={cn(
        "card-btn-info absolute right-2 w-5 lg:w-6 h-5 lg:h-6 p-[2px] z-50",
        className,
        [showInfo ? "bottom-2" : "top-2"]
      )}
      variant="default"
      onPressedChange={handleToggleInfo}
    >
      <InfoIcon className="w-3 h-3 lg:w-4 lg:h-4" />
    </Toggle>
  );
};

export default cardBtnInfo;
