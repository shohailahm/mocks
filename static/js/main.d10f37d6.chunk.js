(this["webpackJsonpliquid-test"]=this["webpackJsonpliquid-test"]||[]).push([[0],{154:function(e,t,a){e.exports=a(309)},159:function(e,t,a){},160:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},161:function(e,t,a){},162:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(159),a(160),a(161),a(21)),s=a(22),i=a(25),u=a(23),m=a(26),d=a(311),h=a(106),p=a(10),v=(a(162),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mode:"inline",theme:"light"},a.changeMode=function(e){a.setState({mode:e?"vertical":"inline"})},a.changeTheme=function(e){a.setState({theme:e?"dark":"light"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,this.props.children,r.a.createElement(h.a,Object.assign({style:{width:"100%",marginVertical:8},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:this.state.mode,theme:this.state.theme},this.props),e.map((function(e,t){return r.a.createElement(h.a.Item,{key:t+1,className:"customclass"},r.a.createElement(p.a,{type:"mail"}),e)}))))}}]),t}(r.a.Component)),f=(a(218),a(149)),g=a(313),E=a(46),y=a(312),b=(a(219),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).showOverlay=function(e){a.props.showover(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.data,n=e.showFav;return r.a.createElement("div",null,r.a.createElement(y.a,{columns:t(n,this.showOverlay),dataSource:a,onChange:this.handleChange}))}}]),t}(r.a.Component)),O=a(317),w=function(e,t){return[{title:"fav",dataIndex:"fav",className:e?"show":"hide",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{type:"star",theme:e?"twoTone":"outlined"}))}},{title:"Name & Industry Type",dataIndex:"name",key:"name",render:function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){t(a)}},e),r.a.createElement("p",{style:{color:"grey"}},a.indType))}},{title:"Issunace Type",dataIndex:"type",defaultSortOrder:"descend",sorter:function(e,t){return e.type.length-t.type.length}},{title:"Target Raise",dataIndex:"raise",defaultSortOrder:"descend",sorter:function(e,t){return e.raise-t.raise}},{title:"Pre-money valuation",dataIndex:"valuation",defaultSortOrder:"descend",sorter:function(e,t){return e.valuation-t.valuation}},{title:"Amount Received",dataIndex:"received",defaultSortOrder:"descend",sorter:function(e,t){return e.received-t.received}},{title:"Location",dataIndex:"location",defaultSortOrder:"descend",sorter:function(e,t){return e.location.length-t.location.length}},{title:"Status",dataIndex:"status",defaultSortOrder:"descend",sorter:function(e,t){return e.status.length-t.status.length},render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{status:"closed"===e?"success":"processing"}),e)}}]},j=[{name:"Energy Infrastructure",indType:"Financial Service",type:"equity",raise:"$23M",valuation:"$1M",location:"US",status:"in-progress",received:"$1M",fav:!1},{name:"ABC ",indType:"Financial Service",type:"Investment Fund",raise:"$23M",valuation:"$1M",location:"Europe",status:"in-progress",received:"$1M",fav:!0},{name:"Alternate Gas extension",indType:"space",type:"Debt",raise:"$23M",valuation:"$1M",location:"US",status:"closed",received:"$1M",fav:!1}],C=a(147),k=a(315),N=a(316),S=a(319),T=a(314),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onChange=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a.submit=function(){var e=a.state,t=e.name,n=e.indType,r=e.type,l=e.raise,o=e.valuation,c=e.received,s=e.location,i=e.status;if(t&&n&&r&&l&&o&&c&&s&&i)return a.props.onSubmit(a.state),a.setState({});k.a.open({message:"Error",description:"all feilds are mandatory"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(N.a,{gutter:16},r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"Name",name:"name",required:!0,onChange:this.onChange})),r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"Industry Type",name:"indType",required:!0,onChange:this.onChange})),r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"Issuance Type",name:"type",required:!0,onChange:this.onChange})),r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"Target Raise",name:"raise",required:!0,onChange:this.onChange}))),r.a.createElement(N.a,{gutter:16},r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"pre-money valuation",name:"valuation",required:!0,onChange:this.onChange})),r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"Amount Received",name:"received",required:!0,onChange:this.onChange})),r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"location",name:"location",required:!0,onChange:this.onChange})),r.a.createElement(S.a,{span:6,className:"gutter-row"},r.a.createElement(T.a,{placeholder:"status",required:!0,name:"status",onChange:this.onChange}))),r.a.createElement(E.a,{type:"primary",onClick:this.submit},"Submit"))}}]),t}(r.a.Component),x=(a(76),a(145)),F=a(318),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"left",marginLeft:8,fontSize:"bold"}},this.props.header),this.props.docs&&this.props.docs.map((function(e){return r.a.createElement("div",{className:"rows"},r.a.createElement("h3",null,e),r.a.createElement(E.a,{type:"link",icon:"download"},"Download"))})))}}]),t}(r.a.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{borderRadius:4,width:"80%",backgroundColor:"#fff",textAlign:"left",marginLeft:"10%",marginTop:16,padding:16}},r.a.createElement("h3",null,"Description"),"Descrtipon goes here, whatever the descrption are there. it must be shown in a particular format , the readablity of the user should be also taken into consedration"),r.a.createElement("div",{style:{borderRadius:4,width:"80%",backgroundColor:"#fff",textAlign:"left",marginLeft:"10%",marginTop:16,padding:16}},r.a.createElement("h3",null,"Required"),r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Date of creation"),r.a.createElement("span",null,"may 24,2019")),r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Country of Issuance"),r.a.createElement("span",null,"US")),r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Industry"),r.a.createElement("span",null,"Renewable Energy")),r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Total shared"),r.a.createElement("span",null,"10,000,000")),r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Free Float"),r.a.createElement("span",null,"1,000,000")),r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Price per share"),r.a.createElement("span",null,"$100"))),r.a.createElement(A,{header:"Common documents",docs:["MarketingDocs.docx","Presentation.pptx"]}),r.a.createElement(A,{header:"Confidentail documents",docs:["Executive.docx","issuanceSummary.xls"]}),r.a.createElement("div",{style:{textAlign:"left",marginLeft:8,marginBottom:8}},r.a.createElement("h4",null,"sourcing party"),"John Murphy",r.a.createElement("p",{style:{color:"gray"}},"john@gmail.com")),r.a.createElement("div",{style:{textAlign:"left",marginLeft:8,marginBottom:8}},r.a.createElement("h4",null,"issuing party"),"John doe",r.a.createElement("p",{style:{color:"gray"}},"johndoe@gmail.com")))}}]),t}(r.a.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return console.log(e),this.props.data?r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",overflow:"auto"}},r.a.createElement("div",null,"Target Raised",r.a.createElement("div",{className:"info"},e.raise)),r.a.createElement("div",null,"Amount Received",r.a.createElement("div",{className:"info"},e.received)),r.a.createElement("div",null,"Valuation",r.a.createElement("div",{className:"info"},e.valuation)),r.a.createElement("div",null,"status",r.a.createElement("div",{className:"info"},e.status))),r.a.createElement(M,null)):r.a.createElement(x.a,{tip:"Loading..."},r.a.createElement(F.a,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}]),t}(r.a.Component),q=g.a.TabPane,D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).toggleoverlay=function(){a.props.toggle()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"white-div"},r.a.createElement("a",{onClick:this.toggleoverlay},"close "),r.a.createElement(g.a,null,r.a.createElement(q,{tab:"Deal Info",key:"1"},r.a.createElement(R,{data:this.props.data})),r.a.createElement(q,{tab:"Additional Info",key:"2"}))),r.a.createElement("div",{className:"emptyoverlay"}))}}]),t}(r.a.Component),$=g.a.TabPane,B=(d.a.Header,d.a.Content),L=(d.a.Footer,d.a.Sider,function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showForm:!1,showOverlay:!1,dataTable:j},a.callback=function(e){console.log(e)},a.toggleForm=function(){a.setState({showForm:!a.state.showForm})},a.showOverlay=function(e){a.setState({showOverlay:!a.state.showOverlay,current:e})},a.add=function(e){var t=Object(f.a)(a.state.dataTable);t.push({name:e.name,indType:e.indType,type:e.type,raise:e.raise,valuation:e.valuation,location:e.location,status:e.status,received:e.received,fav:!1}),a.setState({dataTable:t}),a.toggleForm()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.showOverlay&&r.a.createElement(D,{toggle:this.showOverlay,data:this.state.current}),r.a.createElement(B,{style:{padding:30,backgroundColor:"#fff"}},r.a.createElement("h3",null,"Deal Room"),r.a.createElement(E.a,{onClick:this.toggleForm},this.state.showForm?"Close":"Add Insurance"),this.state.showForm&&r.a.createElement(I,{onSubmit:this.add,"data-test":"form"}),r.a.createElement(g.a,{defaultActiveKey:"1",onChange:this.callback,"data-test":"component-tabs"},r.a.createElement($,{tab:"External Issuances",key:"1"},r.a.createElement(b,{showover:this.showOverlay,columns:w,data:this.state.dataTable})),r.a.createElement($,{tab:"Favorite Issuances",key:"2"},r.a.createElement(b,{showover:this.showOverlay,columns:w,showFav:!0,data:this.state.dataTable})),r.a.createElement($,{tab:"My Issuances",key:"2"},r.a.createElement(b,{showover:this.showOverlay,columns:w,showFav:!0,data:this.state.dataTable})),r.a.createElement($,{tab:"MNDA Managament",key:"3"}))))}}]),t}(r.a.Component)),P=(d.a.Header,d.a.Content,d.a.Footer,d.a.Sider),J=["Deal Room","Broker-Dealer Registry","Insurance-Statitics"],H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:{backgroundColor:"#fff",minHeight:"100vh"}},r.a.createElement(P,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},theme:"light"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",{className:"sideNav"},r.a.createElement(v,{data:J}))),r.a.createElement(d.a,null,r.a.createElement("div",{style:{height:60}}),r.a.createElement(L,null)))}}]),t}(r.a.Component);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(H,null)))};a(307),a(308),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){}},[[154,1,2]]]);
//# sourceMappingURL=main.d10f37d6.chunk.js.map