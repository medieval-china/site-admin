(this["webpackJsonpmedieval-china-admin"]=this["webpackJsonpmedieval-china-admin"]||[]).push([[0],{82:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),c=n.n(r),s=(n(82),n(15)),o=n(61),u=n(143),l=n(137),h=n(136),d=n(138),j=n(131),v=n(139),f=n(62),p=n.n(f),m=n(94),b=n(134),g=n(135),O=n(142),y=n(140),x=n(42),w=n.n(x),D=n(5);function C(){return Object(D.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(D.jsx)(j.a,{color:"inherit",href:"http://medieval-china.github.io/",children:"Medieval-China"})," ",(new Date).getFullYear(),"."]})}function Y(e){return Object(D.jsx)(y.a,Object(o.a)({elevation:6,variant:"filled"},e))}var P=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function N(e){var t=P(),n=Object(a.useState)({open:!1,severity:"warning",message:""}),i=Object(s.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)(),j=Object(s.a)(o,2),f=j[0],b=j[1],y=Object(a.useState)(),x=Object(s.a)(y,2),N=x[0],S=x[1],k=function(){c({open:!1,severity:r.severity,message:""})};return Object(D.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(D.jsx)(h.a,{}),Object(D.jsxs)("div",{className:t.paper,children:[Object(D.jsx)(u.a,{className:t.avatar,children:Object(D.jsx)(p.a,{})}),Object(D.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(D.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(t,n){if(t.preventDefault(),f)if(N){var a=w()().format("YYYYMMDD");"admin"===f&&N===a?(c({open:!0,severity:"success",message:"\u767b\u5f55\u6210\u529f\uff5e"}),e.onLogin&&e.onLogin()):c({open:!0,severity:"warning",message:"\u8d26\u53f7\u540d\u6216\u5bc6\u7801\u9519\u8bef"})}else c({open:!0,severity:"warning",message:"\u8bf7\u8f93\u5165\u5bc6\u7801"});else c({open:!0,severity:"warning",message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})},children:[Object(D.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",placeholder:"admin",onChange:function(e){return b(e.target.value)},autoFocus:!0}),Object(D.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return S(e.target.value)}}),Object(D.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"})]})]}),Object(D.jsx)(v.a,{mt:8,children:Object(D.jsx)(C,{})}),Object(D.jsx)(O.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:1500,open:r.open,onClose:k,message:r.message,children:Object(D.jsxs)(Y,{onClose:k,severity:r.severity,children:[r.message,"!"]})})]})}var S,k=n(133),E=n(64),M=n.n(E),T=n(36),R=n(47),L=n(48),K=n(50),V=n(49),X=n(63),A=n.n(X),W=function(e,t,n,a,i){a=a||0,i=i||0,this.identifier=t,this.target=e,this.clientX=n.clientX+a,this.clientY=n.clientY+i,this.screenX=n.screenX+a,this.screenY=n.screenY+i,this.pageX=n.pageX+a,this.pageY=n.pageY+i};function q(){var e=[];return e.item=function(e){return this[e]||null},e.identifiedTouch=function(e){return this[e+1]||null},e}function I(e){return function(t){1===t.which&&(("mousedown"===t.type||!S||S&&!S.dispatchEvent)&&(S=t.target),function(e,t){var n=document.createEvent("Event");n.initEvent(e,!0,!0),n.altKey=t.altKey,n.ctrlKey=t.ctrlKey,n.metaKey=t.metaKey,n.shiftKey=t.shiftKey,n.touches=F(t),n.targetTouches=F(t),n.changedTouches=B(t),S.dispatchEvent(n)}(e,t),"mouseup"===t.type&&(S=null))}}function B(e){var t=q();return t.push(new W(S,1,e,0,0)),t}function F(e){return"mouseup"===e.type?q():B(e)}function Q(e){!function(){for(var e=[window,document.documentElement],t=["ontouchstart","ontouchmove","ontouchcancel","ontouchend"],n=0;n<e.length;n++)for(var a=0;a<t.length;a++)e[n]&&void 0===e[n][t[a]]&&(e[n][t[a]]=null)}(),e.addEventListener("mousedown",I("touchstart"),!0),e.addEventListener("mousemove",I("touchmove"),!0),e.addEventListener("mouseup",I("touchend"),!0)}Q.multiTouchOffset=75;var U=Q,z=function(e){Object(K.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).id="c".concat(Math.random().toString(36).substring(7)),e.state={isRender:!1},e.chart=null,e.init=function(t){var n=e.props,a=n.width,i=void 0===a?t.width:a,r=n.height,c=void 0===r?t.height:r,s=n.creator,o=n.data,u=new A.a.Chart({id:e.id,width:i,height:c,pixelRatio:window.devicePixelRatio,appendPadding:[10,20,6,0]});s({chart:u,data:o,alias:o.alias}),e.chart=u},e.getParentRect=function(){var t=e.canvas.parentElement;if(t){var n=t.getBoundingClientRect(),a=n.width,i=n.height;return U(e.canvas),e.setState({isRender:!0}),{width:a,height:i}}return e.setState({isRender:!1}),{}},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.getParentRect(),t=e.width,n=e.height;this.init({width:t,height:n})}},{key:"componentDidUpdate",value:function(){if(this.state.isRender){var e=this.getParentRect(),t=e.width,n=e.height;this.init({width:t,height:n})}}},{key:"componentWillUnmount",value:function(){this.chart.destroy(),this.chart=null}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this;return Object(D.jsx)("canvas",{id:this.id,ref:function(t){e.canvas=t}})}}]),n}(a.Component),J="100%",H="100%",G=function(e){Object(K.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).creator=function(e){var t,n=e.chart,a=e.data,i=e.alias,r=a.source,c=a.position,o=c.split("*"),u=Object(s.a)(o,2),l=u[0],h=u[1];n.source(r,(t={},Object(T.a)(t,l,{type:"timeCat",mask:"MM/DD",tickCount:7,range:[0,1]}),Object(T.a)(t,h,{tickCount:6,min:0,alias:i.y}),t)),n.tooltip({showCrosshairs:!0}),n.line().position(c).shape("smooth").color("#3da742"),n.point().position(c).shape("smooth").color("#3da742").style({stroke:"#fff",lineWidth:1}),n.render()},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props,t=e.source,n=void 0===t?[]:t,a=e.position,i=e.width,r=e.height,c=e.alias,s=void 0===c?{}:c,o={width:i||J,height:r||H};return Object(D.jsx)("div",{className:"jsChartWrap",style:o,children:n.length?Object(D.jsx)(z,{data:{source:n,position:a,alias:s},creator:this.creator}):null})}}]),n}(a.PureComponent),Z=n(51);function $(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=[],n=e-1;n>=0;n--){var a=w()().subtract(n,"day");t.push({start:a.startOf("date"),end:a.endOf("date")})}return t}var _=window.AV,ee="RE2X3iYzmzwAjkv8WXLYyf1e-MdYXbMMI",te="yv3AoBegr8qvDisOGH4JqS8y",ne="https://us.leancloud.cn/";function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t.require,t.startDate),a=t.endDate,i=[],r=new _.Query(e).notEqualTo("objectId","");if(i.push(r),n){var c=new _.Query(e);c.greaterThanOrEqualTo("createdAt",new Date(n)),i.push(c)}if(a){var s=new _.Query(e);s.lessThan("createdAt",new Date(a)),i.push(s)}return i}function ie(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.startDate,a=t.endDate,i=ae("Counter",{startDate:n,endDate:a}),r=(e=_.Query).and.apply(e,Object(Z.a)(i));return new Promise((function(e,t){r.count().then((function(t){return e(t)}),(function(e){return t(e)}))}))}function re(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.startDate,a=t.endDate,i=ae("Comment",{startDate:n,endDate:a}),r=(e=_.Query).and.apply(e,Object(Z.a)(i));return new Promise((function(e,t){r.count().then((function(t){return e(t)}),(function(e){return t(e)}))}))}_.init({appId:ee,appKey:te,serverURLs:ne});n(91);var ce=Object(b.a)((function(e){return{refreshBtn:{position:"absolute",right:0,top:0}}}));function se(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(0),c=Object(s.a)(r,2),o=c[0],u=c[1],l=Object(a.useState)([]),h=Object(s.a)(l,2),d=h[0],j=h[1],v=Object(a.useState)([]),f=Object(s.a)(v,2),p=f[0],m=f[1],b=Object(a.useState)(null),g=Object(s.a)(b,2),O=g[0],y=g[1],x=ce();Object(a.useEffect)((function(){ie().then((function(e){console.log("\u603bPV:",e),i(e)})),re().then((function(e){console.log("\u603b\u8bc4\u8bba:",e),u(e)})),setTimeout((function(){(function(){var e=$(arguments.length>0&&void 0!==arguments[0]?arguments[0]:7),t=[];return e.forEach((function(e,n){var a=e.start,i=e.end,r=a.format(),c=i.format(),s=ie({startDate:r,endDate:c});t.push(s.then((function(e){return{startDate:r,endDate:c,date:a.format("YYYY-MM-DD"),pv:e}})).catch((function(e){console.error("\u7edf\u8ba1pv\u9519\u8bef\uff1a",e)})))})),Promise.all(t).then((function(e,t){return e}))})().then((function(e){console.log("7\u65e5PV:",e),j(e)}))}),100),setTimeout((function(){(function(){var e=$(),t=[];return e.forEach((function(e){var n=e.start,a=e.end,i=n.format(),r=a.format(),c=re({startDate:i,endDate:r});t.push(c.then((function(e){return{startDate:i,endDate:r,date:n.format("YYYY-MM-DD"),count:e}})).catch((function(e){console.error("\u7edf\u8ba1\u8bc4\u8bba\u9519\u8bef\uff1a",e)})))})),Promise.all(t).then((function(e,t){return e}))})().then((function(e){console.log("7\u65e5\u8bc4\u8bba:",e),m(e)}))}),500)}),[O]);return Object(D.jsxs)("div",{className:"dashboard-wrapper",children:[Object(D.jsx)("div",{className:"title",children:Object(D.jsx)("h3",{children:"\u540e\u53f0\u6570\u636e - \u4e2d\u56fd\u7684\u4e2d\u53e4"})}),Object(D.jsxs)("div",{className:"overview",children:[Object(D.jsxs)("div",{className:"line",children:["\u603bPV: ",Object(D.jsx)("span",{className:"count",children:n})]}),Object(D.jsxs)("div",{className:"line",children:["\u603b\u8bc4\u8bba\u6570: ",Object(D.jsx)("span",{className:"count",children:o})]}),Object(D.jsx)("div",{className:x.refreshBtn,children:Object(D.jsx)(k.a,{"aria-label":"delete",onClick:function(){y(Math.random())},children:Object(D.jsx)(M.a,{})})})]}),Object(D.jsxs)("div",{className:"chart-block latest-7-days-pv",children:[Object(D.jsx)("h3",{children:"\u6700\u8fd17\u5929PV\u6570\u636e"}),Object(D.jsx)("div",{className:"desc",children:Object(D.jsx)("p",{children:"PV: Page View\u3002\u5373\u9875\u9762\u6d4f\u89c8\u91cf\u6216\u70b9\u51fb\u91cf\u3002"})}),Object(D.jsx)(G,{data:{source:d},source:d,position:"date*pv",width:"100%",height:"300px",alias:{y:"\u65e5PV"}})]}),Object(D.jsxs)("div",{className:"chart-block latest-7-days-pv",children:[Object(D.jsx)("h3",{children:"\u6700\u8fd17\u5929\u8bc4\u8bba\u6570\u636e"}),Object(D.jsx)(G,{data:{source:p},source:p,position:"date*count",width:"100%",height:"300px",alias:{y:"\u65e5\u8bc4\u8bba"}})]})]})}n(92);var oe=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)("div",{className:"container",children:[!n&&Object(D.jsx)(N,{onLogin:function(){i(!0)}}),n&&Object(D.jsx)(se,{})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(oe,{})}),document.getElementById("root")),ue()}},[[93,1,2]]]);
//# sourceMappingURL=main.239859e8.chunk.js.map