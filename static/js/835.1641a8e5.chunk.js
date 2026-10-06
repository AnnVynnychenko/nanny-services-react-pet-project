"use strict";(globalThis.webpackChunknanny_services_react||=[]).push([[835],{6119(e,t,n){var r=n(5800),o=n(5662),i=n(3809);const a=(0,r.KR)(o.EC,"nannies"),{A_TO_Z:l,Z_TO_A:s,LESS_THAN_THRESHOLD:d,GREATER_THAN_THRESHOLD:c,POPULAR:h,NOT_POPULAR:g,SHOW_ALL:u}=i.W7,{NAME:p,PRICE_PER_HOUR:m,RATING:x}=i.vv;n.d(t,["E$",0,(e,t)=>{const n=[];e.forEach(e=>{n.push({...e.val(),id:e.key})});return[s,h].includes(t)&&n.reverse(),n},"EY",0,(e,t)=>(0,r.P)(a,...(()=>{switch(e){case l:return[(0,r.kT)(p),(0,r.pk)(t)];case s:return[(0,r.kT)(p),(0,r.$1)(t)];case d:return[(0,r.kT)(m),(0,r.FD)(10),(0,r.pk)(t)];case c:return[(0,r.kT)(m),(0,r.EO)(10.01),(0,r.pk)(t)];case h:return[(0,r.kT)(x),(0,r.$1)(t)];case g:return[(0,r.kT)(x),(0,r.pk)(t)];case u:return[(0,r.JK)(),(0,r.pk)(t)];default:return[(0,r.pk)(t)]}})()),"i9",0,async e=>{if(!e||!e.length)return[];try{const t=e.map(async e=>{const t=(0,r.KR)(o.EC,`nannies/${e}`),n=await(0,r.Jt)(t);return n.exists()?{...n.val(),id:n.key}:null});return(await Promise.all(t)).filter(Boolean)}catch(t){return console.error("Failed to fetch favorite nannies:",t),[]}}])},8954(e,t,n){n.d(t,{A:()=>s});var r=n(1820),o=n(1294),i=n(3095);const a=(0,r.Ay)(i._)`
  margin-top: ${(0,o.X)(16,64)};
  margin-left: auto;
  margin-right: auto;

  line-height: 1.25;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--light-color);
    border-color: var(--accent-color);
  }
`;var l=n(579);const s=function(e){let{onClick:t,...n}=e;return(0,l.jsx)(a,{type:"button",$paddingX:38,$paddingY:14,onClick:t,...n,children:"Load more"})}},7782(e,t,n){n.d(t,{A:()=>m});var r=n(8768),o=n(1820),i=n(5748),a=n(1294);const l=o.Ay.div`
  position: relative;
  width: 100%;
  max-width: ${(0,a.X)(140,226)};
`,s={control:e=>({...e,minHeight:"auto",padding:`${(0,a.X)(8,14)} ${(0,a.X)(12,18)}`,paddingRight:(0,a.X)(28,38),borderRadius:(0,a.X)(8,14),backgroundColor:"var(--accent-color)",border:"none",boxShadow:"none",outline:"none",cursor:"pointer"}),menu:e=>({...e,borderRadius:(0,a.X)(8,14),backgroundColor:"var(--white-color)",boxShadow:"var(--modal-option-shadow)",overflow:"hidden"}),menuList:e=>({...e,paddingTop:(0,a.X)(12,14),paddingBottom:(0,a.X)(12,18),paddingLeft:(0,a.X)(12,18)}),option:(e,t)=>({...e,textAlign:"left",marginBottom:(0,a.X)(8,12),paddingTop:0,paddingBottom:0,fontSize:(0,a.X)(12,18),fontWeight:400,lineHeight:1.1,backgroundColor:"transparent",color:t.isFocused?"var(--dark-text-color)":"var(--select-option-text-color)",cursor:"pointer","&:last-child":{marginBottom:0},"&:active":{backgroundColor:"transparent"}}),singleValue:e=>({...e,margin:0,padding:0,fontSize:(0,a.X)(12,18),fontWeight:500,lineHeight:1.11,color:"var(--light-color)"}),dropdownIndicator:()=>({display:"none"}),indicatorSeparator:()=>({display:"none"}),valueContainer:e=>({...e,padding:0,margin:0}),input:e=>({...e,margin:0,padding:0})},d=(0,o.Ay)(i.In)`
  position: absolute;
  right: ${(0,a.X)(12,18)};
  top: 50%;
  transform: translateY(-50%);
  width: ${(0,a.X)(12,16)};
  height: ${(0,a.X)(12,16)};
  pointer-events: none;
  color: var(--white-color);
`;var c=n(3809),h=n(579);const g=function(e){let{onFilterChange:t,activeFilterValue:n="A to Z"}=e;const o=c.Vd.find(e=>e.value===n)||c.Vd[0];return(0,h.jsxs)(l,{children:[(0,h.jsx)(r.Ay,{options:c.Vd,styles:s,isSearchable:!1,value:o,onChange:function(e){t&&t(e?e.value:"")}}),(0,h.jsx)(d,{icon:"ep:arrow-down-bold"})]})},u=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${(0,a.X)(12,32)};
`,p=o.Ay.span`
  font-size: ${(0,a.X)(12,14)};
  font-weight: 500;
  line-height: 1.2;
  color: var(--grey-text-color);
`;const m=function(e){let{onSelectFilter:t,activeFilterValue:n}=e;return(0,h.jsxs)(u,{children:[(0,h.jsx)(p,{children:"Filters"}),(0,h.jsx)(g,{onFilterChange:t,activeFilterValue:n})]})}},5479(e,t,n){n.d(t,{A:()=>qe});var r=n(1820),o=n(1294);const i=r.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: ${(0,o.X)(12,32)};
`;var a=n(5043),l=n(4800),s=n(5748),d=n(3711);const c=r.AH`
  font-size: ${(0,o.X)(12,16)};
  font-weight: 500;
  line-height: 1.5;

  color: var(--dark-text-color);
`,h=r.AH`
  width: ${(0,o.X)(36,96)};
  height: ${(0,o.X)(36,96)};
`,g=r.AH`
  width: ${(0,o.X)(18,26)};
  height: ${(0,o.X)(18,26)};
`,u=r.Ay.li`
  display: flex;
  gap: ${(0,o.X)(8,24)};

  max-width: 100%;
  padding: ${(0,o.X)(12,24)};

  border-radius: ${(0,o.X)(8,24)};
  background-color: var(--light-color);
`,p=r.Ay.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(0,o.X)(46,120)};
  height: ${(0,o.X)(46,120)};
  margin: 0;
  padding: ${(0,o.X)(3,12)};

  border: 2px solid var(--accent-transparent);
  border-radius: ${(0,o.X)(8,30)};
`,m=r.Ay.div`
  ${h};
  position: relative;
`,x=r.Ay.img`
  ${h};

  border-radius: ${(0,o.X)(4,15)};
`,f=r.Ay.div`
  position: absolute;
  top: -2px;
  right: 2px;
  box-sizing: content-box;

  width: ${(0,o.X)(4,9)};
  height: ${(0,o.X)(4,9)};

  border-radius: 50%;
  border: ${(0,o.X)(1,2)} solid var(--light-color);
  background-color: var(--online-round-color);
`,v=r.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  width: 100%;
  margin-bottom: ${(0,o.X)(4,8)};
`,y=r.Ay.h2`
  ${c}

  color: var(--grey-text-color);
`,A=r.Ay.div`
  display: flex;
  gap: ${(0,o.X)(4,16)};
  align-items: flex-start;
  flex-direction: column;

  ${d.$.tablet} {
    flex-direction: row;
    align-items: center;
  }
`,b=r.Ay.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`,$=r.Ay.div`
  position: relative;
  display: flex;
  gap: ${(0,o.X)(4,8)};
  align-items: center;

  &:not(:last-child) {
    ${d.$.tablet} {
      padding-right: ${(0,o.X)(8,16)};

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        width: 0.5px;
        height: ${(0,o.X)(8,16)};

        background-color: var(--grey-border-color);
      }
    }
  }
`,X=(0,r.Ay)(s.In)`
  width: ${(0,o.X)(10,16)};
  height: ${(0,o.X)(10,16)};

  color: var(--dark-text-color);
`,j=r.Ay.span`
  ${c}
`,w=r.Ay.div`
  ${c}
`,k=r.Ay.div`
  ${c}
`,T=r.Ay.div`
  ${c}
  color: var(--online-round-color);
`,S=r.Ay.button`
  ${g}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  line-height: 0;

  transition: var(--transition-thumb);

  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }
`,C=(0,r.Ay)(s.In)`
  ${g}

  color: var(--accent-color);
  outline: none;
`,_=(0,r.Ay)(s.In)`
  ${g}

  outline: none;
`,O=r.Ay.div`
  display: flex;
  align-items: start;
  flex-shrink: 0;
  gap: ${(0,o.X)(16,48)};

  ${d.$.tablet} {
    align-items: center;
  }
`,R=r.Ay.div`
  margin-bottom: ${(0,o.X)(12,24)};

  font-size: ${(0,o.X)(16,24)};
  font-weight: 500;
  line-height: 1.5;

  color: var(--dark-text-color);
`,E=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  gap: ${(0,o.X)(4,8)};

  margin-bottom: ${(0,o.X)(8,24)};
`,H=r.Ay.p`
  ${e=>{let{$showDetails:t}=e;return t?r.AH`
          padding-bottom: ${(0,o.X)(8,24)};
        `:r.AH`
          margin-bottom: ${(0,o.X)(8,14)};
        `}}

  font-size: ${(0,o.X)(12,16)};
  line-height: 1.25;

  color: var(--grey-text-color-transp);
`,N=r.Ay.button`
  ${c}

  align-self: flex-start;
  text-align: left;
  text-decoration: underline;
  outline: none;

  transition:
    color var(--transition-thumb),
    text-decoration var(--transition-thumb),
    transform var(--transition-thumb);

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
  }
`,z=["birthday","experience","kids_age","characters","education"],I=r.AH`
  font-size: ${(0,o.X)(12,16)};
  font-weight: 500;
  line-height: 1.5;
`,L=r.Ay.span`
  display: flex;
  align-items: flex-start;
  gap: ${(0,o.X)(2,4)};
  padding: 8px ${(0,o.X)(8,16)};

  border-radius: ${(0,o.X)(8,24)};
  background-color: var(--background-color);
`,F=r.Ay.span`
  ${I};

  letter-spacing: -0.01em;

  color: var(--grey-text-color);
`,P=r.Ay.span`
  ${I};

  letter-spacing: -0.01em;

  color: var(--dark-text-color);
`;var B=n(579);const Y=function(e){let{dataObj:t={}}=e;return Array.from(new Set([...z,...Object.keys(t)])).map(e=>{const n=t[e];if(void 0===n||null===n||""===n||Array.isArray(n)&&0===n.length)return null;const r="birthday"===e?"Age":e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase());let o=n;return"birthday"===e?o=(e=>{if(!e)return null;const t=new Date(e);if(isNaN(t.getTime()))return null;const n=new Date,r=n.getFullYear()-t.getFullYear(),o=n.getMonth()-t.getMonth();return o<0||0===o&&n.getDate()<t.getDate()?r-1:r<0?0:r})(n):Array.isArray(n)&&(o=n.map(e=>"string"===typeof e?e.charAt(0).toUpperCase()+e.slice(1):e).join(", ")),(0,B.jsxs)(L,{children:[(0,B.jsxs)(F,{children:[r,":"]}),(0,B.jsx)(P,{children:o})]},e)})},q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Anonymous";return"string"===typeof e&&e.trim().length>0?e.trim().charAt(0).toUpperCase():"A"},M=(0,r.Ay)(s.In).attrs({icon:"ant-design:star-filled"})`
  width: ${(0,o.X)(10,16)};
  height: ${(0,o.X)(10,16)};

  color: var(--gold-color);
