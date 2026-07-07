import{i as e}from"./preload-helper-Cs4UwXAW.js";import{O as t,at as n,n as r,t as i}from"./iframe-PJti-vyW.js";var a,o,s,c,l=e((()=>{r(),a=t.Avatar,o=t.Button,s=t.Input,c=t.Image,t.Node})),u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),l(),u=i(),d={title:`Components/Skeleton`,component:t,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(`div`,{dir:`rtl`,style:{fontFamily:`"Heebo", sans-serif`,maxWidth:500},children:(0,u.jsx)(e,{})})],argTypes:{loading:{control:`boolean`,description:`מצב טעינה`},avatar:{control:`boolean`,description:`הצג אווטאר`},title:{control:`boolean`,description:`הצג כותרת`},paragraph:{control:`boolean`,description:`הצג פסקה`}},args:{loading:!0,avatar:!1,title:!0,paragraph:!0}},f={},p={args:{avatar:!0}},m={args:{paragraph:!1}},h={args:{loading:!1,children:(0,u.jsx)(`p`,{style:{margin:0},children:`התוכן האמיתי מוצג כאן לאחר הטעינה.`})}},g={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{style:{fontSize:11,color:`rgba(0,0,0,0.45)`,marginBottom:8},children:`גדול עגול`}),(0,u.jsx)(a,{size:`large`,shape:`circle`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{style:{fontSize:11,color:`rgba(0,0,0,0.45)`,marginBottom:8},children:`רגיל עגול`}),(0,u.jsx)(a,{size:`default`,shape:`circle`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{style:{fontSize:11,color:`rgba(0,0,0,0.45)`,marginBottom:8},children:`קטן ריבוע`}),(0,u.jsx)(a,{size:`small`,shape:`square`})]})]}),parameters:{controls:{disable:!0}}},_={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,u.jsx)(s,{size:`small`}),(0,u.jsx)(s,{size:`default`}),(0,u.jsx)(s,{size:`large`}),(0,u.jsx)(s,{block:!0})]}),parameters:{controls:{disable:!0}}},v={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,u.jsx)(o,{size:`small`}),(0,u.jsx)(o,{size:`default`}),(0,u.jsx)(o,{size:`large`}),(0,u.jsx)(o,{shape:`round`}),(0,u.jsx)(o,{shape:`circle`})]}),parameters:{controls:{disable:!0}}},y={render:()=>(0,u.jsx)(c,{}),parameters:{controls:{disable:!0}}},b={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[1,2].map(e=>(0,u.jsx)(`div`,{style:{padding:16,border:`1px solid #f0f0f0`,borderRadius:8},children:(0,u.jsx)(t,{avatar:!0,loading:!0,children:(0,u.jsx)(`div`,{})})},e))}),parameters:{controls:{disable:!0}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    paragraph: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    children: <p style={{
      margin: 0
    }}>התוכן האמיתי מוצג כאן לאחר הטעינה.</p>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <div>
        <div style={{
        fontSize: 11,
        color: 'rgba(0,0,0,0.45)',
        marginBottom: 8
      }}>גדול עגול</div>
        <SkeletonAvatar size="large" shape="circle" />
      </div>
      <div>
        <div style={{
        fontSize: 11,
        color: 'rgba(0,0,0,0.45)',
        marginBottom: 8
      }}>רגיל עגול</div>
        <SkeletonAvatar size="default" shape="circle" />
      </div>
      <div>
        <div style={{
        fontSize: 11,
        color: 'rgba(0,0,0,0.45)',
        marginBottom: 8
      }}>קטן ריבוע</div>
        <SkeletonAvatar size="small" shape="square" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <SkeletonInput size="small" />
      <SkeletonInput size="default" />
      <SkeletonInput size="large" />
      <SkeletonInput block />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <SkeletonButton size="small" />
      <SkeletonButton size="default" />
      <SkeletonButton size="large" />
      <SkeletonButton shape="round" />
      <SkeletonButton shape="circle" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SkeletonImage />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {[1, 2].map(i => <div key={i} style={{
      padding: 16,
      border: '1px solid #f0f0f0',
      borderRadius: 8
    }}>
          <Skeleton avatar loading>
            <div />
          </Skeleton>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithAvatar`,`TitleOnly`,`NotLoading`,`AvatarVariants`,`InputVariants`,`ButtonVariants`,`ImageVariant`,`CardSkeleton`]}))();export{g as AvatarVariants,v as ButtonVariants,b as CardSkeleton,f as Default,y as ImageVariant,_ as InputVariants,h as NotLoading,m as TitleOnly,p as WithAvatar,x as __namedExportsOrder,d as default};