(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(3),o=n.n(s),i=(n(12),n(4)),l=n(5),r=n(7),d=n(6),b=n(0),u=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onBtnGoodClick=function(){t.setState((function(t){return{good:t.good+1}}))},t.onBtnNeutralClick=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.onBtnBadClick=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.getTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.getGoodFeedbackPercentage=function(){return Math.round(t.state.good/t.getTotalFeedback()*100)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Please leave feedback"}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"good",onClick:this.onBtnGoodClick,children:"Good"}),Object(b.jsx)("button",{type:"button",className:"neutral",onClick:this.onBtnNeutralClick,children:"Neutral"}),Object(b.jsx)("button",{type:"button",className:"bad",onClick:this.onBtnBadClick,children:"Bad"})]}),Object(b.jsxs)("div",{className:"statWrap",children:[Object(b.jsx)("h1",{className:"statTitle",children:"Statistics"}),this.getTotalFeedback()?Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Good: ",this.state.good]}),Object(b.jsxs)("li",{children:["Neutral: ",this.state.neutral]}),Object(b.jsxs)("li",{children:["Bad: ",this.state.bad]}),Object(b.jsxs)("li",{children:["Total: ",this.getTotalFeedback()]}),Object(b.jsxs)("li",{children:["Positive feedback: ",this.getGoodFeedbackPercentage(),"%"]})]}):Object(b.jsx)("p",{children:"No feedback given"})]})]})}}]),n}(a.Component),j=u;o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3c0d815b.chunk.js.map