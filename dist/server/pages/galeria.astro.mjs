import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$GalleryGrid } from '../chunks/GalleryGrid_BLxupgu9.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
import { G as GalleryPageSchema } from '../chunks/index_Dh-bHIAb.mjs';
export { renderers } from '../renderers.mjs';

const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/pages?slug=galeria`;
  const response = await fetch(url);
  const json = await response.json();
  const data = GalleryPageSchema.parse(json[0]);
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galería", "subtitle": data.acf.subtitle, "bgImage": data.featured_images.full.url }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryGrid", $$GalleryGrid, { "gallery": data.gallery })} ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/galeria.astro", void 0);
const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
