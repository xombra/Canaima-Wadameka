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
pref("browser.cache.memory.enable",true);
pref("browser.cache.memory.capacity", -1); 
pref("browser.cache.disk.smart_size_cached_value",358400);
pref("browser.display.show_image_placeholders", false); 
pref("browser.safebrowsing.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download");
pref("browser.startup.page",1);
pref("browser.startup.homepage", "http://www.viserproject.com/");
pref("browser.xul.error_pages.enabled", true); 
pref("browser.sessionhistory.max_total_viewers",-1);
pref("browser.tabs.warnOnClose", false);
pref("config.trim_on_minimize", true);
pref("content.interrupt.parsing", true);
pref("content.maxtextrun", 8191); 
pref("content.max.tokenizing.time", 300000); 
pref("content.notify.ontimer", true);
pref("content.notify.backoffcount", 5);
pref("content.notify.interval", 250000); 
pref("content.switch.threshold", 100000);
pref("extensions.autoDisableScopes", 0);
pref("general.smoothScroll", true); 
pref("gfx.font_rendering.opentype_svg.enabled", true);
pref("gfx.font_rendering.wordcache.charlimit", true);
pref("gfx.font_rendering.wordcache.maxentries", 1000);
pref("gfx.font_rendering.directwrite.enabled", true);
pref("network.cookie.alwaysAcceptSessionCookies",false);
pref("network.cookie.thirdparty.sessionOnly",false);
pref("network.dnsCacheExpiration", 3600); 
pref("network.dnsCacheEntries", 200);
pref("network.dns.disableIPv6", true);
pref("network.protocol-handler.app.apt","/usr/bin/apturl");
pref("network.protocol-handler.warn-external.apt",false);
pref("network.protocol-handler.app.apt+http","/usr/bin/apturl");
pref("network.protocol-handler.warn-external.apt+http",false);
pref("network.http.pipelining", true);
pref("network.http.pipelining.aggressive", true);
pref("network.http.pipelining.maxrequests", 8);
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.keep-alive",true);
pref("network.http.keep-alive.timeout", 115);
pref("network.http.connection-retry-timeout", 0);
pref("network.http.max-persistent-connections-per-proxy", 256);
pref("network.http.max-connections-per-server",20);
pref("network.http.pipelining.reschedule-timeout", 15000);
pref("network.http.pipelining.read-timeout", 60000);
pref("network.http.pipelining.max-optimistic-requests", 3);
pref("network.http.spdy.enabled.http2draf",true");
pref("network.http.spdy.enabled.v2",true);
pref("network.http.spdy.enabled.v3",true);
pref("network.http.spdy.ping-threshold",58);
pref("network.http.spdy.push-allowance",65536);
pref("network.proxy.http", "127.0.0.1");
pref("network.proxy.ssl", "127.0.0.1");
pref("network.proxy.http_port", 8118);
pref("network.proxy.http_port", 8118);
pref("nglayout.initialpaint.delay", 250);
pref("plugin.expose_full_path", true);
pref("privacy.donottrackheader.value";1);
pref("privacy.donottrackheader.enabled", true);


pref("security.default_personal_cert","Ask Every Time");
pref("security.ssl.enable_false_start", true);
pref("ui.submenuDelay", 0); 
