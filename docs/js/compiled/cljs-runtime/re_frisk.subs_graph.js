goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5735__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5735__auto__)){
var network_js = temp__5735__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5735__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5735__auto___54475 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5735__auto___54475)){
var app_db_reaction_54476 = temp__5735__auto___54475;
re_frisk.subs_graph.set_root_node(app_db_reaction_54476);
} else {
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__53812_54478 = cljs.core.seq(traces);
var chunk__53813_54479 = null;
var count__53814_54480 = (0);
var i__53815_54481 = (0);
while(true){
if((i__53815_54481 < count__53814_54480)){
var map__53969_54482 = chunk__53813_54479.cljs$core$IIndexed$_nth$arity$2(null,i__53815_54481);
var map__53969_54483__$1 = (((((!((map__53969_54482 == null))))?(((((map__53969_54482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53969_54482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53969_54482):map__53969_54482);
var subs_54484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53969_54483__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__53971_54492 = cljs.core.seq(subs_54484);
var chunk__53972_54493 = null;
var count__53973_54494 = (0);
var i__53974_54495 = (0);
while(true){
if((i__53974_54495 < count__53973_54494)){
var map__54003_54496 = chunk__53972_54493.cljs$core$IIndexed$_nth$arity$2(null,i__53974_54495);
var map__54003_54497__$1 = (((((!((map__54003_54496 == null))))?(((((map__54003_54496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54003_54496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54003_54496):map__54003_54496);
var op_type_54498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54003_54497__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_54499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54003_54497__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_54500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54003_54497__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_54501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54003_54497__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___54506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_54499);
if(cljs.core.truth_(temp__5733__auto___54506)){
var old_reaction_54507 = temp__5733__auto___54506;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_54498,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_54507))){
var updated_node_54509 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_54507,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54498,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54498)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54499,updated_node_54509);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_54509], null)));
} else {
}
} else {
}
} else {
var data_54515 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_54499,new cljs.core.Keyword(null,"label","label",1718410804),operation_54501,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54498)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54498], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54499,data_54515);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_54515);
}

if(cljs.core.truth_(input_signals_54500)){
var seq__54007_54520 = cljs.core.seq(input_signals_54500);
var chunk__54008_54521 = null;
var count__54009_54522 = (0);
var i__54010_54523 = (0);
while(true){
if((i__54010_54523 < count__54009_54522)){
var input_reaction_54526 = chunk__54008_54521.cljs$core$IIndexed$_nth$arity$2(null,i__54010_54523);
var reaction_path_54527 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54526),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54499)].join('');
var temp__5733__auto___54528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54527);
if(cljs.core.truth_(temp__5733__auto___54528)){
var old_edge_54529 = temp__5733__auto___54528;
var updated_edge_54530 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54529,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54527,updated_edge_54530);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54530], null)));
} else {
}
} else {
var data_54532 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54527,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54526,new cljs.core.Keyword(null,"to","to",192099007),reaction_54499,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54527,data_54532);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54532));
} else {
}
}


var G__54538 = seq__54007_54520;
var G__54539 = chunk__54008_54521;
var G__54540 = count__54009_54522;
var G__54541 = (i__54010_54523 + (1));
seq__54007_54520 = G__54538;
chunk__54008_54521 = G__54539;
count__54009_54522 = G__54540;
i__54010_54523 = G__54541;
continue;
} else {
var temp__5735__auto___54542 = cljs.core.seq(seq__54007_54520);
if(temp__5735__auto___54542){
var seq__54007_54543__$1 = temp__5735__auto___54542;
if(cljs.core.chunked_seq_QMARK_(seq__54007_54543__$1)){
var c__4556__auto___54544 = cljs.core.chunk_first(seq__54007_54543__$1);
var G__54545 = cljs.core.chunk_rest(seq__54007_54543__$1);
var G__54546 = c__4556__auto___54544;
var G__54547 = cljs.core.count(c__4556__auto___54544);
var G__54548 = (0);
seq__54007_54520 = G__54545;
chunk__54008_54521 = G__54546;
count__54009_54522 = G__54547;
i__54010_54523 = G__54548;
continue;
} else {
var input_reaction_54549 = cljs.core.first(seq__54007_54543__$1);
var reaction_path_54550 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54549),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54499)].join('');
var temp__5733__auto___54551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54550);
if(cljs.core.truth_(temp__5733__auto___54551)){
var old_edge_54553 = temp__5733__auto___54551;
var updated_edge_54554 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54553,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54550,updated_edge_54554);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54554], null)));
} else {
}
} else {
var data_54555 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54550,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54549,new cljs.core.Keyword(null,"to","to",192099007),reaction_54499,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54550,data_54555);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54555));
} else {
}
}


