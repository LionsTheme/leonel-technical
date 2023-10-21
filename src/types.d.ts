export type InfoType = {
  moodBonus: boolean;
  rtp: string;
  version: string;
};

export interface CardType {
  id: number;
  disabled: boolean;
  info: Info;
  name: string;
  src: string;
  supplier: string;
}

export type SupplierType = {
  id: number;
  supplier: string;
  logo: {
    lg: string;
    md: string;
    sm: string;
  };
};
