module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/ComposerBody"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionComposer"]},function(e,t){e.exports=flarum.core.compat["states/ComposerState"]},function(e,t){e.exports=flarum.core.compat["components/TextEditor"]},function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),i=o(1),s=o(4),c=o.n(s),a=o(2),p=o.n(a),f=o(3),u=o.n(f),l=o(5),d=o.n(l);n.a.initializers.add("glowingblue-composer-preview",(function(){Object(i.extend)(c.a.prototype,"load",(function(e,t){t===u.a&&(this.showPreview=!1)})),Object(i.extend)(p.a.prototype,"headerItems",(function(e){e.add("preview-discussion",m("div",{className:"Composer-preview Post-body "+(n.a.composer.showPreview?"":"hidden")}),50)})),u.a.prototype.jumpToPreview=function(e){e instanceof MouseEvent&&(this.composer.showPreview=!this.composer.showPreview,this.composer.showPreview&&s9e.TextFormatter.preview(this.composer.fields.content(),this.$(".Composer-preview")[0]))},Object(i.extend)(d.a.prototype,"view",(function(e){if(n.a.composer.showPreview){try{"textarea"===e.children[0].tag&&(e.children[0].attrs.className+=" hidden")}catch(e){}try{var t=e.children[1].children[0].children.find((function(e){return"item-preview"===e.attrs.className}));t&&(t.children[0].attrs.className+=" active")}catch(e){}}})),Object(i.extend)(p.a.prototype,"oncreate",(function(){setInterval((function(){if(n.a.composer.showPreview){var e=this.$(".TextEditor textarea");e.offset()&&this.$(".Composer-preview").css({width:e.width(),height:e.height()+10,top:e.offset().top-$(".Composer").offset().top,left:e.offset().left-$(".Composer").offset().left})}}),100)}))}))}]);
//# sourceMappingURL=forum.js.map