var G__54564 = cljs.core.next(seq__54007_54543__$1);
var G__54565 = null;
var G__54566 = (0);
var G__54567 = (0);
seq__54007_54520 = G__54564;
chunk__54008_54521 = G__54565;
count__54009_54522 = G__54566;
i__54010_54523 = G__54567;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__54574 = seq__53971_54492;
var G__54575 = chunk__53972_54493;
var G__54576 = count__53973_54494;
var G__54577 = (i__53974_54495 + (1));
seq__53971_54492 = G__54574;
chunk__53972_54493 = G__54575;
count__53973_54494 = G__54576;
i__53974_54495 = G__54577;
continue;
} else {
var temp__5735__auto___54578 = cljs.core.seq(seq__53971_54492);
if(temp__5735__auto___54578){
var seq__53971_54579__$1 = temp__5735__auto___54578;
if(cljs.core.chunked_seq_QMARK_(seq__53971_54579__$1)){
var c__4556__auto___54583 = cljs.core.chunk_first(seq__53971_54579__$1);
var G__54584 = cljs.core.chunk_rest(seq__53971_54579__$1);
var G__54585 = c__4556__auto___54583;
var G__54586 = cljs.core.count(c__4556__auto___54583);
var G__54587 = (0);
seq__53971_54492 = G__54584;
chunk__53972_54493 = G__54585;
count__53973_54494 = G__54586;
i__53974_54495 = G__54587;
continue;
} else {
var map__54025_54588 = cljs.core.first(seq__53971_54579__$1);
var map__54025_54589__$1 = (((((!((map__54025_54588 == null))))?(((((map__54025_54588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54025_54588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54025_54588):map__54025_54588);
var op_type_54590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54589__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_54591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54589__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_54592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54589__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_54593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54589__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___54600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_54591);
if(cljs.core.truth_(temp__5733__auto___54600)){
var old_reaction_54601 = temp__5733__auto___54600;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_54590,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_54601))){
var updated_node_54602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_54601,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54590,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54590)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54591,updated_node_54602);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_54602], null)));
} else {
}
} else {
}
} else {
var data_54607 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_54591,new cljs.core.Keyword(null,"label","label",1718410804),operation_54593,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54590)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54590], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54591,data_54607);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_54607);
}

if(cljs.core.truth_(input_signals_54592)){
var seq__54027_54610 = cljs.core.seq(input_signals_54592);
var chunk__54028_54611 = null;
var count__54029_54612 = (0);
var i__54030_54613 = (0);
while(true){
if((i__54030_54613 < count__54029_54612)){
var input_reaction_54614 = chunk__54028_54611.cljs$core$IIndexed$_nth$arity$2(null,i__54030_54613);
var reaction_path_54615 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54614),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54591)].join('');
var temp__5733__auto___54616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54615);
if(cljs.core.truth_(temp__5733__auto___54616)){
var old_edge_54617 = temp__5733__auto___54616;
var updated_edge_54618 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54617,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54615,updated_edge_54618);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54618], null)));
} else {
}
} else {
var data_54625 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54615,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54614,new cljs.core.Keyword(null,"to","to",192099007),reaction_54591,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54615,data_54625);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54625));
} else {
}
}


