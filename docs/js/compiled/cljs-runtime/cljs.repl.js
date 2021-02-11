goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63200){
var map__63201 = p__63200;
var map__63201__$1 = (((((!((map__63201 == null))))?(((((map__63201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63201):map__63201);
var m = map__63201__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63207_63567 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63208_63568 = null;
var count__63209_63569 = (0);
var i__63210_63570 = (0);
while(true){
if((i__63210_63570 < count__63209_63569)){
var f_63571 = chunk__63208_63568.cljs$core$IIndexed$_nth$arity$2(null,i__63210_63570);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63571], 0));


var G__63572 = seq__63207_63567;
var G__63573 = chunk__63208_63568;
var G__63574 = count__63209_63569;
var G__63575 = (i__63210_63570 + (1));
seq__63207_63567 = G__63572;
chunk__63208_63568 = G__63573;
count__63209_63569 = G__63574;
i__63210_63570 = G__63575;
continue;
} else {
var temp__5735__auto___63576 = cljs.core.seq(seq__63207_63567);
if(temp__5735__auto___63576){
var seq__63207_63577__$1 = temp__5735__auto___63576;
if(cljs.core.chunked_seq_QMARK_(seq__63207_63577__$1)){
var c__4556__auto___63579 = cljs.core.chunk_first(seq__63207_63577__$1);
var G__63580 = cljs.core.chunk_rest(seq__63207_63577__$1);
var G__63581 = c__4556__auto___63579;
var G__63582 = cljs.core.count(c__4556__auto___63579);
var G__63583 = (0);
seq__63207_63567 = G__63580;
chunk__63208_63568 = G__63581;
count__63209_63569 = G__63582;
i__63210_63570 = G__63583;
continue;
} else {
var f_63585 = cljs.core.first(seq__63207_63577__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63585], 0));


var G__63586 = cljs.core.next(seq__63207_63577__$1);
var G__63587 = null;
var G__63588 = (0);
var G__63589 = (0);
seq__63207_63567 = G__63586;
chunk__63208_63568 = G__63587;
count__63209_63569 = G__63588;
i__63210_63570 = G__63589;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63591 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_63591], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_63591)))?cljs.core.second(arglists_63591):arglists_63591)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63254_63594 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63255_63595 = null;
var count__63256_63596 = (0);
var i__63257_63597 = (0);
while(true){
if((i__63257_63597 < count__63256_63596)){
var vec__63286_63598 = chunk__63255_63595.cljs$core$IIndexed$_nth$arity$2(null,i__63257_63597);
var name_63599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63286_63598,(0),null);
var map__63289_63600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63286_63598,(1),null);
var map__63289_63601__$1 = (((((!((map__63289_63600 == null))))?(((((map__63289_63600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63289_63600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63289_63600):map__63289_63600);
var doc_63602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63289_63601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63289_63601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63599], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63603], 0));

if(cljs.core.truth_(doc_63602)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63602], 0));
} else {
}


var G__63607 = seq__63254_63594;
var G__63608 = chunk__63255_63595;
var G__63609 = count__63256_63596;
var G__63610 = (i__63257_63597 + (1));
seq__63254_63594 = G__63607;
chunk__63255_63595 = G__63608;
count__63256_63596 = G__63609;
i__63257_63597 = G__63610;
continue;
} else {
var temp__5735__auto___63611 = cljs.core.seq(seq__63254_63594);
if(temp__5735__auto___63611){
var seq__63254_63613__$1 = temp__5735__auto___63611;
if(cljs.core.chunked_seq_QMARK_(seq__63254_63613__$1)){
var c__4556__auto___63614 = cljs.core.chunk_first(seq__63254_63613__$1);
var G__63616 = cljs.core.chunk_rest(seq__63254_63613__$1);
var G__63617 = c__4556__auto___63614;
var G__63618 = cljs.core.count(c__4556__auto___63614);
var G__63619 = (0);
seq__63254_63594 = G__63616;
chunk__63255_63595 = G__63617;
count__63256_63596 = G__63618;
i__63257_63597 = G__63619;
continue;
} else {
var vec__63293_63622 = cljs.core.first(seq__63254_63613__$1);
var name_63623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63293_63622,(0),null);
var map__63296_63624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63293_63622,(1),null);
var map__63296_63625__$1 = (((((!((map__63296_63624 == null))))?(((((map__63296_63624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63296_63624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63296_63624):map__63296_63624);
var doc_63626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63296_63625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63296_63625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63623], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63627], 0));

if(cljs.core.truth_(doc_63626)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63626], 0));
} else {
}


var G__63632 = cljs.core.next(seq__63254_63613__$1);
var G__63633 = null;
var G__63634 = (0);
var G__63635 = (0);
seq__63254_63594 = G__63632;
chunk__63255_63595 = G__63633;
count__63256_63596 = G__63634;
i__63257_63597 = G__63635;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__63317 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63318 = null;
var count__63319 = (0);
var i__63320 = (0);
while(true){
if((i__63320 < count__63319)){
var role = chunk__63318.cljs$core$IIndexed$_nth$arity$2(null,i__63320);
var temp__5735__auto___63640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___63640__$1)){
var spec_63641 = temp__5735__auto___63640__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63641)], 0));
} else {
}


