goog.provide('re_frisk.trace');
re_frisk.trace.normalize_traces = (function re_frisk$trace$normalize_traces(traces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (items,p__59191){
var map__59193 = p__59191;
var map__59193__$1 = (((((!((map__59193 == null))))?(((((map__59193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59193):map__59193);
var trace = map__59193__$1;
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59193__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59193__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59193__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op_type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(op_type),"sub"))?new cljs.core.Keyword(null,"sub","sub",-2093760025):op_type);
var item = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indx","indx",1571035590),id,new cljs.core.Keyword(null,"trace?","trace?",1730690679),true], null);
var G__59198 = op_type__$1;
var G__59198__$1 = (((G__59198 instanceof cljs.core.Keyword))?G__59198.fqn:null);
switch (G__59198__$1) {
case "event":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"trace?","trace?",1730690679)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null)),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(tags),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),re_frisk.utils.truncate_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(tags)))),new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964).cljs$core$IFn$_invoke$arity$1(tags))], 0))], 0)));

break;
case "event/handler":
var prev = cljs.core.peek(items);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"event","event",301435442)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(items),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324),duration));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], 0)));
}

break;
case "event/do-fx":
var prev = cljs.core.peek(items);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"event","event",301435442)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(items),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432),duration));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], 0)));
}

break;
case "sub":
case "render":
var prev = cljs.core.peek(items);
var trace__$1 = cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null));
var trace__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(trace__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),re_frisk.utils.str_ms(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reaction","reaction",490869788),new cljs.core.Keyword(null,"reaction","reaction",490869788).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"cached?","cached?",86081880),new cljs.core.Keyword(null,"cached?","cached?",86081880).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),new cljs.core.Keyword(null,"input-signals","input-signals",563633497).cljs$core$IFn$_invoke$arity$1(tags)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"subs?","subs?",-2085240020).cljs$core$IFn$_invoke$arity$1(prev))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(items),cljs.core.update.cljs$core$IFn$_invoke$arity$4(prev,new cljs.core.Keyword(null,"subs","subs",-186681991),cljs.core.conj,trace__$2));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"subs?","subs?",-2085240020),true,new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trace__$2], null),new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135),re_frame.interop.reagent_id(re_frame.db.app_db),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(trace__$2)], null)], 0)));
}

