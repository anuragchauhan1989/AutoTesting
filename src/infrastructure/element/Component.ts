import { Element } from "./Base";
export interface Component<Value = any> extends Element {
  change: (value: Value) => Promise<void>;
  getValue: () => Promise<Value>;
}