var G__63645 = seq__63317;
var G__63646 = chunk__63318;
var G__63647 = count__63319;
var G__63648 = (i__63320 + (1));
seq__63317 = G__63645;
chunk__63318 = G__63646;
count__63319 = G__63647;
i__63320 = G__63648;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__63317);
if(temp__5735__auto____$1){
var seq__63317__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__63317__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63317__$1);
var G__63650 = cljs.core.chunk_rest(seq__63317__$1);
var G__63651 = c__4556__auto__;
var G__63652 = cljs.core.count(c__4556__auto__);
var G__63653 = (0);
seq__63317 = G__63650;
chunk__63318 = G__63651;
count__63319 = G__63652;
i__63320 = G__63653;
continue;
} else {
var role = cljs.core.first(seq__63317__$1);
var temp__5735__auto___63658__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___63658__$2)){
var spec_63660 = temp__5735__auto___63658__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63660)], 0));
} else {
}


var G__63663 = cljs.core.next(seq__63317__$1);
var G__63664 = null;
var G__63665 = (0);
var G__63666 = (0);
seq__63317 = G__63663;
chunk__63318 = G__63664;
count__63319 = G__63665;
i__63320 = G__63666;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__63681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__63682 = cljs.core.ex_cause(t);
via = G__63681;
t = G__63682;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__63385 = datafied_throwable;
var map__63385__$1 = (((((!((map__63385 == null))))?(((((map__63385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63385):map__63385);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63385__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63385__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63385__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__63387 = cljs.core.last(via);
var map__63387__$1 = (((((!((map__63387 == null))))?(((((map__63387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63387):map__63387);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63388 = data;
var map__63388__$1 = (((((!((map__63388 == null))))?(((((map__63388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63388):map__63388);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63388__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63388__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63388__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__63389 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__63389__$1 = (((((!((map__63389 == null))))?(((((map__63389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63389):map__63389);
var top_data = map__63389__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63389__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__63420 = phase;
var G__63420__$1 = (((G__63420 instanceof cljs.core.Keyword))?G__63420.fqn:null);
switch (G__63420__$1) {
case "read-source":
var map__63425 = data;
var map__63425__$1 = (((((!((map__63425 == null))))?(((((map__63425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63425):map__63425);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__63427 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__63427__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63427,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63427);
var G__63427__$2 = (cljs.core.truth_((function (){var fexpr__63436 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63436.cljs$core$IFn$_invoke$arity$1 ? fexpr__63436.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63436.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63427__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63427__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63427__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__63441 = top_data;
var G__63441__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63441,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63441);
var G__63441__$2 = (cljs.core.truth_((function (){var fexpr__63444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63444.cljs$core$IFn$_invoke$arity$1 ? fexpr__63444.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63444.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63441__$1);
var G__63441__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63441__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63441__$2);
var G__63441__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63441__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63441__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63441__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63441__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__63457 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63457,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63457,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63457,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63457,(3),null);
var G__63465 = top_data;
var G__63465__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63465,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__63465);
var G__63465__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63465__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__63465__$1);
var G__63465__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63465__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__63465__$2);
var G__63465__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63465__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63465__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63465__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63465__$4;
}

break;
case "execution":
var vec__63477 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63477,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63477,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63477,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63477,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63374_SHARP_){
var or__4126__auto__ = (p1__63374_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__63482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63482.cljs$core$IFn$_invoke$arity$1 ? fexpr__63482.cljs$core$IFn$_invoke$arity$1(p1__63374_SHARP_) : fexpr__63482.call(null,p1__63374_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__63486 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__63486__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63486,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__63486);
var G__63486__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63486__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63486__$1);
var G__63486__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63486__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__63486__$2);
var G__63486__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63486__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__63486__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63486__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63486__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63420__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__63499){
var map__63501 = p__63499;
var map__63501__$1 = (((((!((map__63501 == null))))?(((((map__63501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63501):map__63501);
var triage_data = map__63501__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__63508 = phase;
var G__63508__$1 = (((G__63508 instanceof cljs.core.Keyword))?G__63508.fqn:null);
switch (G__63508__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__63511 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__63512 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63513 = loc;
var G__63515 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63516_63722 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63517_63723 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63518_63724 = true;
var _STAR_print_fn_STAR__temp_val__63519_63725 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63518_63724);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63519_63725);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63493_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63493_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63517_63723);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63516_63722);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63511,G__63512,G__63513,G__63515) : format.call(null,G__63511,G__63512,G__63513,G__63515));

break;
case "macroexpansion":
var G__63523 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__63524 = cause_type;
var G__63525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63526 = loc;
var G__63527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63523,G__63524,G__63525,G__63526,G__63527) : format.call(null,G__63523,G__63524,G__63525,G__63526,G__63527));

break;
case "compile-syntax-check":
var G__63531 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__63532 = cause_type;
var G__63533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63534 = loc;
var G__63535 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63531,G__63532,G__63533,G__63534,G__63535) : format.call(null,G__63531,G__63532,G__63533,G__63534,G__63535));

break;
case "compilation":
var G__63538 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__63539 = cause_type;
var G__63540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63541 = loc;
var G__63542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63538,G__63539,G__63540,G__63541,G__63542) : format.call(null,G__63538,G__63539,G__63540,G__63541,G__63542));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__63543 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__63544 = symbol;
var G__63545 = loc;
var G__63546 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63548_63731 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63549_63732 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63550_63734 = true;
var _STAR_print_fn_STAR__temp_val__63551_63735 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63550_63734);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63551_63735);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63494_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63549_63732);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63548_63731);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63543,G__63544,G__63545,G__63546) : format.call(null,G__63543,G__63544,G__63545,G__63546));
} else {
var G__63553 = "Execution error%s at %s(%s).\n%s\n";
var G__63554 = cause_type;
var G__63555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63556 = loc;
var G__63557 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63553,G__63554,G__63555,G__63556,G__63557) : format.call(null,G__63553,G__63554,G__63555,G__63556,G__63557));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63508__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
