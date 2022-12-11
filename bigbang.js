//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* @import url(); */
   
    div {
      /*border: 1px solid red; */
      padding: 3rem;
      margin: 3rem;
    }
    :host{
      /* for the shadow root */
      background-color: lavender;
      display: block;
    }
    :host(big-bang){
      background-color: cornflowerblue;
    }
    :host-context(main){
      background-color: gold;
    }
    ::slotted(h2){
      font-size: 4rem;
      color: black !important;
    }
    slot{
      /* No work! */
    }
    ::part(){
      /* does not work here */
    }
    h1{
      color: orangered;
    }
  </style>
  <div>
    <h1 part="topper">Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`;

class BigBang extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('big-bang', BigBang);
// <big-bang>
