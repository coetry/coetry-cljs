// Compiled by ClojureScript 1.9.908 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__11551_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__11551_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__11552 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__11553 = null;
var count__11554 = (0);
var i__11555 = (0);
while(true){
if((i__11555 < count__11554)){
var s = cljs.core._nth.call(null,chunk__11553,i__11555);
var temp__4657__auto___11556 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___11556)){
var sheet_11557 = temp__4657__auto___11556;
var temp__4657__auto___11558__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_11557.href,changed);
if(cljs.core.truth_(temp__4657__auto___11558__$1)){
var href_uri_11559 = temp__4657__auto___11558__$1;
sheet_11557.ownerNode.href = href_uri_11559.makeUnique().toString();
} else {
}
} else {
}

var G__11560 = seq__11552;
var G__11561 = chunk__11553;
var G__11562 = count__11554;
var G__11563 = (i__11555 + (1));
seq__11552 = G__11560;
chunk__11553 = G__11561;
count__11554 = G__11562;
i__11555 = G__11563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11552);
if(temp__4657__auto__){
var seq__11552__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11552__$1)){
var c__8772__auto__ = cljs.core.chunk_first.call(null,seq__11552__$1);
var G__11564 = cljs.core.chunk_rest.call(null,seq__11552__$1);
var G__11565 = c__8772__auto__;
var G__11566 = cljs.core.count.call(null,c__8772__auto__);
var G__11567 = (0);
seq__11552 = G__11564;
chunk__11553 = G__11565;
count__11554 = G__11566;
i__11555 = G__11567;
continue;
} else {
var s = cljs.core.first.call(null,seq__11552__$1);
var temp__4657__auto___11568__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___11568__$1)){
var sheet_11569 = temp__4657__auto___11568__$1;
var temp__4657__auto___11570__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_11569.href,changed);
if(cljs.core.truth_(temp__4657__auto___11570__$2)){
var href_uri_11571 = temp__4657__auto___11570__$2;
sheet_11569.ownerNode.href = href_uri_11571.makeUnique().toString();
} else {
}
} else {
}

var G__11572 = cljs.core.next.call(null,seq__11552__$1);
var G__11573 = null;
var G__11574 = (0);
var G__11575 = (0);
seq__11552 = G__11572;
chunk__11553 = G__11573;
count__11554 = G__11574;
i__11555 = G__11575;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__11576 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__11577 = null;
var count__11578 = (0);
var i__11579 = (0);
while(true){
if((i__11579 < count__11578)){
var s = cljs.core._nth.call(null,chunk__11577,i__11579);
var temp__4657__auto___11580 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___11580)){
var image_11581 = temp__4657__auto___11580;
var temp__4657__auto___11582__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_11581.src,changed);
if(cljs.core.truth_(temp__4657__auto___11582__$1)){
var href_uri_11583 = temp__4657__auto___11582__$1;
image_11581.src = href_uri_11583.makeUnique().toString();
} else {
}
} else {
}

var G__11584 = seq__11576;
var G__11585 = chunk__11577;
var G__11586 = count__11578;
var G__11587 = (i__11579 + (1));
seq__11576 = G__11584;
chunk__11577 = G__11585;
count__11578 = G__11586;
i__11579 = G__11587;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11576);
if(temp__4657__auto__){
var seq__11576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11576__$1)){
var c__8772__auto__ = cljs.core.chunk_first.call(null,seq__11576__$1);
var G__11588 = cljs.core.chunk_rest.call(null,seq__11576__$1);
var G__11589 = c__8772__auto__;
var G__11590 = cljs.core.count.call(null,c__8772__auto__);
var G__11591 = (0);
seq__11576 = G__11588;
chunk__11577 = G__11589;
count__11578 = G__11590;
i__11579 = G__11591;
continue;
} else {
var s = cljs.core.first.call(null,seq__11576__$1);
var temp__4657__auto___11592__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___11592__$1)){
var image_11593 = temp__4657__auto___11592__$1;
var temp__4657__auto___11594__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_11593.src,changed);
if(cljs.core.truth_(temp__4657__auto___11594__$2)){
var href_uri_11595 = temp__4657__auto___11594__$2;
image_11593.src = href_uri_11595.makeUnique().toString();
} else {
}
} else {
}

