(this["webpackJsonpsearching-partner-website"]=this["webpackJsonpsearching-partner-website"]||[]).push([[13],{188:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(163),r=n(165),o=n(136),i=n(257),c=(n(0),n(2)),s=Object(a.a)((function(e){return Object(r.a)({main:{position:"relative",backgroundColor:"#9baaa5",borderRadius:40,marginTop:10,paddingTop:15,minHeight:"120vh"}})}));function l(e){var t=e.children,n=s();return Object(c.jsx)(o.a,{in:!0,timeout:800,children:Object(c.jsx)(i.a,{className:n.main,children:t})})}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(51),r=n(163),o=n(165),i=n(257),c=n(168),s=n(49),l=(n(0),n(203)),u=n(200),b=n(185),d=n(19),j=n(2),v=Object(r.a)((function(e){return Object(o.a)({contactForm:{textAlign:"center"},links:{textDecoration:"none",color:"#272727","&:hover":{color:e.palette.primary.main}},year:{marginBottom:10,color:"black"}})})),O=Object(b.a)(l.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{padding:t.spacing(.5),textAlign:"center"})}));function p(){var e=v();return Object(j.jsxs)(i.a,{className:e.contactForm,children:[Object(j.jsx)(c.a,{}),Object(j.jsxs)(u.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,mt:2,mb:1.5,children:[Object(j.jsx)(O,{children:Object(j.jsx)(d.b,{to:"/",className:e.links,children:"Home"})}),Object(j.jsx)(O,{children:Object(j.jsx)(d.b,{to:"/findplayers",className:e.links,children:"Find Players"})}),Object(j.jsx)(O,{children:Object(j.jsx)(d.b,{to:"/findtournaments",className:e.links,children:"Tournaments"})}),Object(j.jsx)(O,{children:Object(j.jsx)(d.b,{to:"/blog",className:e.links,children:"Recent News"})})]}),Object(j.jsxs)(s.a,{className:e.year,children:["\xa9 PartnerFinderis ",(new Date).getFullYear()]})]})}},200:function(e,t,n){"use strict";var a=n(71),r=n(16),o=n(1),i=n(0),c=(n(6),n(204)),s=n(215),l=n(201),u=n(316),b=n(185),d=n(186),j=n(2),v=["component","direction","spacing","divider","children"];function O(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,r){return e.push(a),r<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var p=Object(b.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=Object(o.a)({display:"flex"},Object(c.b)({theme:n},Object(c.d)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=Object(s.a)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),b=Object(c.d)({values:t.direction,base:l}),d=Object(c.d)({values:t.spacing,base:l});r=Object(u.a)(r,Object(c.b)({theme:n},d,(function(e,n){return{"& > :not(style) + :not(style)":Object(a.a)({margin:0},"margin".concat((r=n?b[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),Object(s.d)(i,e))};var r})))}return r})),f=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiStack"}),a=Object(l.a)(n),i=a.component,c=void 0===i?"div":i,s=a.direction,u=void 0===s?"column":s,b=a.spacing,f=void 0===b?0:b,h=a.divider,m=a.children,x=Object(r.a)(a,v),g={direction:u,spacing:f};return Object(j.jsx)(p,Object(o.a)({as:c,ownerState:g,ref:t},x,{children:h?O(m,h):m}))}));t.a=f},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(192),r=n(1),o=n(16),i=n(316),c=n(199),s=["sx"];function l(e){var t,n=e.sx,l=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(n){c.b[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t}(Object(o.a)(e,s)),u=l.systemProps,b=l.otherProps;return t=Array.isArray(n)?[u].concat(Object(a.a)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return Object(i.b)(e)?Object(r.a)({},u,e):u}:Object(r.a)({},u,n),Object(r.a)({},b,{sx:t})}},203:function(e,t,n){"use strict";var a=n(16),r=n(1),o=n(0),i=(n(6),n(4)),c=n(318),s=n(317),l=n(185),u=n(186),b=n(342),d=n(319);function j(e){return Object(b.a)("MuiPaper",e)}Object(d.a)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=n(2),O=["className","component","elevation","square","variant"],p=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},f=Object(l.a)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===n.variant&&Object(r.a)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat(Object(s.a)("#fff",p(n.elevation)),", ").concat(Object(s.a)("#fff",p(n.elevation)),")")}))})),h=o.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiPaper"}),o=n.className,s=n.component,l=void 0===s?"div":s,b=n.elevation,d=void 0===b?1:b,p=n.square,h=void 0!==p&&p,m=n.variant,x=void 0===m?"elevation":m,g=Object(a.a)(n,O),y=Object(r.a)({},n,{component:l,elevation:d,square:h,variant:x}),k=function(e){var t=e.square,n=e.elevation,a=e.variant,r=e.classes,o={root:["root",a,!t&&"rounded","elevation"===a&&"elevation".concat(n)]};return Object(c.a)(o,j,r)}(y);return Object(v.jsx)(f,Object(r.a)({as:l,ownerState:y,className:Object(i.a)(k.root,o),ref:t},g))}));t.a=h},339:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(0),r=n(188),o=n(189),i=n(205),c=n.n(i),s=n(206),l=n(50),u=n(257),b=n(341),d=n(334),j=n(246),v=n(247),O=n(248),p=n(335),f=n(17),h=n(11),m=n(193),x=n.n(m),g=n(2);function y(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],y=i[1],k=Object(a.useState)(!1),w=Object(l.a)(k,2),N=w[0],S=w[1],C=Object(f.b)().user,P=Object(h.f)(),R=function(){S(!1)},T=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("http://localhost:3001/blog/insert",{blogTitle:n,blogText:m,user_id:null===C||void 0===C?void 0:C.sub});case 2:S(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(u.a,{children:Object(g.jsxs)("form",{children:[Object(g.jsx)(b.a,{children:"Blog title:"}),Object(g.jsx)(d.a,{label:"Title",variant:"outlined",error:""===n,helperText:""===n?"Empty!":"",required:!0,fullWidth:!0,onChange:function(e){r(e.target.value)}}),Object(g.jsx)(b.a,{children:"Blog Text:"}),Object(g.jsx)(d.a,{label:"Blog whole text",variant:"outlined",error:""===m,helperText:""===m?"Empty!":"",multiline:!0,rows:20,required:!0,fullWidth:!0,onChange:function(e){y(e.target.value)}}),""===(n&&m)?Object(g.jsx)(p.a,{variant:"outlined",disabled:!0,children:"Submit Form"}):Object(g.jsx)(p.a,{variant:"outlined",onClick:T,children:"Submit Form"}),Object(g.jsxs)(j.a,{open:N,onClose:R,children:[Object(g.jsx)(v.a,{children:"Insert is Completed. Get back to Blog page?"}),Object(g.jsxs)(O.a,{children:[Object(g.jsx)(p.a,{onClick:function(){P.push("/blog")},children:"Yes"}),Object(g.jsx)(p.a,{onClick:R,children:"No"})]})]})]})})}var k=n(138),w=n(133),N=n(49),S=Object(k.a)((function(e){return Object(w.a)({pageName:{textAlign:"center",marginBottom:15}})}));function C(){var e=S();return Object(g.jsxs)(r.a,{children:[Object(g.jsx)(N.a,{className:e.pageName,children:"Create a New Blog"}),Object(g.jsx)(y,{}),Object(g.jsx)(o.a,{})]})}}}]);
//# sourceMappingURL=13.660cb6e3.chunk.js.map