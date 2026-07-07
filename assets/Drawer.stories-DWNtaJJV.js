import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{at as n,m as r,n as i,t as a}from"./iframe-COCI6Ql1.js";import{n as o,t as s}from"./Button-RPy9x2l6.js";var c=e((()=>{i()})),l,u,d,f,p,m,h,g,_,v;e((()=>{l=t(n()),c(),o(),u=a(),d={title:`Components/Drawer`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},decorators:[e=>(0,u.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,height:`100vh`,position:`relative`},children:(0,u.jsx)(e,{})})],argTypes:{open:{control:`boolean`,description:`פתוח/סגור`},placement:{control:`select`,options:[`right`,`left`,`top`,`bottom`],description:`מיקום המגירה`},size:{control:`radio`,options:[`default`,`large`],description:`גודל המגירה`},title:{control:`text`,description:`כותרת`},closable:{control:`boolean`,description:`כפתור סגירה`},maskClosable:{control:`boolean`,description:`סגירה בלחיצה על הרקע`},mask:{control:`boolean`,description:`הצג רקע כהה`},width:{control:`number`,description:`רוחב (בפיקסלים)`}},args:{open:!0,placement:`right`,size:`default`,title:`הגדרות משתמש`,closable:!0,maskClosable:!0,mask:!0}},f={args:{children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,u.jsx)(`p`,{style:{margin:0,fontSize:14,color:`rgba(0,0,0,0.65)`,lineHeight:`22px`},children:`כאן תוכל לשנות את הגדרות המשתמש שלך.`}),(0,u.jsx)(`p`,{style:{margin:0,fontSize:14,color:`rgba(0,0,0,0.65)`,lineHeight:`22px`},children:`הגדרות אלה ישמרו אוטומטית.`})]})}},p={args:{title:`עריכת פרויקט`,footer:(0,u.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`flex-end`},children:[(0,u.jsx)(s,{type:`default`,children:`בטל`}),(0,u.jsx)(s,{type:`primary`,children:`שמור`})]}),children:(0,u.jsx)(`p`,{style:{margin:0,fontSize:14,color:`rgba(0,0,0,0.65)`},children:`תוכן הטופס יופיע כאן.`})}},m={args:{placement:`left`,title:`ניווט ראשי`}},h={args:{placement:`bottom`,title:`פאנל תחתון`,height:300}},g={args:{size:`large`,title:`תצוגה מורחבת`}},_={render:()=>{let[e,t]=l.useState(!1);return(0,u.jsxs)(`div`,{style:{padding:24},children:[(0,u.jsx)(s,{type:`primary`,onClick:()=>t(!0),children:`פתח מגירה`}),(0,u.jsx)(r,{open:e,title:`הגדרות`,onClose:()=>t(!1),footer:(0,u.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`flex-end`},children:[(0,u.jsx)(s,{type:`default`,onClick:()=>t(!1),children:`בטל`}),(0,u.jsx)(s,{type:`primary`,onClick:()=>t(!1),children:`שמור`})]}),children:(0,u.jsx)(`p`,{style:{margin:0,fontSize:14},children:`תוכן המגירה מוצג כאן.`})})]})},parameters:{controls:{disable:!0}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <p style={{
        margin: 0,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
        lineHeight: '22px'
      }}>
          כאן תוכל לשנות את הגדרות המשתמש שלך.
        </p>
        <p style={{
        margin: 0,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
        lineHeight: '22px'
      }}>
          הגדרות אלה ישמרו אוטומטית.
        </p>
      </div>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'עריכת פרויקט',
    footer: <div style={{
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }}>
        <Button type="default">בטל</Button>
        <Button type="primary">שמור</Button>
      </div>,
    children: <p style={{
      margin: 0,
      fontSize: 14,
      color: 'rgba(0,0,0,0.65)'
    }}>
        תוכן הטופס יופיע כאן.
      </p>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    title: 'ניווט ראשי'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    title: 'פאנל תחתון',
    height: 300
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    title: 'תצוגה מורחבת'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: 24
    }}>
        <Button type="primary" onClick={() => setOpen(true)}>פתח מגירה</Button>
        <Drawer open={open} title="הגדרות" onClose={() => setOpen(false)} footer={<div style={{
        display: 'flex',
        gap: 8,
        justifyContent: 'flex-end'
      }}>
              <Button type="default" onClick={() => setOpen(false)}>בטל</Button>
              <Button type="primary" onClick={() => setOpen(false)}>שמור</Button>
            </div>}>
          <p style={{
          margin: 0,
          fontSize: 14
        }}>תוכן המגירה מוצג כאן.</p>
        </Drawer>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithFooter`,`LeftPlacement`,`BottomPlacement`,`LargeSize`,`Interactive`]}))();export{h as BottomPlacement,f as Default,_ as Interactive,g as LargeSize,m as LeftPlacement,p as WithFooter,v as __namedExportsOrder,d as default};