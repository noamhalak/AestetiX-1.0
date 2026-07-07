import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{at as n,n as r,s as i,t as a}from"./iframe-COCI6Ql1.js";var o=e((()=>{r()})),s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{s=t(n()),o(),c=a(),l=[{title:`כניסה פרטים`,description:`מלא את הפרטים האישיים`},{title:`אישור`,description:`בדוק ואשר את הפרטים`},{title:`תשלום`,description:`השלם את התשלום`},{title:`סיום`,description:`ההזמנה בוצעה`}],u={title:`Components/Steps`,component:i,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,c.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:700},children:(0,c.jsx)(e,{})})],argTypes:{current:{control:{type:`range`,min:0,max:3,step:1},description:`שלב נוכחי`},direction:{control:`radio`,options:[`horizontal`,`vertical`],description:`כיוון`},size:{control:`radio`,options:[`default`,`small`],description:`גודל`},status:{control:`select`,options:[`finish`,`process`,`wait`,`error`],description:`סטטוס שלב נוכחי`}},args:{current:1,direction:`horizontal`,size:`default`,status:`process`,items:l}},d={},f={args:{current:0}},p={args:{current:3}},m={args:{current:1,status:`error`}},h={args:{direction:`vertical`,current:1}},g={args:{size:`small`}},_={render:()=>{let[e,t]=s.useState(0);return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,c.jsx)(i,{current:e,onChange:t,items:l}),(0,c.jsxs)(`div`,{style:{padding:16,background:`#fafafa`,borderRadius:8,border:`1px solid #f0f0f0`,fontSize:14},children:[(0,c.jsxs)(`strong`,{children:[`שלב `,e+1,`:`]}),` `,l[e]?.description]})]})},parameters:{controls:{disable:!0}}},v={render:()=>(0,c.jsx)(i,{current:2,items:[{title:`הושלם`,description:`שלב זה הסתיים`},{title:`שגיאה`,description:`אירעה בעיה`,status:`error`},{title:`בתהליך`,description:`מתבצע כעת`},{title:`ממתין`,description:`טרם התחיל`}]}),parameters:{controls:{disable:!0}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    current: 0
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    current: 3
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    status: 'error'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    current: 1
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = React.useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Steps current={current} onChange={setCurrent} items={basicItems} />
        <div style={{
        padding: 16,
        background: '#fafafa',
        borderRadius: 8,
        border: '1px solid #f0f0f0',
        fontSize: 14
      }}>
          <strong>שלב {current + 1}:</strong> {basicItems[current]?.description}
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Steps current={2} items={[{
    title: 'הושלם',
    description: 'שלב זה הסתיים'
  }, {
    title: 'שגיאה',
    description: 'אירעה בעיה',
    status: 'error'
  }, {
    title: 'בתהליך',
    description: 'מתבצע כעת'
  }, {
    title: 'ממתין',
    description: 'טרם התחיל'
  }]} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`FirstStep`,`LastStep`,`ErrorStep`,`Vertical`,`Small`,`Clickable`,`AllStatuses`]}))();export{v as AllStatuses,_ as Clickable,d as Default,m as ErrorStep,f as FirstStep,p as LastStep,g as Small,h as Vertical,y as __namedExportsOrder,u as default};