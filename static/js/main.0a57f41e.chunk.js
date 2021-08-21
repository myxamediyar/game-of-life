(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(7),i=n.n(a),o=(n(14),n(15),n(16),n(2)),c=n(3),l=n(5),u=n(4),d=n(8),h=(n(17),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).changeNodeState=function(){var t=e.props,n=t.row,s=t.col,r=t.isAlive;e.props.updateGrid(n,s,!r)},e.returnClassName=function(){return void 0===e.props?"Node":e.props.isAlive?"NodeAlive":"Node"},e.setIsMousePressed=function(t){e.setState({mouseIsPressed:t})},e.catchMouseEnter=function(){e.props.mouseIsPressed&&e.changeNodeState()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.setIsMousePressed;return Object(h.jsx)("div",{className:this.returnClassName(),onMouseDown:function(){t(!0),e.changeNodeState()},onMouseUp:function(){return t(!1)},onMouseEnter:this.catchMouseEnter})}}]),n}(s.Component),f=(n(19),n(9)),b=[[-1,1],[0,1],[1,1],[-1,0],[1,-0],[-1,-1],[0,-1],[1,-1]];function m(e,t,n){return function(e,t,n){var s=0,r=[];return e.forEach((function(a){var i=[];a.forEach((function(r){var a=Object(f.a)({},r),o=function(e,t,n,s){var r=[],a=[e.row,e.col];return b.forEach((function(e){var i=a[0]-e[0],o=a[1]-e[1];i>-1&&o>-1&&i<n&&o<s&&r.push(t[i][o])})),r}(r,e,t,n).filter((function(e){return e.isAlive}));r.isAlive?(o.length<2||o.length>3)&&(a.isAlive=!1,s+=1):3===o.length&&(a.isAlive=!0,s+=1),i.push(a)})),r.push(i)})),[r,s]}(e,t,n)}var v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).setIsMousePressed=function(e){s.setState({mouseIsPressed:e})},s.gridUpdater=function(e,t,n){s.setState((function(s){var r=Object(d.a)(s.nodes);return r[e][t].isAlive=n,r}))},s.onButtonClick=function(e){var t=parseInt(s.state.generationNumber),n=m(e,s.props.rowVal,s.props.rowVal);0===n[1]?s.setState({generationNumber:"".concat(t," (no changes/empty)")}):s.setState({nodes:n[0],generationNumber:t+1})},s.getInitialGrid=function(){s.setState({nodes:[],generationNumber:0},(function(){for(var e=[],t=0;t<s.props.rowVal;t++){for(var n=[],r=0;r<s.props.rowVal;r++){var a={row:t,col:r,isAlive:!1};n.push(a)}e.push(n)}s.setState({nodes:e})}))},s.state={nodes:[],mouseIsPressed:!1,generationNumber:0},s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getInitialGrid()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"centerGol",children:[Object(h.jsxs)("div",{className:"buttonContainer",children:[Object(h.jsx)("button",{className:"f6 link dim1 ba ph3 pv2 mb2 dib black ma4",onClick:this.getInitialGrid,children:"clear"})," ",Object(h.jsx)("button",{className:"f6 link dim1 ba ph3 pv2 mb2 dib black ma4",onClick:function(){return e.onButtonClick(e.state.nodes)},children:"next generation"})]}),Object(h.jsxs)("div",{className:"mw5 mw7-ns center ph5-ns",style:{height:"100%",width:"100%"},children:[Object(h.jsxs)("h2",{className:"genClass",children:["generation: ",this.state.generationNumber]}),Object(h.jsx)("div",{className:"gridDiv",style:this.displayRowValFractions(),children:this.state.nodes.map((function(t,n){return Object(h.jsx)("div",{className:"nodeDiv",style:e.displayColValFractions(),children:t.map((function(t,n){return Object(h.jsx)(p,{row:t.row,col:t.col,isAlive:t.isAlive,updateGrid:e.gridUpdater,mouseIsPressed:e.state.mouseIsPressed,setIsMousePressed:e.setIsMousePressed},n)}))},n)}))})]})]})}},{key:"displayRowValFractions",value:function(){return{width:"100%",height:"auto",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"repeat(".concat(this.props.rowVal,", 1fr)")}}},{key:"displayColValFractions",value:function(){return{display:"grid",gridTemplateColumns:"repeat(".concat(this.props.rowVal,", 1fr)"),gridTemplateRows:"1fr"}}}]),n}(s.Component),j=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).changeStateRow=function(e){var t=parseInt(e.target.value);t<5||t>40||isNaN(t)?s.setState({rowVal:10}):s.setState({rowVal:t}),s.child.getInitialGrid()},s.state={rowVal:10},s}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"AskDimension",children:[Object(h.jsxs)("div",{className:"center pa3 ph5-ns centerbek",children:[Object(h.jsx)("span",{className:"centerbekchild",children:"Conway's game of life"}),Object(h.jsx)("label",{className:"",children:"Insert # of rows"}),Object(h.jsx)("input",{id:"rowNum",type:"number",onChange:this.changeStateRow,placeholder:"4<#<41",min:"5",max:"40"})]}),Object(h.jsx)(v,{ref:function(t){e.child=t},rowVal:this.state.rowVal}),Object(h.jsx)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noreferrer",className:"f6 link dim1 ba ph3 pv2 dib black rules",children:"Rules"})]})}}]),n}(s.Component));var g=function(){return Object(h.jsx)("div",{id:"appMain",children:Object(h.jsx)(j,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.0a57f41e.chunk.js.map