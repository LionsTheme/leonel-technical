"use client";

import { FC } from "react";
import useSupplier from "@/hooks/useSupplier";

type CardsupplierlogoProps = {
  className?: string;
  supplierName: string;
};

/**
 * Resumen: Este componente muestra el logotipo de un proveedor.
 * El componente recibe una prop llamada "supplierName" que indica el nombre del proveedor cuyo logotipo se mostrará.
 * Utiliza el hook personalizado "useSupplier" para obtener la información del proveedor.
 * El logotipo se muestra en dos tamaños diferentes dependiendo de el tamaño de la pantalla del dispositivo.
 */
const Cardsupplierlogo: FC<CardsupplierlogoProps> = ({ supplierName }) => {
  const supplier = useSupplier(supplierName);

  return (
    <div className="absolute top-2 left-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hidden lg:block"
        alt="supplier logo"
        src={supplier?.logo.md}
        width={75}
        height={21}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="lg:hidden"
        alt="supplier logo"
        src={supplier?.logo.sm}
        width={20}
        height={20}
      />
    </div>
  );
};

export default Cardsupplierlogo;
