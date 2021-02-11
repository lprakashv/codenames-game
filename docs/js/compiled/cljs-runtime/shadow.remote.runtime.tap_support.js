goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__62814,p__62815){
var map__62817 = p__62814;
var map__62817__$1 = (((((!((map__62817 == null))))?(((((map__62817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62817):map__62817);
var svc = map__62817__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62818 = p__62815;
var map__62818__$1 = (((((!((map__62818 == null))))?(((((map__62818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62818):map__62818);
var msg = map__62818__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62818__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62818__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62818__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62818__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__62848,p__62849){
var map__62850 = p__62848;
var map__62850__$1 = (((((!((map__62850 == null))))?(((((map__62850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62850):map__62850);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62850__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__62851 = p__62849;
var map__62851__$1 = (((((!((map__62851 == null))))?(((((map__62851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62851):map__62851);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__62877,p__62878){
var map__62882 = p__62877;
var map__62882__$1 = (((((!((map__62882 == null))))?(((((map__62882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62882):map__62882);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62882__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__62883 = p__62878;
var map__62883__$1 = (((((!((map__62883 == null))))?(((((map__62883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62883):map__62883);
var msg = map__62883__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62883__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__62899,tid){
var map__62900 = p__62899;
var map__62900__$1 = (((((!((map__62900 == null))))?(((((map__62900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62900):map__62900);
var svc = map__62900__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62900__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__62922 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__62923 = null;
var count__62924 = (0);
var i__62925 = (0);
while(true){
if((i__62925 < count__62924)){
var vec__62948 = chunk__62923.cljs$core$IIndexed$_nth$arity$2(null,i__62925);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62948,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62948,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62989 = seq__62922;
var G__62990 = chunk__62923;
var G__62991 = count__62924;
var G__62992 = (i__62925 + (1));
seq__62922 = G__62989;
chunk__62923 = G__62990;
count__62924 = G__62991;
i__62925 = G__62992;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62922);
if(temp__5735__auto__){
var seq__62922__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62922__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62922__$1);
var G__62993 = cljs.core.chunk_rest(seq__62922__$1);
var G__62994 = c__4556__auto__;
var G__62995 = cljs.core.count(c__4556__auto__);
var G__62996 = (0);
seq__62922 = G__62993;
chunk__62923 = G__62994;
count__62924 = G__62995;
i__62925 = G__62996;
continue;
} else {
var vec__62954 = cljs.core.first(seq__62922__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62954,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62954,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63005 = cljs.core.next(seq__62922__$1);
var G__63006 = null;
var G__63007 = (0);
var G__63008 = (0);
seq__62922 = G__63005;
chunk__62923 = G__63006;
count__62924 = G__63007;
i__62925 = G__63008;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__62913_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__62913_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__62914_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__62914_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__62915_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__62915_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__62916_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__62916_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__62958){
var map__62959 = p__62958;
var map__62959__$1 = (((((!((map__62959 == null))))?(((((map__62959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62959):map__62959);
var svc = map__62959__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62959__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
