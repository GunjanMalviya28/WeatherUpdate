import{u as S,r,j as e}from"./index-DDIRA6QQ.js";import{F as b}from"./index-DzE6kLuu.js";import{F as k,a as C,b as L,c as z,d as I}from"./index-FsvdC5-5.js";import"./iconBase-UvTc6gH5.js";const R="_header_gmzjo_1",F="_logo_gmzjo_17",W="_image_gmzjo_35",D="_heading_gmzjo_43",E="_searchView_gmzjo_51",M="_searchWrapper_gmzjo_59",A="_icon_gmzjo_67",B="_show_gmzjo_105",O="_searchResult_gmzjo_123",T="_viewList_gmzjo_133",V="_viewItem_gmzjo_153",U="_itemSubtitle_gmzjo_191",$="_end_gmzjo_209",q="_headerActions_gmzjo_211",H="_btn_gmzjo_225",J="_clicked_gmzjo_271",P="_toggle_gmzjo_283",Q="_openS_gmzjo_285",G="_closeS_gmzjo_287",K="_open_gmzjo_285",s={header:R,logo:F,image:W,heading:D,searchView:E,searchWrapper:M,icon:A,show:B,searchResult:O,viewList:T,viewItem:V,itemSubtitle:U,end:$,headerActions:q,btn:H,clicked:J,toggle:P,openS:Q,closeS:G,open:K},X="/RepositoryName/assets/logo-CqEWNann.png",Y=()=>{const{setLatitude:l,setLongitude:a,setSearchResults:c}=S(),[o,g]=r.useState(!1),j=i=>{let p=i.coords.latitude,n=i.coords.longitude;l(p),a(n),c([]);const d=document.getElementById("locationBtn");d&&(d.style.backgroundColor="#8b8a8a",d.style.boxShadow="none",d.style.cursor="not-allowed",g(!0))},m=i=>{console.log("Error getting current location:",i)},u={enableHighAccuracy:!0};return{getCurrentLocationWeather:()=>{!o&&window.navigator.geolocation?navigator.geolocation.getCurrentPosition(j,m,u):alert("Error happened")},isDisabled:o}},Z=()=>{const l=JSON.parse(localStorage.getItem("darkmode"))||!1,[a,c]=r.useState(l),o=document.body;return r.useEffect(()=>{a?o.classList.add("dark"):o.classList.remove("dark"),localStorage.setItem("darkmode",JSON.stringify(a))},[a,o]),{isDarkMode:a,toggleMode:()=>{c(!a)}}},y=(l,a)=>{let c;return(...o)=>{clearTimeout(c),c=setTimeout(()=>l(...o),a)}};function oe(){var x;const[l,a]=r.useState(!1),{getCurrentLocationWeather:c,isDisabled:o}=Y(),{isDarkMode:g,toggleMode:j}=Z(),{setQuery:m,searchResults:u,setSearchResults:_,setLatitude:i,setLongitude:p}=S(),n=r.useRef(),d=r.useRef(),f=()=>{a(!0)},w=()=>{a(!1)},v=r.useCallback(y(t=>{const h=t.target.value.trim();if(h===""||h.length<=2){_([]);return}h.length>0?n.current.classList.add(s.show):n.current.classList.remove(s.show),m(h)},1200),[m,_]),N=(t,h)=>{i(t),p(h),m(null),_([]),a(!1),n.current&&(n.current.value="",n.current.classList.remove(s.show))};return e.jsxs("header",{id:"header",className:`${s.header} container`,children:[e.jsxs("a",{href:"#",className:s.logo,children:[e.jsx("img",{src:X,alt:"logo",className:s.image}),e.jsx("h1",{className:s.heading,children:"WeatherUpdate"})]}),e.jsxs("div",{className:`${s.searchView} ${l?s.open:""}`,children:[e.jsxs("div",{className:s.searchWrapper,children:[e.jsx("div",{className:s.icon,children:e.jsx(b,{})}),e.jsx("input",{type:"search",name:"search",ref:n,className:s.searchField,placeholder:"Search city...",autoComplete:"off",onChange:v}),e.jsx("button",{className:s.closeS,"aria-label":"close search",onClick:w,children:e.jsx(k,{})})]}),e.jsx("div",{className:s.searchResult,"data-search-result":!0,children:e.jsx("ul",{className:s.viewList,ref:d,children:u.length>0?u.map(t=>e.jsxs("div",{className:s.viewItem,onClick:()=>N(t.lat,t.lon),children:[e.jsx(C,{}),e.jsxs("div",{children:[e.jsx("p",{children:t==null?void 0:t.name}),e.jsxs("p",{className:s.itemSubtitle,children:[(t==null?void 0:t.state)||""," ",t==null?void 0:t.country]})]})]},t==null?void 0:t.lon)):((x=n.current)==null?void 0:x.value.trim().length)>0?e.jsx("div",{className:s.viewItem,children:"No Search Results Found!"}):null})})]}),e.jsxs("div",{className:s.end,children:[e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.openS,"aria-label":"open search",title:"open search",onClick:f,children:e.jsx(b,{})}),e.jsxs("button",{name:"location",disabled:o,className:s.btn,id:"locationBtn",title:"current location weather",onClick:c,children:[e.jsx(L,{}),e.jsx("span",{className:s.locationBtn,children:"Current Location"})]})]}),e.jsx("button",{className:s.toggle,"aria-label":"switch between light and dark mode",title:"switch the theme",onClick:j,children:g?e.jsx(z,{}):e.jsx(I,{})})]})]})}export{oe as default};