var G__54626 = seq__54027_54610;
var G__54627 = chunk__54028_54611;
var G__54628 = count__54029_54612;
var G__54629 = (i__54030_54613 + (1));
seq__54027_54610 = G__54626;
chunk__54028_54611 = G__54627;
count__54029_54612 = G__54628;
i__54030_54613 = G__54629;
continue;
} else {
var temp__5735__auto___54634__$1 = cljs.core.seq(seq__54027_54610);
if(temp__5735__auto___54634__$1){
var seq__54027_54635__$1 = temp__5735__auto___54634__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54027_54635__$1)){
var c__4556__auto___54636 = cljs.core.chunk_first(seq__54027_54635__$1);
var G__54637 = cljs.core.chunk_rest(seq__54027_54635__$1);
var G__54638 = c__4556__auto___54636;
var G__54639 = cljs.core.count(c__4556__auto___54636);
var G__54640 = (0);
seq__54027_54610 = G__54637;
chunk__54028_54611 = G__54638;
count__54029_54612 = G__54639;
i__54030_54613 = G__54640;
continue;
} else {
var input_reaction_54641 = cljs.core.first(seq__54027_54635__$1);
var reaction_path_54642 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54641),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54591)].join('');
var temp__5733__auto___54654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54642);
if(cljs.core.truth_(temp__5733__auto___54654)){
var old_edge_54655 = temp__5733__auto___54654;
var updated_edge_54656 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54655,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54642,updated_edge_54656);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54656], null)));
} else {
}
} else {
var data_54662 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54642,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54641,new cljs.core.Keyword(null,"to","to",192099007),reaction_54591,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54642,data_54662);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54662));
} else {
}
}


var G__54671 = cljs.core.next(seq__54027_54635__$1);
var G__54672 = null;
var G__54673 = (0);
var G__54674 = (0);
seq__54027_54610 = G__54671;
chunk__54028_54611 = G__54672;
count__54029_54612 = G__54673;
i__54030_54613 = G__54674;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__54675 = cljs.core.next(seq__53971_54579__$1);
var G__54676 = null;
var G__54677 = (0);
var G__54678 = (0);
seq__53971_54492 = G__54675;
chunk__53972_54493 = G__54676;
count__53973_54494 = G__54677;
i__53974_54495 = G__54678;
continue;
}
} else {
}
}
break;
}


var G__54679 = seq__53812_54478;
var G__54680 = chunk__53813_54479;
var G__54681 = count__53814_54480;
var G__54682 = (i__53815_54481 + (1));
seq__53812_54478 = G__54679;
chunk__53813_54479 = G__54680;
count__53814_54480 = G__54681;
i__53815_54481 = G__54682;
continue;
} else {
var temp__5735__auto___54687 = cljs.core.seq(seq__53812_54478);
if(temp__5735__auto___54687){
var seq__53812_54688__$1 = temp__5735__auto___54687;
if(cljs.core.chunked_seq_QMARK_(seq__53812_54688__$1)){
var c__4556__auto___54689 = cljs.core.chunk_first(seq__53812_54688__$1);
var G__54690 = cljs.core.chunk_rest(seq__53812_54688__$1);
var G__54691 = c__4556__auto___54689;
var G__54692 = cljs.core.count(c__4556__auto___54689);
var G__54693 = (0);
seq__53812_54478 = G__54690;
chunk__53813_54479 = G__54691;
count__53814_54480 = G__54692;
i__53815_54481 = G__54693;
continue;
} else {
var map__54049_54696 = cljs.core.first(seq__53812_54688__$1);
var map__54049_54697__$1 = (((((!((map__54049_54696 == null))))?(((((map__54049_54696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54049_54696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54049_54696):map__54049_54696);
var subs_54698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049_54697__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__54053_54700 = cljs.core.seq(subs_54698);
var chunk__54054_54701 = null;
var count__54055_54702 = (0);
var i__54056_54703 = (0);
while(true){
if((i__54056_54703 < count__54055_54702)){
var map__54109_54706 = chunk__54054_54701.cljs$core$IIndexed$_nth$arity$2(null,i__54056_54703);
var map__54109_54707__$1 = (((((!((map__54109_54706 == null))))?(((((map__54109_54706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54109_54706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54109_54706):map__54109_54706);
var op_type_54708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109_54707__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_54709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109_54707__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_54710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109_54707__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_54711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109_54707__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___54719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_54709);
if(cljs.core.truth_(temp__5733__auto___54719)){
var old_reaction_54723 = temp__5733__auto___54719;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_54708,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_54723))){
var updated_node_54724 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_54723,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54708,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54708)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54709,updated_node_54724);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_54724], null)));
} else {
}
} else {
}
} else {
var data_54731 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_54709,new cljs.core.Keyword(null,"label","label",1718410804),operation_54711,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54708)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54708], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54709,data_54731);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_54731);
}

if(cljs.core.truth_(input_signals_54710)){
var seq__54112_54733 = cljs.core.seq(input_signals_54710);
var chunk__54113_54734 = null;
var count__54114_54735 = (0);
var i__54115_54736 = (0);
while(true){
if((i__54115_54736 < count__54114_54735)){
var input_reaction_54737 = chunk__54113_54734.cljs$core$IIndexed$_nth$arity$2(null,i__54115_54736);
var reaction_path_54738 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54737),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54709)].join('');
var temp__5733__auto___54739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54738);
if(cljs.core.truth_(temp__5733__auto___54739)){
var old_edge_54740 = temp__5733__auto___54739;
var updated_edge_54741 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54740,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54738,updated_edge_54741);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54741], null)));
} else {
}
} else {
var data_54743 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54738,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54737,new cljs.core.Keyword(null,"to","to",192099007),reaction_54709,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54738,data_54743);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54743));
} else {
}
}


