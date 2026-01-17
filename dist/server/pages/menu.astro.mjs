import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_wBPa_WIb.mjs';
import { B as BaseWPSchema } from '../chunks/index_Dh-bHIAb.mjs';
import { $ as $$ProductsMenu } from '../chunks/ProductsMenu_BPtpPHoF.mjs';
export { renderers } from '../renderers.mjs';

const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/pages?slug=menu`;
  const response = await fetch(url);
  const json = await response.json();
  const data = BaseWPSchema.parse(json[0]);
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Menú", "subtitle": data.acf.subtitle, "bgImage": data.featured_images.full.url }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-10"> ${renderComponent($$result2, "Picture", $$Picture, { "src": data.featured_images.medium_large.url, "alt": data.title.rendered, "width": data.featured_images.medium_large.width, "height": data.featured_images.medium_large.height, "formats": ["avif", "webp"] })} <div class="text-xl space-y-3 mt-10 lg:mt-0">${unescapeHTML(data.content.rendered)}</div> </div> ${renderComponent($$result2, "ProductsMenu", $$ProductsMenu, {})} ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/menu.astro", void 0);
const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/menu.astro";
const $$url = "/menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Menu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
