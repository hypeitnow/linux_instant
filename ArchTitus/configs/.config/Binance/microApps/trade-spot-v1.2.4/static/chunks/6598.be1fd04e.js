(self["webpackJsonp_trade-spot"]=self["webpackJsonp_trade-spot"]||[]).push([[6598],{H9Lc:function(t,e,r){var n,o;"undefined"!=typeof self&&self,t.exports=(n=r("/SIk"),o=r("Xcp8"),function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=n},function(t,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var o,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(0),c=(o=u)&&o.__esModule?o:{default:o},s=void 0===n?window:n;e.default=function(e,r){var n=function(t){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return t.chartType=e,t.Highcharts=r,t.displayName="Highcharts"+e,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,u.Component),a(n,[{key:"setChartRef",value:function(t){this.chartRef=t}},{key:"renderChart",value:function(t){var e=this;if(!t)throw new Error("Config must be specified for the "+this.displayName+" component");var r=t.chart;this.chart&&this.chart.destroy(),this.chart=new this.Highcharts[this.chartType](i({},t,{chart:i({},r,{renderTo:this.chartRef})}),this.props.callback),this.props.neverReflow||s&&s.requestAnimationFrame&&requestAnimationFrame((function(){e.chart&&e.chart.options&&e.chart.reflow()}))}},{key:"shouldComponentUpdate",value:function(t){return!!(t.neverReflow||t.isPureConfig&&this.props.config===t.config)||(this.renderChart(t.config),!1)}},{key:"getChart",value:function(){if(!this.chart)throw new Error("getChart() should not be called before the component is mounted");return this.chart}},{key:"componentDidMount",value:function(){this.renderChart(this.props.config)}},{key:"componentWillUnmount",value:function(){this.chart.destroy()}},{key:"render",value:function(){return c.default.createElement("div",i({ref:this.setChartRef.bind(this)},this.props.domProps))}}]),n}();n.defaultProps={callback:function(){},domProps:{}};var o=n;return o.Highcharts=r,o.withHighcharts=function(r){return t.exports(e,r)},o},t.exports=e.default}).call(e,r(2))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},,function(t,e,r){t.exports=r(5)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(1)),o=i(r(6));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)("Chart",o.default),t.exports=e.default},function(t,e){t.exports=o}]))}}]);