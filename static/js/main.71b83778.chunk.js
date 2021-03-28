(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2fbz1",ImageGalleryItem:"ImageGallery_ImageGalleryItem__1MaUS"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__v0lw9",Modal:"Modal_Modal__h2_O6"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1wZZR",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__fzJ9V"}},26:function(e,t,a){e.exports={Button:"Button_Button__1-Nug"}},32:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(9),c=a.n(o),s=(a(32),a(11)),l=a.n(s),i=a(15),h=a(24),u=a(4),m=a(5),d=a(7),g=a(6),p=a(25),b=a.n(p),j=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.page,n=void 0===r?1:r;return b.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=").concat("19212472-91085f93384c895bec44df301","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})).catch(console.error())},f=a(8),y=a.n(f),O=a(0),v=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;(0,e.props.onSearch)(a)},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(O.jsx)("header",{className:y.a.Searchbar,children:Object(O.jsxs)("form",{className:y.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(O.jsx)("button",{type:"submit",className:y.a.SearchFormButton,children:Object(O.jsx)("span",{className:y.a.SearchFormButtonLabel,children:"Search"})}),Object(O.jsx)("input",{className:y.a.SearchFormInput,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange}),Object(O.jsx)("p",{children:this.props.searchQuery})]})})}}]),a}(r.Component),S=a(12),_=a.n(S),I=a(13),w=a.n(I),x=document.querySelector("#modal-root"),k=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(o.createPortal)(Object(O.jsx)("div",{className:w.a.Overlay,onClick:this.handleOverlayClick,children:Object(O.jsx)("div",{className:w.a.Modal,children:Object(O.jsx)("img",{src:t,alt:a})})}),x)}}]),a}(r.Component),C=a(14),M=a.n(C),G=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.image,t=this.state.showModal;return Object(O.jsxs)("li",{className:M.a.ImageGalleryItem,children:[Object(O.jsx)("img",{onClick:this.toggleModal,src:e.webformatURL,alt:e.tags,className:M.a.ImageGalleryItemImage}),t&&Object(O.jsx)(k,{onClose:this.toggleModal,src:e.largeImageURL,alt:e.tags})]})}}]),a}(r.Component);var N=function(e){var t=e.images;return Object(O.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){return Object(O.jsx)(G,{className:_.a.ImageGalleryItem,image:e},e.id)}))})},F=a(26),Q=a.n(F);function B(e){var t=e.onHandleClick;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(O.jsx)("button",{type:"button",className:Q.a.Button,onClick:t,children:"Load More..."})}var L=a(27),E=a.n(L),D=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(O.jsx)(E.a,{type:"Circles",color:"#3f51b5",height:200,width:200})}}]),a}(r.Component),A=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:null,page:1,isLoading:!1,images:[],error:!1,status:"idle",showModal:!1},e.onSearch=function(t){e.setState({searchQuery:t,page:1,images:[],error:!1,status:"pending"})},e.fetchImages=Object(h.a)(l.a.mark((function t(){var a,r,n,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.searchQuery,n=a.page,e.setState({isLoading:!0}),t.prev=2,t.next=5,j({searchQuery:r,page:n});case 5:o=t.sent,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(o)),status:"resolved"}})),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(2),e.setState({status:"rejected"}),t.abrupt("return",Promise.reject(new Error("Something wrong ... refresh search")));case 13:case"end":return t.stop()}}),t,null,[[2,9]])}))),e.loadMore=function(){e.setState((function(e){return{page:e.page+1}})),console.log(e.toggleModal)},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&(this.setState({status:"pending"}),this.fetchImages()),0===this.state.images.length&&t.images.length!==this.state.images&&new Error("".concat(this.state.searchQuery," not found, please enter a new search")),t.page!==this.state.page&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,r=e.error,n=e.showModal;return this.onSearch,"idle"===a?Object(O.jsx)(v,{onSearch:this.onSearch}):"pending"===a?Object(O.jsx)(D,{}):("rejected"===a&&r.message,"resolved"===a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{onSearch:this.onSearch}),Object(O.jsx)(N,{images:t,onClose:n}),Object(O.jsx)(B,{onHandleClick:this.loadMore})]}):void 0)}}]),a}(r.Component);c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__GrPtC",SearchForm:"Searchbar_SearchForm__1lo2y",SearchFormButton:"Searchbar_SearchFormButton__3kZhE",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3A9OG",SearchFormInput:"Searchbar_SearchFormInput__3JfNX"}}},[[73,1,2]]]);
//# sourceMappingURL=main.71b83778.chunk.js.map