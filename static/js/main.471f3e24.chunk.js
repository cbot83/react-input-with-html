(this["webpackJsonpreact-input-with-html-example"]=this["webpackJsonpreact-input-with-html-example"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);t(9);var o=t(0),a=t.n(o),r=t(4),i=t.n(r),l=t(2),c=t(6),u=t(7),d=t(5),s=function(e,n,t){for(var o,a=function(e){for(var n,t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1);n=o.nextNode();)t.push(n);return t}(e),r=0;r<a.length;r++){if(!(n>a[r].nodeValue.length&&a[r+1])){o=a[r];break}n-=a[r].nodeValue.length}return o?{node:o,position:n}:(t(-1),{node:o,position:-1})},f=function(e){var n=e.id,t=e.value,r=e.modifierArr,i=e.disabled,f=void 0!==i&&i,p=e.spellCheck,h=void 0===p||p,v=e.onChange,g=e.onSubmit,m=e.onBlur,b=e.onKeyUp,w=e.onKeyDown,y=Object(u.a)(e,["id","value","modifierArr","disabled","spellCheck","onChange","onSubmit","onBlur","onKeyUp","onKeyDown"]),S=Object(o.useState)(""),E=Object(l.a)(S,2),O=E[0],j=E[1],x=Object(o.useState)(-1),M=Object(l.a)(x,2),C=M[0],k=M[1];Object(o.useEffect)((function(){var e=document.getElementById(n),t=s(e,C,k);t.node&&function(e){var n=window.getSelection(),t=document.createRange();n&&e&&e.node&&e.position>=0&&e.node.nodeValue&&e.node.nodeValue.length>=e.position&&(t.setStart(e.node,e.position),t.collapse(!0),n&&(n.removeAllRanges(),n.addRange(t)))}(t)}),[O]),Object(o.useEffect)((function(){if(t){var e=R(t);j(e)}else t||j("")}),[t]);var A,K=function(e){var n=13===e.keyCode;if(n&&g)return e.preventDefault(),void g();if(n)e.preventDefault();else{var t=e.currentTarget,o=function(e){var n=0;if("undefined"!==typeof window.getSelection){var t,o=null===(t=window.getSelection())||void 0===t?void 0:t.getRangeAt(0),a=null===o||void 0===o?void 0:o.toString().length,r=null===o||void 0===o?void 0:o.cloneRange();r.selectNodeContents(e),r.setEnd(o.endContainer,o.endOffset),n=r.toString().length-a}return n}(t);v(t.innerText),k(o)}},R=function(e){var n=Object(d.clone)(e);r.map((function(n){var t=n.regexMatch.test(e);return n.match=t,n})).forEach((function(e){if(e.match){var t,o=null===(t=n)||void 0===t?void 0:t.match(e.regexMatch),a=Object(c.a)(new Set(o));null===a||void 0===a||a.forEach((function(t){var o="string"===typeof e.htmlMod?e.htmlMod:e.htmlMod(t);if("function"===typeof e.htmlMod){var a,r=new RegExp(t,"g");n=null===(a=n)||void 0===a?void 0:a.replace(r,o)}else{var i;n=null===(i=n)||void 0===i?void 0:i.replace(e.regexMatch,o)}}))}}));return n.replace(/\r?\n|\r/g,""),n};return a.a.createElement("div",Object.assign({id:n,style:{whiteSpace:"pre",overflow:"hidden"},contentEditable:!f,onInput:K,onBlur:m||K,onKeyUp:b||K,onKeyDown:w||K,dangerouslySetInnerHTML:{__html:(A=O,A&&A.replace(/&nbsp;|\u202F|\u00A0/g," "))},spellCheck:h},y))},p=(t(18),function(){var e=Object(o.useState)(""),n=Object(l.a)(e,2),t=n[0],r=n[1],i=[{regexMatch:/#[0-9A-F]{6}/gi,htmlMod:function(e){return'<span class="hex-dot" style="--color: '.concat(e,';">').concat(e,"</span>")}},{regexMatch:/\+/g,htmlMod:'<span style="color: #a3a3a3">+</span>'}];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"title"},"Search for your stuff"),a.a.createElement(f,{id:"input",value:t,onChange:r,onSubmit:function(){console.log("input on submit: ",t)},modifierArr:i,spellCheck:!1}))});i.a.render(a.a.createElement(p,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(19)},9:function(e,n,t){}},[[8,1,2]]]);
//# sourceMappingURL=main.471f3e24.chunk.js.map