import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, e as renderScript } from './astro/server_Bz2EcZWY.mjs';
import { $ as $$Picture } from './_astro_assets_wBPa_WIb.mjs';
import { a as formatAmount } from './index_OnUowMle.mjs';
import { M as MenuItemsSchema } from './index_Dh-bHIAb.mjs';

const $$Astro = createAstro();
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { title, description, price, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col md:flex-row lg:justify-between gap-5 w-full md:items-center p-5"> <div class="flex-1 flex flex-col md:flex-row gap-5 items-center"> <div class="w-full md:w-40 lg:w-56 overflow-hidden"> <a${addAttribute(image.full.url, "href")}${addAttribute(image.full.width, "data-pswp-width")}${addAttribute(image.full.height, "data-pswp-height")} target="_blank"> ${renderComponent($$result, "Picture", $$Picture, { "src": image.medium.url, "alt": `Imagen del Men\xFA: ${title}`, "width": image.medium.width, "height": image.medium.height, "formats": ["avif", "webp"], "class": "w-full h-64 md:h-40 object-cover border-8 border-white" })} </a> </div> <div class="flex-1"> <p class="text-white font-bold text-2xl text-center md:text-left"> ${title} </p> <p class="text-coffee-400 text-lg text-center md:text-left"> ${description} </p> </div> </div> <p class="text-4xl font-black text-white text-center md:text-left"> ${formatAmount(price)} </p> </li>`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/menu/MenuItem.astro", void 0);

const $$CoffeMenu = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/products?product_categories=7`;
  const res = await fetch(url);
  const json = await res.json();
  const data = MenuItemsSchema.parse(json);
  console.log(data);
  return renderTemplate`${maybeRenderHead()}<div> <h4 class="text-white font-black text-4xl uppercase text-center my-10">
Café
</h4> <ul id="coffe-menu" class="space-y-3"> ${data.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { "title": item.title.rendered, "description": item.acf.description, "price": item.acf.price, "image": item.featured_images })}`)} </ul> </div> ${renderScript($$result, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/menu/CoffeMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/menu/CoffeMenu.astro", void 0);

const $$FoodMenu = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/products?product_categories=8`;
  const res = await fetch(url);
  const json = await res.json();
  const data = MenuItemsSchema.parse(json);
  console.log(data);
  return renderTemplate`${maybeRenderHead()}<div> <h4 class="text-white font-black text-4xl uppercase text-center my-10">
Comida
</h4> <ul id="coffe-menu" class="space-y-3"> ${data.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { "title": item.title.rendered, "description": item.acf.description, "price": item.acf.price, "image": item.featured_images })}`)} </ul> </div> ${renderScript($$result, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/menu/FoodMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/menu/FoodMenu.astro", void 0);

const $$ProductsMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-coffee-800 py-10 -mt-20"> <div class="max-w-7xl mx-auto bg-menu-image bg-no-repeat bg-[center_80px] bg-contain pt-[150px] lg:pt-[250px] pb-40"> <h3 class="text-white font-black text-center text-xl pb-4 uppercase">
Nuestro Delicioso
<span class="text-4xl block">Menú</span> </h3> <div class="grid grid-cols-1 2xl:grid-cols-2 gap-5 mt-10"> ${renderComponent($$result, "CoffeMenu", $$CoffeMenu, {})} ${renderComponent($$result, "FoodMenu", $$FoodMenu, {})} </div> </div> </section>`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/menu/ProductsMenu.astro", void 0);

export { $$ProductsMenu as $ };
