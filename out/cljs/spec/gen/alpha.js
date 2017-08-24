// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__10965__auto__,writer__10966__auto__,opt__10967__auto__){
return cljs.core._write.call(null,writer__10966__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13040 = arguments.length;
var i__11510__auto___13041 = (0);
while(true){
if((i__11510__auto___13041 < len__11509__auto___13040)){
args__11516__auto__.push((arguments[i__11510__auto___13041]));

var G__13042 = (i__11510__auto___13041 + (1));
i__11510__auto___13041 = G__13042;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13039){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13039));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13044 = arguments.length;
var i__11510__auto___13045 = (0);
while(true){
if((i__11510__auto___13045 < len__11509__auto___13044)){
args__11516__auto__.push((arguments[i__11510__auto___13045]));

var G__13046 = (i__11510__auto___13045 + (1));
i__11510__auto___13045 = G__13046;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13043){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13043));
});

var g_QMARK__13047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_13048 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13047){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__13047))
,null));
var mkg_13049 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13047,g_13048){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__13047,g_13048))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13047,g_13048,mkg_13049){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13047).call(null,x);
});})(g_QMARK__13047,g_13048,mkg_13049))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13047,g_13048,mkg_13049){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_13049).call(null,gfn);
});})(g_QMARK__13047,g_13048,mkg_13049))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13047,g_13048,mkg_13049){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_13048).call(null,generator);
});})(g_QMARK__13047,g_13048,mkg_13049))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11602__auto___13069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__11602__auto___13069){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13070 = arguments.length;
var i__11510__auto___13071 = (0);
while(true){
if((i__11510__auto___13071 < len__11509__auto___13070)){
args__11516__auto__.push((arguments[i__11510__auto___13071]));

var G__13072 = (i__11510__auto___13071 + (1));
i__11510__auto___13071 = G__13072;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13069))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13069),args);
});})(g__11602__auto___13069))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__11602__auto___13069){
return (function (seq13050){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13050));
});})(g__11602__auto___13069))
;


var g__11602__auto___13073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__11602__auto___13073){
return (function cljs$spec$gen$alpha$list(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13074 = arguments.length;
var i__11510__auto___13075 = (0);
while(true){
if((i__11510__auto___13075 < len__11509__auto___13074)){
args__11516__auto__.push((arguments[i__11510__auto___13075]));

var G__13076 = (i__11510__auto___13075 + (1));
i__11510__auto___13075 = G__13076;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13073))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13073),args);
});})(g__11602__auto___13073))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__11602__auto___13073){
return (function (seq13051){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13051));
});})(g__11602__auto___13073))
;


var g__11602__auto___13077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__11602__auto___13077){
return (function cljs$spec$gen$alpha$map(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13078 = arguments.length;
var i__11510__auto___13079 = (0);
while(true){
if((i__11510__auto___13079 < len__11509__auto___13078)){
args__11516__auto__.push((arguments[i__11510__auto___13079]));

var G__13080 = (i__11510__auto___13079 + (1));
i__11510__auto___13079 = G__13080;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13077))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13077),args);
});})(g__11602__auto___13077))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__11602__auto___13077){
return (function (seq13052){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13052));
});})(g__11602__auto___13077))
;


var g__11602__auto___13081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__11602__auto___13081){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13082 = arguments.length;
var i__11510__auto___13083 = (0);
while(true){
if((i__11510__auto___13083 < len__11509__auto___13082)){
args__11516__auto__.push((arguments[i__11510__auto___13083]));

var G__13084 = (i__11510__auto___13083 + (1));
i__11510__auto___13083 = G__13084;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13081))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13081),args);
});})(g__11602__auto___13081))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__11602__auto___13081){
return (function (seq13053){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13053));
});})(g__11602__auto___13081))
;


var g__11602__auto___13085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__11602__auto___13085){
return (function cljs$spec$gen$alpha$set(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13086 = arguments.length;
var i__11510__auto___13087 = (0);
while(true){
if((i__11510__auto___13087 < len__11509__auto___13086)){
args__11516__auto__.push((arguments[i__11510__auto___13087]));

var G__13088 = (i__11510__auto___13087 + (1));
i__11510__auto___13087 = G__13088;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13085))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13085),args);
});})(g__11602__auto___13085))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__11602__auto___13085){
return (function (seq13054){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13054));
});})(g__11602__auto___13085))
;


