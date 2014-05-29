(function() {
    "use strict";

    var AutoWashApp = window.AutoWashApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    DevExpress.devices.current({ platform: "generic" });

    $(function() {
        AutoWashApp.app = new DevExpress.framework.html.HtmlApplication(
		{
            namespace: AutoWashApp,
            navigationType: 'empty',
        });
        
        AutoWashApp.app.router.register(":view", { view: "home" });
        AutoWashApp.app.navigate();
    });
    
})();