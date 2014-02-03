goog.require('example.App');

goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');

example.App.setButtonClickHandler(function(e) {
  var moduleManager = goog.module.ModuleManager.getInstance();
  moduleManager.execOnLoad('settings', this.onSettingsLoaded, this);
});

example.App.install('content');

var moduleManager = goog.module.ModuleManager.getInstance();
var moduleLoader = new goog.module.ModuleLoader();

// Normally, this would be:
// moduleLoader.setDebugMode(!!goog.global['PLOVR_MODULE_USE_DEBUG_MODE']);
// But because this is still used with local files in "production," debug mode
// should always be used.
moduleLoader.setDebugMode(true);

moduleManager.setLoader(moduleLoader);
moduleManager.setAllModuleInfo(goog.global['PLOVR_MODULE_INFO']);
moduleManager.setModuleUris(goog.global['PLOVR_MODULE_URIS']);

// This tells the module manager that the 'app' module has been loaded.
// The module manager will not evaluate the code for any of app's
// dependencies until it knows it has been loaded.
moduleManager.setLoaded('app');

// TODO(bolinfest): Include deps.js by default to eliminate the need for this.
goog.addDependency('', [
  'goog.debug.ErrorHandler',
  'goog.Uri'
], []);
