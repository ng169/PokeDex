(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(20),o=n.n(i),s=(n(65),n(37)),r=n(116),j=(n(66),n(28)),p=n(22),d=n(117),h=n(118),b=n(119),u=n(120),l=n(97),x=n(121),O=n(122),m=n(126),f=n(114),g=n(12),k=n(30),v=n.n(k),w=n(123),y=n(53),C=n.n(y),I=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},P=n(2),N=Object(f.a)((function(e){return{pokedexContainer:{padding:"10px 50px"},appbar:{backgroundColor:"#f44336"},cardMedia:{margin:"auto"},root:{flexGrow:1},title:Object(p.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),S=function(){var e=N(),t=Object(r.d)(),n=Object(c.useState)(void 0),a=Object(j.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(""),p=Object(j.a)(s,2),f=p[0],g=p[1];Object(c.useEffect)((function(){v.a.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(e){var t=e.data.results,n={};t.forEach((function(e,t){n[t+1]={id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}})),o(n)}))}),[]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(x.a,{position:"static",className:e.appbar,children:Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(O.a,{children:[Object(P.jsx)(l.a,{className:e.title,variant:"h6",noWrap:!0,children:"Pokedex"}),Object(P.jsxs)("div",{className:e.search,children:[Object(P.jsx)("div",{className:e.searchIcon,children:Object(P.jsx)(C.a,{})}),Object(P.jsx)(m.a,{onChange:function(e){g(e.target.value.toLowerCase())},placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})}),i?Object(P.jsx)(d.a,{container:!0,spacing:2,className:e.pokedexContainer,children:Object.keys(i).map((function(n){return i[n].name.includes(f)&&function(n){var c=i[n],a=c.id,o=c.name,s=c.sprite;return Object(P.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(P.jsxs)(h.a,{onClick:function(){return t.push("/PokeDex/".concat(n))},children:[Object(P.jsx)(b.a,{className:e.cardMedia,image:s,style:{width:"130px",height:"130px"}}),Object(P.jsx)(u.a,{children:Object(P.jsx)(l.a,{children:"".concat(a,".").concat(I(o))})})]})},n)}(n)}))}):Object(P.jsx)(w.a,{})]})},E=n(124),D=n(125),L=function(){var e=Object(r.d)(),t=Object(r.e)().pokemonId,n=Object(c.useState)(void 0),a=Object(j.a)(n,2),i=a[0],o=a[1];Object(c.useEffect)((function(){v.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/")).then((function(e){var t=e.data;o(t)})).catch((function(e){o(!1)}))}),[t]);return Object(P.jsxs)(P.Fragment,{children:[void 0===i&&Object(P.jsx)(w.a,{}),void 0!==i&&i&&function(e){var t=e.name,n=e.id,c=e.species,a=e.height,i=e.weight,o=e.types,s=e.sprites,r="https://pokeres.bastionbot.org/images/pokemon/".concat(n,".png"),j=s.front_default;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(l.a,{variant:"h1",children:["".concat(n,".")," ",I(t),Object(P.jsx)("img",{src:j,alt:"spritepokemon"})]}),Object(P.jsx)("img",{style:{width:"300px",height:"300px"},src:r,alt:"imgpokemon"}),Object(P.jsx)(l.a,{variant:"h3",children:"Pokemon Info"}),Object(P.jsxs)(l.a,{children:["Species: ",Object(P.jsxs)(E.a,{href:c.url,children:[c.name," "]})]}),Object(P.jsxs)(l.a,{children:["Height: ",a," "]}),Object(P.jsxs)(l.a,{children:["Weight: ",i," "]}),Object(P.jsx)(l.a,{variant:"h6",children:" Types:"}),o.map((function(e){var t=e.type.name;return Object(P.jsxs)(l.a,{children:[" ","".concat(t)]},t)}))]})}(i),!1===i&&Object(P.jsx)(l.a,{children:" Pokemon not found"}),void 0!==i&&Object(P.jsx)(D.a,{variant:"contained",onClick:function(){return e.push("/PokeDex/")},children:"back to pokedex"})]})};var R=function(){return Object(P.jsxs)(r.c,{children:[Object(P.jsx)(r.a,{exact:!0,path:"/PokeDex/",render:function(e){return Object(P.jsx)(S,Object(s.a)({},e))}}),Object(P.jsx)(r.a,{exact:!0,path:"/PokeDex/:pokemonId",render:function(e){return Object(P.jsx)(L,Object(s.a)({},e))}})]})},F=n(14),M=Object(F.a)();o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(r.b,{history:M,children:Object(P.jsx)(R,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.1d0b18a5.chunk.js.map