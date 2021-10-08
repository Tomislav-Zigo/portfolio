(this["webpackJsonptomislav-portfolio"]=this["webpackJsonptomislav-portfolio"]||[]).push([[0],{37:function(e,t,a){},49:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(39),c=a.n(r),i=(a(49),a(37),a(26)),l=a(16),o=a(14),d=a(1),m=function(e){var t=e.icons;return Object(d.jsx)("div",{className:"fixed flex flex-col bottom-3 right-3",children:t.map((function(e){return Object(d.jsxs)("a",{href:e.link,rel:"noreferrer",target:"_blank",className:"flex flex-row items-center justify-between opacity-50 text-white hover:opacity-100 py-1 sm:py-0",children:[Object(d.jsx)("div",{className:"hidden sm:block overflow-hidden",children:Object(d.jsx)("div",{className:"transition transform translate-x-16 hover:translate-x-0 pl-12",children:e.label})}),Object(d.jsx)(o.a,{icon:i[e.icon]||l[e.icon],className:"mx-1"})]},e.link+e.label)}))})},b=a(22),h=a.p+"static/media/bitmoji.71f0fa21.PNG",x=function(e){var t=e.label,a=e.symbol;return Object(d.jsx)("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true",children:a})},u=function(e){var t=e.scrollRef;return Object(d.jsx)("div",{className:"w-100vw h-100 text-center absolute top-95vh left-1/2 flex flex-col items-center",children:Object(d.jsx)(o.a,{className:"opacity-50 text-white text-xl hover:opacity-100",icon:l.faChevronCircleDown,onClick:function(){return t.current.scrollIntoView({behavior:"smooth"})}})})},j=function(e){var t=e.scrollRef;return Object(d.jsxs)("div",{className:"flex flex-row items-center rounded shadow transition ",children:[Object(d.jsxs)("div",{className:"items-center flex flex-col sm:items-start p-3 w-64 pb-6 rounded bg-gray-900 mx-1 bg-opacity-50 ",children:[Object(d.jsxs)("h2",{className:"my-2 mt-1 text-2xl font-bold",children:["Hello there ",Object(d.jsx)(x,{label:"Hello",className:"animate-spin",symbol:"\ud83d\udc4b"})]}),Object(d.jsx)("p",{className:"my-2 h-32 text-center sm:text-left text-gray-300",children:"I am a front end developer looking to assist your organization."}),Object(d.jsx)(b.b,{to:"/contact",className:"transition duration-250 bg-green-500 hover:bg-green-600 rounded-full px-4 py-3",children:"Get in touch"})]}),Object(d.jsx)("div",{className:"w-24 h-full rounded bg-gray-900 bg-opacity-50 hidden sm:flex flex-row items-center justify-center w-64 shadow",children:Object(d.jsx)("img",{className:"my-auto h-48 w-48",src:h,alt:""})}),Object(d.jsx)(u,{scrollRef:t})]})},f=a(23),g=a(36),p=a(44),v=a(20),O=a(27),w=a(32),y=a(31),N=a(19),k=a.n(N),C=a(43),F=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={data:{first:"",last:"",email:"",message:""},errors:[]},e.schema={first:k.a.string().required().label("First name"),last:k.a.string().required().label("Last name"),email:k.a.string().email().required().label("Email"),message:k.a.string().required().label("Message")},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.sendEmail(t.target)},e.validate=function(){var t=k.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,s={},n=Object(p.a)(t.details);try{for(n.s();!(a=n.n()).done;){var r=a.value;s[r.path[0]]=r.message}}catch(c){n.e(c)}finally{n.f()}return s},e.handleChange=function(t){var a=t.currentTarget,s=Object(g.a)({},e.state.errors),n=e.validateProperty(a);n?s[a.name]=n:delete s[a.name];var r=Object(g.a)({},e.state.data);r[a.name]=a.value,e.setState({data:r,errors:s}),console.log(e.state.errors)},e.validateProperty=function(t){var a=t.name,s=t.value,n=Object(f.a)({},a,s),r=Object(f.a)({},a,e.schema[a]),c=k.a.validate(n,r).error;return c?c.details[0].message:null},e}return Object(O.a)(a,[{key:"sendEmail",value:function(e){C.a.sendForm("service_jf59ghy","template_l8tgv4b",e,"user_ZuKLkCW4WWO1NG03AEPX8").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.reset()}},{key:"getFirstError",value:function(){var e=this.state.errors;return e.first?e.first:e.last?e.last:e.email?e.email:e.message?e.message:void 0}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"flex flex-column justify-center",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"w-full max-w-lg m-2 p-4 bg-gray-900 shadow rounded-lg",children:[Object(d.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[Object(d.jsx)("label",{className:"block uppercase tracking-normal text-white text-xs font-bold mb-2",htmlFor:"grid-first-name",children:"First Name"}),Object(d.jsx)("input",{className:"shadow appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-first-name",type:"text",placeholder:"Jane",onChange:this.handleChange,value:this.state.first,name:"first"})]}),Object(d.jsxs)("div",{className:"w-full md:w-1/2 px-3",children:[Object(d.jsx)("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-last-name",children:"Last Name"}),Object(d.jsx)("input",{className:"shadow appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-last-name",type:"text",placeholder:"Doe",onChange:this.handleChange,value:this.state.last,name:"last"})]})]}),Object(d.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:Object(d.jsxs)("div",{className:"w-full px-3",children:[Object(d.jsx)("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-password",children:"E-mail"}),Object(d.jsx)("input",{className:"shadow appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"email",type:"email",onChange:this.handleChange,value:this.state.email,name:"email"})]})}),Object(d.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:Object(d.jsxs)("div",{className:"w-full px-3",children:[Object(d.jsx)("label",{className:"block uppercase tracking-wide text-white text-xs font-bold mb-2",htmlFor:"grid-password",children:"Message"}),Object(d.jsx)("textarea",{className:"shadow resize-y appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none",id:"message",onChange:this.handleChange,value:this.state.message,name:"message"}),Object(d.jsx)("p",{className:"text-red-500 text-xs italic",children:this.getFirstError()})]})}),Object(d.jsxs)("div",{className:"md:flex md:items-center",children:[Object(d.jsx)("div",{className:"md:w-1/3",children:Object(d.jsx)("button",{className:"transition bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 shadow rounded",children:"Send"})}),Object(d.jsx)("div",{className:"md:w-2/3"})]})]})})}}]),a}(n.a.Component),R=F,S=a(60),I=a(61),_=a(62);function E(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var G=function(e){var t=e.navigation;return Object(d.jsx)(S.a,{as:"nav",className:"bg-gray-800 absolute w-full top-0 left-0",children:function(e){e.open;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(d.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(d.jsxs)(S.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(d.jsx)("span",{className:"sr-only text-white",children:"Open main menu"}),Object(d.jsx)(o.a,{icon:l.faBars})]})}),Object(d.jsx)("div",{to:"/",className:"hidden sm:block text-white justify-start text-white font-bold text-xl ",children:"<Tomislav \u017digo>"}),Object(d.jsx)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-end",children:Object(d.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(d.jsx)("div",{className:"flex",children:t.map((function(e){return Object(d.jsxs)("div",{onClick:function(){return e.scrollRef.current.scrollIntoView({behavior:"smooth"})},className:E(e.current?" bg-opacity-60 ":" bg-opacity-20  hover:bg-opacity-40","px-3 py-1 text-sm font-medium text-gray-300 box-content hover:text-white flex flex-col group"),"aria-current":e.current?"page":void 0,children:[e.name.toUpperCase(),Object(d.jsx)("div",{className:"transition-width duration-130 w-4 h-1 border-green-500 border group-hover:w-full bg-green-500"})]},e.name)}))})})}),Object(d.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[Object(d.jsx)("div",{type:"button",className:"block sm:hidden p-1 rounded-full text-white font-bold text-lg focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white",children:Object(d.jsx)("h1",{children:"<Tomislav \u017digo>"})}),Object(d.jsx)(I.a,{as:"div",className:"ml-3 relative",children:Object(d.jsx)(_.a,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(d.jsxs)(I.a.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[Object(d.jsx)(I.a.Item,{children:function(e){var t=e.active;return Object(d.jsx)("div",{className:E(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Your Profile"})}}),Object(d.jsx)(I.a.Item,{children:function(e){var t=e.active;return Object(d.jsx)("div",{className:E(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Settings"})}}),Object(d.jsx)(I.a.Item,{children:function(e){var t=e.active;return Object(d.jsx)("div",{className:E(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Sign out"})}})]})})})]})]})}),Object(d.jsx)(S.a.Panel,{className:"sm:hidden",children:Object(d.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:t.map((function(e){return Object(d.jsx)("div",{onClick:function(){return e.scrollRef.current.scrollIntoView({behavior:"smooth"})},className:E(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}})},T=a.p+"static/media/twitter-square.daf77586b35e90319725e742f6e069f9.daf77586.jpg",P=a.p+"static/media/react-logo-512x512.2c61e2f6.png",A=a.p+"static/media/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.14b9f67e.png",B=a.p+"static/media/1024px-Unofficial_JavaScript_logo_2.svg.2e10b2a2.png",L=a.p+"static/media/github-logo-5F384D0265-seeklogo.com.dfaa7e3e.png",q=a(42),z=a.n(q),D=function(e){var t=e.strings,a=n.a.useRef(null),s=n.a.useRef(null);return n.a.useEffect((function(){var e={strings:t,typeSpeed:50,backSpeed:80,loop:!0,loopCount:1/0};return s.current=new z.a(a.current,e),function(){s.current.destroy()}})),Object(d.jsx)("span",{style:{whiteSpace:"pre"},ref:a})},J=function(e){var t=e.image,a=e.title,s=e.caption,n=e.github,r=e.livelink;return e.placeholderBoolean?Object(d.jsx)("div",{className:"flex flex-row items-center justify-between bg-transparent rounded-lg p-0 col-span-2 w-64 h-36"}):Object(d.jsxs)("div",{className:"flex flex-row items-center justify-between bg-white rounded-lg shadow-lg p-0 col-span-2 w-64 h-36",children:[Object(d.jsxs)("div",{className:"p-2 flex flex-col",children:[Object(d.jsx)("h2",{className:"font-bold text-md text-gray-800 leading-none mb-1",children:a}),Object(d.jsx)("p",{className:"text-black leading-none",children:s}),Object(d.jsxs)("div",{children:[n&&Object(d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(o.a,{className:"text-black mr-2 hover:text-purple-800",icon:i.faGithub})}),r&&Object(d.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(o.a,{className:"text-black hover:text-blue-800",icon:l.faGlobe})})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("img",{src:t,alt:"",className:" h-36 w- rounded-r-md"})})]})},M=function(){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("div",{className:"bg-gray-900 bg-opacity-50 p-3 rounded-md shadow m-1",children:[Object(d.jsxs)("div",{className:"pb-2 text-lg font-bold",children:[" ",Object(d.jsx)(D,{strings:["Quality design","Modern technologies","Always learning","Good practices"]})]}),Object(d.jsxs)("div",{className:"grid grid-cols-2 gap-1",children:[Object(d.jsx)(J,{image:"",title:"Chess",caption:"A two player chess game using html canvas",github:"asd",livelink:"asd"}),Object(d.jsx)(J,{image:"",title:"E-commerce mockup",caption:"An example e-commerce website frontend",github:"asd",livelink:"asd"}),Object(d.jsx)(J,{placeholderBoolean:"true"})]})]})})},H=function(e){var t=e.image,a=e.caption;return Object(d.jsxs)("div",{className:"flex flex-col items-center bg-white rounded-lg shadow-lg p-2",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("img",{src:t,alt:"",className:" h-24 w-24"})}),Object(d.jsx)("div",{className:"p-1",children:Object(d.jsx)("h2",{className:"font-bold text-md text-gray-800",children:a})})]})},V=function(e){var t=e.items,a=e.caption;return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("div",{className:"bg-gray-900 bg-opacity-50 p-3 rounded-md shadow m-1",children:[Object(d.jsx)("div",{className:"pb-2 text-lg font-bold",children:a}),Object(d.jsx)("div",{className:"grid grid-cols-2 gap-1",children:t.map((function(e){return Object(d.jsx)(H,{image:e.image,caption:e.caption},e.caption)}))})]})})},W=function(){var e=[{image:P,caption:"React"},{image:L,caption:"Git"},{image:A,caption:"Bootstrap"},{image:B,caption:"JavaScript"},{image:T,caption:"Tailwind CSS"}];return Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row items-center",children:[Object(d.jsx)(V,{items:e,caption:"My Tools"}),Object(d.jsx)(M,{})]})},U=a.p+"static/media/Tomislav_Zigo_Resume.482ce856.pdf",Z=a.p+"static/media/otok_rab.1e9d44eb.jpg",K=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"flex flex-row m-2 mt-24 rounded-lg text-white h-auto bg-gray-900 sm:h-56",children:[Object(d.jsxs)("div",{className:"p-4",children:[Object(d.jsx)("h2",{className:"text-lg font-bold",children:"About me"}),Object(d.jsx)("p",{className:"text-md w-auto sm:w-96 border-t-2 text-gray-300",children:"I started my web development journey 2 years ago and I have been gaining knowledge about the frontend ecosystem ever since."}),Object(d.jsx)("p",{className:"text-md w-auto sm:w-96 mt-3 text-gray-300",children:"My goal is to build modern, friendly and innovative websites. Good practice and constant improvement are my top priorities."})]}),Object(d.jsx)("img",{src:Z,alt:"me on island of Rab in Croata",className:"h-full w-auto rounded-r-lg hidden sm:flex"})]})}}]),a}(n.a.Component),Q=K,X=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null),r=Object(s.useRef)(null),c=[{icon:"faGithub",link:"https://github.com/tomislav-zigo",label:"GitHub"},{icon:"faLinkedin",link:"https://www.linkedin.com/in/tomislav-zigo-5612a4210/",label:"LinkedIn"},{icon:"faFile",link:U,label:"R\xe9sum\xe9"}],i=[{name:"Home",current:!1,scrollRef:e},{name:"Projects",current:!1,scrollRef:t},{name:"About",current:!1,scrollRef:a},{name:"Contact",current:!1,scrollRef:r}];return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)(G,{navigation:i}),Object(d.jsx)("div",{className:"flex flex-col items-center pt-48 h-screen text-white width-auto",ref:e,children:Object(d.jsx)(j,{scrollRef:t})}),Object(d.jsx)("div",{className:"flex flex-col items-center pt-8 h-full pb-0 sm:h-screen sm:pb-24 text-white width-auto relative",ref:t,children:Object(d.jsx)(W,{})}),Object(d.jsx)("div",{className:"flex flex-col items-center pt-8 h-full pb-0 sm:h-screen sm:pb-24 text-white width-auto relative overflow-x-hidden",ref:a,children:Object(d.jsx)(Q,{})}),Object(d.jsx)("div",{className:"flex flex-col items-center pt-8 h-full pb-0 sm:h-screen sm:pb-24 text-white width-auto relative",ref:r,children:Object(d.jsx)(R,{})}),Object(d.jsx)(m,{icons:c})]})},Y=a(6);var $=function(){return document.body.style="background: rgb(31, 41, 55);padding:none ; height:100%;",document.querySelector("html").style="background: rgb(31, 41, 55);padding:none ; height:100%;",Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)(Y.c,{children:[Object(d.jsx)(Y.a,{path:"/",component:X}),Object(d.jsx)(Y.a,{path:"/about",component:X}),Object(d.jsx)(Y.a,{path:"/projects",component:X}),Object(d.jsx)(Y.a,{path:"/contact",component:X})]})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(b.a,{children:Object(d.jsx)($,{})}),document.getElementById("root")),ee()}},[[58,1,2]]]);
//# sourceMappingURL=main.23b6ae47.chunk.js.map