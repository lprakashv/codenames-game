goog.provide('reframe_codenames.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-codenames.events","initialize-db","reframe-codenames.events/initialize-db",1633309917),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (d,e){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null))));

var result__42684__auto__ = reframe_codenames.db.default_db();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42684__auto__;
}catch (e44456){var e__$1 = e44456;
throw e__$1;
}}):(function (d,e){
return reframe_codenames.db.default_db();
})));
reframe_codenames.events.opp_color = (function reframe_codenames$events$opp_color(color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"red","red",-969428204))){
return new cljs.core.Keyword(null,"blue","blue",-622100620);
} else {
return new cljs.core.Keyword(null,"red","red",-969428204);
}
});
reframe_codenames.events.capitalize = (function reframe_codenames$events$capitalize(s){
return clojure.string.capitalize(cljs.core.name(s));
});
reframe_codenames.events.get_messsage_for_type = (function reframe_codenames$events$get_messsage_for_type(var_args){
var G__44458 = arguments.length;
switch (G__44458) {
case 1:
return reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$1 = (function (tpe){
var G__44459 = tpe;
var G__44459__$1 = (((G__44459 instanceof cljs.core.Keyword))?G__44459.fqn:null);
switch (G__44459__$1) {
case "open-tile-turn-over":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"text","text",-1790561697),"Turn over! Spymaster, toggle turn and set hint."], null);

break;
case "spy-master-exit-error":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Add hint with a number"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44459__$1)].join('')));

}
}));

(reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$2 = (function (tpe,arg){
var G__44460 = tpe;
var G__44460__$1 = (((G__44460 instanceof cljs.core.Keyword))?G__44460.fqn:null);
switch (G__44460__$1) {
case "turn-message":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,new cljs.core.Keyword(null,"red","red",-969428204)))?new cljs.core.Keyword(null,"danger","danger",-624338030):new cljs.core.Keyword(null,"primary","primary",817773892)),new cljs.core.Keyword(null,"text","text",-1790561697),[reframe_codenames.events.capitalize(arg),"'s turn"].join('')], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44460__$1)].join('')));

}
}));

(reframe_codenames.events.get_messsage_for_type.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-codenames.events","toggle-turn","reframe-codenames.events/toggle-turn",-973383839),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (d,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),false),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),""),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(0))))));

var result__42684__auto__ = (function (){var new_turn = (function (){var result__42684__auto__ = reframe_codenames.events.opp_color((function (){var result__42684__auto__ = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var result__42684__auto__ = (function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"turn","turn",75759344),(function (){var result__42684__auto__ = new_turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var result__42684__auto__ = reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),(function (){var result__42684__auto__ = new_turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),false);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"hint","hint",439639918),"");
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),""),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"limit","limit",-1355822363),(0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),false),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),""),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(0))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42684__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"new-turn","new-turn",-114059119,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),false),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),""),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(0)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42684__auto__;
}catch (e44461){var e = e44461;
throw e;
}}):(function (d,_){
var new_turn = reframe_codenames.events.opp_color(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(d));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"turn","turn",75759344),new_turn),new cljs.core.Keyword(null,"message","message",-406056002),reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new_turn)),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),false),new cljs.core.Keyword(null,"hint","hint",439639918),""),new cljs.core.Keyword(null,"limit","limit",-1355822363),(0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-codenames.events","toggle-spy-master","reframe-codenames.events/toggle-spy-master",-912172735),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (d,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null),cljs.core.list(new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"hint","hint",2080171445,null),cljs.core.list(new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"limit","limit",284709164,null),cljs.core.list(new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"turn","turn",1716290871,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null))))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"turn","turn",1716290871,null)))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048))))))));

var result__42684__auto__ = (function (){var spy_master_QMARK_ = (function (){var result__42684__auto__ = new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var hint = (function (){var result__42684__auto__ = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var limit = (function (){var result__42684__auto__ = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var turn = (function (){var result__42684__auto__ = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var result__42684__auto__ = (((function (){var result__42684__auto__ = (function (){var or__4126__auto__ = (function (){var result__42684__auto__ = cljs.core.not((function (){var result__42684__auto__ = spy_master_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})();
if(or__4126__auto__){
return or__4126__auto__;
} else {
var result__42684__auto__ = (((function (){var result__42684__auto__ = ((function (){var result__42684__auto__ = limit;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})() > (0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})())?(function (){var result__42684__auto__ = (!((function (){var result__42684__auto__ = clojure.string.blank_QMARK_((function (){var result__42684__auto__ = hint;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"hint","hint",2080171445,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})()));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})():false);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})())?(function (){var result__42684__auto__ = (function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),6,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),(function (){var result__42684__auto__ = cljs.core.not((function (){var result__42684__auto__ = spy_master_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(32),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(31),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var result__42684__auto__ = reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),(function (){var result__42684__auto__ = turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(38),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn","turn",1716290871,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(36),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(33),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"turn","turn",1716290871,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42691__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"turn","turn",1716290871,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})():(function (){var result__42684__auto__ = (function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),7,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(41),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var result__42684__auto__ = reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(45),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(42),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42691__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(40),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})()
);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null))))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"turn","turn",1716290871,null)))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42684__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null),cljs.core.list(new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"hint","hint",2080171445,null),cljs.core.list(new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"limit","limit",284709164,null),cljs.core.list(new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"turn","turn",1716290871,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null))))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"spy-master?","spy-master?",-1230377010,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),new cljs.core.Symbol(null,"turn","turn",1716290871,null)))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42684__auto__;
}catch (e44462){var e = e44462;
throw e;
}}):(function (d,_){
var spy_master_QMARK_ = new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759).cljs$core$IFn$_invoke$arity$1(d);
var hint = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(d);
var limit = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(d);
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(d);
if(((cljs.core.not(spy_master_QMARK_)) || ((((limit > (0))) && ((!(clojure.string.blank_QMARK_(hint)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"spy-master?","spy-master?",1424058759),cljs.core.not(spy_master_QMARK_)),new cljs.core.Keyword(null,"message","message",-406056002),reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"turn-message","turn-message",1041129273),turn));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"message","message",-406056002),reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spy-master-exit-error","spy-master-exit-error",-2124370048)));

}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-codenames.events","open-tile","reframe-codenames.events/open-tile",1079340445),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (d,p__44463){
var vec__44464 = p__44463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44464,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"i","i",253690212,null),(5)),new cljs.core.Symbol(null,"j","j",242556762,null)),new cljs.core.Symbol(null,"turn","turn",1716290871,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"color","color",1011675173)], null)),new cljs.core.Symbol(null,"limit","limit",284709164,null),cljs.core.list(new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(1)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594))),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),""),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(0)),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)))))));

