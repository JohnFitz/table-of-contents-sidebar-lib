var TableOfContents={params:void 0,fixedHeight:0,isOverflow:!1,init:function(a){if(this.params=a,!TableOfContents.isMobile()){var b=this.extractNodes();if(b.nodes&&0!=b.nodes.length&&(1!=b.nodes.length||b.nodes[0].nodes)){this.injectCss();var c=this.createFixedSidebarNode(),d=this.createFixedMenuNode();c.appendChild(this.createOptionsNode());var e=document.createElement("ul");e.id="table-of-contents-sidebar-list-container-id",this.parseNodes(e,b,0),c.appendChild(e),c.appendChild(this.createCopyrightNode());var f=document.createElement("div");f.id="table-of-contents-sidebar-fixed-sidebar-tooltip",c.appendChild(f),document.body.appendChild(c),document.body.appendChild(d),TableOfContentsTooltip.tooltip=document.getElementById("table-of-contents-sidebar-fixed-sidebar-tooltip"),this.scrollRebuild()}}},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=480?!0:!1},scrollRebuild:function(){var a;window.addEventListener("scroll",function(){window.clearTimeout(a),a=setTimeout(function(){for(var a=0,b=document.getElementsByTagName("*"),c=0,d=b.length;d>c;c++){var e=b[c];if("table-of-contents-sidebar-id"!=e.id){var f=window.getComputedStyle(e,null),g=f.getPropertyValue("position"),h=f.getPropertyValue("top");"fixed"==g&&"0px"==h&&e.offsetHeight<200&&(a+=e.offsetHeight)}}TableOfContents.fixedHeight=a,TableOfContents.rebuild()},500)},!1)},rebuild:function(){var a=document.getElementById("table-of-contents-sidebar-list-container-id");if(a){var b=this.extractNodes();if(b.nodes&&0!=b.nodes.length&&(1!=b.nodes.length||b.nodes.nodes)){for(;a.firstChild;)a.removeChild(a.firstChild);this.parseNodes(a,b,0)}}},createFixedMenuNode:function(){var a=this.fixedSidebarNode(),b=null,c="18px";a&&(a.style.left,a.style.right);var d=document.createElement("img");return d.id="table-of-contents-sidebar-hover-menu-id",d.src=this.params.basePath+"images/ic_normal.png",d.className="table-of-contents-sidebar-menu",d.style.left=b,d.style.right=c,d.addEventListener("mouseover",TableOfContents.mouseOverEvent),d.addEventListener("mouseout",TableOfContents.mouseOutEvent),d},fixedSidebarPinBtnNode:function(){var a=document.getElementById("table-of-contents-sidebar-pin-id");return a},fixedSidebarPositionBtnNode:function(){var a=document.getElementById("table-of-contents-sidebar-position-id");return a},fixedSidebarNode:function(){var a=document.getElementById("table-of-contents-sidebar-id");return a},fixedSidebarMenuNode:function(){var a=document.getElementById("table-of-contents-sidebar-hover-menu-id");return a},sidebarMouseOutEvent:function(a){a.stopPropagation();var b=document.getElementById("table-of-contents-sidebar-id");b.className="table-of-contents-sidebar-fixed-sidebar"},sidebarMouseOverEvent:function(a){a.stopPropagation();var b=document.getElementById("table-of-contents-sidebar-id");b.className="table-of-contents-sidebar-fixed-sidebar show"},mouseOutEvent:function(a){a.stopPropagation();var b=document.getElementById("table-of-contents-sidebar-id");b.className="table-of-contents-sidebar-fixed-sidebar",b.addEventListener("mouseout",TableOfContents.sidebarMouseOutEvent),b.addEventListener("mouseover",TableOfContents.sidebarMouseOverEvent)},mouseOverEvent:function(a){a.stopPropagation();var b=document.getElementById("table-of-contents-sidebar-id");b&&(b.className="table-of-contents-sidebar-fixed-sidebar show",b.addEventListener("mouseout",TableOfContents.sidebarMouseOutEvent),b.addEventListener("mouseover",TableOfContents.sidebarMouseOverEvent))},createFixedSidebarNode:function(){var a=document.createElement("div");return a.id="table-of-contents-sidebar-id",a.className="table-of-contents-sidebar-fixed-sidebar",a},createOptionsNode:function(){var a=this.createSpanNode(""),b=this.createImageNode(this.params.basePath+"images/right.png","Right");b.id="table-of-contents-sidebar-position-id",b.src=this.params.basePath+"images/left.png",b.addEventListener("click",function(a){a.stopPropagation(),TableOfContents.activeLeft()}),b.tooltip=this.params.leftTooltip||"Left",b.addEventListener("mouseover",TableOfContentsTooltip.show),b.addEventListener("mouseleave",TableOfContentsTooltip.hide);var c=this.createImageNode(this.params.basePath+"images/unpin.png","Pin");c.id="table-of-contents-sidebar-pin-id",c.addEventListener("click",function(a){a.stopPropagation(),TableOfContents.activePin()}),c.tooltip=this.params.pinTooltip||"Pin",c.addEventListener("mouseover",TableOfContentsTooltip.show),c.addEventListener("mouseleave",TableOfContentsTooltip.hide);var d=this.createImageNode(this.params.basePath+"images/bug.png","Report Bugs");d.addEventListener("click",function(a){a.stopPropagation(),window.open("https://github.com/codedrinker/table-of-contents-sidebar/issues","_blank")}),d.tooltip=this.params.bugTooltip||"Report Bug",d.addEventListener("mouseover",TableOfContentsTooltip.show),d.addEventListener("mouseleave",TableOfContentsTooltip.hide);var e=this.createImageNode(this.params.basePath+"images/star.png","Rate Us");e.addEventListener("click",function(a){a.stopPropagation(),window.open("https://chrome.google.com/webstore/detail/table-of-contents-sidebar/ohohkfheangmbedkgechjkmbepeikkej/reviews","_blank")}),e.tooltip=this.params.rateusTooltip||"Rate Us",e.addEventListener("mouseover",TableOfContentsTooltip.show),e.addEventListener("mouseleave",TableOfContentsTooltip.hide);var f=this.createImageNode(this.params.basePath+"images/chrome.png","Install Chrome Extension");f.addEventListener("click",function(a){a.stopPropagation(),window.open("https://chrome.google.com/webstore/detail/table-of-contents-sidebar/ohohkfheangmbedkgechjkmbepeikkej/reviews","_blank")}),f.tooltip=this.params.installTooltip||"Install Chrome Extension",f.addEventListener("mouseover",TableOfContentsTooltip.show),f.addEventListener("mouseleave",TableOfContentsTooltip.hide);var g=this.createImageNode(this.params.basePath+"images/code.png","Integrate to your website");return g.addEventListener("click",function(a){a.stopPropagation(),window.open("https://table-of-contents-sidebar.github.com","_blank")}),g.tooltip=this.params.integrateBtnTooltip||"Integrate to your website",g.addEventListener("mouseover",TableOfContentsTooltip.show),g.addEventListener("mouseleave",TableOfContentsTooltip.hide),a.appendChild(b),a.appendChild(c),a.appendChild(d),chrome.extension?a.appendChild(e):(a.appendChild(f),a.appendChild(g)),a.appendChild(document.createElement("br")),a},createCopyrightNode:function(){var a=document.createElement("span");a.className="copyright";var b=document.createElement("a");b.appendChild(document.createTextNode("Yiting")),b.href="https://yiting.myportfolio.com?utm_source=toc",b.target="_blank",b.tooltip=this.params.yitingTooltip||"Yiting's Blog",b.addEventListener("mouseover",TableOfContentsTooltip.show),b.addEventListener("mouseleave",TableOfContentsTooltip.hide);var c=document.createElement("a");c.appendChild(document.createTextNode("Majiang")),c.href="http://www.majiang.life?utm_source=toc",c.target="_blank",c.tooltip=this.params.majiangTooltip||"Majiang's Blog",c.addEventListener("mouseover",TableOfContentsTooltip.show),c.addEventListener("mouseleave",TableOfContentsTooltip.hide);var d=document.createTextNode("Powered by "),e=document.createTextNode(" & ");return a.appendChild(d),a.appendChild(b),a.appendChild(e),a.appendChild(c),a},createImageNode:function(a,b,c){var d=document.createElement("img");return d.style.marginLeft="12px",d.style.height=c?c:"22px",d.style.width=c?c:"22px",d.style.cursor="pointer",d.src=a,d},injectCss:function(){var a=document.createElement("link");a.href=this.params.basePath+"table-of-contents-sidebar.css",a.type="text/css",a.rel="stylesheet";var b=document.getElementsByTagName("head");b?b[0].appendChild(a):document.body.appendChild(a)},extractNodes:function(){for(var a=document.getElementsByTagName("*"),b=0,c=0,d=[],e={nodes:[]},f=0,g=a.length;g>f;f++){var h=a[f],i=window.getComputedStyle(h,null),j=i.getPropertyValue("position"),k=i.getPropertyValue("top");if("fixed"==j&&"0px"==k&&h.offsetHeight<200&&(TableOfContents.fixedHeight+=h.offsetHeight),h&&h.textContent&&h.textContent.trim()&&("H1"==h.nodeName||"H2"==h.nodeName||"H3"==h.nodeName||"H4"==h.nodeName||"H5"==h.nodeName||"H6"==h.nodeName)){var l=h.getBoundingClientRect().top+document.documentElement.scrollTop;if(l>document.body.offsetHeight&&(TableOfContents.isOverflow=!0),d&&0!=d.length){var m=d[d.length-1];if(l==m.absTop)continue}h.id||(h.id=this.uuid());var n={id:h.id,text:h.textContent,name:h.nodeName,absTop:l};this.addNode(e,n),d.push(n),b=l,c++}}return e},addNode:function(a,b){if(a&&a.nodes&&0!=a.nodes.length){var c=a.nodes[a.nodes.length-1];c.name==b.name?a.nodes.push(b):c.name<b.name?this.addNode(c,b):a.nodes.push(b)}else a.nodes=[b]},uuid:function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},activeLeft:function(a,b){var c=this.fixedSidebarPositionBtnNode();c&&(c.src=this.params.basePath+"images/right.png",c.addEventListener("click",function(a){a.stopPropagation(),TableOfContents.activeRight()}),c.tooltip=this.params.rightTooltip||"Right",c.addEventListener("mouseover",TableOfContentsTooltip.show),c.addEventListener("mouseleave",TableOfContentsTooltip.hide));var a=a?a:this.fixedSidebarNode(),b=b?b:this.fixedSidebarMenuNode();a&&(a.style.left="0px",a.style.right=null),b&&(b.style.left="18px",b.style.right=null)},activeRight:function(a,b){var c=this.fixedSidebarPositionBtnNode();c&&(c.src=this.params.basePath+"images/left.png",c.addEventListener("click",function(a){a.stopPropagation(),TableOfContents.activeLeft()}),c.tooltip=this.params.leftTooltip||"Left",c.addEventListener("mouseover",TableOfContentsTooltip.show),c.addEventListener("mouseleave",TableOfContentsTooltip.hide));var a=a?a:this.fixedSidebarNode(),b=b?b:this.fixedSidebarMenuNode();a&&(a.style.right="0px",a.style.left=null),b&&(b.style.right="18px",b.style.left=null)},activePin:function(a,b){var c=this.fixedSidebarPinBtnNode();c&&(c.src=this.params.basePath+"images/pin.png",c.addEventListener("click",function(a){a.stopPropagation(),TableOfContents.activeUnpin()}),c.tooltip=this.params.unpinTooltip||"Unpin",c.addEventListener("mouseover",TableOfContentsTooltip.show),c.addEventListener("mouseleave",TableOfContentsTooltip.hide));var a=a?a:this.fixedSidebarNode(),b=b?b:this.fixedSidebarMenuNode();a&&(a.removeEventListener("mouseout",TableOfContents.sidebarMouseOutEvent,!1),a.removeEventListener("mouseover",TableOfContents.sidebarMouseOverEvent,!1),a.className="table-of-contents-sidebar-fixed-sidebar show"),b&&(b.removeEventListener("mouseout",TableOfContents.mouseOutEvent,!1),b.removeEventListener("mouseover",TableOfContents.mouseOverEvent,!1))},activeUnpin:function(a,b){var c=this.fixedSidebarPinBtnNode();c&&(c.src=this.params.basePath+"images/unpin.png",c.addEventListener("click",function(a){a.stopPropagation(),TableOfContents.activePin()}),c.tooltip=this.params.pinTooltip||"Pin",c.addEventListener("mouseover",TableOfContentsTooltip.show),c.addEventListener("mouseleave",TableOfContentsTooltip.hide));var a=a?a:this.fixedSidebarNode(),b=b?b:this.fixedSidebarMenuNode();a&&(a.addEventListener("mouseout",TableOfContents.sidebarMouseOutEvent),a.addEventListener("mouseover",TableOfContents.sidebarMouseOverEvent)),b&&(b.style.display="block",b.addEventListener("mouseover",TableOfContents.mouseOverEvent),b.addEventListener("mouseout",TableOfContents.mouseOutEvent))},createSpanNode:function(a){var b=document.createElement("span"),c=document.createTextNode(a);return b.appendChild(c),b},parseNodes:function(a,b,c){if(b){if(b.text){var d=document.createElement("li"),e="ANCHOR-"+c;d.className=e;var f=document.createElement("a"),g=document.createTextNode(b.text);f.appendChild(g),f.tooltip=b.text,f.auto=!0,f.href="#"+b.id,f.addEventListener("mouseover",TableOfContentsTooltip.show),f.addEventListener("mouseleave",TableOfContentsTooltip.hide),f.addEventListener("click",function(a){a.preventDefault();var b=a.srcElement.hash.substr(1),c=document.getElementById(decodeURIComponent(b)),d=c.getBoundingClientRect().top+window.scrollY-TableOfContents.fixedHeight;TableOfContents.isOverflow?window.location.hash=a.srcElement.hash:window.scroll({top:d,left:0,behavior:"smooth"})}),d.appendChild(f),a.appendChild(d)}if(c++,b.nodes&&0!=b.nodes.length)for(var h=0;h<b.nodes.length;h++)this.parseNodes(a,b.nodes[h],c)}}},TableOfContentsTooltip={tooltip:void 0,target:void 0,show:function(){TableOfContentsTooltip.target=this;var a=TableOfContentsTooltip.target.tooltip;if(!a||""==a)return!1;TableOfContentsTooltip.tooltip.innerText=a.trim().replace(/\n|\r/g,"");var b=TableOfContentsTooltip.target.offsetTop-TableOfContentsTooltip.tooltip.offsetHeight-10;if(TableOfContentsTooltip.target.auto){var c=document.getElementById("table-of-contents-sidebar-list-container-id").scrollTop;b-=c}var d=0;if(TableOfContentsTooltip.tooltip.className="",TableOfContentsTooltip.tooltip.offsetWidth>240&&(TableOfContentsTooltip.tooltip.style.maxWidth="240px"),TableOfContentsTooltip.target.offsetWidth>200?d=0:TableOfContentsTooltip.target.offsetLeft+TableOfContentsTooltip.target.offsetWidth/2>TableOfContentsTooltip.tooltip.offsetWidth/2&&250-TableOfContentsTooltip.target.offsetLeft+TableOfContentsTooltip.target.offsetWidth/2>TableOfContentsTooltip.tooltip.offsetWidth/2&&(d=TableOfContentsTooltip.target.offsetLeft+TableOfContentsTooltip.target.offsetWidth/2-TableOfContentsTooltip.tooltip.offsetWidth/2),0>b){var b=TableOfContentsTooltip.target.offsetTop+TableOfContentsTooltip.target.offsetHeight-5;TableOfContentsTooltip.target.auto&&(b-=c),TableOfContentsTooltip.tooltip.className+=" top"}TableOfContentsTooltip.tooltip.style.left=d+"px",TableOfContentsTooltip.tooltip.style.top=b+"px",TableOfContentsTooltip.tooltip.className+=" show"},hide:function(){TableOfContentsTooltip.tooltip.className=TableOfContentsTooltip.tooltip.className.replace("show","")}};