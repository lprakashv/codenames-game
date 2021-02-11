goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61719 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_61719(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61720 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_61720(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60763 = coll;
var G__60764 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60763,G__60764) : shadow.dom.lazy_native_coll_seq.call(null,G__60763,G__60764));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__60787 = arguments.length;
switch (G__60787) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__60795 = arguments.length;
switch (G__60795) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__60808 = arguments.length;
switch (G__60808) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__60818 = arguments.length;
switch (G__60818) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__60829 = arguments.length;
switch (G__60829) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__60845 = arguments.length;
switch (G__60845) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e60852){if((e60852 instanceof Object)){
var e = e60852;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60852;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__60864 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60865 = null;
var count__60866 = (0);
var i__60867 = (0);
while(true){
if((i__60867 < count__60866)){
var el = chunk__60865.cljs$core$IIndexed$_nth$arity$2(null,i__60867);
var handler_61758__$1 = ((function (seq__60864,chunk__60865,count__60866,i__60867,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60864,chunk__60865,count__60866,i__60867,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61758__$1);


var G__61760 = seq__60864;
var G__61761 = chunk__60865;
var G__61762 = count__60866;
var G__61763 = (i__60867 + (1));
seq__60864 = G__61760;
chunk__60865 = G__61761;
count__60866 = G__61762;
i__60867 = G__61763;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60864);
if(temp__5735__auto__){
var seq__60864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60864__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60864__$1);
var G__61765 = cljs.core.chunk_rest(seq__60864__$1);
var G__61766 = c__4556__auto__;
var G__61767 = cljs.core.count(c__4556__auto__);
var G__61768 = (0);
seq__60864 = G__61765;
chunk__60865 = G__61766;
count__60866 = G__61767;
i__60867 = G__61768;
continue;
} else {
var el = cljs.core.first(seq__60864__$1);
var handler_61770__$1 = ((function (seq__60864,chunk__60865,count__60866,i__60867,el,seq__60864__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60864,chunk__60865,count__60866,i__60867,el,seq__60864__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61770__$1);


var G__61772 = cljs.core.next(seq__60864__$1);
var G__61773 = null;
var G__61774 = (0);
var G__61775 = (0);
seq__60864 = G__61772;
chunk__60865 = G__61773;
count__60866 = G__61774;
i__60867 = G__61775;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__60908 = arguments.length;
switch (G__60908) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__60920 = cljs.core.seq(events);
var chunk__60921 = null;
var count__60922 = (0);
var i__60923 = (0);
while(true){
if((i__60923 < count__60922)){
var vec__60938 = chunk__60921.cljs$core$IIndexed$_nth$arity$2(null,i__60923);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61782 = seq__60920;
var G__61783 = chunk__60921;
var G__61784 = count__60922;
var G__61785 = (i__60923 + (1));
seq__60920 = G__61782;
chunk__60921 = G__61783;
count__60922 = G__61784;
i__60923 = G__61785;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60920);
if(temp__5735__auto__){
var seq__60920__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60920__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60920__$1);
var G__61787 = cljs.core.chunk_rest(seq__60920__$1);
var G__61788 = c__4556__auto__;
var G__61789 = cljs.core.count(c__4556__auto__);
var G__61790 = (0);
seq__60920 = G__61787;
chunk__60921 = G__61788;
count__60922 = G__61789;
i__60923 = G__61790;
continue;
} else {
var vec__60944 = cljs.core.first(seq__60920__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60944,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61791 = cljs.core.next(seq__60920__$1);
var G__61792 = null;
var G__61793 = (0);
var G__61794 = (0);
seq__60920 = G__61791;
chunk__60921 = G__61792;
count__60922 = G__61793;
i__60923 = G__61794;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__60950 = cljs.core.seq(styles);
var chunk__60951 = null;
var count__60952 = (0);
var i__60953 = (0);
while(true){
if((i__60953 < count__60952)){
var vec__60969 = chunk__60951.cljs$core$IIndexed$_nth$arity$2(null,i__60953);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60969,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61797 = seq__60950;
var G__61798 = chunk__60951;
var G__61799 = count__60952;
var G__61800 = (i__60953 + (1));
seq__60950 = G__61797;
chunk__60951 = G__61798;
count__60952 = G__61799;
i__60953 = G__61800;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60950);
if(temp__5735__auto__){
var seq__60950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60950__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60950__$1);
var G__61802 = cljs.core.chunk_rest(seq__60950__$1);
var G__61803 = c__4556__auto__;
var G__61804 = cljs.core.count(c__4556__auto__);
var G__61805 = (0);
seq__60950 = G__61802;
chunk__60951 = G__61803;
count__60952 = G__61804;
i__60953 = G__61805;
continue;
} else {
var vec__60980 = cljs.core.first(seq__60950__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60980,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61807 = cljs.core.next(seq__60950__$1);
var G__61808 = null;
var G__61809 = (0);
var G__61810 = (0);
seq__60950 = G__61807;
chunk__60951 = G__61808;
count__60952 = G__61809;
i__60953 = G__61810;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__60989_61812 = key;
var G__60989_61813__$1 = (((G__60989_61812 instanceof cljs.core.Keyword))?G__60989_61812.fqn:null);
switch (G__60989_61813__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_61820 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_61820,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_61820,"aria-");
}
})())){
el.setAttribute(ks_61820,value);
} else {
(el[ks_61820] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61016){
var map__61017 = p__61016;
var map__61017__$1 = (((((!((map__61017 == null))))?(((((map__61017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61017):map__61017);
var props = map__61017__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61021 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61021,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61021,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61021,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61029 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61029,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61029;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61041 = arguments.length;
switch (G__61041) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61081){
var vec__61088 = p__61081;
var seq__61090 = cljs.core.seq(vec__61088);
var first__61091 = cljs.core.first(seq__61090);
var seq__61090__$1 = cljs.core.next(seq__61090);
var nn = first__61091;
var first__61091__$1 = cljs.core.first(seq__61090__$1);
var seq__61090__$2 = cljs.core.next(seq__61090__$1);
var np = first__61091__$1;
var nc = seq__61090__$2;
var node = vec__61088;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61096 = nn;
var G__61097 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61096,G__61097) : create_fn.call(null,G__61096,G__61097));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61099 = nn;
var G__61100 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61099,G__61100) : create_fn.call(null,G__61099,G__61100));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61107 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61107,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61107,(1),null);
var seq__61110_61849 = cljs.core.seq(node_children);
var chunk__61111_61850 = null;
var count__61112_61851 = (0);
var i__61113_61852 = (0);
while(true){
if((i__61113_61852 < count__61112_61851)){
var child_struct_61854 = chunk__61111_61850.cljs$core$IIndexed$_nth$arity$2(null,i__61113_61852);
var children_61855 = shadow.dom.dom_node(child_struct_61854);
if(cljs.core.seq_QMARK_(children_61855)){
var seq__61161_61856 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61855));
var chunk__61163_61857 = null;
var count__61164_61858 = (0);
var i__61165_61859 = (0);
while(true){
if((i__61165_61859 < count__61164_61858)){
var child_61860 = chunk__61163_61857.cljs$core$IIndexed$_nth$arity$2(null,i__61165_61859);
if(cljs.core.truth_(child_61860)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61860);


var G__61862 = seq__61161_61856;
var G__61863 = chunk__61163_61857;
var G__61864 = count__61164_61858;
var G__61865 = (i__61165_61859 + (1));
seq__61161_61856 = G__61862;
chunk__61163_61857 = G__61863;
count__61164_61858 = G__61864;
i__61165_61859 = G__61865;
continue;
} else {
var G__61867 = seq__61161_61856;
var G__61868 = chunk__61163_61857;
var G__61869 = count__61164_61858;
var G__61870 = (i__61165_61859 + (1));
seq__61161_61856 = G__61867;
chunk__61163_61857 = G__61868;
count__61164_61858 = G__61869;
i__61165_61859 = G__61870;
continue;
}
} else {
var temp__5735__auto___61872 = cljs.core.seq(seq__61161_61856);
if(temp__5735__auto___61872){
var seq__61161_61873__$1 = temp__5735__auto___61872;
if(cljs.core.chunked_seq_QMARK_(seq__61161_61873__$1)){
var c__4556__auto___61876 = cljs.core.chunk_first(seq__61161_61873__$1);
var G__61877 = cljs.core.chunk_rest(seq__61161_61873__$1);
var G__61878 = c__4556__auto___61876;
var G__61879 = cljs.core.count(c__4556__auto___61876);
var G__61880 = (0);
seq__61161_61856 = G__61877;
chunk__61163_61857 = G__61878;
count__61164_61858 = G__61879;
i__61165_61859 = G__61880;
continue;
} else {
var child_61881 = cljs.core.first(seq__61161_61873__$1);
if(cljs.core.truth_(child_61881)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61881);


var G__61883 = cljs.core.next(seq__61161_61873__$1);
var G__61884 = null;
var G__61885 = (0);
var G__61886 = (0);
seq__61161_61856 = G__61883;
chunk__61163_61857 = G__61884;
count__61164_61858 = G__61885;
i__61165_61859 = G__61886;
continue;
} else {
var G__61887 = cljs.core.next(seq__61161_61873__$1);
var G__61888 = null;
var G__61889 = (0);
var G__61890 = (0);
seq__61161_61856 = G__61887;
chunk__61163_61857 = G__61888;
count__61164_61858 = G__61889;
i__61165_61859 = G__61890;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61855);
}


var G__61891 = seq__61110_61849;
var G__61892 = chunk__61111_61850;
var G__61893 = count__61112_61851;
var G__61894 = (i__61113_61852 + (1));
seq__61110_61849 = G__61891;
chunk__61111_61850 = G__61892;
count__61112_61851 = G__61893;
i__61113_61852 = G__61894;
continue;
} else {
var temp__5735__auto___61896 = cljs.core.seq(seq__61110_61849);
if(temp__5735__auto___61896){
var seq__61110_61898__$1 = temp__5735__auto___61896;
if(cljs.core.chunked_seq_QMARK_(seq__61110_61898__$1)){
var c__4556__auto___61899 = cljs.core.chunk_first(seq__61110_61898__$1);
var G__61900 = cljs.core.chunk_rest(seq__61110_61898__$1);
var G__61901 = c__4556__auto___61899;
var G__61902 = cljs.core.count(c__4556__auto___61899);
var G__61903 = (0);
seq__61110_61849 = G__61900;
chunk__61111_61850 = G__61901;
count__61112_61851 = G__61902;
i__61113_61852 = G__61903;
continue;
} else {
var child_struct_61905 = cljs.core.first(seq__61110_61898__$1);
var children_61906 = shadow.dom.dom_node(child_struct_61905);
if(cljs.core.seq_QMARK_(children_61906)){
var seq__61182_61907 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61906));
var chunk__61184_61908 = null;
var count__61185_61909 = (0);
var i__61186_61910 = (0);
while(true){
if((i__61186_61910 < count__61185_61909)){
var child_61911 = chunk__61184_61908.cljs$core$IIndexed$_nth$arity$2(null,i__61186_61910);
if(cljs.core.truth_(child_61911)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61911);


var G__61912 = seq__61182_61907;
var G__61913 = chunk__61184_61908;
var G__61914 = count__61185_61909;
var G__61915 = (i__61186_61910 + (1));
seq__61182_61907 = G__61912;
chunk__61184_61908 = G__61913;
count__61185_61909 = G__61914;
i__61186_61910 = G__61915;
continue;
} else {
var G__61916 = seq__61182_61907;
var G__61917 = chunk__61184_61908;
var G__61918 = count__61185_61909;
var G__61919 = (i__61186_61910 + (1));
seq__61182_61907 = G__61916;
chunk__61184_61908 = G__61917;
count__61185_61909 = G__61918;
i__61186_61910 = G__61919;
continue;
}
} else {
var temp__5735__auto___61920__$1 = cljs.core.seq(seq__61182_61907);
if(temp__5735__auto___61920__$1){
var seq__61182_61921__$1 = temp__5735__auto___61920__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61182_61921__$1)){
var c__4556__auto___61922 = cljs.core.chunk_first(seq__61182_61921__$1);
var G__61923 = cljs.core.chunk_rest(seq__61182_61921__$1);
var G__61924 = c__4556__auto___61922;
var G__61925 = cljs.core.count(c__4556__auto___61922);
var G__61926 = (0);
seq__61182_61907 = G__61923;
chunk__61184_61908 = G__61924;
count__61185_61909 = G__61925;
i__61186_61910 = G__61926;
continue;
} else {
var child_61928 = cljs.core.first(seq__61182_61921__$1);
if(cljs.core.truth_(child_61928)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61928);


var G__61929 = cljs.core.next(seq__61182_61921__$1);
var G__61930 = null;
var G__61931 = (0);
var G__61932 = (0);
seq__61182_61907 = G__61929;
chunk__61184_61908 = G__61930;
count__61185_61909 = G__61931;
i__61186_61910 = G__61932;
continue;
} else {
var G__61933 = cljs.core.next(seq__61182_61921__$1);
var G__61934 = null;
var G__61935 = (0);
var G__61936 = (0);
seq__61182_61907 = G__61933;
chunk__61184_61908 = G__61934;
count__61185_61909 = G__61935;
i__61186_61910 = G__61936;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61906);
}


var G__61937 = cljs.core.next(seq__61110_61898__$1);
var G__61938 = null;
var G__61939 = (0);
var G__61940 = (0);
seq__61110_61849 = G__61937;
chunk__61111_61850 = G__61938;
count__61112_61851 = G__61939;
i__61113_61852 = G__61940;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61196 = cljs.core.seq(node);
var chunk__61197 = null;
var count__61198 = (0);
var i__61199 = (0);
while(true){
if((i__61199 < count__61198)){
var n = chunk__61197.cljs$core$IIndexed$_nth$arity$2(null,i__61199);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61955 = seq__61196;
var G__61956 = chunk__61197;
var G__61957 = count__61198;
var G__61958 = (i__61199 + (1));
seq__61196 = G__61955;
chunk__61197 = G__61956;
count__61198 = G__61957;
i__61199 = G__61958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61196);
if(temp__5735__auto__){
var seq__61196__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61196__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61196__$1);
var G__61961 = cljs.core.chunk_rest(seq__61196__$1);
var G__61962 = c__4556__auto__;
var G__61963 = cljs.core.count(c__4556__auto__);
var G__61964 = (0);
seq__61196 = G__61961;
chunk__61197 = G__61962;
count__61198 = G__61963;
i__61199 = G__61964;
continue;
} else {
var n = cljs.core.first(seq__61196__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61967 = cljs.core.next(seq__61196__$1);
var G__61968 = null;
var G__61969 = (0);
var G__61970 = (0);
seq__61196 = G__61967;
chunk__61197 = G__61968;
count__61198 = G__61969;
i__61199 = G__61970;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61206 = arguments.length;
switch (G__61206) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61214 = arguments.length;
switch (G__61214) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61236 = arguments.length;
switch (G__61236) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61994 = arguments.length;
var i__4737__auto___61995 = (0);
while(true){
if((i__4737__auto___61995 < len__4736__auto___61994)){
args__4742__auto__.push((arguments[i__4737__auto___61995]));

var G__61996 = (i__4737__auto___61995 + (1));
i__4737__auto___61995 = G__61996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61270_62001 = cljs.core.seq(nodes);
var chunk__61271_62002 = null;
var count__61272_62003 = (0);
var i__61273_62004 = (0);
while(true){
if((i__61273_62004 < count__61272_62003)){
var node_62006 = chunk__61271_62002.cljs$core$IIndexed$_nth$arity$2(null,i__61273_62004);
fragment.appendChild(shadow.dom._to_dom(node_62006));


var G__62007 = seq__61270_62001;
var G__62008 = chunk__61271_62002;
var G__62009 = count__61272_62003;
var G__62010 = (i__61273_62004 + (1));
seq__61270_62001 = G__62007;
chunk__61271_62002 = G__62008;
count__61272_62003 = G__62009;
i__61273_62004 = G__62010;
continue;
} else {
var temp__5735__auto___62011 = cljs.core.seq(seq__61270_62001);
if(temp__5735__auto___62011){
var seq__61270_62012__$1 = temp__5735__auto___62011;
if(cljs.core.chunked_seq_QMARK_(seq__61270_62012__$1)){
var c__4556__auto___62013 = cljs.core.chunk_first(seq__61270_62012__$1);
var G__62014 = cljs.core.chunk_rest(seq__61270_62012__$1);
var G__62015 = c__4556__auto___62013;
var G__62016 = cljs.core.count(c__4556__auto___62013);
var G__62017 = (0);
seq__61270_62001 = G__62014;
chunk__61271_62002 = G__62015;
count__61272_62003 = G__62016;
i__61273_62004 = G__62017;
continue;
} else {
var node_62020 = cljs.core.first(seq__61270_62012__$1);
fragment.appendChild(shadow.dom._to_dom(node_62020));


var G__62021 = cljs.core.next(seq__61270_62012__$1);
var G__62022 = null;
var G__62023 = (0);
var G__62024 = (0);
seq__61270_62001 = G__62021;
chunk__61271_62002 = G__62022;
count__61272_62003 = G__62023;
i__61273_62004 = G__62024;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61262){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61262));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61294_62028 = cljs.core.seq(scripts);
var chunk__61295_62029 = null;
var count__61296_62030 = (0);
var i__61297_62031 = (0);
while(true){
if((i__61297_62031 < count__61296_62030)){
var vec__61316_62032 = chunk__61295_62029.cljs$core$IIndexed$_nth$arity$2(null,i__61297_62031);
var script_tag_62033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61316_62032,(0),null);
var script_body_62034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61316_62032,(1),null);
eval(script_body_62034);


var G__62035 = seq__61294_62028;
var G__62036 = chunk__61295_62029;
var G__62037 = count__61296_62030;
var G__62038 = (i__61297_62031 + (1));
seq__61294_62028 = G__62035;
chunk__61295_62029 = G__62036;
count__61296_62030 = G__62037;
i__61297_62031 = G__62038;
continue;
} else {
var temp__5735__auto___62044 = cljs.core.seq(seq__61294_62028);
if(temp__5735__auto___62044){
var seq__61294_62045__$1 = temp__5735__auto___62044;
if(cljs.core.chunked_seq_QMARK_(seq__61294_62045__$1)){
var c__4556__auto___62047 = cljs.core.chunk_first(seq__61294_62045__$1);
var G__62048 = cljs.core.chunk_rest(seq__61294_62045__$1);
var G__62049 = c__4556__auto___62047;
var G__62050 = cljs.core.count(c__4556__auto___62047);
var G__62051 = (0);
seq__61294_62028 = G__62048;
chunk__61295_62029 = G__62049;
count__61296_62030 = G__62050;
i__61297_62031 = G__62051;
continue;
} else {
var vec__61320_62052 = cljs.core.first(seq__61294_62045__$1);
var script_tag_62054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_62052,(0),null);
var script_body_62055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_62052,(1),null);
eval(script_body_62055);


var G__62058 = cljs.core.next(seq__61294_62045__$1);
var G__62059 = null;
var G__62060 = (0);
var G__62061 = (0);
seq__61294_62028 = G__62058;
chunk__61295_62029 = G__62059;
count__61296_62030 = G__62060;
i__61297_62031 = G__62061;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61329){
var vec__61330 = p__61329;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61344 = arguments.length;
switch (G__61344) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61363 = cljs.core.seq(style_keys);
var chunk__61364 = null;
var count__61365 = (0);
var i__61366 = (0);
while(true){
if((i__61366 < count__61365)){
var it = chunk__61364.cljs$core$IIndexed$_nth$arity$2(null,i__61366);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62076 = seq__61363;
var G__62077 = chunk__61364;
var G__62078 = count__61365;
var G__62079 = (i__61366 + (1));
seq__61363 = G__62076;
chunk__61364 = G__62077;
count__61365 = G__62078;
i__61366 = G__62079;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61363);
if(temp__5735__auto__){
var seq__61363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61363__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61363__$1);
var G__62082 = cljs.core.chunk_rest(seq__61363__$1);
var G__62083 = c__4556__auto__;
var G__62084 = cljs.core.count(c__4556__auto__);
var G__62085 = (0);
seq__61363 = G__62082;
chunk__61364 = G__62083;
count__61365 = G__62084;
i__61366 = G__62085;
continue;
} else {
var it = cljs.core.first(seq__61363__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62086 = cljs.core.next(seq__61363__$1);
var G__62087 = null;
var G__62088 = (0);
var G__62089 = (0);
seq__61363 = G__62086;
chunk__61364 = G__62087;
count__61365 = G__62088;
i__61366 = G__62089;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61380,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61400 = k61380;
var G__61400__$1 = (((G__61400 instanceof cljs.core.Keyword))?G__61400.fqn:null);
switch (G__61400__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61380,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61404){
var vec__61408 = p__61404;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61408,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61408,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61379){
var self__ = this;
var G__61379__$1 = this;
return (new cljs.core.RecordIter((0),G__61379__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61382,other61383){
var self__ = this;
var this61382__$1 = this;
return (((!((other61383 == null)))) && ((this61382__$1.constructor === other61383.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61382__$1.x,other61383.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61382__$1.y,other61383.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61382__$1.__extmap,other61383.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61379){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61427 = cljs.core.keyword_identical_QMARK_;
var expr__61428 = k__4388__auto__;
if(cljs.core.truth_((pred__61427.cljs$core$IFn$_invoke$arity$2 ? pred__61427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61428) : pred__61427.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61428)))){
return (new shadow.dom.Coordinate(G__61379,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61427.cljs$core$IFn$_invoke$arity$2 ? pred__61427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61428) : pred__61427.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61428)))){
return (new shadow.dom.Coordinate(self__.x,G__61379,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61379),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61379){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61379,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61389){
var extmap__4419__auto__ = (function (){var G__61446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61389,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61389)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61446);
} else {
return G__61446;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61389),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61389),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61458,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61468 = k61458;
var G__61468__$1 = (((G__61468 instanceof cljs.core.Keyword))?G__61468.fqn:null);
switch (G__61468__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61458,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61475){
var vec__61478 = p__61475;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61478,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61457){
var self__ = this;
var G__61457__$1 = this;
return (new cljs.core.RecordIter((0),G__61457__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61459,other61460){
var self__ = this;
var this61459__$1 = this;
return (((!((other61460 == null)))) && ((this61459__$1.constructor === other61460.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61459__$1.w,other61460.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61459__$1.h,other61460.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61459__$1.__extmap,other61460.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61457){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61498 = cljs.core.keyword_identical_QMARK_;
var expr__61499 = k__4388__auto__;
if(cljs.core.truth_((pred__61498.cljs$core$IFn$_invoke$arity$2 ? pred__61498.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61499) : pred__61498.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61499)))){
return (new shadow.dom.Size(G__61457,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61498.cljs$core$IFn$_invoke$arity$2 ? pred__61498.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61499) : pred__61498.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61499)))){
return (new shadow.dom.Size(self__.w,G__61457,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61457),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61457){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61457,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61462){
var extmap__4419__auto__ = (function (){var G__61510 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61462,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61462)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61510);
} else {
return G__61510;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61462),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61462),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__62144 = (i + (1));
var G__62145 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62144;
ret = G__62145;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61527){
var vec__61528 = p__61527;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61528,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61533 = arguments.length;
switch (G__61533) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__62169 = ps;
var G__62170 = (i + (1));
el__$1 = G__62169;
i = G__62170;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61561 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61561,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61561,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61561,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61568_62185 = cljs.core.seq(props);
var chunk__61569_62186 = null;
var count__61570_62187 = (0);
var i__61571_62188 = (0);
while(true){
if((i__61571_62188 < count__61570_62187)){
var vec__61587_62191 = chunk__61569_62186.cljs$core$IIndexed$_nth$arity$2(null,i__61571_62188);
var k_62192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61587_62191,(0),null);
var v_62193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61587_62191,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_62192);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62192),v_62193);


var G__62195 = seq__61568_62185;
var G__62196 = chunk__61569_62186;
var G__62197 = count__61570_62187;
var G__62198 = (i__61571_62188 + (1));
seq__61568_62185 = G__62195;
chunk__61569_62186 = G__62196;
count__61570_62187 = G__62197;
i__61571_62188 = G__62198;
continue;
} else {
var temp__5735__auto___62199 = cljs.core.seq(seq__61568_62185);
if(temp__5735__auto___62199){
var seq__61568_62201__$1 = temp__5735__auto___62199;
if(cljs.core.chunked_seq_QMARK_(seq__61568_62201__$1)){
var c__4556__auto___62202 = cljs.core.chunk_first(seq__61568_62201__$1);
var G__62203 = cljs.core.chunk_rest(seq__61568_62201__$1);
var G__62204 = c__4556__auto___62202;
var G__62205 = cljs.core.count(c__4556__auto___62202);
var G__62206 = (0);
seq__61568_62185 = G__62203;
chunk__61569_62186 = G__62204;
count__61570_62187 = G__62205;
i__61571_62188 = G__62206;
continue;
} else {
var vec__61595_62207 = cljs.core.first(seq__61568_62201__$1);
var k_62208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61595_62207,(0),null);
var v_62209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61595_62207,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_62208);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62208),v_62209);


var G__62210 = cljs.core.next(seq__61568_62201__$1);
var G__62211 = null;
var G__62212 = (0);
var G__62213 = (0);
seq__61568_62185 = G__62210;
chunk__61569_62186 = G__62211;
count__61570_62187 = G__62212;
i__61571_62188 = G__62213;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61605 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(1),null);
var seq__61611_62218 = cljs.core.seq(node_children);
var chunk__61613_62219 = null;
var count__61615_62220 = (0);
var i__61616_62221 = (0);
while(true){
if((i__61616_62221 < count__61615_62220)){
var child_struct_62222 = chunk__61613_62219.cljs$core$IIndexed$_nth$arity$2(null,i__61616_62221);
if((!((child_struct_62222 == null)))){
if(typeof child_struct_62222 === 'string'){
var text_62223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62223),child_struct_62222].join(''));
} else {
var children_62227 = shadow.dom.svg_node(child_struct_62222);
if(cljs.core.seq_QMARK_(children_62227)){
var seq__61649_62230 = cljs.core.seq(children_62227);
var chunk__61651_62231 = null;
var count__61652_62232 = (0);
var i__61653_62233 = (0);
while(true){
if((i__61653_62233 < count__61652_62232)){
var child_62234 = chunk__61651_62231.cljs$core$IIndexed$_nth$arity$2(null,i__61653_62233);
if(cljs.core.truth_(child_62234)){
node.appendChild(child_62234);


var G__62235 = seq__61649_62230;
var G__62236 = chunk__61651_62231;
var G__62237 = count__61652_62232;
var G__62238 = (i__61653_62233 + (1));
seq__61649_62230 = G__62235;
chunk__61651_62231 = G__62236;
count__61652_62232 = G__62237;
i__61653_62233 = G__62238;
continue;
} else {
var G__62240 = seq__61649_62230;
var G__62241 = chunk__61651_62231;
var G__62242 = count__61652_62232;
var G__62243 = (i__61653_62233 + (1));
seq__61649_62230 = G__62240;
chunk__61651_62231 = G__62241;
count__61652_62232 = G__62242;
i__61653_62233 = G__62243;
continue;
}
} else {
var temp__5735__auto___62244 = cljs.core.seq(seq__61649_62230);
if(temp__5735__auto___62244){
var seq__61649_62245__$1 = temp__5735__auto___62244;
if(cljs.core.chunked_seq_QMARK_(seq__61649_62245__$1)){
var c__4556__auto___62246 = cljs.core.chunk_first(seq__61649_62245__$1);
var G__62247 = cljs.core.chunk_rest(seq__61649_62245__$1);
var G__62248 = c__4556__auto___62246;
var G__62249 = cljs.core.count(c__4556__auto___62246);
var G__62250 = (0);
seq__61649_62230 = G__62247;
chunk__61651_62231 = G__62248;
count__61652_62232 = G__62249;
i__61653_62233 = G__62250;
continue;
} else {
var child_62251 = cljs.core.first(seq__61649_62245__$1);
if(cljs.core.truth_(child_62251)){
node.appendChild(child_62251);


var G__62253 = cljs.core.next(seq__61649_62245__$1);
var G__62254 = null;
var G__62255 = (0);
var G__62256 = (0);
seq__61649_62230 = G__62253;
chunk__61651_62231 = G__62254;
count__61652_62232 = G__62255;
i__61653_62233 = G__62256;
continue;
} else {
var G__62258 = cljs.core.next(seq__61649_62245__$1);
var G__62259 = null;
var G__62260 = (0);
var G__62261 = (0);
seq__61649_62230 = G__62258;
chunk__61651_62231 = G__62259;
count__61652_62232 = G__62260;
i__61653_62233 = G__62261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62227);
}
}


var G__62262 = seq__61611_62218;
var G__62263 = chunk__61613_62219;
var G__62264 = count__61615_62220;
var G__62265 = (i__61616_62221 + (1));
seq__61611_62218 = G__62262;
chunk__61613_62219 = G__62263;
count__61615_62220 = G__62264;
i__61616_62221 = G__62265;
continue;
} else {
var G__62266 = seq__61611_62218;
var G__62267 = chunk__61613_62219;
var G__62268 = count__61615_62220;
var G__62269 = (i__61616_62221 + (1));
seq__61611_62218 = G__62266;
chunk__61613_62219 = G__62267;
count__61615_62220 = G__62268;
i__61616_62221 = G__62269;
continue;
}
} else {
var temp__5735__auto___62271 = cljs.core.seq(seq__61611_62218);
if(temp__5735__auto___62271){
var seq__61611_62272__$1 = temp__5735__auto___62271;
if(cljs.core.chunked_seq_QMARK_(seq__61611_62272__$1)){
var c__4556__auto___62273 = cljs.core.chunk_first(seq__61611_62272__$1);
var G__62274 = cljs.core.chunk_rest(seq__61611_62272__$1);
var G__62275 = c__4556__auto___62273;
var G__62276 = cljs.core.count(c__4556__auto___62273);
var G__62277 = (0);
seq__61611_62218 = G__62274;
chunk__61613_62219 = G__62275;
count__61615_62220 = G__62276;
i__61616_62221 = G__62277;
continue;
} else {
var child_struct_62279 = cljs.core.first(seq__61611_62272__$1);
if((!((child_struct_62279 == null)))){
if(typeof child_struct_62279 === 'string'){
var text_62280 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62280),child_struct_62279].join(''));
} else {
var children_62281 = shadow.dom.svg_node(child_struct_62279);
if(cljs.core.seq_QMARK_(children_62281)){
var seq__61666_62282 = cljs.core.seq(children_62281);
var chunk__61668_62283 = null;
var count__61669_62284 = (0);
var i__61670_62285 = (0);
while(true){
if((i__61670_62285 < count__61669_62284)){
var child_62288 = chunk__61668_62283.cljs$core$IIndexed$_nth$arity$2(null,i__61670_62285);
if(cljs.core.truth_(child_62288)){
node.appendChild(child_62288);


var G__62290 = seq__61666_62282;
var G__62291 = chunk__61668_62283;
var G__62292 = count__61669_62284;
var G__62293 = (i__61670_62285 + (1));
seq__61666_62282 = G__62290;
chunk__61668_62283 = G__62291;
count__61669_62284 = G__62292;
i__61670_62285 = G__62293;
continue;
} else {
var G__62294 = seq__61666_62282;
var G__62295 = chunk__61668_62283;
var G__62296 = count__61669_62284;
var G__62297 = (i__61670_62285 + (1));
seq__61666_62282 = G__62294;
chunk__61668_62283 = G__62295;
count__61669_62284 = G__62296;
i__61670_62285 = G__62297;
continue;
}
} else {
var temp__5735__auto___62298__$1 = cljs.core.seq(seq__61666_62282);
if(temp__5735__auto___62298__$1){
var seq__61666_62299__$1 = temp__5735__auto___62298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61666_62299__$1)){
var c__4556__auto___62300 = cljs.core.chunk_first(seq__61666_62299__$1);
var G__62301 = cljs.core.chunk_rest(seq__61666_62299__$1);
var G__62302 = c__4556__auto___62300;
var G__62303 = cljs.core.count(c__4556__auto___62300);
var G__62304 = (0);
seq__61666_62282 = G__62301;
chunk__61668_62283 = G__62302;
count__61669_62284 = G__62303;
i__61670_62285 = G__62304;
continue;
} else {
var child_62305 = cljs.core.first(seq__61666_62299__$1);
if(cljs.core.truth_(child_62305)){
node.appendChild(child_62305);


var G__62306 = cljs.core.next(seq__61666_62299__$1);
var G__62307 = null;
var G__62308 = (0);
var G__62309 = (0);
seq__61666_62282 = G__62306;
chunk__61668_62283 = G__62307;
count__61669_62284 = G__62308;
i__61670_62285 = G__62309;
continue;
} else {
var G__62311 = cljs.core.next(seq__61666_62299__$1);
var G__62312 = null;
var G__62313 = (0);
var G__62314 = (0);
seq__61666_62282 = G__62311;
chunk__61668_62283 = G__62312;
count__61669_62284 = G__62313;
i__61670_62285 = G__62314;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62281);
}
}


var G__62318 = cljs.core.next(seq__61611_62272__$1);
var G__62319 = null;
var G__62320 = (0);
var G__62321 = (0);
seq__61611_62218 = G__62318;
chunk__61613_62219 = G__62319;
count__61615_62220 = G__62320;
i__61616_62221 = G__62321;
continue;
} else {
var G__62322 = cljs.core.next(seq__61611_62272__$1);
var G__62323 = null;
var G__62324 = (0);
var G__62325 = (0);
seq__61611_62218 = G__62322;
chunk__61613_62219 = G__62323;
count__61615_62220 = G__62324;
i__61616_62221 = G__62325;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62331 = arguments.length;
var i__4737__auto___62332 = (0);
while(true){
if((i__4737__auto___62332 < len__4736__auto___62331)){
args__4742__auto__.push((arguments[i__4737__auto___62332]));

var G__62333 = (i__4737__auto___62332 + (1));
i__4737__auto___62332 = G__62333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61684){
var G__61685 = cljs.core.first(seq61684);
var seq61684__$1 = cljs.core.next(seq61684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61685,seq61684__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__61692 = arguments.length;
switch (G__61692) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__58718__auto___62346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_61705){
var state_val_61707 = (state_61705[(1)]);
if((state_val_61707 === (1))){
var state_61705__$1 = state_61705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61705__$1,(2),once_or_cleanup);
} else {
if((state_val_61707 === (2))){
var inst_61702 = (state_61705[(2)]);
var inst_61703 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61705__$1 = (function (){var statearr_61710 = state_61705;
(statearr_61710[(7)] = inst_61702);

return statearr_61710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61705__$1,inst_61703);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__58314__auto__ = null;
var shadow$dom$state_machine__58314__auto____0 = (function (){
var statearr_61711 = [null,null,null,null,null,null,null,null];
(statearr_61711[(0)] = shadow$dom$state_machine__58314__auto__);

(statearr_61711[(1)] = (1));

return statearr_61711;
});
var shadow$dom$state_machine__58314__auto____1 = (function (state_61705){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_61705);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e61714){var ex__58317__auto__ = e61714;
var statearr_61715_62355 = state_61705;
(statearr_61715_62355[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_61705[(4)]))){
var statearr_61716_62357 = state_61705;
(statearr_61716_62357[(1)] = cljs.core.first((state_61705[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62358 = state_61705;
state_61705 = G__62358;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
shadow$dom$state_machine__58314__auto__ = function(state_61705){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__58314__auto____0.call(this);
case 1:
return shadow$dom$state_machine__58314__auto____1.call(this,state_61705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__58314__auto____0;
shadow$dom$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__58314__auto____1;
return shadow$dom$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_61718 = f__58719__auto__();
(statearr_61718[(6)] = c__58718__auto___62346);

return statearr_61718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
