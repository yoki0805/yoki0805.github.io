System.register("chunks:///_virtual/Demo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,n,t,s,l,r,o,a,h,c,u,d,p,f,y,v,b;return{setters:[function(e){i=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,s=e.assertThisInitialized,l=e.createForOfIteratorHelperLoose},function(e){r=e.cclegacy,o=e._decorator,a=e.Graphics,h=e.v2,c=e.Node,u=e.UITransform,d=e.Label,p=e.Layers,f=e.Color,y=e.CacheMode,v=e.Vec2,b=e.Component}],execute:function(){var C,T,E,w,x;r._RF.push({},"c4828BoKTpF9KCwfDKnG0Uv","Demo",void 0);var g=o.ccclass,D=o.property;e("Demo",(C=g("Demo"),T=D(a),C((x=i((w=function(e){function i(){for(var i,n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return i=e.call.apply(e,[this].concat(l))||this,t(i,"pen",x,s(i)),i.line1=new Array(2),i.line2=new Array(2),i.labels=new Array(5),i}n(i,e);var r=i.prototype;return r.onLoad=function(){this.line1[0]=h(-300,-60),this.line1[1]=h(300,60),this.line2[0]=h(80,-200),this.line2[1]=h(-80,200);for(var e=0;e<5;++e)this.labels[e]=(new c).addComponent(u).addComponent(d),this.labels[e].node.setParent(this.pen.node),this.labels[e].node.layer=p.Enum.UI_2D,this.labels[e].color=f.BLACK,this.labels[e].fontSize=24,this.labels[e].cacheMode=y.BITMAP,this.labels[e].useSystemFont=!0;this.labels[0].string="A",this.labels[1].string="B",this.labels[2].string="C",this.labels[3].string="D",this.labels[4].string="P"},r.start=function(){var e=this,i=null,n=function(e){i=null};this.pen.node.on(c.EventType.TOUCH_START,(function(n){var t=n.getUILocation();t.x-=640,t.y-=360;for(var s,r=l(e.line1);!(s=r()).done;){var o=s.value;if(v.squaredDistance(t,o)<=225)return void(i=o)}for(var a,h=l(e.line2);!(a=h()).done;){var c=a.value;if(v.squaredDistance(t,c)<=225)return void(i=c)}})),this.pen.node.on(c.EventType.TOUCH_MOVE,(function(e){if(null!==i){var n=e.getUILocation();n.x-=640,n.y-=360,i.set(n)}})),this.pen.node.on(c.EventType.TOUCH_END,n),this.pen.node.on(c.EventType.TOUCH_CANCEL,n)},r.update=function(e){this.pen.clear(),this.drawLine(this.line1,5,f.GREEN),this.drawLine(this.line2,5,f.WHITE),this.drawCircle(this.line1[0],15,f.GREEN),this.drawCircle(this.line1[1],15,f.GREEN),this.drawCircle(this.line2[0],15,f.WHITE),this.drawCircle(this.line2[1],15,f.WHITE);var i=this.getInterception(this.line1[0],this.line1[1],this.line2[0],this.line2[1]);null!==i&&this.drawCircle(i,15,f.RED),this.labels[0].node.setPosition(this.line1[0].x,this.line1[0].y),this.labels[1].node.setPosition(this.line1[1].x,this.line1[1].y),this.labels[2].node.setPosition(this.line2[0].x,this.line2[0].y),this.labels[3].node.setPosition(this.line2[1].x,this.line2[1].y),null!==i?this.labels[4].node.setPosition(i.x,i.y):this.labels[4].node.setPosition(-1e4,-1e4)},r.drawLine=function(e,i,n){var t=e[0],s=e[1],l=this.pen;l.strokeColor=n,l.lineWidth=i,l.moveTo(t.x,t.y),l.lineTo(s.x,s.y),l.stroke()},r.drawCircle=function(e,i,n){var t=this.pen;t.fillColor=n,t.circle(e.x,e.y,i),t.fill()},r.getInterception=function(e,i,n,t){var s=e.x,l=e.y,r=i.x,o=i.y,a=n.x,c=n.y,u=t.x,d=t.y,p=(s-a)*(o-c)-(l-c)*(r-a),f=(s-u)*(o-d)-(l-d)*(r-u);if(p*f>=0)return null;var y=(a-s)*(d-l)-(c-l)*(u-s);if(y*(y+p-f)>=0)return null;var v=y/(f-p);return h(s+(r-s)*v,l+(o-l)*v)},i}(b)).prototype,"pen",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=w))||E));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Demo.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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