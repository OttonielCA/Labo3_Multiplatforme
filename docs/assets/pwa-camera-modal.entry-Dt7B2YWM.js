import{Y as m,$ as x,a0 as p}from"./index-CaSZrf7K.js";var d=function(c,i,t,u){function r(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(a){try{n(u.next(a))}catch(s){o(s)}}function h(a){try{n(u.throw(a))}catch(s){o(s)}}function n(a){a.done?e(a.value):r(a.value).then(f,h)}n((u=u.apply(c,i||[])).next())})},l=function(c,i){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,r,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(n){return function(a){return h([n,a])}}function h(n){if(u)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(t=0)),t;)try{if(u=1,r&&(e=n[0]&2?r.return:n[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,n[1])).done)return e;switch(r=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,r=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=i.call(c,t)}catch(a){n=[6,a],r=0}finally{u=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},b=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}",y=function(){function c(i){x(this,i),this.onPhoto=p(this,"onPhoto"),this.noDeviceError=p(this,"noDeviceError"),this.facingMode="user",this.hidePicker=!1}return c.prototype.present=function(){return d(this,void 0,void 0,function(){var i,t=this;return l(this,function(u){return i=document.createElement("pwa-camera-modal-instance"),i.facingMode=this.facingMode,i.hidePicker=this.hidePicker,i.addEventListener("onPhoto",function(r){return d(t,void 0,void 0,function(){var e;return l(this,function(o){return this._modal?(e=r.detail,this.onPhoto.emit(e),[2]):[2]})})}),i.addEventListener("noDeviceError",function(r){return d(t,void 0,void 0,function(){return l(this,function(e){return this.noDeviceError.emit(r),[2]})})}),document.body.append(i),this._modal=i,[2]})})},c.prototype.dismiss=function(){return d(this,void 0,void 0,function(){return l(this,function(i){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]})})},c.prototype.render=function(){return m("div",null)},c}();y.style=b;export{y as pwa_camera_modal};
