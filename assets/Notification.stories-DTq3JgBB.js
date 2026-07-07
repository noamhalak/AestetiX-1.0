import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,l as n,n as r,t as i}from"./iframe-PJti-vyW.js";import{n as a,t as o}from"./Button-D_Y_Wmgk.js";var s=e((()=>{r()})),c,l,u,d,f,p,m,h,g;e((()=>{t(),s(),a(),c=i(),l={title:`Components/Notification`,tags:[`autodocs`],parameters:{layout:`centered`}},u={render:()=>{let[e,t]=n.useNotification();return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsx)(o,{type:`primary`,onClick:()=>e.success({message:`הפעולה הושלמה`,description:`הנתונים נשמרו בהצלחה.`}),children:`הצג הצלחה`})]})}},d={render:()=>{let[e,t]=n.useNotification();return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsx)(o,{danger:!0,onClick:()=>e.error({message:`שגיאה בביצוע הפעולה`,description:`לא ניתן להתחבר לשרת.`}),children:`הצג שגיאה`})]})}},f={render:()=>{let[e,t]=n.useNotification();return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsx)(o,{onClick:()=>e.warning({message:`אזהרה`,description:`החבילה שלך עומדת לפוג.`}),children:`הצג אזהרה`})]})}},p={render:()=>{let[e,t]=n.useNotification();return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsx)(o,{onClick:()=>e.info({message:`עדכון מערכת`,description:`גרסה חדשה זמינה.`}),children:`הצג מידע`})]})}},m={render:()=>{let[e,t]=n.useNotification();return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,c.jsx)(o,{type:`primary`,onClick:()=>e.success({message:`הצלחה`,duration:3}),children:`הצלחה`}),(0,c.jsx)(o,{onClick:()=>e.info({message:`מידע`,duration:3}),children:`מידע`}),(0,c.jsx)(o,{onClick:()=>e.warning({message:`אזהרה`,duration:3}),children:`אזהרה`}),(0,c.jsx)(o,{danger:!0,onClick:()=>e.error({message:`שגיאה`,duration:3}),children:`שגיאה`})]})]})},parameters:{controls:{disable:!0}}},h={render:()=>{let[e,t]=n.useNotification();return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[`topRight`,`topLeft`,`bottomRight`,`bottomLeft`].map(t=>(0,c.jsx)(o,{onClick:()=>e.info({message:t,placement:t,duration:3}),children:t},t))})]})},parameters:{controls:{disable:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return <>
        {contextHolder}
        <Button type="primary" onClick={() => api.success({
        message: 'הפעולה הושלמה',
        description: 'הנתונים נשמרו בהצלחה.'
      })}>
          הצג הצלחה
        </Button>
      </>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return <>
        {contextHolder}
        <Button danger onClick={() => api.error({
        message: 'שגיאה בביצוע הפעולה',
        description: 'לא ניתן להתחבר לשרת.'
      })}>
          הצג שגיאה
        </Button>
      </>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return <>
        {contextHolder}
        <Button onClick={() => api.warning({
        message: 'אזהרה',
        description: 'החבילה שלך עומדת לפוג.'
      })}>
          הצג אזהרה
        </Button>
      </>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return <>
        {contextHolder}
        <Button onClick={() => api.info({
        message: 'עדכון מערכת',
        description: 'גרסה חדשה זמינה.'
      })}>
          הצג מידע
        </Button>
      </>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return <>
        {contextHolder}
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button type="primary" onClick={() => api.success({
          message: 'הצלחה',
          duration: 3
        })}>הצלחה</Button>
          <Button onClick={() => api.info({
          message: 'מידע',
          duration: 3
        })}>מידע</Button>
          <Button onClick={() => api.warning({
          message: 'אזהרה',
          duration: 3
        })}>אזהרה</Button>
          <Button danger onClick={() => api.error({
          message: 'שגיאה',
          duration: 3
        })}>שגיאה</Button>
        </div>
      </>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return <>
        {contextHolder}
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          {(['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] as const).map(p => <Button key={p} onClick={() => api.info({
          message: p,
          placement: p,
          duration: 3
        })}>
              {p}
            </Button>)}
        </div>
      </>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Success`,`Error`,`Warning`,`Info`,`AllTypes`,`WithPlacement`]}))();export{m as AllTypes,d as Error,p as Info,u as Success,f as Warning,h as WithPlacement,g as __namedExportsOrder,l as default};