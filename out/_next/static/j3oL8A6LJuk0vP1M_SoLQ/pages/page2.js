(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1v+r":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var r=n("q1tI"),i=n.n(r),o=n("miPH"),a=n.n(o);function u(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function c(){return"undefined"===typeof navigator.onLine||navigator.onLine}var s=new WeakMap,f=0;var l=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t,n){void 0===n&&(n=!0);var r=this.serializeKey(e)[0];this.__cache.set(r,t),n&&P(e,t,!1),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(e){void 0===e&&(e=!0),e&&this.__cache.forEach((function(e){return P(e,null,!1)})),this.__cache.clear(),this.notify()},e.prototype.delete=function(e,t){void 0===t&&(t=!0);var n=this.serializeKey(e)[0];t&&P(e,null,!1),this.__cache.delete(n),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):s.has(e[n])?r=s.get(e[n]):(r=f,s.set(e[n],f++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}()),d={},p={},h={},v={},y={};var g="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),w={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(u()&&!(n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)}},errorRetryInterval:1e3*(g?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(g?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:a.a},b=!1;if("undefined"!==typeof window&&window.addEventListener&&!b){var m=function(){if(u()&&c())for(var e in h)h[e][0]&&h[e][0]()};window.addEventListener("visibilitychange",m,!1),window.addEventListener("focus",m,!1),b=!0}var _=w;var O=Object(r.createContext)({});O.displayName="SWRConfigContext";var E=O,j=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},k=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},R="undefined"===typeof window,T=R?r.useEffect:r.useLayoutEffect,C=function(e,t){void 0===t&&(t=!0);var n=l.serializeKey(e),r=n[0],i=n[2];if(!r)return Promise.resolve();var o=v[r];if(r&&o){for(var a=l.get(r),u=l.get(i),c=[],s=0;s<o.length;++s)c.push(o[s](t,a,u,s>0));return Promise.all(c).then((function(){return l.get(r)}))}return Promise.resolve(l.get(r))},x=function(e,t,n){var r=v[e];if(e&&r)for(var i=0;i<r.length;++i)r[i](!1,t,n)},P=function(e,t,n){return void 0===n&&(n=!0),j(void 0,void 0,void 0,(function(){var r,i,o,a,u,c,s,f,d,h;return k(this,(function(g){switch(g.label){case 0:if(!(r=l.serializeKey(e)[0]))return[2];if("undefined"===typeof t)return[2,C(e,n)];if(y[r]=Date.now()-1,a=y[r],u=p[r],!t||"function"!==typeof t)return[3,5];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t(l.get(r))];case 2:return i=g.sent(),[3,4];case 3:return c=g.sent(),o=c,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];g.label=6;case 6:return g.trys.push([6,8,,9]),[4,t];case 7:return i=g.sent(),[3,9];case 8:return s=g.sent(),o=s,[3,9];case 9:return[3,11];case 10:i=t,g.label=11;case 11:if(a!==y[r]||u!==p[r]){if(o)throw o;return[2,i]}if("undefined"!==typeof i&&l.set(r,i,!1),f=v[r]){for(d=[],h=0;h<f.length;++h)d.push(f[h](!!n,i,o,h>0));return[2,Promise.all(d).then((function(){return l.get(r)}))]}if(o)throw o;return[2,i]}}))}))};E.Provider;var I=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,o,a={};t.length>=1&&(i=t[0]),t.length>2?(o=t[1],a=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(a=t[1]);var s=l.serializeKey(i),f=s[0],g=s[1],w=s[2];a=Object.assign({},_,Object(r.useContext)(E),a),"undefined"===typeof o&&(o=a.fetcher);var b=l.get(f)||a.initialData,m=l.get(w),O=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),C=Object(r.useRef)({data:b,error:m,isValidating:!1}),I=Object(r.useState)(null)[1],L=Object(r.useCallback)((function(e){var t=!1;for(var n in e)C.current[n]=e[n],O.current[n]&&(t=!0);(t||a.suspense)&&I({})}),[]),M=Object(r.useRef)(!1),S=Object(r.useRef)(f),V=Object(r.useRef)({emit:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];M.current||a[e].apply(a,t)}}),W=Object(r.useCallback)((function(e,t){return P(f,e,t)}),[f]),D=Object(r.useCallback)((function(t){return void 0===t&&(t={}),j(e,void 0,void 0,(function(){var e,n,r,i,u,c,s;return k(this,(function(h){switch(h.label){case 0:if(!f||!o)return[2,!1];if(M.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof d[f]&&t.dedupe,h.label=1;case 1:return h.trys.push([1,6,,7]),L({isValidating:!0}),r=void 0,i=void 0,n?(i=p[f],[4,d[f]]):[3,3];case 2:return r=h.sent(),[3,5];case 3:return d[f]&&(y[f]=Date.now()-1),a.loadingTimeout&&!l.get(f)&&setTimeout((function(){e&&V.current.emit("onLoadingSlow",f,a)}),a.loadingTimeout),d[f]=null!==g?o.apply(void 0,g):o(f),p[f]=i=Date.now(),[4,d[f]];case 4:r=h.sent(),setTimeout((function(){delete d[f],delete p[f]}),a.dedupingInterval),V.current.emit("onSuccess",r,f,a),h.label=5;case 5:return y[f]&&i<=y[f]?(L({isValidating:!1}),[2,!1]):(l.set(f,r,!1),l.set(w,void 0,!1),u={isValidating:!1},"undefined"!==typeof C.current.error&&(u.error=void 0),a.compare(C.current.data,r)||(u.data=r),L(u),n||x(f,r,void 0),[3,7]);case 6:return c=h.sent(),delete d[f],delete p[f],l.set(w,c,!1),C.current.error!==c&&(L({isValidating:!1,error:c}),n||x(f,void 0,c)),V.current.emit("onError",c,f,a),a.shouldRetryOnError&&(s=(t.retryCount||0)+1,V.current.emit("onErrorRetry",c,f,a,D,Object.assign({dedupe:!0},t,{retryCount:s}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[f]);if(T((function(){if(f){M.current=!1;var e=C.current.data,t=l.get(f)||a.initialData;S.current===f&&a.compare(e,t)||(L({data:t}),S.current=f);var n,r=function(){return D({dedupe:!0})};(a.revalidateOnMount||!a.initialData&&void 0===a.revalidateOnMount)&&("undefined"!==typeof t&&!R&&window.requestIdleCallback?window.requestIdleCallback(r):r()),a.revalidateOnFocus&&(n=function(e,t){var n=!1;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];n||(n=!0,e.apply(void 0,r),setTimeout((function(){return n=!1}),t))}}(r,a.focusThrottleInterval),h[f]?h[f].push(n):h[f]=[n]);var i=function(e,t,n,i){void 0===e&&(e=!0),void 0===i&&(i=!0);var o={},u=!1;return"undefined"===typeof t||a.compare(C.current.data,t)||(o.data=t,u=!0),C.current.error!==n&&(o.error=n,u=!0),u&&L(o),!!e&&(i?r():D())};v[f]?v[f].push(i):v[f]=[i];var o=null;return!R&&window.addEventListener&&a.revalidateOnReconnect&&window.addEventListener("online",o=r),function(){var e,t;(L=function(){return null},M.current=!0,n&&h[f])&&((t=(e=h[f]).indexOf(n))>=0&&(e[t]=e[e.length-1],e.pop()));v[f]&&((t=(e=v[f]).indexOf(i))>=0&&(e[t]=e[e.length-1],e.pop()));!R&&window.removeEventListener&&null!==o&&window.removeEventListener("online",o)}}}),[f,D]),T((function(){var t=null,n=function(){return j(e,void 0,void 0,(function(){return k(this,(function(e){switch(e.label){case 0:return C.current.error||!a.refreshWhenHidden&&!u()||!a.refreshWhenOffline&&!c()?[3,2]:[4,D({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return a.refreshInterval&&(t=setTimeout(n,a.refreshInterval)),[2]}}))}))};return a.refreshInterval&&(t=setTimeout(n,a.refreshInterval)),function(){t&&clearTimeout(t)}}),[a.refreshInterval,a.refreshWhenHidden,a.refreshWhenOffline,D]),a.suspense){var K=l.get(f)||b,q=l.get(w)||m;if("undefined"===typeof K&&"undefined"===typeof q){if(d[f]||D(),d[f]&&"function"===typeof d[f].then)throw d[f];K=d[f]}if("undefined"===typeof K&&q)throw q;return{error:q,data:K,revalidate:D,mutate:W,isValidating:C.current.isValidating}}return Object(r.useMemo)((function(){var e={revalidate:D,mutate:W};return Object.defineProperties(e,{error:{get:function(){return O.current.error=!0,S.current===f?C.current.error:m},enumerable:!0},data:{get:function(){return O.current.data=!0,S.current===f?C.current.data:b},enumerable:!0},isValidating:{get:function(){return O.current.isValidating=!0,C.current.isValidating},enumerable:!0}}),e}),[D])};new Map;var L=I,M=n("YFqc"),S=n.n(M),V=n("Hpjs"),W=n.n(V),D=i.a.createElement;function K(){var e=L("https://api.github.com/search/repositories?q=react",(function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))})),t=e.data,n=e.error;return console.log(t),n?D("div",null,"failed to load"):t?D(i.a.Fragment,null,D("div",{className:W.a.title},"hello ",t.total_count,"!"),D(S.a,{href:"/"},D("a",null,"Home"))):D("div",null,"loading...")}},Hpjs:function(e,t,n){e.exports={title:"page2_title__O_4N7"}},Vqzm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page2",function(){return n("1v+r")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,d=f(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=s(n("nOHt")),y=n("elyg");function g(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var w=new Map,b=window.IntersectionObserver,m={};function _(){return l||(b?l=new b((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){o(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var a=e(i,o);return t=i,n=o,r=a,a}}((function(e,t){return{href:(0,y.addBasePath)(g(e)),as:t?(0,y.addBasePath)(g(t)):t}})),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=i.formatUrls(i.props.href,i.props.as),a=o.href,u=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,p.resolve)(c,a),u=u?(0,p.resolve)(c,u):a,e.preventDefault();var s=i.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[i.props.replace?"replace":"push"](a,u,{shallow:i.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,p.resolve)(e,n);return[i,r?(0,p.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),m[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),a={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),d.default.cloneElement(o,a)}}]),n}(d.Component);t.default=O},miPH:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,c,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(a=u;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(s!=f)return!1;var l=t instanceof Date,d=n instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==n.getTime();var p=t instanceof RegExp,h=n instanceof RegExp;if(p!=h)return!1;if(p&&h)return t.toString()==n.toString();var v=i(t);if((u=v.length)!==i(n).length)return!1;for(a=u;0!==a--;)if(!o.call(n,v[a]))return!1;for(a=u;0!==a--;)if(!e(t[c=v[a]],n[c]))return!1;return!0}return t!==t&&n!==n}}},[["Vqzm",0,2,1]]]);