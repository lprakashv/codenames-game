goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51072__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51073__i = 0, G__51073__a = new Array(arguments.length -  0);
while (G__51073__i < G__51073__a.length) {G__51073__a[G__51073__i] = arguments[G__51073__i + 0]; ++G__51073__i;}
  args = new cljs.core.IndexedSeq(G__51073__a,0,null);
} 
return G__51072__delegate.call(this,args);};
G__51072.cljs$lang$maxFixedArity = 0;
G__51072.cljs$lang$applyTo = (function (arglist__51074){
var args = cljs.core.seq(arglist__51074);
return G__51072__delegate(args);
});
G__51072.cljs$core$IFn$_invoke$arity$variadic = G__51072__delegate;
return G__51072;
})()
);

(o.error = (function() { 
var G__51078__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51080__i = 0, G__51080__a = new Array(arguments.length -  0);
while (G__51080__i < G__51080__a.length) {G__51080__a[G__51080__i] = arguments[G__51080__i + 0]; ++G__51080__i;}
  args = new cljs.core.IndexedSeq(G__51080__a,0,null);
} 
return G__51078__delegate.call(this,args);};
G__51078.cljs$lang$maxFixedArity = 0;
G__51078.cljs$lang$applyTo = (function (arglist__51081){
var args = cljs.core.seq(arglist__51081);
return G__51078__delegate(args);
});
G__51078.cljs$core$IFn$_invoke$arity$variadic = G__51078__delegate;
return G__51078;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
