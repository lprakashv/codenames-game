goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53003 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53005 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53005);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53190 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53190)){
var new_db_53191 = temp__5735__auto___53190;
var fexpr__53010_53192 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53010_53192.cljs$core$IFn$_invoke$arity$1 ? fexpr__53010_53192.cljs$core$IFn$_invoke$arity$1(new_db_53191) : fexpr__53010_53192.call(null,new_db_53191));
} else {
}

var seq__53013 = cljs.core.seq(effects_without_db);
var chunk__53014 = null;
var count__53015 = (0);
var i__53016 = (0);
while(true){
if((i__53016 < count__53015)){
var vec__53031 = chunk__53014.cljs$core$IIndexed$_nth$arity$2(null,i__53016);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031,(1),null);
var temp__5733__auto___53193 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53193)){
var effect_fn_53194 = temp__5733__auto___53193;
(effect_fn_53194.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53194.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53194.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53195 = seq__53013;
var G__53196 = chunk__53014;
var G__53197 = count__53015;
var G__53198 = (i__53016 + (1));
seq__53013 = G__53195;
chunk__53014 = G__53196;
count__53015 = G__53197;
i__53016 = G__53198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53013);
if(temp__5735__auto__){
var seq__53013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53013__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53013__$1);
var G__53199 = cljs.core.chunk_rest(seq__53013__$1);
var G__53200 = c__4556__auto__;
var G__53201 = cljs.core.count(c__4556__auto__);
var G__53202 = (0);
seq__53013 = G__53199;
chunk__53014 = G__53200;
count__53015 = G__53201;
i__53016 = G__53202;
continue;
} else {
var vec__53039 = cljs.core.first(seq__53013__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53039,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53039,(1),null);
var temp__5733__auto___53203 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53203)){
var effect_fn_53204 = temp__5733__auto___53203;
(effect_fn_53204.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53204.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53204.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53205 = cljs.core.next(seq__53013__$1);
var G__53206 = null;
var G__53207 = (0);
var G__53208 = (0);
seq__53013 = G__53205;
chunk__53014 = G__53206;
count__53015 = G__53207;
i__53016 = G__53208;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52482__auto___53211 = re_frame.interop.now();
var duration__52483__auto___53214 = (end__52482__auto___53211 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52483__auto___53214,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52482__auto___53211);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53003);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53215 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53215)){
var new_db_53216 = temp__5735__auto___53215;
var fexpr__53050_53217 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53050_53217.cljs$core$IFn$_invoke$arity$1 ? fexpr__53050_53217.cljs$core$IFn$_invoke$arity$1(new_db_53216) : fexpr__53050_53217.call(null,new_db_53216));
} else {
}