var g__11602__auto___13089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__11602__auto___13089){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13090 = arguments.length;
var i__11510__auto___13091 = (0);
while(true){
if((i__11510__auto___13091 < len__11509__auto___13090)){
args__11516__auto__.push((arguments[i__11510__auto___13091]));

var G__13092 = (i__11510__auto___13091 + (1));
i__11510__auto___13091 = G__13092;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13089))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13089),args);
});})(g__11602__auto___13089))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__11602__auto___13089){
return (function (seq13055){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13055));
});})(g__11602__auto___13089))
;


var g__11602__auto___13093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__11602__auto___13093){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13094 = arguments.length;
var i__11510__auto___13095 = (0);
while(true){
if((i__11510__auto___13095 < len__11509__auto___13094)){
args__11516__auto__.push((arguments[i__11510__auto___13095]));

var G__13096 = (i__11510__auto___13095 + (1));
i__11510__auto___13095 = G__13096;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13093))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13093),args);
});})(g__11602__auto___13093))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__11602__auto___13093){
return (function (seq13056){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13056));
});})(g__11602__auto___13093))
;


var g__11602__auto___13097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__11602__auto___13097){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13098 = arguments.length;
var i__11510__auto___13099 = (0);
while(true){
if((i__11510__auto___13099 < len__11509__auto___13098)){
args__11516__auto__.push((arguments[i__11510__auto___13099]));

var G__13100 = (i__11510__auto___13099 + (1));
i__11510__auto___13099 = G__13100;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13097))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13097),args);
});})(g__11602__auto___13097))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__11602__auto___13097){
return (function (seq13057){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13057));
});})(g__11602__auto___13097))
;


var g__11602__auto___13101 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__11602__auto___13101){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13102 = arguments.length;
var i__11510__auto___13103 = (0);
while(true){
if((i__11510__auto___13103 < len__11509__auto___13102)){
args__11516__auto__.push((arguments[i__11510__auto___13103]));

var G__13104 = (i__11510__auto___13103 + (1));
i__11510__auto___13103 = G__13104;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13101))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13101),args);
});})(g__11602__auto___13101))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__11602__auto___13101){
return (function (seq13058){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13058));
});})(g__11602__auto___13101))
;


var g__11602__auto___13105 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__11602__auto___13105){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13106 = arguments.length;
var i__11510__auto___13107 = (0);
while(true){
if((i__11510__auto___13107 < len__11509__auto___13106)){
args__11516__auto__.push((arguments[i__11510__auto___13107]));

var G__13108 = (i__11510__auto___13107 + (1));
i__11510__auto___13107 = G__13108;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13105))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13105),args);
});})(g__11602__auto___13105))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__11602__auto___13105){
return (function (seq13059){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13059));
});})(g__11602__auto___13105))
;


var g__11602__auto___13109 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__11602__auto___13109){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13110 = arguments.length;
var i__11510__auto___13111 = (0);
while(true){
if((i__11510__auto___13111 < len__11509__auto___13110)){
args__11516__auto__.push((arguments[i__11510__auto___13111]));

var G__13112 = (i__11510__auto___13111 + (1));
i__11510__auto___13111 = G__13112;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13109))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13109),args);
});})(g__11602__auto___13109))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__11602__auto___13109){
return (function (seq13060){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13060));
});})(g__11602__auto___13109))
;


var g__11602__auto___13113 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__11602__auto___13113){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13114 = arguments.length;
var i__11510__auto___13115 = (0);
while(true){
if((i__11510__auto___13115 < len__11509__auto___13114)){
args__11516__auto__.push((arguments[i__11510__auto___13115]));

var G__13116 = (i__11510__auto___13115 + (1));
i__11510__auto___13115 = G__13116;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13113))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13113),args);
});})(g__11602__auto___13113))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__11602__auto___13113){
return (function (seq13061){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13061));
});})(g__11602__auto___13113))
;


