import { Button } from "../element/Button";
import { Component } from "../element/Component";

export interface FindForm {
  button: {
    byIndex: (i: number) => Promise<Button>;
    byLabel: (label: string) => Promise<Button>;
  };
  component: {
    byFieldName: (name: string) => Promise<Component>;
    byCustomComponentName: (name: string) => Promise<Component>;
  };
}