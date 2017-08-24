// Compiled by ClojureScript 1.9.908 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__11546__auto__ = [];
var len__11539__auto___13854 = arguments.length;
var i__11540__auto___13855 = (0);
while(true){
if((i__11540__auto___13855 < len__11539__auto___13854)){
args__11546__auto__.push((arguments[i__11540__auto___13855]));

var G__13856 = (i__11540__auto___13855 + (1));
i__11540__auto___13855 = G__13856;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((0) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__11547__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq13853){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13853));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__11546__auto__ = [];
var len__11539__auto___13858 = arguments.length;
var i__11540__auto___13859 = (0);
while(true){
if((i__11540__auto___13859 < len__11539__auto___13858)){
args__11546__auto__.push((arguments[i__11540__auto___13859]));

var G__13860 = (i__11540__auto___13859 + (1));
i__11540__auto___13859 = G__13860;
continue;
} else {
}
break;
}

var argseq__11547__auto__ = ((((0) < args__11546__auto__.length))?(new cljs.core.IndexedSeq(args__11546__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__11547__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq13857){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13857));
});


//# sourceMappingURL=core.js.map
