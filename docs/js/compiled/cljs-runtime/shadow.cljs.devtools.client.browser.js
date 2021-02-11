goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64195 = arguments.length;
var i__4737__auto___64196 = (0);
while(true){
if((i__4737__auto___64196 < len__4736__auto___64195)){
args__4742__auto__.push((arguments[i__4737__auto___64196]));

var G__64197 = (i__4737__auto___64196 + (1));
i__4737__auto___64196 = G__64197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63944){
var G__63946 = cljs.core.first(seq63944);
var seq63944__$1 = cljs.core.next(seq63944);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63946,seq63944__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63954 = cljs.core.seq(sources);
var chunk__63955 = null;
var count__63956 = (0);
var i__63957 = (0);
while(true){
if((i__63957 < count__63956)){
var map__63975 = chunk__63955.cljs$core$IIndexed$_nth$arity$2(null,i__63957);
var map__63975__$1 = (((((!((map__63975 == null))))?(((((map__63975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63975):map__63975);
var src = map__63975__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63980){var e_64199 = e63980;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64199);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64199.message)].join('')));
}

var G__64201 = seq__63954;
var G__64202 = chunk__63955;
var G__64203 = count__63956;
var G__64204 = (i__63957 + (1));
seq__63954 = G__64201;
chunk__63955 = G__64202;
count__63956 = G__64203;
i__63957 = G__64204;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63954);
if(temp__5735__auto__){
var seq__63954__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63954__$1);
var G__64205 = cljs.core.chunk_rest(seq__63954__$1);
var G__64206 = c__4556__auto__;
var G__64207 = cljs.core.count(c__4556__auto__);
var G__64208 = (0);
seq__63954 = G__64205;
chunk__63955 = G__64206;
count__63956 = G__64207;
i__63957 = G__64208;
continue;
} else {
var map__63981 = cljs.core.first(seq__63954__$1);
var map__63981__$1 = (((((!((map__63981 == null))))?(((((map__63981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63981):map__63981);
var src = map__63981__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63983){var e_64210 = e63983;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64210);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64210.message)].join('')));
}

var G__64212 = cljs.core.next(seq__63954__$1);
var G__64213 = null;
var G__64214 = (0);
var G__64215 = (0);
seq__63954 = G__64212;
chunk__63955 = G__64213;
count__63956 = G__64214;
i__63957 = G__64215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63984 = cljs.core.seq(js_requires);
var chunk__63985 = null;
var count__63986 = (0);
var i__63987 = (0);
while(true){
if((i__63987 < count__63986)){
var js_ns = chunk__63985.cljs$core$IIndexed$_nth$arity$2(null,i__63987);
var require_str_64216 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64216);


var G__64217 = seq__63984;
var G__64218 = chunk__63985;
var G__64219 = count__63986;
var G__64220 = (i__63987 + (1));
seq__63984 = G__64217;
chunk__63985 = G__64218;
count__63986 = G__64219;
i__63987 = G__64220;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63984);
if(temp__5735__auto__){
var seq__63984__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63984__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63984__$1);
var G__64221 = cljs.core.chunk_rest(seq__63984__$1);
var G__64222 = c__4556__auto__;
var G__64223 = cljs.core.count(c__4556__auto__);
var G__64224 = (0);
seq__63984 = G__64221;
chunk__63985 = G__64222;
count__63986 = G__64223;
i__63987 = G__64224;
continue;
} else {
var js_ns = cljs.core.first(seq__63984__$1);
var require_str_64225 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64225);


var G__64226 = cljs.core.next(seq__63984__$1);
var G__64227 = null;
var G__64228 = (0);
var G__64229 = (0);
seq__63984 = G__64226;
chunk__63985 = G__64227;
count__63986 = G__64228;
i__63987 = G__64229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63996){
var map__63997 = p__63996;
var map__63997__$1 = (((((!((map__63997 == null))))?(((((map__63997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63997):map__63997);
var msg = map__63997__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63997__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63997__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64002(s__64003){
return (new cljs.core.LazySeq(null,(function (){
var s__64003__$1 = s__64003;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64003__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__64008 = cljs.core.first(xs__6292__auto__);
var map__64008__$1 = (((((!((map__64008 == null))))?(((((map__64008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64008):map__64008);
var src = map__64008__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__64003__$1,map__64008,map__64008__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63997,map__63997__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64002_$_iter__64004(s__64005){
return (new cljs.core.LazySeq(null,((function (s__64003__$1,map__64008,map__64008__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63997,map__63997__$1,msg,info,reload_info){
return (function (){
var s__64005__$1 = s__64005;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64005__$1);
if(temp__5735__auto____$1){
var s__64005__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64005__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64005__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64007 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64006 = (0);
while(true){
if((i__64006 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__64006);
cljs.core.chunk_append(b__64007,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64230 = (i__64006 + (1));
i__64006 = G__64230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64007),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64002_$_iter__64004(cljs.core.chunk_rest(s__64005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64007),null);
}
} else {
var warning = cljs.core.first(s__64005__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64002_$_iter__64004(cljs.core.rest(s__64005__$2)));
}
} else {
return null;
}
break;
}
});})(s__64003__$1,map__64008,map__64008__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63997,map__63997__$1,msg,info,reload_info))
,null,null));
});})(s__64003__$1,map__64008,map__64008__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63997,map__63997__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64002(cljs.core.rest(s__64003__$1)));
} else {
var G__64231 = cljs.core.rest(s__64003__$1);
s__64003__$1 = G__64231;
continue;
}
} else {
var G__64232 = cljs.core.rest(s__64003__$1);
s__64003__$1 = G__64232;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__64021_64233 = cljs.core.seq(warnings);
var chunk__64022_64234 = null;
var count__64023_64235 = (0);
var i__64024_64236 = (0);
while(true){
if((i__64024_64236 < count__64023_64235)){
var map__64036_64237 = chunk__64022_64234.cljs$core$IIndexed$_nth$arity$2(null,i__64024_64236);
var map__64036_64238__$1 = (((((!((map__64036_64237 == null))))?(((((map__64036_64237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64036_64237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64036_64237):map__64036_64237);
var w_64239 = map__64036_64238__$1;
var msg_64240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036_64238__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036_64238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036_64238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036_64238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64243)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64241),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64242),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64240__$1)].join(''));


var G__64244 = seq__64021_64233;
var G__64245 = chunk__64022_64234;
var G__64246 = count__64023_64235;
var G__64247 = (i__64024_64236 + (1));
seq__64021_64233 = G__64244;
chunk__64022_64234 = G__64245;
count__64023_64235 = G__64246;
i__64024_64236 = G__64247;
continue;
} else {
var temp__5735__auto___64248 = cljs.core.seq(seq__64021_64233);
if(temp__5735__auto___64248){
var seq__64021_64249__$1 = temp__5735__auto___64248;
if(cljs.core.chunked_seq_QMARK_(seq__64021_64249__$1)){
var c__4556__auto___64250 = cljs.core.chunk_first(seq__64021_64249__$1);
var G__64251 = cljs.core.chunk_rest(seq__64021_64249__$1);
var G__64252 = c__4556__auto___64250;
var G__64253 = cljs.core.count(c__4556__auto___64250);
var G__64254 = (0);
seq__64021_64233 = G__64251;
chunk__64022_64234 = G__64252;
count__64023_64235 = G__64253;
i__64024_64236 = G__64254;
continue;
} else {
var map__64041_64255 = cljs.core.first(seq__64021_64249__$1);
var map__64041_64256__$1 = (((((!((map__64041_64255 == null))))?(((((map__64041_64255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64041_64255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64041_64255):map__64041_64255);
var w_64257 = map__64041_64256__$1;
var msg_64258__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041_64256__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041_64256__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041_64256__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041_64256__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64261)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64259),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64260),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64258__$1)].join(''));


var G__64262 = cljs.core.next(seq__64021_64249__$1);
var G__64263 = null;
var G__64264 = (0);
var G__64265 = (0);
seq__64021_64233 = G__64262;
chunk__64022_64234 = G__64263;
count__64023_64235 = G__64264;
i__64024_64236 = G__64265;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63995_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63995_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__64049){
var map__64050 = p__64049;
var map__64050__$1 = (((((!((map__64050 == null))))?(((((map__64050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64050):map__64050);
var msg = map__64050__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64050__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__64052 = cljs.core.seq(updates);
var chunk__64054 = null;
var count__64055 = (0);
var i__64056 = (0);
while(true){
if((i__64056 < count__64055)){
var path = chunk__64054.cljs$core$IIndexed$_nth$arity$2(null,i__64056);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64101_64266 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64105_64267 = null;
var count__64106_64268 = (0);
var i__64107_64269 = (0);
while(true){
if((i__64107_64269 < count__64106_64268)){
var node_64270 = chunk__64105_64267.cljs$core$IIndexed$_nth$arity$2(null,i__64107_64269);
if(cljs.core.not(node_64270.shadow$old)){
var path_match_64271 = shadow.cljs.devtools.client.browser.match_paths(node_64270.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64271)){
var new_link_64272 = (function (){var G__64122 = node_64270.cloneNode(true);
G__64122.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64271),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64122;
})();
(node_64270.shadow$old = true);

(new_link_64272.onload = ((function (seq__64101_64266,chunk__64105_64267,count__64106_64268,i__64107_64269,seq__64052,chunk__64054,count__64055,i__64056,new_link_64272,path_match_64271,node_64270,path,map__64050,map__64050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64270);
});})(seq__64101_64266,chunk__64105_64267,count__64106_64268,i__64107_64269,seq__64052,chunk__64054,count__64055,i__64056,new_link_64272,path_match_64271,node_64270,path,map__64050,map__64050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64271], 0));

goog.dom.insertSiblingAfter(new_link_64272,node_64270);


var G__64273 = seq__64101_64266;
var G__64274 = chunk__64105_64267;
var G__64275 = count__64106_64268;
var G__64276 = (i__64107_64269 + (1));
seq__64101_64266 = G__64273;
chunk__64105_64267 = G__64274;
count__64106_64268 = G__64275;
i__64107_64269 = G__64276;
continue;
} else {
var G__64277 = seq__64101_64266;
var G__64278 = chunk__64105_64267;
var G__64279 = count__64106_64268;
var G__64280 = (i__64107_64269 + (1));
seq__64101_64266 = G__64277;
chunk__64105_64267 = G__64278;
count__64106_64268 = G__64279;
i__64107_64269 = G__64280;
continue;
}
} else {
var G__64281 = seq__64101_64266;
var G__64282 = chunk__64105_64267;
var G__64283 = count__64106_64268;
var G__64284 = (i__64107_64269 + (1));
seq__64101_64266 = G__64281;
chunk__64105_64267 = G__64282;
count__64106_64268 = G__64283;
i__64107_64269 = G__64284;
continue;
}
} else {
var temp__5735__auto___64285 = cljs.core.seq(seq__64101_64266);
if(temp__5735__auto___64285){
var seq__64101_64286__$1 = temp__5735__auto___64285;
if(cljs.core.chunked_seq_QMARK_(seq__64101_64286__$1)){
var c__4556__auto___64287 = cljs.core.chunk_first(seq__64101_64286__$1);
var G__64288 = cljs.core.chunk_rest(seq__64101_64286__$1);
var G__64289 = c__4556__auto___64287;
var G__64290 = cljs.core.count(c__4556__auto___64287);
var G__64291 = (0);
seq__64101_64266 = G__64288;
chunk__64105_64267 = G__64289;
count__64106_64268 = G__64290;
i__64107_64269 = G__64291;
continue;
} else {
var node_64292 = cljs.core.first(seq__64101_64286__$1);
if(cljs.core.not(node_64292.shadow$old)){
var path_match_64293 = shadow.cljs.devtools.client.browser.match_paths(node_64292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64293)){
var new_link_64294 = (function (){var G__64126 = node_64292.cloneNode(true);
G__64126.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64293),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64126;
})();
(node_64292.shadow$old = true);

(new_link_64294.onload = ((function (seq__64101_64266,chunk__64105_64267,count__64106_64268,i__64107_64269,seq__64052,chunk__64054,count__64055,i__64056,new_link_64294,path_match_64293,node_64292,seq__64101_64286__$1,temp__5735__auto___64285,path,map__64050,map__64050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64292);
});})(seq__64101_64266,chunk__64105_64267,count__64106_64268,i__64107_64269,seq__64052,chunk__64054,count__64055,i__64056,new_link_64294,path_match_64293,node_64292,seq__64101_64286__$1,temp__5735__auto___64285,path,map__64050,map__64050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64293], 0));

goog.dom.insertSiblingAfter(new_link_64294,node_64292);


var G__64299 = cljs.core.next(seq__64101_64286__$1);
var G__64300 = null;
var G__64301 = (0);
var G__64302 = (0);
seq__64101_64266 = G__64299;
chunk__64105_64267 = G__64300;
count__64106_64268 = G__64301;
i__64107_64269 = G__64302;
continue;
} else {
var G__64304 = cljs.core.next(seq__64101_64286__$1);
var G__64305 = null;
var G__64306 = (0);
var G__64307 = (0);
seq__64101_64266 = G__64304;
chunk__64105_64267 = G__64305;
count__64106_64268 = G__64306;
i__64107_64269 = G__64307;
continue;
}
} else {
var G__64308 = cljs.core.next(seq__64101_64286__$1);
var G__64309 = null;
var G__64310 = (0);
var G__64311 = (0);
seq__64101_64266 = G__64308;
chunk__64105_64267 = G__64309;
count__64106_64268 = G__64310;
i__64107_64269 = G__64311;
continue;
}
}
} else {
}
}
break;
}


var G__64312 = seq__64052;
var G__64313 = chunk__64054;
var G__64314 = count__64055;
var G__64315 = (i__64056 + (1));
seq__64052 = G__64312;
chunk__64054 = G__64313;
count__64055 = G__64314;
i__64056 = G__64315;
continue;
} else {
var G__64316 = seq__64052;
var G__64317 = chunk__64054;
var G__64318 = count__64055;
var G__64319 = (i__64056 + (1));
seq__64052 = G__64316;
chunk__64054 = G__64317;
count__64055 = G__64318;
i__64056 = G__64319;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64052);
if(temp__5735__auto__){
var seq__64052__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64052__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64052__$1);
var G__64320 = cljs.core.chunk_rest(seq__64052__$1);
var G__64321 = c__4556__auto__;
var G__64322 = cljs.core.count(c__4556__auto__);
var G__64323 = (0);
seq__64052 = G__64320;
chunk__64054 = G__64321;
count__64055 = G__64322;
i__64056 = G__64323;
continue;
} else {
var path = cljs.core.first(seq__64052__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64129_64324 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64133_64325 = null;
var count__64134_64326 = (0);
var i__64135_64327 = (0);
while(true){
if((i__64135_64327 < count__64134_64326)){
var node_64328 = chunk__64133_64325.cljs$core$IIndexed$_nth$arity$2(null,i__64135_64327);
if(cljs.core.not(node_64328.shadow$old)){
var path_match_64329 = shadow.cljs.devtools.client.browser.match_paths(node_64328.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64329)){
var new_link_64330 = (function (){var G__64146 = node_64328.cloneNode(true);
G__64146.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64329),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64146;
})();
(node_64328.shadow$old = true);

(new_link_64330.onload = ((function (seq__64129_64324,chunk__64133_64325,count__64134_64326,i__64135_64327,seq__64052,chunk__64054,count__64055,i__64056,new_link_64330,path_match_64329,node_64328,path,seq__64052__$1,temp__5735__auto__,map__64050,map__64050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64328);
});})(seq__64129_64324,chunk__64133_64325,count__64134_64326,i__64135_64327,seq__64052,chunk__64054,count__64055,i__64056,new_link_64330,path_match_64329,node_64328,path,seq__64052__$1,temp__5735__auto__,map__64050,map__64050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64329], 0));

goog.dom.insertSiblingAfter(new_link_64330,node_64328);


var G__64331 = seq__64129_64324;
var G__64332 = chunk__64133_64325;
var G__64333 = count__64134_64326;
var G__64334 = (i__64135_64327 + (1));
seq__64129_64324 = G__64331;
chunk__64133_64325 = G__64332;
count__64134_64326 = G__64333;
i__64135_64327 = G__64334;
continue;
} else {
var G__64335 = seq__64129_64324;
var G__64336 = chunk__64133_64325;
var G__64337 = count__64134_64326;
var G__64338 = (i__64135_64327 + (1));
seq__64129_64324 = G__64335;
chunk__64133_64325 = G__64336;
count__64134_64326 = G__64337;
i__64135_64327 = G__64338;
continue;
}
} else {
var G__64339 = seq__64129_64324;
var G__64340 = chunk__64133_64325;
var G__64341 = count__64134_64326;
var G__64342 = (i__64135_64327 + (1));
seq__64129_64324 = G__64339;
chunk__64133_64325 = G__64340;
count__64134_64326 = G__64341;
i__64135_64327 = G__64342;
continue;
}
} else {
var temp__5735__auto___64343__$1 = cljs.core.seq(seq__64129_64324);
if(temp__5735__auto___64343__$1){
var seq__64129_64344__$1 = temp__5735__auto___64343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64129_64344__$1)){
var c__4556__auto___64345 = cljs.core.chunk_first(seq__64129_64344__$1);
var G__64346 = cljs.core.chunk_rest(seq__64129_64344__$1);
var G__64347 = c__4556__auto___64345;
var G__64348 = cljs.core.count(c__4556__auto___64345);
var G__64349 = (0);
seq__64129_64324 = G__64346;
chunk__64133_64325 = G__64347;
count__64134_64326 = G__64348;
i__64135_64327 = G__64349;
continue;
} else {
var node_64350 = cljs.core.first(seq__64129_64344__$1);
if(cljs.core.not(node_64350.shadow$old)){
var path_match_64351 = shadow.cljs.devtools.client.browser.match_paths(node_64350.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64351)){
var new_link_64352 = (function (){var G__64147 = node_64350.cloneNode(true);
G__64147.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64351),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64147;
})();
(node_64350.shadow$old = true);

(new_link_64352.onload = ((function (seq__64129_64324,chunk__64133_64325,count__64134_64326,i__64135_64327,seq__64052,chunk__64054,count__64055,i__64056,new_link_64352,path_match_64351,node_64350,seq__64129_64344__$1,temp__5735__auto___64343__$1,path,seq__64052__$1,temp__5735__auto__,map__64050,map__64050__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_64350);
});})(seq__64129_64324,chunk__64133_64325,count__64134_64326,i__64135_64327,seq__64052,chunk__64054,count__64055,i__64056,new_link_64352,path_match_64351,node_64350,seq__64129_64344__$1,temp__5735__auto___64343__$1,path,seq__64052__$1,temp__5735__auto__,map__64050,map__64050__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64351], 0));

goog.dom.insertSiblingAfter(new_link_64352,node_64350);


var G__64355 = cljs.core.next(seq__64129_64344__$1);
var G__64356 = null;
var G__64357 = (0);
var G__64358 = (0);
seq__64129_64324 = G__64355;
chunk__64133_64325 = G__64356;
count__64134_64326 = G__64357;
i__64135_64327 = G__64358;
continue;
} else {
var G__64359 = cljs.core.next(seq__64129_64344__$1);
var G__64360 = null;
var G__64361 = (0);
var G__64362 = (0);
seq__64129_64324 = G__64359;
chunk__64133_64325 = G__64360;
count__64134_64326 = G__64361;
i__64135_64327 = G__64362;
continue;
}
} else {
var G__64363 = cljs.core.next(seq__64129_64344__$1);
var G__64364 = null;
var G__64365 = (0);
var G__64366 = (0);
seq__64129_64324 = G__64363;
chunk__64133_64325 = G__64364;
count__64134_64326 = G__64365;
i__64135_64327 = G__64366;
continue;
}
}
} else {
}
}
break;
}


var G__64367 = cljs.core.next(seq__64052__$1);
var G__64368 = null;
var G__64369 = (0);
var G__64370 = (0);
seq__64052 = G__64367;
chunk__64054 = G__64368;
count__64055 = G__64369;
i__64056 = G__64370;
continue;
} else {
var G__64371 = cljs.core.next(seq__64052__$1);
var G__64372 = null;
var G__64373 = (0);
var G__64374 = (0);
seq__64052 = G__64371;
chunk__64054 = G__64372;
count__64055 = G__64373;
i__64056 = G__64374;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__64149){
var map__64150 = p__64149;
var map__64150__$1 = (((((!((map__64150 == null))))?(((((map__64150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64150):map__64150);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64150__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__64156){
var map__64157 = p__64156;
var map__64157__$1 = (((((!((map__64157 == null))))?(((((map__64157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64157):map__64157);
var _ = map__64157__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64157__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64159,done,error){
var map__64160 = p__64159;
var map__64160__$1 = (((((!((map__64160 == null))))?(((((map__64160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64160):map__64160);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64160__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64163,done,error){
var map__64164 = p__64163;
var map__64164__$1 = (((((!((map__64164 == null))))?(((((map__64164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64164):map__64164);
var msg = map__64164__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64166){
var map__64167 = p__64166;
var map__64167__$1 = (((((!((map__64167 == null))))?(((((map__64167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64167):map__64167);
var src = map__64167__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64171 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64171) : done.call(null,G__64171));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64172){
var map__64173 = p__64172;
var map__64173__$1 = (((((!((map__64173 == null))))?(((((map__64173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64173):map__64173);
var msg__$1 = map__64173__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64173__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64175){var ex = e64175;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64176){
var map__64177 = p__64176;
var map__64177__$1 = (((((!((map__64177 == null))))?(((((map__64177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64177):map__64177);
var env = map__64177__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64177__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__64184){
var map__64185 = p__64184;
var map__64185__$1 = (((((!((map__64185 == null))))?(((((map__64185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64185):map__64185);
var msg = map__64185__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64185__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64187){
var map__64188 = p__64187;
var map__64188__$1 = (((((!((map__64188 == null))))?(((((map__64188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64188):map__64188);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__64192){
var map__64193 = p__64192;
var map__64193__$1 = (((((!((map__64193 == null))))?(((((map__64193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64193):map__64193);
var svc = map__64193__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64193__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
