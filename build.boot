(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"public"}

 :dependencies '[[org.clojure/clojurescript "1.9.908"]
                 [org.clojure/clojure "1.8.0"]
                 [adzerk/boot-cljs "2.0.0"]
                 [adzerk/boot-reload "0.5.2"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [weasel                  "0.7.0" :scope "test"]
                 [garden "1.3.2"]
                 [adzerk/boot-cljs-repl "0.3.3"]
                 [pandeiro/boot-http "0.8.3"]
                 [org.clojure/tools.nrepl "0.2.12"]])
                 

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev
  "Launch Immediate Feedback Development Environment"
  []
  (comp
   (serve :dir "target")
   (watch)
   (reload)
   (cljs-repl)
   (cljs)
   (target :dir #{"target"})))
           

         





