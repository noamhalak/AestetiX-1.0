import{i as e}from"./preload-helper-Cs4UwXAW.js";import{C as t,at as n,n as r,t as i,w as a}from"./iframe-COCI6Ql1.js";import{n as o}from"./Avatar-oStZVijP.js";var s=e((()=>{r(),t.Ribbon})),c,l,u,d,f,p,m,h,g,_;e((()=>{n(),s(),o(),c=i(),l={title:`Components/Badge`,component:t,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,c.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,padding:16},children:(0,c.jsx)(e,{})})],argTypes:{count:{control:`number`,description:`מספר לתצוגה`},dot:{control:`boolean`,description:`נקודה קטנה במקום מספר`},status:{control:`select`,options:[`success`,`processing`,`default`,`error`,`warning`],description:`סטטוס (לעמידה עצמאית)`},showZero:{control:`boolean`,description:`הצג גם כשהערך 0`},overflowCount:{control:`number`,description:`ספרה מקסימלית לפני +`},color:{control:`color`,description:`צבע מותאם`},text:{control:`text`,description:`טקסט לצד הנקודה (במצב סטטוס)`}},args:{count:5}},u={render:e=>(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{shape:`square`,children:`פ`})})},d={render:()=>(0,c.jsx)(t,{count:12,children:(0,c.jsx)(a,{shape:`square`,children:`פ`})})},f={render:()=>(0,c.jsx)(t,{count:120,overflowCount:99,children:(0,c.jsx)(a,{shape:`square`,children:`פ`})})},p={render:()=>(0,c.jsx)(t,{dot:!0,children:(0,c.jsx)(a,{shape:`square`,children:`פ`})})},m={render:()=>(0,c.jsx)(t,{count:8})},h={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,c.jsx)(t,{status:`success`,text:`פעיל`}),(0,c.jsx)(t,{status:`processing`,text:`מעבד...`}),(0,c.jsx)(t,{status:`default`,text:`לא פעיל`}),(0,c.jsx)(t,{status:`error`,text:`שגיאה`}),(0,c.jsx)(t,{status:`warning`,text:`אזהרה`})]}),parameters:{controls:{disable:!0}}},g={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,c.jsx)(t,{count:5,children:(0,c.jsx)(a,{shape:`square`,children:`ה`})}),(0,c.jsx)(t,{count:0,showZero:!0,children:(0,c.jsx)(a,{shape:`square`,children:`ה`})}),(0,c.jsx)(t,{dot:!0,children:(0,c.jsx)(a,{shape:`square`,children:`ה`})}),(0,c.jsx)(t,{count:100,overflowCount:99,children:(0,c.jsx)(a,{shape:`square`,children:`ה`})})]}),parameters:{controls:{disable:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      <Avatar shape="square">פ</Avatar>
    </Badge>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Badge count={12}>
      <Avatar shape="square">פ</Avatar>
    </Badge>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Badge count={120} overflowCount={99}>
      <Avatar shape="square">פ</Avatar>
    </Badge>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Badge dot>
      <Avatar shape="square">פ</Avatar>
    </Badge>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Badge count={8} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Badge status="success" text="פעיל" />
      <Badge status="processing" text="מעבד..." />
      <Badge status="default" text="לא פעיל" />
      <Badge status="error" text="שגיאה" />
      <Badge status="warning" text="אזהרה" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Badge count={5}><Avatar shape="square">ה</Avatar></Badge>
      <Badge count={0} showZero><Avatar shape="square">ה</Avatar></Badge>
      <Badge dot><Avatar shape="square">ה</Avatar></Badge>
      <Badge count={100} overflowCount={99}><Avatar shape="square">ה</Avatar></Badge>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithCount`,`Overflow`,`DotBadge`,`StandaloneCount`,`StatusBadges`,`AllVariants`]}))();export{g as AllVariants,u as Default,p as DotBadge,f as Overflow,m as StandaloneCount,h as StatusBadges,d as WithCount,_ as __namedExportsOrder,l as default};