break;
default:
return items;

}
}),cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),traces));
});
re_frisk.trace.normalize_durations = (function re_frisk$trace$normalize_durations(first_event){
return (function (p__59220){
var map__59221 = p__59220;
var map__59221__$1 = (((((!((map__59221 == null))))?(((((map__59221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59221):map__59221);
var trace = map__59221__$1;
var subs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"subs?","subs?",-2085240020));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var handler_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324));
var fx_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59221__$1,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432));
var map__59251 = (cljs.core.truth_(subs_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([trace,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__59252){
var map__59253 = p__59252;
var map__59253__$1 = (((((!((map__59253 == null))))?(((((map__59253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59253):map__59253);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59253__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var op_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59253__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59253__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var cached_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59253__$1,new cljs.core.Keyword(null,"cached?","cached?",86081880));
var G__59257 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core._PLUS_,duration);
var G__59257__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59257,new cljs.core.Keyword(null,"end","end",-268185958),end)
;
var G__59257__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","run","sub/run",-1821315581)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59257__$1,new cljs.core.Keyword(null,"run-count","run-count",-924546145),cljs.core.inc),new cljs.core.Keyword(null,"run-duration","run-duration",1321930251),cljs.core._PLUS_,duration):G__59257__$1);
var G__59257__$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","create","sub/create",-1301317560))) && (cljs.core.not(cached_QMARK_))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59257__$2,new cljs.core.Keyword(null,"created-count","created-count",-1708534686),cljs.core.inc),new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187),cljs.core._PLUS_,duration):G__59257__$2);
var G__59257__$4 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","create","sub/create",-1301317560)))?cached_QMARK_:false))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59257__$3,new cljs.core.Keyword(null,"created-count-cached","created-count-cached",1601348000),cljs.core.inc),new cljs.core.Keyword(null,"created-duration-cached","created-duration-cached",1269460585),cljs.core._PLUS_,duration):G__59257__$3);
var G__59257__$5 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59257__$4,new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431),cljs.core.inc),new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274),cljs.core._PLUS_,duration):G__59257__$4);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword(null,"render","render",-1408033454))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59257__$5,new cljs.core.Keyword(null,"render-count","render-count",-875399191),cljs.core.inc),new cljs.core.Keyword(null,"render-duration","render-duration",1704092121),cljs.core._PLUS_,duration);
} else {
return G__59257__$5;
}
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"created-count-cached","created-count-cached",1601348000),new cljs.core.Keyword(null,"created-count","created-count",-1708534686),new cljs.core.Keyword(null,"created-duration-cached","created-duration-cached",1269460585),new cljs.core.Keyword(null,"render-count","render-count",-875399191),new cljs.core.Keyword(null,"run-duration","run-duration",1321930251),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187),new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431),new cljs.core.Keyword(null,"render-duration","render-duration",1704092121),new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274),new cljs.core.Keyword(null,"run-count","run-count",-924546145)],[(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)]),subs)], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type,new cljs.core.Keyword(null,"event","event",301435442)))?(function (){var handler_fx_duration = (handler_duration + fx_duration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(trace,new cljs.core.Keyword(null,"handler-fx-duration","handler-fx-duration",1974562002),handler_fx_duration,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-fx-duration-ms","handler-fx-duration-ms",-118285662),re_frisk.utils.str_ms(handler_fx_duration)], 0));
})():trace
));
var map__59251__$1 = (((((!((map__59251 == null))))?(((((map__59251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59251):map__59251);
var trace__$1 = map__59251__$1;
var render_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"render-duration","render-duration",1704092121));
var disposed_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274));
var handler_duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324));
var created_duration_cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"created-duration-cached","created-duration-cached",1269460585));
var run_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"run-duration","run-duration",1321930251));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var fx_duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432));
var created_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59251__$1,new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187));
var G__59268 = trace__$1;
var G__59268__$1 = (cljs.core.truth_(duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),re_frisk.utils.str_ms(duration)):G__59268);
var G__59268__$2 = (cljs.core.truth_(handler_duration__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$1,new cljs.core.Keyword(null,"handler-duration-ms","handler-duration-ms",-491924416),re_frisk.utils.str_ms(handler_duration__$1)):G__59268__$1);
var G__59268__$3 = (cljs.core.truth_(fx_duration__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$2,new cljs.core.Keyword(null,"fx-duration-ms","fx-duration-ms",-1014211328),re_frisk.utils.str_ms(fx_duration__$1)):G__59268__$2);
var G__59268__$4 = (cljs.core.truth_(run_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$3,new cljs.core.Keyword(null,"run-duration-ms","run-duration-ms",-1510786585),re_frisk.utils.str_ms(run_duration)):G__59268__$3);
var G__59268__$5 = (cljs.core.truth_(created_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$4,new cljs.core.Keyword(null,"created-duration-ms","created-duration-ms",1987553257),re_frisk.utils.str_ms(created_duration)):G__59268__$4);
var G__59268__$6 = (cljs.core.truth_(created_duration_cached)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$5,new cljs.core.Keyword(null,"created-duration-cached-ms","created-duration-cached-ms",1699705669),re_frisk.utils.str_ms(created_duration_cached)):G__59268__$5);
var G__59268__$7 = (cljs.core.truth_(disposed_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$6,new cljs.core.Keyword(null,"disposed-duration-ms","disposed-duration-ms",-1456969189),re_frisk.utils.str_ms(disposed_duration)):G__59268__$6);
var G__59268__$8 = (cljs.core.truth_(render_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$7,new cljs.core.Keyword(null,"render-duration-ms","render-duration-ms",-757772115),re_frisk.utils.str_ms(render_duration)):G__59268__$7);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268__$8,new cljs.core.Keyword(null,"position","position",-2011731912),(start - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(first_event)));

});
});

//# sourceMappingURL=re_frisk.trace.js.map
