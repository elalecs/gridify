"use strict";!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):n(jQuery)}(function(n){n.fn.extend({imagesLoaded:function(i){var e=n(this).find("img"),t=e.length;0==t&&i();for(var r=0,a=e.length;a>r;r++){var o=new Image;o.onload=o.onerror=function(){t--,0==t&&i()},o.src=e[r].src}},gridify:function(i){var e=n(this),i=i||{},t=function(n){for(var i=0,e=1,t=n.length;t>e;e++)n[e]<n[i]&&(i=e);return i},r=function(){e.css("position","relative");var r=e.find(i.srcNode),a=(i.transition||"all 0.5s ease")+", height 0, width 0",o=e.innerWidth(),s=parseInt(i.margin||0),d=parseInt(i.max_width||i.width||220),f=Math.max(Math.floor(o/(d+s)),1),h=1==f?s/2:o%(d+s)/2,l=[];i.max_width&&(f=Math.ceil(o/(d+s)),d=(o-f*s-s)/f,h=s/2);for(var u=0;f>u;u++)l.push(0);for(var u=0,c=r.length;c>u;u++){var g=n(r[u]),m=t(l);g.css({width:d,position:"absolute",margin:s/2,top:l[m]+s/2,left:(d+s)*m+h,transition:a}),l[m]+=g.innerHeight()+s}e.height(Math.max.apply(null,l))};if(e.imagesLoaded(r),i.resizable){var a=n(window).bind("resize",r);e.on("remove",a.unbind)}}})});
