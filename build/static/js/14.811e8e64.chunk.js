(this["webpackJsonpsearching-partner-website"]=this["webpackJsonpsearching-partner-website"]||[]).push([[14],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(154),r=n(156),o=n(127),i=n(250),c=(n(0),n(2)),s=Object(a.a)((function(e){return Object(r.a)({main:{position:"relative",backgroundColor:"#9baaa5",borderRadius:40,marginTop:10,paddingTop:15,minHeight:"120vh"}})}));function l(e){var t=e.children,n=s();return Object(c.jsx)(o.a,{in:!0,timeout:800,children:Object(c.jsx)(i.a,{className:n.main,children:t})})}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(49),r=n(154),o=n(156),i=n(250),c=n(159),s=n(47),l=(n(0),n(193)),u=n(191),d=n(176),b=n(18),v=n(2),j=Object(r.a)((function(e){return Object(o.a)({contactForm:{textAlign:"center"},links:{textDecoration:"none",color:"#272727","&:hover":{color:e.palette.primary.main}},year:{marginBottom:10,color:"black"}})})),p=Object(d.a)(l.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{padding:t.spacing(.5),textAlign:"center"})}));function f(){var e=j();return Object(v.jsxs)(i.a,{className:e.contactForm,children:[Object(v.jsx)(c.a,{}),Object(v.jsxs)(u.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,mt:2,mb:1.5,children:[Object(v.jsx)(p,{children:Object(v.jsx)(b.b,{to:"/",className:e.links,children:"Home"})}),Object(v.jsx)(p,{children:Object(v.jsx)(b.b,{to:"/findplayers",className:e.links,children:"Find Players"})}),Object(v.jsx)(p,{children:Object(v.jsx)(b.b,{to:"/findtournaments",className:e.links,children:"Tournaments"})}),Object(v.jsx)(p,{children:Object(v.jsx)(b.b,{to:"/blog",className:e.links,children:"Recent News"})})]}),Object(v.jsxs)(s.a,{className:e.year,children:["\xa9 PartnerFinderis ",(new Date).getFullYear()]})]})}},191:function(e,t,n){"use strict";var a=n(69),r=n(15),o=n(1),i=n(0),c=(n(6),n(195)),s=n(206),l=n(192),u=n(301),d=n(176),b=n(177),v=n(2),j=["component","direction","spacing","divider","children"];function p(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,r){return e.push(a),r<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var f=Object(d.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=Object(o.a)({display:"flex"},Object(c.b)({theme:n},Object(c.d)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=Object(s.a)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),d=Object(c.d)({values:t.direction,base:l}),b=Object(c.d)({values:t.spacing,base:l});r=Object(u.a)(r,Object(c.b)({theme:n},b,(function(e,n){return{"& > :not(style) + :not(style)":Object(a.a)({margin:0},"margin".concat((r=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),Object(s.d)(i,e))};var r})))}return r})),O=i.forwardRef((function(e,t){var n=Object(b.a)({props:e,name:"MuiStack"}),a=Object(l.a)(n),i=a.component,c=void 0===i?"div":i,s=a.direction,u=void 0===s?"column":s,d=a.spacing,O=void 0===d?0:d,m=a.divider,h=a.children,x=Object(r.a)(a,j),g={direction:u,spacing:O};return Object(v.jsx)(f,Object(o.a)({as:c,ownerState:g,ref:t},x,{children:m?p(h,m):h}))}));t.a=O},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(181),r=n(1),o=n(15),i=n(301),c=n(186),s=["sx"];function l(e){var t,n=e.sx,l=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(n){c.b[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t}(Object(o.a)(e,s)),u=l.systemProps,d=l.otherProps;return t=Array.isArray(n)?[u].concat(Object(a.a)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return Object(i.b)(e)?Object(r.a)({},u,e):u}:Object(r.a)({},u,n),Object(r.a)({},d,{sx:t})}},193:function(e,t,n){"use strict";var a=n(15),r=n(1),o=n(0),i=(n(6),n(4)),c=n(303),s=n(302),l=n(176),u=n(177),d=n(334),b=n(304);function v(e){return Object(d.a)("MuiPaper",e)}Object(b.a)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var j=n(2),p=["className","component","elevation","square","variant"],f=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},O=Object(l.a)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===n.variant&&Object(r.a)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat(Object(s.a)("#fff",f(n.elevation)),", ").concat(Object(s.a)("#fff",f(n.elevation)),")")}))})),m=o.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiPaper"}),o=n.className,s=n.component,l=void 0===s?"div":s,d=n.elevation,b=void 0===d?1:d,f=n.square,m=void 0!==f&&f,h=n.variant,x=void 0===h?"elevation":h,g=Object(a.a)(n,p),y=Object(r.a)({},n,{component:l,elevation:b,square:m,variant:x}),w=function(e){var t=e.square,n=e.elevation,a=e.variant,r=e.classes,o={root:["root",a,!t&&"rounded","elevation"===a&&"elevation".concat(n)]};return Object(c.a)(o,v,r)}(y);return Object(j.jsx)(O,Object(r.a)({as:l,ownerState:y,className:Object(i.a)(w.root,o),ref:t},g))}));t.a=m},311:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(154),r=n(156),o=n(47),i=(n(0),n(179)),c=n(81),s=n(180),l=n(2),u=Object(a.a)((function(e){return Object(r.a)({container:{textAlign:"center"},playerButton:{border:"1px solid #6e7a78",backgroundColor:"#7fb37d",fontFamily:"Roboto, sans-serif",color:"white",textTransform:"none",borderRadius:6,boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",fontSize:15,minWidth:160,justifyContent:"center",margin:"0 auto",display:"flex"}})}));function d(){var e=u();return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o.a,{className:e.container,children:"If you want to create a post, then you must Log in"}),Object(l.jsx)(o.a,{className:e.container,children:"Click Button Below"}),Object(l.jsx)(c.a,{name:"Login",className:e.playerButton}),Object(l.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=14.811e8e64.chunk.js.map