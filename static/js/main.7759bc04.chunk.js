(this.webpackJsonptaikhoan=this.webpackJsonptaikhoan||[]).push([[0],{35:function(t,e,n){},36:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),r=n(4),s=n.n(r),a=(n(35),n(7)),i=n(8),l=n(10),d=n(9),h=(n(36),n(1)),u=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(a.a)(this,n),e.call(this,t)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:this.props.title}),Object(h.jsx)("p",{children:this.props.description})]})}}]),n}(o.Component),j=n(26),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,c=e.value;o.setState(Object(j.a)({},n,c))},o.onSearch=function(){o.props.onSearch(o.state.keyword)},o.state={keyword:""},o}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.keyword;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"text",name:"keyword",value:t,onChange:this.onChange,className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a..."}),Object(h.jsx)("span",{className:"input-group-btn",children:Object(h.jsxs)("button",{className:"btn btn-primary",type:"button",onClick:this.onSearch,children:[Object(h.jsx)("span",{className:"fa fa-search mr-5"}),"T\xecm"]})})]})})})}}]),n}(o.Component),b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).onClickSort=function(e,n){console.log(e,"-111",n),t.props.onSort(e,n)},t}return Object(i.a)(n,[{key:"componentWillReceiveProps",value:function(t){console.log("next",t)}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:["S\u1eafp X\u1ebfp ",Object(h.jsx)("span",{className:"fa fa-caret-square-o-down ml-5"})]}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",children:[Object(h.jsx)("li",{onClick:function(){return t.onClickSort("price",1)},children:Object(h.jsx)("a",{role:"button",className:"price"===this.props.sortBy&&1===this.props.sortValue?"sort_selected":"",children:Object(h.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"Gi\xe1 t\u1eeb th\u1ea5p \u0111\u1ebfn cao"})})}),Object(h.jsx)("li",{onClick:function(){return t.onClickSort("price",-1)},children:Object(h.jsx)("a",{role:"button",className:"price"===this.props.sortBy&&-1===this.props.sortValue?"sort_selected":"",children:Object(h.jsx)("span",{className:"fa fa-sort-alpha-desc pr-5",children:"Gi\xe1 t\u1eeb cao \u0111\u1ebfn th\u1ea5p"})})}),Object(h.jsx)("li",{role:"separator",className:"divider"}),Object(h.jsx)("li",{onClick:function(){return t.onClickSort("accountnr",1)},children:Object(h.jsx)("a",{role:"button",className:"accountnr"===this.props.sortBy&&1===this.props.sortValue?"sort_selected":"",children:" S\u1ed1 t\xe0i kho\u1ea3n t\u0103ng d\u1ea7n"})}),Object(h.jsx)("li",{onClick:function(){return t.onClickSort("accountnr",-1)},children:Object(h.jsx)("a",{role:"button",className:"accountnr"===this.props.sortBy&&-1===this.props.sortValue?"sort_selected":"",children:" S\u1ed1 t\xe0i kho\u1ea3n gi\u1ea3m d\u1ea7n"})})]})]})})})}}]),n}(o.Component),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return console.log("control",this.props.onSort,"-",this.props.sortBy,"-",this.props.sortValue),Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{onSearch:this.props.onSearch}),Object(h.jsx)(b,{onSort:this.props.onSort,sortBy:this.props.sortBy,sortValue:this.props.sortValue})]})}}]),n}(o.Component),v=n(60),f=n(63),O=n(65),g=n(64),x=Object(v.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}}));function y(t){var e=x();console.log(t);return null==t.entity?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:t.open,onClose:function(){t.closePopup()},closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500},children:Object(h.jsx)(g.a,{in:t.open,children:Object(h.jsx)("div",{className:" col-4",children:Object(h.jsxs)("div",{className:"module mid paper",style:{background:'url("'.concat(t.entity.background,'") center center / cover')},children:[console.log("props.entity",t.entity),Object(h.jsxs)("h2",{className:"pt-5",children:[t.entity.name,Object(h.jsx)("br",{}),t.entity.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")+"\u20ab"]})]})})})})})}var k={lv1:{from:0,to:0},lv2:{from:0,to:1e6},lv3:{from:1e6,to:1e7},lv4:{from:1e7,to:1e8},lv5:{from:1e8,to:9999999999999}},S=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).clicked=function(){o.setState({show:!o.state.show})},o.onSort=function(t,e){o.setState({sortBy:t,sortValue:e})},o.onSearch=function(t){o.setState({keyword:t}),o.getAllData(t),console.log("keyword -",t)},o.closePopup=function(){o.setState({open:!1})},o.popUp=function(t){o.setState({open:!0,entity:t})},o.state={datas:[],title:"",des:"",keyword:"",open:!1,sort:{by:"price",value:1}},o}return Object(i.a)(n,[{key:"componentWillMount",value:function(){this.getData()}},{key:"currencyFormat",value:function(t){return console.log("1212",t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")+"\u20ab"}},{key:"getData",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;console.log("inside handleGetJson"),fetch("/Files/data.json").then((function(t){return t.json()})).then((function(o){console.log("aaaw","-",o);var c=o.filter((function(t){return(null==e||t.price>=e)&&(null==n||t.price<=n)}));localStorage.setItem("datas",JSON.stringify(c)),t.setState({datas:c})})).catch((function(t){console.log("err",t)})),this.loadTitle(n),console.log("title",n)}},{key:"loadTitle",value:function(t){console.log("title222",t);var e="",n="";t===k.lv1.to?(e="T\u1ea5t c\u1ea3 c\xe1c m\u1ee9c gi\xe1",n="Xem th\xf4ng tin c\u1ee7a t\u1ea5t c\u1ea3 s\u1ed1 b\xean d\u01b0\u1edbi"):t===k.lv2.to?(e="Gi\xe1 t\u1eeb ".concat(this.currencyFormat(k.lv2.from.toString())," - ").concat(this.currencyFormat(k.lv2.to.toString())),n="Xem th\xf4ng tin c\u1ee7a t\u1ea5t c\u1ea3 s\u1ed1 b\xean d\u01b0\u1edbi"):t===k.lv3.to?(e="Gi\xe1 t\u1eeb ".concat(this.currencyFormat(k.lv3.from.toString())," - ").concat(this.currencyFormat(k.lv3.to.toString())),n="Xem th\xf4ng tin c\u1ee7a t\u1ea5t c\u1ea3 s\u1ed1 b\xean d\u01b0\u1edbi"):t===k.lv4.to?(e="Gi\xe1 t\u1eeb ".concat(this.currencyFormat(k.lv4.from.toString())," - ").concat(this.currencyFormat(k.lv4.to.toString())),n="Xem th\xf4ng tin c\u1ee7a t\u1ea5t c\u1ea3 s\u1ed1 b\xean d\u01b0\u1edbi"):(e="Tr\xean  ".concat(this.currencyFormat(k.lv4.to.toString())),n="Xem th\xf4ng tin c\u1ee7a t\u1ea5t c\u1ea3 s\u1ed1 b\xean d\u01b0\u1edbi"),console.log("Core - ",t),this.setState({title:e,des:n})}},{key:"getAllData",value:function(t){var e=this;console.log("filter",t),fetch("./Files/data.json").then((function(t){return t.json()})).then((function(n){var o=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t)}));localStorage.setItem("datas",JSON.stringify(o)),e.setState({datas:o})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.sortBy,o=e.sortValue;e.keyword;console.log("datas",this.state.datas),"price"===n?this.state.datas.sort((function(t,e){return t.price>e.price?o:t.price<e.price?-o:0})):"accountnr"===n&&this.state.datas.sort((function(t,e){return t.name>e.name?o:t.name<e.name?-o:0}));var c=this.state.datas.sort((function(t){return t.price})).map((function(e,n){var o="";o=e.price>k.lv2.from&&e.price<=k.lv2.to?"./Files/images/h2.jpg":e.price>k.lv3.from&&e.price<=k.lv3.to?"./Files/images/h3.png":(e.price>k.lv4.from&&(e.price,k.lv4.to),"./Files/images/h4.png");var c={background:'url("'.concat(o,'") center center / cover')};return e.background=o,Object(h.jsx)("div",{className:" col-4",onClick:function(){return t.popUp(e)},children:Object(h.jsx)("div",{className:"module mid",style:c,children:Object(h.jsxs)("h2",{className:"pt-5",children:[e.name,Object(h.jsx)("br",{}),t.currencyFormat(e.price+"")]})})},n)}));return console.log(c),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"T\xe0i kho\u1ea3n s\u1ed1 \u0111\u1eb9p MB"})}),Object(h.jsx)("div",{children:Object(h.jsx)(y,{open:this.state.open,closePopup:this.closePopup,entity:this.state.entity})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3 col-s-3 menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"M\u1ee9c gi\xe1"}),Object(h.jsx)("li",{onClick:function(){return t.getData(k.lv1.from,k.lv1.to)},children:"T\u1ea5t c\u1ea3 gi\xe1"}),Object(h.jsx)("li",{onClick:function(){return t.getData(k.lv2.from,k.lv2.to)},children:"0 - 1.000.000"}),Object(h.jsx)("li",{onClick:function(){return t.getData(k.lv3.from,k.lv3.to)},children:"1.000.000 - 10.000.000"}),Object(h.jsx)("li",{onClick:function(){return t.getData(k.lv4.from,k.lv4.to)},children:"10.000.000 - 100.000.000"}),Object(h.jsx)("li",{onClick:function(){return t.getData(k.lv5.from,k.lv5.to)},children:"H\u01a1n 100.000.000"})]})}),Object(h.jsxs)("div",{className:"col-6 col-s-9",children:[Object(h.jsx)(m,{onSearch:this.onSearch,onSort:this.onSort,sortBy:n,sortValue:o}),Object(h.jsx)(u,{title:this.state.title,description:this.state.des}),Object(h.jsx)("div",{className:"row",children:c})]}),Object(h.jsx)("div",{className:"col-3 col-s-12",children:Object(h.jsxs)("div",{className:"aside",children:[Object(h.jsx)("h2",{children:"What?"}),Object(h.jsx)("p",{children:"Chania is a city on the island of Crete."}),Object(h.jsx)("h2",{children:"Where?"}),Object(h.jsx)("p",{children:"Crete is a Greek island in the Mediterranean Sea."}),Object(h.jsx)("h2",{children:"How?"}),Object(h.jsx)("p",{children:"You can reach Chania airport from all over Europe."})]})})]}),Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("p",{children:"Resize the browser window to see how the content respond to the resizing."})})]})}}]),n}(o.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),r(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}},[[42,1,2]]]);
//# sourceMappingURL=main.7759bc04.chunk.js.map