var G__54755 = seq__54112_54733;
var G__54756 = chunk__54113_54734;
var G__54757 = count__54114_54735;
var G__54758 = (i__54115_54736 + (1));
seq__54112_54733 = G__54755;
chunk__54113_54734 = G__54756;
count__54114_54735 = G__54757;
i__54115_54736 = G__54758;
continue;
} else {
var temp__5735__auto___54761__$1 = cljs.core.seq(seq__54112_54733);
if(temp__5735__auto___54761__$1){
var seq__54112_54762__$1 = temp__5735__auto___54761__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54112_54762__$1)){
var c__4556__auto___54763 = cljs.core.chunk_first(seq__54112_54762__$1);
var G__54764 = cljs.core.chunk_rest(seq__54112_54762__$1);
var G__54765 = c__4556__auto___54763;
var G__54766 = cljs.core.count(c__4556__auto___54763);
var G__54767 = (0);
seq__54112_54733 = G__54764;
chunk__54113_54734 = G__54765;
count__54114_54735 = G__54766;
i__54115_54736 = G__54767;
continue;
} else {
var input_reaction_54769 = cljs.core.first(seq__54112_54762__$1);
var reaction_path_54771 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54769),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54709)].join('');
var temp__5733__auto___54772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54771);
if(cljs.core.truth_(temp__5733__auto___54772)){
var old_edge_54775 = temp__5733__auto___54772;
var updated_edge_54777 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54775,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54771,updated_edge_54777);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54777], null)));
} else {
}
} else {
var data_54780 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54771,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54769,new cljs.core.Keyword(null,"to","to",192099007),reaction_54709,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54771,data_54780);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54780));
} else {
}
}


var G__54782 = cljs.core.next(seq__54112_54762__$1);
var G__54783 = null;
var G__54784 = (0);
var G__54785 = (0);
seq__54112_54733 = G__54782;
chunk__54113_54734 = G__54783;
count__54114_54735 = G__54784;
i__54115_54736 = G__54785;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__54786 = seq__54053_54700;
var G__54787 = chunk__54054_54701;
var G__54788 = count__54055_54702;
var G__54789 = (i__54056_54703 + (1));
seq__54053_54700 = G__54786;
chunk__54054_54701 = G__54787;
count__54055_54702 = G__54788;
i__54056_54703 = G__54789;
continue;
} else {
var temp__5735__auto___54790__$1 = cljs.core.seq(seq__54053_54700);
if(temp__5735__auto___54790__$1){
var seq__54053_54792__$1 = temp__5735__auto___54790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54053_54792__$1)){
var c__4556__auto___54793 = cljs.core.chunk_first(seq__54053_54792__$1);
var G__54794 = cljs.core.chunk_rest(seq__54053_54792__$1);
var G__54795 = c__4556__auto___54793;
var G__54796 = cljs.core.count(c__4556__auto___54793);
var G__54797 = (0);
seq__54053_54700 = G__54794;
chunk__54054_54701 = G__54795;
count__54055_54702 = G__54796;
i__54056_54703 = G__54797;
continue;
} else {
var map__54123_54798 = cljs.core.first(seq__54053_54792__$1);
var map__54123_54799__$1 = (((((!((map__54123_54798 == null))))?(((((map__54123_54798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54123_54798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54123_54798):map__54123_54798);
var op_type_54800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123_54799__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_54801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123_54799__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_54802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123_54799__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_54803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123_54799__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___54805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_54801);
if(cljs.core.truth_(temp__5733__auto___54805)){
var old_reaction_54806 = temp__5733__auto___54805;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_54800,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_54806))){
var updated_node_54808 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_54806,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54800,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54800)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54801,updated_node_54808);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_54808], null)));
} else {
}
} else {
}
} else {
var data_54812 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_54801,new cljs.core.Keyword(null,"label","label",1718410804),operation_54803,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54800)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54800], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_54801,data_54812);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_54812);
}

