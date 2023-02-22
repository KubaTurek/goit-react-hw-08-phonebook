"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[890],{7890:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(9439),s=n(9434),c=n(5167),i=n(2791),r=n(1169),l=function(e){return e.contacts.items},o=function(e){var t=l(e),n=function(e){return e.filter.filter}(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},d={contacts:"ContactList_contacts__jDmyV",delete:"ContactList_delete__dvPUy",list:"ContactList_list__csErn",name:"ContactList_name__UCkFW",number:"ContactList_number__2af8f",li:"ContactList_li__dzNT+",icons:"ContactList_icons__6G8MG",edit:"ContactList_edit__jpzPE",overlay:"ContactList_overlay__8HnrZ",modal:"ContactList_modal__zxTir",close__button:"ContactList_close__button__XCutd"},u=n(3329),m=function(){var e=(0,s.I0)(),t=(0,s.v9)(o),n=(0,i.useState)(!1),l=(0,a.Z)(n,2),m=l[0],A=l[1],h=function(){return A(!1)};(0,i.useEffect)((function(){e((0,c.yF)())}),[e]);return(0,u.jsxs)(u.Fragment,{children:[m&&(0,u.jsx)("div",{className:d.overlay,"data-name":"overlay",visible:m,onClick:function(e){"overlay"===e.target.dataset.name&&h()},children:(0,u.jsxs)("div",{className:d.modal,visible:m,children:[(0,u.jsx)("p",{className:d.label,children:(0,u.jsx)("b",{children:"Edit name"})}),(0,u.jsx)("input",{type:"text",name:"name",className:d.input}),(0,u.jsx)("p",{className:d.label,children:(0,u.jsx)("b",{children:"Edit number"})}),(0,u.jsx)("input",{type:"tel",name:"number",className:d.input}),(0,u.jsx)("button",{type:"button",name:"close-button",className:d.close__button,onClick:function(){return h()},children:"Save"})]})}),(0,u.jsx)("div",{className:d.contacts,children:(0,u.jsx)("ul",{className:d.list,children:t&&t.map((function(t){return(0,u.jsxs)("li",{className:d.li,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:d.name,children:t.name}),(0,u.jsx)("span",{className:d.number,children:t.number})]}),(0,u.jsxs)("div",{className:d.icons,children:[(0,u.jsx)("img",{src:r,className:d.edit,alt:"edit",width:"16px",onClick:function(){return A(!0)}}),(0,u.jsx)("button",{type:"button",className:d.delete,onClick:function(){return n=t.id,void e((0,c.GK)(n));var n},children:"Delete"})]})]},t.id)}))})})]})},A="ContactForm_form__dhl+T",h="ContactForm_button__eSwX9",_="ContactForm_input__Bl93P",j="ContactForm_label__-cVXI",p=function(){var e=(0,s.v9)(l),t=(0,s.I0)();return(0,u.jsxs)("form",{className:A,onSubmit:function(n){n.preventDefault();var a={name:n.target.name.value,number:n.target.number.value};if(e.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()})))return n.target.reset(),alert("".concat(a.name,' "is already in contacts"'));t((0,c.uK)(a)),n.target.reset()},children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{className:j,children:(0,u.jsx)("b",{children:"Name"})}),(0,u.jsx)("input",{type:"text",name:"name",id:"name",className:_,placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{className:j,children:(0,u.jsx)("b",{children:"Number"})}),(0,u.jsx)("input",{type:"tel",name:"number",id:"number",className:_,placeholder:"phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",className:h,children:"Add Contact"})]})},f={tittle:"Section_tittle__ZAMMr",section:"Section_section__Z2PLw"},b=function(e){var t=e.title,n=e.children;return(0,u.jsxs)("div",{className:f.section,children:[(0,u.jsx)("h1",{className:f.title,children:t}),n]})},x=n(3767),C="Filter_filter__vxThR",N="Filter_input__N7T3z",v=function(){var e=(0,s.I0)();return(0,u.jsx)("div",{className:C,children:(0,u.jsxs)("label",{children:["Search contacts by name",(0,u.jsx)("input",{className:N,type:"search",placeholder:"search contact",onChange:function(t){return e((0,x.Tv)(t.target.value))}})]})})},g="contacts_contacts__fZIeZ",w=n(4545),y=function(){return(0,s.v9)(w.Qb)?(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)(b,{title:"Phonebook",children:(0,u.jsx)(p,{})}),(0,u.jsxs)(b,{title:"Contacts",children:[(0,u.jsx)(v,{}),(0,u.jsx)(m,{})]})]}):(0,u.jsx)("p",{children:"You need to login first"})}},1169:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJklEQVR4nO2bOWhUQRjHf5F4xHu1UgsLgxER8SAYRDzAq7HwCII+UYQUgtpJYieKILYKHhBQsRAvLK1EcdfbqKWFhReI95Uo0SQyMAPjOG/f293g7sybP3zVfvMxv7nezDez4LYagNXATqAd2A40A3V4rsnAcaAbGLDYK2A3MAwPtRL4FANu2mNgKh4pAn4bkF3AUeAQcAZ4bfz+ApiEh/BPgUUWv3pgB9Cj+RaAIXgEfx/IJZQRjfNTK7MZT+AfpoBX6tDK3cMD+EfAhBLKj9amQr9ra0FkwP8C5pUR54YWYykOr/YDsjcPyJ5Nq4ta+fU4CN9jaYhnwEwfR0BkwN+VC95y4KrRCJ+BVQnxxEj54coaEFngxxs+Avi55tMLLCsSc68rX4HIAj8uxjdnjIb3wDSL30JjH7AJR+DvFIFXEoecK1qZJ3IHqNRsnBfytboTjMqAVxop9wWqrDgS2+Bf1urcjyqAV5ot1wFR/p3lpCgORk04AH+7DHilzpijcCbgkbtDp+HHVhhzsfzG1zz8RrmfVxW9NQjw4sj7VYv5poQd4n9VgCf0PJkf9oUsz/lCgM9wz4+pMGaAJ/Q8YdjjyJzPZ3nO5wN8ZQo9Txj2hDmPIwvezSwteBsst7RrBiGN9d2FNBby82bLuopRMBfP4YXexjSAupvrKOFdnnPwOa2yH2SPn9QuI5SdNq6mvIAXWmBcWCo1yZS23gidRUaCk/Aqj68qfZa/VW+5ldmFR/BC+7WK7+NfiR4/pfmIxwiNvsALndMqL0ZD3FV1l+Z32Rd45Js8BdBC8fs5dT3VB7T5AF8HfNMgJib4X3LtljbNk3QF8THRG7b4BI98UmZ+AsW+YD7QKhfF88AD4IsFvmb39mnVpsF0x7zXizOne15olMzppwXul+/yrwHHYl5tOaOhwPUEyBPAHmAtMAsYgUdaYUC3+whZTFPkCbBXrgOZVEOK735QUFCQN5ous7+tKWxOingzSohXLVuiMlgtRs4/ja1LyPf3lRivWnZQVHhrGQXFPzHitK0GwNLaBVHh4cBhebJLY0cSHjeXGq9aJlJ5jX8AfZep+cyBsN4AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=890.203e16db.chunk.js.map