(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/nMp":function(n,s,l){"use strict";l.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { FileValueAccessor } from './file-value-accessor';\nimport { FormlyFieldFile } from './file-type.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [{ name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] }],\n    }),\n  ],\n  declarations: [FileValueAccessor, FormlyFieldFile, AppComponent],\n})\nexport class AppModule {}\n"},"6T/I":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'file\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'file\'</span>,\n    },\n  ];\n}\n'},"7I+3":function(n,s,l){"use strict";l.r(s),s.default='<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n'},"8QWB":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Directive } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { NG_VALUE_ACCESSOR, ControlValueAccessor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n\n<span class="hljs-meta">@Directive</span>({\n  <span class="hljs-comment">// tslint:disable-next-line</span>\n  selector: <span class="hljs-string">\'input[type=file]\'</span>,\n  host: {\n    <span class="hljs-string">\'(change)\'</span>: <span class="hljs-string">\'onChange($event.target.files)\'</span>,\n    <span class="hljs-string">\'(blur)\'</span>: <span class="hljs-string">\'onTouched()\'</span>,\n  },\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: <span class="hljs-literal">true</span> }],\n})\n<span class="hljs-comment">// https://github.com/angular/angular/issues/7341</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FileValueAccessor <span class="hljs-keyword">implements</span> ControlValueAccessor {\n  value: <span class="hljs-built_in">any</span>;\n  onChange = _ =&gt; {};\n  onTouched = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {};\n\n  writeValue(value) {}\n  registerOnChange(fn: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">this</span>.onChange = fn;\n  }\n  registerOnTouched(fn: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">this</span>.onTouched = fn;\n  }\n}\n'},IPIK:function(n,s,l){"use strict";l.r(s);var o=l("Mlb/"),a=l("QZuW");class e{constructor(){this.form=new a.FormGroup({}),this.model={},this.options={},this.fields=[{key:"file",type:"file"}]}}const r={examples:[{title:"File input",component:e,files:[{file:"app.component.html",content:l("iR0f"),filecontent:l("7I+3")},{file:"app.component.ts",content:l("6T/I"),filecontent:l("PZlD")},{file:"file-value-accessor.ts",content:l("8QWB"),filecontent:l("bjhl")},{file:"file-type.component.ts",content:l("xkbX"),filecontent:l("MXps")},{file:"app.module.ts",content:l("QgpB"),filecontent:l("/nMp")}]}]};class p{}var t=l("n91+"),i=l("aUi8"),m=l("xRU+"),c=l("l9Gt"),u=l("tb2p"),d=l("5swT"),f=l("rGUg"),g=l("qEw3"),h=l("KL5v"),y=l("WPgD"),j=l("wR1y");class v{constructor(){this.onChange=n=>{},this.onTouched=()=>{}}writeValue(n){}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}}var C=l("AhFg"),F=l("vk2e"),k=l("B/Is");class w extends k.b{}var b=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"input",[["type","file"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"keypress"]],(function(n,s,l){var a=!0;return"input"===s&&(a=!1!==o["\u0275nov"](n,1)._handleInput(l.target.value)&&a),"blur"===s&&(a=!1!==o["\u0275nov"](n,1).onTouched()&&a),"compositionstart"===s&&(a=!1!==o["\u0275nov"](n,1)._compositionStart()&&a),"compositionend"===s&&(a=!1!==o["\u0275nov"](n,1)._compositionEnd(l.target.value)&&a),"change"===s&&(a=!1!==o["\u0275nov"](n,2).onChange(l.target.files)&&a),"blur"===s&&(a=!1!==o["\u0275nov"](n,2).onTouched()&&a),"focus"===s&&(a=!1!==o["\u0275nov"](n,7).onFocus(l)&&a),"blur"===s&&(a=!1!==o["\u0275nov"](n,7).onBlur(l)&&a),"keyup"===s&&(a=!1!==(o["\u0275nov"](n,7).to.keyup&&o["\u0275nov"](n,7).to.keyup(o["\u0275nov"](n,7).field,l))&&a),"keydown"===s&&(a=!1!==(o["\u0275nov"](n,7).to.keydown&&o["\u0275nov"](n,7).to.keydown(o["\u0275nov"](n,7).field,l))&&a),"click"===s&&(a=!1!==(o["\u0275nov"](n,7).to.click&&o["\u0275nov"](n,7).to.click(o["\u0275nov"](n,7).field,l))&&a),"change"===s&&(a=!1!==o["\u0275nov"](n,7).onChange(l)&&a),"keypress"===s&&(a=!1!==(o["\u0275nov"](n,7).to.keypress&&o["\u0275nov"](n,7).to.keypress(o["\u0275nov"](n,7).field,l))&&a),a}),null,null)),o["\u0275did"](1,16384,null,0,a.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,a.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275did"](2,16384,null,0,v,[],null,null),o["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,(function(n,s){return[n,s]}),[a.DefaultValueAccessor,v]),o["\u0275did"](4,540672,null,0,a.FormControlDirective,[[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_q"]]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlDirective]),o["\u0275did"](6,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),o["\u0275did"](7,933888,null,0,C.a,[o.Renderer2,o.ElementRef,F.DOCUMENT],{field:[0,"field"]},null)],(function(n,s){var l=s.component;n(s,4,0,l.formControl),n(s,7,0,l.field)}),(function(n,s){n(s,0,0,o["\u0275nov"](s,6).ngClassUntouched,o["\u0275nov"](s,6).ngClassTouched,o["\u0275nov"](s,6).ngClassPristine,o["\u0275nov"](s,6).ngClassDirty,o["\u0275nov"](s,6).ngClassValid,o["\u0275nov"](s,6).ngClassInvalid,o["\u0275nov"](s,6).ngClassPending)}))}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-field-file",[],null,null,null,_,b)),o["\u0275did"](1,49152,null,0,w,[],null,null)],null,null)}var M=o["\u0275ccf"]("formly-field-file",w,x,{field:"field"},{},[]),A=l("fYis"),R=l("mSm0"),T=l("g/x9"),V=l("Ea/l"),N=l("kY9M"),E=l("cXvR"),O=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,s,l){var a=!0;return"submit"===s&&(a=!1!==o["\u0275nov"](n,2).onSubmit(l)&&a),"reset"===s&&(a=!1!==o["\u0275nov"](n,2).onReset()&&a),a}),null,null)),o["\u0275did"](1,16384,null,0,a["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,a.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,a.ControlContainer,null,[a.FormGroupDirective]),o["\u0275did"](4,16384,null,0,a.NgControlStatusGroup,[[4,a.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,T.b,T.a)),o["\u0275prd"](512,null,V.a,V.a,[N.b,o.ComponentFactoryResolver,o.Injector,[2,a.FormGroupDirective]]),o["\u0275did"](7,966656,null,0,E.a,[V.a,N.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null)],(function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)}),(function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)}))}function D(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,O)),o["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var G=o["\u0275ccf"]("formly-app-example",e,D,{},{},[]),U=l("o3+a"),I=l("9b0e"),L=l("6YJn"),P=l("dvHj"),B=l("C0xW"),W=l("W9sv"),X=l("m6lo"),K=l("S6Ld"),Z=l("cTZo"),q=l("Kfqh"),J=l("Ienz"),Q=l("KuLc"),Y=l("Z7++"),z=l("2lML"),$=l("pgVP"),H=l("pk7F"),nn=l("T8+l"),sn=l("0hby"),ln=l("tVba"),on=l("XX7/"),an=l("pLrJ"),en=l("U5/R"),rn=l("TqxR"),pn=l("soK0"),tn=l("1k+g"),mn=l("pAed"),cn=l("VtvF"),un=l("lN7U"),dn=l("NPi3"),fn=l("PCNd"),gn=l("WCiw"),hn=l("Vtge"),yn=l("+5Wd"),jn=l("+R4m"),vn=l("SSYk"),Cn=l("KJU8"),Fn=l("eTA3"),kn=l("o12O"),wn=l("iWYX"),bn=l("h18T");class _n{}var xn=l("qk26"),Mn=l("P+xK");l.d(s,"ConfigModuleNgFactory",(function(){return An}));var An=o["\u0275cmf"](p,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,i.a,m.a,c.a,u.a,d.a,f.a,g.a,h.a,y.a,j.a,M,A.a,R.a,G]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,F.NgLocalization,F.NgLocaleLocalization,[o.LOCALE_ID,[2,F["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,U.c,U.c,[]),o["\u0275mpd"](4608,I.c,I.c,[I.i,I.e,o.ComponentFactoryResolver,I.h,I.f,o.Injector,o.NgZone,F.DOCUMENT,L.b,[2,F.Location]]),o["\u0275mpd"](5120,I.j,I.k,[I.c]),o["\u0275mpd"](5120,P.b,P.c,[I.c]),o["\u0275mpd"](4608,B.e,W.c,[[2,W.g],[2,W.l]]),o["\u0275mpd"](5120,X.c,X.j,[I.c]),o["\u0275mpd"](4608,K.a,K.a,[]),o["\u0275mpd"](4608,Z.a,Z.a,[]),o["\u0275mpd"](4608,a.FormBuilder,a.FormBuilder,[]),o["\u0275mpd"](4608,a["\u0275angular_packages_forms_forms_o"],a["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,V.a,V.a,[N.b,o.ComponentFactoryResolver,o.Injector,[2,a.FormGroupDirective]]),o["\u0275mpd"](1073742336,F.CommonModule,F.CommonModule,[]),o["\u0275mpd"](1073742336,q.b,q.b,[]),o["\u0275mpd"](1073742336,U.d,U.d,[]),o["\u0275mpd"](1073742336,J.a,J.a,[]),o["\u0275mpd"](1073742336,L.a,L.a,[]),o["\u0275mpd"](1073742336,Q.g,Q.g,[]),o["\u0275mpd"](1073742336,Y.ScrollingModule,Y.ScrollingModule,[]),o["\u0275mpd"](1073742336,I.g,I.g,[]),o["\u0275mpd"](1073742336,W.l,W.l,[[2,W.d],[2,B.f]]),o["\u0275mpd"](1073742336,P.e,P.e,[]),o["\u0275mpd"](1073742336,W.v,W.v,[]),o["\u0275mpd"](1073742336,z.j,z.j,[]),o["\u0275mpd"](1073742336,X.i,X.i,[]),o["\u0275mpd"](1073742336,X.f,X.f,[]),o["\u0275mpd"](1073742336,$.c,$.c,[]),o["\u0275mpd"](1073742336,H.c,H.c,[]),o["\u0275mpd"](1073742336,nn.b,nn.b,[]),o["\u0275mpd"](512,N.b,N.b,[]),o["\u0275mpd"](1024,N.a,(function(n){return[{wrappers:[{name:"form-field",component:sn.a}]},{types:[{name:"input",component:ln.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:on.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:an.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:en.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:rn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:pn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:tn.a}],extensions:[{name:"addons",extension:{postPopulate:mn.a}}]},cn.b(n),{types:[{name:"file",component:w,wrappers:["form-field"]}]}]}),[N.b]),o["\u0275mpd"](1073742336,cn.a,cn.a,[N.b,[2,N.a]]),o["\u0275mpd"](1073742336,un.h,un.h,[]),o["\u0275mpd"](1073742336,dn.b,dn.b,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,a["\u0275angular_packages_forms_forms_d"],a["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,a.ReactiveFormsModule,a.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,yn.a,yn.a,[]),o["\u0275mpd"](1073742336,jn.a,jn.a,[]),o["\u0275mpd"](1073742336,vn.a,vn.a,[]),o["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),o["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),o["\u0275mpd"](1073742336,kn.a,kn.a,[]),o["\u0275mpd"](1073742336,wn.a,wn.a,[]),o["\u0275mpd"](1073742336,bn.a,bn.a,[]),o["\u0275mpd"](1073742336,_n,_n,[]),o["\u0275mpd"](1073742336,xn.t,xn.t,[[2,xn.y],[2,xn.p]]),o["\u0275mpd"](1073742336,p,p,[]),o["\u0275mpd"](1024,xn.n,(function(){return[[{path:"",component:Mn.a,data:r}]]}),[])])}))},MXps:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-file',\n  template: `\n    <input type=\"file\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" />\n  `,\n})\nexport class FormlyFieldFile extends FieldType {}\n"},PZlD:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'file',\n      type: 'file',\n    },\n  ];\n}\n"},QgpB:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { FileValueAccessor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./file-value-accessor\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldFile } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./file-type.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [{ name: <span class="hljs-string">\'file\'</span>, component: FormlyFieldFile, wrappers: [<span class="hljs-string">\'form-field\'</span>] }],\n    }),\n  ],\n  declarations: [FileValueAccessor, FormlyFieldFile, AppComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},bjhl:function(n,s,l){"use strict";l.r(s),s.default="import { Directive } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\n@Directive({\n  // tslint:disable-next-line\n  selector: 'input[type=file]',\n  host: {\n    '(change)': 'onChange($event.target.files)',\n    '(blur)': 'onTouched()',\n  },\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true }],\n})\n// https://github.com/angular/angular/issues/7341\nexport class FileValueAccessor implements ControlValueAccessor {\n  value: any;\n  onChange = _ => {};\n  onTouched = () => {};\n\n  writeValue(value) {}\n  registerOnChange(fn: any) {\n    this.onChange = fn;\n  }\n  registerOnTouched(fn: any) {\n    this.onTouched = fn;\n  }\n}\n"},iR0f:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},xkbX:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-file\'</span>,\n  template: <span class="hljs-string">`\n    &lt;input type="file" [formControl]="formControl" [formlyAttributes]="field" /&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldFile <span class="hljs-keyword">extends</span> FieldType {}\n'}}]);