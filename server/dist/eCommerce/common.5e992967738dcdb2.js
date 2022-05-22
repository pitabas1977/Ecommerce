"use strict";(self.webpackChunkeCommerce=self.webpackChunkeCommerce||[]).push([[592],{3962:(g,_,c)=>{c.d(_,{A:()=>h});var d=c(4292),t=c(5e3),u=c(1083),i=c(9808),l=c(5899);function o(r,s){if(1&r){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.removeCartItem(e.product)}),t._uU(1,"Remove"),t.qZA()}}function p(r,s){1&r&&t._UZ(0,"mat-progress-bar",15)}function C(r,s){if(1&r){const n=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.addToCart(e.product)}),t._uU(1,"Add to Cart"),t.qZA()}if(2&r){const n=t.oxw();t.Q6J("ngClass",n.loading?"disable":"")}}function m(r,s){if(1&r){const n=t.EpF();t.TgZ(0,"div",17),t.TgZ(1,"span",18),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.cartQtyChange("dec",e.product)}),t._uU(2,"-"),t.qZA(),t.TgZ(3,"span",19),t._uU(4),t.qZA(),t.TgZ(5,"span",18),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.cartQtyChange("inc",e.product)}),t._uU(6,"+"),t.qZA(),t.qZA()}if(2&r){const n=t.oxw();t.xp6(1),t.Q6J("ngClass",n.decCheck?n.loading?"disable":"":"disable"),t.xp6(3),t.Oqu(n.product.cartQty),t.xp6(1),t.Q6J("ngClass",n.incCheck?n.loading?"disable":"":"disable")}}const f=function(r){return["/product/",r]};let h=(()=>{class r{constructor(n){this.cartService=n,this.cartItems=[],this.subs=[],this.loading=!1}ngOnInit(){}ngOnDestroy(){this.subs.forEach(n=>n.unsubscribe())}cartQtyChange(n,a){this.loading=!0,this.cartService.cartQtyUpdate(a,"inc"===n?"cartQty":"Quantity").then(T=>this.loading=!1).catch(T=>this.loading=!1)}addToCart(n){this.loading=!0,n.Quantity>0&&this.cartService.addToCart(n).then(a=>this.loading=!1).catch(a=>this.loading=!1)}get decCheck(){return this.cartComponent?this.product.cartQty>1:this.product.cartQty>0}get incCheck(){return this.product.Quantity>0}removeCartItem(n){this.loading=!0,this.cartService.removeCartItem(n).then(a=>this.loading=!1).catch(a=>this.loading=!1)}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(d.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-card"]],inputs:{product:"product",cartComponent:"cartComponent"},decls:21,vars:14,consts:[[1,"card"],[1,"product-image"],["alt","Denim Jeans",3,"src"],[1,"black-cover"],[1,"details-btn",3,"routerLink"],["class","details-btn remove",3,"click",4,"ngIf"],[1,"product-info"],[1,"title"],[1,"price"],[1,"product-qty"],[1,"add-cart-action"],["mode","indeterminate",4,"ngIf"],["class","add-cart-btn",3,"ngClass","click",4,"ngIf"],["class","btn-cart-action",4,"ngIf"],[1,"details-btn","remove",3,"click"],["mode","indeterminate"],[1,"add-cart-btn",3,"ngClass","click"],[1,"btn-cart-action"],[1,"btn-inc-dec",3,"ngClass","click"],[1,"qty"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3),t.TgZ(4,"a",4),t._uU(5,"Show Details"),t.qZA(),t.YNc(6,o,2,0,"button",5),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"p",8),t._uU(11),t.ALo(12,"number"),t.qZA(),t.qZA(),t.TgZ(13,"p",9),t._uU(14,"Available Quantity: "),t.TgZ(15,"span"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"div",10),t.YNc(18,p,1,0,"mat-progress-bar",11),t.YNc(19,C,2,1,"button",12),t.YNc(20,m,7,3,"div",13),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("src",a.product.ImageLink,t.LSH),t.xp6(2),t.Q6J("routerLink",t.VKq(12,f,a.product._id)),t.xp6(2),t.Q6J("ngIf",a.cartComponent),t.xp6(3),t.Oqu(a.product.ProductName),t.xp6(2),t.hij("BDT ",t.xi3(12,9,a.product.Price,"1.2-2"),""),t.xp6(5),t.Oqu(a.product.Quantity),t.xp6(2),t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",!a.product.cartQty),t.xp6(1),t.Q6J("ngIf",a.product.cartQty))},directives:[u.yS,i.O5,l.pW,i.mk],pipes:[i.JJ],styles:[""]}),r})()},3196:(g,_,c)=>{c.d(_,{d:()=>l});var d=c(9808),t=c(1083),u=c(5899),i=c(5e3);let l=(()=>{class o{}return o.\u0275fac=function(C){return new(C||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[d.ez,t.Bz,u.Cv]]}),o})()}}]);