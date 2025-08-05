System.register("chunks:///main.js",["./rollupPluginModLoBabelHelpers-e12841ce.js","cc"],(function(){var e,t,n,i,r,o,a,s,c,h,l,u,f,p,d,g,R,m,v;return{setters:[function(r){e=r._,t=r.a,n=r.c,i=r.d},function(e){r=e.cclegacy,o=e._decorator,a=e.Node,s=e.Prefab,c=e.UITransform,h=e.rect,l=e.input,u=e.Input,f=e.KeyCode,p=e.instantiate,d=e.Sprite,g=e.math,R=e.color,m=e.size,v=e.Component}],execute:function(){var b,y,x,z,w,C,S,B,F;r._RF.push({},"c9ca0/JB9FMuJES83xoOeSY","MaxRectDemo",void 0);var I=o.ccclass,P=o.property;b=I("MaxRectDemo"),y=P(a),x=P(a),z=P(s),b((S=e((C=function(e){function r(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(t,"container",S,i(t)),n(t,"isFullHint",B,i(t)),n(t,"boxPrefab",F,i(t)),t.size=m(),t.freeRects=new Array,t}t(r,e);var o=r.prototype;return o.onLoad=function(){var e=this,t=this.node.getComponent(c).contentSize;this.size.set(t.width,t.height),this.freeRects.push(h(0,0,t.width,t.height));var n=!1;l.on(u.EventType.KEY_DOWN,(function(t){t.keyCode!==f.SPACE||n||(n=!e.addBox(e.getRandomBoxNode()),e.isFullHint.active=n),t.keyCode===f.KEY_R&&(n=!1,e.isFullHint.active=!1,e.freeRects.length=0,e.freeRects.push(h(0,0,e.size.width,e.size.height)),e.container.destroyAllChildren())}))},o.addBox=function(e,t){void 0===t&&(t=!0);var n=e.getComponent(c).contentSize,i=n.width,r=n.height,o=this.getBestRectIndex(i,r);if(-1===o)return t?(console.log("Trying to repack..."),e.setParent(this.container),!this.repack()):(console.log("No space for new box!"),!1);var a=this.freeRects[o];return e.setPosition(a.x,a.y),e.setParent(this.container),this.freeRects.splice(o,1),this.splitFreeRect(a,i,r),!0},o.repack=function(){var e=this.container.children.slice();for(this.freeRects.length=0,this.freeRects.push(h(0,0,this.size.width,this.size.height)),this.container.removeAllChildren(),e.sort((function(e,t){var n=e.getComponent(c).contentSize,i=t.getComponent(c).contentSize;return n.height-i.height}));e.length>0;){var t=e.pop();if(!this.addBox(t,!1)){e.push(t);break}}var n=e.length>0;return n&&e.forEach((function(e){return e.destroy()})),n},o.splitFreeRect=function(e,t,n){var i=h(e.x,e.y+n,e.width,e.height-n),r=h(e.x+t,e.y,e.width-t,n);this.freeRects.push(i),this.freeRects.push(r)},o.getBestRectIndex=function(e,t){for(var n=-1,i=Number.MAX_VALUE,r=0,o=this.freeRects.length;r<o;++r){var a=this.freeRects[r];if(!(a.height<t||a.width<e)){var s=a.height-t;s<i&&(i=s,n=r)}}return n},o.getRandomBoxNode=function(){var e=p(this.boxPrefab),t=e.getComponent(c),n=e.children[0].getComponent(d),i=g.randomRangeInt(50,200),r=g.randomRangeInt(50,200);return t.setContentSize(i,r),n.color=R(g.randomRangeInt(0,255),g.randomRangeInt(0,255),g.randomRangeInt(0,255)),e},r}(v)).prototype,"container",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(C.prototype,"isFullHint",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(C.prototype,"boxPrefab",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=C));r._RF.pop()}}}));

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