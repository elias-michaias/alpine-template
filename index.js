import './index.css'
import { marked } from 'marked'
import PineconeRouter from 'pinecone-router'
import ajax from '@imacrayon/alpine-ajax'
import AutoAnimate from '@marcreichel/alpine-auto-animate'
import alpineMotion from "@braedencrankd/alpine-motion";
import jsz from 'alpinejs-jsz'
import Toolkit from '@alpine-collective/toolkit'
import Alpine from 'alpinejs'

//Alpine Component Support Via VimeshUI
$vui.config = { namespace: 'y' }
$vui.config.importMap = { "*": '/components/${component}.html'}


// CUSTOM DIRECTIVES <<<

//x-markdown (Render Markdown As InnerHTML)
document.addEventListener("alpine:initializing", () => {
  Alpine.directive(
    "markdown",
    (el, { expression }, { effect, evaluateLater }) => {
      let getHTML = evaluateLater(expression);

      effect(() => {
        getHTML((input) => {
          el.innerHTML = marked(input, { sanitize: true });
        });
      });
    }
  );
});

// CUSTOM DIRECTIVES >>>

//Initialize Alpine (Must Be Final Code)
Alpine.plugin(PineconeRouter)
Alpine.plugin(ajax)
Alpine.plugin(AutoAnimate)
Alpine.plugin(alpineMotion)
Alpine.plugin(Toolkit)
Alpine.plugin(jsz)
window.Alpine = Alpine
Alpine.start()