`;var V=n(3095);const D=r.Ay.div`
  max-width: ${(0,o.X)(264,1184)};
  padding: ${(0,o.X)(8,24)};

  border-radius: ${(0,o.X)(8,24)};
  background-color: var(--light-color);
`,U=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${(0,o.X)(8,16)};

  margin-bottom: ${(0,o.X)(12,25)};

  &:last-of-type {
    margin-bottom: ${(0,o.X)(12,48)};
  }
`,Z=r.Ay.div`
  display: flex;
  gap: ${(0,o.X)(4,12)};
`,W=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,G=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${(0,o.X)(26,44)};
  height: ${(0,o.X)(26,44)};

  font-size: ${(0,o.X)(16,20)};
  font-weight: 500;
  line-height: 1;

  color: var(--accent-color);
  border-radius: 50%;
  background-color: var(--accent-transparent);
`,J=r.Ay.span`
  font-size: ${(0,o.X)(12,16)};
  font-weight: 500;
  line-height: 1.25;

  color: var(--dark-text-color);
`,K=r.Ay.div`
  display: flex;
  align-items: center;
  gap: ${(0,o.X)(4,8)};

  font-size: ${(0,o.X)(12,14)};
  font-weight: 500;
  line-height: 1.2;

  color: var(--dark-text-color);
