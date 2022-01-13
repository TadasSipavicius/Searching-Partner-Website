(this["webpackJsonpsearching-partner-website"]=this["webpackJsonpsearching-partner-website"]||[]).push([[19],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(154),a=n(156),i=n(127),r=n(250),s=(n(0),n(2)),j=Object(c.a)((function(e){return Object(a.a)({main:{position:"relative",backgroundColor:"#9baaa5",borderRadius:40,marginTop:10,paddingTop:15,minHeight:"120vh"}})}));function l(e){var t=e.children,n=j();return Object(s.jsx)(i.a,{in:!0,timeout:800,children:Object(s.jsx)(r.a,{className:n.main,children:t})})}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c=n(49),a=n(154),i=n(156),r=n(250),s=n(159),j=n(47),l=(n(0),n(193)),o=n(191),d=n(176),b=n(18),h=n(2),u=Object(a.a)((function(e){return Object(i.a)({contactForm:{textAlign:"center"},links:{textDecoration:"none",color:"#272727","&:hover":{color:e.palette.primary.main}},year:{marginBottom:10,color:"black"}})})),O=Object(d.a)(l.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{padding:t.spacing(.5),textAlign:"center"})}));function x(){var e=u();return Object(h.jsxs)(r.a,{className:e.contactForm,children:[Object(h.jsx)(s.a,{}),Object(h.jsxs)(o.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,mt:2,mb:1.5,children:[Object(h.jsx)(O,{children:Object(h.jsx)(b.b,{to:"/",className:e.links,children:"Home"})}),Object(h.jsx)(O,{children:Object(h.jsx)(b.b,{to:"/findplayers",className:e.links,children:"Find Players"})}),Object(h.jsx)(O,{children:Object(h.jsx)(b.b,{to:"/findtournaments",className:e.links,children:"Tournaments"})}),Object(h.jsx)(O,{children:Object(h.jsx)(b.b,{to:"/blog",className:e.links,children:"Recent News"})})]}),Object(h.jsxs)(j.a,{className:e.year,children:["\xa9 PartnerFinderis ",(new Date).getFullYear()]})]})}},314:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var c=n(196),a=n.n(c),i=n(197),r=n(48),s=n(0),j=n(11),l=n(16),o=n(184),d=n.n(o),b=n(193),h=n(329),u=n(331),O=n(332),x=n(328),g=n(321),m=n(330),p=n(179),f=n(180),v=n(318),k=n(322),y=n(333),N=n(2);function w(){var e=Object(j.g)(),t=parseInt(e.id),n=Object(j.f)(),c=Object(l.b)().user,o=Object(s.useState)([]),w=Object(r.a)(o,2),C=w[0],F=w[1],T=Object(s.useState)(!1),D=Object(r.a)(T,2),P=D[0],R=D[1],A="https://partnerfinderis-api.herokuapp.com";Object(s.useEffect)((function(){d.a.get("".concat(A,"/findplayer/get")).then((function(e){F(e.data)}))}),[A]);var H=function(){R(!1)},I=function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat(A,"/findplayer/delete/").concat(t));case 2:R(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(p.a,{children:[C.filter((function(e){return e.id===t})).map((function(e){return Object(N.jsxs)(x.a,{sx:{maxWidth:500,margin:"0 auto"},component:b.a,children:[Object(N.jsx)(h.a,{sx:{maxWidth:500},"aria-label":"simple table",children:Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(u.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(N.jsx)(O.a,{children:"Name:"}),Object(N.jsx)(O.a,{align:"right",children:e.name})]},e.id),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"Age:"}),Object(N.jsx)(O.a,{align:"right",children:e.age})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"Gender:"}),Object(N.jsx)(O.a,{align:"right",children:e.gender})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"NTRP:"}),Object(N.jsx)(O.a,{align:"right",children:e.NTRP})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"City:"}),Object(N.jsx)(O.a,{align:"right",children:e.city})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"Time:"}),Object(N.jsx)(O.a,{align:"right",children:e.time})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"Description:"}),Object(N.jsx)(O.a,{align:"right",children:e.description})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(O.a,{children:"Contact Information:"}),Object(N.jsx)(O.a,{align:"right",children:e.contact_info})]})]})}),(null===c||void 0===c?void 0:c.sub)===e.user_id||"auth0|60db6b5a9a0cd50069312622"===(null===c||void 0===c?void 0:c.sub)?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{variant:"contained",color:"error",onClick:function(){return I(e.id)},children:"Delete"}),Object(N.jsx)(g.a,{variant:"contained",color:"success",children:"Edit"})]}):null]},e.id)})),Object(N.jsxs)(v.a,{open:P,onClose:H,children:[Object(N.jsx)(k.a,{children:"Delete is Completed. Get back to Home page?"}),Object(N.jsxs)(y.a,{children:[Object(N.jsx)(g.a,{onClick:function(){n.push("/")},children:"Yes"}),Object(N.jsx)(g.a,{onClick:H,children:"No"})]})]}),Object(N.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=19.7a845703.chunk.js.map