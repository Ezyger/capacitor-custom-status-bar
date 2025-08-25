import { registerPlugin } from '@capacitor/core';

export interface CustomStatusBarPlugin {
  setColor(options: { color: string; style: 'DARK' | 'LIGHT' }): Promise<void>;
  setTransparent(): Promise<void>;
}

const CustomStatusBar = registerPlugin<CustomStatusBarPlugin>('CustomStatusBar');

export default CustomStatusBar;
