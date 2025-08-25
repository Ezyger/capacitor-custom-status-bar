"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomStatusBar = {
    setColor: async (opts) => {
        return window.Capacitor.Plugins.CustomStatusBar.setColor(opts);
    },
    setTransparent: async () => {
        return window.Capacitor.Plugins.CustomStatusBar.setTransparent();
    }
};
exports.default = CustomStatusBar;
