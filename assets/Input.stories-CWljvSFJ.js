import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,t as n}from"./iframe-PJti-vyW.js";import{n as r,t as i}from"./Input-CnYHe_Tv.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),r(),a=n(),o={title:`Components/Input`,component:i,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,a.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:400},children:(0,a.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`small`,`default`,`large`],description:`גודל השדה`},status:{control:`select`,options:[`default`,`error`,`warning`],description:`סטטוס אימות`},placeholder:{control:`text`,description:`טקסט placeholder`},disabled:{control:`boolean`,description:`מנוטרל`},allowClear:{control:`boolean`,description:`כפתור ניקוי`},prefix:{control:`text`,description:`תוכן לפני השדה`},suffix:{control:`text`,description:`תוכן אחרי השדה`},addonBefore:{control:`text`,description:`תוספת לפני`},addonAfter:{control:`text`,description:`תוספת אחרי`}},args:{placeholder:`הזן טקסט...`,size:`default`,status:`default`,disabled:!1,allowClear:!1}},s={},c={args:{value:`ישראל ישראלי`}},l={args:{disabled:!0,value:`לא ניתן לעריכה`}},u={args:{status:`error`,placeholder:`שדה חובה`}},d={args:{status:`warning`,placeholder:`בדוק את הערך`}},f={args:{allowClear:!0,defaultValue:`ניתן למחוק`}},p={args:{prefix:`🔍`,placeholder:`חיפוש...`}},m={args:{suffix:`₪`,placeholder:`0.00`}},h={args:{addonBefore:`https://`,addonAfter:`.com`,placeholder:`example`}},g={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(i,{size:`small`,placeholder:`קטן`}),(0,a.jsx)(i,{size:`default`,placeholder:`רגיל`}),(0,a.jsx)(i,{size:`large`,placeholder:`גדול`})]}),parameters:{controls:{disable:!0}}},_={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(i,{status:`default`,placeholder:`ברירת מחדל`}),(0,a.jsx)(i,{status:`error`,placeholder:`שגיאה`}),(0,a.jsx)(i,{status:`warning`,placeholder:`אזהרה`})]}),parameters:{controls:{disable:!0}}},v={args:{type:`password`,placeholder:`הזן סיסמה`}},y={args:{type:`email`,placeholder:`name@example.com`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'ישראל ישראלי'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'לא ניתן לעריכה'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    placeholder: 'שדה חובה'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    placeholder: 'בדוק את הערך'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    defaultValue: 'ניתן למחוק'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '🔍',
    placeholder: 'חיפוש...'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    suffix: '₪',
    placeholder: '0.00'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    addonBefore: 'https://',
    addonAfter: '.com',
    placeholder: 'example'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Input size="small" placeholder="קטן" />
      <Input size="default" placeholder="רגיל" />
      <Input size="large" placeholder="גדול" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Input status="default" placeholder="ברירת מחדל" />
      <Input status="error" placeholder="שגיאה" />
      <Input status="warning" placeholder="אזהרה" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'הזן סיסמה'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'name@example.com'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithValue`,`Disabled`,`Error`,`Warning`,`AllowClear`,`WithPrefix`,`WithSuffix`,`WithAddon`,`AllSizes`,`AllStatuses`,`Password`,`Email`]}))();export{g as AllSizes,_ as AllStatuses,f as AllowClear,s as Default,l as Disabled,y as Email,u as Error,v as Password,d as Warning,h as WithAddon,p as WithPrefix,m as WithSuffix,c as WithValue,b as __namedExportsOrder,o as default};