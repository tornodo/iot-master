"use strict";(self.webpackChunkiot_master_ui=self.webpackChunkiot_master_ui||[]).push([[920],{6920:(mt,y,s)=>{s.r(y),s.d(y,{HistoryModule:()=>pt});var _=s(6895),d=s(4575),b=s(5380),c=s(235),t=s(4650),f=s(1445),A=s(6960),C=s(9651),v=s(5227),S=s(297),p=s(6903),h=s(7423),z=s(6616),x=s(7044),Z=s(1664),l=s(269),F=s(5545);function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.reload())}),t._UZ(1,"i",14),t._uU(2," \u5237\u65b0 "),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("nzSpin",e.loading)}}function E(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"app-search-box",15),t.NdJ("onSearch",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.search(a))}),t.qZA()}}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.handleBatchDel())}),t._uU(1," \u6279\u91cf\u5220\u9664 "),t.qZA()}}function D(o,i){1&o&&t._uU(0),2&o&&t.hij("\u603b\u5171 ",i.$implicit," \u6761")}const B=function(o){return{fontWeight:o}};function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr",17),t.NdJ("dblclick",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.read(r))}),t.TgZ(1,"td",18),t.NdJ("nzCheckedChange",function(a){const u=t.CHM(e).$implicit,T=t.oxw();return t.KtG(T.handleItemChecked(u.id,a))}),t.qZA(),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td")(14,"a",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.delete(r.id))}),t._UZ(15,"i",20),t.qZA()()()}if(2&o){const e=i.$implicit,n=t.oxw();t.Akn(t.VKq(10,B,e.read?"":"bold")),t.xp6(1),t.Q6J("nzChecked",n.setOfCheckedId.has(e.id)),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.device||e.device_id),t.xp6(2),t.Oqu(e.point),t.xp6(2),t.Oqu(e.value),t.xp6(2),t.Oqu(t.lcZ(12,8,e.time))}}let M=(()=>{class o{constructor(e,n,a,r){this.router=e,this.rs=n,this.modal=a,this.msg=r,this.loading=!0,this.datum=[],this.total=1,this.pageSize=20,this.pageIndex=1,this.query={},this.filterRead=[{text:"true",value:1},{text:"false",value:0}],this.filterLevel=[{text:"1",value:1},{text:"2",value:2},{text:"3",value:3}],this.checked=!1,this.indeterminate=!1,this.setOfCheckedId=new Set,this.delResData=[]}reload(){this.datum=[],this.load()}load(){this.loading=!0,this.rs.post("history/search",this.query).subscribe(e=>{const{data:n,total:a}=e;this.datum=n||[],this.total=a||0,this.setOfCheckedId.clear(),(0,c.oR)(this)}).add(()=>{this.loading=!1})}delete(e,n){this.rs.get(`history/${e}/delete`).subscribe(a=>{n?n&&(this.delResData.push(a),n===this.delResData.length&&(this.msg.success("\u5220\u9664\u6210\u529f"),this.load())):(this.msg.success("\u5220\u9664\u6210\u529f"),this.datum=this.datum.filter(r=>r.id!==e))})}onQuery(e){(0,b.r)(e,this.query),this.load()}pageIndexChange(e){console.log("pageIndex:",e)}pageSizeChange(e){this.query.limit=e,this.load()}search(e){this.query.keyword={device_id:e},this.query.skip=0,this.load()}read(e){this.rs.get(`history/${e.id}/read`).subscribe(n=>{e.read=!0})}getTableHeight(){return(0,c.NC)(this)}handleBatchDel(){(0,c.mK)(this)}handleAllChecked(e){(0,c.Yk)(e,this)}handleItemChecked(e,n){(0,c.mp)(e,n,this)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.F0),t.Y36(f.s),t.Y36(A.Sf),t.Y36(C.dD))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-historys"]],decls:26,vars:12,consts:[["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],[3,"onSearch",4,"nzSpaceItem"],["nz-button","","nzType","primary","nzDanger","",3,"click",4,"nzSpaceItem"],["totalTemplate",""],["nzShowPagination","","nzShowSizeChanger","",3,"nzData","nzLoading","nzFrontPagination","nzTotal","nzShowTotal","nzPageSize","nzPageIndex","nzPageSizeChange","nzPageIndexChange","nzQueryParams"],["basicTable",""],[3,"nzChecked","nzIndeterminate","nzCheckedChange"],["nzColumnKey","id",3,"nzSortFn"],["nzColumnKey","device_id"],["nzColumnKey","point"],["nzColumnKey","value"],["nzColumnKey","time",3,"nzSortFn"],[3,"style","dblclick",4,"ngFor","ngForOf"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","reload",3,"nzSpin"],[3,"onSearch"],["nz-button","","nzType","primary","nzDanger","",3,"click"],[3,"dblclick"],[3,"nzChecked","nzCheckedChange"],[3,"click"],["nz-icon","","nzType","delete"]],template:function(e,n){if(1&e&&(t.TgZ(0,"app-toolbar")(1,"nz-space"),t.YNc(2,H,3,1,"button",0),t.YNc(3,E,1,0,"app-search-box",1),t.YNc(4,O,2,0,"button",2),t.qZA()(),t.YNc(5,D,1,1,"ng-template",null,3,t.W1O),t.TgZ(7,"nz-table",4,5),t.NdJ("nzPageSizeChange",function(r){return n.pageSizeChange(r)})("nzPageIndexChange",function(r){return n.pageIndexChange(r)})("nzQueryParams",function(r){return n.onQuery(r)}),t.TgZ(9,"thead")(10,"tr")(11,"th",6),t.NdJ("nzCheckedChange",function(r){return n.handleAllChecked(r)}),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"ID"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"\u8bbe\u5907"),t.qZA(),t.TgZ(16,"th",9),t._uU(17,"\u6570\u636e\u70b9\u4f4d"),t.qZA(),t.TgZ(18,"th",10),t._uU(19,"\u6570\u636e"),t.qZA(),t.TgZ(20,"th",11),t._uU(21,"\u65e5\u671f"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"\u64cd\u4f5c"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,K,16,12,"tr",12),t.qZA()()),2&e){const a=t.MAs(6),r=t.MAs(8);t.xp6(7),t.Q6J("nzData",n.datum)("nzLoading",n.loading)("nzFrontPagination",!1)("nzTotal",n.total)("nzShowTotal",a)("nzPageSize",n.pageSize)("nzPageIndex",n.pageIndex),t.xp6(4),t.Q6J("nzChecked",n.checked)("nzIndeterminate",n.indeterminate),t.xp6(1),t.Q6J("nzSortFn",!0),t.xp6(8),t.Q6J("nzSortFn",!0),t.xp6(5),t.Q6J("ngForOf",r.data)}},dependencies:[_.sg,v.n,S.B,p.NU,p.$1,h.Ls,z.ix,x.w,Z.dQ,l.N8,l.qD,l.Uo,l._C,l.h7,l.Om,l.p0,l.$Z,l.g6,F.u]}),o})();var g=s(433),U=s(1971),q=s(3679),m=s(6704),k=s(8e3),J=s(5635);const P=["parametersChild"];function Y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.handleCancel())}),t._uU(1," \u53d6\u6d88 "),t.qZA(),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.submit())}),t._UZ(3,"i",21),t._uU(4," \u4fdd\u5b58 "),t.qZA()}}let N=(()=>{class o{constructor(e,n,a,r,u){this.fb=e,this.router=n,this.route=a,this.rs=r,this.msg=u,this.id=0,this.add="s",this.listOfOption=[{value:"aa",label:11},{value:"bb",label:12}],this.productList=[{value:"cc",label:21},{value:"dd",label:22}],this.url="",this.types=[{label:"\u589e\u52a0",value:"inc"},{label:"\u51cf\u5c11",value:"dec"},{label:"\u5747\u503c",value:"avg"},{label:"\u8ba1\u6570",value:"count"},{label:"\u6700\u5c0f",value:"min"},{label:"\u6700\u5927",value:"max"},{label:"\u6c42\u548c",value:"sum"},{label:"\u6700\u540e",value:"last"},{label:"\u6700\u524d",value:"first"}],this.parameterslistData=[{title:"\u8d4b\u503c",keyName:"assign"},{title:"\u8868\u8fbe\u5f0f",keyName:"expression"},{title:"\u805a\u5408\u7b97\u6cd5",keyName:"type",type:"select",listOfOption:[{label:"inc",value:"inc"},{label:"dec",value:"dec"},{label:"avg",value:"avg"},{label:"count",value:"count"},{label:"min",value:"min"},{label:"max",value:"max"},{label:"sum",value:"sum"},{label:"last",value:"last"},{label:"first",value:"first"}]}]}ngOnInit(){this.route.snapshot.paramMap.has("id")&&(this.id=this.route.snapshot.paramMap.get("id"),this.rs.get(`aggregator/${this.id}`).subscribe(e=>{this.build(e.data)})),this.build(),this.rs.post("product/search",{}).subscribe(e=>{const n=[];e.data.filter(a=>n.push({label:a.id+" / "+a.name,value:a.id})),this.productList=n}).add(()=>{})}build(e){this.group=this.fb.group({id:[(e=e||{}).id||"",[]],product_id:[e.product_id||"",[]],name:[e.name||"",[]],desc:[e.desc||"",[]],crontab:[e.crontab||"",[]],assign:[e.assign||"",[]],expression:[e.expression||"",[]],type:[e.type||"",[]]})}parameterAdd(e){e.stopPropagation(),this.parametersChild&&this.parametersChild.group.get("keyName").controls.unshift(this.fb.group({assign:["",[]],expression:["",[]],type:["first",[]]}))}getValueData(){return this.parametersChild.group.get("keyName").controls.map(a=>a.value)}submit(){if(this.group.valid){let n=this.id?`aggregator/${this.id}`:"aggregator/create";const a=JSON.parse(JSON.stringify(this.group.value));return a.aggregators=this.getValueData(),void this.rs.post(n,a).subscribe(r=>{this.handleCancel(),this.msg.success("\u4fdd\u5b58\u6210\u529f")})}Object.values(this.group.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}handleCancel(){this.router.navigateByUrl("/history/aggregators")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(f.s),t.Y36(C.dD))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-aggregator-edit"]],viewQuery:function(e,n){if(1&e&&t.Gf(P,5),2&e){let a;t.iGM(a=t.CRH())&&(n.parametersChild=a.first)}},decls:39,vars:33,consts:[["extra",""],[3,"nzTitle","nzExtra"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","product_id",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["formControlName","product_id",3,"nzOptions"],["nzFor","name",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","name"],["nzFor","desc",3,"nzSm","nzXs"],["nz-input","","formControlName","desc"],["nzFor","crontab",3,"nzSm","nzXs"],["nz-input","","formControlName","crontab"],["nzFor","expression",3,"nzSm","nzXs"],["nz-input","","formControlName","expression"],["nzFor","type",3,"nzSm","nzXs"],["formControlName","type",3,"nzOptions"],["nzFor","assign",3,"nzSm","nzXs"],["nz-input","","formControlName","assign"],["nz-button","",2,"margin-right","10px",3,"click"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","save","nzTheme","outline"]],template:function(e,n){if(1&e&&(t.YNc(0,Y,5,0,"ng-template",null,0,t.W1O),t.TgZ(2,"nz-card",1)(3,"form",2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(4,"nz-form-item")(5,"nz-form-label",3),t._uU(6,"\u4ea7\u54c1id"),t.qZA(),t.TgZ(7,"nz-form-control",4),t._UZ(8,"nz-select",5),t.qZA()(),t.TgZ(9,"nz-form-item")(10,"nz-form-label",6),t._uU(11,"\u540d\u79f0"),t.qZA(),t.TgZ(12,"nz-form-control",7),t._UZ(13,"input",8),t.qZA()(),t.TgZ(14,"nz-form-item")(15,"nz-form-label",9),t._uU(16,"\u8bf4\u660e"),t.qZA(),t.TgZ(17,"nz-form-control",7),t._UZ(18,"input",10),t.qZA()(),t.TgZ(19,"nz-form-item")(20,"nz-form-label",11),t._uU(21,"\u5b9a\u65f6\u4efb\u52a1"),t.qZA(),t.TgZ(22,"nz-form-control",7),t._UZ(23,"input",12),t.qZA()(),t.TgZ(24,"nz-form-item")(25,"nz-form-label",13),t._uU(26,"\u8868\u8fbe\u5f0f"),t.qZA(),t.TgZ(27,"nz-form-control",7),t._UZ(28,"input",14),t.qZA()(),t.TgZ(29,"nz-form-item")(30,"nz-form-label",15),t._uU(31,"\u7c7b\u578b"),t.qZA(),t.TgZ(32,"nz-form-control",7),t._UZ(33,"nz-select",16),t.qZA()(),t.TgZ(34,"nz-form-item")(35,"nz-form-label",17),t._uU(36,"\u5206\u914d"),t.qZA(),t.TgZ(37,"nz-form-control",7),t._UZ(38,"input",18),t.qZA()()()()),2&e){const a=t.MAs(1);t.xp6(2),t.Q6J("nzTitle",n.id?"\u7f16\u8f91\u8ba1\u5212\u4efb\u52a1":"\u521b\u5efa\u8ba1\u5212\u4efb\u52a1")("nzExtra",a),t.xp6(1),t.Q6J("formGroup",n.group),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24),t.xp6(1),t.Q6J("nzOptions",n.productList),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24),t.xp6(1),t.Q6J("nzOptions",n.types),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24)}},dependencies:[h.Ls,z.ix,x.w,Z.dQ,U.bd,q.t3,q.SK,m.Lr,m.Nx,m.iK,m.Fd,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,k.Vq,J.Zp],styles:[".cdk-drag-preview{display:table}  .cdk-drag-placeholder{opacity:0}"]}),o})();var I=s(6672),Q=s(2577);function w(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.reload())}),t._UZ(1,"i",21),t._uU(2," \u5237\u65b0 "),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("nzSpin",e.loading)}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"app-search-box",22),t.NdJ("onSearch",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.search(a))}),t.qZA()}}function G(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.handleNew())}),t._UZ(1,"i",23),t._uU(2," \u521b\u5efa "),t.qZA()}}function $(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",24),t._UZ(1,"span",25),t.TgZ(2,"a",26),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.handleExport())}),t._uU(3,"\u5bfc\u51fa"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("href",e.href,t.LSH)}}function L(o,i){1&o&&(t.TgZ(0,"button",31),t._UZ(1,"span",32),t._uU(2," \u6587\u4ef6\u4e0a\u4f20\u4e2d "),t.qZA())}function R(o,i){1&o&&(t.TgZ(0,"label",33)(1,"div",34),t._UZ(2,"span",35),t._uU(3," \u5bfc\u5165 "),t.qZA()())}function V(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"input",36),t.NdJ("change",function(a){t.CHM(e);const r=t.oxw(2);return t.KtG(r.handleImport(a))}),t.qZA()}}function W(o,i){if(1&o&&(t.TgZ(0,"div",27),t.YNc(1,L,3,0,"button",28),t.YNc(2,R,4,0,"label",29),t.YNc(3,V,1,0,"input",30),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.uploading),t.xp6(1),t.Q6J("ngIf",!e.uploading),t.xp6(1),t.Q6J("ngIf",!e.uploading)}}function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",37),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.handleBatchDel())}),t._uU(1," \u6279\u91cf\u5220\u9664 "),t.qZA()}}function tt(o,i){1&o&&t._uU(0),2&o&&t.hij("\u603b\u5171 ",i.$implicit," \u6761")}function et(o,i){1&o&&(t.TgZ(0,"nz-tag",47),t._uU(1," \u7981\u7528"),t.qZA())}function nt(o,i){1&o&&(t.TgZ(0,"nz-tag",48),t._uU(1," \u542f\u7528"),t.qZA())}function ot(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",42),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,r=t.oxw();return t.KtG(r.disable(1,a.id))}),t._uU(1," \u7981\u7528 "),t.qZA()}}function at(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",42),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,r=t.oxw();return t.KtG(r.disable(0,a.id))}),t._uU(1," \u542f\u7528 "),t.qZA()}}const rt=function(o){return{fontWeight:o}};function it(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr",38),t.NdJ("dblclick",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.read(r))}),t.TgZ(1,"td",39),t.NdJ("nzCheckedChange",function(a){const u=t.CHM(e).$implicit,T=t.oxw();return t.KtG(T.handleItemChecked(u.id,a))}),t.qZA(),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t.YNc(19,et,2,0,"nz-tag",40),t.YNc(20,nt,2,0,"nz-tag",41),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"td")(25,"a",42),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.edit(r.id))}),t._UZ(26,"i",43),t.qZA(),t._UZ(27,"nz-divider",44),t.TgZ(28,"a",42),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.delete(r.id))}),t._UZ(29,"i",45),t.qZA(),t._UZ(30,"nz-divider",44),t.YNc(31,ot,2,0,"a",46),t.YNc(32,at,2,0,"a",46),t.qZA()()}if(2&o){const e=i.$implicit,n=t.oxw();t.Akn(t.VKq(18,rt,e.read?"":"bold")),t.xp6(1),t.Q6J("nzChecked",n.setOfCheckedId.has(e.id)),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.product_id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.desc),t.xp6(2),t.Oqu(e.crontab),t.xp6(2),t.Oqu(e.expression),t.xp6(2),t.Oqu(e.type),t.xp6(2),t.Oqu(e.assign),t.xp6(2),t.Q6J("ngIf",e.disabled),t.xp6(1),t.Q6J("ngIf",!e.disabled),t.xp6(2),t.Oqu(t.lcZ(23,16,e.created)),t.xp6(9),t.Q6J("ngIf",!e.disabled),t.xp6(1),t.Q6J("ngIf",e.disabled)}}const ut=[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:M},{path:"aggregators",component:(()=>{class o{constructor(e,n,a,r){this.router=e,this.rs=n,this.modal=a,this.msg=r,this.loading=!0,this.datum=[],this.total=1,this.pageSize=20,this.uploading=!1,this.pageIndex=1,this.query={},this.url="",this.filterLevel=[{text:"1",value:1},{text:"2",value:2},{text:"3",value:3}],this.checked=!1,this.indeterminate=!1,this.setOfCheckedId=new Set,this.delResData=[]}reload(){this.datum=[],this.load()}load(){this.loading=!0,this.rs.post("aggregator/search",this.query).subscribe(e=>{const{data:n,total:a}=e;this.datum=n||[],this.total=a||0,this.setOfCheckedId.clear(),(0,c.oR)(this)}).add(()=>{this.loading=!1})}edit(e){this.router.navigateByUrl(`/history/edit/${e}`)}handleNew(){this.router.navigateByUrl("/history/create")}delete(e,n){this.rs.get(`aggregator/${e}/delete`).subscribe(a=>{n?n&&(this.delResData.push(a),n===this.delResData.length&&(this.msg.success("\u5220\u9664\u6210\u529f"),this.load())):(this.msg.success("\u5220\u9664\u6210\u529f"),this.datum=this.datum.filter(r=>r.id!==e))})}onQuery(e){(0,b.r)(e,this.query),this.load()}pageIndexChange(e){console.log("pageIndex:",e)}pageSizeChange(e){this.query.limit=e,this.load()}search(e){console.log(),this.query.keyword={name:e},this.query.skip=0,this.load()}handleImport(e){const n=e.target.files[0],a=new FormData;a.append("file",n),this.rs.post("aggregator/import",a).subscribe(r=>{console.log(r)})}handleExport(){this.href="aggregator/export"}read(e){}disable(e,n){e?this.rs.get(`aggregator/${n}/disable`).subscribe(a=>{this.reload()}):this.rs.get(`aggregator/${n}/enable`).subscribe(a=>{this.reload()})}getTableHeight(){return(0,c.NC)(this)}handleBatchDel(){(0,c.mK)(this)}handleAllChecked(e){(0,c.Yk)(e,this)}handleItemChecked(e,n){(0,c.mp)(e,n,this)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.F0),t.Y36(f.s),t.Y36(A.Sf),t.Y36(C.dD))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-aggregators"]],decls:39,vars:12,consts:[["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],[3,"onSearch",4,"nzSpaceItem"],["nz-button","","nzType","primary","class","btn",4,"nzSpaceItem"],["style","position: relative",4,"nzSpaceItem"],["nz-button","","nzType","primary","nzDanger","",3,"click",4,"nzSpaceItem"],["totalTemplate",""],["nzShowPagination","","nzShowSizeChanger","",3,"nzData","nzLoading","nzFrontPagination","nzTotal","nzShowTotal","nzPageSize","nzPageIndex","nzPageSizeChange","nzPageIndexChange","nzQueryParams"],["basicTable",""],[3,"nzChecked","nzIndeterminate","nzCheckedChange"],["nzColumnKey","id",3,"nzSortFn"],["nzColumnKey","product_id"],["nzColumnKey","name"],["nzColumnKey","desc"],["nzColumnKey","crontab"],["nzColumnKey","expression"],["nzColumnKey","type"],["nzColumnKey","assign"],["nzColumnKey","disabled"],["nzColumnKey","created",3,"nzSortFn"],[3,"style","dblclick",4,"ngFor","ngForOf"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","reload",3,"nzSpin"],[3,"onSearch"],["nz-icon","","nzType","plus"],["nz-button","","nzType","primary",1,"btn"],["nz-icon","","nzType","cloud-download","nzTheme","outline"],["download","filename",3,"href","click"],[2,"position","relative"],["nz-button","","nzType","primary","nzLoading","",4,"ngIf"],["for","file","style","position: absolute",4,"ngIf"],["type","file","id","file","style","margin-top: 3px; width: 76px",3,"change",4,"ngIf"],["nz-button","","nzType","primary","nzLoading",""],["nz-icon","","nzType","poweroff"],["for","file",2,"position","absolute"],[1,"fileButton"],["nz-icon","","nzType","cloud-upload","nzTheme","outline"],["type","file","id","file",2,"margin-top","3px","width","76px",3,"change"],["nz-button","","nzType","primary","nzDanger","",3,"click"],[3,"dblclick"],[3,"nzChecked","nzCheckedChange"],["nzColor","error",4,"ngIf"],["nzColor","success",4,"ngIf"],[3,"click"],["nz-icon","","nzType","edit"],["nzType","vertical"],["nz-icon","","nzType","delete"],[3,"click",4,"ngIf"],["nzColor","error"],["nzColor","success"]],template:function(e,n){if(1&e&&(t.TgZ(0,"app-toolbar")(1,"nz-space"),t.YNc(2,w,3,1,"button",0),t.YNc(3,X,1,0,"app-search-box",1),t.YNc(4,G,3,0,"button",0),t.YNc(5,$,4,1,"button",2),t.YNc(6,W,4,3,"div",3),t.YNc(7,j,2,0,"button",4),t.qZA()(),t.YNc(8,tt,1,1,"ng-template",null,5,t.W1O),t.TgZ(10,"nz-table",6,7),t.NdJ("nzPageSizeChange",function(r){return n.pageSizeChange(r)})("nzPageIndexChange",function(r){return n.pageIndexChange(r)})("nzQueryParams",function(r){return n.onQuery(r)}),t.TgZ(12,"thead")(13,"tr")(14,"th",8),t.NdJ("nzCheckedChange",function(r){return n.handleAllChecked(r)}),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"ID"),t.qZA(),t.TgZ(17,"th",10),t._uU(18,"\u4ea7\u54c1id"),t.qZA(),t.TgZ(19,"th",11),t._uU(20,"\u540d\u79f0"),t.qZA(),t.TgZ(21,"th",12),t._uU(22,"\u8bf4\u660e"),t.qZA(),t.TgZ(23,"th",13),t._uU(24,"\u5b9a\u65f6"),t.qZA(),t.TgZ(25,"th",14),t._uU(26,"\u8868\u8fbe\u5f0f"),t.qZA(),t.TgZ(27,"th",15),t._uU(28,"\u7c7b\u578b"),t.qZA(),t.TgZ(29,"th",16),t._uU(30,"\u8d4b\u503c"),t.qZA(),t.TgZ(31,"th",17),t._uU(32,"\u72b6\u6001"),t.qZA(),t.TgZ(33,"th",18),t._uU(34,"\u65e5\u671f"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"\u64cd\u4f5c"),t.qZA()()(),t.TgZ(37,"tbody"),t.YNc(38,it,33,20,"tr",19),t.qZA()()),2&e){const a=t.MAs(9),r=t.MAs(11);t.xp6(10),t.Q6J("nzData",n.datum)("nzLoading",n.loading)("nzFrontPagination",!1)("nzTotal",n.total)("nzShowTotal",a)("nzPageSize",n.pageSize)("nzPageIndex",n.pageIndex),t.xp6(4),t.Q6J("nzChecked",n.checked)("nzIndeterminate",n.indeterminate),t.xp6(1),t.Q6J("nzSortFn",!0),t.xp6(18),t.Q6J("nzSortFn",!0),t.xp6(5),t.Q6J("ngForOf",r.data)}},dependencies:[_.sg,_.O5,v.n,S.B,p.NU,p.$1,h.Ls,z.ix,x.w,Z.dQ,l.N8,l.qD,l.Uo,l._C,l.h7,l.Om,l.p0,l.$Z,l.g6,I.j,Q.g,F.u],styles:[".fileButton[_ngcontent-%COMP%]{height:32px;line-height:32px;border-radius:3px;background-color:#1890ff;border-color:#1890ff;color:#fff;font-weight:400;display:inline-block;padding:0 15px;cursor:pointer}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:82px;height:32px;border-radius:3px}.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;margin-left:5px;font-size:14px}"]}),o})()},{path:"edit/:id",component:N},{path:"create",component:N},{path:"**",component:s(1346).r}];let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(ut),d.Bz]}),o})();var gt=s(9166),dt=s(9054);let pt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.ez,ct,gt.Y,p.zf,h.PV,z.sL,l.HQ,I.X,Q.S,U.vh,m.U5,g.UX,k.LV,J.o7,dt.cD,g.u5]}),o})()}}]);