(self["webpackJsonp_trade-spot"]=self["webpackJsonp_trade-spot"]||[]).push([[4040],{"VX+Y":(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var l=a("/SIk"),o=a.n(l),n=a("vs24"),i=a("NBfW"),r=a("8Qvr"),s=a("XXhI"),d=a("dNnX"),c=a("U7bi"),h=o().createElement;const u=({hideOtherPairs:e,onHideOtherPairs:t,mHeaderText:a,hideName:l})=>h(i.Z,{variant:"girdList.columnBox",sx:{pr:0,mb:"4px",height:"32px"}},h(n.Z,{sx:{alignItems:"center",fontSize:"12px",color:"t.thead",userSelect:"none",lineHeight:"24px",display:"flex"},onClick:()=>t(!e)},h(d.Z,{name:l,size:16,checked:e,onChange:()=>!1}),h(c.Z,null,a))),x=o().memo(u);var m=a("GpFh"),p=a("y/re"),f=a("11Th"),Z=o().createElement;const g=e=>{let{useColumn:t}=e,a=(0,m.Z)(e,["useColumn"]);const{getI18n:l}=(0,p.Z)(),o=t(a),r=[{label:l("price",{defaultValue:"Price"}),value:o.nextPrice},{label:l("filled",{defaultValue:"Filled"}),value:o.nextQty},{label:l("fee",{defaultValue:"Fee"}),value:o.nextFee},{label:l("total",{defaultValue:"Total"}),value:o.nextTotal}];return Z(n.Z,{sx:{color:"t.primary",borderBottom:"1px solid",borderBottomColor:"newLine",pb:"12px"}},Z(i.Z,{variant:"columns.spaceLine",__css:{height:"40px"}},Z(i.Z,{sx:{alignItems:"center",fontSize:"14px",flex:1,justifyContent:"space-between"}},Z(i.Z,null,Z(c.Z,{sx:{fontWeight:"500"}},o.nextPair.split("/").join(" / ")),Z(c.Z,Object.assign({},o.nextSide,{sx:{mx:"4px"}}))),Z(c.Z,{__css:{color:"t.third",fontSize:"12px"}},null===o||void 0===o?void 0:o.nextDate))),Z(f.O3,{listArray:r}))},v=o().memo(g);var b=a("hW1K"),O=o().createElement;const y=()=>{const{getI18n:e}=(0,p.Z)();return O(n.Z,{sx:{color:"t.secondaryOld",textAlign:"center",fontSize:[0],marginTop:"xs"}},e("nodata",{defaultValue:"You have no trades."}))},P=({isEmpty:e,hasMore:t,loadMore:a,loading:o,data:d=[],hideOtherPairs:c,onHideOtherPairs:h,useColumn:u,hideName:m,mHeaderText:p,filterType:f,onSearch:Z,hideText:g,isMobile:P})=>((0,l.useEffect)((()=>{t&&a()}),[t,a]),O(i.Z,{sx:{position:"relative",flexDirection:"column",flex:"1 0"}},O(r.Z,{fullScreen:!0,show:o}),!P&&O(b.Z,{type:f,onSearch:Z,hideOtherPairs:c,onHideOtherPairs:h,hideText:g,hideName:m,hideCheckBox:!0}),O(x,{hideOtherPairs:c,onHideOtherPairs:h,mHeaderText:p,hideName:m}),O(n.Z,{sx:{height:["auto","210px"],overflowY:["auto","scroll"]}},e?O(y,null):d.map((e=>O(v,Object.assign({key:e.tradeId},e,{useColumn:u})))),t&&O(s.Z,{showMore:a,check:{offset:200},loading:o})))),S=o().memo(P)}}]);