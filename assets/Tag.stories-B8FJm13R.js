import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{at as n,t as r}from"./iframe-PJti-vyW.js";import{n as i,r as a,t as o}from"./Tag-DqayUrIG.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{s=t(n()),a(),c=r(),l={title:`Components/Tag`,component:o,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,c.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`},children:(0,c.jsx)(e,{})})],argTypes:{color:{control:`select`,options:[`default`,`processing`,`success`,`warning`,`error`,`red`,`volcano`,`orange`,`gold`,`yellow`,`lime`,`green`,`cyan`,`blue`,`geekblue`,`purple`,`magenta`],description:`צבע התגית`},closable:{control:`boolean`,description:`ניתן לסגירה`},bordered:{control:`boolean`,description:`עם גבול`},children:{control:`text`,description:`תוכן`}},args:{color:`default`,closable:!1,bordered:!0,children:`תגית`}},u={},d={args:{color:`processing`,children:`מעבד`}},f={args:{color:`success`,children:`הצליח`}},p={args:{color:`warning`,children:`אזהרה`}},m={args:{color:`error`,children:`שגיאה`}},h={args:{color:`blue`,closable:!0,children:`לחץ X לסגירה`}},g={args:{bordered:!1,color:`processing`,children:`ללא גבול`}},_={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,c.jsx)(o,{color:`processing`,children:`מעבד`}),(0,c.jsx)(o,{color:`success`,children:`הצליח`}),(0,c.jsx)(o,{color:`warning`,children:`אזהרה`}),(0,c.jsx)(o,{color:`error`,children:`שגיאה`}),(0,c.jsx)(o,{color:`default`,children:`ברירת מחדל`})]}),parameters:{controls:{disable:!0}}},v={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[`red`,`volcano`,`orange`,`gold`,`yellow`,`lime`,`green`,`cyan`,`blue`,`geekblue`,`purple`,`magenta`].map(e=>(0,c.jsx)(o,{color:e,children:e},e))}),parameters:{controls:{disable:!0}}},y={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,c.jsx)(i,{status:`success`,text:`פעיל`}),(0,c.jsx)(i,{status:`processing`,text:`מעבד...`}),(0,c.jsx)(i,{status:`warning`,text:`אזהרה`}),(0,c.jsx)(i,{status:`error`,text:`שגיאה`}),(0,c.jsx)(i,{status:`default`,text:`לא פעיל`})]}),parameters:{controls:{disable:!0}}},b={render:()=>{let[e,t]=s.useState([`React`,`TypeScript`,`Storybook`,`Vite`,`Tailwind`]);return(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:e.map(e=>(0,c.jsx)(o,{color:`blue`,closable:!0,onClose:()=>t(t=>t.filter(t=>t!==e)),children:e},e))})},parameters:{controls:{disable:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'processing',
    children: 'מעבד'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success',
    children: 'הצליח'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    children: 'אזהרה'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'error',
    children: 'שגיאה'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    closable: true,
    children: 'לחץ X לסגירה'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    color: 'processing',
    children: 'ללא גבול'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Tag color="processing">מעבד</Tag>
      <Tag color="success">הצליח</Tag>
      <Tag color="warning">אזהרה</Tag>
      <Tag color="error">שגיאה</Tag>
      <Tag color="default">ברירת מחדל</Tag>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      {(['red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', 'magenta'] as const).map(color => <Tag key={color} color={color}>{color}</Tag>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <TagStatus status="success" text="פעיל" />
      <TagStatus status="processing" text="מעבד..." />
      <TagStatus status="warning" text="אזהרה" />
      <TagStatus status="error" text="שגיאה" />
      <TagStatus status="default" text="לא פעיל" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = React.useState(['React', 'TypeScript', 'Storybook', 'Vite', 'Tailwind']);
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {tags.map(tag => <Tag key={tag} color="blue" closable onClose={() => setTags(prev => prev.filter(t => t !== tag))}>
            {tag}
          </Tag>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Processing`,`Success`,`Warning`,`Error`,`Closable`,`NoBorder`,`AllStatusColors`,`AllPaletteColors`,`StatusTags`,`ClosableGroup`]}))();export{v as AllPaletteColors,_ as AllStatusColors,h as Closable,b as ClosableGroup,u as Default,m as Error,g as NoBorder,d as Processing,y as StatusTags,f as Success,p as Warning,x as __namedExportsOrder,l as default};