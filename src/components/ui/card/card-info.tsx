import { FC } from "react";
import { cn } from "@/lib/utils";
import { InfoType } from "@/types";

type CardInfoProps = {
  className?: string;
  info: InfoType;
  name: string;
  showInfo: boolean;
};

/**
 * Este componente  muestra información adicional en una tarjeta, como el nombre, la versión, el RTP y la volatilidad.
 * Puede ocultar o mostrar la información según el valor de la variable showInfo.
 */
const CardInfo: FC<CardInfoProps> = ({ className, name, info, showInfo }) => {
  return (
    <div
      className={cn(
        "card-info absolute flex flex-col gap-1 lg:gap-2 bottom-2 lg:bottom-3 left-2",
        className
      )}
    >
      <p
        className={cn(
          "title text-white font-bold text-[10px] lg:text-base leading-[14px] lg:leading-[16px] tracking-[0.25px] lg:tracking-normal"
        )}
      >
        {name}
      </p>
      {showInfo && (
        <div className="flex flex-wrap text-[8px] lg:text-[12px] font-bold uppercase gap-1 text-primary-content lg:w-10/12 [font-variant:all-small-caps] animate-info-show-down">
          <div className="flex items-center justify-center text-current bg-[#FBBF24]/20 rounded h-[10px] lg:h-6 p-[2px] lg:p-1 gap-1">
            <span>version:</span>
            <span>{info.version}</span>
          </div>
          <div className="flex items-center justify-center text-current bg-[#FBBF24]/20 rounded h-[10px] lg:h-6 p-[2px] lg:p-1 gap-1">
            <span>rtp:</span>
            <span>{info.rtp}</span>
          </div>
          <div className="flex items-center justify-center text-current bg-[#FBBF24]/20 rounded h-[10px] lg:h-6 p-[2px] lg:p-1 gap-1">
            <span>votalidad:</span>
            <span>alta</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
