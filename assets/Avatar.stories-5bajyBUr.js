import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,t as n,w as r}from"./iframe-PJti-vyW.js";import{n as i,t as a}from"./Avatar-CipOIRX7.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{t(),i(),o=n(),s={title:`Components/Avatar`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:(0,o.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`large`,`default`,`small`],description:`גודל האווטאר`},shape:{control:`radio`,options:[`circle`,`square`],description:`צורת האווטאר`},src:{control:`text`,description:`כתובת תמונה`},alt:{control:`text`,description:`טקסט חלופי לתמונה`},children:{control:`text`,description:`אות/ים לאווטאר טקסט`}},args:{size:`default`,shape:`circle`}},c={},l={args:{children:`ד`}},u={args:{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`,alt:`אווטאר משתמש`}},d={args:{shape:`square`,children:`אב`}},f={args:{size:`large`,children:`ד`}},p={args:{size:`small`,children:`ד`}},m={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,o.jsx)(r,{size:`large`,children:`ג`}),(0,o.jsx)(r,{size:`default`,children:`ד`}),(0,o.jsx)(r,{size:`small`,children:`מ`})]}),parameters:{controls:{disable:!0}}},h={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,o.jsx)(r,{shape:`circle`,size:`large`,children:`ע`}),(0,o.jsx)(r,{shape:`square`,size:`large`,children:`ע`})]}),parameters:{controls:{disable:!0}}},g={render:()=>(0,o.jsxs)(a,{maxCount:3,size:`default`,shape:`circle`,children:[(0,o.jsx)(r,{children:`ד`}),(0,o.jsx)(r,{children:`מ`}),(0,o.jsx)(r,{children:`ע`}),(0,o.jsx)(r,{children:`ר`}),(0,o.jsx)(r,{children:`ה`})]}),parameters:{controls:{disable:!0}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'ד'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    alt: 'אווטאר משתמש'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    children: 'אב'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'ד'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'ד'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Avatar size="large">ג</Avatar>
      <Avatar size="default">ד</Avatar>
      <Avatar size="small">מ</Avatar>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Avatar shape="circle" size="large">ע</Avatar>
      <Avatar shape="square" size="large">ע</Avatar>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup maxCount={3} size="default" shape="circle">
      <Avatar>ד</Avatar>
      <Avatar>מ</Avatar>
      <Avatar>ע</Avatar>
      <Avatar>ר</Avatar>
      <Avatar>ה</Avatar>
    </AvatarGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithText`,`WithImage`,`Square`,`Large`,`Small`,`AllSizes`,`AllShapes`,`Group`]}))();export{h as AllShapes,m as AllSizes,c as Default,g as Group,f as Large,p as Small,d as Square,u as WithImage,l as WithText,_ as __namedExportsOrder,s as default};