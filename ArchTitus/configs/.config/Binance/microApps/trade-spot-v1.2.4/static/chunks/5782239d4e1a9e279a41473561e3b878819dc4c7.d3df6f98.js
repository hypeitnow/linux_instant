(self["webpackJsonp_trade-spot"]=self["webpackJsonp_trade-spot"]||[]).push([[8799],{Fxbg:(e,n,t)=>{"use strict";t.d(n,{I:()=>s});var i=t("D57K"),r=t("Uqe+"),l=t("frZ3"),o=t("/SIk"),a={hasCountDown:!1,deadLine:void 0,countDownType:void 0,cacheTime:0,hasFetch:!1},s=function(e){var n=e.delay,t=void 0===n?30:n,s=e.isLogin,c=e.handleInterface,d=(0,r.Z)("POAStorage",a),u=d[0],h=d[1],v=null===u||void 0===u?void 0:u.cacheTime,m=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e,n;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return s?[4,c()]:[3,2];case 1:return e=t.sent(),n=(0,i.__assign)((0,i.__assign)((0,i.__assign)({},u),e),{cacheTime:(new Date).getTime(),hasFetch:!0}),h(n),[3,3];case 2:h(a),t.label=3;case 3:return[2]}}))}))};return(0,o.useEffect)((function(){(null===u||void 0===u?void 0:u.hasFetch)||m()}),[null===u||void 0===u?void 0:u.hasFetch,s]),(0,l.Z)((function(){var e=(new Date).getTime();s&&(null===u||void 0===u?void 0:u.hasFetch)&&v&&((e-v)/1e3/60>=t&&m());s||h(a)}),1e4),s?u:a}},"F0n+":(e,n,t)=>{"use strict";t.d(n,{f0:()=>d,Pc:()=>u,aK:()=>h,Nq:()=>m});var i=t("/SIk"),r=t("szIg"),l=t("3z6t"),o=function(e){var n;return null===(n=e.userCenter)||void 0===n?void 0:n.loginStatus},a=function(e){var n;return null===(n=e.userCenter)||void 0===n?void 0:n.userInfo},s=function(e){var n;return null===(n=e.userCenter)||void 0===n?void 0:n.fiatCurrencyInfo},c=function(e){var n;return null===(n=e.userCenter)||void 0===n?void 0:n.userPreferredCurrency},d=function(){return(0,r.useSelector)(o,r.shallowEqual)||{}},u=function(){return(0,r.useSelector)(a,r.shallowEqual)||{}},h=function(){return(0,r.useSelector)(s,r.shallowEqual)||[]},v=function(){return(0,r.useSelector)(c,r.shallowEqual)||{}},m=function(){var e=(0,r.useDispatch)(),n=d().isLoggedIn,t=(0,l.CE)(),o=t.cachePreferFiat,a=t.setCacheFiat,s=v().configName;return{userFiat:(n?s:o)||o,setUseFiat:(0,i.useMemo)((function(){return n?function(n){return e.userCenter.updateCurrentFiat(n)}:function(e){return a(e)}}),[n])}}},nZck:(e,n,t)=>{"use strict";t.d(n,{Z:()=>k});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("RNvQ"),a=t.n(o),s=t("qnec"),c=t("O94r"),d=t.n(c),u=t("vs24"),h=t("U7bi"),v=t("tYxG");const m=function(e){return l().createElement(v.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M12.867 18.47l5.13-.94L15.517 4l-5.18.95-3.25 3.94-4.85.89.5 2.71-1.97.36.36 1.97 1.97-.36.44 2.42 1.97-.36.79 4.28 1.97-.36-.79-4.28.98-.18 4.41 2.49zm-5.76-4.28l-1.97.36-.58-3.17 3.61-.66 3.25-3.92 2.5-.46 1.76 9.59-2.46.45-4.4-2.51-1.71.32zM22.871 8.792l-2.99.55.362 1.967 2.99-.55-.362-1.967zM19.937 13.183l-1.135 1.647 2.503 1.725 1.135-1.646-2.503-1.726zM19.006 4.052l-1.725 2.503 1.646 1.135 1.726-2.503-1.647-1.135z",fill:"currentColor"}))};var p=t("twc1"),f=t("DrvH"),g=t("j3/i");const k=function(e){function n(n){var t=e.call(this,n)||this;t.saveSlick=function(e){t.slick=e},t.resizedCallback=function(){t.props.autoplay&&t.slick&&t.slick.innerSlider&&t.slick.innerSlider.autoPlay&&t.slick.innerSlider.autoPlay()},t.onWindowResized=a()(t.resizedCallback,500,{leading:!1}),t.renderIcon=function(){return r.createElement("span",{className:"trade-carousel-icon"},r.createElement(m,{size:20,color:"t.yellow200"}))},t.handleClose=function(e){var n=t.props.onClose;n&&n(e)},t.renderCarousel=function(){var e,n=(0,i.__assign)({},t.props);"fade"===n.effect&&(n.fade=!0);var l="trade-carousel",o=d()(l,((e={})[l+"-vertical"]=!0,e)),a=t.props,c=a.content,v=a.textColor,m=c.map((function(e,n){return r.createElement("div",{className:"slide-container",key:n},r.createElement(u.Z,{sx:{lineHeight:[1,"36px"],height:["54px","36px"],outline:"none",display:"flex",alignItems:"flex-start",justifyContent:"space-between","& .list-link":{marginTop:["4px","0px"],marginLeft:["0px","8px"],display:["block","inline-block"]},"& .slide-close":{padding:"0 4px"}}},r.createElement(h.Z,{sx:{display:"inline-block"},color:v||"#EAECEF"},e.text,r.createElement("a",(0,i.__assign)({href:e.link,className:"list-link"},{onClick:function(){window.open(e.link)}}),e.linkText,r.createElement(p.Z,{size:12,mt:"2px",ml:"4px",color:"t.yellow200"}))),r.createElement("span",{className:"slide-close",onClick:function(){return t.handleClose(n)}},r.createElement(f.Z,{sx:{ml:"10px"},size:12,color:"t.secondary"}))))}));return r.createElement("div",null,r.createElement(u.Z,{className:o,sx:{height:["82px","36px"],px:["14px","28px"],py:["14px","0px"],background:n.bg||"#3B2601",alignItems:["flex-start","center"],"& .slick-slider":{width:["92%","98%"]}}},t.renderIcon(),r.createElement(s.Z,(0,i.__assign)({ref:t.saveSlick,vertical:!0,dots:!1,autoplaySpeed:5e3,children:m,accessibility:!0},n))))},t.onWindowResized=a()(t.onWindowResized,500,{leading:!1});return t.state=(0,i.__assign)({},{closeAll:!1}),t}return(0,i.__extends)(n,e),n.prototype.componentDidMount=function(){this.props.autoplay&&window.addEventListener("resize",this.onWindowResized),this.innerSlider=this.slick&&this.slick.innerSlider},n.prototype.componentDidUpdate=function(e){JSON.stringify(this.props.content)!==JSON.stringify(e.content)&&this.goTo(this.props.initialSlide||0,!1)},n.prototype.componentWillUnmount=function(){this.props.autoplay&&(window.removeEventListener("resize",this.onWindowResized),this.onWindowResized.cancel())},n.prototype.goTo=function(e,n){void 0===n&&(n=!1),this.slick.slickGoTo(e,n)},n.prototype.render=function(){return this.state.closeAll||0===this.props.content.length?null:r.createElement(r.Fragment,null,this.renderCarousel(),r.createElement(g.xB,{styles:(0,g.iv)(x||(x=(0,i.__makeTemplateObject)(["\n            ","\n          "],["\n            ","\n          "])),"\n.trade-carousel-vertical {\n  background: #3B2601;\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  font-size: 14px;\n  font-variant: tabular-nums;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n}\n\n.trade-carousel-vertical .trade-carousel-icon {\n  height: 20px;\n  line-height: 20px;\n  margin-right: 10px;\n}\n\n.trade-carousel .slick-slider {\n  position: relative;\n  flex-grow: 0;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.trade-carousel .slick-slider .slick-list {\n  position: relative;\n  height: 36px;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.trade-carousel .slick-list:focus {\n  outline: none;\n}\n\n.trade-carousel .slick-list .slick-slide > div > div {\n  vertical-align: bottom;\n}\n.trade-carousel .slick-slider .slick-track,\n.trade-carousel .slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.trade-carousel .slick-track {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n}\n.trade-carousel .slick-track::before,\n.trade-carousel .slick-track::after {\n  display: table;\n  content: '';\n}\n.trade-carousel .slick-track::after {\n  clear: both;\n}\n.trade-carousel .slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n\n.trade-carousel .slick-initialized .slick-slide {\n  display: block;\n}\n.trade-carousel .slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n}\n\n.trade-carousel-rtl {\n  direction: rtl;\n}\n.trade-carousel-rtl .trade-carousel-vertical .slick-track {\n  right: 0;\n  left: auto;\n}\n.list-link {\n  color:#F0B90B;\n  text-decoration: none;\n  cursor: pointer;\n}\n.slide-container {\n  zIndex: 1;\n  position: relative;\n  outline: none;\n}\n.trade-carousel-vertical .slide-container .slide-item {\n  color: white;\n  line-height: 36px;\n  height: 36px;\n}\n.slide-container .slide-close {\n  cursor: pointer;\n}\n")}))},n.defaultProps={arrows:!1,draggable:!1},n}(r.Component);var x},L1wt:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("vs24"),a=function(e){return Array.isArray(e)?e.map(a):!!e&&"repeat(auto-fit, minmax("+(("number"===typeof(n=e)?n+"px":n)+", 1fr))");var n},s=function(e){return Array.isArray(e)?e.map(s):!!e&&"repeat("+e+", 1fr)"},c=(0,r.forwardRef)((function(e,n){var t=e.width,r=e.columns,c=e.gap,d=void 0===c?3:c,u=e.gridTemplateColumnsWidth,h=(0,i.__rest)(e,["width","columns","gap","gridTemplateColumnsWidth"]),v=u||(t?a(t):s(r));return l().createElement(o.Z,(0,i.__assign)({ref:n,tx:"layout",variant:"tiles"},h,{__css:{display:"grid",gridGap:d,gridTemplateColumns:v}}))}));c.displayName="Tiles";const d=c},zQR8:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",fill:"currentColor"}))}},ilUO:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 1h2v3h3v14h-3v4h-2v-4h-3V4h3V1zm3 15V6h-4v10h4zM6 7h2v3h3v8H8v4H6v-4H3v-8h3V7zm3 9v-4H5v4h4z",fill:"currentColor"}))}},a8an:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 3H9v17h6V3zm-4 7V5h2v5h-2zm0 2v6h2v-6h-2zM17 7h6v13h-6V7zm2 7v4h2v-4h-2zm0-5h2v3h-2V9zM7 10H1v10h6V10zm-4 2v6h2v-6H3z",fill:"currentColor"}))}},ZPnD:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M5 18h14.5v2H3V5h2v5.6l3.7-3.7 4.6 4.5 5.5-5.5 1.4 1.4-7 6.9-4.5-4.5L5 13.4V18z",fill:"currentColor"}))}},MCEE:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M10.586 12L4.293 5.707 5 5l.707-.707L12 10.586l6.293-6.293L19 5l.707.707L13.414 12l6.293 6.293-1.414 1.414L12 13.414l-6.293 6.293L5 19l-.707-.707L10.586 12z",fill:"currentColor"}))}},kmwg:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M13 2v12.172l4.586-4.586L19 11l-7 7-7-7 1.414-1.414L11 14.172V2h2z",fill:"currentColor"}),l().createElement("path",{d:"M21 16h-2v4H5v-4H3v6h18v-6z",fill:"currentColor"}))}},"0Drc":(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M8 15h8v2H8v-2z",fill:"currentColor"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 2h9.414L20 8.586V22H4V2zm2 2v16h12v-9h-7V4H6zm7 .414V9h4.586L13 4.414z",fill:"currentColor"}))}},yhlL:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 21v-8H3v8h8zm-6-2v-4h4v4H5z",fill:"#2EBD85"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 11V3H3v8h8zM5 9V5h4v4H5z",fill:"#F6465D"}),l().createElement("path",{fill:"currentColor",d:"M13 3h8v2h-8zM13 19h8v2h-8zM13 11h8v2h-8v-2zM13 7h8v2h-8V7zM13 15h8v2h-8v-2z"}))}},xNT1:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M8 7h4v2H8V7zM14 7h2v2h-2V7zM8 12h4v2H8v-2zM14 12h2v2h-2v-2z",fill:"currentColor"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 22h2l3-3 3 3 3-3 3 3h2V2H4v20zm5-5.828l3 3 3-3 3 3V4H6v15.172l3-3z",fill:"currentColor"}))}},"6Cxc":(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.06 1.579l1.811-.008 2.736 5.765 6.046.937.563 1.686-4.415 4.526 1.015 6.357-1.473 1.032-5.375-2.987-5.375 2.987-1.472-1.04 1.074-6.353-4.41-4.522.562-1.686 6.04-.936 2.674-5.758zm.918 2.774L9.75 9.15l-5.18.803 3.766 3.86-.897 5.303 4.528-2.516 4.549 2.528-.85-5.32 3.762-3.855-5.175-.802-2.276-4.797z",fill:"currentColor"}))}},XY5H:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{d:"M9 13.5l1.5 1.5L9 16.5 7.5 15 9 13.5z",fill:"currentColor"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.062 8.062A7.001 7.001 0 0122 9c0 3.548-2.64 6.48-6.062 6.938A7.001 7.001 0 012 15c0-3.548 2.64-6.48 6.062-6.938zM15 4a5 5 0 01.917 9.916 7.005 7.005 0 00-5.833-5.833A5.002 5.002 0 0115 4zm-6 6a5 5 0 110 10 5 5 0 010-10z",fill:"currentColor"}))}},AiTS:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t("D57K"),r=t("/SIk"),l=t.n(r),o=t("tYxG");const a=function(e){return l().createElement(o.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 21H6a3 3 0 01-3-3V6a3 3 0 013-3h15v18zM5 6a1 1 0 011-1h13v2H6a1 1 0 01-1-1zm14 3H6c-.35 0-.687-.06-1-.17V18a1 1 0 001 1h13v-2h-6v-6h6V9zm0 4h-4v2h4v-2z",fill:"currentColor"}))}},"0ZXH":(e,n,t)=>{"use strict";t.d(n,{Wg:()=>l});var i=t("H+/5"),r="lang";function l(e,n){void 0===e&&(e="en"),void 0===n&&(n=365),i.Q.erase(r),i.Q.write(r,e.toLowerCase(),n)}}}]);