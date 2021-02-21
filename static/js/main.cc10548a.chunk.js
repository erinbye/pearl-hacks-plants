(this["webpackJsonppearl-hacks-plants"]=this["webpackJsonppearl-hacks-plants"]||[]).push([[0],[,,function(A){A.exports=JSON.parse('{"a":[{"id":0,"name":"Aluminum Plant","level":"Easy","water":"once every week","sunlight":"bright light","fertilizer":"every two weeks","picture":"https://www.guide-to-houseplants.com/images/aluminum-plant.jpg","owned":false},{"id":1,"name":"Baby Rubber Plant","level":"Easy","water":"once every week","sunlight":"bright, indirect light","fertilizer":"every two weeks","picture":"https://www.guide-to-houseplants.com/images/peperomia-obtusifolia-window.jpg","owned":false},{"id":2,"name":"Caladium Plant","level":"Medium","water":"once every week","sunlight":"bright, indirect light","fertilizer":"every two weeks","picture":"https://www.guide-to-houseplants.com/images/caladium-leaves.jpg","owned":false},{"id":3,"name":"Dragon Tree","level":"Medium","water":"once every week","sunlight":"bright, indirect light","fertilizer":"every two weeks","picture":"https://www.guide-to-houseplants.com/images/dragon-tree.jpg","owned":false}]}')},,,function(A,e,t){},,,,,,,function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var a=t(1),n=t.n(a),l=t(6),r=t.n(l),c=(t(11),t(12),t(3)),s=(t(13),t(2)),i=t.p+"static/media/logo.a303aa12.svg",u=(t(5),t(0)),d=function(A){var e=A.setPage,t=function(A){e(A)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("nav",{class:"whiteSpace",children:"whitespace"}),Object(u.jsxs)("nav",{class:"navbar navbar-expand-lg",children:[Object(u.jsx)("h1",{children:Object(u.jsx)("img",{className:"disp",src:i,width:"100",height:"100",alt:"Home Page Image"})}),Object(u.jsx)("h2",{class:"navbar-brand text-white",children:"Bud Buddy"}),Object(u.jsx)("a",{class:"nav-link text-white",href:"#",onClick:function(){return t("Home")},children:"Home"}),Object(u.jsx)("a",{class:"nav-link text-white",href:"#",onClick:function(){return t("My Plants")},children:"My Plants"}),Object(u.jsx)("a",{class:"nav-link text-white",href:"#",onClick:function(){return t("Explore")},children:"Explore"})]})]})},p=t.p+"static/media/home.c5252edd.svg",j=function(A){var e=A.setPage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Object(u.jsx)("img",{className:"homeimg",src:p,width:"400",height:"400",alt:"Home Page Image"})}),Object(u.jsx)("h4",{className:"header",children:"Take care of your plants!"}),Object(u.jsx)("h5",{className:"body",children:"Search a plant and add it to your garden!"}),Object(u.jsx)("button",{className:"button",onClick:function(){e("Explore")},children:"Get Started"})]})},f=(t(15),function(A){var e=A.plantData,t=A.page,a=A.setPlantId,n=A.setPage,l=function(A){a(A),n("Plant")},r=200;return Object(u.jsxs)("div",{className:"list",children:[Object(u.jsx)("h1",{children:t}),"My Plants"===t?Object(u.jsx)("ul",{className:"plant-items",children:e.length?e.filter((function(A){return!0===A.owned})).map((function(A){var e=A.id,t=A.name,a=A.picture;return Object(u.jsxs)("div",{className:"plant-item",children:[Object(u.jsx)("a",{onClick:function(){return l(e)},children:Object(u.jsx)("img",{src:a,class:"figure-img img-fluid rounded mx-auto",width:r,height:r})}),Object(u.jsx)("h3",{class:"figure-caption mx-auto",children:t})]},e)})):Object(u.jsx)("p",{children:"No Results to Display"})}):Object(u.jsx)("ul",{className:"plant-items",children:e.length?e.map((function(A){var e=A.id,t=A.name,a=A.picture;return Object(u.jsxs)("div",{className:"plant-item",children:[Object(u.jsx)("a",{onClick:function(){return l(e)},children:Object(u.jsx)("img",{src:a,width:r,class:"figure-img img-fluid rounded me-1",height:r})}),Object(u.jsx)("h3",{class:"figure-caption",children:t})]},e)})):Object(u.jsx)("p",{children:"No Results to Display"})})]})}),b=(t(16),function(A){var e=A.handleSearch;return Object(u.jsx)("div",{class:"searchDiv",children:Object(u.jsx)("form",{class:"d-flex",children:Object(u.jsx)("input",{type:"search",placeholder:"Search","aria-label":"Search",onChange:function(A){e(A.target.value)}})})})}),v=function(A){var e=A.plants,t=A.setPlantId,a=A.setPage,n=A.handleSearch;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{handleSearch:n}),Object(u.jsx)(f,{plantData:e,page:"My Plants",setPlantId:t,setPage:a})]})},o=function(A){var e=A.plants,t=A.setPlantId,a=A.setPage,n=A.handleSearch;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{handleSearch:n}),Object(u.jsx)(f,{plantData:e,page:"Explore",setPlantId:t,setPage:a})]})},h=t.p+"static/media/sun.7694306d.png",S=t.p+"static/media/fertilizer.8fe5fea3.png",O=function(A){var e=A.plantId,t=A.plants,a=A.setPage,n=t.filter((function(A){return A.id===e}))[0];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:n.name}),Object(u.jsxs)("h2",{children:["Level: ",n.level]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"water",width:"50",height:"50"}),": ",n.water]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("img",{src:h,alt:"sun",width:"50",height:"50"}),": ",n.sunlight]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("img",{src:S,alt:"fertilizer",width:"50",height:"50"}),": ",n.fertilizer]}),Object(u.jsx)("img",{src:n.picture}),Object(u.jsx)("div",{}),Object(u.jsxs)("button",{onClick:function(){n.owned=!n.owned,a("My Plants")},children:[n.owned?"Remove":"Add"," ",n.name," ",n.owned?"from":"to"," My Plants"]})]})};var x=function(){var A=Object(a.useState)(-1),e=Object(c.a)(A,2),t=e[0],n=e[1],l=Object(a.useState)("Home"),r=Object(c.a)(l,2),i=r[0],p=r[1],f=Object(a.useState)([]),b=Object(c.a)(f,2),h=b[0],S=b[1];Object(a.useEffect)((function(){S(s.a)}),[]);var x=function(A){var e=s.a.filter((function(e){if(e.name.toLowerCase().includes(A.toLowerCase())||e.name.toLowerCase().includes(A.toLowerCase()))return e}));S(e)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{setPage:p}),"Plant"===i?Object(u.jsx)(O,{plantId:t,plants:h,setPage:p}):"Home"===i?Object(u.jsx)(j,{setPage:p}):"My Plants"===i?Object(u.jsx)(v,{handleSearch:x,plants:s.a,setPlantId:n,setPage:p}):Object(u.jsx)(o,{handleSearch:x,plants:h,setPlantId:n,setPage:p})]})},q=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,l=e.getLCP,r=e.getTTFB;t(A),a(A),n(A),l(A),r(A)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),q()}],[[17,1,2]]]);
//# sourceMappingURL=main.cc10548a.chunk.js.map