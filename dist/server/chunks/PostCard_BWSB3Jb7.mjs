import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, u as unescapeHTML, a as renderTemplate } from './astro/server_Bz2EcZWY.mjs';
import { $ as $$Picture } from './_astro_assets_wBPa_WIb.mjs';
import { $ as $$PostMeta, a as $$PostCategories } from './PostCategories_DRAZgs79.mjs';

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  console.log(post);
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 border-b last-of-type:border-0 border-zinc-300"> <div class="lg:col-span-2 space-y-5"> <h3 class="text-coffee-900 font-black text-4xl uppercase"> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${post.title.rendered} </a> </h3> ${renderComponent($$result, "PostMeta", $$PostMeta, { "date": post.date })} ${post.category_details.map((cat) => renderTemplate`${renderComponent($$result, "PostCategories", $$PostCategories, { "name": cat.name, "slug": cat.slug })}`)} <div class="line-clamp-2 text-lg">${unescapeHTML(post.content.rendered)}</div> </div> ${renderComponent($$result, "Picture", $$Picture, { "src": post.featured_images.medium_large.url, "alt": post.title.rendered, "width": post.featured_images.medium_large.width, "height": post.featured_images.medium_large.height, "formats": ["avif", "webp"], "class": "w-full lg:w-96 h-64 object-cover rounded-2xl" })} </article>`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/blog/PostCard.astro", void 0);

export { $$PostCard as $ };
