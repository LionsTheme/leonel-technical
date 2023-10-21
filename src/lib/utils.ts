/**
 * Este archivo contiene una función llamada cn que combina y fusiona múltiples valores de clase para generar una única cadena de clases CSS.
 * Utiliza las bibliotecas clsx y tailwind-merge para lograr esto.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina y fusiona múltiples valores de clase para generar una única cadena de clases CSS.
 * @param inputs - Valores de clase a combinar.
 * @returns Una cadena de clases CSS combinadas.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
