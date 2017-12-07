"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},_createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_echartsForReact=require("echarts-for-react"),_echartsForReact2=_interopRequireDefault(_echartsForReact),_Basic2=require("./Basic"),_Basic3=_interopRequireDefault(_Basic2),BarChartBasic=function(t){function e(){var t,o,r,a;_classCallCheck(this,e);for(var i=arguments.length,l=Array(i),n=0;n<i;n++)l[n]=arguments[n];return o=r=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),r.defaultSupportedConfig=["x","y","title","subtitle","dataZoom","grid","toolbox","dataLable","markPoint"],a=o,_possibleConstructorReturn(r,a)}return _inherits(e,_Basic3.default),_createClass(e,[{key:"getOption",value:function(t){var e=this,o=t.color,r=t.config,a=t.onTooltipFormat,i={color:o||this.color,tooltip:{trigger:"axis",enterable:!0},grid:{show:!1,left:r.grid&&r.grid.left||10,right:r.grid&&r.grid.right||0,top:r.grid&&r.grid.top||30,bottom:r.grid&&r.grid.bottom||10,borderColor:this.gridColor,containLabel:!0},legend:{show:!!r.y.legend,data:r.y.legend,textStyle:{color:this.fontColor,fontSize:this.fontSize}},toolbox:{show:r.toolbox,itemSize:12,iconStyle:{normal:{borderColor:this.fontColor},emphasis:{borderColor:this.emphasisColor}},feature:{dataZoom:{},dataView:{readOnly:!1},restore:{},saveAsImage:{}},right:15,top:0},xAxis:[{show:!1!==r.x.isXAxisShow,type:"category",boundaryGap:!1!==r.x.boundaryGap,data:r.x.data,name:r.x.name,nameTextStyle:{color:this.fontColor,fontSize:this.fontSize},axisLabel:{textStyle:{color:this.fontColor,fontSize:this.fontSize},rotate:r.x.rotate||0,interval:r.x.showAll?0:"auto"},axisTick:{show:!1!==r.x.axisTickShow,alignWithLabel:!0},axisLine:{lineStyle:{color:"#333"}}}],yAxis:[{show:!1!==r.y.isYAxisShow,type:"value",min:r.y.min,max:r.y.max,name:r.y.name,nameTextStyle:{color:this.fontColor,fontSize:this.fontSize},nameGap:12,nameLocation:r.y.nameLocation||"end",axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!!r.y.splitLine,lineStyle:{type:"dotted"}},axisTick:{show:!1!==r.y.axisTickShow},axisLabel:{show:!1!==r.y.labelShow,textStyle:{color:this.fontColor,fontSize:this.fontSize}}}],series:[]};r.title&&(i.title={text:r.title,subtext:r.subtitle,textStyle:{color:this.titleColor,fontSize:this.titleSize}},i.legend.right=10),a&&(i.tooltip.formatter=function(t){return a(t)});var l={};return Object.keys(r).forEach(function(t){e.defaultSupportedConfig.indexOf(t)<0&&(l[t]=r[t])}),r.y.data&&Array.isArray(r.y.data)&&(r.markPoint&&i.series.push({type:"bar",markPoint:r.markPoint,stack:!0}),r.y.data.forEach(function(t,e){i.series.push(_extends({},l,{type:"bar",name:r.y.legend?r.y.legend[e]:null,barGap:r.y.barGap||0,barWidth:r.y.barWidth||null,stack:r.y.stack||r.markPoint&&0===e||null,label:{normal:{formatter:"{c}"+(r.dataLable&&r.dataLable.unit||""),show:!!r.dataLable,position:r.dataLable&&r.dataLable.position||"top",color:r.dataLable&&r.dataLable.color||null}},data:t,itemStyle:r.y.color?{normal:{color:Array.isArray(r.y.color[e])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:r.y.color[e][0]},{offset:1,color:r.y.color[e][1]}],globalCoord:!1}:r.y.color[e]}}:null}))})),r.dataZoom&&(i.dataZoom=[{show:!0,realtime:!0,start:r.dataZoom.start||30,end:r.dataZoom.end||100}]),i}},{key:"render",value:function(){return _react2.default.createElement(_echartsForReact2.default,{option:this.getOption(this.props),style:this.props.style||{height:250,width:"100%"},notMerge:!0,lazyUpdate:!1,onEvents:this.props.onEvents})}}]),e}();exports.default=BarChartBasic,BarChartBasic.propTypes={color:_propTypes2.default.array,config:_propTypes2.default.shape({x:_propTypes2.default.object.isRequired,y:_propTypes2.default.object.isRequired,title:_propTypes2.default.string,subtitle:_propTypes2.default.string,dataZoom:_propTypes2.default.object,grid:_propTypes2.default.object,toolbox:_propTypes2.default.bool,datalable:_propTypes2.default.object}).isRequired,style:_propTypes2.default.object,onTooltipFormat:_propTypes2.default.func,onEvents:_propTypes2.default.object};