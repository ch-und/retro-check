import{r as e,j as s}from"./index-ab282390.js";import{C as L,a as re}from"./axios-2fba8d58.js";import{x as ae,A as se,q as ne,B as A,z as oe,S as ie,R as le,C as ce,w as de,I as ge}from"./index-46d2abd3.js";import{m as me,P as he,r as pe,l as ue,C as H,e as k,aO as fe,ae as xe,G as Se}from"./EditOutlined-19744e98.js";import{T as ve}from"./index-3a131d53.js";const B=e.createContext("default"),N=t=>{let{children:i,size:n}=t;const r=e.useContext(B);return e.createElement(B.Provider,{value:n||r},i)},ye=t=>{const{antCls:i,componentCls:n,iconCls:r,avatarBg:o,avatarColor:j,avatarSizeBase:h,avatarSizeLG:v,avatarSizeSM:p,avatarFontSizeBase:S,avatarFontSizeLG:l,avatarFontSizeSM:b,borderRadius:C,borderRadiusLG:z,borderRadiusSM:a,lineWidth:d,lineType:O}=t,u=(c,f,y)=>({width:c,height:c,lineHeight:`${c-d*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:y},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:f,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},pe(t)),{position:"relative",display:"inline-block",overflow:"hidden",color:j,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${d}px ${O} transparent`,["&-image"]:{background:"transparent"},[`${i}-image-img`]:{display:"block"}}),u(h,S,C)),{["&-lg"]:Object.assign({},u(v,l,z)),["&-sm"]:Object.assign({},u(p,b,a)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},be=t=>{const{componentCls:i,avatarGroupBorderColor:n,avatarGroupSpace:r}=t;return{[`${i}-group`]:{display:"inline-flex",[`${i}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:r}}}},F=me("Avatar",t=>{const{colorTextLightSolid:i,controlHeight:n,controlHeightLG:r,controlHeightSM:o,fontSize:j,fontSizeLG:h,fontSizeXL:v,fontSizeHeading3:p,marginXS:S,colorBorderBg:l,colorTextPlaceholder:b}=t,C=he(t,{avatarBg:b,avatarColor:i,avatarSizeBase:n,avatarSizeLG:r,avatarSizeSM:o,avatarFontSizeBase:Math.round((h+v)/2),avatarFontSizeLG:p,avatarFontSizeSM:j,avatarGroupSpace:-S,avatarGroupBorderColor:l});return[ye(C),be(C)]});var Ce=globalThis&&globalThis.__rest||function(t,i){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)i.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};const je=(t,i)=>{const n=e.useContext(B),[r,o]=e.useState(1),[j,h]=e.useState(!1),[v,p]=e.useState(!0),S=e.useRef(null),l=e.useRef(null),b=ue(i,S),{getPrefixCls:C}=e.useContext(H),z=()=>{if(!l.current||!S.current)return;const m=l.current.offsetWidth,x=S.current.offsetWidth;if(m!==0&&x!==0){const{gap:E=4}=t;E*2<x&&o(x-E*2<m?(x-E*2)/m:1)}};e.useEffect(()=>{h(!0)},[]),e.useEffect(()=>{p(!0),o(1)},[t.src]),e.useEffect(()=>{z()},[t.gap]);const a=()=>{const{onError:m}=t;(m?m():void 0)!==!1&&p(!1)},{prefixCls:d,shape:O="circle",size:u="default",src:c,srcSet:f,icon:y,className:V,rootClassName:K,alt:X,draggable:q,children:T,crossOrigin:D}=t,w=Ce(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),g=u==="default"?n:u,U=Object.keys(typeof g=="object"?g||{}:{}).some(m=>["xs","sm","md","lg","xl","xxl"].includes(m)),G=ae(U),J=e.useMemo(()=>{if(typeof g!="object")return{};const m=se.find(E=>G[E]),x=g[m];return x?{width:x,height:x,lineHeight:`${x}px`,fontSize:y?x/2:18}:{}},[G,g]),$=C("avatar",d),[Q,Y]=F($),Z=k({[`${$}-lg`]:g==="large",[`${$}-sm`]:g==="small"}),I=e.isValidElement(c),ee=k($,Z,{[`${$}-${O}`]:!!O,[`${$}-image`]:I||c&&v,[`${$}-icon`]:!!y},V,K,Y),te=typeof g=="number"?{width:g,height:g,lineHeight:`${g}px`,fontSize:y?g/2:18}:{};let R;if(typeof c=="string"&&v)R=e.createElement("img",{src:c,draggable:q,srcSet:f,onError:a,alt:X,crossOrigin:D});else if(I)R=c;else if(y)R=y;else if(j||r!==1){const m=`scale(${r}) translateX(-50%)`,x={msTransform:m,WebkitTransform:m,transform:m},E=typeof g=="number"?{lineHeight:`${g}px`}:{};R=e.createElement(fe,{onResize:z},e.createElement("span",{className:`${$}-string`,ref:l,style:Object.assign(Object.assign({},E),x)},T))}else R=e.createElement("span",{className:`${$}-string`,style:{opacity:0},ref:l},T);return delete w.onError,delete w.gap,Q(e.createElement("span",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign({},te),J),w.style),className:ee,ref:b}),R))},ze=e.forwardRef(je),_=ze,$e=t=>{const{getPrefixCls:i,direction:n}=e.useContext(H),{prefixCls:r,className:o,rootClassName:j,maxCount:h,maxStyle:v,size:p}=t,S=i("avatar",r),l=`${S}-group`,[b,C]=F(S),z=k(l,{[`${l}-rtl`]:n==="rtl"},o,j,C),{children:a,maxPopoverPlacement:d="top",maxPopoverTrigger:O="hover"}=t,u=xe(a).map((f,y)=>Se(f,{key:`avatar-key-${y}`})),c=u.length;if(h&&h<c){const f=u.slice(0,h),y=u.slice(h,c);return f.push(e.createElement(ne,{key:"avatar-popover-key",content:y,trigger:O,placement:d,overlayClassName:`${l}-popover`},e.createElement(_,{style:v},`+${c-h}`))),b(e.createElement(N,{size:p},e.createElement("div",{className:z,style:t.style},f)))}return b(e.createElement(N,{size:p},e.createElement("div",{className:z,style:t.style},u)))},Oe=$e,W=_;W.Group=Oe;const Ee=W,{Search:Re}=ge,{Meta:we}=L,{Text:P}=ve,{Option:M}=A,Ie=()=>{const[t,i]=e.useState([]),[n,r]=e.useState(""),[o,j]=e.useState(1),[h,v]=e.useState(!1),[p,S]=e.useState("Time"),l=(a,d,O)=>{v(!0);const u=encodeURIComponent(a),c=`https://api.mirrorbeats.xyz/mirror/Mirror/search?page=${d}&keyword=${u}&sort=${O}`;re.get(c).then(f=>{console.log(f),i(f.data.data)}).catch(f=>{console.log(f)}).finally(()=>{v(!1)})},b=a=>{const d=a||"空投";r(d),l(d,o,p)},C=a=>{j(a),l(n||"空投",a,p)},z=a=>{S(a),l(n,o,a)};return s.jsxs("div",{style:{padding:"20px"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[s.jsx(Re,{placeholder:"输入你想要查询的Mirror关键词",onSearch:b,enterButton:!0,style:{width:"70%",marginRight:"10px"}}),s.jsxs(A,{placeholder:"选择排序方式",defaultValue:p,style:{width:120},onChange:z,children:[s.jsx(M,{value:"Relevance",children:"Relevance"}),s.jsx(M,{value:"Time",children:"Time"})]}),s.jsx(oe,{current:o,onChange:C,total:50,style:{flex:"none"}})]}),h?s.jsx(ie,{size:"large",style:{display:"block",margin:"0 auto"}}):t.length>0?s.jsx(le,{gutter:[16,16],children:t.map(a=>s.jsx(ce,{span:6,children:s.jsx("a",{href:a.link,target:"_blank",rel:"noreferrer",children:s.jsx(L,{style:{borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",width:"100%",padding:"10px",marginBottom:"20px"},hoverable:!0,children:s.jsx(we,{title:s.jsx(P,{style:{fontWeight:"bold",fontSize:"16px",whiteSpace:"normal"},children:a.title}),description:s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx(P,{strong:!0,children:"作者: "}),a.nickname,s.jsx("br",{}),s.jsx(P,{strong:!0,children:"创建时间: "}),new Date(a.creat_time*1e3).toLocaleString()]}),s.jsx("div",{style:{marginLeft:"10px"},children:s.jsx(Ee,{src:a.avatar,size:64,onError:d=>{d.target.src="https://image.theblockbeats.info/icon/mirrorLogo.jpeg"}})})]})})},a.id)})}))}):s.jsx(de,{description:"Nothing"})]})};export{Ie as default};
