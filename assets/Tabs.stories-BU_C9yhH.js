import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{at as n,n as r,t as i,v as a}from"./iframe-PJti-vyW.js";import{a as o,r as s,t as c,u as l}from"./tabler-icons-react-xgqxi6yh.js";var u=e((()=>{r()})),d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{d=t(n()),u(),c(),f=i(),p=[{key:`tab1`,label:`לשונית ראשונה`,children:(0,f.jsx)(`p`,{style:{margin:0,fontSize:14},children:`תוכן הלשונית הראשונה`})},{key:`tab2`,label:`לשונית שנייה`,children:(0,f.jsx)(`p`,{style:{margin:0,fontSize:14},children:`תוכן הלשונית השנייה`})},{key:`tab3`,label:`לשונית שלישית`,children:(0,f.jsx)(`p`,{style:{margin:0,fontSize:14},children:`תוכן הלשונית השלישית`})},{key:`tab4`,label:`מנוטרל`,disabled:!0,children:(0,f.jsx)(`p`,{style:{margin:0},children:`לא נגיש`})}],m={title:`Components/Tabs`,component:a,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,f.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:600},children:(0,f.jsx)(e,{})})],argTypes:{type:{control:`radio`,options:[`line`,`card`],description:`סוג הלשוניות`},size:{control:`select`,options:[`large`,`default`,`small`],description:`גודל`},tabPosition:{control:`select`,options:[`top`,`right`,`bottom`,`left`],description:`מיקום הלשוניות`},defaultActiveKey:{control:`text`,description:`לשונית פעילה ברירת מחדל`}},args:{type:`line`,size:`default`,tabPosition:`top`,defaultActiveKey:`tab1`,items:p}},h={},g={args:{type:`card`}},_={args:{size:`large`}},v={args:{size:`small`}},y={args:{tabPosition:`bottom`}},b={args:{tabPosition:`left`}},x={args:{items:[{key:`home`,label:`בית`,icon:(0,f.jsx)(l,{size:14}),children:(0,f.jsx)(`p`,{style:{margin:0},children:`עמוד הבית`})},{key:`user`,label:`משתמש`,icon:(0,f.jsx)(s,{size:14}),children:(0,f.jsx)(`p`,{style:{margin:0},children:`פרופיל המשתמש`})},{key:`settings`,label:`הגדרות`,icon:(0,f.jsx)(o,{size:14}),children:(0,f.jsx)(`p`,{style:{margin:0},children:`הגדרות המערכת`})}],defaultActiveKey:`home`}},S={render:()=>{let[e,t]=d.useState([{key:`tab1`,label:`לשונית 1`,closable:!0,children:(0,f.jsx)(`p`,{style:{margin:0},children:`תוכן 1`})},{key:`tab2`,label:`לשונית 2`,closable:!0,children:(0,f.jsx)(`p`,{style:{margin:0},children:`תוכן 2`})},{key:`tab3`,label:`לשונית 3`,closable:!0,children:(0,f.jsx)(`p`,{style:{margin:0},children:`תוכן 3`})}]);return(0,f.jsx)(a,{type:`card`,defaultActiveKey:`tab1`,items:e,onEdit:e=>t(t=>t.filter(t=>t.key!==e))})},parameters:{controls:{disable:!0}}},C={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:12,color:`rgba(0,0,0,0.45)`,marginBottom:8},children:`Line`}),(0,f.jsx)(a,{type:`line`,defaultActiveKey:`tab1`,items:p.slice(0,3)})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:12,color:`rgba(0,0,0,0.45)`,marginBottom:8},children:`Card`}),(0,f.jsx)(a,{type:`card`,defaultActiveKey:`tab1`,items:p.slice(0,3)})]})]}),parameters:{controls:{disable:!0}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'card'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tabPosition: 'bottom'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabPosition: 'left'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: 'בית',
      icon: <IconHome size={14} />,
      children: <p style={{
        margin: 0
      }}>עמוד הבית</p>
    }, {
      key: 'user',
      label: 'משתמש',
      icon: <IconUser size={14} />,
      children: <p style={{
        margin: 0
      }}>פרופיל המשתמש</p>
    }, {
      key: 'settings',
      label: 'הגדרות',
      icon: <IconSettings size={14} />,
      children: <p style={{
        margin: 0
      }}>הגדרות המערכת</p>
    }],
    defaultActiveKey: 'home'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = React.useState([{
      key: 'tab1',
      label: 'לשונית 1',
      closable: true,
      children: <p style={{
        margin: 0
      }}>תוכן 1</p>
    }, {
      key: 'tab2',
      label: 'לשונית 2',
      closable: true,
      children: <p style={{
        margin: 0
      }}>תוכן 2</p>
    }, {
      key: 'tab3',
      label: 'לשונית 3',
      closable: true,
      children: <p style={{
        margin: 0
      }}>תוכן 3</p>
    }]);
    return <Tabs type="card" defaultActiveKey="tab1" items={items} onEdit={key => setItems(prev => prev.filter(i => i.key !== key))} />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: 'rgba(0,0,0,0.45)',
        marginBottom: 8
      }}>Line</div>
        <Tabs type="line" defaultActiveKey="tab1" items={basicItems.slice(0, 3)} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: 'rgba(0,0,0,0.45)',
        marginBottom: 8
      }}>Card</div>
        <Tabs type="card" defaultActiveKey="tab1" items={basicItems.slice(0, 3)} />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Card`,`Large`,`Small`,`BottomPosition`,`LeftPosition`,`WithIcons`,`Closable`,`AllTypes`]}))();export{C as AllTypes,y as BottomPosition,g as Card,S as Closable,h as Default,_ as Large,b as LeftPosition,v as Small,x as WithIcons,w as __namedExportsOrder,m as default};