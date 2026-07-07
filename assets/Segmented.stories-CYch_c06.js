import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,h as n,n as r,t as i}from"./iframe-COCI6Ql1.js";import{f as a,p as o,t as s,u as c}from"./tabler-icons-react-BXaslz4Z.js";var l=e((()=>{r()})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),l(),s(),u=i(),d={title:`Components/Segmented`,component:n,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,u.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`},children:(0,u.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`large`,`default`,`small`],description:`גודל`},disabled:{control:`boolean`,description:`מנוטרל`},block:{control:`boolean`,description:`רוחב מלא`},defaultValue:{control:`text`,description:`ערך ברירת מחדל`}},args:{options:[`יומי`,`שבועי`,`חודשי`],defaultValue:`יומי`,size:`default`,disabled:!1,block:!1}},f={},p={args:{size:`large`}},m={args:{size:`small`}},h={args:{disabled:!0}},g={args:{block:!0},decorators:[e=>(0,u.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,width:400},children:(0,u.jsx)(e,{})})]},_={args:{options:[{label:`יומי`,value:`daily`},{label:`שבועי`,value:`weekly`},{label:`חודשי (מנוטרל)`,value:`monthly`,disabled:!0}],defaultValue:`daily`}},v={args:{options:[{label:`רשימה`,value:`list`,icon:(0,u.jsx)(a,{size:14})},{label:`רשת`,value:`grid`,icon:(0,u.jsx)(o,{size:14})},{label:`מפה`,value:`map`,icon:(0,u.jsx)(c,{size:14})}],defaultValue:`list`}},y={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,u.jsx)(n,{size:`large`,options:[`גדול`,`בינוני`,`קטן`],defaultValue:`גדול`}),(0,u.jsx)(n,{size:`default`,options:[`גדול`,`בינוני`,`קטן`],defaultValue:`בינוני`}),(0,u.jsx)(n,{size:`small`,options:[`גדול`,`בינוני`,`קטן`],defaultValue:`קטן`})]}),parameters:{controls:{disable:!0}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    block: true
  },
  decorators: [Story => <div dir="rtl" style={{
    fontFamily: '"Heebo", sans-serif',
    width: 400
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'יומי',
      value: 'daily'
    }, {
      label: 'שבועי',
      value: 'weekly'
    }, {
      label: 'חודשי (מנוטרל)',
      value: 'monthly',
      disabled: true
    }],
    defaultValue: 'daily'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'רשימה',
      value: 'list',
      icon: <IconList size={14} />
    }, {
      label: 'רשת',
      value: 'grid',
      icon: <IconLayoutGrid size={14} />
    }, {
      label: 'מפה',
      value: 'map',
      icon: <IconMap size={14} />
    }],
    defaultValue: 'list'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Segmented size="large" options={['גדול', 'בינוני', 'קטן']} defaultValue="גדול" />
      <Segmented size="default" options={['גדול', 'בינוני', 'קטן']} defaultValue="בינוני" />
      <Segmented size="small" options={['גדול', 'בינוני', 'קטן']} defaultValue="קטן" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Large`,`Small`,`Disabled`,`Block`,`WithDisabledOption`,`WithIcons`,`AllSizes`]}))();export{y as AllSizes,g as Block,f as Default,h as Disabled,p as Large,m as Small,_ as WithDisabledOption,v as WithIcons,b as __namedExportsOrder,d as default};