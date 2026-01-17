import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
import { d as ProcessPageSchema } from '../chunks/index_Dh-bHIAb.mjs';
import { a as inferRemoteSize, $ as $$Picture } from '../chunks/_astro_assets_wBPa_WIb.mjs';
export { renderers } from '../renderers.mjs';

const $$Proceso = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/pages?slug=proceso`;
  const response = await fetch(url);
  const json = await response.json();
  const data = ProcessPageSchema.parse(json[0]);
  const processKeys = Array.from({ length: 5 }, (_, i) => `process_${i + 1}`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proceso", "subtitle": data.acf.subtitle, "bgImage": data.featured_images.full.url }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-xl space-y-3 mt-10 lg:mt-0">${unescapeHTML(data.content.rendered)}</div> <div class="mt-10 space-y-10"> ${processKeys.map(async (key, i) => {
    const { title, description, image } = data.acf[key];
    const { width, height } = await inferRemoteSize(image);
    return renderTemplate`<section class="flex flex-col lg:flex-row gap-10 lg:items-center"> <div${addAttribute(`w-full lg:w-1/2 ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`, "class")}> ${renderComponent($$result2, "Picture", $$Picture, { "src": image, "alt": `Imagen de ${data.title.rendered}`, "width": width, "height": height })} </div> <div${addAttribute(`w-full lg:w-1/2 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`, "class")}> <h3 class="text-coffee-900 font-black text-4xl pb-10 uppercase"> ${title} </h3> <p>${description}</p> </div> </section>`;
  })} </div> ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/proceso.astro", void 0);
const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/proceso.astro";
const $$url = "/proceso";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proceso,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
