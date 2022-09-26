import{O as t,P as e,r as i,e as o,o as a,c as l,w as n,a as s,k as r,b as c,t as h,g as u,h as f,d,I as p,q as b,n as m,j as _,C as g,F as y,i as x}from"./index.f9d0ec48.js";import{_ as k}from"./uni-icons.f8e12434.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";var w={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}};const{t:C}=t(w);var v=S({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||C("uni-search-bar.cancel")},placeholderText(){return this.placeholder||C("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(t){this.searchVal=t,t&&(this.show=!0)}},focus:{immediate:!0,handler(t){if(t){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(t,e){this.$emit("input",t),this.$emit("update:modelValue",t)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,e())},confirm(){e(),this.$emit("confirm",{value:this.searchVal})},blur(){e(),this.$emit("blur",{value:this.searchVal})},emitFocus(t){this.$emit("focus",t.detail)}}},[["render",function(t,e,m,_,g,y){const x=i(o("uni-icons"),k),S=d,w=p,C=b;return a(),l(S,{class:"uni-searchbar"},{default:n((()=>[s(S,{style:f({borderRadius:m.radius+"px",backgroundColor:m.bgColor}),class:"uni-searchbar__box",onClick:y.searchClick},{default:n((()=>[s(S,{class:"uni-searchbar__box-icon-search"},{default:n((()=>[r(t.$slots,"searchIcon",{},(()=>[s(x,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),g.show||g.searchVal?(a(),l(w,{key:0,focus:g.showSync,disabled:m.readonly,placeholder:y.placeholderText,maxlength:m.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:g.searchVal,"onUpdate:modelValue":e[0]||(e[0]=t=>g.searchVal=t),onConfirm:y.confirm,onBlur:y.blur,onFocus:y.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(a(),l(C,{key:1,class:"uni-searchbar__text-placeholder"},{default:n((()=>[c(h(m.placeholder),1)])),_:1})),g.show&&("always"===m.clearButton||"auto"===m.clearButton&&""!==g.searchVal)&&!m.readonly?(a(),l(S,{key:2,class:"uni-searchbar__box-icon-clear",onClick:y.clear},{default:n((()=>[r(t.$slots,"clearIcon",{},(()=>[s(x,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):u("",!0)])),_:3},8,["style","onClick"]),"always"===m.cancelButton||g.show&&"auto"===m.cancelButton?(a(),l(C,{key:0,onClick:y.cancel,class:"uni-searchbar__cancel"},{default:n((()=>[c(h(y.cancelTextI18n),1)])),_:1},8,["onClick"])):u("",!0)])),_:3})}],["__scopeId","data-v-6b860158"]]);var B=S({name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:()=>({})},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:()=>({fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff"}}),computed:{contentWidth(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:()=>"55px",boxWidth(){return this.getPosition(3,"horizontal")},boxHeight(){return this.getPosition(3,"vertical")},leftBottom(){return this.getPosition(0,"left","bottom")},rightBottom(){return this.getPosition(0,"right","bottom")},leftTop(){return this.getPosition(0,"left","top")},rightTop(){return this.getPosition(0,"right","top")},flexDirectionStart(){return this.getPosition(1,"vertical","top")},flexDirectionEnd(){return this.getPosition(1,"vertical","bottom")},horizontalLeft(){return this.getPosition(2,"horizontal","left")},horizontalRight(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:{handler(t,e){this.styles=Object.assign({},this.styles,t)},deep:!0}},created(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open(){this.isShow=!0},close(){this.isShow=!1},_onItemClick(t,e){this.$emit("trigger",{index:t,item:e})},getPosition(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}},[["render",function(t,e,r,p,S,w){const C=d,v=x,B=b,T=i(o("uni-icons"),k);return a(),l(C,{class:"uni-cursor-point"},{default:n((()=>[r.popMenu&&(w.leftBottom||w.rightBottom||w.leftTop||w.rightTop)&&r.content.length>0?(a(),l(C,{key:0,class:m([{"uni-fab--leftBottom":w.leftBottom,"uni-fab--rightBottom":w.rightBottom,"uni-fab--leftTop":w.leftTop,"uni-fab--rightTop":w.rightTop},"uni-fab"])},{default:n((()=>[s(C,{class:m([{"uni-fab__content--left":"left"===r.horizontal,"uni-fab__content--right":"right"===r.horizontal,"uni-fab__content--flexDirection":"vertical"===r.direction,"uni-fab__content--flexDirectionStart":w.flexDirectionStart,"uni-fab__content--flexDirectionEnd":w.flexDirectionEnd,"uni-fab__content--other-platform":!S.isAndroidNvue},"uni-fab__content"]),style:f({width:w.boxWidth,height:w.boxHeight,backgroundColor:S.styles.backgroundColor}),elevation:"5"},{default:n((()=>[w.flexDirectionStart||w.horizontalLeft?(a(),l(C,{key:0,class:"uni-fab__item uni-fab__item--first"})):u("",!0),(a(!0),_(y,null,g(r.content,((t,e)=>(a(),l(C,{key:e,class:m([{"uni-fab__item--active":S.isShow},"uni-fab__item"]),onClick:i=>w._onItemClick(e,t)},{default:n((()=>[s(v,{src:t.active?t.selectedIconPath:t.iconPath,class:"uni-fab__item-image",mode:"aspectFit"},null,8,["src"]),s(B,{class:"uni-fab__item-text",style:f({color:t.active?S.styles.selectedColor:S.styles.color})},{default:n((()=>[c(h(t.text),1)])),_:2},1032,["style"])])),_:2},1032,["class","onClick"])))),128)),w.flexDirectionEnd||w.horizontalRight?(a(),l(C,{key:1,class:"uni-fab__item uni-fab__item--first"})):u("",!0)])),_:1},8,["class","style"])])),_:1},8,["class"])):u("",!0),s(C,{class:m([{"uni-fab__circle--leftBottom":w.leftBottom,"uni-fab__circle--rightBottom":w.rightBottom,"uni-fab__circle--leftTop":w.leftTop,"uni-fab__circle--rightTop":w.rightTop,"uni-fab__content--other-platform":!S.isAndroidNvue},"uni-fab__circle uni-fab__plus"]),style:f({"background-color":S.styles.buttonColor}),onClick:w._onClick},{default:n((()=>[s(T,{class:m(["fab-circle-icon",{"uni-fab__plus--active":S.isShow&&r.content.length>0}]),type:"plusempty",color:S.styles.iconColor,size:"32"},null,8,["color","class"])])),_:1},8,["class","style","onClick"])])),_:1})}],["__scopeId","data-v-228e56b2"]]);export{v as _,B as a};
