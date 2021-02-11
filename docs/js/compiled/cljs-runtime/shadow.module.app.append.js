
shadow.cljs.devtools.client.env.module_loaded('app');

try { reframe_codenames.core.init(); } catch (e) { console.error("An error occurred when calling (reframe-codenames.core/init)"); throw(e); }