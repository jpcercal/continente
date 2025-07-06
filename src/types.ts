import { WIDGET_STATE } from './constants';

export type IconGlyphs = {
  MINIMIZE: string;
  RESTORE: string;
  MAXIMIZE: string;
};

export type WidgetState = (typeof WIDGET_STATE)[keyof typeof WIDGET_STATE];
