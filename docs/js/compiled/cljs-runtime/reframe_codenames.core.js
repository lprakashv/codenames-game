goog.provide('reframe_codenames.core');
reframe_codenames.core.dev_setup = (function reframe_codenames$core$dev_setup(){
if(reframe_codenames.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
reframe_codenames.core.mount_root = (function reframe_codenames$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_codenames.views.main_panel], null),root_el);
});
reframe_codenames.core.init = (function reframe_codenames$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-codenames.events","initialize-db","reframe-codenames.events/initialize-db",1633309917)], null));

reframe_codenames.core.dev_setup();

return reframe_codenames.core.mount_root();
});

//# sourceMappingURL=reframe_codenames.core.js.map
