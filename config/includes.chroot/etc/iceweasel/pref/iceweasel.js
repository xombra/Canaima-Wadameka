// This is the Debian specific preferences file for Iceweasel
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/iceweasel/pref directory, override any preference that is
// present in /usr/lib/iceweasel/defaults/preferences directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/iceweasel/pref, please note that they won't be kept if you
// do make your changes in /usr/lib/iceweasel/defaults/preferences.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.cache.disk_cache_ssl", true);  
pref("browser.cache.memory.capacity", 65536); 
pref("browser.display.show_image_placeholders", false); 
pref("browser.safebrowsing.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download");
pref("browser.xul.error_pages.enabled", true); 
pref("browser.tabs.warnOnClose", false);
pref("content.switch.threshold", 100000); 
pref("extensions.autoDisableScopes", 0);
pref("network.http.pipelining", true);
pref("network.http.pipelining.aggressive", true);
pref("network.http.pipelining.maxrequests", 12);
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.keep-alive.timeout", 20);
pref("network.http.connection-retry-timeout", 0);
pref("network.http.max-persistent-connections-per-proxy", 256);
pref("network.http.max-connections-per-server",20);
pref("network.http.pipelining.reschedule-timeout", 15000);
pref("network.http.pipelining.read-timeout", 60000);
pref("network.http.pipelining.max-optimistic-requests", 3);
pref("privacy.donottrackheader.enabled", true);
pref("config.trim_on_minimize", true);
pref("content.interrupt.parsing", true);
pref("content.maxtextrun", 8191); 
pref("content.max.tokenizing.time", 300000); 
pref("content.notify.ontimer", true);
pref("content.notify.backoffcount", 5);
pref("content.notify.interval", 100000); 
pref("general.smoothScroll", true); 
pref("gfx.font_rendering.opentype_svg.enabled", true);
pref("gfx.font_rendering.wordcache.charlimit", true);
pref("gfx.font_rendering.wordcache.maxentries", 1000);
pref("gfx.font_rendering.directwrite.enabled", true);
pref("nglayout.initialpaint.delay", 100);
pref("security.ssl.enable_false_start", true);
pref("ui.submenuDelay", 0); 

