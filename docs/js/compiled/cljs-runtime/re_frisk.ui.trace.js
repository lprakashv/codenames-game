goog.provide('re_frisk.ui.trace');
re_frisk.ui.trace.subs_count = (function re_frisk$ui$trace$subs_count(label,val,color,duration_ms){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),label,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(4),new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),val], null),duration_ms], null)], null);
});
re_frisk.ui.trace.subs_details = (function re_frisk$ui$trace$subs_details(p__58942){
var map__58943 = p__58942;
var map__58943__$1 = (((((!((map__58943 == null))))?(((((map__58943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58943):map__58943);
var disposed_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var disposed_duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"disposed-duration-ms","disposed-duration-ms",-1456969189));
var run_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"run-count","run-count",-924546145));
var created_count_cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"created-count-cached","created-count-cached",1601348000));
var created_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"created-count","created-count",-1708534686));
var created_duration_cached_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"created-duration-cached-ms","created-duration-cached-ms",1699705669));
var run_duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"run-duration-ms","run-duration-ms",-1510786585));
var created_duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"created-duration-ms","created-duration-ms",1987553257));
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"render-count","render-count",-875399191));
var render_duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"render-duration-ms","render-duration-ms",-757772115));
var duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#444444",new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8)], null)], null),"Total time: ",duration_ms], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_count,"Created",created_count,re_frisk.ui.components.colors.sub_create,created_duration_ms], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_count,"Cached",created_count_cached,re_frisk.ui.components.colors.sub_create_cached,created_duration_cached_ms], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_count,"Run",run_count,re_frisk.ui.components.colors.sub_run,run_duration_ms], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_count,"Disposed",disposed_count,re_frisk.ui.components.colors.sub_dispose,disposed_duration_ms], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_count,"Render",render_count,re_frisk.ui.components.colors.render,render_duration_ms], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,(function (){var iter__4529__auto__ = (function re_frisk$ui$trace$subs_details_$_iter__58947(s__58948){
return (new cljs.core.LazySeq(null,(function (){
var s__58948__$1 = s__58948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58948__$1);
if(temp__5735__auto__){
var s__58948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58948__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58948__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58950 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58949 = (0);
while(true){
if((i__58949 < size__4528__auto__)){
var map__58951 = cljs.core._nth(c__4527__auto__,i__58949);
var map__58951__$1 = (((((!((map__58951 == null))))?(((((map__58951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58951):map__58951);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var duration_ms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var cached_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"cached?","cached?",86081880));
cljs.core.chunk_append(b__58950,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(100),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,(cljs.core.truth_(cached_QMARK_)?new cljs.core.Keyword("sub","create-cached","sub/create-cached",261192212):op_type))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(100)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),duration_ms__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__59003 = (i__58949 + (1));
i__58949 = G__59003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58950),re_frisk$ui$trace$subs_details_$_iter__58947(cljs.core.chunk_rest(s__58948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58950),null);
}
} else {
var map__58954 = cljs.core.first(s__58948__$2);
var map__58954__$1 = (((((!((map__58954 == null))))?(((((map__58954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58954):map__58954);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var duration_ms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var cached_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"cached?","cached?",86081880));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(100),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,(cljs.core.truth_(cached_QMARK_)?new cljs.core.Keyword("sub","create-cached","sub/create-cached",261192212):op_type))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(100)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),duration_ms__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),re_frisk$ui$trace$subs_details_$_iter__58947(cljs.core.rest(s__58948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(subs);
})()], null)], null);
});
re_frisk.ui.trace.subs_item = (function re_frisk$ui$trace$subs_item(p__58958){
var map__58959 = p__58958;
var map__58959__$1 = (((((!((map__58959 == null))))?(((((map__58959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58959):map__58959);
var duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
var run_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"run-count","run-count",-924546145));
var created_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"created-count","created-count",-1708534686));
var disposed_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431));
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"render-count","render-count",-875399191));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"subs"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),duration_ms,(((created_count === (0)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),re_frisk.ui.components.colors.sub_create,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),created_count], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),re_frisk.ui.components.colors.sub_run,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),run_count], null),(((disposed_count === (0)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),re_frisk.ui.components.colors.sub_dispose,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),disposed_count], null)),(((render_count === (0)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),re_frisk.ui.components.colors.render,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),render_count], null))], null)], null);
});
re_frisk.ui.trace.trace_item = (function re_frisk$ui$trace$trace_item(p__58964,tool_state){
var map__58965 = p__58964;
var map__58965__$1 = (((((!((map__58965 == null))))?(((((map__58965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58965):map__58965);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58965__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
return (function (p__58968,_){
var map__58970 = p__58968;
var map__58970__$1 = (((((!((map__58970 == null))))?(((((map__58970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58970):map__58970);
var item = map__58970__$1;
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var op_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var indx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"indx","indx",1571035590));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),["events-list-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["list-group-item",(cljs.core.truth_(selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.7",new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),(2),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638),item);

re_frisk.utils.scroll_timeline_event_item(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)),indx);

return event.preventDefault();
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subs","subs",-186681991),op_type__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_item,item], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type__$1)], null)], null))], null);
});
});
re_frisk.ui.trace.trace_event_item = (function re_frisk$ui$trace$trace_event_item(p__58975){
var map__58977 = p__58975;
var map__58977__$1 = (((((!((map__58977 == null))))?(((((map__58977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58977):map__58977);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),duration_ms], null)], null);
});

//# sourceMappingURL=re_frisk.ui.trace.js.map