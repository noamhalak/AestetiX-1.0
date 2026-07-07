import{i as e}from"./preload-helper-Cs4UwXAW.js";import{D as t,at as n,n as r,t as i}from"./iframe-PJti-vyW.js";import{n as a,t as o}from"./Button-D_Y_Wmgk.js";var s=e((()=>{r(),t.PRESENTED_IMAGE_DEFAULT,t.PRESENTED_IMAGE_SIMPLE})),c,l,u,d,f,p,m,h,g;e((()=>{n(),s(),a(),c=i(),l={title:`Components/Empty`,component:t,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,c.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,minWidth:300},children:(0,c.jsx)(e,{})})],argTypes:{image:{control:`select`,options:[`default`,`simple`],description:`סוג האיור`},description:{control:`text`,description:`טקסט תיאור`}},args:{image:`default`,description:`אין נתונים להצגה`}},u={},d={args:{image:`simple`,description:`אין פריטים`}},f={args:{description:`לא נמצאו תוצאות`,children:(0,c.jsx)(o,{type:`primary`,children:`צור פריט חדש`})}},p={args:{description:`הרשימה ריקה כרגע. הוסף פריטים כדי להמשיך.`}},m={args:{description:!1}},h={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`,justifyContent:`center`},children:[(0,c.jsx)(t,{description:`ברירת מחדל`}),(0,c.jsx)(t,{image:`simple`,description:`פשוט`}),(0,c.jsx)(t,{description:`עם פעולה`,children:(0,c.jsx)(o,{type:`primary`,size:`small`,children:`הוסף`})})]}),parameters:{controls:{disable:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    image: 'simple',
    description: 'אין פריטים'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'לא נמצאו תוצאות',
    children: <Button type="primary">צור פריט חדש</Button>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'הרשימה ריקה כרגע. הוסף פריטים כדי להמשיך.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    description: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      <Empty description="ברירת מחדל" />
      <Empty image="simple" description="פשוט" />
      <Empty description="עם פעולה">
        <Button type="primary" size="small">הוסף</Button>
      </Empty>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SimpleImage`,`WithAction`,`CustomDescription`,`NoDescription`,`AllVariants`]}))();export{h as AllVariants,p as CustomDescription,u as Default,m as NoDescription,d as SimpleImage,f as WithAction,g as __namedExportsOrder,l as default};