var g__11602__auto___13117 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__11602__auto___13117){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13118 = arguments.length;
var i__11510__auto___13119 = (0);
while(true){
if((i__11510__auto___13119 < len__11509__auto___13118)){
args__11516__auto__.push((arguments[i__11510__auto___13119]));

var G__13120 = (i__11510__auto___13119 + (1));
i__11510__auto___13119 = G__13120;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13117))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13117),args);
});})(g__11602__auto___13117))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__11602__auto___13117){
return (function (seq13062){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13062));
});})(g__11602__auto___13117))
;


var g__11602__auto___13121 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__11602__auto___13121){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13122 = arguments.length;
var i__11510__auto___13123 = (0);
while(true){
if((i__11510__auto___13123 < len__11509__auto___13122)){
args__11516__auto__.push((arguments[i__11510__auto___13123]));

var G__13124 = (i__11510__auto___13123 + (1));
i__11510__auto___13123 = G__13124;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13121))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13121),args);
});})(g__11602__auto___13121))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__11602__auto___13121){
return (function (seq13063){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13063));
});})(g__11602__auto___13121))
;


var g__11602__auto___13125 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__11602__auto___13125){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13126 = arguments.length;
var i__11510__auto___13127 = (0);
while(true){
if((i__11510__auto___13127 < len__11509__auto___13126)){
args__11516__auto__.push((arguments[i__11510__auto___13127]));

var G__13128 = (i__11510__auto___13127 + (1));
i__11510__auto___13127 = G__13128;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13125))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13125),args);
});})(g__11602__auto___13125))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__11602__auto___13125){
return (function (seq13064){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13064));
});})(g__11602__auto___13125))
;


var g__11602__auto___13129 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__11602__auto___13129){
return (function cljs$spec$gen$alpha$return(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13130 = arguments.length;
var i__11510__auto___13131 = (0);
while(true){
if((i__11510__auto___13131 < len__11509__auto___13130)){
args__11516__auto__.push((arguments[i__11510__auto___13131]));

var G__13132 = (i__11510__auto___13131 + (1));
i__11510__auto___13131 = G__13132;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13129))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13129),args);
});})(g__11602__auto___13129))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__11602__auto___13129){
return (function (seq13065){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13065));
});})(g__11602__auto___13129))
;


var g__11602__auto___13133 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__11602__auto___13133){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13134 = arguments.length;
var i__11510__auto___13135 = (0);
while(true){
if((i__11510__auto___13135 < len__11509__auto___13134)){
args__11516__auto__.push((arguments[i__11510__auto___13135]));

var G__13136 = (i__11510__auto___13135 + (1));
i__11510__auto___13135 = G__13136;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13133))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13133),args);
});})(g__11602__auto___13133))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11602__auto___13133){
return (function (seq13066){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13066));
});})(g__11602__auto___13133))
;


var g__11602__auto___13137 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__11602__auto___13137){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13138 = arguments.length;
var i__11510__auto___13139 = (0);
while(true){
if((i__11510__auto___13139 < len__11509__auto___13138)){
args__11516__auto__.push((arguments[i__11510__auto___13139]));

var G__13140 = (i__11510__auto___13139 + (1));
i__11510__auto___13139 = G__13140;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13137))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13137),args);
});})(g__11602__auto___13137))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__11602__auto___13137){
return (function (seq13067){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13067));
});})(g__11602__auto___13137))
;


var g__11602__auto___13141 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__11602__auto___13141){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13142 = arguments.length;
var i__11510__auto___13143 = (0);
while(true){
if((i__11510__auto___13143 < len__11509__auto___13142)){
args__11516__auto__.push((arguments[i__11510__auto___13143]));

var G__13144 = (i__11510__auto___13143 + (1));
i__11510__auto___13143 = G__13144;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11602__auto___13141))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11602__auto___13141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11602__auto___13141),args);
});})(g__11602__auto___13141))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__11602__auto___13141){
return (function (seq13068){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13068));
});})(g__11602__auto___13141))
;

