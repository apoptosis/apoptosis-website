(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(e,t,n){var r=n(8874),o=n(6851),i=Object.hasOwnProperty,s={};for(var a in r)i.call(r,a)&&(s[r[a]]=a);var l=e.exports={to:{},get:{}};function h(e,t,n){return Math.min(Math.max(t,e),n)}function u(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}l.get=function(e){var t,n;switch(e.substring(0,3).toLowerCase()){case"hsl":t=l.get.hsl(e),n="hsl";break;case"hwb":t=l.get.hwb(e),n="hwb";break;default:t=l.get.rgb(e),n="rgb"}return t?{model:n,value:t}:null},l.get.rgb=function(e){if(!e)return null;var t,n,o,s=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(o=t[2],t=t[1],n=0;n<3;n++){var a=2*n;s[n]=parseInt(t.slice(a,a+2),16)}o&&(s[3]=parseInt(o,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(o=(t=t[1])[3],n=0;n<3;n++)s[n]=parseInt(t[n]+t[n],16);o&&(s[3]=parseInt(o+o,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(n=0;n<3;n++)s[n]=parseInt(t[n+1],0);t[4]&&(t[5]?s[3]=.01*parseFloat(t[4]):s[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(t=e.match(/^(\w+)$/))?"transparent"===t[1]?[0,0,0,0]:i.call(r,t[1])?((s=r[t[1]])[3]=1,s):null:null;for(n=0;n<3;n++)s[n]=Math.round(2.55*parseFloat(t[n+1]));t[4]&&(t[5]?s[3]=.01*parseFloat(t[4]):s[3]=parseFloat(t[4]))}for(n=0;n<3;n++)s[n]=h(s[n],0,255);return s[3]=h(s[3],0,1),s},l.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,h(parseFloat(t[2]),0,100),h(parseFloat(t[3]),0,100),h(isNaN(n)?1:n,0,1)]}return null},l.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,h(parseFloat(t[2]),0,100),h(parseFloat(t[3]),0,100),h(isNaN(n)?1:n,0,1)]}return null},l.to.hex=function(){var e=o(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},l.to.rgb=function(){var e=o(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},l.to.rgb.percent=function(){var e=o(arguments),t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),r=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+n+"%, "+r+"%)":"rgba("+t+"%, "+n+"%, "+r+"%, "+e[3]+")"},l.to.hsl=function(){var e=o(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},l.to.hwb=function(){var e=o(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},l.to.keyword=function(e){return s[e.slice(0,3)]}},6767:function(e,t,n){const r=n(9818),o=n(978),i=[].slice,s=["keyword","gray","hex"],a={};for(const f of Object.keys(o))a[i.call(o[f].labels).sort().join("")]=f;const l={};function h(e,t){if(!(this instanceof h))return new h(e,t);if(t&&t in s&&(t=null),t&&!(t in o))throw new Error("Unknown model: "+t);let n,u;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof h)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"===typeof e){const t=r.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,u=o[this.model].channels,this.color=t.value.slice(0,u),this.valpha="number"===typeof t.value[u]?t.value[u]:1}else if(e.length>0){this.model=t||"rgb",u=o[this.model].channels;const n=i.call(e,0,u);this.color=p(n,u),this.valpha="number"===typeof e[u]?e[u]:1}else if("number"===typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"===typeof e.alpha?e.alpha:0);const r=t.sort().join("");if(!(r in a))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=a[r];const i=o[this.model].labels,s=[];for(n=0;n<i.length;n++)s.push(e[i[n]]);this.color=p(s)}if(l[this.model])for(u=o[this.model].channels,n=0;n<u;n++){const e=l[this.model][n];e&&(this.color[n]=e(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}h.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in r.to?this:this.rgb();t=t.round("number"===typeof e?e:1);const n=1===t.valpha?t.color:t.color.concat(this.valpha);return r.to[t.model](n)},percentString(e){const t=this.rgb().round("number"===typeof e?e:1),n=1===t.valpha?t.color:t.color.concat(this.valpha);return r.to.rgb.percent(n)},array(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object(){const e={},t=o[this.model].channels,n=o[this.model].labels;for(let r=0;r<t;r++)e[n[r]]=this.color[r];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new h(this.color.map(function(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}(e)).concat(this.valpha),this.model)},alpha(e){return arguments.length>0?new h(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:u("rgb",0,c(255)),green:u("rgb",1,c(255)),blue:u("rgb",2,c(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:u("hsl",1,c(100)),lightness:u("hsl",2,c(100)),saturationv:u("hsv",1,c(100)),value:u("hsv",2,c(100)),chroma:u("hcg",1,c(100)),gray:u("hcg",2,c(100)),white:u("hwb",1,c(100)),wblack:u("hwb",2,c(100)),cyan:u("cmyk",0,c(100)),magenta:u("cmyk",1,c(100)),yellow:u("cmyk",2,c(100)),black:u("cmyk",3,c(100)),x:u("xyz",0,c(100)),y:u("xyz",1,c(100)),z:u("xyz",2,c(100)),l:u("lab",0,c(100)),a:u("lab",1),b:u("lab",2),keyword(e){return arguments.length>0?new h(e):o[this.model].keyword(this.color)},hex(e){return arguments.length>0?new h(e):r.to.hex(this.rgb().round().color)},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[n,r]of e.entries()){const e=r/255;t[n]=e<=.03928?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return h.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let n=t.color[0];return n=(n+e)%360,n=n<0?360+n:n,t.color[0]=n,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const n=e.rgb(),r=this.rgb(),o=void 0===t?.5:t,i=2*o-1,s=n.alpha()-r.alpha(),a=((i*s===-1?i:(i+s)/(1+i*s))+1)/2,l=1-a;return h.rgb(a*n.red()+l*r.red(),a*n.green()+l*r.green(),a*n.blue()+l*r.blue(),n.alpha()*o+r.alpha()*(1-o))}};for(const f of Object.keys(o)){if(s.includes(f))continue;const e=o[f].channels;h.prototype[f]=function(){if(this.model===f)return new h(this);if(arguments.length>0)return new h(arguments,f);const t="number"===typeof arguments[e]?e:this.valpha;return new h(d(o[this.model][f].raw(this.color)).concat(t),f)},h[f]=function(t){return"number"===typeof t&&(t=p(i.call(arguments),e)),new h(t,f)}}function u(e,t,n){e=Array.isArray(e)?e:[e];for(const r of e)(l[r]||(l[r]=[]))[t]=n;return e=e[0],function(r){let o;return arguments.length>0?(n&&(r=n(r)),o=this[e](),o.color[t]=r,o):(o=this[e]().color[t],n&&(o=n(o)),o)}}function c(e){return function(t){return Math.max(0,Math.min(e,t))}}function d(e){return Array.isArray(e)?e:[e]}function p(e,t){for(let n=0;n<t;n++)"number"!==typeof e[n]&&(e[n]=0);return e}e.exports=h},2956:function(e,t,n){const r=n(8900),o={};for(const s of Object.keys(r))o[r[s]]=s;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=i;for(const s of Object.keys(i)){if(!("channels"in i[s]))throw new Error("missing channels property: "+s);if(!("labels"in i[s]))throw new Error("missing channel labels property: "+s);if(i[s].labels.length!==i[s].channels)throw new Error("channel and label counts mismatch: "+s);const{channels:e,labels:t}=i[s];delete i[s].channels,delete i[s].labels,Object.defineProperty(i[s],"channels",{value:e}),Object.defineProperty(i[s],"labels",{value:t})}i.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),i=Math.max(t,n,r),s=i-o;let a,l;i===o?a=0:t===i?a=(n-r)/s:n===i?a=2+(r-t)/s:r===i&&(a=4+(t-n)/s),a=Math.min(60*a,360),a<0&&(a+=360);const h=(o+i)/2;return l=i===o?0:h<=.5?s/(i+o):s/(2-i-o),[a,100*l,100*h]},i.rgb.hsv=function(e){let t,n,r,o,i;const s=e[0]/255,a=e[1]/255,l=e[2]/255,h=Math.max(s,a,l),u=h-Math.min(s,a,l),c=function(e){return(h-e)/6/u+.5};return 0===u?(o=0,i=0):(i=u/h,t=c(s),n=c(a),r=c(l),s===h?o=r-n:a===h?o=1/3+t-r:l===h&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*i,100*h]},i.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=i.rgb.hsl(e)[0],s=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,100*s,100*r]},i.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r);return[100*((1-t-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*o]},i.rgb.keyword=function(e){const t=o[e];if(t)return t;let n,i=1/0;for(const o of Object.keys(r)){const t=r[o],l=(a=t,((s=e)[0]-a[0])**2+(s[1]-a[1])**2+(s[2]-a[2])**2);l<i&&(i=l,n=o)}var s,a;return n},i.keyword.rgb=function(e){return r[e]},i.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},i.rgb.lab=function(e){const t=i.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;return[116*r-16,500*(n-r),200*(r-o)]},i.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,i,s;if(0===n)return s=255*r,[s,s,s];o=r<.5?r*(1+n):r+n-r*n;const a=2*r-o,l=[0,0,0];for(let h=0;h<3;h++)i=t+1/3*-(h-1),i<0&&i++,i>1&&i--,s=6*i<1?a+6*(o-a)*i:2*i<1?o:3*i<2?a+(o-a)*(2/3-i)*6:a,l[h]=255*s;return l},i.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const i=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=i<=1?i:2-i;return[t,100*(0===r?2*o/(i+o):2*n/(r+n)),100*((r+n)/2)]},i.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,i=t-Math.floor(t),s=255*r*(1-n),a=255*r*(1-n*i),l=255*r*(1-n*(1-i));switch(r*=255,o){case 0:return[r,l,s];case 1:return[a,r,s];case 2:return[s,r,l];case 3:return[s,a,r];case 4:return[l,s,r];case 5:return[r,s,a]}},i.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let i,s;s=(2-n)*r;const a=(2-n)*o;return i=n*o,i/=a<=1?a:2-a,i=i||0,s/=2,[t,100*i,100*s]},i.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let i;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),a=1-r;i=6*t-s,0!==(1&s)&&(i=1-i);const l=n+i*(a-n);let h,u,c;switch(s){default:case 6:case 0:h=a,u=l,c=n;break;case 1:h=l,u=a,c=n;break;case 2:h=n,u=a,c=l;break;case 3:h=n,u=l,c=a;break;case 4:h=l,u=n,c=a;break;case 5:h=a,u=n,c=l}return[255*h,255*u,255*c]},i.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o))]},i.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,i,s;return o=3.2406*t+-1.5372*n+-.4986*r,i=-.9689*t+1.8758*n+.0415*r,s=.0557*t+-.204*n+1.057*r,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),s=Math.min(Math.max(0,s),1),[255*o,255*i,255*s]},i.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(t-n),200*(n-r)]},i.lab.xyz=function(e){let t,n,r;n=(e[0]+16)/116,t=e[1]/500+n,r=n-e[2]/200;const o=n**3,i=t**3,s=r**3;return n=o>.008856?o:(n-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,r=s>.008856?s:(r-16/116)/7.787,t*=95.047,n*=100,r*=108.883,[t,n,r]},i.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=360*Math.atan2(r,n)/2/Math.PI,o<0&&(o+=360);return[t,Math.sqrt(n*n+r*r),o]},i.lch.lab=function(e){const t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},i.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let s=null===t?i.rgb.hsv(e)[2]:t;if(s=Math.round(s/50),0===s)return 30;let a=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===s&&(a+=60),a},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];if(t===n&&n===r)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},i.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},i.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},i.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];3===t[0].length&&(n=n.split("").map((e=>e+e)).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},i.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),i=Math.min(Math.min(t,n),r),s=o-i;let a,l;return a=s<1?i/(1-s):0,l=s<=0?0:o===t?(n-r)/s%6:o===n?2+(r-t)/s:4+(t-n)/s,l/=6,l%=1,[360*l,100*s,100*a]},i.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],100*r,100*o]},i.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},i.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];const o=[0,0,0],i=t%1*6,s=i%1,a=1-s;let l=0;switch(Math.floor(i)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=a,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=a,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=a}return l=(1-n)*r,[255*(n*o[0]+l),255*(n*o[1]+l),255*(n*o[2]+l)]},i.hcg.hsv=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);let r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},i.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},i.hcg.hwb=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},i.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=function(e){return[0,0,e[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},978:function(e,t,n){const r=n(2956),o=n(7774),i={};Object.keys(r).forEach((e=>{i[e]={},Object.defineProperty(i[e],"channels",{value:r[e].channels}),Object.defineProperty(i[e],"labels",{value:r[e].labels});const t=o(e);Object.keys(t).forEach((n=>{const r=t[n];i[e][n]=function(e){const t=function(...t){const n=t[0];if(void 0===n||null===n)return n;n.length>1&&(t=n);const r=e(t);if("object"===typeof r)for(let e=r.length,o=0;o<e;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(r),i[e][n].raw=function(e){const t=function(...t){const n=t[0];return void 0===n||null===n?n:(n.length>1&&(t=n),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))})),e.exports=i},7774:function(e,t,n){const r=n(2956);function o(e){const t=function(){const e={},t=Object.keys(r);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;){const e=n.pop(),o=Object.keys(r[e]);for(let r=o.length,i=0;i<r;i++){const r=o[i],s=t[r];-1===s.distance&&(s.distance=t[e].distance+1,s.parent=e,n.unshift(r))}}return t}function i(e,t){return function(n){return t(e(n))}}function s(e,t){const n=[t[e].parent,e];let o=r[t[e].parent][e],s=t[e].parent;for(;t[s].parent;)n.unshift(t[s].parent),o=i(r[t[s].parent][s],o),s=t[s].parent;return o.conversion=n,o}e.exports=function(e){const t=o(e),n={},r=Object.keys(t);for(let o=r.length,i=0;i<o;i++){const e=r[i];null!==t[e].parent&&(n[e]=s(e,t))}return n}},8900:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},6851:function(e,t,n){"use strict";var r=n(9594),o=Array.prototype.concat,i=Array.prototype.slice,s=e.exports=function(e){for(var t=[],n=0,s=e.length;n<s;n++){var a=e[n];r(a)?t=o.call(t,i.call(a)):t.push(a)}return t};s.wrap=function(e){return function(){return e(s(arguments))}}},9594:function(e){e.exports=function(e){return!(!e||"string"===typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},9775:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function r(e,t){for(let n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function o(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return c})),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};const i=e=>e[Math.floor(Math.random()*e.length)];function s(e,t){return null==e&&(e=0),null==t&&(t=1),e+Math.random()*(t-e)}function a(e,t){return null==e&&(e=0),null==t&&(t=1),Math.floor(e+Math.random()*(t-e+1))}const l=e=>document.querySelector(e),h=e=>"number"==typeof e?"#"+("00000"+e.toString(16)).slice(-6):e,u=(e,t=1)=>{const n=h(e),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),o=r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null;return"rgba("+o.r+","+o.g+","+o.b+","+t+")"},c=e=>.299*e.r+.587*e.g+.114*e.b},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0);const o="object"==typeof window;let i=o&&window.THREE||{};o&&!window.VANTA&&(window.VANTA={});const s=o&&window.VANTA||{};s.register=(e,t)=>s[e]=e=>new t(e),s.version="0.5.21";const a=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};s.VantaBase=class{constructor(e={}){if(!o)return!1;s.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object(r.c)({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||"string"==typeof e)&&(e={el:e}),Object(r.c)(this.options,e),this.options.THREE&&(i=this.options.THREE),this.el=this.options.el,null==this.el)a('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const e=this.el;if(this.el=Object(r.f)(e),!this.el)return void a("Cannot find element",e)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(e){return a("Init error",e),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(r.a)(this.options.backgroundColor)))}this.initMouse(),this.resize(),this.animationLoop();const n=window.addEventListener;n("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(n("scroll",this.windowMouseMoveWrapper),n("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(n("touchstart",this.windowTouchWrapper),n("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&n("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object(r.c)(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const t=this.el.childNodes[e];if(t.nodeType===Node.TEXT_NODE){const e=document.createElement("span");e.textContent=t.textContent,t.parentElement.insertBefore(e,t),t.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],"static"===getComputedStyle(t).position&&(t.style.position="relative"),"auto"===getComputedStyle(t).zIndex&&(t.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object(r.c)(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(r.c)(e.style,t),e.classList.add("vanta-canvas")}initThree(){i.WebGLRenderer?(this.renderer=new i.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new i.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const n=e.clientX-t.left,r=e.clientY-t.top;n>=0&&r>=0&&n<=t.width&&r<=t.height&&(this.mouseX=n,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(n,r))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(1===e.touches.length){const n=e.touches[0].clientX-t.left,r=e.touches[0].clientY-t.top;n>=0&&r>=0&&n<=t.width&&r<=t.height&&(this.mouseX=n,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(n,r))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const n=Math.round(2*e.alpha)-t.left,r=Math.round(2*e.beta)-t.top;n>=0&&r>=0&&n<=t.width&&r<=t.height&&(this.mouseX=n,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(n,r))}triggerMouseMove(e,t){void 0===e&&void 0===t&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const n=e/this.width,r=t/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(n,r)}setSize(){this.scale||(this.scale=1),Object(r.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=t.top+n;return r-window.innerHeight<=n&&n<=r+e}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),s.current===this&&(s.current=null)}},t.b=s.VantaBase},function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(1),o=n(0);n.d(t,"a",(function(){return r.a}));let i="object"==typeof window&&window.THREE;class s extends r.b{constructor(e){(i=e.THREE||i).Color.prototype.toVector=function(){return new i.Vector3(this.r,this.g,this.b)},super(e),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new i.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new i.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(e){super.setOptions(e),this.updateUniforms()}initBasicShader(e=this.fragmentShader,t=this.vertexShader){t||(t="uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"),this.updateUniforms(),"function"==typeof this.valuesChanger&&this.valuesChanger();const n=new i.ShaderMaterial({uniforms:this.uniforms,vertexShader:t,fragmentShader:e}),r=this.options.texturePath;r&&(this.uniforms.iTex={type:"t",value:(new i.TextureLoader).load(r)});const o=new i.Mesh(new i.PlaneGeometry(2,2),n);this.scene.add(o),this.camera=new i.Camera,this.camera.position.z=1}updateUniforms(){const e={};let t,n;for(t in this.options)n=this.options[t],-1!==t.toLowerCase().indexOf("color")?e[t]={type:"v3",value:new i.Color(n).toVector()}:"number"==typeof n&&(e[t]={type:"f",value:n});return Object(o.c)(this.uniforms,e)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}},,,function(e,t,n){"use strict";n.r(t);var r=n(2);class o extends r.b{}t.default=r.a.register("CELLS",o),o.prototype.defaultOptions={color1:35980,color2:15918901,backgroundColor:14155663,amplitudeFactor:1,ringFactor:1,rotationFactor:1,size:1.5,speed:1,scaleMobile:3},o.prototype.fragmentShader="uniform vec2 iResolution;\nuniform vec2 iMouse;\nuniform float iTime;\n\nuniform float blurFactor;\nuniform vec3 color1;\nuniform vec3 color2;\nuniform vec3 backgroundColor;\nuniform float size;\nuniform float amplitudeFactor;\nuniform float ringFactor;\nuniform float rotationFactor;\n\nfloat length2(vec2 p) { return dot(p, p); }\n\nfloat noise(vec2 p){\n    return fract(sin(fract(sin(p.x) * (43.13311)) + p.y) * 31.0011);\n}\n\nfloat worley(vec2 p) {\n    float d = 1e30;\n    for (int xo = -1; xo <= 1; ++xo) {\n        for (int yo = -1; yo <= 1; ++yo) {\n            vec2 tp = floor(p) + vec2(xo, yo);\n            d = min(d, length2(p - tp - vec2(noise(tp))));\n        }\n    }\n    vec2 uv = gl_FragCoord.xy / iResolution.xy;\n    float timeOffset =  0.15 * sin(iTime * 2.0 + 10.0*(uv.x - uv.y));\n    return 3.0*exp(-4.0*abs(2.0*d - 1.0 + timeOffset));\n}\n\nfloat fworley(vec2 p) {\n    return sqrt(sqrt(sqrt(\n    1.1 * // light\n    worley(p*5. + .3 + iTime*.0525) *\n    sqrt(worley(p * 50. / size + 0.3 + iTime * -0.15)) *\n    sqrt(sqrt(worley(p * -10. + 9.3))))));\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / iResolution.xy;\n    float t = fworley(uv * iResolution.xy / 1500.0);\n    t *= exp(-length2(abs(0.7*uv - 1.0)));\n\n    float tExp = pow(t, 0.5 - t);\n    vec3 c1 = color1 * (1.0 - t);\n    vec3 c2 = color2 * tExp;\n\n    gl_FragColor = vec4(pow(t, 1.0 - t) * (c1 + c2), 1.0);\n}\n"}])}}]);