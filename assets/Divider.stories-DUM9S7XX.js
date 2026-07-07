import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,g as n,t as r}from"./iframe-COCI6Ql1.js";import{t as i}from"./Divider-KPNAvNi7.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{t(),i(),a=r(),o={title:`Components/Divider`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,a.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:600},children:(0,a.jsx)(e,{})})],argTypes:{type:{control:`radio`,options:[`horizontal`,`vertical`],description:`כיוון המפריד`},orientation:{control:`select`,options:[`left`,`center`,`right`],description:`מיקום הטקסט`},dashed:{control:`boolean`,description:`קו מקווקו`},plain:{control:`boolean`,description:`טקסט רגיל (ללא עיצוב כותרת)`},children:{control:`text`,description:`טקסט במרכז המפריד`}},args:{type:`horizontal`,orientation:`center`,dashed:!1,plain:!1}},s={},c={args:{children:`או`}},l={args:{dashed:!0}},u={args:{dashed:!0,children:`הגדרות נוספות`}},d={args:{children:`כותרת שמאלית`,orientation:`left`}},f={args:{children:`כותרת ימנית`,orientation:`right`}},p={args:{children:`טקסט רגיל`,plain:!0}},m={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0},children:[(0,a.jsx)(`span`,{children:`טקסט ראשון`}),(0,a.jsx)(n,{type:`vertical`}),(0,a.jsx)(`span`,{children:`טקסט שני`}),(0,a.jsx)(n,{type:`vertical`}),(0,a.jsx)(`span`,{children:`טקסט שלישי`})]}),parameters:{controls:{disable:!0}}},h={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:[(0,a.jsx)(n,{orientation:`right`,children:`ימין`}),(0,a.jsx)(n,{orientation:`center`,children:`מרכז`}),(0,a.jsx)(n,{orientation:`left`,children:`שמאל`})]}),parameters:{controls:{disable:!0}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'או'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dashed: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dashed: true,
    children: 'הגדרות נוספות'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'כותרת שמאלית',
    orientation: 'left'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'כותרת ימנית',
    orientation: 'right'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'טקסט רגיל',
    plain: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 0
  }}>
      <span>טקסט ראשון</span>
      <Divider type="vertical" />
      <span>טקסט שני</span>
      <Divider type="vertical" />
      <span>טקסט שלישי</span>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}>
      <Divider orientation="right">ימין</Divider>
      <Divider orientation="center">מרכז</Divider>
      <Divider orientation="left">שמאל</Divider>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithText`,`Dashed`,`DashedWithText`,`TextLeft`,`TextRight`,`Plain`,`Vertical`,`AllOrientations`]}))();export{h as AllOrientations,l as Dashed,u as DashedWithText,s as Default,p as Plain,d as TextLeft,f as TextRight,m as Vertical,c as WithText,g as __namedExportsOrder,o as default};