if(cljs.core.truth_(input_signals_54802)){
var seq__54125_54814 = cljs.core.seq(input_signals_54802);
var chunk__54126_54815 = null;
var count__54127_54816 = (0);
var i__54128_54817 = (0);
while(true){
if((i__54128_54817 < count__54127_54816)){
var input_reaction_54818 = chunk__54126_54815.cljs$core$IIndexed$_nth$arity$2(null,i__54128_54817);
var reaction_path_54819 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54818),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54801)].join('');
var temp__5733__auto___54821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54819);
if(cljs.core.truth_(temp__5733__auto___54821)){
var old_edge_54822 = temp__5733__auto___54821;
var updated_edge_54823 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54822,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54819,updated_edge_54823);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54823], null)));
} else {
}
} else {
var data_54826 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54819,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54818,new cljs.core.Keyword(null,"to","to",192099007),reaction_54801,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54819,data_54826);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54826));
} else {
}
}


var G__54828 = seq__54125_54814;
var G__54829 = chunk__54126_54815;
var G__54830 = count__54127_54816;
var G__54831 = (i__54128_54817 + (1));
seq__54125_54814 = G__54828;
chunk__54126_54815 = G__54829;
count__54127_54816 = G__54830;
i__54128_54817 = G__54831;
continue;
} else {
var temp__5735__auto___54833__$2 = cljs.core.seq(seq__54125_54814);
if(temp__5735__auto___54833__$2){
var seq__54125_54834__$1 = temp__5735__auto___54833__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54125_54834__$1)){
var c__4556__auto___54836 = cljs.core.chunk_first(seq__54125_54834__$1);
var G__54837 = cljs.core.chunk_rest(seq__54125_54834__$1);
var G__54838 = c__4556__auto___54836;
var G__54839 = cljs.core.count(c__4556__auto___54836);
var G__54840 = (0);
seq__54125_54814 = G__54837;
chunk__54126_54815 = G__54838;
count__54127_54816 = G__54839;
i__54128_54817 = G__54840;
continue;
} else {
var input_reaction_54841 = cljs.core.first(seq__54125_54834__$1);
var reaction_path_54842 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54841),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54801)].join('');
var temp__5733__auto___54843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_54842);
if(cljs.core.truth_(temp__5733__auto___54843)){
var old_edge_54844 = temp__5733__auto___54843;
var updated_edge_54845 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_54844,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54842,updated_edge_54845);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_54845], null)));
} else {
}
} else {
var data_54850 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_54842,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54841,new cljs.core.Keyword(null,"to","to",192099007),reaction_54801,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_54842,data_54850);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_54850));
} else {
}
}


var G__54851 = cljs.core.next(seq__54125_54834__$1);
var G__54852 = null;
var G__54853 = (0);
var G__54854 = (0);
seq__54125_54814 = G__54851;
chunk__54126_54815 = G__54852;
count__54127_54816 = G__54853;
i__54128_54817 = G__54854;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__54855 = cljs.core.next(seq__54053_54792__$1);
var G__54856 = null;
var G__54857 = (0);
var G__54858 = (0);
seq__54053_54700 = G__54855;
chunk__54054_54701 = G__54856;
count__54055_54702 = G__54857;
i__54056_54703 = G__54858;
continue;
}
} else {
}
}
break;
}


