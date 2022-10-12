(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(9),i=s.n(c),n=s(4),r=s(0);var o=function(){return Object(r.jsxs)("div",{className:"media-object",children:[Object(r.jsx)("div",{className:"media-object-section",children:Object(r.jsx)("div",{className:"thumbnail",children:Object(r.jsx)("img",{className:"profilePic",src:"assets/images/profilePic.jpg"})})}),Object(r.jsxs)("div",{className:"media-object-section",children:[Object(r.jsx)("h4",{id:"about-me",children:"About Me"}),Object(r.jsx)("p",{className:"aboutMe-txt",children:" I am a recent full stack bootcamp graduate from the University of Pennsylvania. I am heavily engaged in learning HTML, CSS, and JavaScript. I am currently using my interest in web development to help me through a career transition. Computer coding has been an interest of mine for many years but only now have I chosen to pursue it. Please take a look at some of the projects I have worked on!"})]})]})},l=s(5);var d=function(e){return Object(r.jsx)("div",{className:"cell",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"image-effect",children:Object(r.jsx)("img",{src:e.project.image})}),Object(r.jsx)("div",{className:"text-effect",children:Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("a",{href:e.project.deployedAt,children:Object(r.jsx)("h4",{className:"card-title",children:e.project.title})}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:e.project.repo,children:Object(r.jsx)(l.a,{className:"card-icon",icon:"fab fa-github",size:"3x"})})}),Object(r.jsx)("div",{className:"description",children:e.project.description})]})})]})})},j=[{title:"Electric Wipeout's Music Shop",deployedAt:"https://mortal-instruments-music-shop.herokuapp.com/",repo:"https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments",image:"assets/images/music-shop.jpeg",description:"This full stack web application allows users to search music products, add them to cart, and make purchases. This site uses a MERN stack along with Handlebars"},{title:"Weather Forecast",deployedAt:"https://adolfo-g.github.io/Weather-Forecast/",repo:"https://github.com/Adolfo-G/Weather-Forecast",image:"assets/images/weather-preview.jpeg",description:"Using a weather based API users can check weather conditions for their city of interest. A five day forecast is also provided with the ability to store recent search history."},{title:"Countdown Games!",deployedAt:"https://adolfo-g.github.io/Countdown-Games/",repo:"https://github.com/Adolfo-G/Countdown-Games",image:"assets/images/TriviaHomePage.png",description:"This application allows users to play a trivia themed game with a race against the clock. Users can see their high score and retry to beat their personal best score. This site uses Foundation, OpenTriviaDB API"},{title:"PWA Text Editor",deployedAt:"https://pwa-text-editor2468.herokuapp.com/",repo:"https://github.com/Adolfo-G/PWA-Text-Editor",image:"assets/images/pwa-textEditor.jpeg",description:"The goal for this project was to impliment a PWA strategy. This application functions as a text editor with word high lighting. IndexedDB is implemented in this application."},{title:"My Blog",deployedAt:"https://my-blog-1029.herokuapp.com/",repo:"https://github.com/Adolfo-G/my-blog",image:"assets/images/blog.jpeg",description:"This application is a blog based page which allows for account creation and posting. Posts can be read and commented on by other users. This site was made using Bootstrap, Express.js, and sequelize."},{title:"Home Bazaar",deployedAt:"https://home-bazaar.herokuapp.com/",repo:"https://github.com/Adolfo-G/Home-Bazaar-eCommerce",image:"assets/images/HB-Homepage.png",description:"This project uses a MERN stack approach to building a eCommerce web site. This project was made with Apollo/GraphQL."}];var h=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"grid-container",children:[Object(r.jsx)("h4",{id:"works",children:"Works"}),Object(r.jsx)("div",{className:"grid-x grid-margin-x small-up-1 medium-up-2",children:j.map((function(e){return Object(r.jsx)(d,{project:e})}))})]})})};var m=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),o=Object(n.a)(i,2),l=o[0],d=o[1],j=Object(a.useState)(""),h=Object(n.a)(j,2),m=h[0],b=h[1],u=Object(a.useState)(""),p=Object(n.a)(u,2),x=p[0],O=p[1],g=function(e){var t=e.target,s=t.name,a=t.value;"email"===s?c(a):"userName"===s?d(a):"message"===s&&b(a)};return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("h2",{children:"Contact Me"}),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("input",{value:l,name:"userName",onChange:g,type:"text",placeholder:"username"}),Object(r.jsx)("input",{value:s,name:"email",onChange:g,type:"email",placeholder:"email"}),Object(r.jsx)("textarea",{value:m,name:"message",onChange:g,type:"text",placeholder:"message",cols:30,rows:10}),Object(r.jsx)("button",{className:"form-btn",type:"button",onClick:function(e){e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(s)&&l&&m?(d(""),c(""),b(""),O(""),alert("Thank you ".concat(l," for reaching out!"))):O("Email or username is invalid or message area is empty")},children:"Submit"})]}),x&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:x})})]})})};var b=function(e){var t=e.currentPage,s=e.handlePageChange;return Object(r.jsx)("div",{className:"top-bar-right nav",children:Object(r.jsxs)("ul",{className:"menu nav",children:[Object(r.jsx)("li",{className:"nav",children:Object(r.jsx)("a",{onClick:function(){return s("About")},href:"#About",className:"About"===t?"nav-link active":"nav-link",children:"About Me"})}),Object(r.jsx)("li",{className:"nav",children:Object(r.jsx)("a",{onClick:function(){return s("Work")},href:"#Works",className:"Work"===t?"nav-link active":"nav-link",children:"Works"})}),Object(r.jsx)("li",{className:"nav",children:Object(r.jsx)("a",{onClick:function(){return s("Contact")},href:"#Contact",className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(r.jsx)("li",{className:"nav",children:Object(r.jsx)("a",{onClick:function(){return s("Resume")},href:"#Resume",className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})})};var u=function(){return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("h4",{id:"contact",children:"Contacts"}),Object(r.jsxs)("div",{className:"icon-container",children:[Object(r.jsx)("a",{className:"contact-text",href:"mailto: adolfog5545@gmail.com",children:Object(r.jsx)("div",{className:"icons",children:Object(r.jsx)(l.a,{icon:"envelope",size:"5x"})})}),Object(r.jsx)("a",{className:"contact-text",href:"https://www.linkedin.com/in/adolfo-gonzalez-566859222/",children:Object(r.jsx)("div",{className:"icons",children:Object(r.jsx)(l.a,{icon:"fab fa-linkedin",size:"5x"})})}),Object(r.jsx)("a",{className:"contact-text",href:"https://github.com/Adolfo-G",children:Object(r.jsx)("div",{className:"icons",children:Object(r.jsx)(l.a,{icon:"fab fa-github",size:"5x"})})})]})]})};var p=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"resume-bullets",children:[Object(r.jsxs)("p",{children:["Download My ",Object(r.jsx)("a",{href:"assets/docs/resume.pdf",download:"Resume",children:"Resume"})]}),Object(r.jsx)("h4",{children:"Front-End Proficiencies"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"HTML"}),Object(r.jsx)("li",{children:"CSS"}),Object(r.jsx)("li",{children:"JavaScript"}),Object(r.jsx)("li",{children:"responsive design"}),Object(r.jsx)("li",{children:"React"}),Object(r.jsx)("li",{children:"Bootstrap"}),Object(r.jsx)("li",{children:"Foundation"})]}),Object(r.jsx)("h4",{children:"Back-End Proficiencies"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"API's"}),Object(r.jsx)("li",{children:"Node"}),Object(r.jsx)("li",{children:"Express"}),Object(r.jsx)("li",{children:"MySQL, Sequelize"}),Object(r.jsx)("li",{children:"MongoDB, Mongoose"}),Object(r.jsx)("li",{children:"REST"}),Object(r.jsx)("li",{children:"GraphQL"})]})]})})};var x=function(e){return Object(r.jsxs)("header",{className:"top-bar nav",children:[Object(r.jsx)("div",{className:"top-bar-left nav",children:Object(r.jsx)("ul",{className:"menu nav",children:Object(r.jsx)("li",{className:"menu-text my-name nav",children:"Adolfo Gonzalez"})})}),Object(r.jsx)(b,{currentPage:e.currentPage,handlePageChange:e.handlePageChange})]})};function O(){var e=Object(a.useState)("About"),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"nav-and-body",children:[Object(r.jsx)(x,{currentPage:s,handlePageChange:function(e){return c(e)}}),Object(r.jsx)("div",{className:"body",children:"About"===s?Object(r.jsx)(o,{}):"Work"===s?Object(r.jsx)(h,{}):"Contact"===s?Object(r.jsx)(m,{}):"Resume"===s?Object(r.jsx)(p,{}):void 0})]}),Object(r.jsx)(u,{})]})}s(17);var g=function(){return Object(r.jsx)(O,{})},v=s(3),f=s(6),N=s(8);v.b.add(f.c,f.b,f.a,N.a,N.b),i.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aa5588a8.chunk.js.map