(window.webpackJsonpcoldbrewing=window.webpackJsonpcoldbrewing||[]).push([[19],{1052:function(t,e,n){(function(e){var n="Expected a function",o=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,d=c||p||Function("return this")(),f=Object.prototype.toString,h=Math.max,y=Math.min,v=function(){return d.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&f.call(t)==r}(t))return o;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=l.test(t);return n||u.test(t)?s(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=function(t,e,o){var r,i,a,l,u,s,c=0,p=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError(n);function w(e){var n=r,o=i;return r=i=void 0,c=e,l=t.apply(o,n)}function O(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-c>=a}function g(){var t=v();if(O(t))return k(t);u=setTimeout(g,function(t){var n=e-(t-s);return d?y(n,a-(t-c)):n}(t))}function k(t){return u=void 0,f&&r?w(t):(r=i=void 0,l)}function P(){var t=v(),n=O(t);if(r=arguments,i=this,s=t,n){if(void 0===u)return function(t){return c=t,u=setTimeout(g,e),p?w(t):l}(s);if(d)return u=setTimeout(g,e),w(s)}return void 0===u&&(u=setTimeout(g,e)),l}return e=m(e)||0,b(o)&&(p=!!o.leading,a=(d="maxWait"in o)?h(m(o.maxWait)||0,e):a,f="trailing"in o?!!o.trailing:f),P.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=s=i=u=void 0},P.flush=function(){return void 0===u?l:k(v())},P}}).call(this,n(44))},1181:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n(9),i=n(11),a=n(10),l=n(12),u=n(0),s=n.n(u),c=n(31),p=n.n(c),d=n(2),f=n.n(d),h=!("undefined"===typeof window||!window.document||!window.document.createElement),y=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.a.Component),y(e,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return h?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),p.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),e}();v.propTypes={children:f.a.node.isRequired,node:f.a.any};var b=v,m=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var w=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.a.Component),m(e,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(t){this.renderPortal()}},{key:"componentWillUnmount",value:function(){p.a.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(t){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var e=this.props.children;"function"===typeof this.props.children.type&&(e=s.a.cloneElement(this.props.children)),this.portal=p.a.unstable_renderSubtreeIntoContainer(this,e,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),e}(),O=w;w.propTypes={children:f.a.node.isRequired,node:f.a.any};var g=p.a.createPortal?b:O,k=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var P=27,E=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.portalNode=null,n.state={active:!!t.defaultOpen},n.openPortal=n.openPortal.bind(n),n.closePortal=n.closePortal.bind(n),n.wrapWithPortal=n.wrapWithPortal.bind(n),n.handleOutsideMouseClick=n.handleOutsideMouseClick.bind(n),n.handleKeydown=n.handleKeydown.bind(n),n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.a.Component),k(e,[{key:"componentDidMount",value:function(){this.props.closeOnEsc&&document.addEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&document.addEventListener("click",this.handleOutsideMouseClick)}},{key:"componentWillUnmount",value:function(){this.props.closeOnEsc&&document.removeEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&document.removeEventListener("click",this.handleOutsideMouseClick)}},{key:"openPortal",value:function(t){this.state.active||(t&&t.nativeEvent&&t.nativeEvent.stopImmediatePropagation(),this.setState({active:!0},this.props.onOpen))}},{key:"closePortal",value:function(){this.state.active&&this.setState({active:!1},this.props.onClose)}},{key:"wrapWithPortal",value:function(t){var e=this;return this.state.active?s.a.createElement(g,{node:this.props.node,key:"react-portal",ref:function(t){return e.portalNode=t}},t):null}},{key:"handleOutsideMouseClick",value:function(t){if(this.state.active){var e=this.portalNode.props.node||this.portalNode.defaultNode;!e||e.contains(t.target)||t.button&&0!==t.button||this.closePortal()}}},{key:"handleKeydown",value:function(t){t.keyCode===P&&this.state.active&&this.closePortal()}},{key:"render",value:function(){return this.props.children({openPortal:this.openPortal,closePortal:this.closePortal,portal:this.wrapWithPortal,isOpen:this.state.active})}}]),e}();E.propTypes={children:f.a.func.isRequired,defaultOpen:f.a.bool,node:f.a.any,openByClickOn:f.a.element,closeOnEsc:f.a.bool,closeOnOutsideClick:f.a.bool,onOpen:f.a.func,onClose:f.a.func},E.defaultProps={onOpen:function(){},onClose:function(){}};var j=n(87),S=n.n(j),C=n(308),N=n(55),_=n(1052),T=n.n(_),x=function(t){var e=t.editorState,n=t.editor,o=t.plugins,r=t.translations;return u.createElement("div",null,o&&o.map(function(t,o){return t.hoverButtons&&t.hoverButtons.map(function(t,i){return u.createElement(t,{translations:r,key:"".concat(o,"-").concat(i),editorState:e,editor:n})})}))},D=function(t){var e=t.plugins,n=t.editorState,o=t.editor,r=t.translations;return u.createElement("div",null,e&&e.map(function(t,e){return t.toolbarButtons&&t.toolbarButtons.map(function(t,i){return u.createElement(t,{translations:r,key:"".concat(e,"-").concat(i),editorState:n,editor:o})})}))},W=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(i.a)(this,Object(a.a)(e).call(this,t))).componentDidMount=function(){n.updateToolbar()},n.flushState=function(){n.state.editorState&&n.props.onChange({editorState:n.state.editorState})},n.onStateChange=function(t){var e=t.value;n.setState({editorState:e},function(){n.updateToolbar()}),n.flushStateDebounced()},n.updateToolbar=function(){var t=n.getState(),e=n.toolbar.current;if(e&&!t.selection.isBlurred&&!t.selection.isCollapsed){var o=window.getSelection().getRangeAt(0).getBoundingClientRect();if(o){var r=o.left,i=o.top,a=o.width;e.style.opacity="1",e.style.top="".concat(i+window.scrollY-e.offsetHeight,"px"),e.style.left="".concat(r+window.scrollX-e.offsetWidth/2+a/2,"px")}}},n.onPaste=function(t,e,o){var r=Object(C.b)(t);if("html"!==r.type)return o();var i=n.props.serializeFunctions.htmlToSlate(r.html).document;return e.insertFragment(i)},n.onKeyDown=function(t,e,o){return S()(["mod+z","mod+y"],t)?(n.setState({editorState:void 0}),!0):S()("shift+enter",t)?(t.preventDefault(),e.insertText("\n"),!0):o()},n.state={},n.editor=u.createRef(),n.toolbar=u.createRef(),n.flushStateDebounced=T()(n.flushState,1e3,{leading:!0,trailing:!0,maxWait:1e4}),n}return Object(l.a)(e,t),Object(r.a)(e,[{key:"getState",value:function(){return void 0!==this.state.editorState?this.state.editorState:this.props.state.editorState}},{key:"render",value:function(){var t=this.props,e=t.focused,n=t.readOnly,o=t.plugins,r=this.getState(),i=r.selection.isExpanded&&r.selection.isFocused,a=Boolean(e);return u.createElement("div",null,e&&u.createElement(g,null,u.createElement("div",{className:"ory-prevent-blur ory-plugins-content-slate-inline-toolbar "+(i?"":"ory-plugins-content-slate-inline-toolbar--hidden"),style:{padding:0},ref:this.toolbar},u.createElement(x,Object.assign({translations:this.props.translations,editorState:r,editor:this.editor.current},this.props)))),u.createElement(C.a,{ref:this.editor,onChange:this.onStateChange,onKeyDown:this.onKeyDown,readOnly:Boolean(n),className:"ory-plugins-content-slate-container",value:r,plugins:o,onPaste:this.onPaste,placeholder:this.props.translations.placeholder}),n?null:u.createElement(N.a,{open:a,dark:!0},u.createElement(D,Object.assign({},this.props,{translations:this.props.translations,editor:this.editor.current,editorState:r}))))}}]),e}(u.Component);e.default=W}}]);
//# sourceMappingURL=19.9c10f970.chunk.js.map