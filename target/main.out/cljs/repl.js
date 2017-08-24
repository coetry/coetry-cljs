// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10978){
var map__10979 = p__10978;
var map__10979__$1 = ((((!((map__10979 == null)))?((((map__10979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10979):map__10979);
var m = map__10979__$1;
var n = cljs.core.get.call(null,map__10979__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10981_11003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10982_11004 = null;
var count__10983_11005 = (0);
var i__10984_11006 = (0);
while(true){
if((i__10984_11006 < count__10983_11005)){
var f_11007 = cljs.core._nth.call(null,chunk__10982_11004,i__10984_11006);
cljs.core.println.call(null,"  ",f_11007);

var G__11008 = seq__10981_11003;
var G__11009 = chunk__10982_11004;
var G__11010 = count__10983_11005;
var G__11011 = (i__10984_11006 + (1));
seq__10981_11003 = G__11008;
chunk__10982_11004 = G__11009;
count__10983_11005 = G__11010;
i__10984_11006 = G__11011;
continue;
} else {
var temp__4657__auto___11012 = cljs.core.seq.call(null,seq__10981_11003);
if(temp__4657__auto___11012){
var seq__10981_11013__$1 = temp__4657__auto___11012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10981_11013__$1)){
var c__8772__auto___11014 = cljs.core.chunk_first.call(null,seq__10981_11013__$1);
var G__11015 = cljs.core.chunk_rest.call(null,seq__10981_11013__$1);
var G__11016 = c__8772__auto___11014;
var G__11017 = cljs.core.count.call(null,c__8772__auto___11014);
var G__11018 = (0);
seq__10981_11003 = G__11015;
chunk__10982_11004 = G__11016;
count__10983_11005 = G__11017;
i__10984_11006 = G__11018;
continue;
} else {
var f_11019 = cljs.core.first.call(null,seq__10981_11013__$1);
cljs.core.println.call(null,"  ",f_11019);

var G__11020 = cljs.core.next.call(null,seq__10981_11013__$1);
var G__11021 = null;
var G__11022 = (0);
var G__11023 = (0);
seq__10981_11003 = G__11020;
chunk__10982_11004 = G__11021;
count__10983_11005 = G__11022;
i__10984_11006 = G__11023;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11024 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7933__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7933__auto__)){
return or__7933__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11024);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11024)))?cljs.core.second.call(null,arglists_11024):arglists_11024));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10985_11025 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10986_11026 = null;
var count__10987_11027 = (0);
var i__10988_11028 = (0);
while(true){
if((i__10988_11028 < count__10987_11027)){
var vec__10989_11029 = cljs.core._nth.call(null,chunk__10986_11026,i__10988_11028);
var name_11030 = cljs.core.nth.call(null,vec__10989_11029,(0),null);
var map__10992_11031 = cljs.core.nth.call(null,vec__10989_11029,(1),null);
var map__10992_11032__$1 = ((((!((map__10992_11031 == null)))?((((map__10992_11031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10992_11031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10992_11031):map__10992_11031);
var doc_11033 = cljs.core.get.call(null,map__10992_11032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11034 = cljs.core.get.call(null,map__10992_11032__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11030);

cljs.core.println.call(null," ",arglists_11034);

if(cljs.core.truth_(doc_11033)){
cljs.core.println.call(null," ",doc_11033);
} else {
}

var G__11035 = seq__10985_11025;
var G__11036 = chunk__10986_11026;
var G__11037 = count__10987_11027;
var G__11038 = (i__10988_11028 + (1));
seq__10985_11025 = G__11035;
chunk__10986_11026 = G__11036;
count__10987_11027 = G__11037;
i__10988_11028 = G__11038;
continue;
} else {
var temp__4657__auto___11039 = cljs.core.seq.call(null,seq__10985_11025);
if(temp__4657__auto___11039){
var seq__10985_11040__$1 = temp__4657__auto___11039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10985_11040__$1)){
var c__8772__auto___11041 = cljs.core.chunk_first.call(null,seq__10985_11040__$1);
var G__11042 = cljs.core.chunk_rest.call(null,seq__10985_11040__$1);
var G__11043 = c__8772__auto___11041;
var G__11044 = cljs.core.count.call(null,c__8772__auto___11041);
var G__11045 = (0);
seq__10985_11025 = G__11042;
chunk__10986_11026 = G__11043;
count__10987_11027 = G__11044;
i__10988_11028 = G__11045;
continue;
} else {
var vec__10994_11046 = cljs.core.first.call(null,seq__10985_11040__$1);
var name_11047 = cljs.core.nth.call(null,vec__10994_11046,(0),null);
var map__10997_11048 = cljs.core.nth.call(null,vec__10994_11046,(1),null);
var map__10997_11049__$1 = ((((!((map__10997_11048 == null)))?((((map__10997_11048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10997_11048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10997_11048):map__10997_11048);
var doc_11050 = cljs.core.get.call(null,map__10997_11049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11051 = cljs.core.get.call(null,map__10997_11049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11047);

cljs.core.println.call(null," ",arglists_11051);

if(cljs.core.truth_(doc_11050)){
cljs.core.println.call(null," ",doc_11050);
} else {
}

var G__11052 = cljs.core.next.call(null,seq__10985_11040__$1);
var G__11053 = null;
var G__11054 = (0);
var G__11055 = (0);
seq__10985_11025 = G__11052;
chunk__10986_11026 = G__11053;
count__10987_11027 = G__11054;
i__10988_11028 = G__11055;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__10999 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11000 = null;
var count__11001 = (0);
var i__11002 = (0);
while(true){
if((i__11002 < count__11001)){
var role = cljs.core._nth.call(null,chunk__11000,i__11002);
var temp__4657__auto___11056__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11056__$1)){
var spec_11057 = temp__4657__auto___11056__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11057));
} else {
}

var G__11058 = seq__10999;
var G__11059 = chunk__11000;
var G__11060 = count__11001;
var G__11061 = (i__11002 + (1));
seq__10999 = G__11058;
chunk__11000 = G__11059;
count__11001 = G__11060;
i__11002 = G__11061;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10999);
if(temp__4657__auto____$1){
var seq__10999__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10999__$1)){
var c__8772__auto__ = cljs.core.chunk_first.call(null,seq__10999__$1);
var G__11062 = cljs.core.chunk_rest.call(null,seq__10999__$1);
var G__11063 = c__8772__auto__;
var G__11064 = cljs.core.count.call(null,c__8772__auto__);
var G__11065 = (0);
seq__10999 = G__11062;
chunk__11000 = G__11063;
count__11001 = G__11064;
i__11002 = G__11065;
continue;
} else {
var role = cljs.core.first.call(null,seq__10999__$1);
var temp__4657__auto___11066__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11066__$2)){
var spec_11067 = temp__4657__auto___11066__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11067));
} else {
}

var G__11068 = cljs.core.next.call(null,seq__10999__$1);
var G__11069 = null;
var G__11070 = (0);
var G__11071 = (0);
seq__10999 = G__11068;
chunk__11000 = G__11069;
count__11001 = G__11070;
i__11002 = G__11071;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
