// Compiled by ClojureScript 1.9.908 {}
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11010__auto__,k__11011__auto__){
var self__ = this;
var this__11010__auto____$1 = this;
return this__11010__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11011__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11012__auto__,k14246,else__11013__auto__){
var self__ = this;
var this__11012__auto____$1 = this;
var G__14250 = k14246;
var G__14250__$1 = (((G__14250 instanceof cljs.core.Keyword))?G__14250.fqn:null);
switch (G__14250__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14246,else__11013__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11024__auto__,writer__11025__auto__,opts__11026__auto__){
var self__ = this;
var this__11024__auto____$1 = this;
var pr_pair__11027__auto__ = ((function (this__11024__auto____$1){
return (function (keyval__11028__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11025__auto__,cljs.core.pr_writer,""," ","",opts__11026__auto__,keyval__11028__auto__);
});})(this__11024__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11025__auto__,pr_pair__11027__auto__,"#garden.types.CSSUnit{",", ","}",opts__11026__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14245){
var self__ = this;
var G__14245__$1 = this;
return (new cljs.core.RecordIter((0),G__14245__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11008__auto__){
var self__ = this;
var this__11008__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11005__auto__){
var self__ = this;
var this__11005__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11014__auto__){
var self__ = this;
var this__11014__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11006__auto__){
var self__ = this;
var this__11006__auto____$1 = this;
var h__10824__auto__ = self__.__hash;
if(!((h__10824__auto__ == null))){
return h__10824__auto__;
} else {
var h__10824__auto____$1 = ((function (h__10824__auto__,this__11006__auto____$1){
return (function (coll__11007__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__11007__auto__));
});})(h__10824__auto__,this__11006__auto____$1))
.call(null,this__11006__auto____$1);
self__.__hash = h__10824__auto____$1;

return h__10824__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14247,other14248){
var self__ = this;
var this14247__$1 = this;
return (!((other14248 == null))) && ((this14247__$1.constructor === other14248.constructor)) && (cljs.core._EQ_.call(null,this14247__$1.unit,other14248.unit)) && (cljs.core._EQ_.call(null,this14247__$1.magnitude,other14248.magnitude)) && (cljs.core._EQ_.call(null,this14247__$1.__extmap,other14248.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11019__auto__,k__11020__auto__){
var self__ = this;
var this__11019__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__11020__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11019__auto____$1),self__.__meta),k__11020__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11020__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11017__auto__,k__11018__auto__,G__14245){
var self__ = this;
var this__11017__auto____$1 = this;
var pred__14251 = cljs.core.keyword_identical_QMARK_;
var expr__14252 = k__11018__auto__;
if(cljs.core.truth_(pred__14251.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__14252))){
return (new garden.types.CSSUnit(G__14245,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14251.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__14252))){
return (new garden.types.CSSUnit(self__.unit,G__14245,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11018__auto__,G__14245),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11022__auto__){
var self__ = this;
var this__11022__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11009__auto__,G__14245){
var self__ = this;
var this__11009__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__14245,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11015__auto__,entry__11016__auto__){
var self__ = this;
var this__11015__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11016__auto__)){
return this__11015__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11016__auto__,(0)),cljs.core._nth.call(null,entry__11016__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11015__auto____$1,entry__11016__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__11046__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__11046__auto__,writer__11047__auto__){
return cljs.core._write.call(null,writer__11047__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__14249){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__14249),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__14249),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__14249,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11010__auto__,k__11011__auto__){
var self__ = this;
var this__11010__auto____$1 = this;
return this__11010__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11011__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11012__auto__,k14256,else__11013__auto__){
var self__ = this;
var this__11012__auto____$1 = this;
var G__14260 = k14256;
var G__14260__$1 = (((G__14260 instanceof cljs.core.Keyword))?G__14260.fqn:null);
switch (G__14260__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14256,else__11013__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11024__auto__,writer__11025__auto__,opts__11026__auto__){
var self__ = this;
var this__11024__auto____$1 = this;
var pr_pair__11027__auto__ = ((function (this__11024__auto____$1){
return (function (keyval__11028__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11025__auto__,cljs.core.pr_writer,""," ","",opts__11026__auto__,keyval__11028__auto__);
});})(this__11024__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11025__auto__,pr_pair__11027__auto__,"#garden.types.CSSFunction{",", ","}",opts__11026__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14255){
var self__ = this;
var G__14255__$1 = this;
return (new cljs.core.RecordIter((0),G__14255__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11008__auto__){
var self__ = this;
var this__11008__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11005__auto__){
var self__ = this;
var this__11005__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11014__auto__){
var self__ = this;
var this__11014__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11006__auto__){
var self__ = this;
var this__11006__auto____$1 = this;
var h__10824__auto__ = self__.__hash;
if(!((h__10824__auto__ == null))){
return h__10824__auto__;
} else {
var h__10824__auto____$1 = ((function (h__10824__auto__,this__11006__auto____$1){
return (function (coll__11007__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__11007__auto__));
});})(h__10824__auto__,this__11006__auto____$1))
.call(null,this__11006__auto____$1);
self__.__hash = h__10824__auto____$1;

return h__10824__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14257,other14258){
var self__ = this;
var this14257__$1 = this;
return (!((other14258 == null))) && ((this14257__$1.constructor === other14258.constructor)) && (cljs.core._EQ_.call(null,this14257__$1.function,other14258.function)) && (cljs.core._EQ_.call(null,this14257__$1.args,other14258.args)) && (cljs.core._EQ_.call(null,this14257__$1.__extmap,other14258.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11019__auto__,k__11020__auto__){
var self__ = this;
var this__11019__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__11020__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11019__auto____$1),self__.__meta),k__11020__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11020__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11017__auto__,k__11018__auto__,G__14255){
var self__ = this;
var this__11017__auto____$1 = this;
var pred__14261 = cljs.core.keyword_identical_QMARK_;
var expr__14262 = k__11018__auto__;
if(cljs.core.truth_(pred__14261.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__14262))){
return (new garden.types.CSSFunction(G__14255,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14261.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__14262))){
return (new garden.types.CSSFunction(self__.function$,G__14255,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11018__auto__,G__14255),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11022__auto__){
var self__ = this;
var this__11022__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11009__auto__,G__14255){
var self__ = this;
var this__11009__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__14255,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11015__auto__,entry__11016__auto__){
var self__ = this;
var this__11015__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11016__auto__)){
return this__11015__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11016__auto__,(0)),cljs.core._nth.call(null,entry__11016__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11015__auto____$1,entry__11016__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__11046__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__11046__auto__,writer__11047__auto__){
return cljs.core._write.call(null,writer__11047__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__14259){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__14259),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__14259),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__14259,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11010__auto__,k__11011__auto__){
var self__ = this;
var this__11010__auto____$1 = this;
return this__11010__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11011__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11012__auto__,k14266,else__11013__auto__){
var self__ = this;
var this__11012__auto____$1 = this;
var G__14270 = k14266;
var G__14270__$1 = (((G__14270 instanceof cljs.core.Keyword))?G__14270.fqn:null);
switch (G__14270__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14266,else__11013__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11024__auto__,writer__11025__auto__,opts__11026__auto__){
var self__ = this;
var this__11024__auto____$1 = this;
var pr_pair__11027__auto__ = ((function (this__11024__auto____$1){
return (function (keyval__11028__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11025__auto__,cljs.core.pr_writer,""," ","",opts__11026__auto__,keyval__11028__auto__);
});})(this__11024__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11025__auto__,pr_pair__11027__auto__,"#garden.types.CSSAtRule{",", ","}",opts__11026__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14265){
var self__ = this;
var G__14265__$1 = this;
return (new cljs.core.RecordIter((0),G__14265__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11008__auto__){
var self__ = this;
var this__11008__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11005__auto__){
var self__ = this;
var this__11005__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11014__auto__){
var self__ = this;
var this__11014__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11006__auto__){
var self__ = this;
var this__11006__auto____$1 = this;
var h__10824__auto__ = self__.__hash;
if(!((h__10824__auto__ == null))){
return h__10824__auto__;
} else {
var h__10824__auto____$1 = ((function (h__10824__auto__,this__11006__auto____$1){
return (function (coll__11007__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__11007__auto__));
});})(h__10824__auto__,this__11006__auto____$1))
.call(null,this__11006__auto____$1);
self__.__hash = h__10824__auto____$1;

return h__10824__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14267,other14268){
var self__ = this;
var this14267__$1 = this;
return (!((other14268 == null))) && ((this14267__$1.constructor === other14268.constructor)) && (cljs.core._EQ_.call(null,this14267__$1.identifier,other14268.identifier)) && (cljs.core._EQ_.call(null,this14267__$1.value,other14268.value)) && (cljs.core._EQ_.call(null,this14267__$1.__extmap,other14268.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11019__auto__,k__11020__auto__){
var self__ = this;
var this__11019__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__11020__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11019__auto____$1),self__.__meta),k__11020__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11020__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11017__auto__,k__11018__auto__,G__14265){
var self__ = this;
var this__11017__auto____$1 = this;
var pred__14271 = cljs.core.keyword_identical_QMARK_;
var expr__14272 = k__11018__auto__;
if(cljs.core.truth_(pred__14271.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__14272))){
return (new garden.types.CSSAtRule(G__14265,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14271.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__14272))){
return (new garden.types.CSSAtRule(self__.identifier,G__14265,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11018__auto__,G__14265),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11022__auto__){
var self__ = this;
var this__11022__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11009__auto__,G__14265){
var self__ = this;
var this__11009__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__14265,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11015__auto__,entry__11016__auto__){
var self__ = this;
var this__11015__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11016__auto__)){
return this__11015__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11016__auto__,(0)),cljs.core._nth.call(null,entry__11016__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11015__auto____$1,entry__11016__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__11046__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__11046__auto__,writer__11047__auto__){
return cljs.core._write.call(null,writer__11047__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__14269){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__14269),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__14269),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__14269,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});


//# sourceMappingURL=types.js.map
