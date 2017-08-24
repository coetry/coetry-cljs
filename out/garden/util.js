// Compiled by ClojureScript 1.9.908 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__11546__auto__ = [];
var len__11539__auto___14198 = arguments.length;
var i__11540__auto___14199 = (0);
while(true){
if((i__11540__auto___14199 < len__11539__auto___14198)){
args__11546__auto__.push((arguments[i__11540__auto___14199]));

var G__14200 = (i__11540__auto___14199 + (1));
i__11540__auto___14199 = G__14200;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((1) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11547__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq14196){
var G__14197 = cljs.core.first.call(null,seq14196);
var seq14196__$1 = cljs.core.next.call(null,seq14196);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__14197,seq14196__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__11053__auto__ = (((this$ == null))?null:this$);
var m__11054__auto__ = (garden.util.to_str[goog.typeOf(x__11053__auto__)]);
if(!((m__11054__auto__ == null))){
return m__11054__auto__.call(null,this$);
} else {
var m__11054__auto____$1 = (garden.util.to_str["_"]);
if(!((m__11054__auto____$1 == null))){
return m__11054__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

goog.object.set(garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(garden.util.ToString,"null",true);

goog.object.set(garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__11546__auto__ = [];
var len__11539__auto___14202 = arguments.length;
var i__11540__auto___14203 = (0);
while(true){
if((i__11540__auto___14203 < len__11539__auto___14202)){
args__11546__auto__.push((arguments[i__11540__auto___14203]));

var G__14204 = (i__11540__auto___14203 + (1));
i__11540__auto___14203 = G__14204;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((0) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__11547__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq14201){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14201));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__11546__auto__ = [];
var len__11539__auto___14211 = arguments.length;
var i__11540__auto___14212 = (0);
while(true){
if((i__11540__auto___14212 < len__11539__auto___14211)){
args__11546__auto__.push((arguments[i__11540__auto___14212]));

var G__14213 = (i__11540__auto___14212 + (1));
i__11540__auto___14212 = G__14213;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((1) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11547__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__14207){
var vec__14208 = p__14207;
var radix = cljs.core.nth.call(null,vec__14208,(0),null);
var radix__$1 = (function (){var or__10370__auto__ = radix;
if(cljs.core.truth_(or__10370__auto__)){
return or__10370__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq14205){
var G__14206 = cljs.core.first.call(null,seq14205);
var seq14205__$1 = cljs.core.next.call(null,seq14205);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__14206,seq14205__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__11546__auto__ = [];
var len__11539__auto___14220 = arguments.length;
var i__11540__auto___14221 = (0);
while(true){
if((i__11540__auto___14221 < len__11539__auto___14220)){
args__11546__auto__.push((arguments[i__11540__auto___14221]));

var G__14222 = (i__11540__auto___14221 + (1));
i__11540__auto___14221 = G__14222;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((1) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11547__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__14216){
var vec__14217 = p__14216;
var radix = cljs.core.nth.call(null,vec__14217,(0),null);
var radix__$1 = (function (){var or__10370__auto__ = radix;
if(cljs.core.truth_(or__10370__auto__)){
return or__10370__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq14214){
var G__14215 = cljs.core.first.call(null,seq14214);
var seq14214__$1 = cljs.core.next.call(null,seq14214);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__14215,seq14214__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__11178__auto__ = (function garden$util$comma_join_$_iter__14223(s__14224){
return (new cljs.core.LazySeq(null,(function (){
var s__14224__$1 = s__14224;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14224__$1);
if(temp__4657__auto__){
var s__14224__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14224__$2)){
var c__11176__auto__ = cljs.core.chunk_first.call(null,s__14224__$2);
var size__11177__auto__ = cljs.core.count.call(null,c__11176__auto__);
var b__14226 = cljs.core.chunk_buffer.call(null,size__11177__auto__);
if((function (){var i__14225 = (0);
while(true){
if((i__14225 < size__11177__auto__)){
var x = cljs.core._nth.call(null,c__11176__auto__,i__14225);
cljs.core.chunk_append.call(null,b__14226,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__14227 = (i__14225 + (1));
i__14225 = G__14227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14226),garden$util$comma_join_$_iter__14223.call(null,cljs.core.chunk_rest.call(null,s__14224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14226),null);
}
} else {
var x = cljs.core.first.call(null,s__14224__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__14223.call(null,cljs.core.rest.call(null,s__14224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11178__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__10358__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__10358__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__10358__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__10358__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__10358__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__10358__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__10358__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__10358__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__10358__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__10727__auto__ = a;
var y__10728__auto__ = b;
return ((x__10727__auto__ < y__10728__auto__) ? x__10727__auto__ : y__10728__auto__);
})();
var top = (function (){var x__10720__auto__ = a;
var y__10721__auto__ = b;
return ((x__10720__auto__ > y__10721__auto__) ? x__10720__auto__ : y__10721__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__14228 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__14228,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__14228,(1),null);
var x__10720__auto__ = a__$1;
var y__10721__auto__ = (function (){var x__10727__auto__ = b__$1;
var y__10728__auto__ = n;
return ((x__10727__auto__ < y__10728__auto__) ? x__10727__auto__ : y__10728__auto__);
})();
return ((x__10720__auto__ > y__10721__auto__) ? x__10720__auto__ : y__10721__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__11546__auto__ = [];
var len__11539__auto___14234 = arguments.length;
var i__11540__auto___14235 = (0);
while(true){
if((i__11540__auto___14235 < len__11539__auto___14234)){
args__11546__auto__.push((arguments[i__11540__auto___14235]));

var G__14236 = (i__11540__auto___14235 + (1));
i__11540__auto___14235 = G__14236;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((2) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11547__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq14231){
var G__14232 = cljs.core.first.call(null,seq14231);
var seq14231__$1 = cljs.core.next.call(null,seq14231);
var G__14233 = cljs.core.first.call(null,seq14231__$1);
var seq14231__$2 = cljs.core.next.call(null,seq14231__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__14232,G__14233,seq14231__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__11546__auto__ = [];
var len__11539__auto___14238 = arguments.length;
var i__11540__auto___14239 = (0);
while(true){
if((i__11540__auto___14239 < len__11539__auto___14238)){
args__11546__auto__.push((arguments[i__11540__auto___14239]));

var G__14240 = (i__11540__auto___14239 + (1));
i__11540__auto___14239 = G__14240;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((0) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__11547__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__14241 = (i - (1));
var G__14242 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__14241;
v_seqs__$2 = G__14242;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq14237){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14237));
});


//# sourceMappingURL=util.js.map
