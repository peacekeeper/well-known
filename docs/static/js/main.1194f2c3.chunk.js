(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(n,t,e){n.exports=e(230)},117:function(n,t,e){},123:function(n,t){},125:function(n,t){},160:function(n,t){},161:function(n,t){},230:function(n,t,e){"use strict";e.r(t);var r=e(16),a=e.n(r),o=e(105),i=e.n(o),c=(e(117),e(106)),u=e(107),s=e(110),l=e(108),p=e(111),f=e(1),d=e.n(f),h=e(5),w=e(232),v=function(){var n=Object(h.a)(d.a.mark(function n(t){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(t,{method:"get",headers:{Accept:"application/ld+json"}}).then(function(n){return n.json()}));case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=Object(h.a)(d.a.mark(function n(t){var e,r,a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.decode(t,{complete:!0});case 2:return e=n.sent,n.next=5,v("https://uniresolver.io/1.0/identifiers/"+e.payload.iss);case 5:return r=n.sent,a=r.methodMetadata.continuation.publicKey.find(function(n){return n.id===e.payload.iss+"#key-"+e.header.kid}),n.abrupt("return",a);case 8:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=Object(h.a)(d.a.mark(function n(t){var e;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v(t);case 2:return e=n.sent,n.abrupt("return",Promise.all(Object.keys(e.claims).map(function(){var n=Object(h.a)(d.a.mark(function n(t){var r,a,o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.claims[t].jwt,n.next=3,m(r);case 3:return a=n.sent,n.next=6,w.a.verify(r,a.publicKeyJwk);case 6:if((o=n.sent).iss!==t){n.next=10;break}return console.log(t," is authorized for: ",o.domain),n.abrupt("return",t);case 10:return n.abrupt("return",void 0);case 11:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}())));case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),y=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(a)))).state={},e}return Object(p.a)(t,n),Object(u.a)(t,[{key:"componentWillMount",value:function(){var n=Object(h.a)(d.a.mark(function n(){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(window.location.origin+"/.well-known/did-configuration");case 2:t=n.sent,this.setState({authorizedDids:t});case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,".well-known/did-configuration"),a.a.createElement("pre",null,JSON.stringify(this.state,null,2)))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.1194f2c3.chunk.js.map