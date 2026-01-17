import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, e as renderScript, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
import { c as ContactPageSchema } from '../chunks/index_Dh-bHIAb.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LocationMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LocationMap;
  const { location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h3 class="text-coffee-900 font-black text-center text-2xl uppercase mb-5">
Ubicación
</h3> <div id="map" class="h-[700px]"></div> ${renderComponent($$result, "location-data", "location-data", { "data-lat": location.lat, "data-lng": location.lng, "data-zoom": location.zoom, "data-label": location.markers[0].label, "data-markerlat": location.markers[0].lat, "data-markerlng": location.markers[0].lng })} </div> ${renderScript($$result, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/contact/LocationMap.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/contact/LocationMap.astro", void 0);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h3 class="text-coffee-900 font-black text-center text-2xl uppercase mb-5">
Contacto
</h3> <form method="post" class="space-y-3" novalidate> <legend class="text-xl">Llena todos los campos para enviar un mensaje.</legend> <div class="flex flex-col space-y-3"> <label for="name" class="input-label">Nombre:</label> <input id="name" type="text" name="name" placeholder="Tu Nombre" class="input-field"> </div> <div class="flex flex-col space-y-3"> <label for="email" class="input-label">Email:</label> <input id="email" type="email" name="email" placeholder="Tu Email" class="input-field"> </div> <div class="flex flex-col space-y-3"> <label for="subject" class="input-label">Asunto:</label> <input id="subject" type="text" name="subject" placeholder="Asunto de Mensaje" class="input-field"> </div> <div class="flex flex-col space-y-3"> <label for="message" class="input-label">Contenido:</label> <textarea id="message" name="message" placeholder="Tu Mensaje" class="input-field h-32"></textarea> </div> <input type="submit" value="Enviar" class="bg-coffee-900 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-coffee-700 text-2xl"> </form> </div> ${renderScript($$result, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/contact/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/contact/ContactForm.astro", void 0);

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/pages?slug=contacto`;
  const response = await fetch(url);
  const json = await response.json();
  const data = ContactPageSchema.parse(json[0]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "subtitle": data.acf.subtitle, "bgImage": data.featured_images.full.url }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-xl space-y-3 mt-10 lg:mt-0">${unescapeHTML(data.content.rendered)}</div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${renderComponent($$result2, "LocationMap", $$LocationMap, { "location": data.acf.location })} </div> ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/contacto.astro", void 0);
const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