var G__54859 = cljs.core.next(seq__53812_54688__$1);
var G__54860 = null;
var G__54861 = (0);
var G__54862 = (0);
seq__53812_54478 = G__54859;
chunk__53813_54479 = G__54860;
count__53814_54480 = G__54861;
i__53815_54481 = G__54862;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__54133 = cljs.core.seq(cljs.core.deref(new_nodes));
var chunk__54134 = null;
var count__54135 = (0);
var i__54136 = (0);
while(true){
if((i__54136 < count__54135)){
var data = chunk__54134.cljs$core$IIndexed$_nth$arity$2(null,i__54136);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__54863 = seq__54133;
var G__54864 = chunk__54134;
var G__54865 = count__54135;
var G__54866 = (i__54136 + (1));
seq__54133 = G__54863;
chunk__54134 = G__54864;
count__54135 = G__54865;
i__54136 = G__54866;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54133);
if(temp__5735__auto__){
var seq__54133__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54133__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54133__$1);
var G__54869 = cljs.core.chunk_rest(seq__54133__$1);
var G__54870 = c__4556__auto__;
var G__54871 = cljs.core.count(c__4556__auto__);
var G__54872 = (0);
seq__54133 = G__54869;
chunk__54134 = G__54870;
count__54135 = G__54871;
i__54136 = G__54872;
continue;
} else {
var data = cljs.core.first(seq__54133__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__54874 = cljs.core.next(seq__54133__$1);
var G__54875 = null;
var G__54876 = (0);
var G__54877 = (0);
seq__54133 = G__54874;
chunk__54134 = G__54875;
count__54135 = G__54876;
i__54136 = G__54877;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__54138){
var map__54139 = p__54138;
var map__54139__$1 = (((((!((map__54139 == null))))?(((((map__54139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54139):map__54139);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54139__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54139__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var temp__5735__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__54152_54884 = cljs.core.seq(subs);
var chunk__54153_54885 = null;
var count__54154_54886 = (0);
var i__54155_54887 = (0);
while(true){
if((i__54155_54887 < count__54154_54886)){
var map__54281_54888 = chunk__54153_54885.cljs$core$IIndexed$_nth$arity$2(null,i__54155_54887);
var map__54281_54889__$1 = (((((!((map__54281_54888 == null))))?(((((map__54281_54888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54281_54888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54281_54888):map__54281_54888);
var op_type_54890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281_54889__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_54891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281_54889__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_54892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281_54889__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_54893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281_54889__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___54895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_54891);
if(cljs.core.truth_(temp__5733__auto___54895)){
var old_reaction_54896 = temp__5733__auto___54895;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_54890,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_54896))){
var updated_node_54897 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_54896,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54890,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54890)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_54891,updated_node_54897);
} else {
}
} else {
var data_54902 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_54891,new cljs.core.Keyword(null,"label","label",1718410804),operation_54893,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54890)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54890], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_54891,data_54902);
}

if(cljs.core.truth_(input_signals_54892)){
var seq__54298_54903 = cljs.core.seq(input_signals_54892);
var chunk__54299_54904 = null;
var count__54300_54905 = (0);
var i__54301_54906 = (0);
while(true){
if((i__54301_54906 < count__54300_54905)){
var input_reaction_54908 = chunk__54299_54904.cljs$core$IIndexed$_nth$arity$2(null,i__54301_54906);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54908),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54891)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54908),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54891)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54908,new cljs.core.Keyword(null,"to","to",192099007),reaction_54891], null));
}


var G__54913 = seq__54298_54903;
var G__54914 = chunk__54299_54904;
var G__54915 = count__54300_54905;
var G__54916 = (i__54301_54906 + (1));
seq__54298_54903 = G__54913;
chunk__54299_54904 = G__54914;
count__54300_54905 = G__54915;
i__54301_54906 = G__54916;
continue;
} else {
var temp__5735__auto___54917__$1 = cljs.core.seq(seq__54298_54903);
if(temp__5735__auto___54917__$1){
var seq__54298_54919__$1 = temp__5735__auto___54917__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54298_54919__$1)){
var c__4556__auto___54921 = cljs.core.chunk_first(seq__54298_54919__$1);
var G__54924 = cljs.core.chunk_rest(seq__54298_54919__$1);
var G__54925 = c__4556__auto___54921;
var G__54926 = cljs.core.count(c__4556__auto___54921);
var G__54927 = (0);
seq__54298_54903 = G__54924;
chunk__54299_54904 = G__54925;
count__54300_54905 = G__54926;
i__54301_54906 = G__54927;
continue;
} else {
var input_reaction_54928 = cljs.core.first(seq__54298_54919__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54928),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54891)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54928),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54891)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54928,new cljs.core.Keyword(null,"to","to",192099007),reaction_54891], null));
}


