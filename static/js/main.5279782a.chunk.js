(this.webpackJsonptryunfo=this.webpackJsonptryunfo||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,r){},function(t,e,r){},,function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),c=r(7),i=r.n(c),d=(r(14),r(9)),s=r(8),o=r(2),u=r(3),l=r(5),j=r(4),h=(r(15),r(0)),b=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cardName,r=t.cardDescription,a=t.cardAttr1,n=t.cardAttr2,c=t.cardAttr3,i=t.cardImage,d=t.cardRare,s=t.cardTrunfo;return Object(h.jsx)("div",{className:"card-container",children:Object(h.jsxs)("div",{className:"card-border",children:[Object(h.jsx)("div",{className:"cardName","data-testid":"name-card",children:Object(h.jsx)("h2",{children:e})}),Object(h.jsx)("img",{src:i,alt:e,"data-testid":"image-card"}),Object(h.jsx)("div",{className:"cardDescription","data-testid":"description-card",children:r}),Object(h.jsxs)("section",{className:"attr-section-container",children:[Object(h.jsxs)("div",{className:"attr-container",children:[Object(h.jsx)("p",{children:"atrib. 1"}),Object(h.jsx)("p",{"data-testid":"attr1-card",children:a})]}),Object(h.jsxs)("div",{className:"attr-container",children:[Object(h.jsx)("p",{children:"atrib. 2"}),Object(h.jsx)("p",{"data-testid":"attr2-card",children:n})]}),Object(h.jsxs)("div",{className:"attr-container",children:[Object(h.jsx)("p",{children:"atrib. 3"}),Object(h.jsx)("p",{"data-testid":"attr3-card",children:c})]}),Object(h.jsx)("div",{className:"cardRare","data-testid":"rare-card",children:d})]}),Object(h.jsx)("div",{className:"trunfo-card",children:s?Object(h.jsx)("h2",{"data-testid":"trunfo-card",children:"Super Trunfo"}):Object(h.jsx)("p",{children:" "})})]})})}}]),r}(n.a.Component),p=b,f=(r(17),function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cardName,r=t.cardDescription,a=t.cardAttr1,n=t.cardAttr2,c=t.cardAttr3,i=t.cardImage,d=t.cardRare,s=t.cardTrunfo,o=t.onInputChange,u=t.isSaveButtonDisabled,l=t.onSaveButtonClick,j=t.hasTrunfo;return Object(h.jsxs)("form",{children:[Object(h.jsxs)("label",{htmlFor:"cardName",children:["Nome da carta",Object(h.jsx)("input",{"data-testid":"name-input",id:"cardName",name:"cardName",onChange:o,type:"text",value:e})]}),Object(h.jsxs)("label",{htmlFor:"description-input",children:["descri\xe7\xe3o da carta",Object(h.jsx)("textarea",{id:"description-input",type:"textarea","data-testid":"description-input",name:"cardDescription",onChange:o,value:r})]}),Object(h.jsxs)("label",{htmlFor:"attr1-input",children:["Inserir o primeiro atributo da carta",Object(h.jsx)("input",{id:"attr1-input",type:"number","data-testid":"attr1-input",name:"cardAttr1",onChange:o,value:a})]}),Object(h.jsxs)("label",{htmlFor:"attr2-input",children:["Inserir o segundo atributo da carta",Object(h.jsx)("input",{id:"attr2-input",type:"number","data-testid":"attr2-input",name:"cardAttr2",onChange:o,value:n})]}),Object(h.jsxs)("label",{htmlFor:"attr3-input",children:["Inserir o terceiro atributo da carta",Object(h.jsx)("input",{id:"attr3-input",type:"number","data-testid":"attr3-input",name:"cardAttr3",onChange:o,value:c})]}),Object(h.jsxs)("label",{htmlFor:"image-input",children:["Inserir o caminho para imagem da carta",Object(h.jsx)("input",{id:"image-input",type:"text","data-testid":"image-input",name:"cardImage",onChange:o,value:i})]}),Object(h.jsxs)("label",{htmlFor:"rare-input",children:["Inserir raridade da carta",Object(h.jsxs)("select",{id:"rare-input",type:"text","data-testid":"rare-input",name:"cardRare",onChange:o,value:d,children:[Object(h.jsx)("option",{children:"normal"}),Object(h.jsx)("option",{children:"raro"}),Object(h.jsx)("option",{children:"muito raro"})]})]}),Object(h.jsxs)("label",{id:"trunfo-input-container",htmlFor:"trunfo-input",children:["Selecionar se a carta for o Super Trunfo",Object(h.jsx)("div",{children:j?Object(h.jsx)("div",{children:"Voc\xea j\xe1 tem um Super Trunfo em seu baralho"}):Object(h.jsx)("input",{className:"trunfo-input",type:"checkbox","data-testid":"trunfo-input",name:"cardTrunfo",onChange:o,checked:s})})]}),Object(h.jsx)("div",{className:"button-container",children:Object(h.jsx)("button",{id:"save-button",type:"submit","data-testid":"save-button",disabled:u,onClick:l,children:"Salvar"})})]})}}]),r}(n.a.Component)),m=f,O=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.namefilter,r=t.onInputChange,a=t.filterButton;return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text","data-testid":"name-filter",name:"namefilter",placeholder:"Buscar pelo nome",onChange:r,value:e}),Object(h.jsx)("button",{type:"button",onClick:a,children:"Buscar"})]})}}]),r}(n.a.Component),x=O,v=(r(18),function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cards,r=t.deleteCard;return e.map((function(t){return Object(h.jsxs)("div",{className:"card-removeButton-container",children:[Object(h.jsx)(p,{cardName:t.cardName,cardDescription:t.cardDescription,cardAttr1:t.cardAttr1,cardAttr2:t.cardAttr2,cardAttr3:t.cardAttr3,cardImage:t.cardImage,cardRare:t.cardRare,cardTrunfo:t.cardTrunfo}),Object(h.jsx)("button",{id:t.cardImage,type:"reset",onClick:r,"data-testid":"delete-button",children:"Excluir"})]},t.cardImage)}))}}]),r}(n.a.Component)),g=v,C=(r(19),function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.rarefilter,r=t.onInputChange;return Object(h.jsx)("div",{children:Object(h.jsxs)("select",{type:"checkbox","data-testid":"rare-filter",name:"rarefilter",onChange:r,value:e,children:[Object(h.jsx)("option",{children:"Raridade"}),Object(h.jsx)("option",{children:"todas"}),Object(h.jsx)("option",{children:"normal"}),Object(h.jsx)("option",{children:"raro"}),Object(h.jsx)("option",{children:"muito raro"})]})})}}]),r}(n.a.Component)),A=C,N=(r(20),function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.trunfofilter,r=t.onInputChange;return Object(h.jsxs)("label",{className:"label-container",htmlFor:"trunfo-imput","data-testid":"trunfo-filter",children:["Super Trunfo",Object(h.jsx)("input",{type:"checkbox",id:"trunfo-imput",name:"trunfofilter",onChange:r,value:e})]})}}]),r}(n.a.Component)),I=N,y=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){var t;return Object(o.a)(this,r),(t=e.call(this)).filledData=function(){var e=t.state,r=e.cardName,a=e.cardDescription,n=e.cardAttr1,c=e.cardAttr2,i=e.cardAttr3,d=e.cardImage,s=""===r||""===a||""===n||""===c||""===i||""===d,o=parseInt(n,10),u=parseInt(c,10),l=parseInt(i,10);return!(!s&&o>=0&&o<=90&&u>=0&&u<=90&&l>=0&&l<=90&&o+u+l<=210)},t.onInputChange=function(e){var r=e.target,a=r.name,n="checkbox"===r.type?r.checked:r.value;t.setState(Object(s.a)({},a,n),(function(){return t.filterButton()}))},t.hasTrunfoVerify=function(){var e=t.state.cards.some((function(t){return t.cardTrunfo}));t.setState((function(){return{hasTrunfo:e}}))},t.saveNewCard=function(e){e.preventDefault();var r=t.state,a=r.cardName,n=r.cardDescription,c=r.cardAttr1,i=r.cardAttr2,s=r.cardAttr3,o=r.cardImage,u=r.cardRare,l=r.cardTrunfo;t.setState((function(t){return{cards:[].concat(Object(d.a)(t.cards),[{cardName:a,cardDescription:n,cardAttr1:c,cardAttr2:i,cardAttr3:s,cardImage:o,cardRare:u,cardTrunfo:l}]),cardName:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardImage:"",cardRare:"normal",cardTrunfo:!1}}),(function(){return t.hasTrunfoVerify()}))},t.deleteCard=function(e){var r=e.target,a=t.state.cards.filter((function(t){return t.cardImage!==r.id}));t.setState({cards:a},(function(){return t.hasTrunfoVerify()}))},t.showFiltered=function(e){t.setState({filteredCards:e})},t.filterButton=function(){var e=[],r=[],a=[],n=t.state,c=n.cards,i=n.namefilter,d=n.rarefilter,s=n.trunfofilter;""!==d&&"Raridade"!==d&&"todas"!==d?(e=c.filter((function(t){return t.cardRare===d})),t.setState({hasFilered:!0})):e=c,""!==i?(r=e.filter((function(t){return t.cardName.includes(i)})),t.setState({hasFilered:!0})):r=e,!0===s?(a=r.filter((function(t){return t.cardTrunfo})),t.setState({hasFilered:!0})):a=r,t.setState({filteredCards:a})},t.state={cardName:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardImage:"",cardRare:"normal",cardTrunfo:!1,hasTrunfo:!1,cards:[],namefilter:"",filteredCards:[],rarefilter:"",trunfofilter:!1,hasFilered:!1},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.state,e=t.cardName,r=t.cardDescription,a=t.cardAttr1,n=t.cardAttr2,c=t.cardAttr3,i=t.cardImage,d=t.cardRare,s=t.cardTrunfo,o=t.hasTrunfo,u=t.cards,l=t.namefilter,j=t.filteredCards,b=t.rarefilter,f=t.trunfofilter,O=t.hasFilered,v=this.filledData(),C=this.saveNewCard;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"Tryunfo"}),Object(h.jsxs)("section",{className:"first-section-container",children:[Object(h.jsx)(m,{cardName:e,cardDescription:r,cardAttr1:a,cardAttr2:n,cardAttr3:c,cardImage:i,cardRare:d,cardTrunfo:s,hasTrunfo:o,isSaveButtonDisabled:v,onInputChange:this.onInputChange,onSaveButtonClick:C}),Object(h.jsx)(p,{cardName:e,cardDescription:r,cardAttr1:a,cardAttr2:n,cardAttr3:c,cardImage:i,cardRare:d,cardTrunfo:s,hasTrunfo:o})]}),Object(h.jsxs)("section",{className:"second-section-container",children:[Object(h.jsxs)("div",{className:"filters-container",children:[Object(h.jsx)("h2",{children:"Todas as Cartas"}),Object(h.jsx)("h3",{children:"Filtros de Busca"}),Object(h.jsx)(x,{namefilter:l,onInputChange:this.onInputChange,filterButton:this.filterButton}),Object(h.jsx)(A,{rarefilter:b,onInputChange:this.onInputChange}),Object(h.jsx)(I,{trunfofilter:f,onInputChange:this.onInputChange})]}),Object(h.jsx)("div",{className:"showcards",children:Object(h.jsx)(g,{cards:O?j:u,deleteCard:this.deleteCard})})]})]})}}]),r}(n.a.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.5279782a.chunk.js.map