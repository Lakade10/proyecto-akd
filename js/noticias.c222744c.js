"use strict";(self["webpackChunkproyecto_akd"]=self["webpackChunkproyecto_akd"]||[]).push([[710],{8291:function(a,t,i){i.r(t),i.d(t,{default:function(){return k}});var s=i(3396),o=i(4870),c=i(9242),n=i(7139);const l={class:"noticias-list"},e=["src","alt"];var u={__name:"NoticiasLista",props:["noticias"],setup(a){const t=a;return(a,i)=>{const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(c.W3,{name:"scale"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.noticias,(a=>((0,s.wg)(),(0,s.iD)("div",{key:a.id,class:"noticia-panel"},[(0,s.Wm)(o,{to:"/noticias/"+a.categoria+"/"+a.id},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,n.zw)(a.fecha),1),(0,s._)("img",{src:a.imagen,alt:a.titulo},null,8,e),(0,s._)("h3",null,(0,n.zw)(a.titulo),1)])),_:2},1032,["to"])])))),128))])),_:1})])}}},d=i(89);const m=(0,d.Z)(u,[["__scopeId","data-v-4f0149e6"]]);var r=m,f=i(3304),_=i(65);const b=a=>((0,s.dD)("data-v-12f5255a"),a=a(),(0,s.Cn)(),a),p=b((()=>(0,s._)("h2",{id:"h2-seccion"},"SECCIÓN NOTICIAS",-1))),w={class:"noticias"};var v={__name:"NoticiasView",setup(a){const t=(0,o.iH)([{label:"Fútbol",icon:"fas fa-futbol",command:()=>n("futbol","setNoticiasFutbol")},{label:"Institucional",icon:"fas fa-building-columns",command:()=>n("institucional","setNoticiasInstitucional")},{label:"Básquet",icon:"fas fa-basketball",command:()=>n("basquet","setNoticiasBasquet")},{label:"Últimas Noticias",icon:"fas fa-newspaper",command:()=>n("ultimas_noticias","setUltimasNoticias")}]),i=(0,_.oR)(),c=(0,s.Fl)((()=>i.state.web.noticiasSeleccionadas)),n=(a,t)=>{i.dispatch("web/loadNoticias",{categoria:a,mutation:t})};return(0,s.bv)((()=>{n("ultimas_noticias","setUltimasNoticias")})),(a,i)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)((0,o.SU)(f.Z),{model:t.value,onItemClick:n},{start:(0,s.w5)((()=>[p])),_:1},8,["model"]),(0,s._)("div",w,[(0,s.Wm)(r,{noticias:c.value},null,8,["noticias"])])],64))}};const N=(0,d.Z)(v,[["__scopeId","data-v-12f5255a"]]);var k=N}}]);
//# sourceMappingURL=noticias.c222744c.js.map