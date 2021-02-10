import { Element } from "./Base";

export interface Button extends Element {
  click: () => Promise<void>;
}

