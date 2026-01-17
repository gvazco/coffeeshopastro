import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_Bz2EcZWY.mjs';
import { C as CategorySchema, P as PostsSchema, a as CategoriesSlugSchema } from '../../../chunks/index_Dh-bHIAb.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_DzhpUMcC.mjs';
import { $ as $$PostCard } from '../../../chunks/PostCard_BWSB3Jb7.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch(
    `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/categories?_fields=slug,name`
  );
  const json = await res.json();
  const categories = CategoriesSlugSchema.parse(json);
  return categories.map((category) => ({
    params: { slug: category.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const catUrl = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/categories?slug=${slug}`;
  const catRes = await fetch(catUrl);
  const catJson = await catRes.json();
  const category = CategorySchema.parse(catJson[0]);
  const postsUrl = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/posts?categories=${category.id}`;
  const postsRes = await fetch(postsUrl);
  const postsJson = await postsRes.json();
  const posts = PostsSchema.parse(postsJson);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts en la categoría: ${category.name}`, "subtitle": `Posts en la categoría: ${category.name}`, "bgImage": posts[0].featured_images.full.url }, { "default": async ($$result2) => renderTemplate`${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)}` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/blog/categoria/[slug].astro", void 0);
const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/blog/categoria/[slug].astro";
const $$url = "/blog/categoria/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
