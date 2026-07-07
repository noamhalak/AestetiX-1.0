import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,c as n,n as r,t as i}from"./iframe-COCI6Ql1.js";var a=e((()=>{r()})),o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),a(),o=i(),s={title:`Components/Progress`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:400},children:(0,o.jsx)(e,{})})],argTypes:{percent:{control:{type:`range`,min:0,max:100,step:1},description:`אחוז השלמה`},type:{control:`select`,options:[`line`,`circle`,`dashboard`],description:`סוג`},status:{control:`select`,options:[`normal`,`active`,`success`,`exception`],description:`סטטוס`},showInfo:{control:`boolean`,description:`הצג מידע`},size:{control:`radio`,options:[`default`,`small`],description:`גודל (עבור line)`},strokeColor:{control:`color`,description:`צבע הקו`},trailColor:{control:`color`,description:`צבע הרקע`},width:{control:`number`,description:`רוחב/גודל (עבור circle/dashboard)`}},args:{percent:60,type:`line`,showInfo:!0,size:`default`}},c={},l={args:{percent:70,status:`active`}},u={args:{percent:100}},d={args:{percent:40,status:`exception`}},f={args:{size:`small`,percent:50}},p={args:{type:`circle`,percent:75,width:120}},m={args:{type:`circle`,percent:100,width:120}},h={args:{type:`dashboard`,percent:65,width:120}},g={args:{showInfo:!1,percent:45}},_={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,o.jsx)(n,{percent:30,status:`normal`}),(0,o.jsx)(n,{percent:50,status:`active`}),(0,o.jsx)(n,{percent:100,status:`success`}),(0,o.jsx)(n,{percent:70,status:`exception`})]}),parameters:{controls:{disable:!0}}},v={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,o.jsx)(n,{type:`circle`,percent:65,width:100}),(0,o.jsx)(n,{type:`circle`,percent:100,width:100}),(0,o.jsx)(n,{type:`circle`,percent:40,status:`exception`,width:100}),(0,o.jsx)(n,{type:`dashboard`,percent:75,width:100})]}),parameters:{controls:{disable:!0}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 70,
    status: 'active'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 100
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 40,
    status: 'exception'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    percent: 50
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'circle',
    percent: 75,
    width: 120
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'circle',
    percent: 100,
    width: 120
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'dashboard',
    percent: 65,
    width: 120
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    showInfo: false,
    percent: 45
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Progress percent={30} status="normal" />
      <Progress percent={50} status="active" />
      <Progress percent={100} status="success" />
      <Progress percent={70} status="exception" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <Progress type="circle" percent={65} width={100} />
      <Progress type="circle" percent={100} width={100} />
      <Progress type="circle" percent={40} status="exception" width={100} />
      <Progress type="dashboard" percent={75} width={100} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Active`,`Success`,`Exception`,`Small`,`Circle`,`CircleSuccess`,`Dashboard`,`NoInfo`,`AllLineStatuses`,`AllCircleTypes`]}))();export{l as Active,v as AllCircleTypes,_ as AllLineStatuses,p as Circle,m as CircleSuccess,h as Dashboard,c as Default,d as Exception,g as NoInfo,f as Small,u as Success,y as __namedExportsOrder,s as default};