var g__11615__auto___13166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__11615__auto___13166){
return (function cljs$spec$gen$alpha$any(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13167 = arguments.length;
var i__11510__auto___13168 = (0);
while(true){
if((i__11510__auto___13168 < len__11509__auto___13167)){
args__11516__auto__.push((arguments[i__11510__auto___13168]));

var G__13169 = (i__11510__auto___13168 + (1));
i__11510__auto___13168 = G__13169;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13166))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13166){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13166);
});})(g__11615__auto___13166))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__11615__auto___13166){
return (function (seq13145){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13145));
});})(g__11615__auto___13166))
;


var g__11615__auto___13170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__11615__auto___13170){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13171 = arguments.length;
var i__11510__auto___13172 = (0);
while(true){
if((i__11510__auto___13172 < len__11509__auto___13171)){
args__11516__auto__.push((arguments[i__11510__auto___13172]));

var G__13173 = (i__11510__auto___13172 + (1));
i__11510__auto___13172 = G__13173;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13170))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13170){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13170);
});})(g__11615__auto___13170))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__11615__auto___13170){
return (function (seq13146){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13146));
});})(g__11615__auto___13170))
;


var g__11615__auto___13174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__11615__auto___13174){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13175 = arguments.length;
var i__11510__auto___13176 = (0);
while(true){
if((i__11510__auto___13176 < len__11509__auto___13175)){
args__11516__auto__.push((arguments[i__11510__auto___13176]));

var G__13177 = (i__11510__auto___13176 + (1));
i__11510__auto___13176 = G__13177;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13174))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13174){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13174);
});})(g__11615__auto___13174))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__11615__auto___13174){
return (function (seq13147){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13147));
});})(g__11615__auto___13174))
;


var g__11615__auto___13178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__11615__auto___13178){
return (function cljs$spec$gen$alpha$char(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13179 = arguments.length;
var i__11510__auto___13180 = (0);
while(true){
if((i__11510__auto___13180 < len__11509__auto___13179)){
args__11516__auto__.push((arguments[i__11510__auto___13180]));

var G__13181 = (i__11510__auto___13180 + (1));
i__11510__auto___13180 = G__13181;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13178))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13178){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13178);
});})(g__11615__auto___13178))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__11615__auto___13178){
return (function (seq13148){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13148));
});})(g__11615__auto___13178))
;


var g__11615__auto___13182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__11615__auto___13182){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13183 = arguments.length;
var i__11510__auto___13184 = (0);
while(true){
if((i__11510__auto___13184 < len__11509__auto___13183)){
args__11516__auto__.push((arguments[i__11510__auto___13184]));

var G__13185 = (i__11510__auto___13184 + (1));
i__11510__auto___13184 = G__13185;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13182))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13182){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13182);
});})(g__11615__auto___13182))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__11615__auto___13182){
return (function (seq13149){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13149));
});})(g__11615__auto___13182))
;


var g__11615__auto___13186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__11615__auto___13186){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13187 = arguments.length;
var i__11510__auto___13188 = (0);
while(true){
if((i__11510__auto___13188 < len__11509__auto___13187)){
args__11516__auto__.push((arguments[i__11510__auto___13188]));

var G__13189 = (i__11510__auto___13188 + (1));
i__11510__auto___13188 = G__13189;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13186))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13186){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13186);
});})(g__11615__auto___13186))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__11615__auto___13186){
return (function (seq13150){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13150));
});})(g__11615__auto___13186))
;


var g__11615__auto___13190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__11615__auto___13190){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13191 = arguments.length;
var i__11510__auto___13192 = (0);
while(true){
if((i__11510__auto___13192 < len__11509__auto___13191)){
args__11516__auto__.push((arguments[i__11510__auto___13192]));

var G__13193 = (i__11510__auto___13192 + (1));
i__11510__auto___13192 = G__13193;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13190))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13190){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13190);
});})(g__11615__auto___13190))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__11615__auto___13190){
return (function (seq13151){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13151));
});})(g__11615__auto___13190))
;


var g__11615__auto___13194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__11615__auto___13194){
return (function cljs$spec$gen$alpha$double(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13195 = arguments.length;
var i__11510__auto___13196 = (0);
while(true){
if((i__11510__auto___13196 < len__11509__auto___13195)){
args__11516__auto__.push((arguments[i__11510__auto___13196]));

var G__13197 = (i__11510__auto___13196 + (1));
i__11510__auto___13196 = G__13197;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13194))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13194){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13194);
});})(g__11615__auto___13194))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__11615__auto___13194){
return (function (seq13152){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13152));
});})(g__11615__auto___13194))
;


