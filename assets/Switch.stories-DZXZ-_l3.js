import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,n,o as r,t as i}from"./iframe-COCI6Ql1.js";var a=e((()=>{n()})),o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{t(),a(),o=i(),s={title:`Components/Switch`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`},children:(0,o.jsx)(e,{})})],argTypes:{checked:{control:`boolean`,description:`מופעל`},defaultChecked:{control:`boolean`,description:`ברירת מחדל`},disabled:{control:`boolean`,description:`מנוטרל`},loading:{control:`boolean`,description:`מצב טעינה`},size:{control:`radio`,options:[`default`,`small`],description:`גודל`},checkedChildren:{control:`text`,description:`תוכן כשפעיל`},unCheckedChildren:{control:`text`,description:`תוכן כשלא פעיל`}},args:{size:`default`,disabled:!1,loading:!1}},c={},l={args:{defaultChecked:!0}},u={args:{defaultChecked:!1}},d={args:{size:`small`}},f={args:{disabled:!0}},p={args:{disabled:!0,defaultChecked:!0}},m={args:{loading:!0}},h={args:{checkedChildren:`פעיל`,unCheckedChildren:`כבוי`,defaultChecked:!0}},g={args:{checkedChildren:`✓`,unCheckedChildren:`✕`}},_={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[{label:`כבוי`,props:{}},{label:`פעיל`,props:{defaultChecked:!0}},{label:`עם טקסט`,props:{defaultChecked:!0,checkedChildren:`כן`,unCheckedChildren:`לא`}},{label:`קטן`,props:{size:`small`}},{label:`מנוטרל`,props:{disabled:!0}},{label:`טוען`,props:{loading:!0}}].map(({label:e,props:t})=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,o.jsx)(r,{...t}),(0,o.jsx)(`span`,{style:{fontSize:14,color:`rgba(0,0,0,0.65)`},children:e})]},e))}),parameters:{controls:{disable:!0}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checkedChildren: 'פעיל',
    unCheckedChildren: 'כבוי',
    defaultChecked: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checkedChildren: '✓',
    unCheckedChildren: '✕'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {[{
      label: 'כבוי',
      props: {}
    }, {
      label: 'פעיל',
      props: {
        defaultChecked: true
      }
    }, {
      label: 'עם טקסט',
      props: {
        defaultChecked: true,
        checkedChildren: 'כן',
        unCheckedChildren: 'לא'
      }
    }, {
      label: 'קטן',
      props: {
        size: 'small' as const
      }
    }, {
      label: 'מנוטרל',
      props: {
        disabled: true
      }
    }, {
      label: 'טוען',
      props: {
        loading: true
      }
    }].map(({
      label,
      props
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
          <Switch {...props} />
          <span style={{
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)'
      }}>{label}</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`On`,`Off`,`Small`,`Disabled`,`DisabledOn`,`Loading`,`WithText`,`WithEmoji`,`AllVariants`]}))();export{_ as AllVariants,c as Default,f as Disabled,p as DisabledOn,m as Loading,u as Off,l as On,d as Small,g as WithEmoji,h as WithText,v as __namedExportsOrder,s as default};