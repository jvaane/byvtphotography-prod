"use strict";(self.webpackChunkbyvtphotography=self.webpackChunkbyvtphotography||[]).push([[895],{1295:function(e,a,r){r.r(a),r.d(a,{default:function(){return H}});var n=r(6661),o=r(6283),t=r(8072),i=r(4978),l=r(9786),c=r(2239),s=r(8884),p=r(4942),d=r(3366),u=r(7462),h=r(7294),m=r(2585),f=r(565),x=r(2583),v=r(7355),g=r(5166),b=r(842),Z=r(969),y=r(9260),S=r(2668),W=r(8398),k=r(7893);function w(e){return(0,W.Z)("MuiDialog",e)}var C=(0,k.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var P=(0,h.createContext)({}),j=r(8290),D=r(4429),M=r(5893),B=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],A=(0,S.ZP)(j.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,a){return a.backdrop}})({zIndex:-1}),N=(0,S.ZP)(g.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,a){return a.root}})({"@media print":{position:"absolute !important"}}),R=(0,S.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,a){var r=e.ownerState;return[a.container,a["scroll".concat((0,v.Z)(r.scroll))]]}})((function(e){var a=e.ownerState;return(0,u.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===a.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===a.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),F=(0,S.ZP)(Z.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,a){var r=e.ownerState;return[a.paper,a["scrollPaper".concat((0,v.Z)(r.scroll))],a["paperWidth".concat((0,v.Z)(String(r.maxWidth)))],r.fullWidth&&a.paperFullWidth,r.fullScreen&&a.paperFullScreen]}})((function(e){var a=e.theme,r=e.ownerState;return(0,u.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&(0,p.Z)({maxWidth:"px"===a.breakpoints.unit?Math.max(a.breakpoints.values.xs,444):"".concat(a.breakpoints.values.xs).concat(a.breakpoints.unit)},"&.".concat(C.paperScrollBody),(0,p.Z)({},a.breakpoints.down(Math.max(a.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),r.maxWidth&&"xs"!==r.maxWidth&&(0,p.Z)({maxWidth:"".concat(a.breakpoints.values[r.maxWidth]).concat(a.breakpoints.unit)},"&.".concat(C.paperScrollBody),(0,p.Z)({},a.breakpoints.down(a.breakpoints.values[r.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&(0,p.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(C.paperScrollBody),{margin:0,maxWidth:"100%"}))})),T=h.forwardRef((function(e,a){var r=(0,y.Z)({props:e,name:"MuiDialog"}),n=(0,D.Z)(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},t=r["aria-describedby"],i=r["aria-labelledby"],l=r.BackdropComponent,c=r.BackdropProps,s=r.children,p=r.className,g=r.disableEscapeKeyDown,S=void 0!==g&&g,W=r.fullScreen,k=void 0!==W&&W,C=r.fullWidth,j=void 0!==C&&C,T=r.maxWidth,Y=void 0===T?"sm":T,I=r.onBackdropClick,E=r.onClose,K=r.open,L=r.PaperComponent,X=void 0===L?Z.Z:L,z=r.PaperProps,H=void 0===z?{}:z,O=r.scroll,U=void 0===O?"paper":O,_=r.TransitionComponent,G=void 0===_?b.Z:_,q=r.transitionDuration,J=void 0===q?o:q,Q=r.TransitionProps,V=(0,d.Z)(r,B),$=(0,u.Z)({},r,{disableEscapeKeyDown:S,fullScreen:k,fullWidth:j,maxWidth:Y,scroll:U}),ee=function(e){var a=e.classes,r=e.scroll,n=e.maxWidth,o=e.fullWidth,t=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,v.Z)(r))],paper:["paper","paperScroll".concat((0,v.Z)(r)),"paperWidth".concat((0,v.Z)(String(n))),o&&"paperFullWidth",t&&"paperFullScreen"]};return(0,f.Z)(i,w,a)}($),ae=h.useRef(),re=(0,x.Z)(i),ne=h.useMemo((function(){return{titleId:re}}),[re]);return(0,M.jsx)(N,(0,u.Z)({className:(0,m.Z)(ee.root,p),closeAfterTransition:!0,components:{Backdrop:A},componentsProps:{backdrop:(0,u.Z)({transitionDuration:J,as:l},c)},disableEscapeKeyDown:S,onClose:E,open:K,ref:a,onClick:function(e){ae.current&&(ae.current=null,I&&I(e),E&&E(e,"backdropClick"))},ownerState:$},V,{children:(0,M.jsx)(G,(0,u.Z)({appear:!0,in:K,timeout:J,role:"presentation"},Q,{children:(0,M.jsx)(R,{className:(0,m.Z)(ee.container),onMouseDown:function(e){ae.current=e.target===e.currentTarget},ownerState:$,children:(0,M.jsx)(F,(0,u.Z)({as:X,elevation:24,role:"dialog","aria-describedby":t,"aria-labelledby":re},H,{className:(0,m.Z)(ee.paper,H.className),ownerState:$,children:(0,M.jsx)(P.Provider,{value:ne,children:s})}))})}))}))})),Y=T;function I(e){return(0,W.Z)("MuiDialogActions",e)}(0,k.Z)("MuiDialogActions",["root","spacing"]);var E=["className","disableSpacing"],K=(0,S.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,a){var r=e.ownerState;return[a.root,!r.disableSpacing&&a.spacing]}})((function(e){var a=e.ownerState;return(0,u.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!a.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),L=h.forwardRef((function(e,a){var r=(0,y.Z)({props:e,name:"MuiDialogActions"}),n=r.className,o=r.disableSpacing,t=void 0!==o&&o,i=(0,d.Z)(r,E),l=(0,u.Z)({},r,{disableSpacing:t}),c=function(e){var a=e.classes,r={root:["root",!e.disableSpacing&&"spacing"]};return(0,f.Z)(r,I,a)}(l);return(0,M.jsx)(K,(0,u.Z)({className:(0,m.Z)(c.root,n),ownerState:l,ref:a},i))})),X=r(6486),z=(0,n.Z)("h2",{target:"etowuj50"})(l.cp.h2," text-align:center;padding-bottom:16px;padding-top:16px;");function H(e){var a=e.data,r=e.location,n=a.contentfulPage,l=n.hero,p=n.components,d=(0,h.useState)(!1),u=d[0],m=d[1],f=function(){return m(!1)},x=Array.isArray(p)?p.filter((function(e){return Object.keys(e).length>0})).map((function(e){var a=(0,c.TY)(e);if((0,c.aU)(a,e,"referenceList")){var r=e.list.filter((function(e){return Object.keys(e).length>0})),n=(0,c.TY)(r[0]);return o.m_[n](r)}return o.vF[a](a,e,{defaultContainer:!0})})):void 0;return(0,M.jsx)(s.z.Provider,{value:{openContactPopUp:function(){console.log("open"),m(!0)}},children:(0,M.jsxs)("main",{children:[(0,M.jsxs)("header",{children:[(0,M.jsx)(t.W_,{location:r,transparent:!!l}),l&&(0,M.jsx)(o.ZG,{image:l.image.gatsbyImageData})]}),x,(0,M.jsxs)(Y,{open:u,onClose:f,"aria-labelledby":"Contact modal","aria-describedby":"You can submit your personal data, so we can contact you",children:[(0,M.jsx)(z,{children:"Neem contact op"}),(0,M.jsx)(i.ContactForm,{}),(0,M.jsx)(L,{children:(0,M.jsx)(X.Z,{onClick:f,color:"primary",children:"Sluiten"})})]})]})})}}}]);
//# sourceMappingURL=component---src-templates-page-tsx-c0a8ce146c75467d0b89.js.map