System.register("chunks:///main.js",["cc"],(function(){"use strict";var t,r,e,n,o,s,i,a;return{setters:[function(h){t=h.cclegacy,r=h._decorator,e=h.MeshRenderer,n=h.v3,o=h.utils,s=h.Component,i=h.dynamicAtlasManager,a=h.find}],execute:function(){t._RF.push({},"04af6r6TtFF8KtOjjmZz7bQ","Perlin",void 0);var h=function(){function t(t,r,e){this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=r,this.z=e}var r=t.prototype;return r.dot2=function(t,r){return this.x*t+this.y*r},r.dot3=function(t,r,e){return this.x*t+this.y*r+this.z*e},t}(),u=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],p=[new h(1,1,0),new h(-1,1,0),new h(1,-1,0),new h(-1,-1,0),new h(1,0,1),new h(-1,0,1),new h(1,0,-1),new h(-1,0,-1),new h(0,1,1),new h(0,-1,1),new h(0,1,-1),new h(0,-1,-1)];function c(t){return t*t*t*(t*(6*t-15)+10)}function l(t,r,e){return(1-e)*t+e*r}var d,f=function(){function t(t){void 0===t&&(t=0),this.perm=new Array(512),this.gradP=new Array(512),this.F2=.5*(Math.sqrt(3)-1),this.G2=(3-Math.sqrt(3))/6,this.F3=1/3,this.G3=1/6,t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var r=this.perm,e=this.gradP,n=0,o=0;o<256;++o)n=1&o?u[o]^255&t:u[o]^t>>8&255,r[o]=r[o+256]=n,e[o]=e[o+256]=p[n%12]}var r=t.prototype;return r.simplex2=function(t,r){var e,n,o=Math.floor,s=this.F2,i=this.G2,a=this.perm,h=this.gradP,u=(t+r)*s,p=o(t+u),c=o(r+u),l=(p+c)*i,d=t-p+l,f=r-c+l;d>f?(e=1,n=0):(e=0,n=1);var y=d-e+i,v=f-n+i,m=d-1+2*i,M=f-1+2*i,w=h[(p&=255)+a[c&=255]],x=h[p+e+a[c+n]],P=h[p+1+a[c+1]],g=.5-d*d-f*f,z=.5-y*y-v*v,F=.5-m*m-M*M;return 70*((g<0?0:(g*=g)*g*w.dot2(d,f))+(z<0?0:(z*=z)*z*x.dot2(y,v))+(F<0?0:(F*=F)*F*P.dot2(m,M)))},r.simplex3=function(t,r,e){var n,o,s,i,a,h,u=Math.floor,p=this.F3,c=this.G3,l=this.perm,d=this.gradP,f=(t+r+e)*p,y=u(t+f),v=u(r+f),m=u(e+f),M=(y+v+m)*c,w=t-y+M,x=r-v+M,P=e-m+M;w>=x?x>=P?(n=1,o=0,s=0,i=1,a=1,h=0):w>=P?(n=1,o=0,s=0,i=1,a=0,h=1):(n=0,o=0,s=1,i=1,a=0,h=1):x<P?(n=0,o=0,s=1,i=0,a=1,h=1):w<P?(n=0,o=1,s=0,i=0,a=1,h=1):(n=0,o=1,s=0,i=1,a=1,h=0);var g=w-n+c,z=x-o+c,F=P-s+c,_=w-i+2*c,R=x-a+2*c,S=P-h+2*c,b=w-1+3*c,A=x-1+3*c,j=P-1+3*c,O=d[(y&=255)+l[(v&=255)+l[m&=255]]],C=d[y+n+l[v+o+l[m+s]]],G=d[y+i+l[v+a+l[m+h]]],I=d[y+1+l[v+1+l[m+1]]],N=.6-w*w-x*x-P*P,k=.6-g*g-z*z-F*F,U=.6-_*_-R*R-S*S,T=.6-b*b-A*A-j*j;return 32*((N<0?0:(N*=N)*N*O.dot3(w,x,P))+(k<0?0:(k*=k)*k*C.dot3(g,z,F))+(U<0?0:(U*=U)*U*G.dot3(_,R,S))+(T<0?0:(T*=T)*T*I.dot3(b,A,j)))},r.perlin2=function(t,r){var e=Math.floor,n=this.perm,o=this.gradP,s=e(t),i=e(r);t-=s,r-=i;var a=o[(s&=255)+n[i&=255]].dot2(t,r),h=o[s+n[i+1]].dot2(t,r-1),u=o[s+1+n[i]].dot2(t-1,r),p=o[s+1+n[i+1]].dot2(t-1,r-1),d=c(t);return l(l(a,u,d),l(h,p,d),c(r))},r.perlin3=function(t,r,e){var n=Math.floor,o=this.perm,s=this.gradP,i=n(t),a=n(r),h=n(e);t-=i,r-=a,e-=h;var u=s[(i&=255)+o[(a&=255)+o[h&=255]]].dot3(t,r,e),p=s[i+o[a+o[h+1]]].dot3(t,r,e-1),d=s[i+o[a+1+o[h]]].dot3(t,r-1,e),f=s[i+o[a+1+o[h+1]]].dot3(t,r-1,e-1),y=s[i+1+o[a+o[h]]].dot3(t-1,r,e),v=s[i+1+o[a+o[h+1]]].dot3(t-1,r,e-1),m=s[i+1+o[a+1+o[h]]].dot3(t-1,r-1,e),M=s[i+1+o[a+1+o[h+1]]].dot3(t-1,r-1,e-1),w=c(t),x=c(r),P=c(e);return l(l(l(u,y,w),l(p,v,w),P),l(l(d,m,w),l(f,M,w),P),x)},t}();function y(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,v(t,r)}function v(t,r){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t})(t,r)}t._RF.pop(),t._RF.push({},"e9640noPRhPNZoBkhIl7FkP","TerrainMesh",void 0);var m,M=r.ccclass,w=(r.property,M("TerrainMesh")(d=function(t){function r(){for(var r,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(r=t.call.apply(t,[this].concat(n))||this).halfN=100,r}y(r,t);var s=r.prototype;return s.start=function(){this.resetMesh()},s.resetMesh=function(){var t,r=this.createMesh(this.halfN),n=this.node.getComponent(e);null==(t=n.mesh)||t.destroy(),n.mesh=r},s.createMesh=function(t){for(var r=new Array,e=new Array,s=new Array,i=1/255,a=n(159,119,75).multiplyScalar(i),h=n(194,176,152).multiplyScalar(i),u=n(124,146,76).multiplyScalar(i),p=n(159,119,75).multiplyScalar(i),c=n(136,132,130).multiplyScalar(i),l=n(251,251,251).multiplyScalar(i),d=function(t,r,e){var n=1-Math.pow(1-e,1.7);r<=-2.8?t.push(a.x*n,a.y*n,a.z*n,1):r<=2.4?t.push(h.x*n,h.y*n,h.z*n,1):r<=12.4?t.push(u.x*n,u.y*n,u.z*n,1):r<=15.2?t.push(p.x*n,p.y*n,p.z*n,1):r<=17.4?t.push(c.x*n,c.y*n,c.z*n,1):t.push(l.x*n,l.y*n,l.z*n,1)},y=new f(Math.random()),v=1+2*Math.random(),m=-1e8,M=1e8,w=-t;w<=t;++w)for(var x=-t;x<=t;++x){var P=.01*x,g=.01*w,z=(7.4*y.simplex2(P,g)+1.6*y.simplex2(4*P,4*g)+.8*y.simplex2(16*P,16*g)+10)/20,F=Math.pow(z,1.2)*v*18-15;r.push(x,F,w),d(e,F,z),F>m&&(m=F),F<M&&(M=F)}for(var _=2*t+1,R=_+1,S=r.length/3-_-2,b=0,A=0,j=0,O=0,C=0,G=0,I=0,N=0,k=0;R<=S;){for(var U=0,T=_-2;U<T;U+=2)j=(A=(b=R+U)-_)-1,I=(G=(C=(O=b-1)+_)+1)+1,N=b+1,k=A+1,s.push(b,A,j),s.push(b,j,O),s.push(b,O,C),s.push(b,C,G),s.push(b,G,I),s.push(b,I,N),s.push(b,N,k),s.push(b,k,A);R+=2*_}var q={positions:r,colors:e,indices:s,maxPos:{x:t,y:m,z:t},minPos:{x:-t,y:M,z:-t}};return o.MeshUtils.createMesh(q)},r}(s))||d);t._RF.pop(),t._RF.push({},"e24f2U19EdKNIbJNzG+1iV3","UI",void 0),i.enabled=!1;var x=r.ccclass;r.property,x("UI")(m=function(t){function r(){return t.apply(this,arguments)||this}return y(r,t),r.prototype.onResetBtnClicked=function(){a("Scene").getComponentInChildren(w).resetMesh()},r}(s));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});