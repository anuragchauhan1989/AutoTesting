import { Element } from "./Base";

export interface Button extends Element {
  click: () => Promise<void>;
}

export interface ButtonProps {
  isPrimary: string;
  isLoading: string;
}
