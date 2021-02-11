goog.provide('re_frisk.core');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.initialized !== 'undefined')){
} else {
re_frisk.core.initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.prev_event !== 'undefined')){
} else {
re_frisk.core.prev_event = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.re_frame_data !== 'undefined')){
} else {
re_frisk.core.re_frame_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-db","app-db",865606302),reagent.core.atom.cljs$core$IFn$_invoke$arity$1("not connected"),new cljs.core.Keyword(null,"events","events",1792552201),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"subs","subs",-186681991),reagent.core.atom.cljs$core$IFn$_invoke$arity$1("not connected")], null);
}
re_frisk.core.update_db_and_subs = (function re_frisk$core$update_db_and_subs(){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),re_frisk.utils.get_subs());

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.deref(re_frame.db.app_db));
});
re_frisk.core.trace_cb = (function re_frisk$core$trace_cb(traces){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state)))){
return null;
} else {
var normalized = re_frisk.trace.normalize_traces(traces);
var first_event = cljs.core.first(cljs.core.deref(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk.trace.normalize_durations((function (){var or__4126__auto__ = first_event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(normalized);
}
})()),normalized));

re_frisk.subs_graph.update_subs(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subs?","subs?",-2085240020),normalized));

return re_frisk.utils.call_and_chill(re_frisk.core.update_db_and_subs,(500));
}
});
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value,queue){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state)))){
return null;
} else {
var app_db = cljs.core.deref(re_frame.db.app_db);
var indx = cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data)));
var diff = re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.core.prev_event)),app_db);
cljs.core.reset_BANG_(re_frisk.core.prev_event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"indx","indx",1571035590),indx,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),re_frisk.utils.truncate_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(value)))], null));

return re_frisk.utils.call_and_chill(re_frisk.core.update_db_and_subs,(500));
}
});
re_frisk.core.find_error_trace = (function re_frisk$core$find_error_trace(){
return null;
});
re_frisk.core.register_exception_handler = (function re_frisk$core$register_exception_handler(){
var gOldOnError = window.onerror;
return (window.onerror = (function (error_msg,url,line_number){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064)], null),new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"error?","error?",-460689159),true,new cljs.core.Keyword(null,"indx","indx",1571035590),cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data))),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.core.find_error_trace(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),error_msg,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"line","line",212345235),line_number], null)], 0))], null)], null));

if(cljs.core.truth_(gOldOnError)){
return (gOldOnError.cljs$core$IFn$_invoke$arity$3 ? gOldOnError.cljs$core$IFn$_invoke$arity$3(error_msg,url,line_number) : gOldOnError.call(null,error_msg,url,line_number));
} else {
return false;
}
}));
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61746 = arguments.length;
var i__4737__auto___61747 = (0);
while(true){
if((i__4737__auto___61747 < len__4736__auto___61746)){
args__4742__auto__.push((arguments[i__4737__auto___61747]));

var G__61749 = (i__4737__auto___61747 + (1));
i__4737__auto___61747 = G__61749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__61722){
var vec__61723 = p__61722;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723,(0),null);
if(cljs.core.truth_(cljs.core.deref(re_frisk.core.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.core.initialized,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"opts","opts",155075701),opts);

if(re_frame.trace.is_trace_enabled_QMARK_()){
re_frame.trace.register_trace_cb(new cljs.core.Keyword(null,"re-frisk-trace","re-frisk-trace",912949928),re_frisk.core.trace_cb);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
cljs.core.reset_BANG_(re_frisk.core.prev_event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref(re_frame.db.app_db)], null));

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}
}

re_frisk.subs_graph.set_root_node(re_frame.interop.reagent_id(re_frame.db.app_db));

return setTimeout(re_frisk.ui.mount_internal,(100),re_frisk.core.re_frame_data);
}
}));

(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq61721){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61721));
}));

re_frisk.core.enable = (function re_frisk$core$enable(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61752 = arguments.length;
var i__4737__auto___61753 = (0);
while(true){
if((i__4737__auto___61753 < len__4736__auto___61752)){
args__4742__auto__.push((arguments[i__4737__auto___61753]));

var G__61755 = (i__4737__auto___61753 + (1));
i__4737__auto___61753 = G__61755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frisk.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (p__61727){
var vec__61728 = p__61727;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61728,(0),null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(re_frisk.core.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable.cljs$lang$applyTo = (function (seq61726){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61726));
}));


//# sourceMappingURL=re_frisk.core.js.map
