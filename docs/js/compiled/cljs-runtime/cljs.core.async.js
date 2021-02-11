goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58799 = arguments.length;
switch (G__58799) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58807 = (function (f,blockable,meta58808){
this.f = f;
this.blockable = blockable;
this.meta58808 = meta58808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58809,meta58808__$1){
var self__ = this;
var _58809__$1 = this;
return (new cljs.core.async.t_cljs$core$async58807(self__.f,self__.blockable,meta58808__$1));
}));

(cljs.core.async.t_cljs$core$async58807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58809){
var self__ = this;
var _58809__$1 = this;
return self__.meta58808;
}));

(cljs.core.async.t_cljs$core$async58807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58808","meta58808",1994986351,null)], null);
}));

(cljs.core.async.t_cljs$core$async58807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58807");

(cljs.core.async.t_cljs$core$async58807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58807.
 */
cljs.core.async.__GT_t_cljs$core$async58807 = (function cljs$core$async$__GT_t_cljs$core$async58807(f__$1,blockable__$1,meta58808){
return (new cljs.core.async.t_cljs$core$async58807(f__$1,blockable__$1,meta58808));
});

}

return (new cljs.core.async.t_cljs$core$async58807(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__58830 = arguments.length;
switch (G__58830) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__58844 = arguments.length;
switch (G__58844) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__58851 = arguments.length;
switch (G__58851) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_60746 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60746) : fn1.call(null,val_60746));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60746) : fn1.call(null,val_60746));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__58873 = arguments.length;
switch (G__58873) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___60755 = n;
var x_60756 = (0);
while(true){
if((x_60756 < n__4613__auto___60755)){
(a[x_60756] = x_60756);

var G__60757 = (x_60756 + (1));
x_60756 = G__60757;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58897 = (function (flag,meta58898){
this.flag = flag;
this.meta58898 = meta58898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58899,meta58898__$1){
var self__ = this;
var _58899__$1 = this;
return (new cljs.core.async.t_cljs$core$async58897(self__.flag,meta58898__$1));
}));

(cljs.core.async.t_cljs$core$async58897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58899){
var self__ = this;
var _58899__$1 = this;
return self__.meta58898;
}));

(cljs.core.async.t_cljs$core$async58897.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58898","meta58898",1684113784,null)], null);
}));

(cljs.core.async.t_cljs$core$async58897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58897");

(cljs.core.async.t_cljs$core$async58897.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58897.
 */
cljs.core.async.__GT_t_cljs$core$async58897 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58897(flag__$1,meta58898){
return (new cljs.core.async.t_cljs$core$async58897(flag__$1,meta58898));
});

}

return (new cljs.core.async.t_cljs$core$async58897(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58917 = (function (flag,cb,meta58918){
this.flag = flag;
this.cb = cb;
this.meta58918 = meta58918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58919,meta58918__$1){
var self__ = this;
var _58919__$1 = this;
return (new cljs.core.async.t_cljs$core$async58917(self__.flag,self__.cb,meta58918__$1));
}));

(cljs.core.async.t_cljs$core$async58917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58919){
var self__ = this;
var _58919__$1 = this;
return self__.meta58918;
}));

(cljs.core.async.t_cljs$core$async58917.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58918","meta58918",-2144910259,null)], null);
}));

(cljs.core.async.t_cljs$core$async58917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58917");

(cljs.core.async.t_cljs$core$async58917.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58917.
 */
cljs.core.async.__GT_t_cljs$core$async58917 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58917(flag__$1,cb__$1,meta58918){
return (new cljs.core.async.t_cljs$core$async58917(flag__$1,cb__$1,meta58918));
});

}

