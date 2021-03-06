// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12368){
var map__12369 = p__12368;
var map__12369__$1 = ((((!((map__12369 == null)))?((((map__12369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12369):map__12369);
var m = map__12369__$1;
var n = cljs.core.get.call(null,map__12369__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12371_12393 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12372_12394 = null;
var count__12373_12395 = (0);
var i__12374_12396 = (0);
while(true){
if((i__12374_12396 < count__12373_12395)){
var f_12397 = cljs.core._nth.call(null,chunk__12372_12394,i__12374_12396);
cljs.core.println.call(null,"  ",f_12397);

var G__12398 = seq__12371_12393;
var G__12399 = chunk__12372_12394;
var G__12400 = count__12373_12395;
var G__12401 = (i__12374_12396 + (1));
seq__12371_12393 = G__12398;
chunk__12372_12394 = G__12399;
count__12373_12395 = G__12400;
i__12374_12396 = G__12401;
continue;
} else {
var temp__4657__auto___12402 = cljs.core.seq.call(null,seq__12371_12393);
if(temp__4657__auto___12402){
var seq__12371_12403__$1 = temp__4657__auto___12402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12371_12403__$1)){
var c__11179__auto___12404 = cljs.core.chunk_first.call(null,seq__12371_12403__$1);
var G__12405 = cljs.core.chunk_rest.call(null,seq__12371_12403__$1);
var G__12406 = c__11179__auto___12404;
var G__12407 = cljs.core.count.call(null,c__11179__auto___12404);
var G__12408 = (0);
seq__12371_12393 = G__12405;
chunk__12372_12394 = G__12406;
count__12373_12395 = G__12407;
i__12374_12396 = G__12408;
continue;
} else {
var f_12409 = cljs.core.first.call(null,seq__12371_12403__$1);
cljs.core.println.call(null,"  ",f_12409);

var G__12410 = cljs.core.next.call(null,seq__12371_12403__$1);
var G__12411 = null;
var G__12412 = (0);
var G__12413 = (0);
seq__12371_12393 = G__12410;
chunk__12372_12394 = G__12411;
count__12373_12395 = G__12412;
i__12374_12396 = G__12413;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12414 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10340__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10340__auto__)){
return or__10340__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12414);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12414)))?cljs.core.second.call(null,arglists_12414):arglists_12414));
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
var seq__12375_12415 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12376_12416 = null;
var count__12377_12417 = (0);
var i__12378_12418 = (0);
while(true){
if((i__12378_12418 < count__12377_12417)){
var vec__12379_12419 = cljs.core._nth.call(null,chunk__12376_12416,i__12378_12418);
var name_12420 = cljs.core.nth.call(null,vec__12379_12419,(0),null);
var map__12382_12421 = cljs.core.nth.call(null,vec__12379_12419,(1),null);
var map__12382_12422__$1 = ((((!((map__12382_12421 == null)))?((((map__12382_12421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12382_12421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12382_12421):map__12382_12421);
var doc_12423 = cljs.core.get.call(null,map__12382_12422__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12424 = cljs.core.get.call(null,map__12382_12422__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12420);

cljs.core.println.call(null," ",arglists_12424);

if(cljs.core.truth_(doc_12423)){
cljs.core.println.call(null," ",doc_12423);
} else {
}

var G__12425 = seq__12375_12415;
var G__12426 = chunk__12376_12416;
var G__12427 = count__12377_12417;
var G__12428 = (i__12378_12418 + (1));
seq__12375_12415 = G__12425;
chunk__12376_12416 = G__12426;
count__12377_12417 = G__12427;
i__12378_12418 = G__12428;
continue;
} else {
var temp__4657__auto___12429 = cljs.core.seq.call(null,seq__12375_12415);
if(temp__4657__auto___12429){
var seq__12375_12430__$1 = temp__4657__auto___12429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12375_12430__$1)){
var c__11179__auto___12431 = cljs.core.chunk_first.call(null,seq__12375_12430__$1);
var G__12432 = cljs.core.chunk_rest.call(null,seq__12375_12430__$1);
var G__12433 = c__11179__auto___12431;
var G__12434 = cljs.core.count.call(null,c__11179__auto___12431);
var G__12435 = (0);
seq__12375_12415 = G__12432;
chunk__12376_12416 = G__12433;
count__12377_12417 = G__12434;
i__12378_12418 = G__12435;
continue;
} else {
var vec__12384_12436 = cljs.core.first.call(null,seq__12375_12430__$1);
var name_12437 = cljs.core.nth.call(null,vec__12384_12436,(0),null);
var map__12387_12438 = cljs.core.nth.call(null,vec__12384_12436,(1),null);
var map__12387_12439__$1 = ((((!((map__12387_12438 == null)))?((((map__12387_12438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12387_12438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12387_12438):map__12387_12438);
var doc_12440 = cljs.core.get.call(null,map__12387_12439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12441 = cljs.core.get.call(null,map__12387_12439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12437);

cljs.core.println.call(null," ",arglists_12441);

if(cljs.core.truth_(doc_12440)){
cljs.core.println.call(null," ",doc_12440);
} else {
}

var G__12442 = cljs.core.next.call(null,seq__12375_12430__$1);
var G__12443 = null;
var G__12444 = (0);
var G__12445 = (0);
seq__12375_12415 = G__12442;
chunk__12376_12416 = G__12443;
count__12377_12417 = G__12444;
i__12378_12418 = G__12445;
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

var seq__12389 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12390 = null;
var count__12391 = (0);
var i__12392 = (0);
while(true){
if((i__12392 < count__12391)){
var role = cljs.core._nth.call(null,chunk__12390,i__12392);
var temp__4657__auto___12446__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12446__$1)){
var spec_12447 = temp__4657__auto___12446__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12447));
} else {
}

var G__12448 = seq__12389;
var G__12449 = chunk__12390;
var G__12450 = count__12391;
var G__12451 = (i__12392 + (1));
seq__12389 = G__12448;
chunk__12390 = G__12449;
count__12391 = G__12450;
i__12392 = G__12451;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12389);
if(temp__4657__auto____$1){
var seq__12389__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12389__$1)){
var c__11179__auto__ = cljs.core.chunk_first.call(null,seq__12389__$1);
var G__12452 = cljs.core.chunk_rest.call(null,seq__12389__$1);
var G__12453 = c__11179__auto__;
var G__12454 = cljs.core.count.call(null,c__11179__auto__);
var G__12455 = (0);
seq__12389 = G__12452;
chunk__12390 = G__12453;
count__12391 = G__12454;
i__12392 = G__12455;
continue;
} else {
var role = cljs.core.first.call(null,seq__12389__$1);
var temp__4657__auto___12456__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12456__$2)){
var spec_12457 = temp__4657__auto___12456__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12457));
} else {
}

var G__12458 = cljs.core.next.call(null,seq__12389__$1);
var G__12459 = null;
var G__12460 = (0);
var G__12461 = (0);
seq__12389 = G__12458;
chunk__12390 = G__12459;
count__12391 = G__12460;
i__12392 = G__12461;
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