var g__11615__auto___13198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__11615__auto___13198){
return (function cljs$spec$gen$alpha$int(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13199 = arguments.length;
var i__11510__auto___13200 = (0);
while(true){
if((i__11510__auto___13200 < len__11509__auto___13199)){
args__11516__auto__.push((arguments[i__11510__auto___13200]));

var G__13201 = (i__11510__auto___13200 + (1));
i__11510__auto___13200 = G__13201;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13198))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13198){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13198);
});})(g__11615__auto___13198))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__11615__auto___13198){
return (function (seq13153){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13153));
});})(g__11615__auto___13198))
;


var g__11615__auto___13202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__11615__auto___13202){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13203 = arguments.length;
var i__11510__auto___13204 = (0);
while(true){
if((i__11510__auto___13204 < len__11509__auto___13203)){
args__11516__auto__.push((arguments[i__11510__auto___13204]));

var G__13205 = (i__11510__auto___13204 + (1));
i__11510__auto___13204 = G__13205;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13202))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13202){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13202);
});})(g__11615__auto___13202))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__11615__auto___13202){
return (function (seq13154){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13154));
});})(g__11615__auto___13202))
;


var g__11615__auto___13206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__11615__auto___13206){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13207 = arguments.length;
var i__11510__auto___13208 = (0);
while(true){
if((i__11510__auto___13208 < len__11509__auto___13207)){
args__11516__auto__.push((arguments[i__11510__auto___13208]));

var G__13209 = (i__11510__auto___13208 + (1));
i__11510__auto___13208 = G__13209;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13206))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13206){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13206);
});})(g__11615__auto___13206))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__11615__auto___13206){
return (function (seq13155){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13155));
});})(g__11615__auto___13206))
;


var g__11615__auto___13210 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__11615__auto___13210){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13211 = arguments.length;
var i__11510__auto___13212 = (0);
while(true){
if((i__11510__auto___13212 < len__11509__auto___13211)){
args__11516__auto__.push((arguments[i__11510__auto___13212]));

var G__13213 = (i__11510__auto___13212 + (1));
i__11510__auto___13212 = G__13213;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13210))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13210){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13210);
});})(g__11615__auto___13210))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__11615__auto___13210){
return (function (seq13156){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13156));
});})(g__11615__auto___13210))
;


var g__11615__auto___13214 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__11615__auto___13214){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13215 = arguments.length;
var i__11510__auto___13216 = (0);
while(true){
if((i__11510__auto___13216 < len__11509__auto___13215)){
args__11516__auto__.push((arguments[i__11510__auto___13216]));

var G__13217 = (i__11510__auto___13216 + (1));
i__11510__auto___13216 = G__13217;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13214))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13214){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13214);
});})(g__11615__auto___13214))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__11615__auto___13214){
return (function (seq13157){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13157));
});})(g__11615__auto___13214))
;


var g__11615__auto___13218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__11615__auto___13218){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13219 = arguments.length;
var i__11510__auto___13220 = (0);
while(true){
if((i__11510__auto___13220 < len__11509__auto___13219)){
args__11516__auto__.push((arguments[i__11510__auto___13220]));

var G__13221 = (i__11510__auto___13220 + (1));
i__11510__auto___13220 = G__13221;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13218))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13218){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13218);
});})(g__11615__auto___13218))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__11615__auto___13218){
return (function (seq13158){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13158));
});})(g__11615__auto___13218))
;


var g__11615__auto___13222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__11615__auto___13222){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13223 = arguments.length;
var i__11510__auto___13224 = (0);
while(true){
if((i__11510__auto___13224 < len__11509__auto___13223)){
args__11516__auto__.push((arguments[i__11510__auto___13224]));

var G__13225 = (i__11510__auto___13224 + (1));
i__11510__auto___13224 = G__13225;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13222))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13222){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13222);
});})(g__11615__auto___13222))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__11615__auto___13222){
return (function (seq13159){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13159));
});})(g__11615__auto___13222))
;