`,Q=r.Ay.p`
  font-size: ${(0,o.X)(12,16)};
  line-height: 1.25;

  color: var(--grey-text-color-transp);
`,ee=(0,r.Ay)(V._)`
  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--light-color);
    border-color: var(--accent-color);
  }
`;var te=n(7950),ne=n(4858),re=n(8403),oe=n(3768),ie=n(1681),ae=n(5494),le=n(6943),se=n(9510),de=n(8398);const ce=(0,r.Ay)(se.A)`
  max-width: calc(100% - 36px);

  ${d.$.tablet} {
    max-width: 600px;
  }
`,he=r.Ay.div`
  display: flex;
  gap: ${(0,o.X)(8,14)};
`,ge=r.Ay.img`
  width: ${(0,o.X)(32,44)};
  height: ${(0,o.X)(32,44)};

  border-radius: ${(0,o.X)(8,15)};
`,ue=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: ${(0,o.X)(12,40)};
`,pe=r.Ay.span`
  font-size: ${(0,o.X)(10,12)};
  font-weight: 500;
  line-height: 1.3;

  color: var(--grey-text-color);
`,me=r.Ay.h3`
  font-size: ${(0,o.X)(12,16)};
  font-weight: 500;
  line-height: 1.5;

  color: var(--dark-text-color);
`,xe=r.Ay.form`
  display: flex;
  flex-direction: column;
  gap: ${(0,o.X)(8,16)};
`,fe=r.Ay.div`
  ${de.h0}
`,ve=r.Ay.div`
  display: flex;
  flex-direction: row;
  gap: ${(0,o.X)(4,8)};

  width: 100%;

  & > ${fe} {
    flex: 1 1 50%;
    width: 50%;
    min-width: 0;
  }
`,ye=r.Ay.p`
  ${de.b}
`,Ae=r.Ay.input`
  ${de.XF};
`,be=r.Ay.textarea`
  ${de.XF};
  resize: none;
`,$e=(0,r.Ay)(V._)`
  ${de.mn}
  margin-top: ${(0,o.X)(8,24)};

  line-height: 1.25;
`;var Xe=n(8768);const je=r.Ay.div`
  position: relative;
  width: 100%;
`,we=(0,r.Ay)(s.In)`
  position: absolute;
  right: ${(0,o.X)(8,18)};
  top: 50%;
  transform: translateY(-50%);

  width: ${(0,o.X)(16,20)};
  height: ${(0,o.X)(16,20)};

  pointer-events: none;
  color: var(--dark-text-color);
`,ke={container:e=>({...e,width:"100%"}),control:e=>({...e,minHeight:"auto",height:"auto",paddingTop:(0,o.X)(6,16),paddingBottom:(0,o.X)(6,16),paddingLeft:(0,o.X)(12,18),paddingRight:(0,o.X)(30,40),boxSizing:"border-box",borderRadius:(0,o.X)(8,12),lineHeight:1,backgroundColor:"transparent",boxShadow:"none",outline:"none",borderColor:"var(--border-color)","&:hover, &:focus":{borderColor:"var(--accent-color)"}}),menu:e=>({...e,width:"65.1%",right:0,left:"auto",borderRadius:(0,o.X)(8,12),backgroundColor:"var(--white-color)",boxShadow:"var(--modal-option-shadow)",overflow:"hidden"}),menuList:e=>({...e,paddingTop:0,paddingBottom:(0,o.X)(12,16)}),valueContainer:e=>({...e,padding:0,paddingBottom:(0,o.X)(0,1),minHeight:0,margin:0}),input:e=>({...e,margin:0,padding:0}),placeholder:e=>({...e,fontSize:(0,o.X)(12,16),color:"var(--dark-text-color)",margin:0}),option:(e,t)=>({...e,textAlign:"center",marginBottom:"4px",paddingTop:0,paddingBottom:0,fontSize:(0,o.X)(10,16),fontWeight:500,lineHeight:1.25,backgroundColor:"transparent",color:t.isFocused?"var(--dark-text-color)":"var(--modal-option-text-color)",cursor:"pointer","&:last-child":{marginBottom:0},"&:active":{backgroundColor:"transparent"}}),singleValue:e=>({...e,fontSize:(0,o.X)(12,16),fontWeight:500,color:"var(--dark-text-color)",margin:0}),dropdownIndicator:()=>({display:"none"}),indicatorSeparator:()=>({display:"none"})};var Te=n(2234);const Se=r.Ay.p`
  text-align: center;

  margin-bottom: ${(0,o.X)(8,16)};
  padding-top: ${(0,o.X)(8,16)};
  padding-left: ${(0,o.X)(4,8)};
  padding-right: ${(0,o.X)(4,8)};

  font-size: ${(0,o.X)(10,16)};
  font-weight: 500;
  line-height: 1.5;

  color: var(--dark-text-color);
`;const Ce=function(e){return(0,B.jsxs)(Te.c.MenuList,{...e,children:[(0,B.jsx)(Se,{children:"Meeting time"}),e.children]})},_e=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(0,o.X)(8,12)};

  width: 100%;
  padding: 2px 0;
