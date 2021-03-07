(this["webpackJsonpfront-app"]=this["webpackJsonpfront-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(18),a=n.n(c),o=(n(26),n(10)),s=n(2),l=n(7),h=n(11),u=n(13),j=n(12),d=n(21),O=function e(){var t=this;Object(l.a)(this,e),this._resHandler=function(e){if(e.ok)return e.json();throw new Error(e)},this.upload=function(e,n){var r,i=new FormData,c=Object(d.a)(e);try{for(c.s();!(r=c.n()).done;){var a=r.value;i.append(a.name,a)}}catch(o){c.e(o)}finally{c.f()}fetch(t.API_BLOB_URL+"upload",{method:"POST",cache:"no-cache",body:i}).then(t._resHandler).then(n).catch((function(e){return console.log(e),e}))},this.refreshList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};fetch(t.API_BLOB_URL+"list").then(t._resHandler).then(e).catch((function(e){return console.log(e),e}))},this.download_link=function(e){return t.API_BLOB_URL+"list/"+e},this.API_BLOB_URL="api/blob/"},b=n(1),_=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).refreshBlobList=function(){return e.service.refreshList((function(t){return e.setState({list:t})}))},e.state={list:[]},e.service=new O,e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.refreshBlobList()}},{key:"render",value:function(){var e=this,t=this.state.list;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"l-col",children:[Object(b.jsx)("h4",{children:"Upload file"}),Object(b.jsx)(p,{service:this.service,refresh:this.refreshBlobList})]}),Object(b.jsxs)("div",{className:"r-col",children:[Object(b.jsx)("button",{onClick:this.refreshBlobList,children:"Update list"}),Object(b.jsx)("h4",{children:"Download files"}),Object(b.jsx)("ul",{children:t.map((function(t){var n=t.name,r=t.size;return Object(b.jsx)(f,{download_link:e.service.download_link,download:e.downloadFile,name:n,size:r},n+r)}))})]})]})}}]),n}(r.Component);function f(e){e.download;var t=e.download_link,n=e.name;e.size;return Object(b.jsxs)("li",{className:"ul-item",children:[Object(b.jsx)("p",{children:n}),Object(b.jsx)("a",{href:t(n),children:"get me"})]})}var v=Object(r.createRef)();function p(e){var t=e.service,n=e.refresh;return Object(b.jsx)("input",{type:"file",multiple:!0,onChange:function(e){t.upload(e.target.files,n),v.current.value=""},ref:v})}var E=n(19),R=function e(){var t=this;Object(l.a)(this,e),this._resHandler=function(e){if(e.ok)return e.json();throw new Error(e)},this.getWeatherForCity=function(e,n){fetch("".concat(t.API_WEATHER_URL,"?long=").concat(e,"&lat=").concat(n)).then(t._resHandler).catch((function(e){return console.log(e),e}))},this.API_WEATHER_URL="api/weather"},x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={long:"0",lat:"0"},r.getOnClick=function(){return navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,i=void 0===n?0:n,c=t.longitude,a=void 0===c?0:c;return r.setState({lat:i,long:a})}))},r.handleCityName=function(e,t){var n=e.target.value;return r.setState(Object(E.a)({},t,n))},r.runWeatherChart=function(){return r.service.getWeatherForCity(r.state.long,r.state.lat)},r.service=new R,r}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"button",value:"Use my location",onClick:this.getOnClick}),Object(b.jsx)("input",{type:"number",value:this.state.long,onChange:function(t){return e.handleCityName(t,"long")},placeholder:"longitude"}),Object(b.jsx)("input",{type:"number",value:this.state.lat,onChange:function(t){return e.handleCityName(t,"lat")},placeholder:"latitude"}),Object(b.jsx)("input",{value:"submit",type:"button",onClick:this.runWeatherChart})]})}}]),n}(r.Component),C=(n(28),function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(P,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DEV_SERVER_URL:""}).REACT_APP_FRONT_APP_URL+"/files",children:Object(b.jsx)(_,{})}),Object(b.jsx)(s.a,{path:Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DEV_SERVER_URL:""}).REACT_APP_FRONT_APP_URL+"/weather",children:Object(b.jsx)(x,{})}),Object(b.jsx)(s.a,{path:Object({NODE_ENV:"production",PUBLIC_URL:"/azure-flask-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DEV_SERVER_URL:""}).REACT_APP_FRONT_APP_URL,children:Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)(x,{})]})})]})]})})}),P=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/files",children:"FileManager"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/weather",children:"Weather"})})]})})})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d0ea7183.chunk.js.map