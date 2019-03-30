(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(12)},12:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(9),o=a(2),u=a(3),l=a(6),i=a(4),c=a(5),s=a(1),m=a(0),h=a.n(m),p=a(8),d=a.n(p),f=(a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={from_hour:null,from_minute:null,to_hour:null,to_minute:null,from_period:"am",to_period:"pm"},a.onInputChange=a.onInputChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(u.a)(t,[{key:"onInputChange",value:function(e){var t=e.target.value,a=e.target.name,n=e.target.id;this.props.handleInputChange(n,a,t),"from-hour"===a?this.setState({from_hour:t}):"from-minute"===a?this.setState({from_minute:t}):"to-hour"===a?this.setState({to_hour:t}):"to-minute"===a?this.setState({to_minute:t}):"from-period"===a?this.setState({from_period:t}):"to-period"===a&&this.setState({to_period:t})}},{key:"render",value:function(){var e=this.props.id;return h.a.createElement("div",{className:"input-row",class:"form-row"},h.a.createElement("div",{className:"from-hour-col",class:"col-md-0 mb-6"},h.a.createElement("input",{class:"form-control",id:e,value:this.state.value,onChange:this.onInputChange,type:"number",name:"from-hour",min:"1",max:"12",size:"2",maxLength:"2",placeholder:"Hour"})),h.a.createElement("div",{className:"from-hour-col",class:"col-md-0 mb-6"},h.a.createElement("input",{class:"form-control",id:e,value:this.state.value,onChange:this.onInputChange,type:"number",name:"from-minute",min:"0",max:"59",size:"2",maxLength:"2",placeholder:"Minute"})),h.a.createElement("div",{className:"from-hour-col",class:"col-md-0 mb-6"},h.a.createElement("select",{class:"custom-select",id:e,value:this.state.value,onChange:this.onInputChange,name:"from-period"},h.a.createElement("option",{value:"am"}," A.M "),h.a.createElement("option",{value:"pm"}," P.M "))),h.a.createElement("div",{className:"from-hour-col",class:"col-md-0 mb-6"},h.a.createElement("input",{class:"form-control",id:e,value:this.state.value,onChange:this.onInputChange,type:"number",name:"to-hour",min:"1",max:"12",size:"2",maxLength:"2",placeholder:"Hour"})),h.a.createElement("div",{className:"from-hour-col",class:"col-md-0 mb-6"},h.a.createElement("input",{class:"form-control",id:e,value:this.state.value,onChange:this.onInputChange,type:"number",name:"to-minute",min:"0",max:"59",size:"2",maxLength:"2",placeholder:"Minute"})),h.a.createElement("div",{className:"from-hour-col",class:"col-md-0 mb-6"},h.a.createElement("select",{class:"custom-select",id:e,value:this.state.value,onChange:this.onInputChange,name:"to-period"},h.a.createElement("option",{value:"am"}," A.M "),h.a.createElement("option",{value:"pm"}," P.M "))))}}]),t}(h.a.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.input.length,a=0;a<t;a++)e.push(h.a.createElement(f,{id:a,handleInputChange:this.props.handleInputChange}));return e}}]),t}(h.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return h.a.createElement("button",{type:"button",class:"btn btn-success btn-lg",onClick:this.props.onClick},"+")}}]),t}(h.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return h.a.createElement("button",{type:"button",class:"btn btn-danger btn-lg",onClick:this.props.onClick},"-")}}]),t}(h.a.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={rate:14},a.onInputChange=a.onInputChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(u.a)(t,[{key:"onInputChange",value:function(e){var t=e.target.value;this.props.onInputChange(t),this.setState({rate:t})}},{key:"render",value:function(){return h.a.createElement("div",{class:"input-group mb-3"},h.a.createElement("div",{class:"input-group-prepend"},h.a.createElement("span",{class:"input-group-text"},"$")),h.a.createElement("div",{className:"hourly-rate"},h.a.createElement("input",{type:"number",name:"hourly-rate",class:"form-control",placeholder:"Hourly Rate",id:"hourly-rate",onChange:this.onInputChange,value:this.state.rate,size:"2",maxLength:"2"})),h.a.createElement("div",{class:"input-group-append"},h.a.createElement("span",{class:"input-group-text"}," per hour ")))}}]),t}(h.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={input:[{id:0,fromHour:0,fromMinute:0,toHour:0,toMinute:0,fromPeriod:"am",toPeriod:"am"}],total:"0.00",rate:14},a.onInputChange=a.onInputChange.bind(Object(s.a)(Object(s.a)(a))),a.onHourlyRateChange=a.onHourlyRateChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(u.a)(t,[{key:"AddDayHandleClick",value:function(e){var t=this.state.input.slice(),a={id:t.length,fromHour:0,fromMinute:0,toHour:0,toMinute:0,fromPeriod:"am",toPeriod:"am",rate:14};t.push(a),this.setState({input:t})}},{key:"SubtractDayHandleClick",value:function(e){var t=this.state.input.slice(),a=this.state.rate;t.pop();var n=this.getTotal(t,a);this.setState({input:t,total:n})}},{key:"renderaddDayButton",value:function(){var e=this;return h.a.createElement(b,{onClick:function(){return e.AddDayHandleClick()}})}},{key:"renderSubtractDayButton",value:function(){var e=this;return h.a.createElement(g,{onClick:function(){return e.SubtractDayHandleClick()}})}},{key:"renderHourlyRateInput",value:function(){return h.a.createElement(C,{onInputChange:this.onHourlyRateChange})}},{key:"onInputChange",value:function(e,t,a){var o=Object(r.a)(this.state.input),u=Object(n.a)({},o[e]),l=this.state.rate;"from-hour"===t?u.fromHour=a:"from-minute"===t?u.fromMinute=a:"to-hour"===t?u.toHour=a:"to-minute"===t?u.toMinute=a:"from-period"===t?u.fromPeriod=a:"to-period"===t&&(u.toPeriod=a),o[e]=u;var i=this.getTotal(o,l);this.setState({input:o,total:i})}},{key:"onHourlyRateChange",value:function(e){var t=this.state.input,a=this.getTotal(t,e);this.setState({rate:e,total:a})}},{key:"getTotal",value:function(e,t){for(var a=0,n=0;n<e.length;n++){var r=+e[n].fromHour,o=+e[n].fromMinute,u=+e[n].toHour,l=+e[n].toMinute;"pm"===e[n].fromPeriod&&12!==r&&(r+=12),"pm"===e[n].toPeriod&&12!==u&&(u+=12),a+=(u-r+(l-o)/60)*t}return a=a.toFixed(2)}},{key:"renderInput",value:function(){return h.a.createElement(v,{input:this.state.input,handleInputChange:this.onInputChange})}},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("div",{class:"row"},h.a.createElement("div",{className:"total"},h.a.createElement("h1",{class:"display-1"},"$ ",this.state.total))),h.a.createElement("div",{class:"row"},h.a.createElement("div",{class:"col-sm-0"},this.renderaddDayButton()),h.a.createElement("div",{class:"col-sm-0"},this.renderSubtractDayButton()),h.a.createElement("div",{class:"col-sm-0"},this.renderHourlyRateInput())),h.a.createElement("div",{class:"row"},h.a.createElement("div",{class:"col-md"},h.a.createElement("h4",null,"From")),h.a.createElement("div",{class:"col-md"},h.a.createElement("h4",null,"To"))),h.a.createElement("div",{className:"inputs"},this.renderInput()))}}]),t}(h.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"calculator"},h.a.createElement("div",{class:"container-fluid"},h.a.createElement("div",{class:"d-flex justify-content-center"},h.a.createElement(E,null))))}}]),t}(h.a.Component);d.a.render(h.a.createElement(y,null),document.getElementById("root"))},18:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.4f117469.chunk.js.map