import { c as createComponent, b as createAstro, m as maybeRenderHead, e as renderScript, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_Bz2EcZWY.mjs';
import { $ as $$Picture } from './_astro_assets_wBPa_WIb.mjs';

const $$Astro = createAstro();
const $$GalleryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryGrid;
  const { gallery } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="gallery" class="grid grid-cols-1 lg:grid-cols-3 gap-5"> ${gallery.map((image) => renderTemplate`<a${addAttribute(image.full.url, "href")}${addAttribute(image.full.width, "data-pswp-width")}${addAttribute(image.full.height, "data-pswp-height")}> ${renderComponent($$result, "Picture", $$Picture, { "src": image.large.url, "alt": "Galer\xEDa de im\xE1genes", "width": image.large.width, "height": image.large.height, "formats": ["avif", "webp"] })} </a>`)} </div> ${renderScript($$result, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/gallery/GalleryGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/gallery/GalleryGrid.astro", void 0);

export { $$GalleryGrid as $ };
