import{i as e}from"./preload-helper-Cs4UwXAW.js";import{_ as t,at as n,t as r}from"./iframe-COCI6Ql1.js";import{n as i,t as a}from"./Checkbox-IC0717uS.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i(),o=r(),s={title:`Components/Checkbox`,component:t,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`},children:(0,o.jsx)(e,{})})],argTypes:{checked:{control:`boolean`,description:`מסומן`},defaultChecked:{control:`boolean`,description:`ערך ברירת מחדל`},indeterminate:{control:`boolean`,description:`מצב ביניים`},disabled:{control:`boolean`,description:`מנוטרל`},size:{control:`radio`,options:[`default`,`small`],description:`גודל`},children:{control:`text`,description:`תווית`}},args:{children:`זכור אותי`,size:`default`,disabled:!1,indeterminate:!1}},c={},l={args:{checked:!0,children:`מסומן`}},u={args:{checked:!1,children:`לא מסומן`}},d={args:{indeterminate:!0,children:`מצב ביניים`}},f={args:{disabled:!0,children:`מנוטרל`}},p={args:{disabled:!0,checked:!0,children:`מנוטרל ומסומן`}},m={args:{size:`small`,children:`קטן`}},h={args:{children:void 0}},g={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,o.jsx)(t,{children:`לא מסומן`}),(0,o.jsx)(t,{checked:!0,children:`מסומן`}),(0,o.jsx)(t,{indeterminate:!0,children:`מצב ביניים`}),(0,o.jsx)(t,{disabled:!0,children:`מנוטרל`}),(0,o.jsx)(t,{disabled:!0,checked:!0,children:`מנוטרל ומסומן`})]}),parameters:{controls:{disable:!0}}},_={render:()=>(0,o.jsx)(a,{defaultValue:[`apple`],options:[{label:`תפוח`,value:`apple`},{label:`בננה`,value:`banana`},{label:`דובדבן`,value:`cherry`},{label:`מנגו (מנוטרל)`,value:`mango`,disabled:!0}]}),parameters:{controls:{disable:!0}}},v={render:()=>(0,o.jsx)(a,{defaultValue:[`tel-aviv`],direction:`vertical`,options:[{label:`תל אביב`,value:`tel-aviv`},{label:`ירושלים`,value:`jerusalem`},{label:`חיפה`,value:`haifa`},{label:`באר שבע`,value:`beer-sheva`}]}),parameters:{controls:{disable:!0}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    children: 'מסומן'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    children: 'לא מסומן'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    children: 'מצב ביניים'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'מנוטרל'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    children: 'מנוטרל ומסומן'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'קטן'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Checkbox>לא מסומן</Checkbox>
      <Checkbox checked>מסומן</Checkbox>
      <Checkbox indeterminate>מצב ביניים</Checkbox>
      <Checkbox disabled>מנוטרל</Checkbox>
      <Checkbox disabled checked>מנוטרל ומסומן</Checkbox>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup defaultValue={['apple']} options={[{
    label: 'תפוח',
    value: 'apple'
  }, {
    label: 'בננה',
    value: 'banana'
  }, {
    label: 'דובדבן',
    value: 'cherry'
  }, {
    label: 'מנגו (מנוטרל)',
    value: 'mango',
    disabled: true
  }]} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup defaultValue={['tel-aviv']} direction="vertical" options={[{
    label: 'תל אביב',
    value: 'tel-aviv'
  }, {
    label: 'ירושלים',
    value: 'jerusalem'
  }, {
    label: 'חיפה',
    value: 'haifa'
  }, {
    label: 'באר שבע',
    value: 'beer-sheva'
  }]} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Checked`,`Unchecked`,`Indeterminate`,`Disabled`,`DisabledChecked`,`Small`,`NoLabel`,`AllStates`,`GroupHorizontal`,`GroupVertical`]}))();export{g as AllStates,l as Checked,c as Default,f as Disabled,p as DisabledChecked,_ as GroupHorizontal,v as GroupVertical,d as Indeterminate,h as NoLabel,m as Small,u as Unchecked,y as __namedExportsOrder,s as default};