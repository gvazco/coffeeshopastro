import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Bz2EcZWY.mjs';
import { $ as $$Layout } from '../chunks/Layout_DzhpUMcC.mjs';
import { P as PostsSchema, B as BaseWPSchema } from '../chunks/index_Dh-bHIAb.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_BWSB3Jb7.mjs';
export { renderers } from '../renderers.mjs';

const $$BlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/posts`;
  const res = await fetch(url);
  const json = await res.json();
  const data = PostsSchema.parse(json);
  console.log(data);
  return renderTemplate`${data.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`)}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/components/blog/BlogPosts.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const url = `${"https://coffeshop.core-hub-plex.space/wp-json/wp/v2"}/pages?slug=blog`;
  const response = await fetch(url);
  const json = await response.json();
  const data = BaseWPSchema.parse(json[0]);
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "subtitle": data.acf.subtitle, "bgImage": data.featured_images.full.url }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-xl space-y-3 mt-10 lg:mt-0">${unescapeHTML(data.content.rendered)}</div> ${renderComponent($$result2, "BlogPosts", $$BlogPosts, {})} ` })}`;
}, "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/blog.astro", void 0);
const $$file = "C:/Users/Gustavo Vazco/source/repos/coffeeshopastro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