var result__42684__auto__ = (function (){var index = (function (){var result__42684__auto__ = ((function (){var result__42684__auto__ = ((function (){var result__42684__auto__ = i;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})() * (5));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"i","i",253690212,null),(5)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})() + (function (){var result__42684__auto__ = j;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"i","i",253690212,null),(5)),new cljs.core.Symbol(null,"j","j",242556762,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var turn = (function (){var result__42684__auto__ = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var tile_color = (function (){var result__42684__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})(),(function (){var result__42684__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(function (){var result__42684__auto__ = index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"color","color",1011675173)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"color","color",1011675173)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var limit = (function (){var result__42684__auto__ = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var turn_over_QMARK_ = (function (){var result__42684__auto__ = (function (){var or__4126__auto__ = (function (){var result__42684__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var result__42684__auto__ = reframe_codenames.events.opp_color((function (){var result__42684__auto__ = turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn","turn",1716290871,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(25),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})(),(function (){var result__42684__auto__ = tile_color;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})();
if(or__4126__auto__){
return or__4126__auto__;
} else {
var result__42684__auto__ = ((function (){var result__42684__auto__ = limit;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})() <= (1));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
}
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(1))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})();
var result__42684__auto__ = (function (){var result__42691__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__42691__auto__ = cljs.core.assoc_in((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(32),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})(),(function (){var result__42684__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(function (){var result__42684__auto__ = index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(37),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"open?","open?",1238443125)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(35),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})(),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(33),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"limit","limit",-1355822363),(function (){var result__42684__auto__ = (((function (){var result__42684__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var result__42684__auto__ = tile_color;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(45),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})(),(function (){var result__42684__auto__ = turn;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(46),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn","turn",1716290871,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(44),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})())?(function (){var result__42684__auto__ = cljs.core.dec;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(47),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})():(function (){var result__42684__auto__ = cljs.core.identity;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(48),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(43),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(40),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),(function (){var result__42684__auto__ = turn_over_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(52),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(49),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var result__42684__auto__ = (((function (){var result__42684__auto__ = turn_over_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(57),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})())?(function (){var result__42684__auto__ = (function (___$1){
var result__42684__auto__ = reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(60),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__42684__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(58),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})():(function (){var result__42684__auto__ = cljs.core.identity;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(62),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(56),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594))),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(53),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594))),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"hint","hint",439639918),(function (){var result__42684__auto__ = (((function (){var result__42684__auto__ = turn_over_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(67),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})())?(function (){var result__42684__auto__ = (function (___$1){
return "";
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(68),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),""),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})():(function (){var result__42684__auto__ = cljs.core.identity;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(71),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(66),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),""),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(63),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),""),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})(),new cljs.core.Keyword(null,"limit","limit",-1355822363),(function (){var result__42684__auto__ = (((function (){var result__42684__auto__ = turn_over_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(76),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})())?(function (){var result__42684__auto__ = (function (___$1){
return (0);
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(77),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})():(function (){var result__42684__auto__ = cljs.core.identity;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(80),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(75),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(0)),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(72),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(0)),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42691__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(31),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594))),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),""),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(0)),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42684__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"i","i",253690212,null),(5)),new cljs.core.Symbol(null,"j","j",242556762,null)),new cljs.core.Symbol(null,"turn","turn",1716290871,null),cljs.core.list(new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"color","color",1011675173)], null)),new cljs.core.Symbol(null,"limit","limit",284709164,null),cljs.core.list(new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Symbol(null,"d","d",-682293345,null)),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"opp-color","opp-color",1279886633,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null)),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),(1)))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"tile-color","tile-color",33415631,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null)),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-messsage-for-type","get-messsage-for-type",514916330,null),new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594))),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),""),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"turn-over?","turn-over?",1998623908,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(0)),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42684__auto__;
}catch (e44467){var e = e44467;
throw e;
}}):(function (d,p__44468){
var vec__44469 = p__44468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469,(2),null);
var index = ((i * (5)) + j);
var turn = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(d);
var tile_color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(d,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),index,new cljs.core.Keyword(null,"color","color",1011675173)], null));
var limit = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(d);
var turn_over_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reframe_codenames.events.opp_color(turn),tile_color)) || ((limit <= (1))));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(d,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),index,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true),new cljs.core.Keyword(null,"limit","limit",-1355822363),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tile_color,turn))?cljs.core.dec:cljs.core.identity)),new cljs.core.Keyword(null,"turn-over?","turn-over?",358092381),turn_over_QMARK_),new cljs.core.Keyword(null,"message","message",-406056002),((turn_over_QMARK_)?(function (___$1){
return reframe_codenames.events.get_messsage_for_type.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-tile-turn-over","open-tile-turn-over",-977123594));
}):cljs.core.identity)),new cljs.core.Keyword(null,"hint","hint",439639918),((turn_over_QMARK_)?(function (___$1){
return "";
}):cljs.core.identity)),new cljs.core.Keyword(null,"limit","limit",-1355822363),((turn_over_QMARK_)?(function (___$1){
return (0);
}):cljs.core.identity));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-codenames.events","set-hint","reframe-codenames.events/set-hint",1321457916),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (d,p__44472){
var vec__44473 = p__44472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44473,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44473,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Symbol(null,"text","text",-150030170,null)))));

var result__42684__auto__ = (function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"hint","hint",439639918),(function (){var result__42684__auto__ = text;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Symbol(null,"text","text",-150030170,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42691__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Symbol(null,"text","text",-150030170,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42684__auto__;
}catch (e44476){var e = e44476;
throw e;
}}):(function (d,p__44477){
var vec__44478 = p__44477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44478,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44478,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"hint","hint",439639918),text);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-codenames.events","set-limit","reframe-codenames.events/set-limit",549301423),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (d,p__44481){
var vec__44482 = p__44481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44482,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44482,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"limit","limit",284709164,null))))));

var result__42684__auto__ = (function (){var result__42691__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__42684__auto__ = d;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42684__auto__;
})(),new cljs.core.Keyword(null,"limit","limit",-1355822363),(function (){var result__42684__auto__ = ((function (){var result__42684__auto__ = limit;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__42684__auto__;
})() | (0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__42684__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__42691__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"limit","limit",284709164,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__42691__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__42684__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__42684__auto__;
}catch (e44485){var e = e44485;
throw e;
}}):(function (d,p__44486){
var vec__44487 = p__44486;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44487,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44487,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"limit","limit",-1355822363),(limit | (0)));
})));

//# sourceMappingURL=reframe_codenames.events.js.map
