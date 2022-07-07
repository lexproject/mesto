(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.p="";var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._formElement.querySelector(this._submitButtonSelector)}var n,r;return n=e,(r=[{key:"_verificationInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_togleSubmitButton",value:function(){this._verificationInput(this._inputList)?(this._buttonSubmit.classList.add(this._inactiveButtonClass),this._buttonSubmit.setAttribute("disabled","disabled")):(this._buttonSubmit.classList.remove(this._inactiveButtonClass),this._buttonSubmit.removeAttribute("disabled"))}},{key:"_showError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetErrorField",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._togleSubmitButton()}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._togleSubmitButton(),e._checkValidity(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._templateElement=document.querySelector(this._templateSelector).content,this._handleCardClickImage=r.handleCardClickImage,this._handleCardClickDelete=r.handleCardClickDelete,this._handleCardClickLikeOn=r.handleCardClickLikeOn,this._handleCardClickLikeOff=r.handleCardClickLikeOff,this._element=this._templateElement.querySelector(".place-card").cloneNode(!0),this._likeButton=this._element.querySelector(".place-card__like"),this._cardImage=this._element.querySelector(".place-card__image"),this._countLike=this._element.querySelector(".place-card__like-count"),this._deleteCardButton=this._element.querySelector(".place-card__delete"),this._likeSelector="place-card__like_active",this._data=t}var t,n;return t=e,(n=[{key:"_setId",value:function(){this._element.id=this._data._id}},{key:"_removeDeleteButton",value:function(){"a871bc59e180b66e3f1b095f"!==this._data.owner._id&&this._deleteCardButton.remove()}},{key:"removeCardElement",value:function(){this._element.remove(),this._element=null}},{key:"_toggleLike",value:function(){this._likeButton.classList.toggle(this._likeSelector)}},{key:"setCountLike",value:function(e){this._countLike.textContent=e.likes.length,this._toggleLike()}},{key:"_setInitialCountLike",value:function(){this._countLike.textContent=this._data.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){t.target.classList.contains(e._likeSelector)?e._handleCardClickLikeOff():e._handleCardClickLikeOn()})),this._deleteCardButton.addEventListener("click",(function(){e._handleCardClickDelete()})),this._cardImage.addEventListener("click",(function(){e._handleCardClickImage()}))}},{key:"createCard",value:function(){return this._setId(),this._removeDeleteButton(),this._setInitialCountLike(),this._setEventListeners(),this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._element.querySelector(".place-card__title").textContent=this._data.name,this._element}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i={popupImageSelector:".popup__image",popupTitleSelector:".popup__title-image",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_type_disabled"},a=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),c=document.querySelector(".popup__input_profile-title"),l=document.querySelector(".popup__input_profile-info"),s=document.querySelector(".popup__form_edit-profile"),p=document.querySelector(".popup__form_add-place"),f=document.querySelector(".profile__avatar-button"),h=document.querySelector(".popup__form_edit-avatar");function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".profile__avatar");var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=n,this._container=document.querySelector(this._containerSelector),this._renderer=r}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n,r,o=this,i=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=i,this._popup=document.querySelector(this._popupSelector),this._popupButtonClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._popupButtonClose.addEventListener("click",(function(){e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const v=e.p+"b9c79f0c51f9a8941e3f.svg";function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,{popupSelector:n}))._popupImage=t._popup.querySelector(".popup__image"),t._popupTitle=t._popup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._popupTitle.textContent=t,this._popupImage.src=n,this._popupImage.alt=t,g(O(a.prototype),"open",this).call(this)}},{key:"close",value:function(){g(O(a.prototype),"close",this).call(this),this._popupTitle.textContent="Загрузка",this._popupImage.src=v,this._popupImage.alt="Подождите идёт загрузка"}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonSubmit=n._popup.querySelector(".popup__button"),n.buttonInitialText=n._buttonSubmit.textContent,n}return t=a,(n=[{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this.buttonInitialText}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){P(T(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;P(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._submitForm(e._getInputValues())}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.about=this._about.textContent,e}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserMe",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserMe",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards "),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"pullOffLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"556c5b87-238d-4c2c-8407-688a4bc72429","Content-Type":"application/json"}});function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},M.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function H(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._buttonSubmit=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"open",value:function(e){M(z(a.prototype),"open",this).call(this),this._deleteCardCallback=e}},{key:"setEventListeners",value:function(){var e=this;M(z(a.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("submit",(function(t){t.preventDefault(),e._deleteCardCallback()}))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b))({popupSelector:".popup_delete-place"}),K=new n(i,p),Q=new n(i,s),W=new n(i,h),X=new x({name:".profile__title",about:".profile__job",avatar:".profile__avatar"}),Y=new E({popupSelector:".popup_show-image"}),Z=function(e){var t=new o(e,"#place",{handleCardClickImage:function(){Y.open(e)},handleCardClickDelete:function(){G.open((function(){A.deleteCard(e._id).then((function(e){console.log(e),t.removeCardElement(),G.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}))},handleCardClickLikeOn:function(){A.putLike(e._id).then((function(e){return t.setCountLike(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))},handleCardClickLikeOff:function(){A.pullOffLike(e._id).then((function(e){return t.setCountLike(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}});return t.createCard()},ee=new _({renderer:function(e){return ee.addItem(Z(e))}},".places"),te=new B({popupSelector:".popup_edit-profile"},{submitForm:function(e){A.setUserMe(e).then((function(e){X.setUserInfo(e),te.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){te.renderLoading(!1)}))}}),ne=new B({popupSelector:".popup_add-place"},{submitForm:function(e){A.setNewCard(e).then((function(e){var t=Z(e);ee.addItem(t),ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.renderLoading(!1)}))}}),re=new B({popupSelector:".popup_edit-avatar"},{submitForm:function(e){A.updateAvatar(e.link).then((function(e){X.setAvatar(e),re.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return re.renderLoading(!1)}))}});a.addEventListener("click",(function(){Q.resetErrorField();var e=X.getUserInfo();c.value=e.name,l.value=e.about,te.open()})),u.addEventListener("click",(function(){K.resetErrorField(),ne.open()})),f.addEventListener("click",(function(){W.resetErrorField(),re.open()})),Q.enableValidation(),K.enableValidation(),W.enableValidation(),ne.setEventListeners(),te.setEventListeners(),Y.setEventListeners(),G.setEventListeners(),re.setEventListeners(),Promise.all([A.getUserMe(),A.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo(o),X.setAvatar(o),ee.renderItems(i)})).catch((function(e){return console.log(e)}))})();