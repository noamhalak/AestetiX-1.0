import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,k as n,t as r}from"./iframe-PJti-vyW.js";import{t as i}from"./Alert-BXLVviPc.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{t(),i(),a=r(),o={title:`Components/Alert`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,a.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:600},children:(0,a.jsx)(e,{})})],argTypes:{type:{control:`select`,options:[`success`,`info`,`warning`,`error`],description:`סוג ההתראה`},message:{control:`text`,description:`הודעה ראשית`},description:{control:`text`,description:`תיאור נוסף`},banner:{control:`boolean`,description:`תצוגת באנר ללא גבול`},closable:{control:`boolean`,description:`ניתן לסגירה`},showIcon:{control:`boolean`,description:`הצג אייקון`}},args:{type:`info`,message:`זוהי הודעת מידע`,showIcon:!0,closable:!1,banner:!1}},s={},c={args:{type:`success`,message:`הפעולה בוצעה בהצלחה`}},l={args:{type:`info`,message:`מידע כללי למשתמש`}},u={args:{type:`warning`,message:`שים לב לפרטים הבאים`}},d={args:{type:`error`,message:`אירעה שגיאה בביצוע הפעולה`}},f={args:{type:`warning`,message:`אזהרה חשובה`,description:`יש לבדוק את הנתונים לפני המשך. פעולה זו לא ניתנת לביטול לאחר אישורה.`,showIcon:!0}},p={args:{type:`info`,message:`ניתן לסגור הודעה זו`,closable:!0}},m={args:{type:`warning`,message:`זהו באנר ללא גבולות`,banner:!0,showIcon:!0}},h={args:{type:`success`,message:`ללא אייקון`,showIcon:!1}},g={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(n,{type:`success`,message:`הפעולה הצליחה`,showIcon:!0}),(0,a.jsx)(n,{type:`info`,message:`פריט מידע חשוב`,showIcon:!0}),(0,a.jsx)(n,{type:`warning`,message:`אזהרה: בדוק לפני המשך`,showIcon:!0}),(0,a.jsx)(n,{type:`error`,message:`שגיאה: לא ניתן להשלים`,showIcon:!0})]}),parameters:{controls:{disable:!0}}},_={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(n,{type:`success`,message:`הרשמה הושלמה`,description:`ברוך הבא למערכת AestetiX. אנא אמת את כתובת האימייל שלך.`,showIcon:!0,closable:!0}),(0,a.jsx)(n,{type:`error`,message:`שגיאת חיבור`,description:`לא ניתן להתחבר לשרת. בדוק את חיבור האינטרנט ונסה שוב.`,showIcon:!0,closable:!0})]}),parameters:{controls:{disable:!0}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'הפעולה בוצעה בהצלחה'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'מידע כללי למשתמש'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'שים לב לפרטים הבאים'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'אירעה שגיאה בביצוע הפעולה'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'אזהרה חשובה',
    description: 'יש לבדוק את הנתונים לפני המשך. פעולה זו לא ניתנת לביטול לאחר אישורה.',
    showIcon: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'ניתן לסגור הודעה זו',
    closable: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'זהו באנר ללא גבולות',
    banner: true,
    showIcon: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'ללא אייקון',
    showIcon: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert type="success" message="הפעולה הצליחה" showIcon />
      <Alert type="info" message="פריט מידע חשוב" showIcon />
      <Alert type="warning" message="אזהרה: בדוק לפני המשך" showIcon />
      <Alert type="error" message="שגיאה: לא ניתן להשלים" showIcon />
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
      <Alert type="success" message="הרשמה הושלמה" description="ברוך הבא למערכת AestetiX. אנא אמת את כתובת האימייל שלך." showIcon closable />
      <Alert type="error" message="שגיאת חיבור" description="לא ניתן להתחבר לשרת. בדוק את חיבור האינטרנט ונסה שוב." showIcon closable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Success`,`Info`,`Warning`,`Error`,`WithDescription`,`Closable`,`Banner`,`NoIcon`,`AllTypes`,`AllWithDescriptions`]}))();export{g as AllTypes,_ as AllWithDescriptions,m as Banner,p as Closable,s as Default,d as Error,l as Info,h as NoIcon,c as Success,u as Warning,f as WithDescription,v as __namedExportsOrder,o as default};