var G__11596 = cljs.core.next.call(null,seq__11576__$1);
var G__11597 = null;
var G__11598 = (0);
var G__11599 = (0);
seq__11576 = G__11596;
chunk__11577 = G__11597;
count__11578 = G__11598;
i__11579 = G__11599;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if(typeof goog.net.jsloader.safeLoadMany !== 'undefined'){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__11600_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__11600_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if(typeof goog.net.jsloader.loadMany !== 'undefined'){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__11603){
var map__11604 = p__11603;
var map__11604__$1 = ((((!((map__11604 == null)))?((((map__11604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11604):map__11604);
var on_jsload = cljs.core.get.call(null,map__11604__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__11604,map__11604__$1,on_jsload){
return (function (p1__11601_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__11601_SHARP_,".js");
});})(map__11604,map__11604__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__11604,map__11604__$1,on_jsload){
return (function (p1__11602_SHARP_){
return goog.Uri.parse(p1__11602_SHARP_).makeUnique();
});})(js_files,map__11604,map__11604__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__11604,map__11604__$1,on_jsload){
return (function() { 
var G__11606__delegate = function (_){
return on_jsload.call(null);
};
var G__11606 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__11607__i = 0, G__11607__a = new Array(arguments.length -  0);
while (G__11607__i < G__11607__a.length) {G__11607__a[G__11607__i] = arguments[G__11607__i + 0]; ++G__11607__i;}
  _ = new cljs.core.IndexedSeq(G__11607__a,0,null);
} 
return G__11606__delegate.call(this,_);};
G__11606.cljs$lang$maxFixedArity = 0;
G__11606.cljs$lang$applyTo = (function (arglist__11608){
var _ = cljs.core.seq(arglist__11608);
return G__11606__delegate(_);
});
G__11606.cljs$core$IFn$_invoke$arity$variadic = G__11606__delegate;
return G__11606;
})()
;})(js_files,map__11604,map__11604__$1,on_jsload))
,((function (js_files,map__11604,map__11604__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__11604,map__11604__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__11609_11613 = cljs.core.seq.call(null,things_to_log);
var chunk__11610_11614 = null;
var count__11611_11615 = (0);
var i__11612_11616 = (0);
while(true){
if((i__11612_11616 < count__11611_11615)){
var t_11617 = cljs.core._nth.call(null,chunk__11610_11614,i__11612_11616);
console.log(t_11617);

var G__11618 = seq__11609_11613;
var G__11619 = chunk__11610_11614;
var G__11620 = count__11611_11615;
var G__11621 = (i__11612_11616 + (1));
seq__11609_11613 = G__11618;
chunk__11610_11614 = G__11619;
count__11611_11615 = G__11620;
i__11612_11616 = G__11621;
continue;
} else {
var temp__4657__auto___11622 = cljs.core.seq.call(null,seq__11609_11613);
if(temp__4657__auto___11622){
var seq__11609_11623__$1 = temp__4657__auto___11622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11609_11623__$1)){
var c__8772__auto___11624 = cljs.core.chunk_first.call(null,seq__11609_11623__$1);
var G__11625 = cljs.core.chunk_rest.call(null,seq__11609_11623__$1);
var G__11626 = c__8772__auto___11624;
var G__11627 = cljs.core.count.call(null,c__8772__auto___11624);
var G__11628 = (0);
seq__11609_11613 = G__11625;
chunk__11610_11614 = G__11626;
count__11611_11615 = G__11627;
i__11612_11616 = G__11628;
continue;
} else {
var t_11629 = cljs.core.first.call(null,seq__11609_11623__$1);
console.log(t_11629);

var G__11630 = cljs.core.next.call(null,seq__11609_11623__$1);
var G__11631 = null;
var G__11632 = (0);
var G__11633 = (0);
seq__11609_11613 = G__11630;
chunk__11610_11614 = G__11631;
count__11611_11615 = G__11632;
i__11612_11616 = G__11633;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__11634_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11634_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__11635){
var map__11636 = p__11635;
var map__11636__$1 = ((((!((map__11636 == null)))?((((map__11636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11636):map__11636);
var canonical_path = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__11638 = window;
var G__11638__$1 = (((G__11638 == null))?null:G__11638.location);
if((G__11638__$1 == null)){
return null;
} else {
return G__11638__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__11639 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__11639);

adzerk.boot_reload.reload.reload_css.call(null,G__11639);

adzerk.boot_reload.reload.reload_img.call(null,G__11639);

return G__11639;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
