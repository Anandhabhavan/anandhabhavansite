!function(i){"use strict";var t=window.Slider||{};(t=function t(n,e){var s=this;s.defaults={speed:1e3,delay:3e3,autoplay:!0,pauseonhover:!0,navigation:!0,pagination:!0,paginationType:"dots",initialslide:1,metric:"%",width:"100%",height:"auto",slidertype:"slide",direction:"right",responsive:!0,buttons:{prev:"<div class='prev slider-buttons'><span>&#8249;</span></div>",next:"<div class='next slider-buttons'><span>&#8250;</span></div>"}},s.markup={$slider:i(n),$slidercontainer:null,$slides:null,$btnprev:null,$btnnext:null,$pagElems:[],$paginationContainer:null,slidewidth:null},s.options=i.extend({},s.defaults,e),s.init()}).prototype.init=function(){this.setup(),!0===this.options.autoplay&&this.startSlider()},t.prototype.setup=function(){var t=this;if(t.markup.$slider.wrap("<div class='slider-container'></div>"),t.markup.$slidercontainer=t.markup.$slider.parent(),t.markup.$slider.append(t.markup.$slider.children("li")[t.options.initialslide-1].outerHTML),t.markup.$slides=t.markup.$slider.children("li"),t.markup.$slidercontainer.width(t.options.width),t.markup.$slider.width(100*t.markup.$slides.length+t.options.metric),t.markup.$slides.width(t.markup.$slider.width()/t.markup.$slides.length),"auto"===t.options.height){var n=99999;t.markup.$slides.each(function(){i(this).height()<n&&(n=i(this).height())}),t.markup.$slidercontainer.height(n)}else t.markup.$slidercontainer.height(t.options.height);if(t.markup.slidewidth=t.markup.$slidercontainer.width(),!0===t.options.navigation&&(t.markup.$slidercontainer.append(t.options.buttons.prev,t.options.buttons.next),t.markup.$btnprev=t.markup.$slidercontainer.find(".prev"),t.markup.$btnnext=t.markup.$slidercontainer.find(".next"),t.markup.$btnprev.on("click",i.proxy(t.slide,t,!0,"left",null)),t.markup.$btnnext.on("click",i.proxy(t.slide,t,!0,"right",null))),!0===t.options.pagination){for(var e=1;e<t.markup.$slides.length;e++)if("dots"===t.options.paginationType)t.markup.$pagElems.push("<li class='dot' data-number='"+e+"'></li>");else if("thumbnails"===t.options.paginationType){var s="<li class='thumbnail' data-number='"+e+"'>";s+="<img src='"+i(t.markup.$slides.children("img")[e-1]).attr("src")+"' alt='"+i(t.markup.$slides.children("img")[e-1]).attr("alt")+"-thumbnail' />",s+="</li>",t.markup.$pagElems.push(s)}var a="";i.each(t.markup.$pagElems,function(){a+=this}),t.markup.$slidercontainer.append("<ul class='pagination-container'>"+a+"</ul>"),t.markup.$paginationContainer=t.markup.$slidercontainer.find(".pagination-container"),t.markup.$paginationContainer.children("li").eq(0).addClass("active"),t.markup.$paginationContainer.children("li").on("click",function(){var n=parseInt(i(this).attr("data-number"),10);t.slide(!0,"",n)})}!0===t.options.responsive&&(t.resizeSlider(),i(window).on("resize orientationchange",i.proxy(t.responsive,t)))},t.prototype.resizeSlider=function(){i(window).width()<=parseInt(this.options.width,10)?this.markup.$slidercontainer.width("100%"):this.markup.$slidercontainer.width(this.options.width)},t.prototype.responsive=function(){var t=this,n=99999;t.resizeSlider(),t.pauseSlider(),t.markup.$slider.is(":animated")&&t.markup.$slider.stop(!0,!0),t.markup.$slides.width(t.markup.$slider.width()/t.markup.$slides.length),t.markup.slidewidth=t.markup.$slidercontainer.width();var e=t.markup.slidewidth*(t.options.initialslide-1);t.markup.$slider.css({"margin-left":-e}),t.markup.$slides.each(function(){i(this).height()<n&&(n=i(this).height())}),(n<parseInt(t.options.height,10)||"auto"===t.options.height)&&t.markup.$slidercontainer.height(n),!0===t.options.autoplay&&t.startSlider()},t.prototype.pauseSlider=function(){clearInterval(this.interval)},t.prototype.startSlider=function(){this.sliderInit()},t.prototype.sliderInit=function(){"slide"===this.options.slidertype&&this.slide()},t.prototype.slide=function(t,n,e){var s=this;n=n||s.options.direction,!0===t?s.markup.$slider.is(":animated")||(s.pauseSlider(),s.slideTransition(n,e)):(s.pauseSlider(),s.interval=setInterval(i.proxy(s.slideTransition,s,n),s.options.delay))},t.prototype.slideTransition=function(i,t){var n,e=this;"left"===i?(n=t?"-"+e.markup.slidewidth*(t-1):"+="+e.markup.slidewidth,1===e.options.initialslide&&(e.markup.$slider.css({"margin-left":"-"+(e.markup.$slides.length-1)*e.markup.slidewidth+"px"}),e.options.initialslide=e.markup.$slides.length),e.markup.$slider.animate({"margin-left":n+"px"},e.options.speed,function(){t?e.options.initialslide=t:e.options.initialslide--,e.updatePagination(e.options.initialslide),!0===e.options.autoplay&&e.startSlider()})):(n=t?"-"+e.markup.slidewidth*(t-1):"-="+e.markup.slidewidth,e.options.initialslide===e.markup.$slides.length&&(e.markup.$slider.css({"margin-left":0}),e.options.initialslide=1),e.markup.$slider.animate({"margin-left":n+"px"},e.options.speed,function(){t?e.options.initialslide=t:e.options.initialslide++,e.updatePagination(e.options.initialslide),!0===e.options.autoplay&&e.startSlider()}))},t.prototype.updatePagination=function(i){i===this.markup.$slides.length&&(i=1),this.markup.$paginationContainer.children("li.active").removeClass("active"),this.markup.$paginationContainer.find("[data-number='"+i+"']").addClass("active")},i.fn.slider=function(i){this.slider=new t(this,i)}}(jQuery);