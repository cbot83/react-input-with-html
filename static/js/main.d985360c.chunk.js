(this["webpackJsonpreact-input-with-html-example"]=this["webpackJsonpreact-input-with-html-example"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(16)},function(e,n,t){},,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(5);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),l=t(2),c=t(1);var u="_1lJ7F",s="_3Bo-t",d="_2IYfc",f=function(e,n,t){for(var o,r=function(e){for(var n,t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1);n=o.nextNode();)t.push(n);return t}(e),a=0;a<r.length;a++){if(!(n>r[a].nodeValue.length&&r[a+1])){o=r[a];break}n-=r[a].nodeValue.length}return o?{node:o,position:n}:(t(-1),{node:o,position:-1})},h=function(e){var n=e.id,t=e.value,a=e.disabled,i=void 0!==a&&a,l=e.spellCheck,h=void 0===l||l,v=e.onChange,g=e.modifierArr,p=e.onSubmit,m=e.onBlur,b=e.onKeyUp,E=e.onKeyDown,y=e.hexDot,S=e.style,x=e.highlightThis,C=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["id","value","disabled","spellCheck","onChange","modifierArr","onSubmit","onBlur","onKeyUp","onKeyDown","hexDot","style","highlightThis"]),O=Object(o.useState)(""),j=O[0],k=O[1],M=Object(o.useState)(-1),w=M[0],A=M[1];Object(o.useEffect)((function(){var e=document.getElementById(n),t=f(e,w,A);t.node&&function(e){var n=window.getSelection(),t=document.createRange();n&&e&&e.node&&e.position>=0&&e.node.nodeValue&&e.node.nodeValue.length>=e.position&&(t.setStart(e.node,e.position),t.collapse(!0),n&&(n.removeAllRanges(),n.addRange(t)))}(t)}),[j]),Object(o.useEffect)((function(){var e=F(t);if(x){var n=function(e){var n=Object(c.clone)(e);if(x&&"string"===typeof x){var t=new RegExp("(?<!: *)"+x,"gi");n=n.replace(t,'<span style="background-color: #b4ffc4">'+x+"</span>")}else x&&"boolean"===typeof x&&(n='<span style="background-color: #b4ffc4">'+e+"</span>");return n}(e);k(n)}else k(e)}),[x]),Object(o.useEffect)((function(){if(t){var e=F(t);k(e)}else t||k("")}),[t]);var D,T=function(e){var n=13===e.keyCode;if(n&&p)return e.preventDefault(),void p();if(n)e.preventDefault();else{var t=e.currentTarget,o=function(e){var n=0;if(e){if("undefined"!==typeof window.getSelection){var t,o=null===(t=window.getSelection())||void 0===t?void 0:t.getRangeAt(0),r=null===o||void 0===o?void 0:o.toString().length,a=null===o||void 0===o?void 0:o.cloneRange();a.selectNodeContents(e),a.setEnd(o.endContainer,o.endOffset),n=a.toString().length-r}return n}}(t);v(t.innerText),A(o||-1)}},F=function(e){var n=Object(c.clone)(e),t=24===(null===y||void 0===y?void 0:y.fontSize)?24:11,o=Object(c.clone)(g);if(null===y||void 0===y?void 0:y.enable){var r={regexMatch:/(?<!:\s*)#[0-9A-F]{6}/gi,htmlMod:function(e){return'<span class="'+(24===t?u:s)+'" style="--color: '+e+'">'+e+"</span>"}};o.push(r)}o.map((function(n){var t=n.regexMatch.test(e);return n.match=t,n})).forEach((function(e){if(e.match){var t,o=null===(t=n)||void 0===t?void 0:t.match(e.regexMatch),r=null===o||void 0===o?void 0:o.filter((function(e,n,t){return t.indexOf(e)===n}));null===r||void 0===r||r.forEach((function(t){var o="string"===typeof e.htmlMod?e.htmlMod:e.htmlMod(t);if("function"===typeof e.htmlMod){var r,a=new RegExp(t,"g");n=null===(r=n)||void 0===r?void 0:r.replace(a,o)}else{var i;n=null===(i=n)||void 0===i?void 0:i.replace(e.regexMatch,o)}}))}}));return n.replace(/\r?\n|\r/g,""),n};return r.a.createElement("div",Object.assign({id:n,className:d,contentEditable:!i,onInput:T,onBlur:m||T,onKeyUp:b||T,onKeyDown:E||T,dangerouslySetInnerHTML:{__html:(D=j,D&&D.replace(/&nbsp;|\u202F|\u00A0/g," "))},spellCheck:h,style:S},C))},v=(t(14),t(15),function(){var e=Object(o.useState)(""),n=Object(l.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)(""),c=Object(l.a)(i,2),u=c[0],s=c[1],d=Object(o.useState)(""),f=Object(l.a)(d,2),v=f[0],g=f[1],p=function(){alert("You just called submit can have this in state: ".concat(t))},m=[{regexMatch:/\+/g,htmlMod:'<span style="color: #a3a3a3">+</span>'}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Hero Search From Stocksy"),r.a.createElement(h,{id:"input",value:t,onChange:a,onSubmit:p,modifierArr:m,spellCheck:!1,hexDot:{enable:!0,fontSize:24},highlightThis:v}),r.a.createElement("div",{style:{textAlign:"center",margin:12}},r.a.createElement("button",{onClick:function(){return a("#E33CC7")},onMouseEnter:function(){return g("#E33CC7")},onMouseLeave:function(){return g("")}},"#E33CC7")),r.a.createElement("div",{style:{textAlign:"center",margin:12}},r.a.createElement("button",{onClick:function(){return a("")},onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g("")}},"Delete")),r.a.createElement("h1",{className:"title"},"Nav Search From Stocksy"),r.a.createElement(h,{id:"input-nav",value:u,onChange:s,onSubmit:p,modifierArr:m,spellCheck:!1,hexDot:{enable:!0,fontSize:11}}))});i.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.d985360c.chunk.js.map