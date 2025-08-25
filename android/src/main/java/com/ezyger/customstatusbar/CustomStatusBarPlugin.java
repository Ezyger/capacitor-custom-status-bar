package com.ezyger.customstatusbar;

import android.os.Build;
import android.app.Activity;
import android.view.Window;
import android.view.WindowManager;

import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginCall;

@CapacitorPlugin(name = "CustomStatusBar")
public class CustomStatusBarPlugin extends Plugin {

    public void setColor(PluginCall call) {
        String color = call.getString("color");
        String style = call.getString("style");

        Activity activity = getActivity();
        Window window = activity.getWindow();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            try {
                int parsedColor = android.graphics.Color.parseColor(color);
                window.setStatusBarColor(parsedColor);
            } catch (Exception e) {
                call.reject("Invalid color format");
                return;
            }
        }

        call.resolve();
    }

    public void setTransparent(PluginCall call) {
        Activity activity = getActivity();
        Window window = activity.getWindow();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window.setStatusBarColor(android.graphics.Color.TRANSPARENT);
        }
        call.resolve();
    }
}
