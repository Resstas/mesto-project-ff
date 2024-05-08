/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"784587d3-8b32-49e1-953b-1e820da5493a","Content-Type":"application/json"}};function e(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}function r(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))}function n(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function o(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(t){"Escape"===t.key&&document.querySelector(".popup_is-opened").classList.remove("popup_is-opened")}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function _(){}function b(){}function w(){}var L={};f(L,u,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(T([])));x&&x!==r&&n.call(x,u)&&(L=x);var E=w.prototype=_.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,c,u){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return b.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,l,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),f(E,s,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){var e=t.name,r=t.link,i=t.alt,a=t.likes,c=t.cardOwnerId,u=t.initialUserId,l=t.cardId,s=t.deleteCard,f=t.likeCard,p=t.clickImg,h=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),d=h.querySelector(".card__image");d.src=r,d.alt=i,h.querySelector(".card__title").textContent=e;var y=a.length;h.querySelector(".card__like-number").textContent=y;var v=a.some((function(t){return t._id===u})),m=h.querySelector(".card__delete-button"),g=document.querySelector(".popup_type_delete-card"),_=g.querySelector(".popup__button");c!=u?m.remove():m.addEventListener("click",(function(t){n(g),_.addEventListener("click",(function(){s(t,l),o(g)}))}));var b=h.querySelector(".card__like-button");return v&&b.classList.add("card__like-button_is-active"),b.addEventListener("click",(function(t){f(t,l)})),d.addEventListener("click",p),h}function s(e,r){var n=e.target.closest(".card");!function(e){fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}(r),n.remove()}function f(t,e){return p.apply(this,arguments)}function p(){var t;return t=c().mark((function t(n,o){var i,a,u,l,s,f;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.target,a=i.parentNode.querySelector(".card__like-number"),console.log(a),!i.classList.contains("card__like-button_is-active")){t.next=12;break}return i.classList.remove("card__like-button_is-active"),t.next=7,r(o);case 7:u=t.sent,l=u.likes.length,a.textContent=l,t.next=19;break;case 12:return t.next=14,e(o);case 14:s=t.sent,f=s.likes.length,i.classList.add("card__like-button_is-active"),a.textContent=f,console.log(s);case 19:case"end":return t.stop()}}),t)})),p=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))},p.apply(this,arguments)}function h(t,e,r){var n=r.inputErrorClass,o=r.errorClass,i=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n),i.classList.remove(o),i.textContent=""}function d(t,e,r){var n=r.inactiveButtonClass;!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(n)):(e.disabled=!0,e.classList.add(n))}function y(t,e){var r=e.inputSelector,n=e.submitButtonSelector,o=e.inactiveButtonClass;Array.from(t.querySelectorAll(r)).forEach((function(r){h(t,r,e)}));var i=t.querySelector(n);i.disabled=!0,i.classList.add(o)}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",g={};function _(){}function b(){}function w(){}var L={};l(L,a,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(T([])));x&&x!==r&&n.call(x,a)&&(L=x);var E=w.prototype=_.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==v(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?y:h,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(v(e)+" is not iterable")}return b.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(q.prototype),l(q.prototype,c,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),l(E,u,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var _,b,w,L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},S=document.querySelector(".content"),x=S.querySelector(".places__list"),E=document.querySelectorAll(".popup"),k=S.querySelector(".profile__add-button"),q=document.querySelector(".profile__edit-button"),j=document.querySelector(".popup_type_edit"),O=document.querySelector(".popup_type_new-card"),C=S.querySelector(".profile__title"),P=S.querySelector(".profile__description"),N=S.querySelector(".profile__image"),T=j.querySelector(".popup__form"),I=T.querySelector(".popup__input_type_name"),G=T.querySelector(".popup__input_type_description"),A=O.querySelector(".popup__form"),U=O.querySelector(".popup__input_type_card-name"),F=O.querySelector(".popup__input_type_url-img"),B=document.querySelector(".popup_type_image"),D=B.querySelector(".popup__image"),Y=B.querySelector(".popup__caption"),J=document.querySelector(".profile__image-button"),M=document.querySelector(".popup_type_new-avatar"),H=M.querySelector(".popup__input_type_url-avatar"),V=document.querySelector(".profile__image"),z=M.querySelector(".popup__form"),K=M.querySelector(".button__text-loading"),Q=M.querySelector(".button__text"),R=j.querySelector(".button__text-loading"),W=j.querySelector(".button__text"),X=O.querySelector(".button__text-loading"),Z=O.querySelector(".button__text");function $(t){n(B),D.src=t.target.src,D.alt=t.target.alt,Y.textContent=t.target.alt}function tt(t,e,r){t?(e.classList.add("button__text-loading_visible"),r.classList.add("button__text-hidden")):(e.classList.remove("button__text-loading_visible"),r.classList.remove("button__text-hidden"))}fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){console.log(t);var e=t.name,r=t.about,n=t.avatar,o=t._id;_=o,C.textContent=e,P.textContent=r,N.style.backgroundImage="url(".concat(n,")"),console.log(n)})).catch((function(t){console.log(t)})),q.addEventListener("click",(function(){n(j),y(j,L),I.value=C.textContent,G.value=P.textContent})),J.addEventListener("click",(function(){n(M),y(M,L)})),k.addEventListener("click",(function(){n(O),y(O,L)})),E.forEach((function(t){t.classList.add("popup_is-animated"),t.querySelector(".popup__close").addEventListener("click",(function(){o(t)})),t.querySelector(".popup__content").addEventListener("click",(function(t){t.stopPropagation()})),t.addEventListener("click",(function(){o(t)}))})),T.addEventListener("submit",(function(e){var r;e.preventDefault(),C.textContent=I.value,P.textContent=G.value,tt(!0,R,W),(r={name:I.value,about:G.value},fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r.name,about:r.about})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))).catch((function(t){console.log(t)})).finally((function(){tt(!1,R,W)})),o(j)})),A.addEventListener("submit",function(){var e,r=(e=m().mark((function e(r){var n,i,a,c,u,p,h;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n=U.value,i=F.value,a=U.value,tt(!0,X,Z),e.next=7,(d={name:n,link:i},fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:d.name,link:d.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))).catch((function(t){console.log(t)})).finally((function(){tt(!1,X,Z)}));case 7:c=e.sent,u=c._id,p=c.owner._id,console.log(c),h=l({name:n,link:i,alt:a,likes:[],cardOwnerId:p,initialUserId:_,cardId:u,deleteCard:s,likeCard:f,clickImg:$}),x.prepend(h),A.reset(),o(O);case 16:case"end":return e.stop()}var d}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return r.apply(this,arguments)}}()),z.addEventListener("submit",(function(e){e.preventDefault();var r,n=H.value;V.style.backgroundImage="url(".concat(n,")"),z.reset(),tt(!0,K,Q),(r={avatar:n},fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r.avatar})}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))}))).catch((function(t){console.log(t)})).finally((function(){tt(!1,K,Q)})),o(M)})),fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then((function(t){return t.ok?(console.log(t),t.json()):Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){t.forEach((function(t){var e=t.name,r=t.link,n=t.owner._id,o=t._id,i=t.likes;console.log(t);var a=l({name:e,link:r,alt:e,likes:i,cardOwnerId:n,initialUserId:_,cardId:o,deleteCard:s,likeCard:f,clickImg:$});x.append(a)}))})).catch((function(t){console.log(t)})),w=(b=L).formSelector,Array.from(document.querySelectorAll(w)).forEach((function(t){!function(t,e){var r=e.inputSelector,n=e.submitButtonSelector,o=Array.from(t.querySelectorAll(r)),i=t.querySelector(n);d(o,i,e),o.forEach((function(r){r.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?h(t,e,r):function(t,e,r,n){var o=n.inputErrorClass,i=n.errorClass,a=t.querySelector(".".concat(e.id,"-error"));e.classList.add(o),a.textContent=r,a.classList.add(i)}(t,e,e.validationMessage,r)}(t,r,e),d(o,i,e)}))}))}(t,b)}))})();