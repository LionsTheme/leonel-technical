"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { CardType } from "@/types";
import { CardAction, CardBonus, CardBtnInfo, CardInfo, CardLogo } from ".";

interface CardProps extends CardType {
  className?: string;
}

/**
 * Componente Card, el cual muestra una tarjeta con información y acciones relacionadas a una tarjeta de información.
 * Utiliza los componentes CardAction, CardBonus, CardBtnInfo, CardInfo y CardLogo para mostrar la información y acciones correspondientes.
 */
const Card: FC<CardProps> = ({
  src,
  disabled,
  className,
  name,
  supplier,
  info,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "card relative flex items-center justify-center max-w-[130px] w-[130px] h-[120px] lg:max-w-[250px] lg:w-[250px] lg:h-[200px] p-2 border border-gray-200 rounded-sm shadow overflow-hidden z-10",
        className,
        [disabled && "card-disabled"]
      )}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <span className="backdrop z-0" />
      <CardLogo supplierName={supplier} />
      <CardAction
        className="z-30"
        showInfo={showInfo}
        cardDisabled={disabled}
      />
      <CardInfo className="z-20" name={name} showInfo={showInfo} info={info} />
      <CardBtnInfo
        className="z-40"
        showInfo={showInfo}
        handleShowInfo={setShowInfo}
      />
      <CardBonus
        className="z-10"
        info={info}
        cardDisabled={disabled}
        showInfo={showInfo}
      />
    </div>
  );
};

export default Card;