var seq__53053 = cljs.core.seq(effects_without_db);
var chunk__53054 = null;
var count__53055 = (0);
var i__53056 = (0);
while(true){
if((i__53056 < count__53055)){
var vec__53075 = chunk__53054.cljs$core$IIndexed$_nth$arity$2(null,i__53056);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53075,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53075,(1),null);
var temp__5733__auto___53227 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53227)){
var effect_fn_53228 = temp__5733__auto___53227;
(effect_fn_53228.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53228.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53228.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53229 = seq__53053;
var G__53230 = chunk__53054;
var G__53231 = count__53055;
var G__53232 = (i__53056 + (1));
seq__53053 = G__53229;
chunk__53054 = G__53230;
count__53055 = G__53231;
i__53056 = G__53232;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53053);
if(temp__5735__auto__){
var seq__53053__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53053__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53053__$1);
var G__53236 = cljs.core.chunk_rest(seq__53053__$1);
var G__53237 = c__4556__auto__;
var G__53238 = cljs.core.count(c__4556__auto__);
var G__53239 = (0);
seq__53053 = G__53236;
chunk__53054 = G__53237;
count__53055 = G__53238;
i__53056 = G__53239;
continue;
} else {
var vec__53084 = cljs.core.first(seq__53053__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084,(1),null);
var temp__5733__auto___53240 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53240)){
var effect_fn_53247 = temp__5733__auto___53240;
(effect_fn_53247.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53247.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53247.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53248 = cljs.core.next(seq__53053__$1);
var G__53249 = null;
var G__53250 = (0);
var G__53251 = (0);
seq__53053 = G__53248;
chunk__53054 = G__53249;
count__53055 = G__53250;
i__53056 = G__53251;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__53092){
var map__53094 = p__53092;
var map__53094__$1 = (((((!((map__53094 == null))))?(((((map__53094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53094):map__53094);
var effect = map__53094__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53094__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53094__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__53099 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53100 = null;
var count__53101 = (0);
var i__53102 = (0);
while(true){
if((i__53102 < count__53101)){
var effect = chunk__53100.cljs$core$IIndexed$_nth$arity$2(null,i__53102);
re_frame.fx.dispatch_later(effect);


var G__53261 = seq__53099;
var G__53262 = chunk__53100;
var G__53263 = count__53101;
var G__53264 = (i__53102 + (1));
seq__53099 = G__53261;
chunk__53100 = G__53262;
count__53101 = G__53263;
i__53102 = G__53264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53099);
if(temp__5735__auto__){
var seq__53099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53099__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53099__$1);
var G__53265 = cljs.core.chunk_rest(seq__53099__$1);
var G__53266 = c__4556__auto__;
var G__53267 = cljs.core.count(c__4556__auto__);
var G__53268 = (0);
seq__53099 = G__53265;
chunk__53100 = G__53266;
count__53101 = G__53267;
i__53102 = G__53268;
continue;
} else {
var effect = cljs.core.first(seq__53099__$1);
re_frame.fx.dispatch_later(effect);


var G__53269 = cljs.core.next(seq__53099__$1);
var G__53270 = null;
var G__53271 = (0);
var G__53272 = (0);
seq__53099 = G__53269;
chunk__53100 = G__53270;
count__53101 = G__53271;
i__53102 = G__53272;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__53107 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53108 = null;
var count__53109 = (0);
var i__53110 = (0);
while(true){
if((i__53110 < count__53109)){
var vec__53128 = chunk__53108.cljs$core$IIndexed$_nth$arity$2(null,i__53110);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53128,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53128,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53281)){
var effect_fn_53282 = temp__5733__auto___53281;
(effect_fn_53282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53283 = seq__53107;
var G__53284 = chunk__53108;
var G__53285 = count__53109;
var G__53286 = (i__53110 + (1));
seq__53107 = G__53283;
chunk__53108 = G__53284;
count__53109 = G__53285;
i__53110 = G__53286;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53107);
if(temp__5735__auto__){
var seq__53107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53107__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53107__$1);
var G__53290 = cljs.core.chunk_rest(seq__53107__$1);
var G__53291 = c__4556__auto__;
var G__53292 = cljs.core.count(c__4556__auto__);
var G__53293 = (0);
seq__53107 = G__53290;
chunk__53108 = G__53291;
count__53109 = G__53292;
i__53110 = G__53293;
continue;
} else {
var vec__53133 = cljs.core.first(seq__53107__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53133,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53133,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53294 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53294)){
var effect_fn_53295 = temp__5733__auto___53294;
(effect_fn_53295.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53295.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53295.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53296 = cljs.core.next(seq__53107__$1);
var G__53297 = null;
var G__53298 = (0);
var G__53299 = (0);
seq__53107 = G__53296;
chunk__53108 = G__53297;
count__53109 = G__53298;
i__53110 = G__53299;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53150 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53151 = null;
var count__53152 = (0);
var i__53153 = (0);
while(true){
if((i__53153 < count__53152)){
var event = chunk__53151.cljs$core$IIndexed$_nth$arity$2(null,i__53153);
re_frame.router.dispatch(event);


var G__53301 = seq__53150;
var G__53302 = chunk__53151;
var G__53303 = count__53152;
var G__53304 = (i__53153 + (1));
seq__53150 = G__53301;
chunk__53151 = G__53302;
count__53152 = G__53303;
i__53153 = G__53304;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53150);
if(temp__5735__auto__){
var seq__53150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53150__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53150__$1);
var G__53310 = cljs.core.chunk_rest(seq__53150__$1);
var G__53311 = c__4556__auto__;
var G__53312 = cljs.core.count(c__4556__auto__);
var G__53313 = (0);
seq__53150 = G__53310;
chunk__53151 = G__53311;
count__53152 = G__53312;
i__53153 = G__53313;
continue;
} else {
var event = cljs.core.first(seq__53150__$1);
re_frame.router.dispatch(event);


var G__53315 = cljs.core.next(seq__53150__$1);
var G__53316 = null;
var G__53317 = (0);
var G__53318 = (0);
seq__53150 = G__53315;
chunk__53151 = G__53316;
count__53152 = G__53317;
i__53153 = G__53318;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53171 = cljs.core.seq(value);
var chunk__53172 = null;
var count__53173 = (0);
var i__53174 = (0);
while(true){
if((i__53174 < count__53173)){
var event = chunk__53172.cljs$core$IIndexed$_nth$arity$2(null,i__53174);
clear_event(event);


var G__53320 = seq__53171;
var G__53321 = chunk__53172;
var G__53322 = count__53173;
var G__53323 = (i__53174 + (1));
seq__53171 = G__53320;
chunk__53172 = G__53321;
count__53173 = G__53322;
i__53174 = G__53323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53171);
if(temp__5735__auto__){
var seq__53171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53171__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53171__$1);
var G__53324 = cljs.core.chunk_rest(seq__53171__$1);
var G__53325 = c__4556__auto__;
var G__53326 = cljs.core.count(c__4556__auto__);
var G__53327 = (0);
seq__53171 = G__53324;
chunk__53172 = G__53325;
count__53173 = G__53326;
i__53174 = G__53327;
continue;
} else {
var event = cljs.core.first(seq__53171__$1);
clear_event(event);


var G__53328 = cljs.core.next(seq__53171__$1);
var G__53329 = null;
var G__53330 = (0);
var G__53331 = (0);
seq__53171 = G__53328;
chunk__53172 = G__53329;
count__53173 = G__53330;
i__53174 = G__53331;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
