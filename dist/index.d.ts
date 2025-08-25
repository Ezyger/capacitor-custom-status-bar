export interface StatusBarOptions {
    color?: string;
    style?: string;
}
declare const CustomStatusBar: {
    setColor: (opts: StatusBarOptions) => Promise<any>;
    setTransparent: () => Promise<any>;
};
export default CustomStatusBar;
