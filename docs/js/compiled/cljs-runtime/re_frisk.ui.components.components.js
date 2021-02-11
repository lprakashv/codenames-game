goog.provide('re_frisk.ui.components.components');
re_frisk.ui.components.components.small_button = (function re_frisk$ui$components$components$small_button(var_args){
var G__58876 = arguments.length;
switch (G__58876) {
case 1:
return re_frisk.ui.components.components.small_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.ui.components.components.small_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.ui.components.components.small_button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return re_frisk.ui.components.components.small_button.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,label);
}));

(re_frisk.ui.components.components.small_button.cljs$core$IFn$_invoke$arity$2 = (function (p__58880,label){
var map__58881 = p__58880;
var map__58881__$1 = (((((!((map__58881 == null))))?(((((map__58881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58881):map__58881);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58881__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58881__$1,new cljs.core.Keyword(null,"active?","active?",459499776),true);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-xs",(cljs.core.truth_(active_QMARK_)?" btn-primary":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
}));

(re_frisk.ui.components.components.small_button.cljs$lang$maxFixedArity = 2);

re_frisk.ui.components.components.label_button = (function re_frisk$ui$components$components$label_button(var_args){
var G__58890 = arguments.length;
switch (G__58890) {
case 1:
return re_frisk.ui.components.components.label_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.ui.components.components.label_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.ui.components.components.label_button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return re_frisk.ui.components.components.small_button.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,label);
}));

(re_frisk.ui.components.components.label_button.cljs$core$IFn$_invoke$arity$2 = (function (p__58893,label){
var map__58894 = p__58893;
var map__58894__$1 = (((((!((map__58894 == null))))?(((((map__58894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58894):map__58894);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58894__$1,new cljs.core.Keyword(null,"active?","active?",459499776),true);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-xs",(cljs.core.truth_(active_QMARK_)?" btn-primary":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),(cljs.core.truth_(active_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691)], null))], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
}));

(re_frisk.ui.components.components.label_button.cljs$lang$maxFixedArity = 2);

re_frisk.ui.components.components.scroller = (function re_frisk$ui$components$components$scroller(var_args){
var G__58904 = arguments.length;
switch (G__58904) {
case 1:
return re_frisk.ui.components.components.scroller.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.ui.components.components.scroller.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.ui.components.components.scroller.cljs$core$IFn$_invoke$arity$1 = (function (div){
return re_frisk.ui.components.components.scroller.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,div);
}));

(re_frisk.ui.components.components.scroller.cljs$core$IFn$_invoke$arity$2 = (function (attr,div){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attr)], 0))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"style","style",-496642736))], 0)),div], null);
}));

(re_frisk.ui.components.components.scroller.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=re_frisk.ui.components.components.js.map
