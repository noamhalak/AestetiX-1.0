import{i as e,s as t}from"./preload-helper-Cs4UwXAW.js";import{at as n,t as r}from"./iframe-PJti-vyW.js";import{d as i,f as a,i as o,n as s,t as c}from"./tabler-icons-react-xgqxi6yh.js";function l(e){return typeof e==`number`?e:d[e]??20}var u,d,f,p=e((()=>{n(),u=r(),d={xs:12,sm:16,md:20,lg:24,xl:32},f=({icon:e,size:t=`md`,color:n,stroke:r=2,className:i,style:a})=>(0,u.jsx)(e,{size:l(t),color:n,stroke:r,className:i,style:a}),f.__docgenInfo={description:``,methods:[],displayName:`Icon`,props:{size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | number`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`number`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``},stroke:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},icon:{required:!0,tsType:{name:`ReactFC`,raw:`React.FC<TablerIconProps>`,elements:[{name:`TablerIconProps`}]},description:``}}}})),m,h,g,_,v,y,b,x,S;e((()=>{m=t(n()),p(),c(),h=r(),g=Object.entries(s).filter(([e])=>e.startsWith(`Icon`)&&e!==`IconBaselineDensityLarge`),_={title:`Components/Icon`,component:f,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{size:{control:`number`,description:`גודל (px)`},color:{control:`color`,description:`צבע`},stroke:{control:`number`,description:`עובי קו`}},args:{icon:a,size:24,color:`currentColor`,stroke:2}},v={},y={render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``),i=(0,m.useMemo)(()=>{let t=e.toLowerCase().replace(/\s+/g,``);return t?g.filter(([e])=>e.toLowerCase().includes(t)):g},[e]),a=e=>{navigator.clipboard.writeText(`<${e} />`),r(e),setTimeout(()=>r(``),1500)};return(0,h.jsxs)(`div`,{style:{fontFamily:`"Heebo", sans-serif`,width:900},children:[(0,h.jsxs)(`div`,{style:{marginBottom:16,display:`flex`,alignItems:`center`,gap:12},children:[(0,h.jsx)(`input`,{placeholder:`חפש אייקון...`,value:e,onChange:e=>t(e.target.value),style:{flex:1,padding:`8px 12px`,border:`1px solid #d9d9d9`,borderRadius:6,fontSize:14,direction:`rtl`,outline:`none`}}),(0,h.jsxs)(`span`,{style:{color:`#888`,fontSize:13,whiteSpace:`nowrap`},children:[i.length.toLocaleString(),` אייקונים`]})]}),(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(90px, 1fr))`,gap:4,maxHeight:600,overflowY:`auto`,padding:4},children:i.map(([e,t])=>(0,h.jsxs)(`div`,{title:e,onClick:()=>a(e),style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4,padding:`10px 4px`,borderRadius:6,cursor:`pointer`,background:n===e?`#e6f4ff`:`transparent`,border:n===e?`1px solid #91caff`:`1px solid transparent`,transition:`background 0.15s`},onMouseEnter:t=>{n!==e&&(t.currentTarget.style.background=`#f5f5f5`)},onMouseLeave:t=>{n!==e&&(t.currentTarget.style.background=`transparent`)},children:[(0,h.jsx)(t,{size:22,stroke:1.5}),(0,h.jsx)(`span`,{style:{fontSize:9,color:`#888`,textAlign:`center`,wordBreak:`break-all`,lineHeight:1.3,maxWidth:80},children:e.replace(`Icon`,``)})]},e))}),n&&(0,h.jsxs)(`div`,{style:{position:`fixed`,bottom:24,left:`50%`,transform:`translateX(-50%)`,background:`#141414`,color:`#fff`,padding:`8px 16px`,borderRadius:6,fontSize:13,zIndex:9999},children:[`<${n} />`,` הועתק`]})]})},parameters:{controls:{disable:!0},layout:`padded`}},b={render:()=>(0,h.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[16,20,24,32,48].map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,h.jsx)(o,{size:e}),(0,h.jsxs)(`span`,{style:{fontSize:11,color:`#888`},children:[e,`px`]})]},e))}),parameters:{controls:{disable:!0}}},x={render:()=>(0,h.jsx)(`div`,{style:{display:`flex`,gap:20,alignItems:`center`},children:[1,1.5,2,2.5,3].map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,h.jsx)(i,{size:28,stroke:e}),(0,h.jsxs)(`span`,{style:{fontSize:11,color:`#888`},children:[`stroke `,e]})]},e))}),parameters:{controls:{disable:!0}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState('');
    const filtered = useMemo(() => {
      const q = search.toLowerCase().replace(/\\s+/g, '');
      return q ? allIcons.filter(([name]) => name.toLowerCase().includes(q)) : allIcons;
    }, [search]);
    const copy = (name: string) => {
      navigator.clipboard.writeText(\`<\${name} />\`);
      setCopied(name);
      setTimeout(() => setCopied(''), 1500);
    };
    return <div style={{
      fontFamily: '"Heebo", sans-serif',
      width: 900
    }}>
        <div style={{
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
          <input placeholder="חפש אייקון..." value={search} onChange={e => setSearch(e.target.value)} style={{
          flex: 1,
          padding: '8px 12px',
          border: '1px solid #d9d9d9',
          borderRadius: 6,
          fontSize: 14,
          direction: 'rtl',
          outline: 'none'
        }} />
          <span style={{
          color: '#888',
          fontSize: 13,
          whiteSpace: 'nowrap'
        }}>
            {filtered.length.toLocaleString()} אייקונים
          </span>
        </div>

        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
        gap: 4,
        maxHeight: 600,
        overflowY: 'auto',
        padding: 4
      }}>
          {filtered.map(([name, IconComp]) => <div key={name} title={name} onClick={() => copy(name)} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          padding: '10px 4px',
          borderRadius: 6,
          cursor: 'pointer',
          background: copied === name ? '#e6f4ff' : 'transparent',
          border: copied === name ? '1px solid #91caff' : '1px solid transparent',
          transition: 'background 0.15s'
        }} onMouseEnter={e => {
          if (copied !== name) (e.currentTarget as HTMLDivElement).style.background = '#f5f5f5';
        }} onMouseLeave={e => {
          if (copied !== name) (e.currentTarget as HTMLDivElement).style.background = 'transparent';
        }}>
              <IconComp size={22} stroke={1.5} />
              <span style={{
            fontSize: 9,
            color: '#888',
            textAlign: 'center',
            wordBreak: 'break-all',
            lineHeight: 1.3,
            maxWidth: 80
          }}>
                {name.replace('Icon', '')}
              </span>
            </div>)}
        </div>

        {copied && <div style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#141414',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: 6,
        fontSize: 13,
        zIndex: 9999
      }}>
            {\`<\${copied} />\`} הועתק
          </div>}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {[16, 20, 24, 32, 48].map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }}>
          <TablerIcons.IconStar size={s} />
          <span style={{
        fontSize: 11,
        color: '#888'
      }}>{s}px</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20,
    alignItems: 'center'
  }}>
      {[1, 1.5, 2, 2.5, 3].map(w => <div key={w} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }}>
          <TablerIcons.IconHeart size={28} stroke={w} />
          <span style={{
        fontSize: 11,
        color: '#888'
      }}>stroke {w}</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`AllIcons`,`SizeScale`,`StrokeWeights`]}))();export{y as AllIcons,v as Default,b as SizeScale,x as StrokeWeights,S as __namedExportsOrder,_ as default};