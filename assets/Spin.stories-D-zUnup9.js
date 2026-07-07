import{i as e}from"./preload-helper-Cs4UwXAW.js";import{at as t,d as n,t as r}from"./iframe-PJti-vyW.js";import{t as i}from"./Spin-DzkKfJC0.js";var a,o,s,c,l,u,d,f,p,m;e((()=>{t(),i(),a=r(),o={title:`Components/Spin`,component:n,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,a.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`},children:(0,a.jsx)(e,{})})],argTypes:{spinning:{control:`boolean`,description:`פעיל`},size:{control:`select`,options:[`small`,`default`,`large`],description:`גודל`},tip:{control:`text`,description:`טקסט תיאור`}},args:{spinning:!0,size:`default`}},s={},c={args:{size:`small`}},l={args:{size:`large`}},u={args:{tip:`טוען נתונים...`}},d={args:{spinning:!1}},f={render:()=>(0,a.jsx)(n,{spinning:!0,tip:`טוען...`,children:(0,a.jsxs)(`div`,{style:{padding:24,background:`#fafafa`,border:`1px solid #f0f0f0`,borderRadius:8,minHeight:120,minWidth:300},children:[(0,a.jsx)(`p`,{style:{margin:0,fontSize:14},children:`תוכן שנמצא מאחורי ספינר הטעינה.`}),(0,a.jsx)(`p`,{style:{margin:`8px 0 0`,fontSize:14},children:`שורה נוספת של תוכן.`})]})}),parameters:{controls:{disable:!0}}},p={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`},children:[(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(n,{size:`small`}),(0,a.jsx)(`div`,{style:{fontSize:12,color:`rgba(0,0,0,0.45)`,marginTop:8},children:`קטן`})]}),(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(n,{size:`default`}),(0,a.jsx)(`div`,{style:{fontSize:12,color:`rgba(0,0,0,0.45)`,marginTop:8},children:`רגיל`})]}),(0,a.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,a.jsx)(n,{size:`large`}),(0,a.jsx)(`div`,{style:{fontSize:12,color:`rgba(0,0,0,0.45)`,marginTop:8},children:`גדול`})]})]}),parameters:{controls:{disable:!0}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'טוען נתונים...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Spin spinning tip="טוען...">
      <div style={{
      padding: 24,
      background: '#fafafa',
      border: '1px solid #f0f0f0',
      borderRadius: 8,
      minHeight: 120,
      minWidth: 300
    }}>
        <p style={{
        margin: 0,
        fontSize: 14
      }}>תוכן שנמצא מאחורי ספינר הטעינה.</p>
        <p style={{
        margin: '8px 0 0',
        fontSize: 14
      }}>שורה נוספת של תוכן.</p>
      </div>
    </Spin>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin size="small" />
        <div style={{
        fontSize: 12,
        color: 'rgba(0,0,0,0.45)',
        marginTop: 8
      }}>קטן</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin size="default" />
        <div style={{
        fontSize: 12,
        color: 'rgba(0,0,0,0.45)',
        marginTop: 8
      }}>רגיל</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin size="large" />
        <div style={{
        fontSize: 12,
        color: 'rgba(0,0,0,0.45)',
        marginTop: 8
      }}>גדול</div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Small`,`Large`,`WithTip`,`NotSpinning`,`WrappingContent`,`AllSizes`]}))();export{p as AllSizes,s as Default,l as Large,d as NotSpinning,c as Small,u as WithTip,f as WrappingContent,m as __namedExportsOrder,o as default};