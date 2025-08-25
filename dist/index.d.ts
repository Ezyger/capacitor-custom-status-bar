export interface CustomStatusBarPlugin {
    setColor(options: {
        color: string;
        style: 'DARK' | 'LIGHT';
    }): Promise<void>;
    setTransparent(): Promise<void>;
}
declare const CustomStatusBar: CustomStatusBarPlugin;
export default CustomStatusBar;
