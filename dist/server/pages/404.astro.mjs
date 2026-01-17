import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
export { renderers } from '../renderers.mjs';

const bg = new Proxy({"src":"/_astro/bg_404.CD52rWbJ.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/assets/bg_404.jpg";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - P\xE1gina no encontrada", "subtitle": "\xA1Ooops!", "bgImage": bg.src }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-center text-lg">
Tal vez quieras volver al ${""} <a href="/" class="text-coffee-600 font-bold">Inicio</a> </p> ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/404.astro", void 0);

const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
