import{i as e}from"./preload-helper-Cs4UwXAW.js";import{T as t,at as n,n as r,t as i}from"./iframe-PJti-vyW.js";import{n as a,t as o}from"./Button-D_Y_Wmgk.js";var s=e((()=>{r()})),c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),s(),a(),c=i(),l={title:`Components/Tooltip`,component:t,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,c.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,padding:60},children:(0,c.jsx)(e,{})})],argTypes:{title:{control:`text`,description:`תוכן ה-tooltip`},placement:{control:`select`,options:[`top`,`topLeft`,`topRight`,`bottom`,`bottomLeft`,`bottomRight`,`left`,`leftTop`,`leftBottom`,`right`,`rightTop`,`rightBottom`],description:`מיקום`},open:{control:`boolean`,description:`מוצג תמיד (controlled)`},defaultOpen:{control:`boolean`,description:`פתוח בברירת מחדל`},disabled:{control:`boolean`,description:`מנוטרל`},color:{control:`color`,description:`צבע רקע`}},args:{title:`טקסט ה-tooltip מוצג כאן`,placement:`top`,disabled:!1}},u={args:{children:(0,c.jsx)(o,{type:`default`,children:`רחף מעלי`})}},d={args:{open:!0,title:`תמיד גלוי`,children:(0,c.jsx)(o,{type:`default`,children:`tooltip קבוע`})}},f={args:{placement:`bottom`,title:`מתחת`,children:(0,c.jsx)(o,{type:`default`,children:`כיוון תחתון`})}},p={args:{placement:`left`,title:`משמאל`,children:(0,c.jsx)(o,{type:`default`,children:`כיוון שמאל`})}},m={args:{placement:`right`,title:`מימין`,children:(0,c.jsx)(o,{type:`default`,children:`כיוון ימין`})}},h={args:{disabled:!0,title:`לא יוצג`,children:(0,c.jsx)(o,{type:`default`,children:`tooltip מנוטרל`})}},g={args:{color:`#722ed1`,title:`tooltip בצבע מותאם`,children:(0,c.jsx)(o,{type:`default`,children:`צבע מותאם`})}},_={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, auto)`,gap:16,placeItems:`center`},children:[`topLeft`,`top`,`topRight`,`leftTop`,``,`rightTop`,`left`,``,`right`,`leftBottom`,``,`rightBottom`,`bottomLeft`,`bottom`,`bottomRight`].map((e,n)=>e?(0,c.jsx)(t,{title:e,placement:e,open:!0,children:(0,c.jsx)(o,{type:`default`,size:`small`,children:e})},n):(0,c.jsx)(`span`,{},n))}),decorators:[e=>(0,c.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,padding:80},children:(0,c.jsx)(e,{})})],parameters:{controls:{disable:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button type="default">רחף מעלי</Button>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'תמיד גלוי',
    children: <Button type="default">tooltip קבוע</Button>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    title: 'מתחת',
    children: <Button type="default">כיוון תחתון</Button>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left',
    title: 'משמאל',
    children: <Button type="default">כיוון שמאל</Button>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    title: 'מימין',
    children: <Button type="default">כיוון ימין</Button>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    title: 'לא יוצג',
    children: <Button type="default">tooltip מנוטרל</Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#722ed1',
    title: 'tooltip בצבע מותאם',
    children: <Button type="default">צבע מותאם</Button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: 16,
    placeItems: 'center'
  }}>
      {(['topLeft', 'top', 'topRight', 'leftTop', '', 'rightTop', 'left', '', 'right', 'leftBottom', '', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight'] as const).map((placement, i) => placement ? <Tooltip key={i} title={placement} placement={placement} open>
            <Button type="default" size="small">{placement}</Button>
          </Tooltip> : <span key={i} />)}
    </div>,
  decorators: [Story => <div dir="rtl" style={{
    fontFamily: '"Heebo", sans-serif',
    padding: 80
  }}>
        <Story />
      </div>],
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`AlwaysVisible`,`Bottom`,`Left`,`Right`,`Disabled`,`CustomColor`,`AllPlacements`]}))();export{_ as AllPlacements,d as AlwaysVisible,f as Bottom,g as CustomColor,u as Default,h as Disabled,p as Left,m as Right,v as __namedExportsOrder,l as default};