var g__11615__auto___13226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__11615__auto___13226){
return (function cljs$spec$gen$alpha$string(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13227 = arguments.length;
var i__11510__auto___13228 = (0);
while(true){
if((i__11510__auto___13228 < len__11509__auto___13227)){
args__11516__auto__.push((arguments[i__11510__auto___13228]));

var G__13229 = (i__11510__auto___13228 + (1));
i__11510__auto___13228 = G__13229;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13226))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13226){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13226);
});})(g__11615__auto___13226))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__11615__auto___13226){
return (function (seq13160){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13160));
});})(g__11615__auto___13226))
;


var g__11615__auto___13230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__11615__auto___13230){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13231 = arguments.length;
var i__11510__auto___13232 = (0);
while(true){
if((i__11510__auto___13232 < len__11509__auto___13231)){
args__11516__auto__.push((arguments[i__11510__auto___13232]));

var G__13233 = (i__11510__auto___13232 + (1));
i__11510__auto___13232 = G__13233;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13230))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13230){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13230);
});})(g__11615__auto___13230))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__11615__auto___13230){
return (function (seq13161){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13161));
});})(g__11615__auto___13230))
;


var g__11615__auto___13234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__11615__auto___13234){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13235 = arguments.length;
var i__11510__auto___13236 = (0);
while(true){
if((i__11510__auto___13236 < len__11509__auto___13235)){
args__11516__auto__.push((arguments[i__11510__auto___13236]));

var G__13237 = (i__11510__auto___13236 + (1));
i__11510__auto___13236 = G__13237;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13234))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13234){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13234);
});})(g__11615__auto___13234))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__11615__auto___13234){
return (function (seq13162){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13162));
});})(g__11615__auto___13234))
;


var g__11615__auto___13238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__11615__auto___13238){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13239 = arguments.length;
var i__11510__auto___13240 = (0);
while(true){
if((i__11510__auto___13240 < len__11509__auto___13239)){
args__11516__auto__.push((arguments[i__11510__auto___13240]));

var G__13241 = (i__11510__auto___13240 + (1));
i__11510__auto___13240 = G__13241;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13238))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13238){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13238);
});})(g__11615__auto___13238))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__11615__auto___13238){
return (function (seq13163){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13163));
});})(g__11615__auto___13238))
;


var g__11615__auto___13242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__11615__auto___13242){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13243 = arguments.length;
var i__11510__auto___13244 = (0);
while(true){
if((i__11510__auto___13244 < len__11509__auto___13243)){
args__11516__auto__.push((arguments[i__11510__auto___13244]));

var G__13245 = (i__11510__auto___13244 + (1));
i__11510__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13242))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13242){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13242);
});})(g__11615__auto___13242))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__11615__auto___13242){
return (function (seq13164){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13164));
});})(g__11615__auto___13242))
;


var g__11615__auto___13246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__11615__auto___13246){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13247 = arguments.length;
var i__11510__auto___13248 = (0);
while(true){
if((i__11510__auto___13248 < len__11509__auto___13247)){
args__11516__auto__.push((arguments[i__11510__auto___13248]));

var G__13249 = (i__11510__auto___13248 + (1));
i__11510__auto___13248 = G__13249;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});})(g__11615__auto___13246))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11615__auto___13246){
return (function (args){
return cljs.core.deref.call(null,g__11615__auto___13246);
});})(g__11615__auto___13246))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__11615__auto___13246){
return (function (seq13165){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13165));
});})(g__11615__auto___13246))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__11516__auto__ = [];
var len__11509__auto___13252 = arguments.length;
var i__11510__auto___13253 = (0);
while(true){
if((i__11510__auto___13253 < len__11509__auto___13252)){
args__11516__auto__.push((arguments[i__11510__auto___13253]));

var G__13254 = (i__11510__auto___13253 + (1));
i__11510__auto___13253 = G__13254;
continue;
} else {
}
break;
}

var argseq__11517__auto__ = ((((0) < args__11516__auto__.length))?(new cljs.core.IndexedSeq(args__11516__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11517__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13250_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13250_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq13251){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13251));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__13255_SHARP_){
return (new Date(p1__13255_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
