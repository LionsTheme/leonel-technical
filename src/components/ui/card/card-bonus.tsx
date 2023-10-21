import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InfoType } from "@/types";

type CardBonusProps = {
  className?: string;
  info: InfoType;
  cardDisabled: boolean;
  showInfo?: boolean;
};

/**
 * CardBonus Component
 *
 * Este componente muestra un ícono de bonificación. Puede recibir una clase CSS personalizada, información, estado de deshabilitación de la tarjeta y opciones para mostrar u ocultar la información.
 */
const CardBonus: FC<CardBonusProps> = ({
  className,
  info,
  cardDisabled,
  showInfo,
}) => {
  return (
    <div
      className={cn(
        "card-bonus-icon absolute flex items-end justify-center w-5 h-5 lg:w-6 lg:h-6 bottom-2 right-2 p-[2px] rounded bg-black/80",
        [!info.moodBonus && "hidden"],
        [cardDisabled && "hidden"],
        [showInfo && "hidden"],
        className
      )}
    >
      <Image
        className=""
        src="/images/Bonus icon.png"
        alt="bonus icon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default CardBonus;
