import { useEffect, useState } from "react";
import suppliers from "../data/supplier.json";
import { SupplierType } from "@/types";

/**
 * useSupplier.ts
 *
 * Este archivo contiene el código de un hook personalizado llamado useSupplier.
 * El hook useSupplier se utiliza para obtener un objeto de proveedor en función del nombre del proveedor proporcionado.
 * Utiliza el estado y el efecto de React para realizar la búsqueda y mantener el estado del proveedor.
 */
const useSupplier = (supplier: string) => {
  const [supplierState, setSupplierState] = useState<
    SupplierType | undefined
  >();

  useEffect(() => {
    function findSupplier(param: string) {
      return suppliers.find((supplier) => supplier.supplier === param);
    }

    let supplierObj = findSupplier(supplier);
    setSupplierState(supplierObj);
  }, [supplier]);

  return supplierState;
};

export default useSupplier;
