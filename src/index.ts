export interface StatusBarOptions {
  color?: string;
  style?: string;
}

const CustomStatusBar = {
  setColor: async (opts: StatusBarOptions) => {
    return (window as any).Capacitor.Plugins.CustomStatusBar.setColor(opts);
  },
  setTransparent: async () => {
    return (window as any).Capacitor.Plugins.CustomStatusBar.setTransparent();
  }
};

export default CustomStatusBar;
