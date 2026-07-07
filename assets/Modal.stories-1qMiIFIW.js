import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{at as n,n as r,t as i,u as a}from"./iframe-COCI6Ql1.js";import{n as o,t as s}from"./Button-RPy9x2l6.js";var c,l,u,d,f=e((()=>{n(),r(),c=i(),l=({open:e=!0,status:t,title:n,description:r,okText:i=`אוקיי`,cancelText:o=`בטל`,onOk:s,onCancel:l})=>(0,c.jsx)(a,{open:e,title:n,okText:i,cancelText:o,onOk:s,onCancel:l,children:r&&(0,c.jsx)(`p`,{style:{margin:0},children:r})}),u=({open:e=!0,title:t,description:n,okText:r=`אשר`,cancelText:i=`בטל`,danger:o=!1,onOk:s,onCancel:l})=>(0,c.jsx)(a,{open:e,title:t,okText:r,cancelText:i,okButtonProps:{danger:o},onOk:s,onCancel:l,children:n&&(0,c.jsx)(`p`,{style:{margin:0},children:n})}),d=({...e})=>(0,c.jsx)(a,{...e}),d.confirm=a.confirm,d.info=a.info,d.success=a.success,d.warning=a.warning,d.error=a.error,d.destroyAll=a.destroyAll,l.__docgenInfo={description:``,methods:[],displayName:`ModalInformation`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},status:{required:!0,tsType:{name:`union`,raw:`'success' | 'error' | 'warning' | 'info'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'info'`}]},description:``},title:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},okText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'אוקיי'`,computed:!1}},cancelText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'בטל'`,computed:!1}},onOk:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`ModalConfirmation`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},title:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},okText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'אשר'`,computed:!1}},cancelText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'בטל'`,computed:!1}},danger:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOk:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`Modal`}})),p,m,h,g,_,v,y,b,x,S;e((()=>{p=t(n()),f(),o(),m=i(),h={title:`Components/Modal`,component:d,tags:[`autodocs`],parameters:{layout:`fullscreen`},decorators:[e=>(0,m.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,height:`100vh`,position:`relative`},children:(0,m.jsx)(e,{})})],argTypes:{open:{control:`boolean`,description:`פתוח/סגור`},title:{control:`text`,description:`כותרת`},okText:{control:`text`,description:`טקסט כפתור אישור`},cancelText:{control:`text`,description:`טקסט כפתור ביטול`},width:{control:`number`,description:`רוחב`}},args:{open:!0,title:`כותרת המודל`,okText:`אוקיי`,cancelText:`בטל`,width:520}},g={args:{children:(0,m.jsx)(`p`,{style:{margin:0,fontSize:14,color:`rgba(0,0,0,0.65)`,lineHeight:`22px`},children:`תוכן המודל מוצג כאן. ניתן להוסיף כל תוכן רצוי.`})}},_={render:()=>(0,m.jsx)(l,{open:!0,status:`success`,title:`הפעולה הצליחה!`,description:`הנתונים נשמרו בהצלחה במערכת.`,okText:`המשך`,cancelText:`סגור`}),parameters:{controls:{disable:!0}}},v={render:()=>(0,m.jsx)(l,{open:!0,status:`error`,title:`אירעה שגיאה`,description:`לא ניתן להשלים את הפעולה. נסה שוב מאוחר יותר.`,okText:`נסה שוב`,cancelText:`בטל`}),parameters:{controls:{disable:!0}}},y={render:()=>(0,m.jsx)(l,{open:!0,status:`warning`,title:`שים לב!`,description:`פעולה זו תמחק את כל הנתונים ולא ניתן יהיה לשחזרם.`,okText:`הבנתי`,cancelText:`בטל`}),parameters:{controls:{disable:!0}}},b={render:()=>(0,m.jsx)(u,{open:!0,title:`האם למחוק את הפריט?`,description:`פעולה זו לא ניתנת לביטול לאחר אישורה.`,okText:`מחק`,cancelText:`ביטול`,danger:!0}),parameters:{controls:{disable:!0}}},x={render:()=>{let[e,t]=p.useState(!1);return(0,m.jsxs)(`div`,{style:{padding:24},children:[(0,m.jsx)(s,{type:`primary`,onClick:()=>t(!0),children:`פתח מודל`}),(0,m.jsx)(d,{open:e,title:`הגדרות חשבון`,okText:`שמור`,cancelText:`בטל`,onOk:()=>t(!1),onCancel:()=>t(!1),children:(0,m.jsx)(`p`,{style:{margin:0,fontSize:14,color:`rgba(0,0,0,0.65)`},children:`כאן ניתן לשנות את הגדרות החשבון שלך.`})})]})},parameters:{controls:{disable:!0}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      margin: 0,
      fontSize: 14,
      color: 'rgba(0,0,0,0.65)',
      lineHeight: '22px'
    }}>
        תוכן המודל מוצג כאן. ניתן להוסיף כל תוכן רצוי.
      </p>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ModalInformation open status="success" title="הפעולה הצליחה!" description="הנתונים נשמרו בהצלחה במערכת." okText="המשך" cancelText="סגור" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ModalInformation open status="error" title="אירעה שגיאה" description="לא ניתן להשלים את הפעולה. נסה שוב מאוחר יותר." okText="נסה שוב" cancelText="בטל" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ModalInformation open status="warning" title="שים לב!" description="פעולה זו תמחק את כל הנתונים ולא ניתן יהיה לשחזרם." okText="הבנתי" cancelText="בטל" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ModalConfirmation open title="האם למחוק את הפריט?" description="פעולה זו לא ניתנת לביטול לאחר אישורה." okText="מחק" cancelText="ביטול" danger />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: 24
    }}>
        <Button type="primary" onClick={() => setOpen(true)}>פתח מודל</Button>
        <Modal open={open} title="הגדרות חשבון" okText="שמור" cancelText="בטל" onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
          <p style={{
          margin: 0,
          fontSize: 14,
          color: 'rgba(0,0,0,0.65)'
        }}>
            כאן ניתן לשנות את הגדרות החשבון שלך.
          </p>
        </Modal>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`InformationSuccess`,`InformationError`,`InformationWarning`,`Confirmation`,`Interactive`]}))();export{b as Confirmation,g as Default,v as InformationError,_ as InformationSuccess,y as InformationWarning,x as Interactive,S as __namedExportsOrder,h as default};