var G__54930 = cljs.core.next(seq__54298_54919__$1);
var G__54931 = null;
var G__54932 = (0);
var G__54933 = (0);
seq__54298_54903 = G__54930;
chunk__54299_54904 = G__54931;
count__54300_54905 = G__54932;
i__54301_54906 = G__54933;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__54934 = seq__54152_54884;
var G__54935 = chunk__54153_54885;
var G__54936 = count__54154_54886;
var G__54937 = (i__54155_54887 + (1));
seq__54152_54884 = G__54934;
chunk__54153_54885 = G__54935;
count__54154_54886 = G__54936;
i__54155_54887 = G__54937;
continue;
} else {
var temp__5735__auto___54939__$1 = cljs.core.seq(seq__54152_54884);
if(temp__5735__auto___54939__$1){
var seq__54152_54940__$1 = temp__5735__auto___54939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54152_54940__$1)){
var c__4556__auto___54941 = cljs.core.chunk_first(seq__54152_54940__$1);
var G__54942 = cljs.core.chunk_rest(seq__54152_54940__$1);
var G__54943 = c__4556__auto___54941;
var G__54944 = cljs.core.count(c__4556__auto___54941);
var G__54945 = (0);
seq__54152_54884 = G__54942;
chunk__54153_54885 = G__54943;
count__54154_54886 = G__54944;
i__54155_54887 = G__54945;
continue;
} else {
var map__54332_54946 = cljs.core.first(seq__54152_54940__$1);
var map__54332_54947__$1 = (((((!((map__54332_54946 == null))))?(((((map__54332_54946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54332_54946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54332_54946):map__54332_54946);
var op_type_54948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54332_54947__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_54949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54332_54947__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_54950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54332_54947__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_54951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54332_54947__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___54952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_54949);
if(cljs.core.truth_(temp__5733__auto___54952)){
var old_reaction_54956 = temp__5733__auto___54952;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_54948,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_54956))){
var updated_node_54957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_54956,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54948,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54948)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_54949,updated_node_54957);
} else {
}
} else {
var data_54958 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_54949,new cljs.core.Keyword(null,"label","label",1718410804),operation_54951,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_54948)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_54948], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_54949,data_54958);
}

if(cljs.core.truth_(input_signals_54950)){
var seq__54366_54959 = cljs.core.seq(input_signals_54950);
var chunk__54368_54960 = null;
var count__54369_54961 = (0);
var i__54370_54962 = (0);
while(true){
if((i__54370_54962 < count__54369_54961)){
var input_reaction_54963 = chunk__54368_54960.cljs$core$IIndexed$_nth$arity$2(null,i__54370_54962);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54963),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54949)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54963),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54949)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54963,new cljs.core.Keyword(null,"to","to",192099007),reaction_54949], null));
}


var G__54965 = seq__54366_54959;
var G__54966 = chunk__54368_54960;
var G__54967 = count__54369_54961;
var G__54968 = (i__54370_54962 + (1));
seq__54366_54959 = G__54965;
chunk__54368_54960 = G__54966;
count__54369_54961 = G__54967;
i__54370_54962 = G__54968;
continue;
} else {
var temp__5735__auto___54969__$2 = cljs.core.seq(seq__54366_54959);
if(temp__5735__auto___54969__$2){
var seq__54366_54970__$1 = temp__5735__auto___54969__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54366_54970__$1)){
var c__4556__auto___54972 = cljs.core.chunk_first(seq__54366_54970__$1);
var G__54973 = cljs.core.chunk_rest(seq__54366_54970__$1);
var G__54974 = c__4556__auto___54972;
var G__54975 = cljs.core.count(c__4556__auto___54972);
var G__54976 = (0);
seq__54366_54959 = G__54973;
chunk__54368_54960 = G__54974;
count__54369_54961 = G__54975;
i__54370_54962 = G__54976;
continue;
} else {
var input_reaction_54977 = cljs.core.first(seq__54366_54970__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54977),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54949)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_54977),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_54949)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_54977,new cljs.core.Keyword(null,"to","to",192099007),reaction_54949], null));
}


var G__54980 = cljs.core.next(seq__54366_54970__$1);
var G__54981 = null;
var G__54982 = (0);
var G__54983 = (0);
seq__54366_54959 = G__54980;
chunk__54368_54960 = G__54981;
count__54369_54961 = G__54982;
i__54370_54962 = G__54983;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__54984 = cljs.core.next(seq__54152_54940__$1);
var G__54985 = null;
var G__54986 = (0);
var G__54987 = (0);
seq__54152_54884 = G__54984;
chunk__54153_54885 = G__54985;
count__54154_54886 = G__54986;
i__54155_54887 = G__54987;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