`,Oe=r.Ay.span`
  display: inline-block;
  text-align: center;
  font-variant-numeric: tabular-nums;

  min-width: 2ch;
`,Re=r.Ay.span`
  display: inline-block;
  text-align: center;
  user-select: none;
`;const Ee=function(e){const t=e.label?e.label.split(":"):[],[n,r]=t;return(0,B.jsx)(Te.c.Option,{...e,children:(0,B.jsxs)(_e,{children:[(0,B.jsx)(Oe,{children:n}),(0,B.jsx)(Re,{children:":"}),(0,B.jsx)(Oe,{children:r})]})})},He=[{value:"09:00",label:"09:00"},{value:"09:30",label:"09:30"},{value:"10:00",label:"10:00"},{value:"10:30",label:"10:30"}];const Ne=function(e){let{control:t}=e;return(0,B.jsxs)(je,{children:[(0,B.jsx)(ne.xI,{name:"meetingTime",control:t,render:e=>{let{field:t}=e;return(0,B.jsx)(Xe.Ay,{...t,options:He,placeholder:"00:00",styles:ke,menuPortalTarget:"undefined"!==typeof document?document.body:null,components:{MenuList:Ce,Option:Ee},value:He.find(e=>e.value===t.value)||null,onChange:e=>t.onChange(e?e.value:"")})}}),(0,B.jsx)(we,{icon:"tabler:clock-hour-4"})]})};var ze=n(6044);const Ie=(0,ze.Yj)().transform(e=>"string"===typeof e?e.trim():e),Le={modalRootId:"modal-root",title:"Make an appointment with a babysitter",explanation:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.",nannyTitle:"Your nanny",submitText:"Send",submittingText:"Sending...",schema:(0,ze.Ik)().shape({address:Ie.required("Address is required"),telephone:Ie.required("Telephone is required").matches(/^\+?[0-9\s-]{7,18}$/,"Format: +420 123 456 789"),childAge:(0,ze.ai)().required("Child age is required").typeError("Child age must be a number").min(0,"Age cannot be less than 0").max(18,"Age cannot be greater than 18"),meetingTime:Ie.required("Please, choose the meeting time"),email:Ie.required("Email is required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email format (example: user@gmail.com)"),parentName:Ie.required("Father's or mother's name is required"),comment:Ie}),defaultValues:{address:"",telephone:"",childAge:"",meetingTime:"",email:"",parentName:"",comment:""},paddingX:18,paddingY:16};const Fe=function(e){let{nanny:t,onClose:n}=e;const{modalRootId:r,title:o,explanation:i,nannyTitle:a,submitText:l,submittingText:s,schema:d,defaultValues:c,paddingX:h,paddingY:g}=Le,u=document.getElementById(r),{avatar_url:p="",name:m="Nanny",id:x=""}=t||{},{register:f,handleSubmit:v,formState:{errors:y,isSubmitting:A},reset:b,control:$}=(0,ne.mN)({resolver:(0,re.t)(d),defaultValues:c});return(0,ae.K)(),(0,le.f)(n),u?(0,te.createPortal)((0,B.jsx)(ie.A,{onClose:n,children:(0,B.jsxs)(ce,{title:o,explanation:i,onClose:n,children:[(0,B.jsxs)(he,{children:[(0,B.jsx)(ge,{src:p,alt:m}),(0,B.jsxs)(ue,{children:[(0,B.jsx)(pe,{children:a}),(0,B.jsx)(me,{children:m})]})]}),(0,B.jsxs)(xe,{onSubmit:v(function(e){const t=e.telephone.replace(/[\s-]/g,""),r={...e,telephone:t,childAge:Number(e.childAge),nannyId:x,nannyName:m};console.log("Sending data to backend:",r),oe.Ay.success("Appointment successfully booked!"),b(),null===n||void 0===n||n()}),children:[(0,B.jsxs)(ve,{children:[(0,B.jsxs)(fe,{children:[(0,B.jsx)(Ae,{...f("address"),placeholder:"Address",autoComplete:"street-address"}),y.address&&(0,B.jsx)(ye,{children:y.address.message})]}),(0,B.jsxs)(fe,{children:[(0,B.jsx)(Ae,{type:"tel",...f("telephone"),placeholder:"+420",autoComplete:"tel"}),y.telephone&&(0,B.jsx)(ye,{children:y.telephone.message})]})]}),(0,B.jsxs)(ve,{children:[(0,B.jsxs)(fe,{children:[(0,B.jsx)(Ae,{type:"number",...f("childAge"),placeholder:"Child's age"}),y.childAge&&(0,B.jsx)(ye,{children:y.childAge.message})]}),(0,B.jsxs)(fe,{children:[(0,B.jsx)(Ne,{control:$}),y.meetingTime&&(0,B.jsx)(ye,{children:y.meetingTime.message})]})]}),(0,B.jsxs)(fe,{children:[(0,B.jsx)(Ae,{...f("email"),placeholder:"Email",autoComplete:"email"}),y.email&&(0,B.jsx)(ye,{children:y.email.message})]}),(0,B.jsxs)(fe,{children:[(0,B.jsx)(Ae,{...f("parentName"),placeholder:"Father's or mother's name",autoComplete:"name"}),y.parentName&&(0,B.jsx)(ye,{children:y.parentName.message})]}),(0,B.jsx)(be,{...f("comment"),placeholder:"Comment",rows:"3"}),(0,B.jsx)($e,{type:"submit",$paddingX:h,$paddingY:g,disabled:A,children:A?s:l})]})]})}),u):null};const Pe=function(e){let{nanny:t}=e;const{isOpen:n,toggleModal:r}=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const[t,n]=(0,a.useState)(e);return{isOpen:t,toggleModal:()=>{n(e=>!e)}}}(!1),o=(null===t||void 0===t?void 0:t.reviews)||[];return(0,B.jsxs)(D,{children:[o.map((e,t)=>{let{reviewer:n,rating:r,comment:o}=e;return(0,B.jsxs)(U,{children:[(0,B.jsxs)(Z,{children:[(0,B.jsx)(G,{children:q(n)}),(0,B.jsxs)(W,{children:[(0,B.jsx)(J,{children:n}),(0,B.jsxs)(K,{children:[(0,B.jsx)(M,{}),Number(r).toFixed(1)]})]})]}),(0,B.jsx)(Q,{children:o})]},`${n}-${t}`)}),(0,B.jsx)(ee,{type:"button",$paddingX:25,$paddingY:12,onClick:r,children:"Make an appointment"}),n&&(0,B.jsx)(Fe,{onClose:r,nanny:t})]})};var Be=n(342);const Ye=function(e){let{nanny:t={},isOnline:n}=e;const{user:r,isLoggedIn:o}=(0,Be.A)(),i=null===r||void 0===r?void 0:r.uid,[s,d]=(0,a.useState)(!1),[c,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{null!==t&&void 0!==t&&t.id&&i?d((0,l.BA)(t.id,i)):d(!1)},[t,i]);const{avatar_url:g,name:z,location:I,rating:L,price_per_hour:F,id:P,about:q,reviews:V,...D}=t;return(0,B.jsxs)(u,{children:[(0,B.jsx)(p,{children:(0,B.jsxs)(m,{children:[(0,B.jsx)(x,{src:g,alt:z}),n&&(0,B.jsx)(f,{})]})}),(0,B.jsxs)(b,{children:[(0,B.jsxs)(v,{children:[(0,B.jsx)(y,{children:"Nanny"}),(0,B.jsxs)(O,{children:[(0,B.jsxs)(A,{children:[(0,B.jsxs)($,{children:[(0,B.jsx)(X,{icon:"lucide:map-pin"}),(0,B.jsx)(j,{children:I})]}),(0,B.jsxs)($,{children:[(0,B.jsx)(M,{}),(0,B.jsx)(w,{children:"Rating: "}),(0,B.jsx)(k,{children:L})]}),(0,B.jsxs)($,{children:[(0,B.jsx)(w,{children:"Price / 1 hour: "}),(0,B.jsxs)(T,{children:[F,"$"]})]})]}),(0,B.jsx)(S,{type:"button",onClick:function(){if(!o)return void oe.Ay.error("This feature is available only for authorized users.");const e=(0,l.dw)(t,i,t.name);d(e)},"aria-label":s?"Remove from favorites":"Add to favorites",children:s?(0,B.jsx)(C,{icon:"boxicons:heart-filled"}):(0,B.jsx)(_,{icon:"boxicons:heart"})})]})]}),(0,B.jsx)(R,{children:z}),(0,B.jsx)(E,{children:(0,B.jsx)(Y,{dataObj:D})}),(0,B.jsx)(H,{$showDetails:c,children:q}),!c&&(0,B.jsx)(N,{onClick:function(){h(e=>!e)},children:"Read more"}),c&&(0,B.jsx)(Pe,{nanny:t})]})]})};const qe=function(e){let{nannies:t=[],isOnline:n}=e;return t.length?(0,B.jsx)(i,{children:t.map(e=>(0,B.jsx)(Ye,{nanny:e,isOnline:n},e.id))}):(0,B.jsx)("p",{children:"No nannies found."})}},3809(e,t,n){const r={A_TO_Z:"A to Z",Z_TO_A:"Z to A",LESS_THAN_THRESHOLD:"Less than 10$",GREATER_THAN_THRESHOLD:"Greater than 10$",POPULAR:"Popular",NOT_POPULAR:"Not popular",SHOW_ALL:"Show all"},o=Object.values(r).map(e=>({value:e,label:e}));n.d(t,["Vd",0,o,"W7",0,r,"vv",0,{NAME:"name",PRICE_PER_HOUR:"price_per_hour",RATING:"rating"}])},4800(e,t,n){var r=n(3768);const o=e=>e?`favorites_${e}`:null,i=e=>{const t=o(e);if(!t)return[];try{const e=localStorage.getItem(t);if(e)return JSON.parse(e)}catch(n){console.error("Failed to parse favorites from localStorage:",n)}return[]};n.d(t,["BA",0,(e,t)=>{if(!e||!t)return!1;return i(t).includes(e)},"dw",0,function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Nanny";if(!t)return r.Ay.error("This feature is available only for authorized users."),!1;if(null===e||void 0===e||!e.id)return!1;const a=o(t),l=i(t);let s=!1,d=[];return l.findIndex(t=>t===e.id)>=0?(d=l.filter(t=>t!==e.id),d.length>0?localStorage.setItem(a,JSON.stringify(d)):localStorage.removeItem(a),s=!1,r.Ay.success(`${n} successfully removed from favorites!`)):(d=[...l,e.id],localStorage.setItem(a,JSON.stringify(d)),s=!0,r.Ay.success(`${n} successfully added to favorites!`)),window.dispatchEvent(new Event("favoritesUpdated")),s},"qM",0,i])}}]);
//# sourceMappingURL=835.1641a8e5.chunk.js.map