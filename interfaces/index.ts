import { ChangeEventHandler } from 'react';

export interface TextInput {
  children: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
}

export interface HeightWeightInputs {
  isMetric: boolean;
  setBMI: Function;
  setWeightRange: Function;
}

export interface RadioInput {
  children: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: ChangeEventHandler;
  defaultChecked?: boolean;
}

export interface WeightRange {
  category: string;
  minWeight: number;
  maxWeight: number;
}
