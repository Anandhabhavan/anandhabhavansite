/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2013 - 2016
 * @version 4.0.1
 *
 * A simple yet powerful JQuery star rating plugin that allows rendering fractional star ratings and supports
 * Right to Left (RTL) input.
 * 
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
*/ !function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(window.jQuery)}(function(t){"use strict";var e,a,i,n,r,s,l,o,c,h,u;t.fn.ratingLocales={},e=".rating",a=0,i=5,n=.5,r=function(e,a){return null==e||0===e.length||a&&""===t.trim(e)},s=function(t,e){return t?" "+e:""},l=function(t,e){t.removeClass(e).addClass(e)},o=function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},c=function(t,e){return parseFloat(t.toFixed(e))},h=function(t,a,i,n){var r=n?a:a.split(" ").join(e+" ")+e;t.off(r).on(r,i)},(u=function(e,a){var i=this;i.$element=t(e),i._init(a)}).prototype={constructor:u,_parseAttr:function(t,e){var s,l,o,c,h=this.$element,u=h.attr("type");if("range"===u||"number"===u){switch(l=e[t]||h.data(t)||h.attr(t),t){case"min":o=a;break;case"max":o=i;break;default:o=n}c=parseFloat(s=r(l)?o:l)}else c=parseFloat(e[t]);return isNaN(c)?o:c},_setDefault:function(t,e){var a=this;r(a[t])&&(a[t]=e)},_listenClick:function(t,e){if(t.stopPropagation(),t.preventDefault(),!0===t.handled)return!1;e(t),t.handled=!0},_starClick:function(t){var e,a=this;a._listenClick(t,function(t){if(a.inactive)return!1;e=a._getTouchPosition(t),a._setStars(e),a.$element.trigger("change").trigger("rating.change",[a.$element.val(),a._getCaption()]),a.starClicked=!0})},_starMouseMove:function(t){var e,a,i=this;!(!i.hoverEnabled||i.inactive||t&&t.isDefaultPrevented())&&(i.starClicked=!1,e=i._getTouchPosition(t),a=i.calculate(e),i._toggleHover(a),i.$element.trigger("rating.hover",[a.val,a.caption,"stars"]))},_starMouseLeave:function(t){var e;!(!this.hoverEnabled||this.inactive||this.starClicked||t&&t.isDefaultPrevented())&&(e=this.cache,this._toggleHover(e),this.$element.trigger("rating.hoverleave",["stars"]))},_clearClick:function(t){var e=this;e._listenClick(t,function(){e.inactive||(e.clear(),e.clearClicked=!0)})},_clearMouseMove:function(t){var e,a,i,n,r=this;!(!r.hoverEnabled||r.inactive||!r.hoverOnClear||t&&t.isDefaultPrevented())&&(r.clearClicked=!1,e='<span class="'+r.clearCaptionClass+'">'+r.clearCaption+"</span>",a=r.clearValue,n={caption:e,width:i=r.getWidthFromValue(a)||0,val:a},r._toggleHover(n),r.$element.trigger("rating.hover",[a,e,"clear"]))},_clearMouseLeave:function(t){var e;!(!this.hoverEnabled||this.inactive||this.clearClicked||!this.hoverOnClear||t&&t.isDefaultPrevented())&&(e=this.cache,this._toggleHover(e),this.$element.trigger("rating.hoverleave",["clear"]))},_resetForm:function(t){!(t&&t.isDefaultPrevented())&&(this.inactive||this.reset())},_setTouch:function(t,e){var a,i,n,s,l,o,c,h=this;("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)&&!h.inactive&&(i=r((a=t.originalEvent).touches)?a.changedTouches:a.touches,n=h._getTouchPosition(i[0]),e?(h._setStars(n),h.$element.trigger("change").trigger("rating.change",[h.$element.val(),h._getCaption()]),h.starClicked=!0):(l=(s=h.calculate(n)).val<=h.clearValue?h.fetchCaption(h.clearValue):s.caption,o=h.getWidthFromValue(h.clearValue),c=s.val<=h.clearValue?o+"%":s.width,h._setCaption(l),h.$filledStars.css("width",c)))},_initTouch:function(t){var e="touchend"===t.type;this._setTouch(t,e)},_initSlider:function(t){var e=this;r(e.$element.val())&&e.$element.val(0),e.initialValue=e.$element.val(),e._setDefault("min",e._parseAttr("min",t)),e._setDefault("max",e._parseAttr("max",t)),e._setDefault("step",e._parseAttr("step",t)),(isNaN(e.min)||r(e.min))&&(e.min=a),(isNaN(e.max)||r(e.max))&&(e.max=i),(isNaN(e.step)||r(e.step)||0===e.step)&&(e.step=n),e.diff=e.max-e.min},_initHighlight:function(t){var e,a=this,i=a._getCaption();t||(t=a.$element.val()),e=a.getWidthFromValue(t)+"%",a.$filledStars.width(e),a.cache={caption:i,width:e,val:t}},_getContainerCss:function(){return"rating-container"+s(this.theme,"theme-"+this.theme)+s(this.rtl,"rating-rtl")+s(this.size,"rating-"+this.size)+s(this.animate,"rating-animate")+s(this.disabled||this.readonly,"rating-disabled")+s(this.containerClass,this.containerClass)},_checkDisabled:function(){var t=this,e=t.$element,a=t.options;t.disabled=void 0===a.disabled?e.attr("disabled")||!1:a.disabled,t.readonly=void 0===a.readonly?e.attr("readonly")||!1:a.readonly,t.inactive=t.disabled||t.readonly,e.attr({disabled:t.disabled,readonly:t.readonly})},_addContent:function(t,e){var a=this.$container,i="clear"===t;return this.rtl?i?a.append(e):a.prepend(e):i?a.prepend(e):a.append(e)},_generateRating:function(){var e,a,i,n=this,r=n.$element;l(a=n.$container=t(document.createElement("div")).insertBefore(r),n._getContainerCss()),n.$rating=e=t(document.createElement("div")).attr("class","rating").appendTo(a).append(n._getStars("empty")).append(n._getStars("filled")),n.$emptyStars=e.find(".empty-stars"),n.$filledStars=e.find(".filled-stars"),n._renderCaption(),n._renderClear(),n._initHighlight(),a.append(r),n.rtl&&(i=Math.max(n.$emptyStars.outerWidth(),n.$filledStars.outerWidth()),n.$emptyStars.width(i))},_getCaption:function(){return this.$caption&&this.$caption.length?this.$caption.html():this.defaultCaption},_setCaption:function(t){this.$caption&&this.$caption.length&&this.$caption.html(t)},_renderCaption:function(){var e,a=this,i=a.$element.val(),n=a.captionElement?t(a.captionElement):"";if(a.showCaption){if(e=a.fetchCaption(i),n&&n.length){l(n,"caption"),n.html(e),a.$caption=n;return}a._addContent("caption",'<div class="caption">'+e+"</div>"),a.$caption=a.$container.find(".caption")}},_renderClear:function(){var e,a=this,i=a.clearElement?t(a.clearElement):"";if(a.showClear){if(e=a._getClearClass(),i.length){l(i,e),i.attr({title:a.clearButtonTitle}).html(a.clearButton),a.$clear=i;return}a._addContent("clear",'<div class="'+e+'" title="'+a.clearButtonTitle+'">'+a.clearButton+"</div>"),a.$clear=a.$container.find("."+a.clearButtonBaseClass)}},_getClearClass:function(){return this.clearButtonBaseClass+" "+(this.inactive?"":this.clearButtonActiveClass)},_getTouchPosition:function(t){return(r(t.pageX)?t.originalEvent.touches[0].pageX:t.pageX)-this.$rating.offset().left},_toggleHover:function(t){var e,a,i;t&&(this.hoverChangeStars&&(e=this.getWidthFromValue(this.clearValue),a=t.val<=this.clearValue?e+"%":t.width,this.$filledStars.css("width",a)),this.hoverChangeCaption&&(i=t.val<=this.clearValue?this.fetchCaption(this.clearValue):t.caption)&&this._setCaption(i+""))},_init:function(e){var a=this,i=a.$element.addClass("hide");return a.options=e,t.each(e,function(t,e){a[t]=e}),(a.rtl||"rtl"===i.attr("dir"))&&(a.rtl=!0,i.attr("dir","rtl")),a.starClicked=!1,a.clearClicked=!1,a._initSlider(e),a._checkDisabled(),a.displayOnly&&(a.inactive=!0,a.showClear=!1,a.showCaption=!1),a._generateRating(),a._listen(),i.removeClass("rating-loading")},_listen:function(){var e=this.$element,a=e.closest("form"),i=this.$rating,n=this.$clear;return h(i,"touchstart touchmove touchend",t.proxy(this._initTouch,this)),h(i,"click touchstart",t.proxy(this._starClick,this)),h(i,"mousemove",t.proxy(this._starMouseMove,this)),h(i,"mouseleave",t.proxy(this._starMouseLeave,this)),this.showClear&&n.length&&(h(n,"click touchstart",t.proxy(this._clearClick,this)),h(n,"mousemove",t.proxy(this._clearMouseMove,this)),h(n,"mouseleave",t.proxy(this._clearMouseLeave,this))),a.length&&h(a,"reset",t.proxy(this._resetForm,this)),e},_getStars:function(t){var e,a='<span class="'+t+'-stars">';for(e=1;e<=this.stars;e++)a+='<span class="star">'+this[t+"Star"]+"</span>";return a+"</span>"},_setStars:function(t){var e=this,a=arguments.length?e.calculate(t):e.calculate(),i=e.$element;return i.val(a.val),e.$filledStars.css("width",a.width),e._setCaption(a.caption),e.cache=a,i},showStars:function(t){var e=parseFloat(t);return this.$element.val(isNaN(e)?this.clearValue:e),this._setStars()},calculate:function(t){var e=r(this.$element.val())?0:this.$element.val(),a=arguments.length?this.getValueFromPosition(t):e,i=this.fetchCaption(a),n=this.getWidthFromValue(a);return{caption:i,width:n+="%",val:a}},getValueFromPosition:function(t){var e,a,i=o(this.step),n=this.$rating.width();return a=this.diff*t/(n*this.step),a=this.rtl?Math.floor(a):Math.ceil(a),e=Math.max(Math.min(e=c(parseFloat(this.min+a*this.step),i),this.max),this.min),this.rtl?this.max-e:e},getWidthFromValue:function(t){var e,a,i=this.min,n=this.max,r=this.$emptyStars;return!t||t<=i||i===n?0:(e=(a=r.outerWidth())?r.width()/a:1,t>=n)?100:(t-i)*e*100/(n-i)},fetchCaption:function(t){var e,a,i,n,s,l=parseFloat(t)||this.clearValue,h=this.starCaptions,u=this.starCaptionClasses;return l&&l!==this.clearValue&&(l=c(l,o(this.step))),n="function"==typeof u?u(l):u[l],a=r(i="function"==typeof h?h(l):h[l])?this.defaultCaption.replace(/\{rating}/g,l):i,'<span class="'+(e=r(n)?this.clearCaptionClass:n)+'">'+(s=l===this.clearValue?this.clearCaption:a)+"</span>"},destroy:function(){var e=this.$element;return r(this.$container)||this.$container.before(e).remove(),t.removeData(e.get(0)),e.off("rating").removeClass("hide")},create:function(t){var e=t||this.options||{};return this.destroy().rating(e)},clear:function(){var t='<span class="'+this.clearCaptionClass+'">'+this.clearCaption+"</span>";return this.inactive||this._setCaption(t),this.showStars(this.clearValue).trigger("change").trigger("rating.clear")},reset:function(){return this.showStars(this.initialValue).trigger("rating.reset")},update:function(t){return arguments.length?this.showStars(t):this.$element},refresh:function(e){var a=this.$element;return e?this.destroy().rating(t.extend(!0,this.options,e)).trigger("rating.refresh"):a}},t.fn.rating=function(e){var a=Array.apply(null,arguments),i=[];switch(a.shift(),this.each(function(){var n,s=t(this),l=s.data("rating"),o="object"==typeof e&&e,c=o.language||s.data("language")||"en",h={};l||("en"===c||r(t.fn.ratingLocales[c])||(h=t.fn.ratingLocales[c]),n=t.extend(!0,{},t.fn.rating.defaults,t.fn.ratingLocales.en,h,o,s.data()),l=new u(this,n),s.data("rating",l)),"string"==typeof e&&i.push(l[e].apply(l,a))}),i.length){case 0:return this;case 1:return void 0===i[0]?this:i[0];default:return i}},t.fn.rating.defaults={theme:"",language:"en",stars:5,filledStar:'<i class="glyphicon glyphicon-star"></i>',emptyStar:'<i class="glyphicon glyphicon-star-empty"></i>',containerClass:"",size:"md",animate:!0,displayOnly:!1,rtl:!1,showClear:!0,showCaption:!0,starCaptionClasses:{.5:"label label-danger",1:"label label-danger",1.5:"label label-warning",2:"label label-warning",2.5:"label label-info",3:"label label-info",3.5:"label label-primary",4:"label label-primary",4.5:"label label-success",5:"label label-success"},clearButton:'<i class="glyphicon glyphicon-minus-sign"></i>',clearButtonBaseClass:"clear-rating",clearButtonActiveClass:"clear-rating-active",clearCaptionClass:"label label-default",clearValue:null,captionElement:null,clearElement:null,hoverEnabled:!0,hoverChangeCaption:!0,hoverChangeStars:!0,hoverOnClear:!0},t.fn.ratingLocales.en={defaultCaption:"{rating} Stars",starCaptions:{.5:"Half Star",1:"One Star",1.5:"One & Half Star",2:"Two Stars",2.5:"Two & Half Stars",3:"Three Stars",3.5:"Three & Half Stars",4:"Four Stars",4.5:"Four & Half Stars",5:"Five Stars"},clearButtonTitle:"Clear",clearCaption:"Not Rated"},t.fn.rating.Constructor=u,t(document).ready(function(){var e=t("input.rating");e.length&&e.removeClass("rating-loading").addClass("rating-loading").rating()})});