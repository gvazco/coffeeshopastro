import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
import 'clsx';
import { $ as $$GalleryGrid } from '../chunks/GalleryGrid_BLxupgu9.mjs';
import { G as GalleryPageSchema } from '../chunks/index_Dh-bHIAb.mjs';
import { $ as $$ProductsMenu } from '../chunks/ProductsMenu_BPtpPHoF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CategoryIconLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryIconLabel;
  const { icon, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="py-10 space-y-5 flex flex-col items-center"> <img${addAttribute(icon, "src")}${addAttribute(`Icono `, "alt")} class="max-w-52"> <h3 class="text-4xl text-coffee-800 font-secondary">${text}</h3> </div>`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/ui/CategoryIconLabel.astro", void 0);

const bg = new Proxy({"src":"/_astro/bg_home.CiaRDCtN.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/assets/bg_home.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeGallery = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/pages?slug=galeria`;
  const response = await fetch(url);
  const json = await response.json();
  const data = GalleryPageSchema.parse(json[0]);
  return renderTemplate`${maybeRenderHead()}<section class="bg-white px-20 pb-40 max-w-7xl mx-auto -mt-20 relative"> <h2 class="text-coffee-400 text-center font-black text-lg uppercase after:coffee-icon pb-10">
Vive la
<span class="text-coffee-900 text-4xl block">experiencia</span> </h2> ${renderComponent($$result, "GalleryGrid", $$GalleryGrid, { "gallery": data.gallery })} </section>`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/gallery/HomeGallery.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio", "subtitle": "Disfruta de una deliciosa taza de cafe", "bgImage": bg.src }, { "after-main-content": ($$result2) => renderTemplate`${renderComponent($$result2, "HomeGallery", $$HomeGallery, { "slot": "after-main-content" })}${renderComponent($$result2, "ProductsMenu", $$ProductsMenu, { "slot": "after-main-content" })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-coffee-400 uppercase text-center text-lg font-black mb-10 after:coffee-icon">
Conoce más
<span class="text-4xl block text-coffee-900">sobre nosotros</span> </h2> <p class="text-center text-lg mb-10">
Desde 1939, nuestra cafetería ha sido un rincón acogedor donde el buen café
    y la comida hecha con cariño son protagonistas. Aquí no solo vienes a
    disfrutar de una bebida: vienes a saborear el resultado de décadas de
    dedicación, recetas caseras y una selección cuidadosa de ingredientes
    frescos y de calidad.
</p> <p class="text-center text-lg mb-10">
En cada plato y en cada taza encontrarás el equilibrio perfecto entre
    tradición y sabor. Desde nuestro café artesanal hasta nuestros desayunos,
    almuerzos y repostería, todo está preparado con productos naturales, sin
    atajos ni artificios.
</p> <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10"> ${renderComponent($$result2, "CategoryIconLabel", $$CategoryIconLabel, { "icon": "icon_coffee.svg", "text": "Caf\xE9" })} ${renderComponent($$result2, "CategoryIconLabel", $$CategoryIconLabel, { "icon": "icon_dessert.svg", "text": "Postres" })} ${renderComponent($$result2, "CategoryIconLabel", $$CategoryIconLabel, { "icon": "icon_tea.svg", "text": "T\xE9" })} </div>   ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
