import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{a as n,at as r,n as i,t as a}from"./iframe-COCI6Ql1.js";import{r as o,t as s}from"./Tag-Bv8KJQ05.js";var c=e((()=>{i()})),l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{l=t(r()),c(),o(),u=a(),d=[{id:1,name:`דני לוי`,role:`מפתח בכיר`,department:`טכנולוגיה`,status:`active`},{id:2,name:`שרה כהן`,role:`מעצבת UX`,department:`עיצוב`,status:`active`},{id:3,name:`מיכל ברון`,role:`מנהלת מוצר`,department:`מוצר`,status:`inactive`},{id:4,name:`יובל שמש`,role:`אנליסט נתונים`,department:`BI`,status:`active`},{id:5,name:`נועה גל`,role:`מנהלת שיווק`,department:`שיווק`,status:`active`}],f=[{key:`name`,title:`שם`,dataIndex:`name`,sorter:!0},{key:`role`,title:`תפקיד`,dataIndex:`role`},{key:`department`,title:`מחלקה`,dataIndex:`department`,sorter:!0},{key:`status`,title:`סטטוס`,dataIndex:`status`,render:e=>(0,u.jsx)(s,{color:e===`active`?`success`:`default`,children:e===`active`?`פעיל`:`לא פעיל`})}],p={title:`Components/Table`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:800},children:(0,u.jsx)(e,{})})],argTypes:{selectable:{control:`boolean`,description:`בחירת שורות`},loading:{control:`boolean`,description:`מצב טעינה`}},args:{columns:f,dataSource:d,rowKey:`id`,selectable:!1,loading:!1}},m={},h={render:()=>{let[e,t]=l.useState([]);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[e.length>0&&(0,u.jsxs)(`div`,{style:{fontSize:14,color:`rgba(0,0,0,0.65)`},children:[`נבחרו `,e.length,` שורות: `,e.join(`, `)]}),(0,u.jsx)(n,{columns:f,dataSource:d,rowKey:`id`,selectable:!0,selectedRowKeys:e,onSelectChange:t})]})},parameters:{controls:{disable:!0}}},g={args:{loading:!0}},_={args:{dataSource:[]}},v={args:{columns:f.map(e=>({...e,sorter:!0}))}},y={render:()=>(0,u.jsx)(n,{columns:[{key:`city`,title:`עיר`,dataIndex:`city`},{key:`population`,title:`אוכלוסייה`,dataIndex:`population`,align:`right`}],dataSource:[{key:`1`,city:`ירושלים`,population:`948,000`},{key:`2`,city:`תל אביב`,population:`460,000`},{key:`3`,city:`חיפה`,population:`285,000`}]}),parameters:{controls:{disable:!0}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        {selectedKeys.length > 0 && <div style={{
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)'
      }}>
            נבחרו {selectedKeys.length} שורות: {selectedKeys.join(', ')}
          </div>}
        <Table columns={columns} dataSource={employees} rowKey="id" selectable selectedRowKeys={selectedKeys} onSelectChange={setSelectedKeys} />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: []
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sorter: true
    }))
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const simpleColumns: TableColumn<{
      key: string;
      city: string;
      population: string;
    }>[] = [{
      key: 'city',
      title: 'עיר',
      dataIndex: 'city'
    }, {
      key: 'population',
      title: 'אוכלוסייה',
      dataIndex: 'population',
      align: 'right'
    }];
    const data = [{
      key: '1',
      city: 'ירושלים',
      population: '948,000'
    }, {
      key: '2',
      city: 'תל אביב',
      population: '460,000'
    }, {
      key: '3',
      city: 'חיפה',
      population: '285,000'
    }];
    return <Table columns={simpleColumns} dataSource={data} />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Selectable`,`Loading`,`Empty`,`WithSorting`,`SimpleTable`]}))();export{m as Default,_ as Empty,g as Loading,h as Selectable,y as SimpleTable,v as WithSorting,b as __namedExportsOrder,p as default};