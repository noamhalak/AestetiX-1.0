import{i as e}from"./preload-helper-Cs4UwXAW.js";import{S as t,at as n,n as r,t as i}from"./iframe-COCI6Ql1.js";import{a,m as o,o as s,r as c,s as l,t as u,y as d}from"./tabler-icons-react-BXaslz4Z.js";var f,p,m=e((()=>{n(),r(),f=i(),p=e=>(0,f.jsx)(t,{mode:`horizontal`,...e}),p.__docgenInfo={description:``,methods:[],displayName:`MenuTopNavigation`,composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C;e((()=>{n(),m(),u(),h=i(),g={title:`Components/Menu`,component:t,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,h.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,background:`#f5f5f5`,padding:16},children:(0,h.jsx)(e,{})})],argTypes:{mode:{control:`radio`,options:[`inline`,`vertical`],description:`מצב תצוגה`},theme:{control:`radio`,options:[`light`,`dark`],description:`ערכת צבעים`},inlineCollapsed:{control:`boolean`,description:`מכווץ`}},args:{mode:`inline`,theme:`light`,inlineCollapsed:!1,items:[{key:`home`,label:`בית`,icon:(0,h.jsx)(o,{size:16})},{key:`users`,label:`משתמשים`,icon:(0,h.jsx)(c,{size:16})},{key:`settings`,label:`הגדרות`,icon:(0,h.jsx)(s,{size:16}),children:[{key:`settings-general`,label:`כללי`},{key:`settings-security`,label:`אבטחה`},{key:`settings-notifications`,label:`התראות`}]},{key:`notifications`,label:`התראות`,icon:(0,h.jsx)(d,{size:16})},{key:`disabled`,label:`מנוטרל`,icon:(0,h.jsx)(a,{size:16}),disabled:!0}],defaultSelectedKeys:[`home`]}},_={},v={args:{theme:`dark`},decorators:[e=>(0,h.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,background:`#141414`,padding:16},children:(0,h.jsx)(e,{})})]},y={args:{inlineCollapsed:!0}},b={args:{items:[{key:`group-main`,type:`group`,label:`ראשי`,children:[{key:`home`,label:`בית`,icon:(0,h.jsx)(o,{size:16})},{key:`search`,label:`חיפוש`,icon:(0,h.jsx)(l,{size:16})}]},{key:`group-settings`,type:`group`,label:`הגדרות`,children:[{key:`profile`,label:`פרופיל`,icon:(0,h.jsx)(c,{size:16})},{key:`config`,label:`הגדרות`,icon:(0,h.jsx)(s,{size:16})}]}],defaultSelectedKeys:[`home`]}},x={render:()=>(0,h.jsx)(p,{defaultSelectedKeys:[`home`],items:[{key:`home`,label:`בית`,icon:(0,h.jsx)(o,{size:16})},{key:`products`,label:`מוצרים`},{key:`about`,label:`אודות`},{key:`contact`,label:`צור קשר`},{key:`disabled`,label:`מנוטרל`,disabled:!0}]}),parameters:{controls:{disable:!0}}},S={render:()=>(0,h.jsx)(`div`,{style:{background:`#141414`,padding:`0 16px`},children:(0,h.jsx)(p,{theme:`dark`,defaultSelectedKeys:[`home`],items:[{key:`home`,label:`בית`},{key:`products`,label:`מוצרים`},{key:`about`,label:`אודות`},{key:`contact`,label:`צור קשר`}]})}),parameters:{controls:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  },
  decorators: [Story => <div dir="rtl" style={{
    fontFamily: '"Heebo", sans-serif',
    background: '#141414',
    padding: 16
  }}>
        <Story />
      </div>]
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    inlineCollapsed: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'group-main',
      type: 'group',
      label: 'ראשי',
      children: [{
        key: 'home',
        label: 'בית',
        icon: <IconHome size={16} />
      }, {
        key: 'search',
        label: 'חיפוש',
        icon: <IconSearch size={16} />
      }]
    }, {
      key: 'group-settings',
      type: 'group',
      label: 'הגדרות',
      children: [{
        key: 'profile',
        label: 'פרופיל',
        icon: <IconUser size={16} />
      }, {
        key: 'config',
        label: 'הגדרות',
        icon: <IconSettings size={16} />
      }]
    }],
    defaultSelectedKeys: ['home']
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <MenuTopNavigation defaultSelectedKeys={['home']} items={[{
    key: 'home',
    label: 'בית',
    icon: <IconHome size={16} />
  }, {
    key: 'products',
    label: 'מוצרים'
  }, {
    key: 'about',
    label: 'אודות'
  }, {
    key: 'contact',
    label: 'צור קשר'
  }, {
    key: 'disabled',
    label: 'מנוטרל',
    disabled: true
  }]} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#141414',
    padding: '0 16px'
  }}>
      <MenuTopNavigation theme="dark" defaultSelectedKeys={['home']} items={[{
      key: 'home',
      label: 'בית'
    }, {
      key: 'products',
      label: 'מוצרים'
    }, {
      key: 'about',
      label: 'אודות'
    }, {
      key: 'contact',
      label: 'צור קשר'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Dark`,`Collapsed`,`WithGroups`,`TopNavigation`,`TopNavigationDark`]}))();export{y as Collapsed,v as Dark,_ as Default,x as TopNavigation,S as TopNavigationDark,b as WithGroups,C as __namedExportsOrder,g as default};