return (new cljs.core.async.t_cljs$core$async58917(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58925_SHARP_){
var G__58931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58925_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58931) : fret.call(null,G__58931));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58926_SHARP_){
var G__58932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58926_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58932) : fret.call(null,G__58932));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60772 = (i + (1));
i = G__60772;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60773 = arguments.length;
var i__4737__auto___60774 = (0);
while(true){
if((i__4737__auto___60774 < len__4736__auto___60773)){
args__4742__auto__.push((arguments[i__4737__auto___60774]));

var G__60775 = (i__4737__auto___60774 + (1));
i__4737__auto___60774 = G__60775;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58936){
var map__58937 = p__58936;
var map__58937__$1 = (((((!((map__58937 == null))))?(((((map__58937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58937):map__58937);
var opts = map__58937__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58934){
var G__58935 = cljs.core.first(seq58934);
var seq58934__$1 = cljs.core.next(seq58934);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58935,seq58934__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__58946 = arguments.length;
switch (G__58946) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__58718__auto___60784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59033){
var state_val_59034 = (state_59033[(1)]);
if((state_val_59034 === (7))){
var inst_59025 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
var statearr_59043_60788 = state_59033__$1;
(statearr_59043_60788[(2)] = inst_59025);

(statearr_59043_60788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (1))){
var state_59033__$1 = state_59033;
var statearr_59044_60789 = state_59033__$1;
(statearr_59044_60789[(2)] = null);

(statearr_59044_60789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (4))){
var inst_58993 = (state_59033[(7)]);
var inst_58993__$1 = (state_59033[(2)]);
var inst_58999 = (inst_58993__$1 == null);
var state_59033__$1 = (function (){var statearr_59045 = state_59033;
(statearr_59045[(7)] = inst_58993__$1);

return statearr_59045;
})();
if(cljs.core.truth_(inst_58999)){
var statearr_59046_60791 = state_59033__$1;
(statearr_59046_60791[(1)] = (5));

} else {
var statearr_59047_60792 = state_59033__$1;
(statearr_59047_60792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (13))){
var state_59033__$1 = state_59033;
var statearr_59049_60793 = state_59033__$1;
(statearr_59049_60793[(2)] = null);

(statearr_59049_60793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (6))){
var inst_58993 = (state_59033[(7)]);
var state_59033__$1 = state_59033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59033__$1,(11),to,inst_58993);
} else {
if((state_val_59034 === (3))){
var inst_59028 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59033__$1,inst_59028);
} else {
if((state_val_59034 === (12))){
var state_59033__$1 = state_59033;
var statearr_59053_60797 = state_59033__$1;
(statearr_59053_60797[(2)] = null);

(statearr_59053_60797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (2))){
var state_59033__$1 = state_59033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59033__$1,(4),from);
} else {
if((state_val_59034 === (11))){
var inst_59014 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
if(cljs.core.truth_(inst_59014)){
var statearr_59058_60800 = state_59033__$1;
(statearr_59058_60800[(1)] = (12));

} else {
var statearr_59059_60801 = state_59033__$1;
(statearr_59059_60801[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (9))){
var state_59033__$1 = state_59033;
var statearr_59060_60802 = state_59033__$1;
(statearr_59060_60802[(2)] = null);

(statearr_59060_60802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (5))){
var state_59033__$1 = state_59033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59061_60803 = state_59033__$1;
(statearr_59061_60803[(1)] = (8));

} else {
var statearr_59062_60804 = state_59033__$1;
(statearr_59062_60804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (14))){
var inst_59023 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
var statearr_59063_60806 = state_59033__$1;
(statearr_59063_60806[(2)] = inst_59023);

(statearr_59063_60806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (10))){
var inst_59011 = (state_59033[(2)]);
var state_59033__$1 = state_59033;
var statearr_59064_60810 = state_59033__$1;
(statearr_59064_60810[(2)] = inst_59011);

(statearr_59064_60810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59034 === (8))){
var inst_59005 = cljs.core.async.close_BANG_(to);
var state_59033__$1 = state_59033;
var statearr_59065_60812 = state_59033__$1;
(statearr_59065_60812[(2)] = inst_59005);

(statearr_59065_60812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_59070 = [null,null,null,null,null,null,null,null];
(statearr_59070[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_59070[(1)] = (1));

return statearr_59070;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_59033){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59033);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59071){var ex__58317__auto__ = e59071;
var statearr_59072_60814 = state_59033;
(statearr_59072_60814[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59033[(4)]))){
var statearr_59073_60815 = state_59033;
(statearr_59073_60815[(1)] = cljs.core.first((state_59033[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60817 = state_59033;
state_59033 = G__60817;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_59033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_59033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59076 = f__58719__auto__();
(statearr_59076[(6)] = c__58718__auto___60784);

return statearr_59076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__59079){
var vec__59080 = p__59079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59080,(1),null);
var job = vec__59080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__58718__auto___60826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59087){
var state_val_59088 = (state_59087[(1)]);
if((state_val_59088 === (1))){
var state_59087__$1 = state_59087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59087__$1,(2),res,v);
} else {
if((state_val_59088 === (2))){
var inst_59084 = (state_59087[(2)]);
var inst_59085 = cljs.core.async.close_BANG_(res);
var state_59087__$1 = (function (){var statearr_59089 = state_59087;
(statearr_59089[(7)] = inst_59084);

return statearr_59089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59087__$1,inst_59085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0 = (function (){
var statearr_59092 = [null,null,null,null,null,null,null,null];
(statearr_59092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__);

(statearr_59092[(1)] = (1));

return statearr_59092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1 = (function (state_59087){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59087);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59093){var ex__58317__auto__ = e59093;
var statearr_59094_60830 = state_59087;
(statearr_59094_60830[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59087[(4)]))){
var statearr_59095_60831 = state_59087;
(statearr_59095_60831[(1)] = cljs.core.first((state_59087[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60833 = state_59087;
state_59087 = G__60833;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = function(state_59087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1.call(this,state_59087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59096 = f__58719__auto__();
(statearr_59096[(6)] = c__58718__auto___60826);

return statearr_59096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__59102){
var vec__59103 = p__59102;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59103,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59103,(1),null);
var job = vec__59103;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___60834 = n;
var __60835 = (0);
while(true){
if((__60835 < n__4613__auto___60834)){
var G__59106_60836 = type;
var G__59106_60837__$1 = (((G__59106_60836 instanceof cljs.core.Keyword))?G__59106_60836.fqn:null);
switch (G__59106_60837__$1) {
case "compute":
var c__58718__auto___60839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60835,c__58718__auto___60839,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async){
return (function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = ((function (__60835,c__58718__auto___60839,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async){
return (function (state_59120){
var state_val_59122 = (state_59120[(1)]);
if((state_val_59122 === (1))){
var state_59120__$1 = state_59120;
var statearr_59126_60844 = state_59120__$1;
(statearr_59126_60844[(2)] = null);

(statearr_59126_60844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59122 === (2))){
var state_59120__$1 = state_59120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59120__$1,(4),jobs);
} else {
if((state_val_59122 === (3))){
var inst_59117 = (state_59120[(2)]);
var state_59120__$1 = state_59120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59120__$1,inst_59117);
} else {
if((state_val_59122 === (4))){
var inst_59109 = (state_59120[(2)]);
var inst_59110 = process(inst_59109);
var state_59120__$1 = state_59120;
if(cljs.core.truth_(inst_59110)){
var statearr_59127_60846 = state_59120__$1;
(statearr_59127_60846[(1)] = (5));

} else {
var statearr_59128_60847 = state_59120__$1;
(statearr_59128_60847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59122 === (5))){
var state_59120__$1 = state_59120;
var statearr_59129_60848 = state_59120__$1;
(statearr_59129_60848[(2)] = null);

(statearr_59129_60848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59122 === (6))){
var state_59120__$1 = state_59120;
var statearr_59130_60849 = state_59120__$1;
(statearr_59130_60849[(2)] = null);

(statearr_59130_60849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59122 === (7))){
var inst_59115 = (state_59120[(2)]);
var state_59120__$1 = state_59120;
var statearr_59132_60850 = state_59120__$1;
(statearr_59132_60850[(2)] = inst_59115);

(statearr_59132_60850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__60835,c__58718__auto___60839,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async))
;
return ((function (__60835,switch__58313__auto__,c__58718__auto___60839,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0 = (function (){
var statearr_59133 = [null,null,null,null,null,null,null];
(statearr_59133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__);

(statearr_59133[(1)] = (1));

return statearr_59133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1 = (function (state_59120){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59120);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59134){var ex__58317__auto__ = e59134;
var statearr_59135_60853 = state_59120;
(statearr_59135_60853[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59120[(4)]))){
var statearr_59136_60854 = state_59120;
(statearr_59136_60854[(1)] = cljs.core.first((state_59120[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60857 = state_59120;
state_59120 = G__60857;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = function(state_59120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1.call(this,state_59120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__;
})()
;})(__60835,switch__58313__auto__,c__58718__auto___60839,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async))
})();
var state__58720__auto__ = (function (){var statearr_59137 = f__58719__auto__();
(statearr_59137[(6)] = c__58718__auto___60839);

return statearr_59137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
});})(__60835,c__58718__auto___60839,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async))
);


break;
case "async":
var c__58718__auto___60858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60835,c__58718__auto___60858,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async){
return (function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = ((function (__60835,c__58718__auto___60858,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async){
return (function (state_59150){
var state_val_59151 = (state_59150[(1)]);
if((state_val_59151 === (1))){
var state_59150__$1 = state_59150;
var statearr_59152_60859 = state_59150__$1;
(statearr_59152_60859[(2)] = null);

(statearr_59152_60859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59151 === (2))){
var state_59150__$1 = state_59150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59150__$1,(4),jobs);
} else {
if((state_val_59151 === (3))){
var inst_59148 = (state_59150[(2)]);
var state_59150__$1 = state_59150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59150__$1,inst_59148);
} else {
if((state_val_59151 === (4))){
var inst_59140 = (state_59150[(2)]);
var inst_59141 = async(inst_59140);
var state_59150__$1 = state_59150;
if(cljs.core.truth_(inst_59141)){
var statearr_59154_60863 = state_59150__$1;
(statearr_59154_60863[(1)] = (5));

} else {
var statearr_59155_60868 = state_59150__$1;
(statearr_59155_60868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59151 === (5))){
var state_59150__$1 = state_59150;
var statearr_59157_60873 = state_59150__$1;
(statearr_59157_60873[(2)] = null);

(statearr_59157_60873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59151 === (6))){
var state_59150__$1 = state_59150;
var statearr_59158_60886 = state_59150__$1;
(statearr_59158_60886[(2)] = null);

(statearr_59158_60886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59151 === (7))){
var inst_59146 = (state_59150[(2)]);
var state_59150__$1 = state_59150;
var statearr_59159_60887 = state_59150__$1;
(statearr_59159_60887[(2)] = inst_59146);

(statearr_59159_60887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__60835,c__58718__auto___60858,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async))
;
return ((function (__60835,switch__58313__auto__,c__58718__auto___60858,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0 = (function (){
var statearr_59160 = [null,null,null,null,null,null,null];
(statearr_59160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__);

(statearr_59160[(1)] = (1));

return statearr_59160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1 = (function (state_59150){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59150);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59161){var ex__58317__auto__ = e59161;
var statearr_59162_60889 = state_59150;
(statearr_59162_60889[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59150[(4)]))){
var statearr_59163_60890 = state_59150;
(statearr_59163_60890[(1)] = cljs.core.first((state_59150[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60894 = state_59150;
state_59150 = G__60894;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = function(state_59150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1.call(this,state_59150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__;
})()
;})(__60835,switch__58313__auto__,c__58718__auto___60858,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async))
})();
var state__58720__auto__ = (function (){var statearr_59166 = f__58719__auto__();
(statearr_59166[(6)] = c__58718__auto___60858);

return statearr_59166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
});})(__60835,c__58718__auto___60858,G__59106_60836,G__59106_60837__$1,n__4613__auto___60834,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59106_60837__$1)].join('')));

}

var G__60897 = (__60835 + (1));
__60835 = G__60897;
continue;
} else {
}
break;
}

var c__58718__auto___60898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59188){
var state_val_59189 = (state_59188[(1)]);
if((state_val_59189 === (7))){
var inst_59184 = (state_59188[(2)]);
var state_59188__$1 = state_59188;
var statearr_59190_60900 = state_59188__$1;
(statearr_59190_60900[(2)] = inst_59184);

(statearr_59190_60900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59189 === (1))){
var state_59188__$1 = state_59188;
var statearr_59192_60902 = state_59188__$1;
(statearr_59192_60902[(2)] = null);

(statearr_59192_60902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59189 === (4))){
var inst_59169 = (state_59188[(7)]);
var inst_59169__$1 = (state_59188[(2)]);
var inst_59170 = (inst_59169__$1 == null);
var state_59188__$1 = (function (){var statearr_59195 = state_59188;
(statearr_59195[(7)] = inst_59169__$1);

return statearr_59195;
})();
if(cljs.core.truth_(inst_59170)){
var statearr_59196_60905 = state_59188__$1;
(statearr_59196_60905[(1)] = (5));

} else {
var statearr_59197_60907 = state_59188__$1;
(statearr_59197_60907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59189 === (6))){
var inst_59174 = (state_59188[(8)]);
var inst_59169 = (state_59188[(7)]);
var inst_59174__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_59175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59176 = [inst_59169,inst_59174__$1];
var inst_59177 = (new cljs.core.PersistentVector(null,2,(5),inst_59175,inst_59176,null));
var state_59188__$1 = (function (){var statearr_59199 = state_59188;
(statearr_59199[(8)] = inst_59174__$1);

return statearr_59199;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59188__$1,(8),jobs,inst_59177);
} else {
if((state_val_59189 === (3))){
var inst_59186 = (state_59188[(2)]);
var state_59188__$1 = state_59188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59188__$1,inst_59186);
} else {
if((state_val_59189 === (2))){
var state_59188__$1 = state_59188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59188__$1,(4),from);
} else {
if((state_val_59189 === (9))){
var inst_59181 = (state_59188[(2)]);
var state_59188__$1 = (function (){var statearr_59200 = state_59188;
(statearr_59200[(9)] = inst_59181);

return statearr_59200;
})();
var statearr_59201_60913 = state_59188__$1;
(statearr_59201_60913[(2)] = null);

(statearr_59201_60913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59189 === (5))){
var inst_59172 = cljs.core.async.close_BANG_(jobs);
var state_59188__$1 = state_59188;
var statearr_59202_60915 = state_59188__$1;
(statearr_59202_60915[(2)] = inst_59172);

(statearr_59202_60915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59189 === (8))){
var inst_59174 = (state_59188[(8)]);
var inst_59179 = (state_59188[(2)]);
var state_59188__$1 = (function (){var statearr_59203 = state_59188;
(statearr_59203[(10)] = inst_59179);

return statearr_59203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59188__$1,(9),results,inst_59174);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0 = (function (){
var statearr_59204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__);

(statearr_59204[(1)] = (1));

return statearr_59204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1 = (function (state_59188){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59188);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59205){var ex__58317__auto__ = e59205;
var statearr_59206_60919 = state_59188;
(statearr_59206_60919[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59188[(4)]))){
var statearr_59207_60924 = state_59188;
(statearr_59207_60924[(1)] = cljs.core.first((state_59188[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60928 = state_59188;
state_59188 = G__60928;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = function(state_59188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1.call(this,state_59188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59208 = f__58719__auto__();
(statearr_59208[(6)] = c__58718__auto___60898);

return statearr_59208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


var c__58718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59249){
var state_val_59250 = (state_59249[(1)]);
if((state_val_59250 === (7))){
var inst_59245 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59255_60932 = state_59249__$1;
(statearr_59255_60932[(2)] = inst_59245);

(statearr_59255_60932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (20))){
var state_59249__$1 = state_59249;
var statearr_59256_60936 = state_59249__$1;
(statearr_59256_60936[(2)] = null);

(statearr_59256_60936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (1))){
var state_59249__$1 = state_59249;
var statearr_59258_60937 = state_59249__$1;
(statearr_59258_60937[(2)] = null);

(statearr_59258_60937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (4))){
var inst_59211 = (state_59249[(7)]);
var inst_59211__$1 = (state_59249[(2)]);
var inst_59212 = (inst_59211__$1 == null);
var state_59249__$1 = (function (){var statearr_59259 = state_59249;
(statearr_59259[(7)] = inst_59211__$1);

return statearr_59259;
})();
if(cljs.core.truth_(inst_59212)){
var statearr_59260_60941 = state_59249__$1;
(statearr_59260_60941[(1)] = (5));

} else {
var statearr_59261_60942 = state_59249__$1;
(statearr_59261_60942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (15))){
var inst_59227 = (state_59249[(8)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59249__$1,(18),to,inst_59227);
} else {
if((state_val_59250 === (21))){
var inst_59240 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59262_60943 = state_59249__$1;
(statearr_59262_60943[(2)] = inst_59240);

(statearr_59262_60943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (13))){
var inst_59242 = (state_59249[(2)]);
var state_59249__$1 = (function (){var statearr_59264 = state_59249;
(statearr_59264[(9)] = inst_59242);

return statearr_59264;
})();
var statearr_59265_60947 = state_59249__$1;
(statearr_59265_60947[(2)] = null);

(statearr_59265_60947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (6))){
var inst_59211 = (state_59249[(7)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59249__$1,(11),inst_59211);
} else {
if((state_val_59250 === (17))){
var inst_59235 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
if(cljs.core.truth_(inst_59235)){
var statearr_59266_60948 = state_59249__$1;
(statearr_59266_60948[(1)] = (19));

} else {
var statearr_59267_60949 = state_59249__$1;
(statearr_59267_60949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (3))){
var inst_59247 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59249__$1,inst_59247);
} else {
if((state_val_59250 === (12))){
var inst_59224 = (state_59249[(10)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59249__$1,(14),inst_59224);
} else {
if((state_val_59250 === (2))){
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59249__$1,(4),results);
} else {
if((state_val_59250 === (19))){
var state_59249__$1 = state_59249;
var statearr_59269_60957 = state_59249__$1;
(statearr_59269_60957[(2)] = null);

(statearr_59269_60957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (11))){
var inst_59224 = (state_59249[(2)]);
var state_59249__$1 = (function (){var statearr_59270 = state_59249;
(statearr_59270[(10)] = inst_59224);

return statearr_59270;
})();
var statearr_59271_60959 = state_59249__$1;
(statearr_59271_60959[(2)] = null);

(statearr_59271_60959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (9))){
var state_59249__$1 = state_59249;
var statearr_59272_60960 = state_59249__$1;
(statearr_59272_60960[(2)] = null);

(statearr_59272_60960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (5))){
var state_59249__$1 = state_59249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59273_60965 = state_59249__$1;
(statearr_59273_60965[(1)] = (8));

} else {
var statearr_59274_60966 = state_59249__$1;
(statearr_59274_60966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (14))){
var inst_59227 = (state_59249[(8)]);
var inst_59227__$1 = (state_59249[(2)]);
var inst_59228 = (inst_59227__$1 == null);
var inst_59229 = cljs.core.not(inst_59228);
var state_59249__$1 = (function (){var statearr_59275 = state_59249;
(statearr_59275[(8)] = inst_59227__$1);

return statearr_59275;
})();
if(inst_59229){
var statearr_59276_60967 = state_59249__$1;
(statearr_59276_60967[(1)] = (15));

} else {
var statearr_59277_60968 = state_59249__$1;
(statearr_59277_60968[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (16))){
var state_59249__$1 = state_59249;
var statearr_59278_60975 = state_59249__$1;
(statearr_59278_60975[(2)] = false);

(statearr_59278_60975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (10))){
var inst_59218 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59280_60976 = state_59249__$1;
(statearr_59280_60976[(2)] = inst_59218);

(statearr_59280_60976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (18))){
var inst_59232 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59281_60978 = state_59249__$1;
(statearr_59281_60978[(2)] = inst_59232);

(statearr_59281_60978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (8))){
var inst_59215 = cljs.core.async.close_BANG_(to);
var state_59249__$1 = state_59249;
var statearr_59282_60983 = state_59249__$1;
(statearr_59282_60983[(2)] = inst_59215);

(statearr_59282_60983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0 = (function (){
var statearr_59283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__);

(statearr_59283[(1)] = (1));

return statearr_59283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1 = (function (state_59249){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59249);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59284){var ex__58317__auto__ = e59284;
var statearr_59285_60986 = state_59249;
(statearr_59285_60986[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59249[(4)]))){
var statearr_59286_60988 = state_59249;
(statearr_59286_60988[(1)] = cljs.core.first((state_59249[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60990 = state_59249;
state_59249 = G__60990;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__ = function(state_59249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1.call(this,state_59249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59287 = f__58719__auto__();
(statearr_59287[(6)] = c__58718__auto__);

return statearr_59287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));

return c__58718__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__59289 = arguments.length;
switch (G__59289) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__59291 = arguments.length;
switch (G__59291) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__59297 = arguments.length;
switch (G__59297) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__58718__auto___61000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59330){
var state_val_59331 = (state_59330[(1)]);
if((state_val_59331 === (7))){
var inst_59326 = (state_59330[(2)]);
var state_59330__$1 = state_59330;
var statearr_59336_61001 = state_59330__$1;
(statearr_59336_61001[(2)] = inst_59326);

(statearr_59336_61001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (1))){
var state_59330__$1 = state_59330;
var statearr_59337_61005 = state_59330__$1;
(statearr_59337_61005[(2)] = null);

(statearr_59337_61005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (4))){
var inst_59304 = (state_59330[(7)]);
var inst_59304__$1 = (state_59330[(2)]);
var inst_59305 = (inst_59304__$1 == null);
var state_59330__$1 = (function (){var statearr_59338 = state_59330;
(statearr_59338[(7)] = inst_59304__$1);

return statearr_59338;
})();
if(cljs.core.truth_(inst_59305)){
var statearr_59339_61006 = state_59330__$1;
(statearr_59339_61006[(1)] = (5));

} else {
var statearr_59340_61007 = state_59330__$1;
(statearr_59340_61007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (13))){
var state_59330__$1 = state_59330;
var statearr_59341_61008 = state_59330__$1;
(statearr_59341_61008[(2)] = null);

(statearr_59341_61008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (6))){
var inst_59304 = (state_59330[(7)]);
var inst_59310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59304) : p.call(null,inst_59304));
var state_59330__$1 = state_59330;
if(cljs.core.truth_(inst_59310)){
var statearr_59342_61012 = state_59330__$1;
(statearr_59342_61012[(1)] = (9));

} else {
var statearr_59343_61013 = state_59330__$1;
(statearr_59343_61013[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (3))){
var inst_59328 = (state_59330[(2)]);
var state_59330__$1 = state_59330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59330__$1,inst_59328);
} else {
if((state_val_59331 === (12))){
var state_59330__$1 = state_59330;
var statearr_59344_61014 = state_59330__$1;
(statearr_59344_61014[(2)] = null);

(statearr_59344_61014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (2))){
var state_59330__$1 = state_59330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59330__$1,(4),ch);
} else {
if((state_val_59331 === (11))){
var inst_59304 = (state_59330[(7)]);
var inst_59314 = (state_59330[(2)]);
var state_59330__$1 = state_59330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59330__$1,(8),inst_59314,inst_59304);
} else {
if((state_val_59331 === (9))){
var state_59330__$1 = state_59330;
var statearr_59345_61015 = state_59330__$1;
(statearr_59345_61015[(2)] = tc);

(statearr_59345_61015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (5))){
var inst_59307 = cljs.core.async.close_BANG_(tc);
var inst_59308 = cljs.core.async.close_BANG_(fc);
var state_59330__$1 = (function (){var statearr_59346 = state_59330;
(statearr_59346[(8)] = inst_59307);

return statearr_59346;
})();
var statearr_59347_61019 = state_59330__$1;
(statearr_59347_61019[(2)] = inst_59308);

(statearr_59347_61019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (14))){
var inst_59324 = (state_59330[(2)]);
var state_59330__$1 = state_59330;
var statearr_59348_61020 = state_59330__$1;
(statearr_59348_61020[(2)] = inst_59324);

(statearr_59348_61020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (10))){
var state_59330__$1 = state_59330;
var statearr_59351_61024 = state_59330__$1;
(statearr_59351_61024[(2)] = fc);

(statearr_59351_61024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59331 === (8))){
var inst_59316 = (state_59330[(2)]);
var state_59330__$1 = state_59330;
if(cljs.core.truth_(inst_59316)){
var statearr_59353_61025 = state_59330__$1;
(statearr_59353_61025[(1)] = (12));

} else {
var statearr_59354_61026 = state_59330__$1;
(statearr_59354_61026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_59361 = [null,null,null,null,null,null,null,null,null];
(statearr_59361[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_59361[(1)] = (1));

return statearr_59361;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_59330){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59330);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59362){var ex__58317__auto__ = e59362;
var statearr_59363_61038 = state_59330;
(statearr_59363_61038[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59330[(4)]))){
var statearr_59364_61040 = state_59330;
(statearr_59364_61040[(1)] = cljs.core.first((state_59330[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61042 = state_59330;
state_59330 = G__61042;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_59330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_59330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59371 = f__58719__auto__();
(statearr_59371[(6)] = c__58718__auto___61000);

return statearr_59371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__58718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59393){
var state_val_59394 = (state_59393[(1)]);
if((state_val_59394 === (7))){
var inst_59389 = (state_59393[(2)]);
var state_59393__$1 = state_59393;
var statearr_59395_61050 = state_59393__$1;
(statearr_59395_61050[(2)] = inst_59389);

(statearr_59395_61050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (1))){
var inst_59372 = init;
var inst_59373 = inst_59372;
var state_59393__$1 = (function (){var statearr_59396 = state_59393;
(statearr_59396[(7)] = inst_59373);

return statearr_59396;
})();
var statearr_59397_61059 = state_59393__$1;
(statearr_59397_61059[(2)] = null);

(statearr_59397_61059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (4))){
var inst_59376 = (state_59393[(8)]);
var inst_59376__$1 = (state_59393[(2)]);
var inst_59377 = (inst_59376__$1 == null);
var state_59393__$1 = (function (){var statearr_59398 = state_59393;
(statearr_59398[(8)] = inst_59376__$1);

return statearr_59398;
})();
if(cljs.core.truth_(inst_59377)){
var statearr_59399_61066 = state_59393__$1;
(statearr_59399_61066[(1)] = (5));

} else {
var statearr_59400_61069 = state_59393__$1;
(statearr_59400_61069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (6))){
var inst_59380 = (state_59393[(9)]);
var inst_59376 = (state_59393[(8)]);
var inst_59373 = (state_59393[(7)]);
var inst_59380__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59373,inst_59376) : f.call(null,inst_59373,inst_59376));
var inst_59381 = cljs.core.reduced_QMARK_(inst_59380__$1);
var state_59393__$1 = (function (){var statearr_59402 = state_59393;
(statearr_59402[(9)] = inst_59380__$1);

return statearr_59402;
})();
if(inst_59381){
var statearr_59403_61092 = state_59393__$1;
(statearr_59403_61092[(1)] = (8));

} else {
var statearr_59404_61094 = state_59393__$1;
(statearr_59404_61094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (3))){
var inst_59391 = (state_59393[(2)]);
var state_59393__$1 = state_59393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59393__$1,inst_59391);
} else {
if((state_val_59394 === (2))){
var state_59393__$1 = state_59393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59393__$1,(4),ch);
} else {
if((state_val_59394 === (9))){
var inst_59380 = (state_59393[(9)]);
var inst_59373 = inst_59380;
var state_59393__$1 = (function (){var statearr_59410 = state_59393;
(statearr_59410[(7)] = inst_59373);

return statearr_59410;
})();
var statearr_59411_61098 = state_59393__$1;
(statearr_59411_61098[(2)] = null);

(statearr_59411_61098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (5))){
var inst_59373 = (state_59393[(7)]);
var state_59393__$1 = state_59393;
var statearr_59416_61102 = state_59393__$1;
(statearr_59416_61102[(2)] = inst_59373);

(statearr_59416_61102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (10))){
var inst_59387 = (state_59393[(2)]);
var state_59393__$1 = state_59393;
var statearr_59418_61104 = state_59393__$1;
(statearr_59418_61104[(2)] = inst_59387);

(statearr_59418_61104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59394 === (8))){
var inst_59380 = (state_59393[(9)]);
var inst_59383 = cljs.core.deref(inst_59380);
var state_59393__$1 = state_59393;
var statearr_59419_61106 = state_59393__$1;
(statearr_59419_61106[(2)] = inst_59383);

(statearr_59419_61106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__58314__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58314__auto____0 = (function (){
var statearr_59420 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59420[(0)] = cljs$core$async$reduce_$_state_machine__58314__auto__);

(statearr_59420[(1)] = (1));

return statearr_59420;
});
var cljs$core$async$reduce_$_state_machine__58314__auto____1 = (function (state_59393){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59393);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59422){var ex__58317__auto__ = e59422;
var statearr_59423_61124 = state_59393;
(statearr_59423_61124[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59393[(4)]))){
var statearr_59424_61125 = state_59393;
(statearr_59424_61125[(1)] = cljs.core.first((state_59393[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61127 = state_59393;
state_59393 = G__61127;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58314__auto__ = function(state_59393){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58314__auto____1.call(this,state_59393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58314__auto____0;
cljs$core$async$reduce_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58314__auto____1;
return cljs$core$async$reduce_$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59426 = f__58719__auto__();
(statearr_59426[(6)] = c__58718__auto__);

return statearr_59426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));

return c__58718__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__58718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59437){
var state_val_59438 = (state_59437[(1)]);
if((state_val_59438 === (1))){
var inst_59431 = cljs.core.async.reduce(f__$1,init,ch);
var state_59437__$1 = state_59437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59437__$1,(2),inst_59431);
} else {
if((state_val_59438 === (2))){
var inst_59433 = (state_59437[(2)]);
var inst_59434 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59433) : f__$1.call(null,inst_59433));
var state_59437__$1 = state_59437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59437__$1,inst_59434);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58314__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58314__auto____0 = (function (){
var statearr_59442 = [null,null,null,null,null,null,null];
(statearr_59442[(0)] = cljs$core$async$transduce_$_state_machine__58314__auto__);

(statearr_59442[(1)] = (1));

return statearr_59442;
});
var cljs$core$async$transduce_$_state_machine__58314__auto____1 = (function (state_59437){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59437);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59443){var ex__58317__auto__ = e59443;
var statearr_59445_61133 = state_59437;
(statearr_59445_61133[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59437[(4)]))){
var statearr_59446_61134 = state_59437;
(statearr_59446_61134[(1)] = cljs.core.first((state_59437[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61137 = state_59437;
state_59437 = G__61137;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58314__auto__ = function(state_59437){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58314__auto____1.call(this,state_59437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58314__auto____0;
cljs$core$async$transduce_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58314__auto____1;
return cljs$core$async$transduce_$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59448 = f__58719__auto__();
(statearr_59448[(6)] = c__58718__auto__);

return statearr_59448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));

return c__58718__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__59450 = arguments.length;
switch (G__59450) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__58718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59478){
var state_val_59479 = (state_59478[(1)]);
if((state_val_59479 === (7))){
var inst_59460 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
var statearr_59480_61149 = state_59478__$1;
(statearr_59480_61149[(2)] = inst_59460);

(statearr_59480_61149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (1))){
var inst_59454 = cljs.core.seq(coll);
var inst_59455 = inst_59454;
var state_59478__$1 = (function (){var statearr_59484 = state_59478;
(statearr_59484[(7)] = inst_59455);

return statearr_59484;
})();
var statearr_59485_61152 = state_59478__$1;
(statearr_59485_61152[(2)] = null);

(statearr_59485_61152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (4))){
var inst_59455 = (state_59478[(7)]);
var inst_59458 = cljs.core.first(inst_59455);
var state_59478__$1 = state_59478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59478__$1,(7),ch,inst_59458);
} else {
if((state_val_59479 === (13))){
var inst_59472 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
var statearr_59490_61154 = state_59478__$1;
(statearr_59490_61154[(2)] = inst_59472);

(statearr_59490_61154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (6))){
var inst_59463 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
if(cljs.core.truth_(inst_59463)){
var statearr_59492_61157 = state_59478__$1;
(statearr_59492_61157[(1)] = (8));

} else {
var statearr_59493_61158 = state_59478__$1;
(statearr_59493_61158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (3))){
var inst_59476 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59478__$1,inst_59476);
} else {
if((state_val_59479 === (12))){
var state_59478__$1 = state_59478;
var statearr_59495_61160 = state_59478__$1;
(statearr_59495_61160[(2)] = null);

(statearr_59495_61160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (2))){
var inst_59455 = (state_59478[(7)]);
var state_59478__$1 = state_59478;
if(cljs.core.truth_(inst_59455)){
var statearr_59496_61168 = state_59478__$1;
(statearr_59496_61168[(1)] = (4));

} else {
var statearr_59497_61170 = state_59478__$1;
(statearr_59497_61170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (11))){
var inst_59469 = cljs.core.async.close_BANG_(ch);
var state_59478__$1 = state_59478;
var statearr_59498_61172 = state_59478__$1;
(statearr_59498_61172[(2)] = inst_59469);

(statearr_59498_61172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (9))){
var state_59478__$1 = state_59478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59499_61173 = state_59478__$1;
(statearr_59499_61173[(1)] = (11));

} else {
var statearr_59501_61174 = state_59478__$1;
(statearr_59501_61174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (5))){
var inst_59455 = (state_59478[(7)]);
var state_59478__$1 = state_59478;
var statearr_59508_61176 = state_59478__$1;
(statearr_59508_61176[(2)] = inst_59455);

(statearr_59508_61176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (10))){
var inst_59474 = (state_59478[(2)]);
var state_59478__$1 = state_59478;
var statearr_59509_61177 = state_59478__$1;
(statearr_59509_61177[(2)] = inst_59474);

(statearr_59509_61177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59479 === (8))){
var inst_59455 = (state_59478[(7)]);
var inst_59465 = cljs.core.next(inst_59455);
var inst_59455__$1 = inst_59465;
var state_59478__$1 = (function (){var statearr_59518 = state_59478;
(statearr_59518[(7)] = inst_59455__$1);

return statearr_59518;
})();
var statearr_59519_61178 = state_59478__$1;
(statearr_59519_61178[(2)] = null);

(statearr_59519_61178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_59520 = [null,null,null,null,null,null,null,null];
(statearr_59520[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_59520[(1)] = (1));

return statearr_59520;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_59478){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59478);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59524){var ex__58317__auto__ = e59524;
var statearr_59525_61179 = state_59478;
(statearr_59525_61179[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59478[(4)]))){
var statearr_59526_61180 = state_59478;
(statearr_59526_61180[(1)] = cljs.core.first((state_59478[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61181 = state_59478;
state_59478 = G__61181;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_59478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_59478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59536 = f__58719__auto__();
(statearr_59536[(6)] = c__58718__auto__);

return statearr_59536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));

return c__58718__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__59554 = arguments.length;
switch (G__59554) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_61189 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_61189(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61191 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_61191(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61193 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_61193(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61194 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_61194(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59582 = (function (ch,cs,meta59583){
this.ch = ch;
this.cs = cs;
this.meta59583 = meta59583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59584,meta59583__$1){
var self__ = this;
var _59584__$1 = this;
return (new cljs.core.async.t_cljs$core$async59582(self__.ch,self__.cs,meta59583__$1));
}));

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59584){
var self__ = this;
var _59584__$1 = this;
return self__.meta59583;
}));

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59583","meta59583",-1519479439,null)], null);
}));

(cljs.core.async.t_cljs$core$async59582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59582");

(cljs.core.async.t_cljs$core$async59582.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59582.
 */
cljs.core.async.__GT_t_cljs$core$async59582 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59582(ch__$1,cs__$1,meta59583){
return (new cljs.core.async.t_cljs$core$async59582(ch__$1,cs__$1,meta59583));
});

}

return (new cljs.core.async.t_cljs$core$async59582(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__58718__auto___61200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_59717){
var state_val_59718 = (state_59717[(1)]);
if((state_val_59718 === (7))){
var inst_59713 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59719_61201 = state_59717__$1;
(statearr_59719_61201[(2)] = inst_59713);

(statearr_59719_61201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (20))){
var inst_59618 = (state_59717[(7)]);
var inst_59630 = cljs.core.first(inst_59618);
var inst_59631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59630,(0),null);
var inst_59632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59630,(1),null);
var state_59717__$1 = (function (){var statearr_59720 = state_59717;
(statearr_59720[(8)] = inst_59631);

return statearr_59720;
})();
if(cljs.core.truth_(inst_59632)){
var statearr_59721_61202 = state_59717__$1;
(statearr_59721_61202[(1)] = (22));

} else {
var statearr_59722_61203 = state_59717__$1;
(statearr_59722_61203[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (27))){
var inst_59660 = (state_59717[(9)]);
var inst_59662 = (state_59717[(10)]);
var inst_59587 = (state_59717[(11)]);
var inst_59667 = (state_59717[(12)]);
var inst_59667__$1 = cljs.core._nth(inst_59660,inst_59662);
var inst_59668 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59667__$1,inst_59587,done);
var state_59717__$1 = (function (){var statearr_59723 = state_59717;
(statearr_59723[(12)] = inst_59667__$1);

return statearr_59723;
})();
if(cljs.core.truth_(inst_59668)){
var statearr_59724_61205 = state_59717__$1;
(statearr_59724_61205[(1)] = (30));

} else {
var statearr_59725_61207 = state_59717__$1;
(statearr_59725_61207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (1))){
var state_59717__$1 = state_59717;
var statearr_59726_61208 = state_59717__$1;
(statearr_59726_61208[(2)] = null);

(statearr_59726_61208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (24))){
var inst_59618 = (state_59717[(7)]);
var inst_59637 = (state_59717[(2)]);
var inst_59638 = cljs.core.next(inst_59618);
var inst_59596 = inst_59638;
var inst_59597 = null;
var inst_59598 = (0);
var inst_59599 = (0);
var state_59717__$1 = (function (){var statearr_59727 = state_59717;
(statearr_59727[(13)] = inst_59637);

(statearr_59727[(14)] = inst_59598);

(statearr_59727[(15)] = inst_59597);

(statearr_59727[(16)] = inst_59599);

(statearr_59727[(17)] = inst_59596);

return statearr_59727;
})();
var statearr_59728_61210 = state_59717__$1;
(statearr_59728_61210[(2)] = null);

(statearr_59728_61210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (39))){
var state_59717__$1 = state_59717;
var statearr_59735_61211 = state_59717__$1;
(statearr_59735_61211[(2)] = null);

(statearr_59735_61211[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (4))){
var inst_59587 = (state_59717[(11)]);
var inst_59587__$1 = (state_59717[(2)]);
var inst_59588 = (inst_59587__$1 == null);
var state_59717__$1 = (function (){var statearr_59736 = state_59717;
(statearr_59736[(11)] = inst_59587__$1);

return statearr_59736;
})();
if(cljs.core.truth_(inst_59588)){
var statearr_59737_61215 = state_59717__$1;
(statearr_59737_61215[(1)] = (5));

} else {
var statearr_59738_61217 = state_59717__$1;
(statearr_59738_61217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (15))){
var inst_59598 = (state_59717[(14)]);
var inst_59597 = (state_59717[(15)]);
var inst_59599 = (state_59717[(16)]);
var inst_59596 = (state_59717[(17)]);
var inst_59614 = (state_59717[(2)]);
var inst_59615 = (inst_59599 + (1));
var tmp59730 = inst_59598;
var tmp59731 = inst_59597;
var tmp59732 = inst_59596;
var inst_59596__$1 = tmp59732;
var inst_59597__$1 = tmp59731;
var inst_59598__$1 = tmp59730;
var inst_59599__$1 = inst_59615;
var state_59717__$1 = (function (){var statearr_59739 = state_59717;
(statearr_59739[(14)] = inst_59598__$1);

(statearr_59739[(15)] = inst_59597__$1);

(statearr_59739[(16)] = inst_59599__$1);

(statearr_59739[(18)] = inst_59614);

(statearr_59739[(17)] = inst_59596__$1);

return statearr_59739;
})();
var statearr_59740_61220 = state_59717__$1;
(statearr_59740_61220[(2)] = null);

(statearr_59740_61220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (21))){
var inst_59641 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59744_61223 = state_59717__$1;
(statearr_59744_61223[(2)] = inst_59641);

(statearr_59744_61223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (31))){
var inst_59667 = (state_59717[(12)]);
var inst_59671 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59667);
var state_59717__$1 = state_59717;
var statearr_59745_61226 = state_59717__$1;
(statearr_59745_61226[(2)] = inst_59671);

(statearr_59745_61226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (32))){
var inst_59660 = (state_59717[(9)]);
var inst_59659 = (state_59717[(19)]);
var inst_59662 = (state_59717[(10)]);
var inst_59661 = (state_59717[(20)]);
var inst_59673 = (state_59717[(2)]);
var inst_59674 = (inst_59662 + (1));
var tmp59741 = inst_59660;
var tmp59742 = inst_59659;
var tmp59743 = inst_59661;
var inst_59659__$1 = tmp59742;
var inst_59660__$1 = tmp59741;
var inst_59661__$1 = tmp59743;
var inst_59662__$1 = inst_59674;
var state_59717__$1 = (function (){var statearr_59746 = state_59717;
(statearr_59746[(9)] = inst_59660__$1);

(statearr_59746[(19)] = inst_59659__$1);

(statearr_59746[(10)] = inst_59662__$1);

(statearr_59746[(20)] = inst_59661__$1);

(statearr_59746[(21)] = inst_59673);

return statearr_59746;
})();
var statearr_59747_61233 = state_59717__$1;
(statearr_59747_61233[(2)] = null);

(statearr_59747_61233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (40))){
var inst_59686 = (state_59717[(22)]);
var inst_59690 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59686);
var state_59717__$1 = state_59717;
var statearr_59748_61234 = state_59717__$1;
(statearr_59748_61234[(2)] = inst_59690);

(statearr_59748_61234[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (33))){
var inst_59677 = (state_59717[(23)]);
var inst_59679 = cljs.core.chunked_seq_QMARK_(inst_59677);
var state_59717__$1 = state_59717;
if(inst_59679){
var statearr_59750_61237 = state_59717__$1;
(statearr_59750_61237[(1)] = (36));

} else {
var statearr_59751_61238 = state_59717__$1;
(statearr_59751_61238[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (13))){
var inst_59608 = (state_59717[(24)]);
var inst_59611 = cljs.core.async.close_BANG_(inst_59608);
var state_59717__$1 = state_59717;
var statearr_59752_61239 = state_59717__$1;
(statearr_59752_61239[(2)] = inst_59611);

(statearr_59752_61239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (22))){
var inst_59631 = (state_59717[(8)]);
var inst_59634 = cljs.core.async.close_BANG_(inst_59631);
var state_59717__$1 = state_59717;
var statearr_59753_61240 = state_59717__$1;
(statearr_59753_61240[(2)] = inst_59634);

(statearr_59753_61240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (36))){
var inst_59677 = (state_59717[(23)]);
var inst_59681 = cljs.core.chunk_first(inst_59677);
var inst_59682 = cljs.core.chunk_rest(inst_59677);
var inst_59683 = cljs.core.count(inst_59681);
var inst_59659 = inst_59682;
var inst_59660 = inst_59681;
var inst_59661 = inst_59683;
var inst_59662 = (0);
var state_59717__$1 = (function (){var statearr_59754 = state_59717;
(statearr_59754[(9)] = inst_59660);

(statearr_59754[(19)] = inst_59659);

(statearr_59754[(10)] = inst_59662);

(statearr_59754[(20)] = inst_59661);

return statearr_59754;
})();
var statearr_59755_61245 = state_59717__$1;
(statearr_59755_61245[(2)] = null);

(statearr_59755_61245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (41))){
var inst_59677 = (state_59717[(23)]);
var inst_59692 = (state_59717[(2)]);
var inst_59693 = cljs.core.next(inst_59677);
var inst_59659 = inst_59693;
var inst_59660 = null;
var inst_59661 = (0);
var inst_59662 = (0);
var state_59717__$1 = (function (){var statearr_59756 = state_59717;
(statearr_59756[(9)] = inst_59660);

(statearr_59756[(19)] = inst_59659);

(statearr_59756[(25)] = inst_59692);

(statearr_59756[(10)] = inst_59662);

(statearr_59756[(20)] = inst_59661);

return statearr_59756;
})();
var statearr_59757_61246 = state_59717__$1;
(statearr_59757_61246[(2)] = null);

(statearr_59757_61246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (43))){
var state_59717__$1 = state_59717;
var statearr_59760_61247 = state_59717__$1;
(statearr_59760_61247[(2)] = null);

(statearr_59760_61247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (29))){
var inst_59701 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59765_61251 = state_59717__$1;
(statearr_59765_61251[(2)] = inst_59701);

(statearr_59765_61251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (44))){
var inst_59710 = (state_59717[(2)]);
var state_59717__$1 = (function (){var statearr_59771 = state_59717;
(statearr_59771[(26)] = inst_59710);

return statearr_59771;
})();
var statearr_59777_61255 = state_59717__$1;
(statearr_59777_61255[(2)] = null);

(statearr_59777_61255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (6))){
var inst_59651 = (state_59717[(27)]);
var inst_59650 = cljs.core.deref(cs);
var inst_59651__$1 = cljs.core.keys(inst_59650);
var inst_59652 = cljs.core.count(inst_59651__$1);
var inst_59653 = cljs.core.reset_BANG_(dctr,inst_59652);
var inst_59658 = cljs.core.seq(inst_59651__$1);
var inst_59659 = inst_59658;
var inst_59660 = null;
var inst_59661 = (0);
var inst_59662 = (0);
var state_59717__$1 = (function (){var statearr_59780 = state_59717;
(statearr_59780[(9)] = inst_59660);

(statearr_59780[(19)] = inst_59659);

(statearr_59780[(10)] = inst_59662);

(statearr_59780[(28)] = inst_59653);

(statearr_59780[(20)] = inst_59661);

(statearr_59780[(27)] = inst_59651__$1);

return statearr_59780;
})();
var statearr_59781_61256 = state_59717__$1;
(statearr_59781_61256[(2)] = null);

(statearr_59781_61256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (28))){
var inst_59659 = (state_59717[(19)]);
var inst_59677 = (state_59717[(23)]);
var inst_59677__$1 = cljs.core.seq(inst_59659);
var state_59717__$1 = (function (){var statearr_59782 = state_59717;
(statearr_59782[(23)] = inst_59677__$1);

return statearr_59782;
})();
if(inst_59677__$1){
var statearr_59784_61257 = state_59717__$1;
(statearr_59784_61257[(1)] = (33));

} else {
var statearr_59785_61258 = state_59717__$1;
(statearr_59785_61258[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (25))){
var inst_59662 = (state_59717[(10)]);
var inst_59661 = (state_59717[(20)]);
var inst_59664 = (inst_59662 < inst_59661);
var inst_59665 = inst_59664;
var state_59717__$1 = state_59717;
if(cljs.core.truth_(inst_59665)){
var statearr_59789_61259 = state_59717__$1;
(statearr_59789_61259[(1)] = (27));

} else {
var statearr_59790_61260 = state_59717__$1;
(statearr_59790_61260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (34))){
var state_59717__$1 = state_59717;
var statearr_59791_61263 = state_59717__$1;
(statearr_59791_61263[(2)] = null);

(statearr_59791_61263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (17))){
var state_59717__$1 = state_59717;
var statearr_59792_61265 = state_59717__$1;
(statearr_59792_61265[(2)] = null);

(statearr_59792_61265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (3))){
var inst_59715 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59717__$1,inst_59715);
} else {
if((state_val_59718 === (12))){
var inst_59646 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59793_61268 = state_59717__$1;
(statearr_59793_61268[(2)] = inst_59646);

(statearr_59793_61268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (2))){
var state_59717__$1 = state_59717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59717__$1,(4),ch);
} else {
if((state_val_59718 === (23))){
var state_59717__$1 = state_59717;
var statearr_59800_61276 = state_59717__$1;
(statearr_59800_61276[(2)] = null);

(statearr_59800_61276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (35))){
var inst_59699 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59802_61277 = state_59717__$1;
(statearr_59802_61277[(2)] = inst_59699);

(statearr_59802_61277[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (19))){
var inst_59618 = (state_59717[(7)]);
var inst_59622 = cljs.core.chunk_first(inst_59618);
var inst_59623 = cljs.core.chunk_rest(inst_59618);
var inst_59624 = cljs.core.count(inst_59622);
var inst_59596 = inst_59623;
var inst_59597 = inst_59622;
var inst_59598 = inst_59624;
var inst_59599 = (0);
var state_59717__$1 = (function (){var statearr_59805 = state_59717;
(statearr_59805[(14)] = inst_59598);

(statearr_59805[(15)] = inst_59597);

(statearr_59805[(16)] = inst_59599);

(statearr_59805[(17)] = inst_59596);

return statearr_59805;
})();
var statearr_59806_61284 = state_59717__$1;
(statearr_59806_61284[(2)] = null);

(statearr_59806_61284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (11))){
var inst_59618 = (state_59717[(7)]);
var inst_59596 = (state_59717[(17)]);
var inst_59618__$1 = cljs.core.seq(inst_59596);
var state_59717__$1 = (function (){var statearr_59811 = state_59717;
(statearr_59811[(7)] = inst_59618__$1);

return statearr_59811;
})();
if(inst_59618__$1){
var statearr_59813_61286 = state_59717__$1;
(statearr_59813_61286[(1)] = (16));

} else {
var statearr_59816_61287 = state_59717__$1;
(statearr_59816_61287[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (9))){
var inst_59648 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59817_61291 = state_59717__$1;
(statearr_59817_61291[(2)] = inst_59648);

(statearr_59817_61291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (5))){
var inst_59594 = cljs.core.deref(cs);
var inst_59595 = cljs.core.seq(inst_59594);
var inst_59596 = inst_59595;
var inst_59597 = null;
var inst_59598 = (0);
var inst_59599 = (0);
var state_59717__$1 = (function (){var statearr_59820 = state_59717;
(statearr_59820[(14)] = inst_59598);

(statearr_59820[(15)] = inst_59597);

(statearr_59820[(16)] = inst_59599);

(statearr_59820[(17)] = inst_59596);

return statearr_59820;
})();
var statearr_59822_61292 = state_59717__$1;
(statearr_59822_61292[(2)] = null);

(statearr_59822_61292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (14))){
var state_59717__$1 = state_59717;
var statearr_59830_61293 = state_59717__$1;
(statearr_59830_61293[(2)] = null);

(statearr_59830_61293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (45))){
var inst_59707 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59833_61298 = state_59717__$1;
(statearr_59833_61298[(2)] = inst_59707);

(statearr_59833_61298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (26))){
var inst_59651 = (state_59717[(27)]);
var inst_59703 = (state_59717[(2)]);
var inst_59704 = cljs.core.seq(inst_59651);
var state_59717__$1 = (function (){var statearr_59835 = state_59717;
(statearr_59835[(29)] = inst_59703);

return statearr_59835;
})();
if(inst_59704){
var statearr_59836_61303 = state_59717__$1;
(statearr_59836_61303[(1)] = (42));

} else {
var statearr_59837_61308 = state_59717__$1;
(statearr_59837_61308[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (16))){
var inst_59618 = (state_59717[(7)]);
var inst_59620 = cljs.core.chunked_seq_QMARK_(inst_59618);
var state_59717__$1 = state_59717;
if(inst_59620){
var statearr_59838_61313 = state_59717__$1;
(statearr_59838_61313[(1)] = (19));

} else {
var statearr_59840_61314 = state_59717__$1;
(statearr_59840_61314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (38))){
var inst_59696 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59842_61315 = state_59717__$1;
(statearr_59842_61315[(2)] = inst_59696);

(statearr_59842_61315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (30))){
var state_59717__$1 = state_59717;
var statearr_59845_61319 = state_59717__$1;
(statearr_59845_61319[(2)] = null);

(statearr_59845_61319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (10))){
var inst_59597 = (state_59717[(15)]);
var inst_59599 = (state_59717[(16)]);
var inst_59607 = cljs.core._nth(inst_59597,inst_59599);
var inst_59608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59607,(0),null);
var inst_59609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59607,(1),null);
var state_59717__$1 = (function (){var statearr_59847 = state_59717;
(statearr_59847[(24)] = inst_59608);

return statearr_59847;
})();
if(cljs.core.truth_(inst_59609)){
var statearr_59848_61323 = state_59717__$1;
(statearr_59848_61323[(1)] = (13));

} else {
var statearr_59850_61324 = state_59717__$1;
(statearr_59850_61324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (18))){
var inst_59644 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59854_61326 = state_59717__$1;
(statearr_59854_61326[(2)] = inst_59644);

(statearr_59854_61326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (42))){
var state_59717__$1 = state_59717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59717__$1,(45),dchan);
} else {
if((state_val_59718 === (37))){
var inst_59677 = (state_59717[(23)]);
var inst_59587 = (state_59717[(11)]);
var inst_59686 = (state_59717[(22)]);
var inst_59686__$1 = cljs.core.first(inst_59677);
var inst_59687 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59686__$1,inst_59587,done);
var state_59717__$1 = (function (){var statearr_59856 = state_59717;
(statearr_59856[(22)] = inst_59686__$1);

return statearr_59856;
})();
if(cljs.core.truth_(inst_59687)){
var statearr_59857_61333 = state_59717__$1;
(statearr_59857_61333[(1)] = (39));

} else {
var statearr_59858_61334 = state_59717__$1;
(statearr_59858_61334[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (8))){
var inst_59598 = (state_59717[(14)]);
var inst_59599 = (state_59717[(16)]);
var inst_59601 = (inst_59599 < inst_59598);
var inst_59602 = inst_59601;
var state_59717__$1 = state_59717;
if(cljs.core.truth_(inst_59602)){
var statearr_59861_61335 = state_59717__$1;
(statearr_59861_61335[(1)] = (10));

} else {
var statearr_59864_61336 = state_59717__$1;
(statearr_59864_61336[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__58314__auto__ = null;
var cljs$core$async$mult_$_state_machine__58314__auto____0 = (function (){
var statearr_59865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59865[(0)] = cljs$core$async$mult_$_state_machine__58314__auto__);

(statearr_59865[(1)] = (1));

return statearr_59865;
});
var cljs$core$async$mult_$_state_machine__58314__auto____1 = (function (state_59717){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_59717);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e59866){var ex__58317__auto__ = e59866;
var statearr_59867_61337 = state_59717;
(statearr_59867_61337[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_59717[(4)]))){
var statearr_59868_61340 = state_59717;
(statearr_59868_61340[(1)] = cljs.core.first((state_59717[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61342 = state_59717;
state_59717 = G__61342;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58314__auto__ = function(state_59717){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58314__auto____1.call(this,state_59717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58314__auto____0;
cljs$core$async$mult_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58314__auto____1;
return cljs$core$async$mult_$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_59870 = f__58719__auto__();
(statearr_59870[(6)] = c__58718__auto___61200);

return statearr_59870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__59872 = arguments.length;
switch (G__59872) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_61347 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_61347(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61351 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_61351(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61352 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61352(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61356 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_61356(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61362 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61362(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61371 = arguments.length;
var i__4737__auto___61372 = (0);
while(true){
if((i__4737__auto___61372 < len__4736__auto___61371)){
args__4742__auto__.push((arguments[i__4737__auto___61372]));

var G__61373 = (i__4737__auto___61372 + (1));
i__4737__auto___61372 = G__61373;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59897){
var map__59898 = p__59897;
var map__59898__$1 = (((((!((map__59898 == null))))?(((((map__59898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59898):map__59898);
var opts = map__59898__$1;
var statearr_59900_61375 = state;
(statearr_59900_61375[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59901_61376 = state;
(statearr_59901_61376[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_59902_61381 = state;
(statearr_59902_61381[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59889){
var G__59890 = cljs.core.first(seq59889);
var seq59889__$1 = cljs.core.next(seq59889);
var G__59891 = cljs.core.first(seq59889__$1);
var seq59889__$2 = cljs.core.next(seq59889__$1);
var G__59892 = cljs.core.first(seq59889__$2);
var seq59889__$3 = cljs.core.next(seq59889__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59890,G__59891,G__59892,seq59889__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59903 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59904){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59904 = meta59904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59905,meta59904__$1){
var self__ = this;
var _59905__$1 = this;
return (new cljs.core.async.t_cljs$core$async59903(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59904__$1));
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59905){
var self__ = this;
var _59905__$1 = this;
return self__.meta59904;
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59903.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59904","meta59904",-1456770335,null)], null);
}));

(cljs.core.async.t_cljs$core$async59903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59903");

(cljs.core.async.t_cljs$core$async59903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59903.
 */
cljs.core.async.__GT_t_cljs$core$async59903 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59903(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59904){
return (new cljs.core.async.t_cljs$core$async59903(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59904));
});

}

return (new cljs.core.async.t_cljs$core$async59903(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58718__auto___61420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60007){
var state_val_60008 = (state_60007[(1)]);
if((state_val_60008 === (7))){
var inst_59922 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
var statearr_60009_61421 = state_60007__$1;
(statearr_60009_61421[(2)] = inst_59922);

(statearr_60009_61421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (20))){
var inst_59934 = (state_60007[(7)]);
var state_60007__$1 = state_60007;
var statearr_60010_61422 = state_60007__$1;
(statearr_60010_61422[(2)] = inst_59934);

(statearr_60010_61422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (27))){
var state_60007__$1 = state_60007;
var statearr_60011_61426 = state_60007__$1;
(statearr_60011_61426[(2)] = null);

(statearr_60011_61426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (1))){
var inst_59909 = (state_60007[(8)]);
var inst_59909__$1 = calc_state();
var inst_59911 = (inst_59909__$1 == null);
var inst_59912 = cljs.core.not(inst_59911);
var state_60007__$1 = (function (){var statearr_60012 = state_60007;
(statearr_60012[(8)] = inst_59909__$1);

return statearr_60012;
})();
if(inst_59912){
var statearr_60013_61430 = state_60007__$1;
(statearr_60013_61430[(1)] = (2));

} else {
var statearr_60014_61431 = state_60007__$1;
(statearr_60014_61431[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (24))){
var inst_59967 = (state_60007[(9)]);
var inst_59958 = (state_60007[(10)]);
var inst_59981 = (state_60007[(11)]);
var inst_59981__$1 = (inst_59958.cljs$core$IFn$_invoke$arity$1 ? inst_59958.cljs$core$IFn$_invoke$arity$1(inst_59967) : inst_59958.call(null,inst_59967));
var state_60007__$1 = (function (){var statearr_60015 = state_60007;
(statearr_60015[(11)] = inst_59981__$1);

return statearr_60015;
})();
if(cljs.core.truth_(inst_59981__$1)){
var statearr_60016_61434 = state_60007__$1;
(statearr_60016_61434[(1)] = (29));

} else {
var statearr_60017_61435 = state_60007__$1;
(statearr_60017_61435[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (4))){
var inst_59925 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59925)){
var statearr_60018_61436 = state_60007__$1;
(statearr_60018_61436[(1)] = (8));

} else {
var statearr_60019_61437 = state_60007__$1;
(statearr_60019_61437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (15))){
var inst_59952 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59952)){
var statearr_60020_61438 = state_60007__$1;
(statearr_60020_61438[(1)] = (19));

} else {
var statearr_60021_61439 = state_60007__$1;
(statearr_60021_61439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (21))){
var inst_59957 = (state_60007[(12)]);
var inst_59957__$1 = (state_60007[(2)]);
var inst_59958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59957__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59957__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59957__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60007__$1 = (function (){var statearr_60022 = state_60007;
(statearr_60022[(13)] = inst_59959);

(statearr_60022[(10)] = inst_59958);

(statearr_60022[(12)] = inst_59957__$1);

return statearr_60022;
})();
return cljs.core.async.ioc_alts_BANG_(state_60007__$1,(22),inst_59960);
} else {
if((state_val_60008 === (31))){
var inst_59989 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59989)){
var statearr_60023_61444 = state_60007__$1;
(statearr_60023_61444[(1)] = (32));

} else {
var statearr_60024_61445 = state_60007__$1;
(statearr_60024_61445[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (32))){
var inst_59966 = (state_60007[(14)]);
var state_60007__$1 = state_60007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60007__$1,(35),out,inst_59966);
} else {
if((state_val_60008 === (33))){
var inst_59957 = (state_60007[(12)]);
var inst_59934 = inst_59957;
var state_60007__$1 = (function (){var statearr_60025 = state_60007;
(statearr_60025[(7)] = inst_59934);

return statearr_60025;
})();
var statearr_60026_61447 = state_60007__$1;
(statearr_60026_61447[(2)] = null);

(statearr_60026_61447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (13))){
var inst_59934 = (state_60007[(7)]);
var inst_59941 = inst_59934.cljs$lang$protocol_mask$partition0$;
var inst_59942 = (inst_59941 & (64));
var inst_59943 = inst_59934.cljs$core$ISeq$;
var inst_59944 = (cljs.core.PROTOCOL_SENTINEL === inst_59943);
var inst_59945 = ((inst_59942) || (inst_59944));
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59945)){
var statearr_60027_61449 = state_60007__$1;
(statearr_60027_61449[(1)] = (16));

} else {
var statearr_60028_61450 = state_60007__$1;
(statearr_60028_61450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (22))){
var inst_59966 = (state_60007[(14)]);
var inst_59967 = (state_60007[(9)]);
var inst_59965 = (state_60007[(2)]);
var inst_59966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59965,(0),null);
var inst_59967__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59965,(1),null);
var inst_59968 = (inst_59966__$1 == null);
var inst_59969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59967__$1,change);
var inst_59970 = ((inst_59968) || (inst_59969));
var state_60007__$1 = (function (){var statearr_60029 = state_60007;
(statearr_60029[(14)] = inst_59966__$1);

(statearr_60029[(9)] = inst_59967__$1);

return statearr_60029;
})();
if(cljs.core.truth_(inst_59970)){
var statearr_60030_61452 = state_60007__$1;
(statearr_60030_61452[(1)] = (23));

} else {
var statearr_60031_61453 = state_60007__$1;
(statearr_60031_61453[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (36))){
var inst_59957 = (state_60007[(12)]);
var inst_59934 = inst_59957;
var state_60007__$1 = (function (){var statearr_60032 = state_60007;
(statearr_60032[(7)] = inst_59934);

return statearr_60032;
})();
var statearr_60033_61454 = state_60007__$1;
(statearr_60033_61454[(2)] = null);

(statearr_60033_61454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (29))){
var inst_59981 = (state_60007[(11)]);
var state_60007__$1 = state_60007;
var statearr_60034_61455 = state_60007__$1;
(statearr_60034_61455[(2)] = inst_59981);

(statearr_60034_61455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (6))){
var state_60007__$1 = state_60007;
var statearr_60035_61456 = state_60007__$1;
(statearr_60035_61456[(2)] = false);

(statearr_60035_61456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (28))){
var inst_59977 = (state_60007[(2)]);
var inst_59978 = calc_state();
var inst_59934 = inst_59978;
var state_60007__$1 = (function (){var statearr_60036 = state_60007;
(statearr_60036[(7)] = inst_59934);

(statearr_60036[(15)] = inst_59977);

return statearr_60036;
})();
var statearr_60037_61461 = state_60007__$1;
(statearr_60037_61461[(2)] = null);

(statearr_60037_61461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (25))){
var inst_60003 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
var statearr_60038_61463 = state_60007__$1;
(statearr_60038_61463[(2)] = inst_60003);

(statearr_60038_61463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (34))){
var inst_60001 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
var statearr_60039_61464 = state_60007__$1;
(statearr_60039_61464[(2)] = inst_60001);

(statearr_60039_61464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (17))){
var state_60007__$1 = state_60007;
var statearr_60040_61466 = state_60007__$1;
(statearr_60040_61466[(2)] = false);

(statearr_60040_61466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (3))){
var state_60007__$1 = state_60007;
var statearr_60041_61467 = state_60007__$1;
(statearr_60041_61467[(2)] = false);

(statearr_60041_61467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (12))){
var inst_60005 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60007__$1,inst_60005);
} else {
if((state_val_60008 === (2))){
var inst_59909 = (state_60007[(8)]);
var inst_59914 = inst_59909.cljs$lang$protocol_mask$partition0$;
var inst_59915 = (inst_59914 & (64));
var inst_59916 = inst_59909.cljs$core$ISeq$;
var inst_59917 = (cljs.core.PROTOCOL_SENTINEL === inst_59916);
var inst_59918 = ((inst_59915) || (inst_59917));
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59918)){
var statearr_60042_61471 = state_60007__$1;
(statearr_60042_61471[(1)] = (5));

} else {
var statearr_60043_61472 = state_60007__$1;
(statearr_60043_61472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (23))){
var inst_59966 = (state_60007[(14)]);
var inst_59972 = (inst_59966 == null);
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59972)){
var statearr_60044_61473 = state_60007__$1;
(statearr_60044_61473[(1)] = (26));

} else {
var statearr_60045_61474 = state_60007__$1;
(statearr_60045_61474[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (35))){
var inst_59992 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
if(cljs.core.truth_(inst_59992)){
var statearr_60046_61476 = state_60007__$1;
(statearr_60046_61476[(1)] = (36));

} else {
var statearr_60047_61477 = state_60007__$1;
(statearr_60047_61477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (19))){
var inst_59934 = (state_60007[(7)]);
var inst_59954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59934);
var state_60007__$1 = state_60007;
var statearr_60048_61481 = state_60007__$1;
(statearr_60048_61481[(2)] = inst_59954);

(statearr_60048_61481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (11))){
var inst_59934 = (state_60007[(7)]);
var inst_59938 = (inst_59934 == null);
var inst_59939 = cljs.core.not(inst_59938);
var state_60007__$1 = state_60007;
if(inst_59939){
var statearr_60049_61482 = state_60007__$1;
(statearr_60049_61482[(1)] = (13));

} else {
var statearr_60050_61483 = state_60007__$1;
(statearr_60050_61483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (9))){
var inst_59909 = (state_60007[(8)]);
var state_60007__$1 = state_60007;
var statearr_60051_61484 = state_60007__$1;
(statearr_60051_61484[(2)] = inst_59909);

(statearr_60051_61484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (5))){
var state_60007__$1 = state_60007;
var statearr_60052_61485 = state_60007__$1;
(statearr_60052_61485[(2)] = true);

(statearr_60052_61485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (14))){
var state_60007__$1 = state_60007;
var statearr_60053_61486 = state_60007__$1;
(statearr_60053_61486[(2)] = false);

(statearr_60053_61486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (26))){
var inst_59967 = (state_60007[(9)]);
var inst_59974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59967);
var state_60007__$1 = state_60007;
var statearr_60054_61487 = state_60007__$1;
(statearr_60054_61487[(2)] = inst_59974);

(statearr_60054_61487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (16))){
var state_60007__$1 = state_60007;
var statearr_60055_61488 = state_60007__$1;
(statearr_60055_61488[(2)] = true);

(statearr_60055_61488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (38))){
var inst_59997 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
var statearr_60056_61489 = state_60007__$1;
(statearr_60056_61489[(2)] = inst_59997);

(statearr_60056_61489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (30))){
var inst_59967 = (state_60007[(9)]);
var inst_59959 = (state_60007[(13)]);
var inst_59958 = (state_60007[(10)]);
var inst_59984 = cljs.core.empty_QMARK_(inst_59958);
var inst_59985 = (inst_59959.cljs$core$IFn$_invoke$arity$1 ? inst_59959.cljs$core$IFn$_invoke$arity$1(inst_59967) : inst_59959.call(null,inst_59967));
var inst_59986 = cljs.core.not(inst_59985);
var inst_59987 = ((inst_59984) && (inst_59986));
var state_60007__$1 = state_60007;
var statearr_60057_61490 = state_60007__$1;
(statearr_60057_61490[(2)] = inst_59987);

(statearr_60057_61490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (10))){
var inst_59909 = (state_60007[(8)]);
var inst_59930 = (state_60007[(2)]);
var inst_59931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59930,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59930,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59930,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59934 = inst_59909;
var state_60007__$1 = (function (){var statearr_60058 = state_60007;
(statearr_60058[(7)] = inst_59934);

(statearr_60058[(16)] = inst_59933);

(statearr_60058[(17)] = inst_59932);

(statearr_60058[(18)] = inst_59931);

return statearr_60058;
})();
var statearr_60059_61491 = state_60007__$1;
(statearr_60059_61491[(2)] = null);

(statearr_60059_61491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (18))){
var inst_59949 = (state_60007[(2)]);
var state_60007__$1 = state_60007;
var statearr_60060_61492 = state_60007__$1;
(statearr_60060_61492[(2)] = inst_59949);

(statearr_60060_61492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (37))){
var state_60007__$1 = state_60007;
var statearr_60061_61496 = state_60007__$1;
(statearr_60061_61496[(2)] = null);

(statearr_60061_61496[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60008 === (8))){
var inst_59909 = (state_60007[(8)]);
var inst_59927 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59909);
var state_60007__$1 = state_60007;
var statearr_60062_61497 = state_60007__$1;
(statearr_60062_61497[(2)] = inst_59927);

(statearr_60062_61497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__58314__auto__ = null;
var cljs$core$async$mix_$_state_machine__58314__auto____0 = (function (){
var statearr_60063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60063[(0)] = cljs$core$async$mix_$_state_machine__58314__auto__);

(statearr_60063[(1)] = (1));

return statearr_60063;
});
var cljs$core$async$mix_$_state_machine__58314__auto____1 = (function (state_60007){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60007);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60064){var ex__58317__auto__ = e60064;
var statearr_60065_61501 = state_60007;
(statearr_60065_61501[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60007[(4)]))){
var statearr_60066_61502 = state_60007;
(statearr_60066_61502[(1)] = cljs.core.first((state_60007[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61503 = state_60007;
state_60007 = G__61503;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58314__auto__ = function(state_60007){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58314__auto____1.call(this,state_60007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58314__auto____0;
cljs$core$async$mix_$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58314__auto____1;
return cljs$core$async$mix_$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60067 = f__58719__auto__();
(statearr_60067[(6)] = c__58718__auto___61420);

return statearr_60067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_61504 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_61504(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61508 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_61508(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61511 = (function() {
var G__61512 = null;
var G__61512__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__61512__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__61512 = function(p,v){
switch(arguments.length){
case 1:
return G__61512__1.call(this,p);
case 2:
return G__61512__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61512.cljs$core$IFn$_invoke$arity$1 = G__61512__1;
G__61512.cljs$core$IFn$_invoke$arity$2 = G__61512__2;
return G__61512;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__60069 = arguments.length;
switch (G__60069) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61511(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61511(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__60072 = arguments.length;
switch (G__60072) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__60070_SHARP_){
if(cljs.core.truth_((p1__60070_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60070_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__60070_SHARP_.call(null,topic)))){
return p1__60070_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60070_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60073 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60074){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60074 = meta60074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60075,meta60074__$1){
var self__ = this;
var _60075__$1 = this;
return (new cljs.core.async.t_cljs$core$async60073(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60074__$1));
}));

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60075){
var self__ = this;
var _60075__$1 = this;
return self__.meta60074;
}));

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async60073.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async60073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60074","meta60074",1908891314,null)], null);
}));

(cljs.core.async.t_cljs$core$async60073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60073");

(cljs.core.async.t_cljs$core$async60073.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60073.
 */
cljs.core.async.__GT_t_cljs$core$async60073 = (function cljs$core$async$__GT_t_cljs$core$async60073(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60074){
return (new cljs.core.async.t_cljs$core$async60073(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60074));
});

}

return (new cljs.core.async.t_cljs$core$async60073(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58718__auto___61536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60147){
var state_val_60148 = (state_60147[(1)]);
if((state_val_60148 === (7))){
var inst_60143 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
var statearr_60149_61537 = state_60147__$1;
(statearr_60149_61537[(2)] = inst_60143);

(statearr_60149_61537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (20))){
var state_60147__$1 = state_60147;
var statearr_60150_61538 = state_60147__$1;
(statearr_60150_61538[(2)] = null);

(statearr_60150_61538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (1))){
var state_60147__$1 = state_60147;
var statearr_60151_61539 = state_60147__$1;
(statearr_60151_61539[(2)] = null);

(statearr_60151_61539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (24))){
var inst_60126 = (state_60147[(7)]);
var inst_60135 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_60126);
var state_60147__$1 = state_60147;
var statearr_60152_61540 = state_60147__$1;
(statearr_60152_61540[(2)] = inst_60135);

(statearr_60152_61540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (4))){
var inst_60078 = (state_60147[(8)]);
var inst_60078__$1 = (state_60147[(2)]);
var inst_60079 = (inst_60078__$1 == null);
var state_60147__$1 = (function (){var statearr_60153 = state_60147;
(statearr_60153[(8)] = inst_60078__$1);

return statearr_60153;
})();
if(cljs.core.truth_(inst_60079)){
var statearr_60154_61543 = state_60147__$1;
(statearr_60154_61543[(1)] = (5));

} else {
var statearr_60155_61544 = state_60147__$1;
(statearr_60155_61544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (15))){
var inst_60120 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
var statearr_60156_61545 = state_60147__$1;
(statearr_60156_61545[(2)] = inst_60120);

(statearr_60156_61545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (21))){
var inst_60140 = (state_60147[(2)]);
var state_60147__$1 = (function (){var statearr_60157 = state_60147;
(statearr_60157[(9)] = inst_60140);

return statearr_60157;
})();
var statearr_60158_61546 = state_60147__$1;
(statearr_60158_61546[(2)] = null);

(statearr_60158_61546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (13))){
var inst_60102 = (state_60147[(10)]);
var inst_60104 = cljs.core.chunked_seq_QMARK_(inst_60102);
var state_60147__$1 = state_60147;
if(inst_60104){
var statearr_60159_61547 = state_60147__$1;
(statearr_60159_61547[(1)] = (16));

} else {
var statearr_60160_61548 = state_60147__$1;
(statearr_60160_61548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (22))){
var inst_60132 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
if(cljs.core.truth_(inst_60132)){
var statearr_60161_61549 = state_60147__$1;
(statearr_60161_61549[(1)] = (23));

} else {
var statearr_60162_61550 = state_60147__$1;
(statearr_60162_61550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (6))){
var inst_60128 = (state_60147[(11)]);
var inst_60126 = (state_60147[(7)]);
var inst_60078 = (state_60147[(8)]);
var inst_60126__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_60078) : topic_fn.call(null,inst_60078));
var inst_60127 = cljs.core.deref(mults);
var inst_60128__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60127,inst_60126__$1);
var state_60147__$1 = (function (){var statearr_60163 = state_60147;
(statearr_60163[(11)] = inst_60128__$1);

(statearr_60163[(7)] = inst_60126__$1);

return statearr_60163;
})();
if(cljs.core.truth_(inst_60128__$1)){
var statearr_60164_61551 = state_60147__$1;
(statearr_60164_61551[(1)] = (19));

} else {
var statearr_60165_61552 = state_60147__$1;
(statearr_60165_61552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (25))){
var inst_60137 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
var statearr_60166_61553 = state_60147__$1;
(statearr_60166_61553[(2)] = inst_60137);

(statearr_60166_61553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (17))){
var inst_60102 = (state_60147[(10)]);
var inst_60111 = cljs.core.first(inst_60102);
var inst_60112 = cljs.core.async.muxch_STAR_(inst_60111);
var inst_60113 = cljs.core.async.close_BANG_(inst_60112);
var inst_60114 = cljs.core.next(inst_60102);
var inst_60088 = inst_60114;
var inst_60089 = null;
var inst_60090 = (0);
var inst_60091 = (0);
var state_60147__$1 = (function (){var statearr_60167 = state_60147;
(statearr_60167[(12)] = inst_60113);

(statearr_60167[(13)] = inst_60088);

(statearr_60167[(14)] = inst_60091);

(statearr_60167[(15)] = inst_60090);

(statearr_60167[(16)] = inst_60089);

return statearr_60167;
})();
var statearr_60168_61554 = state_60147__$1;
(statearr_60168_61554[(2)] = null);

(statearr_60168_61554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (3))){
var inst_60145 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60147__$1,inst_60145);
} else {
if((state_val_60148 === (12))){
var inst_60122 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
var statearr_60169_61555 = state_60147__$1;
(statearr_60169_61555[(2)] = inst_60122);

(statearr_60169_61555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (2))){
var state_60147__$1 = state_60147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60147__$1,(4),ch);
} else {
if((state_val_60148 === (23))){
var state_60147__$1 = state_60147;
var statearr_60170_61556 = state_60147__$1;
(statearr_60170_61556[(2)] = null);

(statearr_60170_61556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (19))){
var inst_60128 = (state_60147[(11)]);
var inst_60078 = (state_60147[(8)]);
var inst_60130 = cljs.core.async.muxch_STAR_(inst_60128);
var state_60147__$1 = state_60147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60147__$1,(22),inst_60130,inst_60078);
} else {
if((state_val_60148 === (11))){
var inst_60088 = (state_60147[(13)]);
var inst_60102 = (state_60147[(10)]);
var inst_60102__$1 = cljs.core.seq(inst_60088);
var state_60147__$1 = (function (){var statearr_60171 = state_60147;
(statearr_60171[(10)] = inst_60102__$1);

return statearr_60171;
})();
if(inst_60102__$1){
var statearr_60172_61559 = state_60147__$1;
(statearr_60172_61559[(1)] = (13));

} else {
var statearr_60173_61560 = state_60147__$1;
(statearr_60173_61560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (9))){
var inst_60124 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
var statearr_60174_61566 = state_60147__$1;
(statearr_60174_61566[(2)] = inst_60124);

(statearr_60174_61566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (5))){
var inst_60085 = cljs.core.deref(mults);
var inst_60086 = cljs.core.vals(inst_60085);
var inst_60087 = cljs.core.seq(inst_60086);
var inst_60088 = inst_60087;
var inst_60089 = null;
var inst_60090 = (0);
var inst_60091 = (0);
var state_60147__$1 = (function (){var statearr_60175 = state_60147;
(statearr_60175[(13)] = inst_60088);

(statearr_60175[(14)] = inst_60091);

(statearr_60175[(15)] = inst_60090);

(statearr_60175[(16)] = inst_60089);

return statearr_60175;
})();
var statearr_60176_61574 = state_60147__$1;
(statearr_60176_61574[(2)] = null);

(statearr_60176_61574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (14))){
var state_60147__$1 = state_60147;
var statearr_60180_61578 = state_60147__$1;
(statearr_60180_61578[(2)] = null);

(statearr_60180_61578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (16))){
var inst_60102 = (state_60147[(10)]);
var inst_60106 = cljs.core.chunk_first(inst_60102);
var inst_60107 = cljs.core.chunk_rest(inst_60102);
var inst_60108 = cljs.core.count(inst_60106);
var inst_60088 = inst_60107;
var inst_60089 = inst_60106;
var inst_60090 = inst_60108;
var inst_60091 = (0);
var state_60147__$1 = (function (){var statearr_60181 = state_60147;
(statearr_60181[(13)] = inst_60088);

(statearr_60181[(14)] = inst_60091);

(statearr_60181[(15)] = inst_60090);

(statearr_60181[(16)] = inst_60089);

return statearr_60181;
})();
var statearr_60182_61581 = state_60147__$1;
(statearr_60182_61581[(2)] = null);

(statearr_60182_61581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (10))){
var inst_60088 = (state_60147[(13)]);
var inst_60091 = (state_60147[(14)]);
var inst_60090 = (state_60147[(15)]);
var inst_60089 = (state_60147[(16)]);
var inst_60096 = cljs.core._nth(inst_60089,inst_60091);
var inst_60097 = cljs.core.async.muxch_STAR_(inst_60096);
var inst_60098 = cljs.core.async.close_BANG_(inst_60097);
var inst_60099 = (inst_60091 + (1));
var tmp60177 = inst_60088;
var tmp60178 = inst_60090;
var tmp60179 = inst_60089;
var inst_60088__$1 = tmp60177;
var inst_60089__$1 = tmp60179;
var inst_60090__$1 = tmp60178;
var inst_60091__$1 = inst_60099;
var state_60147__$1 = (function (){var statearr_60183 = state_60147;
(statearr_60183[(13)] = inst_60088__$1);

(statearr_60183[(14)] = inst_60091__$1);

(statearr_60183[(15)] = inst_60090__$1);

(statearr_60183[(16)] = inst_60089__$1);

(statearr_60183[(17)] = inst_60098);

return statearr_60183;
})();
var statearr_60184_61585 = state_60147__$1;
(statearr_60184_61585[(2)] = null);

(statearr_60184_61585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (18))){
var inst_60117 = (state_60147[(2)]);
var state_60147__$1 = state_60147;
var statearr_60185_61591 = state_60147__$1;
(statearr_60185_61591[(2)] = inst_60117);

(statearr_60185_61591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60148 === (8))){
var inst_60091 = (state_60147[(14)]);
var inst_60090 = (state_60147[(15)]);
var inst_60093 = (inst_60091 < inst_60090);
var inst_60094 = inst_60093;
var state_60147__$1 = state_60147;
if(cljs.core.truth_(inst_60094)){
var statearr_60186_61593 = state_60147__$1;
(statearr_60186_61593[(1)] = (10));

} else {
var statearr_60187_61594 = state_60147__$1;
(statearr_60187_61594[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60188[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60188[(1)] = (1));

return statearr_60188;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60147){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60147);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60189){var ex__58317__auto__ = e60189;
var statearr_60190_61600 = state_60147;
(statearr_60190_61600[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60147[(4)]))){
var statearr_60191_61601 = state_60147;
(statearr_60191_61601[(1)] = cljs.core.first((state_60147[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61602 = state_60147;
state_60147 = G__61602;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60192 = f__58719__auto__();
(statearr_60192[(6)] = c__58718__auto___61536);

return statearr_60192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__60194 = arguments.length;
switch (G__60194) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__60196 = arguments.length;
switch (G__60196) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__60198 = arguments.length;
switch (G__60198) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__58718__auto___61629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60241){
var state_val_60242 = (state_60241[(1)]);
if((state_val_60242 === (7))){
var state_60241__$1 = state_60241;
var statearr_60243_61630 = state_60241__$1;
(statearr_60243_61630[(2)] = null);

(statearr_60243_61630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (1))){
var state_60241__$1 = state_60241;
var statearr_60244_61631 = state_60241__$1;
(statearr_60244_61631[(2)] = null);

(statearr_60244_61631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (4))){
var inst_60202 = (state_60241[(7)]);
var inst_60201 = (state_60241[(8)]);
var inst_60204 = (inst_60202 < inst_60201);
var state_60241__$1 = state_60241;
if(cljs.core.truth_(inst_60204)){
var statearr_60245_61632 = state_60241__$1;
(statearr_60245_61632[(1)] = (6));

} else {
var statearr_60246_61633 = state_60241__$1;
(statearr_60246_61633[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (15))){
var inst_60227 = (state_60241[(9)]);
var inst_60232 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60227);
var state_60241__$1 = state_60241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60241__$1,(17),out,inst_60232);
} else {
if((state_val_60242 === (13))){
var inst_60227 = (state_60241[(9)]);
var inst_60227__$1 = (state_60241[(2)]);
var inst_60228 = cljs.core.some(cljs.core.nil_QMARK_,inst_60227__$1);
var state_60241__$1 = (function (){var statearr_60247 = state_60241;
(statearr_60247[(9)] = inst_60227__$1);

return statearr_60247;
})();
if(cljs.core.truth_(inst_60228)){
var statearr_60248_61634 = state_60241__$1;
(statearr_60248_61634[(1)] = (14));

} else {
var statearr_60249_61635 = state_60241__$1;
(statearr_60249_61635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (6))){
var state_60241__$1 = state_60241;
var statearr_60250_61636 = state_60241__$1;
(statearr_60250_61636[(2)] = null);

(statearr_60250_61636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (17))){
var inst_60234 = (state_60241[(2)]);
var state_60241__$1 = (function (){var statearr_60252 = state_60241;
(statearr_60252[(10)] = inst_60234);

return statearr_60252;
})();
var statearr_60253_61643 = state_60241__$1;
(statearr_60253_61643[(2)] = null);

(statearr_60253_61643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (3))){
var inst_60239 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60241__$1,inst_60239);
} else {
if((state_val_60242 === (12))){
var _ = (function (){var statearr_60254 = state_60241;
(statearr_60254[(4)] = cljs.core.rest((state_60241[(4)])));

return statearr_60254;
})();
var state_60241__$1 = state_60241;
var ex60251 = (state_60241__$1[(2)]);
var statearr_60255_61644 = state_60241__$1;
(statearr_60255_61644[(5)] = ex60251);


if((ex60251 instanceof Object)){
var statearr_60256_61645 = state_60241__$1;
(statearr_60256_61645[(1)] = (11));

(statearr_60256_61645[(5)] = null);

} else {
throw ex60251;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (2))){
var inst_60200 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60201 = cnt;
var inst_60202 = (0);
var state_60241__$1 = (function (){var statearr_60257 = state_60241;
(statearr_60257[(11)] = inst_60200);

(statearr_60257[(7)] = inst_60202);

(statearr_60257[(8)] = inst_60201);

return statearr_60257;
})();
var statearr_60258_61646 = state_60241__$1;
(statearr_60258_61646[(2)] = null);

(statearr_60258_61646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (11))){
var inst_60206 = (state_60241[(2)]);
var inst_60207 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60241__$1 = (function (){var statearr_60259 = state_60241;
(statearr_60259[(12)] = inst_60206);

return statearr_60259;
})();
var statearr_60260_61647 = state_60241__$1;
(statearr_60260_61647[(2)] = inst_60207);

(statearr_60260_61647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (9))){
var inst_60202 = (state_60241[(7)]);
var _ = (function (){var statearr_60261 = state_60241;
(statearr_60261[(4)] = cljs.core.cons((12),(state_60241[(4)])));

return statearr_60261;
})();
var inst_60213 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60202) : chs__$1.call(null,inst_60202));
var inst_60214 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60202) : done.call(null,inst_60202));
var inst_60215 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60213,inst_60214);
var ___$1 = (function (){var statearr_60262 = state_60241;
(statearr_60262[(4)] = cljs.core.rest((state_60241[(4)])));

return statearr_60262;
})();
var state_60241__$1 = state_60241;
var statearr_60263_61648 = state_60241__$1;
(statearr_60263_61648[(2)] = inst_60215);

(statearr_60263_61648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (5))){
var inst_60225 = (state_60241[(2)]);
var state_60241__$1 = (function (){var statearr_60264 = state_60241;
(statearr_60264[(13)] = inst_60225);

return statearr_60264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60241__$1,(13),dchan);
} else {
if((state_val_60242 === (14))){
var inst_60230 = cljs.core.async.close_BANG_(out);
var state_60241__$1 = state_60241;
var statearr_60265_61655 = state_60241__$1;
(statearr_60265_61655[(2)] = inst_60230);

(statearr_60265_61655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (16))){
var inst_60237 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
var statearr_60266_61656 = state_60241__$1;
(statearr_60266_61656[(2)] = inst_60237);

(statearr_60266_61656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (10))){
var inst_60202 = (state_60241[(7)]);
var inst_60218 = (state_60241[(2)]);
var inst_60219 = (inst_60202 + (1));
var inst_60202__$1 = inst_60219;
var state_60241__$1 = (function (){var statearr_60267 = state_60241;
(statearr_60267[(7)] = inst_60202__$1);

(statearr_60267[(14)] = inst_60218);

return statearr_60267;
})();
var statearr_60268_61657 = state_60241__$1;
(statearr_60268_61657[(2)] = null);

(statearr_60268_61657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (8))){
var inst_60223 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
var statearr_60269_61658 = state_60241__$1;
(statearr_60269_61658[(2)] = inst_60223);

(statearr_60269_61658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60270[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60270[(1)] = (1));

return statearr_60270;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60241){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60241);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60271){var ex__58317__auto__ = e60271;
var statearr_60272_61662 = state_60241;
(statearr_60272_61662[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60241[(4)]))){
var statearr_60273_61663 = state_60241;
(statearr_60273_61663[(1)] = cljs.core.first((state_60241[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61664 = state_60241;
state_60241 = G__61664;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60274 = f__58719__auto__();
(statearr_60274[(6)] = c__58718__auto___61629);

return statearr_60274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__60277 = arguments.length;
switch (G__60277) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58718__auto___61673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60309){
var state_val_60310 = (state_60309[(1)]);
if((state_val_60310 === (7))){
var inst_60289 = (state_60309[(7)]);
var inst_60288 = (state_60309[(8)]);
var inst_60288__$1 = (state_60309[(2)]);
var inst_60289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60288__$1,(0),null);
var inst_60290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60288__$1,(1),null);
var inst_60291 = (inst_60289__$1 == null);
var state_60309__$1 = (function (){var statearr_60311 = state_60309;
(statearr_60311[(7)] = inst_60289__$1);

(statearr_60311[(8)] = inst_60288__$1);

(statearr_60311[(9)] = inst_60290);

return statearr_60311;
})();
if(cljs.core.truth_(inst_60291)){
var statearr_60312_61675 = state_60309__$1;
(statearr_60312_61675[(1)] = (8));

} else {
var statearr_60313_61676 = state_60309__$1;
(statearr_60313_61676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (1))){
var inst_60278 = cljs.core.vec(chs);
var inst_60279 = inst_60278;
var state_60309__$1 = (function (){var statearr_60314 = state_60309;
(statearr_60314[(10)] = inst_60279);

return statearr_60314;
})();
var statearr_60315_61677 = state_60309__$1;
(statearr_60315_61677[(2)] = null);

(statearr_60315_61677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (4))){
var inst_60279 = (state_60309[(10)]);
var state_60309__$1 = state_60309;
return cljs.core.async.ioc_alts_BANG_(state_60309__$1,(7),inst_60279);
} else {
if((state_val_60310 === (6))){
var inst_60305 = (state_60309[(2)]);
var state_60309__$1 = state_60309;
var statearr_60316_61678 = state_60309__$1;
(statearr_60316_61678[(2)] = inst_60305);

(statearr_60316_61678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (3))){
var inst_60307 = (state_60309[(2)]);
var state_60309__$1 = state_60309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60309__$1,inst_60307);
} else {
if((state_val_60310 === (2))){
var inst_60279 = (state_60309[(10)]);
var inst_60281 = cljs.core.count(inst_60279);
var inst_60282 = (inst_60281 > (0));
var state_60309__$1 = state_60309;
if(cljs.core.truth_(inst_60282)){
var statearr_60318_61679 = state_60309__$1;
(statearr_60318_61679[(1)] = (4));

} else {
var statearr_60319_61680 = state_60309__$1;
(statearr_60319_61680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (11))){
var inst_60279 = (state_60309[(10)]);
var inst_60298 = (state_60309[(2)]);
var tmp60317 = inst_60279;
var inst_60279__$1 = tmp60317;
var state_60309__$1 = (function (){var statearr_60320 = state_60309;
(statearr_60320[(10)] = inst_60279__$1);

(statearr_60320[(11)] = inst_60298);

return statearr_60320;
})();
var statearr_60321_61681 = state_60309__$1;
(statearr_60321_61681[(2)] = null);

(statearr_60321_61681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (9))){
var inst_60289 = (state_60309[(7)]);
var state_60309__$1 = state_60309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60309__$1,(11),out,inst_60289);
} else {
if((state_val_60310 === (5))){
var inst_60303 = cljs.core.async.close_BANG_(out);
var state_60309__$1 = state_60309;
var statearr_60322_61682 = state_60309__$1;
(statearr_60322_61682[(2)] = inst_60303);

(statearr_60322_61682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (10))){
var inst_60301 = (state_60309[(2)]);
var state_60309__$1 = state_60309;
var statearr_60323_61683 = state_60309__$1;
(statearr_60323_61683[(2)] = inst_60301);

(statearr_60323_61683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (8))){
var inst_60279 = (state_60309[(10)]);
var inst_60289 = (state_60309[(7)]);
var inst_60288 = (state_60309[(8)]);
var inst_60290 = (state_60309[(9)]);
var inst_60293 = (function (){var cs = inst_60279;
var vec__60284 = inst_60288;
var v = inst_60289;
var c = inst_60290;
return (function (p1__60275_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60275_SHARP_);
});
})();
var inst_60294 = cljs.core.filterv(inst_60293,inst_60279);
var inst_60279__$1 = inst_60294;
var state_60309__$1 = (function (){var statearr_60324 = state_60309;
(statearr_60324[(10)] = inst_60279__$1);

return statearr_60324;
})();
var statearr_60325_61686 = state_60309__$1;
(statearr_60325_61686[(2)] = null);

(statearr_60325_61686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60326[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60326[(1)] = (1));

return statearr_60326;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60309){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60309);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60327){var ex__58317__auto__ = e60327;
var statearr_60328_61687 = state_60309;
(statearr_60328_61687[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60309[(4)]))){
var statearr_60329_61688 = state_60309;
(statearr_60329_61688[(1)] = cljs.core.first((state_60309[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61689 = state_60309;
state_60309 = G__61689;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60330 = f__58719__auto__();
(statearr_60330[(6)] = c__58718__auto___61673);

return statearr_60330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__60332 = arguments.length;
switch (G__60332) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58718__auto___61693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60356){
var state_val_60357 = (state_60356[(1)]);
if((state_val_60357 === (7))){
var inst_60338 = (state_60356[(7)]);
var inst_60338__$1 = (state_60356[(2)]);
var inst_60339 = (inst_60338__$1 == null);
var inst_60340 = cljs.core.not(inst_60339);
var state_60356__$1 = (function (){var statearr_60358 = state_60356;
(statearr_60358[(7)] = inst_60338__$1);

return statearr_60358;
})();
if(inst_60340){
var statearr_60359_61694 = state_60356__$1;
(statearr_60359_61694[(1)] = (8));

} else {
var statearr_60360_61695 = state_60356__$1;
(statearr_60360_61695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (1))){
var inst_60333 = (0);
var state_60356__$1 = (function (){var statearr_60361 = state_60356;
(statearr_60361[(8)] = inst_60333);

return statearr_60361;
})();
var statearr_60362_61696 = state_60356__$1;
(statearr_60362_61696[(2)] = null);

(statearr_60362_61696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (4))){
var state_60356__$1 = state_60356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60356__$1,(7),ch);
} else {
if((state_val_60357 === (6))){
var inst_60351 = (state_60356[(2)]);
var state_60356__$1 = state_60356;
var statearr_60363_61697 = state_60356__$1;
(statearr_60363_61697[(2)] = inst_60351);

(statearr_60363_61697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (3))){
var inst_60353 = (state_60356[(2)]);
var inst_60354 = cljs.core.async.close_BANG_(out);
var state_60356__$1 = (function (){var statearr_60364 = state_60356;
(statearr_60364[(9)] = inst_60353);

return statearr_60364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60356__$1,inst_60354);
} else {
if((state_val_60357 === (2))){
var inst_60333 = (state_60356[(8)]);
var inst_60335 = (inst_60333 < n);
var state_60356__$1 = state_60356;
if(cljs.core.truth_(inst_60335)){
var statearr_60365_61698 = state_60356__$1;
(statearr_60365_61698[(1)] = (4));

} else {
var statearr_60366_61699 = state_60356__$1;
(statearr_60366_61699[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (11))){
var inst_60333 = (state_60356[(8)]);
var inst_60343 = (state_60356[(2)]);
var inst_60344 = (inst_60333 + (1));
var inst_60333__$1 = inst_60344;
var state_60356__$1 = (function (){var statearr_60367 = state_60356;
(statearr_60367[(8)] = inst_60333__$1);

(statearr_60367[(10)] = inst_60343);

return statearr_60367;
})();
var statearr_60368_61700 = state_60356__$1;
(statearr_60368_61700[(2)] = null);

(statearr_60368_61700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (9))){
var state_60356__$1 = state_60356;
var statearr_60369_61706 = state_60356__$1;
(statearr_60369_61706[(2)] = null);

(statearr_60369_61706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (5))){
var state_60356__$1 = state_60356;
var statearr_60370_61708 = state_60356__$1;
(statearr_60370_61708[(2)] = null);

(statearr_60370_61708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (10))){
var inst_60348 = (state_60356[(2)]);
var state_60356__$1 = state_60356;
var statearr_60371_61709 = state_60356__$1;
(statearr_60371_61709[(2)] = inst_60348);

(statearr_60371_61709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60357 === (8))){
var inst_60338 = (state_60356[(7)]);
var state_60356__$1 = state_60356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60356__$1,(11),out,inst_60338);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60372[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60372[(1)] = (1));

return statearr_60372;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60356){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60356);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60373){var ex__58317__auto__ = e60373;
var statearr_60374_61712 = state_60356;
(statearr_60374_61712[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60356[(4)]))){
var statearr_60375_61713 = state_60356;
(statearr_60375_61713[(1)] = cljs.core.first((state_60356[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61717 = state_60356;
state_60356 = G__61717;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60376 = f__58719__auto__();
(statearr_60376[(6)] = c__58718__auto___61693);

return statearr_60376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60378 = (function (f,ch,meta60379){
this.f = f;
this.ch = ch;
this.meta60379 = meta60379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60380,meta60379__$1){
var self__ = this;
var _60380__$1 = this;
return (new cljs.core.async.t_cljs$core$async60378(self__.f,self__.ch,meta60379__$1));
}));

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60380){
var self__ = this;
var _60380__$1 = this;
return self__.meta60379;
}));

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60381 = (function (f,ch,meta60379,_,fn1,meta60382){
this.f = f;
this.ch = ch;
this.meta60379 = meta60379;
this._ = _;
this.fn1 = fn1;
this.meta60382 = meta60382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60383,meta60382__$1){
var self__ = this;
var _60383__$1 = this;
return (new cljs.core.async.t_cljs$core$async60381(self__.f,self__.ch,self__.meta60379,self__._,self__.fn1,meta60382__$1));
}));

(cljs.core.async.t_cljs$core$async60381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60383){
var self__ = this;
var _60383__$1 = this;
return self__.meta60382;
}));

(cljs.core.async.t_cljs$core$async60381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__60377_SHARP_){
var G__60384 = (((p1__60377_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__60377_SHARP_) : self__.f.call(null,p1__60377_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__60384) : f1.call(null,G__60384));
});
}));

(cljs.core.async.t_cljs$core$async60381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60379","meta60379",483672871,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60378","cljs.core.async/t_cljs$core$async60378",-1828231868,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60382","meta60382",-964905242,null)], null);
}));

(cljs.core.async.t_cljs$core$async60381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60381");

(cljs.core.async.t_cljs$core$async60381.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60381.
 */
cljs.core.async.__GT_t_cljs$core$async60381 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60381(f__$1,ch__$1,meta60379__$1,___$2,fn1__$1,meta60382){
return (new cljs.core.async.t_cljs$core$async60381(f__$1,ch__$1,meta60379__$1,___$2,fn1__$1,meta60382));
});

}

return (new cljs.core.async.t_cljs$core$async60381(self__.f,self__.ch,self__.meta60379,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__60385 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60385) : self__.f.call(null,G__60385));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async60378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60379","meta60379",483672871,null)], null);
}));

(cljs.core.async.t_cljs$core$async60378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60378");

(cljs.core.async.t_cljs$core$async60378.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60378.
 */
cljs.core.async.__GT_t_cljs$core$async60378 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60378(f__$1,ch__$1,meta60379){
return (new cljs.core.async.t_cljs$core$async60378(f__$1,ch__$1,meta60379));
});

}

return (new cljs.core.async.t_cljs$core$async60378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60386 = (function (f,ch,meta60387){
this.f = f;
this.ch = ch;
this.meta60387 = meta60387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60388,meta60387__$1){
var self__ = this;
var _60388__$1 = this;
return (new cljs.core.async.t_cljs$core$async60386(self__.f,self__.ch,meta60387__$1));
}));

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60388){
var self__ = this;
var _60388__$1 = this;
return self__.meta60387;
}));

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async60386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60387","meta60387",646725814,null)], null);
}));

(cljs.core.async.t_cljs$core$async60386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60386");

(cljs.core.async.t_cljs$core$async60386.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60386.
 */
cljs.core.async.__GT_t_cljs$core$async60386 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60386(f__$1,ch__$1,meta60387){
return (new cljs.core.async.t_cljs$core$async60386(f__$1,ch__$1,meta60387));
});

}

return (new cljs.core.async.t_cljs$core$async60386(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60389 = (function (p,ch,meta60390){
this.p = p;
this.ch = ch;
this.meta60390 = meta60390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60391,meta60390__$1){
var self__ = this;
var _60391__$1 = this;
return (new cljs.core.async.t_cljs$core$async60389(self__.p,self__.ch,meta60390__$1));
}));

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60391){
var self__ = this;
var _60391__$1 = this;
return self__.meta60390;
}));

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60390","meta60390",-339794761,null)], null);
}));

(cljs.core.async.t_cljs$core$async60389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60389");

(cljs.core.async.t_cljs$core$async60389.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60389.
 */
cljs.core.async.__GT_t_cljs$core$async60389 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60389(p__$1,ch__$1,meta60390){
return (new cljs.core.async.t_cljs$core$async60389(p__$1,ch__$1,meta60390));
});

}

return (new cljs.core.async.t_cljs$core$async60389(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__60393 = arguments.length;
switch (G__60393) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58718__auto___61734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60414){
var state_val_60415 = (state_60414[(1)]);
if((state_val_60415 === (7))){
var inst_60410 = (state_60414[(2)]);
var state_60414__$1 = state_60414;
var statearr_60416_61736 = state_60414__$1;
(statearr_60416_61736[(2)] = inst_60410);

(statearr_60416_61736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (1))){
var state_60414__$1 = state_60414;
var statearr_60417_61737 = state_60414__$1;
(statearr_60417_61737[(2)] = null);

(statearr_60417_61737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (4))){
var inst_60396 = (state_60414[(7)]);
var inst_60396__$1 = (state_60414[(2)]);
var inst_60397 = (inst_60396__$1 == null);
var state_60414__$1 = (function (){var statearr_60418 = state_60414;
(statearr_60418[(7)] = inst_60396__$1);

return statearr_60418;
})();
if(cljs.core.truth_(inst_60397)){
var statearr_60419_61739 = state_60414__$1;
(statearr_60419_61739[(1)] = (5));

} else {
var statearr_60420_61740 = state_60414__$1;
(statearr_60420_61740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (6))){
var inst_60396 = (state_60414[(7)]);
var inst_60401 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60396) : p.call(null,inst_60396));
var state_60414__$1 = state_60414;
if(cljs.core.truth_(inst_60401)){
var statearr_60421_61741 = state_60414__$1;
(statearr_60421_61741[(1)] = (8));

} else {
var statearr_60422_61742 = state_60414__$1;
(statearr_60422_61742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (3))){
var inst_60412 = (state_60414[(2)]);
var state_60414__$1 = state_60414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60414__$1,inst_60412);
} else {
if((state_val_60415 === (2))){
var state_60414__$1 = state_60414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60414__$1,(4),ch);
} else {
if((state_val_60415 === (11))){
var inst_60404 = (state_60414[(2)]);
var state_60414__$1 = state_60414;
var statearr_60423_61744 = state_60414__$1;
(statearr_60423_61744[(2)] = inst_60404);

(statearr_60423_61744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (9))){
var state_60414__$1 = state_60414;
var statearr_60424_61745 = state_60414__$1;
(statearr_60424_61745[(2)] = null);

(statearr_60424_61745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (5))){
var inst_60399 = cljs.core.async.close_BANG_(out);
var state_60414__$1 = state_60414;
var statearr_60425_61748 = state_60414__$1;
(statearr_60425_61748[(2)] = inst_60399);

(statearr_60425_61748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (10))){
var inst_60407 = (state_60414[(2)]);
var state_60414__$1 = (function (){var statearr_60426 = state_60414;
(statearr_60426[(8)] = inst_60407);

return statearr_60426;
})();
var statearr_60427_61751 = state_60414__$1;
(statearr_60427_61751[(2)] = null);

(statearr_60427_61751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60415 === (8))){
var inst_60396 = (state_60414[(7)]);
var state_60414__$1 = state_60414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60414__$1,(11),out,inst_60396);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60428 = [null,null,null,null,null,null,null,null,null];
(statearr_60428[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60428[(1)] = (1));

return statearr_60428;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60414){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60414);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60429){var ex__58317__auto__ = e60429;
var statearr_60430_61754 = state_60414;
(statearr_60430_61754[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60414[(4)]))){
var statearr_60431_61756 = state_60414;
(statearr_60431_61756[(1)] = cljs.core.first((state_60414[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61757 = state_60414;
state_60414 = G__61757;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60432 = f__58719__auto__();
(statearr_60432[(6)] = c__58718__auto___61734);

return statearr_60432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60434 = arguments.length;
switch (G__60434) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__58718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60496){
var state_val_60497 = (state_60496[(1)]);
if((state_val_60497 === (7))){
var inst_60492 = (state_60496[(2)]);
var state_60496__$1 = state_60496;
var statearr_60498_61771 = state_60496__$1;
(statearr_60498_61771[(2)] = inst_60492);

(statearr_60498_61771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (20))){
var inst_60462 = (state_60496[(7)]);
var inst_60473 = (state_60496[(2)]);
var inst_60474 = cljs.core.next(inst_60462);
var inst_60448 = inst_60474;
var inst_60449 = null;
var inst_60450 = (0);
var inst_60451 = (0);
var state_60496__$1 = (function (){var statearr_60499 = state_60496;
(statearr_60499[(8)] = inst_60450);

(statearr_60499[(9)] = inst_60449);

(statearr_60499[(10)] = inst_60448);

(statearr_60499[(11)] = inst_60473);

(statearr_60499[(12)] = inst_60451);

return statearr_60499;
})();
var statearr_60500_61777 = state_60496__$1;
(statearr_60500_61777[(2)] = null);

(statearr_60500_61777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (1))){
var state_60496__$1 = state_60496;
var statearr_60501_61778 = state_60496__$1;
(statearr_60501_61778[(2)] = null);

(statearr_60501_61778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (4))){
var inst_60437 = (state_60496[(13)]);
var inst_60437__$1 = (state_60496[(2)]);
var inst_60438 = (inst_60437__$1 == null);
var state_60496__$1 = (function (){var statearr_60502 = state_60496;
(statearr_60502[(13)] = inst_60437__$1);

return statearr_60502;
})();
if(cljs.core.truth_(inst_60438)){
var statearr_60503_61779 = state_60496__$1;
(statearr_60503_61779[(1)] = (5));

} else {
var statearr_60504_61780 = state_60496__$1;
(statearr_60504_61780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (15))){
var state_60496__$1 = state_60496;
var statearr_60508_61781 = state_60496__$1;
(statearr_60508_61781[(2)] = null);

(statearr_60508_61781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (21))){
var state_60496__$1 = state_60496;
var statearr_60509_61786 = state_60496__$1;
(statearr_60509_61786[(2)] = null);

(statearr_60509_61786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (13))){
var inst_60450 = (state_60496[(8)]);
var inst_60449 = (state_60496[(9)]);
var inst_60448 = (state_60496[(10)]);
var inst_60451 = (state_60496[(12)]);
var inst_60458 = (state_60496[(2)]);
var inst_60459 = (inst_60451 + (1));
var tmp60505 = inst_60450;
var tmp60506 = inst_60449;
var tmp60507 = inst_60448;
var inst_60448__$1 = tmp60507;
var inst_60449__$1 = tmp60506;
var inst_60450__$1 = tmp60505;
var inst_60451__$1 = inst_60459;
var state_60496__$1 = (function (){var statearr_60510 = state_60496;
(statearr_60510[(8)] = inst_60450__$1);

(statearr_60510[(14)] = inst_60458);

(statearr_60510[(9)] = inst_60449__$1);

(statearr_60510[(10)] = inst_60448__$1);

(statearr_60510[(12)] = inst_60451__$1);

return statearr_60510;
})();
var statearr_60511_61795 = state_60496__$1;
(statearr_60511_61795[(2)] = null);

(statearr_60511_61795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (22))){
var state_60496__$1 = state_60496;
var statearr_60512_61796 = state_60496__$1;
(statearr_60512_61796[(2)] = null);

(statearr_60512_61796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (6))){
var inst_60437 = (state_60496[(13)]);
var inst_60446 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60437) : f.call(null,inst_60437));
var inst_60447 = cljs.core.seq(inst_60446);
var inst_60448 = inst_60447;
var inst_60449 = null;
var inst_60450 = (0);
var inst_60451 = (0);
var state_60496__$1 = (function (){var statearr_60513 = state_60496;
(statearr_60513[(8)] = inst_60450);

(statearr_60513[(9)] = inst_60449);

(statearr_60513[(10)] = inst_60448);

(statearr_60513[(12)] = inst_60451);

return statearr_60513;
})();
var statearr_60514_61811 = state_60496__$1;
(statearr_60514_61811[(2)] = null);

(statearr_60514_61811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (17))){
var inst_60462 = (state_60496[(7)]);
var inst_60466 = cljs.core.chunk_first(inst_60462);
var inst_60467 = cljs.core.chunk_rest(inst_60462);
var inst_60468 = cljs.core.count(inst_60466);
var inst_60448 = inst_60467;
var inst_60449 = inst_60466;
var inst_60450 = inst_60468;
var inst_60451 = (0);
var state_60496__$1 = (function (){var statearr_60515 = state_60496;
(statearr_60515[(8)] = inst_60450);

(statearr_60515[(9)] = inst_60449);

(statearr_60515[(10)] = inst_60448);

(statearr_60515[(12)] = inst_60451);

return statearr_60515;
})();
var statearr_60516_61815 = state_60496__$1;
(statearr_60516_61815[(2)] = null);

(statearr_60516_61815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (3))){
var inst_60494 = (state_60496[(2)]);
var state_60496__$1 = state_60496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60496__$1,inst_60494);
} else {
if((state_val_60497 === (12))){
var inst_60482 = (state_60496[(2)]);
var state_60496__$1 = state_60496;
var statearr_60517_61817 = state_60496__$1;
(statearr_60517_61817[(2)] = inst_60482);

(statearr_60517_61817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (2))){
var state_60496__$1 = state_60496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60496__$1,(4),in$);
} else {
if((state_val_60497 === (23))){
var inst_60490 = (state_60496[(2)]);
var state_60496__$1 = state_60496;
var statearr_60518_61819 = state_60496__$1;
(statearr_60518_61819[(2)] = inst_60490);

(statearr_60518_61819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (19))){
var inst_60477 = (state_60496[(2)]);
var state_60496__$1 = state_60496;
var statearr_60519_61821 = state_60496__$1;
(statearr_60519_61821[(2)] = inst_60477);

(statearr_60519_61821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (11))){
var inst_60448 = (state_60496[(10)]);
var inst_60462 = (state_60496[(7)]);
var inst_60462__$1 = cljs.core.seq(inst_60448);
var state_60496__$1 = (function (){var statearr_60520 = state_60496;
(statearr_60520[(7)] = inst_60462__$1);

return statearr_60520;
})();
if(inst_60462__$1){
var statearr_60521_61822 = state_60496__$1;
(statearr_60521_61822[(1)] = (14));

} else {
var statearr_60522_61823 = state_60496__$1;
(statearr_60522_61823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (9))){
var inst_60484 = (state_60496[(2)]);
var inst_60485 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60496__$1 = (function (){var statearr_60523 = state_60496;
(statearr_60523[(15)] = inst_60484);

return statearr_60523;
})();
if(cljs.core.truth_(inst_60485)){
var statearr_60524_61824 = state_60496__$1;
(statearr_60524_61824[(1)] = (21));

} else {
var statearr_60525_61825 = state_60496__$1;
(statearr_60525_61825[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (5))){
var inst_60440 = cljs.core.async.close_BANG_(out);
var state_60496__$1 = state_60496;
var statearr_60526_61826 = state_60496__$1;
(statearr_60526_61826[(2)] = inst_60440);

(statearr_60526_61826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (14))){
var inst_60462 = (state_60496[(7)]);
var inst_60464 = cljs.core.chunked_seq_QMARK_(inst_60462);
var state_60496__$1 = state_60496;
if(inst_60464){
var statearr_60527_61827 = state_60496__$1;
(statearr_60527_61827[(1)] = (17));

} else {
var statearr_60528_61828 = state_60496__$1;
(statearr_60528_61828[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (16))){
var inst_60480 = (state_60496[(2)]);
var state_60496__$1 = state_60496;
var statearr_60529_61829 = state_60496__$1;
(statearr_60529_61829[(2)] = inst_60480);

(statearr_60529_61829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60497 === (10))){
var inst_60449 = (state_60496[(9)]);
var inst_60451 = (state_60496[(12)]);
var inst_60456 = cljs.core._nth(inst_60449,inst_60451);
var state_60496__$1 = state_60496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60496__$1,(13),out,inst_60456);
} else {
if((state_val_60497 === (18))){
var inst_60462 = (state_60496[(7)]);
var inst_60471 = cljs.core.first(inst_60462);
var state_60496__$1 = state_60496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60496__$1,(20),out,inst_60471);
} else {
if((state_val_60497 === (8))){
var inst_60450 = (state_60496[(8)]);
var inst_60451 = (state_60496[(12)]);
var inst_60453 = (inst_60451 < inst_60450);
var inst_60454 = inst_60453;
var state_60496__$1 = state_60496;
if(cljs.core.truth_(inst_60454)){
var statearr_60530_61831 = state_60496__$1;
(statearr_60530_61831[(1)] = (10));

} else {
var statearr_60531_61832 = state_60496__$1;
(statearr_60531_61832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58314__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58314__auto____0 = (function (){
var statearr_60532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60532[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58314__auto__);

(statearr_60532[(1)] = (1));

return statearr_60532;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58314__auto____1 = (function (state_60496){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60496);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60533){var ex__58317__auto__ = e60533;
var statearr_60534_61836 = state_60496;
(statearr_60534_61836[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60496[(4)]))){
var statearr_60535_61841 = state_60496;
(statearr_60535_61841[(1)] = cljs.core.first((state_60496[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61842 = state_60496;
state_60496 = G__61842;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58314__auto__ = function(state_60496){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58314__auto____1.call(this,state_60496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58314__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58314__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60536 = f__58719__auto__();
(statearr_60536[(6)] = c__58718__auto__);

return statearr_60536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));

return c__58718__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60538 = arguments.length;
switch (G__60538) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__60540 = arguments.length;
switch (G__60540) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__60542 = arguments.length;
switch (G__60542) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58718__auto___61866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60566){
var state_val_60567 = (state_60566[(1)]);
if((state_val_60567 === (7))){
var inst_60561 = (state_60566[(2)]);
var state_60566__$1 = state_60566;
var statearr_60568_61874 = state_60566__$1;
(statearr_60568_61874[(2)] = inst_60561);

(statearr_60568_61874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (1))){
var inst_60543 = null;
var state_60566__$1 = (function (){var statearr_60569 = state_60566;
(statearr_60569[(7)] = inst_60543);

return statearr_60569;
})();
var statearr_60570_61882 = state_60566__$1;
(statearr_60570_61882[(2)] = null);

(statearr_60570_61882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (4))){
var inst_60546 = (state_60566[(8)]);
var inst_60546__$1 = (state_60566[(2)]);
var inst_60547 = (inst_60546__$1 == null);
var inst_60548 = cljs.core.not(inst_60547);
var state_60566__$1 = (function (){var statearr_60571 = state_60566;
(statearr_60571[(8)] = inst_60546__$1);

return statearr_60571;
})();
if(inst_60548){
var statearr_60572_61895 = state_60566__$1;
(statearr_60572_61895[(1)] = (5));

} else {
var statearr_60573_61897 = state_60566__$1;
(statearr_60573_61897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (6))){
var state_60566__$1 = state_60566;
var statearr_60574_61904 = state_60566__$1;
(statearr_60574_61904[(2)] = null);

(statearr_60574_61904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (3))){
var inst_60563 = (state_60566[(2)]);
var inst_60564 = cljs.core.async.close_BANG_(out);
var state_60566__$1 = (function (){var statearr_60575 = state_60566;
(statearr_60575[(9)] = inst_60563);

return statearr_60575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60566__$1,inst_60564);
} else {
if((state_val_60567 === (2))){
var state_60566__$1 = state_60566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60566__$1,(4),ch);
} else {
if((state_val_60567 === (11))){
var inst_60546 = (state_60566[(8)]);
var inst_60555 = (state_60566[(2)]);
var inst_60543 = inst_60546;
var state_60566__$1 = (function (){var statearr_60576 = state_60566;
(statearr_60576[(7)] = inst_60543);

(statearr_60576[(10)] = inst_60555);

return statearr_60576;
})();
var statearr_60577_61927 = state_60566__$1;
(statearr_60577_61927[(2)] = null);

(statearr_60577_61927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (9))){
var inst_60546 = (state_60566[(8)]);
var state_60566__$1 = state_60566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60566__$1,(11),out,inst_60546);
} else {
if((state_val_60567 === (5))){
var inst_60546 = (state_60566[(8)]);
var inst_60543 = (state_60566[(7)]);
var inst_60550 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60546,inst_60543);
var state_60566__$1 = state_60566;
if(inst_60550){
var statearr_60579_61944 = state_60566__$1;
(statearr_60579_61944[(1)] = (8));

} else {
var statearr_60580_61945 = state_60566__$1;
(statearr_60580_61945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (10))){
var inst_60558 = (state_60566[(2)]);
var state_60566__$1 = state_60566;
var statearr_60581_61946 = state_60566__$1;
(statearr_60581_61946[(2)] = inst_60558);

(statearr_60581_61946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60567 === (8))){
var inst_60543 = (state_60566[(7)]);
var tmp60578 = inst_60543;
var inst_60543__$1 = tmp60578;
var state_60566__$1 = (function (){var statearr_60582 = state_60566;
(statearr_60582[(7)] = inst_60543__$1);

return statearr_60582;
})();
var statearr_60583_61948 = state_60566__$1;
(statearr_60583_61948[(2)] = null);

(statearr_60583_61948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60584[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60584[(1)] = (1));

return statearr_60584;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60566){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60566);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60585){var ex__58317__auto__ = e60585;
var statearr_60586_61959 = state_60566;
(statearr_60586_61959[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60566[(4)]))){
var statearr_60587_61960 = state_60566;
(statearr_60587_61960[(1)] = cljs.core.first((state_60566[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61966 = state_60566;
state_60566 = G__61966;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60588 = f__58719__auto__();
(statearr_60588[(6)] = c__58718__auto___61866);

return statearr_60588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60590 = arguments.length;
switch (G__60590) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58718__auto___61973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60628){
var state_val_60629 = (state_60628[(1)]);
if((state_val_60629 === (7))){
var inst_60624 = (state_60628[(2)]);
var state_60628__$1 = state_60628;
var statearr_60630_61977 = state_60628__$1;
(statearr_60630_61977[(2)] = inst_60624);

(statearr_60630_61977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (1))){
var inst_60591 = (new Array(n));
var inst_60592 = inst_60591;
var inst_60593 = (0);
var state_60628__$1 = (function (){var statearr_60631 = state_60628;
(statearr_60631[(7)] = inst_60592);

(statearr_60631[(8)] = inst_60593);

return statearr_60631;
})();
var statearr_60632_61979 = state_60628__$1;
(statearr_60632_61979[(2)] = null);

(statearr_60632_61979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (4))){
var inst_60596 = (state_60628[(9)]);
var inst_60596__$1 = (state_60628[(2)]);
var inst_60597 = (inst_60596__$1 == null);
var inst_60598 = cljs.core.not(inst_60597);
var state_60628__$1 = (function (){var statearr_60633 = state_60628;
(statearr_60633[(9)] = inst_60596__$1);

return statearr_60633;
})();
if(inst_60598){
var statearr_60634_61980 = state_60628__$1;
(statearr_60634_61980[(1)] = (5));

} else {
var statearr_60635_61985 = state_60628__$1;
(statearr_60635_61985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (15))){
var inst_60618 = (state_60628[(2)]);
var state_60628__$1 = state_60628;
var statearr_60636_61987 = state_60628__$1;
(statearr_60636_61987[(2)] = inst_60618);

(statearr_60636_61987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (13))){
var state_60628__$1 = state_60628;
var statearr_60637_61988 = state_60628__$1;
(statearr_60637_61988[(2)] = null);

(statearr_60637_61988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (6))){
var inst_60593 = (state_60628[(8)]);
var inst_60614 = (inst_60593 > (0));
var state_60628__$1 = state_60628;
if(cljs.core.truth_(inst_60614)){
var statearr_60638_61991 = state_60628__$1;
(statearr_60638_61991[(1)] = (12));

} else {
var statearr_60639_61992 = state_60628__$1;
(statearr_60639_61992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (3))){
var inst_60626 = (state_60628[(2)]);
var state_60628__$1 = state_60628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60628__$1,inst_60626);
} else {
if((state_val_60629 === (12))){
var inst_60592 = (state_60628[(7)]);
var inst_60616 = cljs.core.vec(inst_60592);
var state_60628__$1 = state_60628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60628__$1,(15),out,inst_60616);
} else {
if((state_val_60629 === (2))){
var state_60628__$1 = state_60628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60628__$1,(4),ch);
} else {
if((state_val_60629 === (11))){
var inst_60608 = (state_60628[(2)]);
var inst_60609 = (new Array(n));
var inst_60592 = inst_60609;
var inst_60593 = (0);
var state_60628__$1 = (function (){var statearr_60640 = state_60628;
(statearr_60640[(7)] = inst_60592);

(statearr_60640[(8)] = inst_60593);

(statearr_60640[(10)] = inst_60608);

return statearr_60640;
})();
var statearr_60641_61997 = state_60628__$1;
(statearr_60641_61997[(2)] = null);

(statearr_60641_61997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (9))){
var inst_60592 = (state_60628[(7)]);
var inst_60606 = cljs.core.vec(inst_60592);
var state_60628__$1 = state_60628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60628__$1,(11),out,inst_60606);
} else {
if((state_val_60629 === (5))){
var inst_60596 = (state_60628[(9)]);
var inst_60592 = (state_60628[(7)]);
var inst_60593 = (state_60628[(8)]);
var inst_60601 = (state_60628[(11)]);
var inst_60600 = (inst_60592[inst_60593] = inst_60596);
var inst_60601__$1 = (inst_60593 + (1));
var inst_60602 = (inst_60601__$1 < n);
var state_60628__$1 = (function (){var statearr_60642 = state_60628;
(statearr_60642[(12)] = inst_60600);

(statearr_60642[(11)] = inst_60601__$1);

return statearr_60642;
})();
if(cljs.core.truth_(inst_60602)){
var statearr_60643_62018 = state_60628__$1;
(statearr_60643_62018[(1)] = (8));

} else {
var statearr_60644_62019 = state_60628__$1;
(statearr_60644_62019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (14))){
var inst_60621 = (state_60628[(2)]);
var inst_60622 = cljs.core.async.close_BANG_(out);
var state_60628__$1 = (function (){var statearr_60646 = state_60628;
(statearr_60646[(13)] = inst_60621);

return statearr_60646;
})();
var statearr_60647_62026 = state_60628__$1;
(statearr_60647_62026[(2)] = inst_60622);

(statearr_60647_62026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (10))){
var inst_60612 = (state_60628[(2)]);
var state_60628__$1 = state_60628;
var statearr_60648_62027 = state_60628__$1;
(statearr_60648_62027[(2)] = inst_60612);

(statearr_60648_62027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (8))){
var inst_60592 = (state_60628[(7)]);
var inst_60601 = (state_60628[(11)]);
var tmp60645 = inst_60592;
var inst_60592__$1 = tmp60645;
var inst_60593 = inst_60601;
var state_60628__$1 = (function (){var statearr_60649 = state_60628;
(statearr_60649[(7)] = inst_60592__$1);

(statearr_60649[(8)] = inst_60593);

return statearr_60649;
})();
var statearr_60650_62039 = state_60628__$1;
(statearr_60650_62039[(2)] = null);

(statearr_60650_62039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60651[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60651[(1)] = (1));

return statearr_60651;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60628){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60628);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60652){var ex__58317__auto__ = e60652;
var statearr_60653_62062 = state_60628;
(statearr_60653_62062[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60628[(4)]))){
var statearr_60654_62064 = state_60628;
(statearr_60654_62064[(1)] = cljs.core.first((state_60628[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62065 = state_60628;
state_60628 = G__62065;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60655 = f__58719__auto__();
(statearr_60655[(6)] = c__58718__auto___61973);

return statearr_60655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60657 = arguments.length;
switch (G__60657) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58718__auto___62068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58719__auto__ = (function (){var switch__58313__auto__ = (function (state_60699){
var state_val_60700 = (state_60699[(1)]);
if((state_val_60700 === (7))){
var inst_60695 = (state_60699[(2)]);
var state_60699__$1 = state_60699;
var statearr_60701_62069 = state_60699__$1;
(statearr_60701_62069[(2)] = inst_60695);

(statearr_60701_62069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (1))){
var inst_60658 = [];
var inst_60659 = inst_60658;
var inst_60660 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60699__$1 = (function (){var statearr_60702 = state_60699;
(statearr_60702[(7)] = inst_60659);

(statearr_60702[(8)] = inst_60660);

return statearr_60702;
})();
var statearr_60703_62070 = state_60699__$1;
(statearr_60703_62070[(2)] = null);

(statearr_60703_62070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (4))){
var inst_60663 = (state_60699[(9)]);
var inst_60663__$1 = (state_60699[(2)]);
var inst_60664 = (inst_60663__$1 == null);
var inst_60665 = cljs.core.not(inst_60664);
var state_60699__$1 = (function (){var statearr_60704 = state_60699;
(statearr_60704[(9)] = inst_60663__$1);

return statearr_60704;
})();
if(inst_60665){
var statearr_60705_62074 = state_60699__$1;
(statearr_60705_62074[(1)] = (5));

} else {
var statearr_60706_62075 = state_60699__$1;
(statearr_60706_62075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (15))){
var inst_60689 = (state_60699[(2)]);
var state_60699__$1 = state_60699;
var statearr_60707_62080 = state_60699__$1;
(statearr_60707_62080[(2)] = inst_60689);

(statearr_60707_62080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (13))){
var state_60699__$1 = state_60699;
var statearr_60708_62081 = state_60699__$1;
(statearr_60708_62081[(2)] = null);

(statearr_60708_62081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (6))){
var inst_60659 = (state_60699[(7)]);
var inst_60684 = inst_60659.length;
var inst_60685 = (inst_60684 > (0));
var state_60699__$1 = state_60699;
if(cljs.core.truth_(inst_60685)){
var statearr_60709_62090 = state_60699__$1;
(statearr_60709_62090[(1)] = (12));

} else {
var statearr_60710_62091 = state_60699__$1;
(statearr_60710_62091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (3))){
var inst_60697 = (state_60699[(2)]);
var state_60699__$1 = state_60699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60699__$1,inst_60697);
} else {
if((state_val_60700 === (12))){
var inst_60659 = (state_60699[(7)]);
var inst_60687 = cljs.core.vec(inst_60659);
var state_60699__$1 = state_60699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60699__$1,(15),out,inst_60687);
} else {
if((state_val_60700 === (2))){
var state_60699__$1 = state_60699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60699__$1,(4),ch);
} else {
if((state_val_60700 === (11))){
var inst_60667 = (state_60699[(10)]);
var inst_60663 = (state_60699[(9)]);
var inst_60677 = (state_60699[(2)]);
var inst_60678 = [];
var inst_60679 = inst_60678.push(inst_60663);
var inst_60659 = inst_60678;
var inst_60660 = inst_60667;
var state_60699__$1 = (function (){var statearr_60711 = state_60699;
(statearr_60711[(11)] = inst_60679);

(statearr_60711[(7)] = inst_60659);

(statearr_60711[(8)] = inst_60660);

(statearr_60711[(12)] = inst_60677);

return statearr_60711;
})();
var statearr_60712_62097 = state_60699__$1;
(statearr_60712_62097[(2)] = null);

(statearr_60712_62097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (9))){
var inst_60659 = (state_60699[(7)]);
var inst_60675 = cljs.core.vec(inst_60659);
var state_60699__$1 = state_60699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60699__$1,(11),out,inst_60675);
} else {
if((state_val_60700 === (5))){
var inst_60667 = (state_60699[(10)]);
var inst_60660 = (state_60699[(8)]);
var inst_60663 = (state_60699[(9)]);
var inst_60667__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60663) : f.call(null,inst_60663));
var inst_60668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60667__$1,inst_60660);
var inst_60669 = cljs.core.keyword_identical_QMARK_(inst_60660,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60670 = ((inst_60668) || (inst_60669));
var state_60699__$1 = (function (){var statearr_60713 = state_60699;
(statearr_60713[(10)] = inst_60667__$1);

return statearr_60713;
})();
if(cljs.core.truth_(inst_60670)){
var statearr_60714_62098 = state_60699__$1;
(statearr_60714_62098[(1)] = (8));

} else {
var statearr_60715_62099 = state_60699__$1;
(statearr_60715_62099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (14))){
var inst_60692 = (state_60699[(2)]);
var inst_60693 = cljs.core.async.close_BANG_(out);
var state_60699__$1 = (function (){var statearr_60717 = state_60699;
(statearr_60717[(13)] = inst_60692);

return statearr_60717;
})();
var statearr_60718_62100 = state_60699__$1;
(statearr_60718_62100[(2)] = inst_60693);

(statearr_60718_62100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (10))){
var inst_60682 = (state_60699[(2)]);
var state_60699__$1 = state_60699;
var statearr_60719_62101 = state_60699__$1;
(statearr_60719_62101[(2)] = inst_60682);

(statearr_60719_62101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60700 === (8))){
var inst_60667 = (state_60699[(10)]);
var inst_60659 = (state_60699[(7)]);
var inst_60663 = (state_60699[(9)]);
var inst_60672 = inst_60659.push(inst_60663);
var tmp60716 = inst_60659;
var inst_60659__$1 = tmp60716;
var inst_60660 = inst_60667;
var state_60699__$1 = (function (){var statearr_60720 = state_60699;
(statearr_60720[(14)] = inst_60672);

(statearr_60720[(7)] = inst_60659__$1);

(statearr_60720[(8)] = inst_60660);

return statearr_60720;
})();
var statearr_60721_62102 = state_60699__$1;
(statearr_60721_62102[(2)] = null);

(statearr_60721_62102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58314__auto__ = null;
var cljs$core$async$state_machine__58314__auto____0 = (function (){
var statearr_60722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60722[(0)] = cljs$core$async$state_machine__58314__auto__);

(statearr_60722[(1)] = (1));

return statearr_60722;
});
var cljs$core$async$state_machine__58314__auto____1 = (function (state_60699){
while(true){
var ret_value__58315__auto__ = (function (){try{while(true){
var result__58316__auto__ = switch__58313__auto__(state_60699);
if(cljs.core.keyword_identical_QMARK_(result__58316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58316__auto__;
}
break;
}
}catch (e60723){var ex__58317__auto__ = e60723;
var statearr_60724_62105 = state_60699;
(statearr_60724_62105[(2)] = ex__58317__auto__);


if(cljs.core.seq((state_60699[(4)]))){
var statearr_60725_62110 = state_60699;
(statearr_60725_62110[(1)] = cljs.core.first((state_60699[(4)])));

} else {
throw ex__58317__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62111 = state_60699;
state_60699 = G__62111;
continue;
} else {
return ret_value__58315__auto__;
}
break;
}
});
cljs$core$async$state_machine__58314__auto__ = function(state_60699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58314__auto____1.call(this,state_60699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58314__auto____0;
cljs$core$async$state_machine__58314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58314__auto____1;
return cljs$core$async$state_machine__58314__auto__;
})()
})();
var state__58720__auto__ = (function (){var statearr_60726 = f__58719__auto__();
(statearr_60726[(6)] = c__58718__auto___62068);

return statearr_60726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58720__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
