(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{aAFz:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingModule",(function(){return N}));var r=n("fXoL"),i=n("Oipj"),a=n("Xgv5"),l=n("mB2O"),o=n("kmKP"),c=n("fH6q"),s=n("tyNb"),d=n("ofXK"),m=n("CtUz");const p=function(t){return{category:t}};function u(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"a",7),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275classProp"]("active",n.category==t.key),r["\u0275\u0275property"]("queryParams",r["\u0275\u0275pureFunction1"](4,p,t.key)),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",t.payload.val().name," ")}}function h(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"input",17,18),r["\u0275\u0275text"](4),r["\u0275\u0275elementStart"](5,"button",19),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](t);const e=r["\u0275\u0275reference"](3),n=r["\u0275\u0275nextContext"]().$implicit;return r["\u0275\u0275nextContext"]().buy(e,n.key)})),r["\u0275\u0275text"](6,"buy"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&t){const t=r["\u0275\u0275reference"](2);r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" ",t.focus()," ")}}function v(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",8),r["\u0275\u0275elementStart"](1,"div",9),r["\u0275\u0275element"](2,"img",10),r["\u0275\u0275elementStart"](3,"div",11),r["\u0275\u0275elementStart"](4,"h5",12),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"p",13),r["\u0275\u0275text"](7),r["\u0275\u0275pipe"](8,"currency"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",14),r["\u0275\u0275elementStart"](10,"button",15),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](t);const n=e.$implicit;return r["\u0275\u0275nextContext"]().showBuy(n.key)})),r["\u0275\u0275text"](11,"Add to Cart"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](12,h,7,1,"div",16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("src",t.payload.val().imageUrl,r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](t.payload.val().title),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind2"](8,4,t.payload.val().price,"USD")),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngIf",t.key==n.check)}}let y=(()=>{class t{constructor(t,e,n,r,i,a){this._CartService=e,this._UserService=r,this.subscription1=n.getAllProducts().subscribe(t=>{this.products=t}),this.subscription2=i.getCategories().subscribe(t=>{this.categories=t}),this.subscription3=a.queryParamMap.subscribe(t=>{this.category=t.get("category")}),this.subscription4=t.authState.subscribe(t=>{this.userUid=t.uid})}showBuy(t){this.check=t}buy(t,e){let n;for(let i=0;i<this.products.length;i++)e==this.products[i].key&&(n=this.products[i]);let r={title:n.payload.val().title,price:n.payload.val().price,imageUrl:n.payload.val().imageUrl,quantity:t.value};this._CartService.createUserCart(this.userUid,r),this.check=null}ngOnInit(){}ngOnDestroy(){this.subscription1.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.AngularFireAuth),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](s.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-products"]],decls:10,vars:7,consts:[[1,"row"],[1,"col-md-2"],[1,"list-group","sticky-top","mb-5"],["routerLink","/shop/products",1,"list-group-item","list-group-item-action","active"],["class","list-group-item list-group-item-action","routerLink","/shop/products",3,"queryParams","active",4,"ngFor","ngForOf"],[1,"col-md-10"],["class","col-sm-12 col-md-6 col-lg-4",4,"ngFor","ngForOf"],["routerLink","/shop/products",1,"list-group-item","list-group-item-action",3,"queryParams"],[1,"col-sm-12","col-md-6","col-lg-4"],[1,"card","mb-5"],[1,"card-img-top","w-100",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],[1,"btn","btn-primary","w-100","rounded-0",3,"click"],[4,"ngIf"],["type","number","placeholder","quantity (kg)","required","","min","1",1,"form-control","w-75","float-left","rounded-0"],["myInput","","quantity",""],["type","button",1,"btn","btn-success","float-right","rounded-0",3,"click"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"a",3),r["\u0275\u0275text"](4,"All Categories"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](5,u,2,6,"a",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",5),r["\u0275\u0275elementStart"](7,"div",0),r["\u0275\u0275template"](8,v,13,7,"div",6),r["\u0275\u0275pipe"](9,"filterByCategory"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](3),r["\u0275\u0275classProp"]("active",!e.category),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",e.categories),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pipeBind2"](9,4,e.products,e.category)))},directives:[s.c,d.l,d.m],pipes:[m.a,d.d],styles:["img[_ngcontent-%COMP%]{height:250px}.card-footer[_ngcontent-%COMP%]{padding:0!important}.sticky-top[_ngcontent-%COMP%]{top:80px}.card-title[_ngcontent-%COMP%]{font-size:1rem}.card-text[_ngcontent-%COMP%]{color:#372d92}.card[_ngcontent-%COMP%]{border:1px solid #d8d4d4;border-top-right-radius:30px;border-bottom-left-radius:30px;overflow:hidden}"]}),t})();function g(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",6),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().clearAll()})),r["\u0275\u0275text"](1,"Clear shopping cart"),r["\u0275\u0275elementEnd"]()}}function f(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275text"](4),r["\u0275\u0275pipe"](5,"currency"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"td",7),r["\u0275\u0275element"](7,"input",8,9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"td"),r["\u0275\u0275text"](10),r["\u0275\u0275pipe"](11,"currency"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"td"),r["\u0275\u0275elementStart"](13,"button",10),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](t);const n=e.$implicit,i=r["\u0275\u0275reference"](8);return r["\u0275\u0275nextContext"]().save(n.key,i.value)})),r["\u0275\u0275text"](14,"Save"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"button",11),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](t);const n=e.$implicit;return r["\u0275\u0275nextContext"]().delete(n.key)})),r["\u0275\u0275text"](16,"Delete"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.payload.val().title),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind2"](5,4,t.payload.val().price,"USD")),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("value",t.payload.val().quantity),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind2"](11,7,t.payload.val().quantity*t.payload.val().price,"USD"))}}function b(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td",12),r["\u0275\u0275text"](2,"Total cost"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"td"),r["\u0275\u0275element"](4,"td"),r["\u0275\u0275elementStart"](5,"td",12),r["\u0275\u0275text"](6),r["\u0275\u0275pipe"](7,"currency"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind2"](7,1,t.totalCost,"USD"))}}function S(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"a",13),r["\u0275\u0275text"](1,"Check out"),r["\u0275\u0275elementEnd"]())}let x=(()=>{class t{constructor(t,e){this._CartService=t,this.subscription=e.authState.subscribe(e=>{this.userUid=e.uid,t.getCart(this.userUid).subscribe(t=>{this.carts=t,this.calculateCost()})})}delete(t){this._CartService.deleteCart(this.userUid,t)}save(t,e){this._CartService.saveCart(this.userUid,t,e)}calculateCost(){let t=0;for(let e=0;e<this.carts.length;e++)t+=this.carts[e].payload.val().price*this.carts[e].payload.val().quantity;this.totalCost=t}clearAll(){this._CartService.clearAll(this.userUid)}ngOnInit(){}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](i.AngularFireAuth))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-shopping-cart"]],decls:19,vars:4,consts:[["class","btn btn-outline-dark",3,"click",4,"ngIf"],[1,"table","table-bordered","table-hover","my-3"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","btn btn-primary","routerLink","/shop/check-out",4,"ngIf"],[1,"btn","btn-outline-dark",3,"click"],[1,"position-relative"],["placeholder","quantity (kg)",1,"form-control","w-50","position-absolute","myInput",3,"value"],["quantity",""],[1,"btn","btn-primary","myBtn","mr-1",3,"click"],[1,"btn","btn-danger","myBtn",3,"click"],[1,"font"],["routerLink","/shop/check-out",1,"btn","btn-primary"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"h1"),r["\u0275\u0275text"](1,"Shopping Cart"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,g,2,0,"button",0),r["\u0275\u0275elementStart"](3,"table",1),r["\u0275\u0275elementStart"](4,"thead"),r["\u0275\u0275elementStart"](5,"tr"),r["\u0275\u0275elementStart"](6,"th",2),r["\u0275\u0275text"](7,"Title"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"th",2),r["\u0275\u0275text"](9,"Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"th",2),r["\u0275\u0275text"](11,"Quantity (kg)"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"th",2),r["\u0275\u0275text"](13,"Total Price"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](14,"th",2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"tbody"),r["\u0275\u0275template"](16,f,17,10,"tr",3),r["\u0275\u0275template"](17,b,8,4,"tr",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](18,S,2,0,"a",5)),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",e.carts&&e.carts.length),r["\u0275\u0275advance"](14),r["\u0275\u0275property"]("ngForOf",e.carts),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.carts&&e.carts.length),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.carts&&e.carts.length))},directives:[d.m,d.l,s.c],pipes:[d.d],styles:[".font[_ngcontent-%COMP%]{font-weight:900}@media (max-width:768px){.myBtn[_ngcontent-%COMP%]{font-size:.5rem!important;padding:.3rem!important}.myInput[_ngcontent-%COMP%]{height:25px!important}}"]}),t})();var C=n("3Pt+");class E{constructor(t,e,n){this.userUid=t,this.shipping=e;let r=new Date,i=("0"+r.getDate()).slice(-2)+"-"+("0"+(r.getMonth()+1)).slice(-2)+"-"+r.getFullYear()+" "+("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2)+":"+("0"+r.getSeconds()).slice(-2);this.date=i,this.Carts=n.map(t=>({title:t.payload.val().title,price:t.payload.val().price,quantity:t.payload.val().quantity})),this.cost=this.calculateCost()}calculateCost(){let t=0;for(let e=0;e<this.Carts.length;e++)t+=this.Carts[e].price*this.Carts[e].quantity;return t}}var k=n("NuUg");function I(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"li",20),r["\u0275\u0275text"](1),r["\u0275\u0275elementStart"](2,"div",19),r["\u0275\u0275text"](3),r["\u0275\u0275pipe"](4,"currency"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate2"](" ",t.payload.val().quantity," x ",t.payload.val().title," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind2"](4,3,t.payload.val().price*t.payload.val().quantity,"USD")," ")}}let F=(()=>{class t{constructor(t,e,n,r){this._CartService=t,this._Router=e,this._OrderService=n,this._AngularFireAuth=r,this.checkForm=new C.FormGroup({name:new C.FormControl("",C.Validators.required),line1:new C.FormControl("",C.Validators.required),line2:new C.FormControl(""),city:new C.FormControl("",[C.Validators.required])}),this.subscription=r.authState.subscribe(t=>{this.userUid=t.uid,this._CartService.getCart(this.userUid).subscribe(t=>{this.carts=t,this.calculateCost()})})}save(t){let e=new E(this.userUid,t.value,this.carts);this._OrderService.createOrder(e).then(t=>{this._CartService.clearAll(this.userUid),this._Router.navigate(["/shop/order-success",t.key])})}calculateCost(){let t=0;for(let e=0;e<this.carts.length;e++)t+=this.carts[e].payload.val().price*this.carts[e].payload.val().quantity;this.totalCost=t}ngOnInit(){}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](s.b),r["\u0275\u0275directiveInject"](k.a),r["\u0275\u0275directiveInject"](i.AngularFireAuth))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-check-out"]],decls:32,vars:10,consts:[[1,"row"],[1,"col-md-6"],[1,"mb-5",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-12"],["for","name"],["type","text","formControlName","name","id","name",1,"form-control"],["for","line1"],["type","text","placeholder","line 1","formControlName","line1","id","line1",1,"form-control","mb-3"],["type","text","placeholder","line 2","formControlName","line2","id","line2",1,"form-control"],["for","city"],["type","text","formControlName","city","id","city",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item","font-weight-bold"],[1,"float-right"],[1,"list-group-item"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"form",2),r["\u0275\u0275listener"]("ngSubmit",(function(){return e.save(e.checkForm)})),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"label",5),r["\u0275\u0275text"](6,"Name"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](7,"input",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"div",3),r["\u0275\u0275elementStart"](9,"div",4),r["\u0275\u0275elementStart"](10,"label",7),r["\u0275\u0275text"](11,"Address"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](12,"input",8),r["\u0275\u0275element"](13,"input",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"div",3),r["\u0275\u0275elementStart"](15,"div",4),r["\u0275\u0275elementStart"](16,"label",10),r["\u0275\u0275text"](17,"City"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](18,"input",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"button",12),r["\u0275\u0275text"](20,"Save"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",1),r["\u0275\u0275elementStart"](22,"div",13),r["\u0275\u0275elementStart"](23,"div",14),r["\u0275\u0275elementStart"](24,"h2",15),r["\u0275\u0275text"](25,"Order summary"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"ul",16),r["\u0275\u0275template"](27,I,5,6,"li",17),r["\u0275\u0275elementStart"](28,"li",18),r["\u0275\u0275text"](29," Total "),r["\u0275\u0275elementStart"](30,"div",19),r["\u0275\u0275text"](31),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("formGroup",e.checkForm),r["\u0275\u0275advance"](5),r["\u0275\u0275classProp"]("is-invalid",e.checkForm.get("name").invalid&&e.checkForm.get("name").touched),r["\u0275\u0275advance"](5),r["\u0275\u0275classProp"]("is-invalid",e.checkForm.get("line1").invalid&&e.checkForm.get("line1").touched),r["\u0275\u0275advance"](6),r["\u0275\u0275classProp"]("is-invalid",e.checkForm.get("city").invalid&&e.checkForm.get("city").touched),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("disabled",e.checkForm.invalid),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("ngForOf",e.carts),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" ",e.totalCost," "))},directives:[C["\u0275angular_packages_forms_forms_y"],C.NgControlStatusGroup,C.FormGroupDirective,C.DefaultValueAccessor,C.NgControlStatus,C.FormControlName,d.l],pipes:[d.d],styles:[""]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-order-success"]],decls:2,vars:0,template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1,"Your order has been sent successfully"),r["\u0275\u0275elementEnd"]())},styles:[""]}),t})();const O=function(t){return["/shop/order-details",t]};function U(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"td"),r["\u0275\u0275elementStart"](6,"a",3),r["\u0275\u0275text"](7,"view"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](n.userName),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.payload.val().date),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("routerLink",r["\u0275\u0275pureFunction1"](3,O,t.key))}}let _=(()=>{class t{constructor(t,e){this.subscription=e.authState.subscribe(e=>{this.userName=e.displayName,this.userUid=e.uid,t.getOrders().subscribe(t=>{this.myOrders=t.filter(t=>t.payload.val().userUid==this.userUid)})})}ngOnInit(){}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](k.a),r["\u0275\u0275directiveInject"](i.AngularFireAuth))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-my-orders"]],decls:12,vars:1,consts:[[1,"table","my-3"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-link",3,"routerLink"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"h1"),r["\u0275\u0275text"](1,"Orders"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"table",0),r["\u0275\u0275elementStart"](3,"thead"),r["\u0275\u0275elementStart"](4,"tr"),r["\u0275\u0275elementStart"](5,"th",1),r["\u0275\u0275text"](6,"Customer"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"th",1),r["\u0275\u0275text"](8,"Date"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"th",1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"tbody"),r["\u0275\u0275template"](11,U,8,5,"tr",2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](11),r["\u0275\u0275property"]("ngForOf",e.myOrders))},directives:[d.l,s.c],styles:[""]}),t})();function q(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"li",9),r["\u0275\u0275text"](1),r["\u0275\u0275elementStart"](2,"div",8),r["\u0275\u0275text"](3),r["\u0275\u0275pipe"](4,"currency"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate2"](" ",t.quantity," x ",t.title," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind2"](4,3,t.price*t.quantity,"USD")," ")}}function A(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"div",2),r["\u0275\u0275elementStart"](1,"div",3),r["\u0275\u0275elementStart"](2,"h2",4),r["\u0275\u0275text"](3,"Order Details"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"ul",5),r["\u0275\u0275template"](5,q,5,6,"li",6),r["\u0275\u0275elementStart"](6,"li",7),r["\u0275\u0275text"](7," Total "),r["\u0275\u0275elementStart"](8,"div",8),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngForOf",t.Carts),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" ",t.totalCost," ")}}let P=(()=>{class t{constructor(t,e){this.orderKey=t.snapshot.paramMap.get("id"),this.subscription=e.getOrders().subscribe(t=>{this.order=t.find(t=>t.key==this.orderKey),this.Carts=this.order.payload.val().Carts,this.calculateCost()})}calculateCost(){let t=0;for(let e=0;e<this.Carts.length;e++)t+=this.Carts[e].price*this.Carts[e].quantity;this.totalCost=t}ngOnInit(){}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](k.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-order-details"]],decls:2,vars:1,consts:[[1,"col-md-6"],["class","card",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item","font-weight-bold"],[1,"float-right"],[1,"list-group-item"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,A,10,2,"div",1),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.Carts&&e.Carts.length))},directives:[d.m,d.l],pipes:[d.d],styles:[""]}),t})();var j=n("LjFu"),D=n("PCNd");const M=[{path:"products",canActivate:[j.a],component:y},{path:"shopping-cart",canActivate:[j.a],component:x},{path:"check-out",canActivate:[j.a],component:F},{path:"order-details/:id",canActivate:[j.a],component:P},{path:"my/orders",canActivate:[j.a],component:_},{path:"order-success/:id",canActivate:[j.a],component:w}];let N=(()=>{class t{}return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[[s.d.forChild(M)],D.a]]}),t})()}}]);