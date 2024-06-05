import { defineCustomElement } from "vue";
import Button from "./button/index.ce.vue";

// register
customElements.define("sl-button", defineCustomElement(Button));
