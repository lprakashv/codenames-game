goog.provide('re_frisk.ui');
re_frisk.ui.on_external_window_unload = (function re_frisk$ui$on_external_window_unload(app){
return (function (){
reagent.dom.unmount_component_at_node(app);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"ext-win-opened?","ext-win-opened?",-1620778949),false);
});
});
re_frisk.ui.mount_external = (function re_frisk$ui$mount_external(window,doc,re_frame_data){
var app = doc.getElementById("re-frisk-debugger-div");
goog.object.set(window,"onunload",re_frisk.ui.on_external_window_unload(app));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"ext-win-opened?","ext-win-opened?",-1620778949),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),doc], 0));

re_frisk.subs_graph.init(window,doc);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.main_view,re_frame_data,re_frisk.db.tool_state,doc], null)], null),app);
});
re_frisk.ui.open_debugger_window = (function re_frisk$ui$open_debugger_window(re_frame_data){
return (function (){
var map__61672 = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state));
var map__61672__$1 = (((((!((map__61672 == null))))?(((((map__61672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61672):map__61672);
var ext_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61672__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61672__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var win = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = ext_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = ext_height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no",",directories=no,toolbar=no,menubar=no"].join(''));
var doc = win.document;
doc.open();

doc.write(re_frisk.ui.external_hml.html_doc);

goog.object.set(win,"onload",(function (){
return re_frisk.ui.mount_external(win,doc,re_frame_data);
}));

return doc.close();
});
});
re_frisk.ui.on_iframe_load = (function re_frisk$ui$on_iframe_load(re_frame_data){
return (function (){
var iframe = document.getElementById("re-frisk-iframe");
var doc = iframe.contentDocument;
var win = iframe.contentWindow;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc);

re_frisk.subs_graph.init(win,doc);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.main_view,re_frame_data,re_frisk.db.tool_state,doc], null)], null),doc.getElementById("re-frisk-debugger-div"));
});
});
re_frisk.ui.inner_view = (function re_frisk$ui$inner_view(re_frame_data){
var ext_opened_QMARK_ = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"ext-win-opened?","ext-win-opened?",-1620778949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state));
}));
var latest_left = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"latest-left","latest-left",-733268314).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state));
}));
return (function (){
if(cljs.core.truth_(cljs.core.deref(ext_opened_QMARK_))){
return null;
} else {
var left = (function (){var or__4126__auto__ = re_frisk.utils.normalize_draggable(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.ui.components.drag.draggable)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (window.innerWidth - (30));
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.inner_view_container(left,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.ui.components.drag.draggable)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.external_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.ui.open_debugger_window(re_frame_data)], null),"\u2197"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.external_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(re_frisk.utils.closed_QMARK_(left)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"latest-left","latest-left",-733268314),(window.innerWidth - left));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.ui.components.drag.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth - ((re_frisk.utils.closed_QMARK_(left))?cljs.core.deref(latest_left):(30))));
})], null),((re_frisk.utils.closed_QMARK_(left))?"\u2B60":"\u2B62")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.dragg_button,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),re_frisk.ui.components.drag.mouse_down_handler], null)], null)], null)], null),((re_frisk.utils.closed_QMARK_(left))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"re-frisk-iframe",new cljs.core.Keyword(null,"src-doc","src-doc",-543683145),re_frisk.ui.external_hml.html_doc,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.ui.components.drag.draggable)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"none","none",1333468478)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"all","all",892129742)], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),re_frisk.ui.on_iframe_load(re_frame_data)], null)], null)], null))], null);
}
});
});
re_frisk.ui.mount_internal = (function re_frisk$ui$mount_internal(re_frame_data){
var div = document.createElement("div");
goog.object.set(div,"style",["position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none;","margin:0; padding:0; z-index:999999999;pointer-events: none;"].join(''));

document.body.appendChild(div);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.inner_view,re_frame_data], null),div);
});

//# sourceMappingURL=re_frisk.ui.js.map
