import{_ as k}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-RC6Lv53r.js";import{o as p,c as h,k as e,e as s,l as o,m as d,ad as i,q as c,s as m,C as t}from"./modules/vue-Cjki_mmp.js";import{I as g}from"./slidev/default-BpthV4tT.js";import{u,f}from"./slidev/context-DMcf09f5.js";import"./modules/unplugin-icons-8wZ38gL6.js";import"./index-D0_HDOda.js";import"./modules/shiki-W5hYiwf5.js";const N={__name:"slides.md__slidev_15",setup(D){const{$slidev:E,$nav:y,$clicksContext:l,$clicks:C,$page:A,$renderContext:_,$frontmatter:n}=u();return l.setup(),(b,a)=>{const r=k;return p(),h(g,c(m(t(f)(t(n),14))),{default:e(()=>[a[1]||(a[1]=s("h1",null,"Staged example",-1)),o(r,d({},{ranges:["none","1","3","4","6","8"]}),{default:e(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-docker"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"FROM"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," bellsoft/liberica-runtime-container:jdk-musl "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"as"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," builder")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," . /app")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," cd /app && ./gradlew build -xtest")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"FROM"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," bellsoft/liberica-runtime-container:jre-slim-musl "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"as"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," runner")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," --from=builder /app/build/libs/spring-petclinic-3.3.0.jar /app/app.jar")])])],-1)])),_:1},16)]),_:1},16)}}};export{N as default};
