(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1v+r":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return l}));var r=n("q1tI"),i=n.n(r),o=n("VtrM"),a=n("YFqc"),u=n.n(a),c=n("Hpjs"),s=n.n(c),f=i.a.createElement;function l(){var t=Object(o.a)("https://api.github.com/search/repositories?q=react",(function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))})),n=t.data,r=t.error;return console.log(n),r?f("div",null,"failed to load"):n?f(i.a.Fragment,null,f("div",{className:s.a.title},"hello ",n.total_count,"!"),f(u.a,{href:"/",as:e.env.BACKEND_URL+"/"},f("a",null,"Home"))):f("div",null,"loading...")}}.call(this,n("8oxB"))},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&h())}function h(){if(!f){var e=u(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||f||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},Hpjs:function(e,t,n){e.exports={title:"page2_title__O_4N7"}},Vqzm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page2",function(){return n("1v+r")}])},VtrM:function(e,t,n){"use strict";var r=n("q1tI"),i=n("miPH"),o=n.n(i);function a(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function u(){return"undefined"===typeof navigator.onLine||navigator.onLine}var c=new WeakMap,s=0;var f=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t,n){void 0===n&&(n=!0);var r=this.serializeKey(e)[0];this.__cache.set(r,t),n&&C(e,t,!1),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(e){void 0===e&&(e=!0),e&&this.__cache.forEach((function(e){return C(e,null,!1)})),this.__cache.clear(),this.notify()},e.prototype.delete=function(e,t){void 0===t&&(t=!0);var n=this.serializeKey(e)[0];t&&C(e,null,!1),this.__cache.delete(n),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):c.has(e[n])?r=c.get(e[n]):(r=s,c.set(e[n],s++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}()),l={},d={},h={},p={},v={};var y="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),g={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(a()&&!(n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount||0,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(y?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(y?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:o.a},w=!1;if("undefined"!==typeof window&&window.addEventListener&&!w){var m=function(){if(a()&&u())for(var e in h)h[e][0]&&h[e][0]()};window.addEventListener("visibilitychange",m,!1),window.addEventListener("focus",m,!1),w=!0}var b=g;var _=Object(r.createContext)({});_.displayName="SWRConfigContext";var O=_,T=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},j="undefined"===typeof window,k=j?r.useEffect:r.useLayoutEffect,R=function(e,t){void 0===t&&(t=!0);var n=f.serializeKey(e),r=n[0],i=n[2];if(!r)return Promise.resolve();var o=p[r];if(r&&o){for(var a=f.get(r),u=f.get(i),c=[],s=0;s<o.length;++s)c.push(o[s](t,a,u,s>0));return Promise.all(c).then((function(){return f.get(r)}))}return Promise.resolve(f.get(r))},x=function(e,t,n){var r=p[e];if(e&&r)for(var i=0;i<r.length;++i)r[i](!1,t,n)},C=function(e,t,n){return void 0===n&&(n=!0),T(void 0,void 0,void 0,(function(){var r,i,o,a,u,c,s,l,h,y;return E(this,(function(g){switch(g.label){case 0:if(!(r=f.serializeKey(e)[0]))return[2];if("undefined"===typeof t)return[2,R(e,n)];if(v[r]=Date.now()-1,a=v[r],u=d[r],!t||"function"!==typeof t)return[3,5];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t(f.get(r))];case 2:return i=g.sent(),[3,4];case 3:return c=g.sent(),o=c,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];g.label=6;case 6:return g.trys.push([6,8,,9]),[4,t];case 7:return i=g.sent(),[3,9];case 8:return s=g.sent(),o=s,[3,9];case 9:return[3,11];case 10:i=t,g.label=11;case 11:if(a!==v[r]||u!==d[r]){if(o)throw o;return[2,i]}if("undefined"!==typeof i&&f.set(r,i,!1),l=p[r]){for(h=[],y=0;y<l.length;++y)h.push(l[y](!!n,i,o,y>0));return[2,Promise.all(h).then((function(){return f.get(r)}))]}if(o)throw o;return[2,i]}}))}))};O.Provider;var L=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,o,c={};t.length>=1&&(i=t[0]),t.length>2?(o=t[1],c=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(c=t[1]);var s=f.serializeKey(i),y=s[0],g=s[1],w=s[2];c=Object.assign({},b,Object(r.useContext)(O),c),"undefined"===typeof o&&(o=c.fetcher);var m=f.get(y)||c.initialData,_=f.get(w),R=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),L=Object(r.useRef)({data:m,error:_,isValidating:!1}),I=Object(r.useState)(null)[1],P=Object(r.useCallback)((function(e){var t=!1;for(var n in e)L.current[n]=e[n],R.current[n]&&(t=!0);(t||c.suspense)&&I({})}),[]),M=Object(r.useRef)(!1),V=Object(r.useRef)(y),S=Object(r.useRef)({emit:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];M.current||c[e].apply(c,t)}}),W=Object(r.useCallback)((function(e,t){return C(y,e,t)}),[y]),D=Object(r.useCallback)((function(t){return void 0===t&&(t={}),T(e,void 0,void 0,(function(){var e,n,r,i,a,u,s;return E(this,(function(h){switch(h.label){case 0:if(!y||!o)return[2,!1];if(M.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof l[y]&&t.dedupe,h.label=1;case 1:return h.trys.push([1,6,,7]),P({isValidating:!0}),r=void 0,i=void 0,n?(i=d[y],[4,l[y]]):[3,3];case 2:return r=h.sent(),[3,5];case 3:return l[y]&&(v[y]=Date.now()-1),c.loadingTimeout&&!f.get(y)&&setTimeout((function(){e&&S.current.emit("onLoadingSlow",y,c)}),c.loadingTimeout),l[y]=null!==g?o.apply(void 0,g):o(y),d[y]=i=Date.now(),[4,l[y]];case 4:r=h.sent(),setTimeout((function(){delete l[y],delete d[y]}),c.dedupingInterval),S.current.emit("onSuccess",r,y,c),h.label=5;case 5:return v[y]&&i<=v[y]?(P({isValidating:!1}),[2,!1]):(f.set(y,r,!1),f.set(w,void 0,!1),a={isValidating:!1},"undefined"!==typeof L.current.error&&(a.error=void 0),c.compare(L.current.data,r)||(a.data=r),P(a),n||x(y,r,void 0),[3,7]);case 6:return u=h.sent(),delete l[y],delete d[y],f.set(w,u,!1),L.current.error!==u&&(P({isValidating:!1,error:u}),n||x(y,void 0,u)),S.current.emit("onError",u,y,c),c.shouldRetryOnError&&(s=(t.retryCount||0)+1,S.current.emit("onErrorRetry",u,y,c,D,Object.assign({dedupe:!0},t,{retryCount:s}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[y]);if(k((function(){if(y){M.current=!1;var e=L.current.data,t=f.get(y)||c.initialData;V.current===y&&c.compare(e,t)||(P({data:t}),V.current=y);var n,r=function(){return D({dedupe:!0})};(c.revalidateOnMount||!c.initialData&&void 0===c.revalidateOnMount)&&("undefined"!==typeof t&&!j&&window.requestIdleCallback?window.requestIdleCallback(r):r()),c.revalidateOnFocus&&(n=function(e,t){var n=!1;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];n||(n=!0,e.apply(void 0,r),setTimeout((function(){return n=!1}),t))}}(r,c.focusThrottleInterval),h[y]?h[y].push(n):h[y]=[n]);var i=function(e,t,n,i){void 0===e&&(e=!0),void 0===i&&(i=!0);var o={},a=!1;return"undefined"===typeof t||c.compare(L.current.data,t)||(o.data=t,a=!0),L.current.error!==n&&(o.error=n,a=!0),a&&P(o),!!e&&(i?r():D())};p[y]?p[y].push(i):p[y]=[i];var o=null;return!j&&window.addEventListener&&c.revalidateOnReconnect&&window.addEventListener("online",o=r),function(){var e,t;(P=function(){return null},M.current=!0,n&&h[y])&&((t=(e=h[y]).indexOf(n))>=0&&(e[t]=e[e.length-1],e.pop()));p[y]&&((t=(e=p[y]).indexOf(i))>=0&&(e[t]=e[e.length-1],e.pop()));!j&&window.removeEventListener&&null!==o&&window.removeEventListener("online",o)}}}),[y,D]),k((function(){var t=null,n=function(){return T(e,void 0,void 0,(function(){return E(this,(function(e){switch(e.label){case 0:return L.current.error||!c.refreshWhenHidden&&!a()||!c.refreshWhenOffline&&!u()?[3,2]:[4,D({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return c.refreshInterval&&(t=setTimeout(n,c.refreshInterval)),[2]}}))}))};return c.refreshInterval&&(t=setTimeout(n,c.refreshInterval)),function(){t&&clearTimeout(t)}}),[c.refreshInterval,c.refreshWhenHidden,c.refreshWhenOffline,D]),c.suspense){var K=f.get(y)||m,q=f.get(w)||_;if("undefined"===typeof K&&"undefined"===typeof q){if(l[y]||D(),l[y]&&"function"===typeof l[y].then)throw l[y];K=l[y]}if("undefined"===typeof K&&q)throw q;return{error:q,data:K,revalidate:D,mutate:W,isValidating:L.current.isValidating}}return Object(r.useMemo)((function(){var e={revalidate:D,mutate:W};return Object.defineProperties(e,{error:{get:function(){return R.current.error=!0,V.current===y?L.current.error:_},enumerable:!0},data:{get:function(){return R.current.data=!0,V.current===y?L.current.data:m},enumerable:!0},isValidating:{get:function(){return R.current.isValidating=!0,L.current.isValidating},enumerable:!0}}),e}),[D])};new Map;t.a=L},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,d=f(n("q1tI")),h=n("QmWs"),p=n("g/15"),v=s(n("nOHt")),y=n("elyg");function g(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var w=new Map,m=window.IntersectionObserver,b={};function _(){return l||(m?l=new m((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){o(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var a=e(i,o);return t=i,n=o,r=a,a}}((function(e,t){return{href:(0,y.addBasePath)(g(e)),as:t?(0,y.addBasePath)(g(t)):t}})),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=i.formatUrls(i.props.href,i.props.as),a=o.href,u=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,h.resolve)(c,a),u=u?(0,h.resolve)(c,u):a,e.preventDefault();var s=i.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[i.props.replace?"replace":"push"](a,u,{shallow:i.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,h.resolve)(e,n);return[i,r?(0,h.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),a={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),d.default.cloneElement(o,a)}}]),n}(d.Component);t.default=O},miPH:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,c,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(a=u;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(s!=f)return!1;var l=t instanceof Date,d=n instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,p=n instanceof RegExp;if(h!=p)return!1;if(h&&p)return t.toString()==n.toString();var v=i(t);if((u=v.length)!==i(n).length)return!1;for(a=u;0!==a--;)if(!o.call(n,v[a]))return!1;for(a=u;0!==a--;)if(!e(t[c=v[a]],n[c]))return!1;return!0}return t!==t&&n!==n}}},[["Vqzm",0,2,1]]]);