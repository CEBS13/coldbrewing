(window.webpackJsonpcoldbrewing=window.webpackJsonpcoldbrewing||[]).push([[3],{718:function(t,e,n){"use strict";var r=n(28),o=n(0),i=n(2),s=n.n(i),u=s.a.shape({trySubscribe:s.a.func.isRequired,tryUnsubscribe:s.a.func.isRequired,notifyNestedSubs:s.a.func.isRequired,isSubscribed:s.a.func.isRequired}),a=s.a.shape({subscribe:s.a.func.isRequired,dispatch:s.a.func.isRequired,getState:s.a.func.isRequired});var p=function(t){var e;void 0===t&&(t="store");var n=t+"Subscription",i=function(e){Object(r.a)(s,e);var i=s.prototype;function s(n,r){var o;return(o=e.call(this,n,r)||this)[t]=n.store,o}return i.getChildContext=function(){var e;return(e={})[t]=this[t],e[n]=null,e},i.render=function(){return o.Children.only(this.props.children)},s}(o.Component);return i.propTypes={store:a.isRequired,children:s.a.element.isRequired},i.childContextTypes=((e={})[t]=a.isRequired,e[n]=u,e),i}(),c=n(191),d=n(3),f=n(21),h=n(83),l=n.n(h),b=n(19),v=n.n(b),y=n(69),m=null,O={notify:function(){}};var S=function(){function t(t,e,n){this.store=t,this.parentSub=e,this.onStateChange=n,this.unsubscribe=null,this.listeners=O}var e=t.prototype;return e.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},e.notifyNestedSubs=function(){this.listeners.notify()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=function(){var t=[],e=[];return{clear:function(){e=m,t=m},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},get:function(){return e},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==m&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=O)},t}(),P=0,g={};function C(){}function w(t,e){var n,i;void 0===e&&(e={});var s=e,p=s.getDisplayName,h=void 0===p?function(t){return"ConnectAdvanced("+t+")"}:p,b=s.methodName,m=void 0===b?"connectAdvanced":b,O=s.renderCountProp,w=void 0===O?void 0:O,j=s.shouldHandleStateChanges,N=void 0===j||j,q=s.storeKey,T=void 0===q?"store":q,E=s.withRef,M=void 0!==E&&E,U=Object(f.a)(s,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),D=T+"Subscription",R=P++,x=((n={})[T]=a,n[D]=u,n),I=((i={})[D]=u,i);return function(e){v()(Object(y.isValidElementType)(e),"You must pass a component to the function returned by "+m+". Instead received "+JSON.stringify(e));var n=e.displayName||e.name||"Component",i=h(n),s=Object(d.a)({},U,{getDisplayName:h,methodName:m,renderCountProp:w,shouldHandleStateChanges:N,storeKey:T,withRef:M,displayName:i,wrappedComponentName:n,WrappedComponent:e}),u=function(n){function u(t,e){var r;return(r=n.call(this,t,e)||this).version=R,r.state={},r.renderCount=0,r.store=t[T]||e[T],r.propsMode=Boolean(t[T]),r.setWrappedInstance=r.setWrappedInstance.bind(Object(c.a)(Object(c.a)(r))),v()(r.store,'Could not find "'+T+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+T+'" as a prop to "'+i+'".'),r.initSelector(),r.initSubscription(),r}Object(r.a)(u,n);var a=u.prototype;return a.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return(t={})[D]=e||this.context[D],t},a.componentDidMount=function(){N&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},a.componentWillReceiveProps=function(t){this.selector.run(t)},a.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},a.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=C,this.store=null,this.selector.run=C,this.selector.shouldComponentUpdate=!1},a.getWrappedInstance=function(){return v()(M,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+m+"() call."),this.wrappedInstance},a.setWrappedInstance=function(t){this.wrappedInstance=t},a.initSelector=function(){var e=t(this.store.dispatch,s);this.selector=function(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(i){n.shouldComponentUpdate=!0,n.error=i}}};return n}(e,this.store),this.selector.run(this.props)},a.initSubscription=function(){if(N){var t=(this.propsMode?this.props:this.context)[D];this.subscription=new S(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},a.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(g)):this.notifyNestedSubs()},a.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},a.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},a.addExtraProps=function(t){if(!M&&!w&&(!this.propsMode||!this.subscription))return t;var e=Object(d.a)({},t);return M&&(e.ref=this.setWrappedInstance),w&&(e[w]=this.renderCount++),this.propsMode&&this.subscription&&(e[D]=this.subscription),e},a.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return Object(o.createElement)(e,this.addExtraProps(t.props))},u}(o.Component);return u.WrappedComponent=e,u.displayName=i,u.childContextTypes=I,u.contextTypes=x,u.propTypes=x,l()(u,e)}}var j=Object.prototype.hasOwnProperty;function N(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t&&e!==e}function q(t,e){if(N(t,e))return!0;if("object"!==typeof t||null===t||"object"!==typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!j.call(e,n[o])||!N(t[n[o]],e[n[o]]))return!1;return!0}var T=n(935),E="object"==typeof self&&self&&self.Object===Object&&self,M=(T.a||E||Function("return this")()).Symbol,U=Object.prototype;U.hasOwnProperty,U.toString,M&&M.toStringTag;Object.prototype.toString;M&&M.toStringTag;Object.getPrototypeOf,Object;var D=Function.prototype,R=Object.prototype,x=D.toString;R.hasOwnProperty,x.call(Object);n(127);function I(t,e){return function(){return e(t.apply(void 0,arguments))}}Object.assign;function W(t){return function(e,n){var r=t(e,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function F(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function k(t,e){return function(e,n){n.displayName;var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=F(t);var o=r(e,n);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=F(o),o=r(e,n)),o},r}}var A=[function(t){return"function"===typeof t?k(t):void 0},function(t){return t?void 0:W(function(t){return{dispatch:t}})},function(t){return t&&"object"===typeof t?W(function(e){return function(t,e){if("function"===typeof t)return I(t,e);if("object"!==typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),r={},o=0;o<n.length;o++){var i=n[o],s=t[i];"function"===typeof s&&(r[i]=I(s,e))}return r}(t,e)}):void 0}];var B=[function(t){return"function"===typeof t?k(t):void 0},function(t){return t?void 0:W(function(){return{}})}];function H(t,e,n){return Object(d.a)({},n,t,e)}var J=[function(t){return"function"===typeof t?function(t){return function(e,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,s=!1;return function(e,n,u){var a=t(e,n,u);return s?o&&i(a,r)||(r=a):(s=!0,r=a),r}}}(t):void 0},function(t){return t?void 0:function(){return H}}];function K(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function V(t,e,n,r,o){var i,s,u,a,p,c=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,h=!1;function l(o,h){var l=!d(h,s),b=!c(o,i);return i=o,s=h,l&&b?(u=t(i,s),e.dependsOnOwnProps&&(a=e(r,s)),p=n(u,a,s)):l?(t.dependsOnOwnProps&&(u=t(i,s)),e.dependsOnOwnProps&&(a=e(r,s)),p=n(u,a,s)):b?function(){var e=t(i,s),r=!f(e,u);return u=e,r&&(p=n(u,a,s)),p}():p}return function(o,c){return h?l(o,c):(u=t(i=o,s=c),a=e(r,s),p=n(u,a,s),h=!0,p)}}function Y(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,i=Object(f.a)(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(t,i),u=r(t,i),a=o(t,i);return(i.pure?V:K)(s,u,a,t,i)}function z(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function G(t,e){return t===e}var L=function(t){var e=void 0===t?{}:t,n=e.connectHOC,r=void 0===n?w:n,o=e.mapStateToPropsFactories,i=void 0===o?B:o,s=e.mapDispatchToPropsFactories,u=void 0===s?A:s,a=e.mergePropsFactories,p=void 0===a?J:a,c=e.selectorFactory,h=void 0===c?Y:c;return function(t,e,n,o){void 0===o&&(o={});var s=o,a=s.pure,c=void 0===a||a,l=s.areStatesEqual,b=void 0===l?G:l,v=s.areOwnPropsEqual,y=void 0===v?q:v,m=s.areStatePropsEqual,O=void 0===m?q:m,S=s.areMergedPropsEqual,P=void 0===S?q:S,g=Object(f.a)(s,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=z(t,i,"mapStateToProps"),w=z(e,u,"mapDispatchToProps"),j=z(n,p,"mergeProps");return r(h,Object(d.a)({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:C,initMapDispatchToProps:w,initMergeProps:j,pure:c,areStatesEqual:b,areOwnPropsEqual:y,areStatePropsEqual:O,areMergedPropsEqual:P},g))}}();n.d(e,"a",function(){return p}),n.d(e,"b",function(){return L})},935:function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(44))}}]);
//# sourceMappingURL=3.ef5e779e.chunk.js.map