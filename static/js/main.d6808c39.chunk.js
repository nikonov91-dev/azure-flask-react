(this["webpackJsonpfront-app"]=this["webpackJsonpfront-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(18),a=n.n(c),o=(n(26),n(10)),s=n(2),l=n(7),h=n(11),u=n(13),j=n(12),d=n(21),b=function e(){var t=this;Object(l.a)(this,e),this._resHandler=function(e){if(e.ok)return e.json();throw new Error(e)},this.upload=function(e,n){var r,i=new FormData,c=Object(d.a)(e);try{for(c.s();!(r=c.n()).done;){var a=r.value;i.append(a.name,a)}}catch(o){c.e(o)}finally{c.f()}fetch(t.API_BLOB_URL+"upload",{method:"POST",cache:"no-cache",body:i}).then(t._resHandler).then(n).catch((function(e){return console.log(e),e}))},this.refreshList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};fetch(t.API_BLOB_URL+"list").then(t._resHandler).then(e).catch((function(e){return console.log(e),e}))},this.download_link=function(e){return t.API_BLOB_URL+"list/"+e},this.API_BLOB_URL="https://first-py-app.azurewebsites.net/api/blob/"},f=n(1),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).refreshBlobList=function(){return e.service.refreshList((function(t){return e.setState({list:t})}))},e.state={list:[]},e.service=new b,e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.refreshBlobList()}},{key:"render",value:function(){var e=this,t=this.state.list;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"l-col",children:[Object(f.jsx)("h4",{children:"Upload file"}),Object(f.jsx)(x,{service:this.service,refresh:this.refreshBlobList})]}),Object(f.jsxs)("div",{className:"r-col",children:[Object(f.jsx)("button",{onClick:this.refreshBlobList,children:"Update list"}),Object(f.jsx)("h4",{children:"Download files"}),Object(f.jsx)("ul",{children:t.map((function(t){var n=t.name,r=t.size;return Object(f.jsx)(p,{download_link:e.service.download_link,download:e.downloadFile,name:n,size:r},n+r)}))})]})]})}}]),n}(r.Component);function p(e){e.download;var t=e.download_link,n=e.name;e.size;return Object(f.jsxs)("li",{className:"ul-item",children:[Object(f.jsx)("p",{children:n}),Object(f.jsx)("a",{href:t(n),children:"get me"})]})}var v=Object(r.createRef)();function x(e){var t=e.service,n=e.refresh;return Object(f.jsx)("input",{type:"file",multiple:!0,onChange:function(e){t.upload(e.target.files,n),v.current.value=""},ref:v})}var w=n(19),g=function e(){var t=this;Object(l.a)(this,e),this._resHandler=function(e){if(e.ok)return e.json();throw new Error(e)},this.getWeatherForCity=function(e,n){fetch("".concat(t.API_WEATHER_URL,"?long=").concat(e,"&lat=").concat(n)).then(t._resHandler).catch((function(e){return console.log(e),e}))},this.API_WEATHER_URL="https://first-py-app.azurewebsites.net/api/weather"},m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={long:"0",lat:"0"},r.getOnClick=function(){return navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,i=void 0===n?0:n,c=t.longitude,a=void 0===c?0:c;return r.setState({lat:i,long:a})}))},r.handleCityName=function(e,t){var n=e.target.value;return r.setState(Object(w.a)({},t,n))},r.runWeatherChart=function(){return r.service.getWeatherForCity(r.state.long,r.state.lat)},r.service=new g,r}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"button",value:"Use my location",onClick:this.getOnClick}),Object(f.jsx)("input",{type:"number",value:this.state.long,onChange:function(t){return e.handleCityName(t,"long")},placeholder:"longitude"}),Object(f.jsx)("input",{type:"number",value:this.state.lat,onChange:function(t){return e.handleCityName(t,"lat")},placeholder:"latitude"}),Object(f.jsx)("input",{value:"submit",type:"button",onClick:this.runWeatherChart})]})}}]),n}(r.Component),_=(n(28),function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(y,{}),Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{path:window.location.href+"/files",children:Object(f.jsx)(O,{})}),Object(f.jsx)(s.a,{path:window.location.href+"/weather",children:Object(f.jsx)(m,{})}),Object(f.jsx)(s.a,{path:window.location.href+"/",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{}),Object(f.jsx)(m,{})]})})]})]})})}),y=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:window.location.href+"/",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:window.location.href+"/files",children:"FileManager"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:window.location.href+"/weather",children:"Weather"})})]})})})};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d6808c39.chunk.js.map