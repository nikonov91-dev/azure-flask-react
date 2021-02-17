(this["webpackJsonpfront-app"]=this["webpackJsonpfront-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),c=n.n(i),a=n(19),o=n.n(a),s=(n(28),n(10)),l=n(2),h=n(7),u=n(11),d=n(13),j=n(12),O=n(22),b=function e(){var t=this;Object(h.a)(this,e),this._resHandler=function(e){if(e.ok)return e.json();throw new Error(e)},this.upload=function(e,n){var r,i=new FormData,c=Object(O.a)(e);try{for(c.s();!(r=c.n()).done;){var a=r.value;i.append(a.name,a)}}catch(o){c.e(o)}finally{c.f()}fetch(t.API_BLOB_URL+"upload",{method:"POST",cache:"no-cache",body:i}).then(t._resHandler).then(n).catch((function(e){return console.log(e),e}))},this.refreshList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};fetch(t.API_BLOB_URL+"list").then(t._resHandler).then(e).catch((function(e){return console.log(e),e}))},this.download_link=function(e){return t.API_BLOB_URL+"list/"+e};var n=Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_DEV_SERVER_URL?Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_DEV_SERVER_URL:"127.0.0.5000/";this.API_BLOB_URL=n+"api/blob/"},_=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).refreshBlobList=function(){return e.service.refreshList((function(t){return e.setState({list:t})}))},e.state={list:[]},e.service=new b,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.refreshBlobList()}},{key:"render",value:function(){var e=this,t=this.state.list;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"l-col",children:[Object(r.jsx)("h4",{children:"Upload file"}),Object(r.jsx)(E,{service:this.service,refresh:this.refreshBlobList})]}),Object(r.jsxs)("div",{className:"r-col",children:[Object(r.jsx)("button",{onClick:this.refreshBlobList,children:"Update list"}),Object(r.jsx)("h4",{children:"Download files"}),Object(r.jsx)("ul",{children:t.map((function(t){var n=t.name,i=t.size;return Object(r.jsx)(f,{download_link:e.service.download_link,download:e.downloadFile,name:n,size:i},n+i)}))})]})]})}}]),n}(i.Component);function f(e){e.download;var t=e.download_link,n=e.name;e.size;return Object(r.jsxs)("li",{className:"ul-item",children:[Object(r.jsx)("p",{children:n}),Object(r.jsx)("a",{href:t(n),children:"get me"})]})}var v=Object(i.createRef)();function E(e){var t=e.service,n=e.refresh;return Object(r.jsx)("input",{type:"file",multiple:!0,onChange:function(e){t.upload(e.target.files,n),v.current.value=""},ref:v})}var p=n(20),S=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://127.0.0.1:5000/api/";Object(h.a)(this,e),this._resHandler=function(e){if(e.ok)return e.json();throw new Error(e)},this.getWeatherForCity=function(e,n){fetch("".concat(t.API_WEATHER_URL,"?long=").concat(e,"&lat=").concat(n)).then(t._resHandler).catch((function(e){return console.log(e),e}))},this.API_WEATHER_URL=n+"weather"},x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={long:"0",lat:"0"},r.getOnClick=function(){return navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,i=void 0===n?0:n,c=t.longitude,a=void 0===c?0:c;return r.setState({lat:i,long:a})}))},r.handleCityName=function(e,t){var n=e.target.value;return r.setState(Object(p.a)({},t,n))},r.runWeatherChart=function(){return r.service.getWeatherForCity(r.state.long,r.state.lat)},r.service=new S,r}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"button",value:"Use my location",onClick:this.getOnClick}),Object(r.jsx)("input",{type:"number",value:this.state.long,onChange:function(t){return e.handleCityName(t,"long")},placeholder:"longitude"}),Object(r.jsx)("input",{type:"number",value:this.state.lat,onChange:function(t){return e.handleCityName(t,"lat")},placeholder:"latitude"}),Object(r.jsx)("input",{value:"submit",type:"button",onClick:this.runWeatherChart})]})}}]),n}(i.Component),R=(n(29),function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_DEV_FRONT_APP_URL?Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_DEV_FRONT_APP_URL:"nikonov91-dev.github.io/azure-flask-react/";return Object(r.jsx)("div",{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(C,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:e+"/files",children:Object(r.jsx)(_,{})}),Object(r.jsx)(l.a,{path:e+"/weather",children:Object(r.jsx)(x,{})}),Object(r.jsx)(l.a,{path:e,children:Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{}),Object(r.jsx)(x,{})]})})]})]})})}),C=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/files",children:"FileManager"})}),Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:"/weather",children:"Weather"})})]})})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f45f6ba7.chunk.js.map