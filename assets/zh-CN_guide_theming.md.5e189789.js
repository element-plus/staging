import{_ as n,c as s,o as a,e as t}from"./app.eaa445ca.js";const g='{"title":"\u4E3B\u9898","description":"","frontmatter":{"title":"\u4E3B\u9898","lang":"zh-CN"},"headers":[{"level":2,"title":"\u66F4\u6362\u4E3B\u9898\u8272","slug":"\u66F4\u6362\u4E3B\u9898\u8272"},{"level":3,"title":"\u901A\u8FC7 SCSS \u53D8\u91CF","slug":"\u901A\u8FC7-scss-\u53D8\u91CF"},{"level":3,"title":"\u5982\u4F55\u8986\u76D6\u5B83\uFF1F","slug":"\u5982\u4F55\u8986\u76D6\u5B83\uFF1F"},{"level":3,"title":"\u901A\u8FC7 CSS \u53D8\u91CF\u8BBE\u7F6E","slug":"\u901A\u8FC7-css-\u53D8\u91CF\u8BBE\u7F6E"}],"relativePath":"zh-CN/guide/theming.md"}',p={},e=t(`<h1 id="\u81EA\u5B9A\u4E49\u4E3B\u9898" tabindex="-1">\u81EA\u5B9A\u4E49\u4E3B\u9898 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898" aria-hidden="true">#</a></h1><p>Element Plus \u9ED8\u8BA4\u63D0\u4F9B\u4E00\u5957\u4E3B\u9898\uFF0CCSS \u547D\u540D\u91C7\u7528 BEM \u7684\u98CE\u683C\uFF0C\u65B9\u4FBF\u4F7F\u7528\u8005\u8986\u76D6\u6837\u5F0F\u3002 \u4F46\u662F\u5982\u679C \u4F60\u9700\u8981\u5728\u5927\u89C4\u6A21\u4E0A\u66FF\u6362\u6837\u5F0F\uFF0C\u4F8B\u5982\uFF1A \u5C06\u4E3B\u9898\u989C\u8272\u4ECE \u84DD\u8272\u6539\u4E3A\u6A59\u8272\u6216\u7EFF\u8272\uFF0C\u4E5F\u8BB8\u4E00\u4E2A\u4EBA\u5C06\u5176\u8986\u76D6\u8D77\u6765\u4E0D\u662F\u4E00\u4E2A\u597D\u4E3B\u610F\u3002 \u6211\u4EEC \u63D0\u4F9B\u56DB\u79CD\u65B9\u6CD5\u6765\u6539\u53D8\u98CE\u683C\u53D8\u91CF\u3002</p><h2 id="\u66F4\u6362\u4E3B\u9898\u8272" tabindex="-1">\u66F4\u6362\u4E3B\u9898\u8272 <a class="header-anchor" href="#\u66F4\u6362\u4E3B\u9898\u8272" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u662F\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E00\u4E9B\u4F8B\u5B50\u3002</p><ul><li>\u5168\u90E8\u5BFC\u5165\uFF1A<a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">element-plus-vite-starter</a></li><li>\u6309\u9700\u5BFC\u5165\uFF1A<a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus/examples/vite</a></li></ul><h3 id="\u901A\u8FC7-scss-\u53D8\u91CF" tabindex="-1">\u901A\u8FC7 SCSS \u53D8\u91CF <a class="header-anchor" href="#\u901A\u8FC7-scss-\u53D8\u91CF" aria-hidden="true">#</a></h3><p><code>theme-chalk</code> \u4F7F\u7528SCSS\u7F16\u5199\u800C\u6210\u3002 \u4F60\u53EF\u4EE5\u5728 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer"><code>packages/theme-chalk/src/common/var.scss</code></a>.\u6587\u4EF6\u4E2D\u67E5\u627ESCSS\u53D8\u91CF\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u6211\u4EEC\u4F7F\u7528 sass \u6A21\u5757\uFF08<a href="https://sass-lang.com/documentation/values/maps" target="_blank" rel="noopener noreferrer">sass:map</a>...\uFF09\u6765\u91CD\u6784\u6240\u6709\u7684 SCSS \u53D8\u91CF\u3002</p><blockquote><p><a href="https://css-tricks.com/introducing-sass-modules/" target="_blank" rel="noopener noreferrer">\u4ECB\u7ECDSass \u6A21\u5757 | CSS-TRICKS</a></p></blockquote><p>\u4F8B\u5982\uFF0C \u4F7F\u7528<code>$colors</code>\u53D8\u91CF\u6620\u5C04\u4E0D\u540C\u989C\u8272\u3002</p><p><code>$notification</code> \u662F\u6240\u6709<code>notification</code> \u7EC4\u4EF6\u7684\u53D8\u91CF\u7684\u6620\u5C04\u3002</p><p>\u672A\u6765\uFF0C\u6211\u4EEC\u5C06\u4E3A\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u53D8\u91CF\u7F16\u5199\u6587\u6863\u3002 \u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6E90\u4EE3\u7801 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer">var.scss</a></p></div><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> map.<span class="token function">deep-merge</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>
    <span class="token string">&#39;white&#39;</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">,</span>
    <span class="token string">&#39;black&#39;</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;warning&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;danger&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;info&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #909399<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token variable">$colors</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5982\u4F55\u8986\u76D6\u5B83\uFF1F" tabindex="-1">\u5982\u4F55\u8986\u76D6\u5B83\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u8986\u76D6\u5B83\uFF1F" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E5F\u4F7F\u7528\u4E86 SCSS\uFF0C \u90A3\u4E48\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539Element Plus\u7684\u6837\u5F0F\u53D8\u91CF\u3002 \u65B0\u5EFA\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F8B\u5982 <code>styles/element/index.scss</code>\uFF1A</p><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">/* \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u53EA\u662F\u6309\u9700\u5BFC\u5165\uFF0C\u5219\u53EF\u4EE5\u5FFD\u7565\u4EE5\u4E0B\u5185\u5BB9\u3002</span>
<span class="token comment">// \u5982\u679C\u4F60\u60F3\u5BFC\u5165\u6240\u6709\u6837\u5F0F:</span>
<span class="token comment">// @use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span>
</code></pre></div><p>\u7136\u540E\u5728\u4F60\u7684\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u5BFC\u5165\u8FD9\u4E2A\u6837\u5F0F\u6587\u4EF6\u66FF\u6362 Element Plus \u5185\u7F6E\u7684 CSS\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5728 element-plus scss \u6587\u4EF6\u4E4B\u524D\u5BFC\u5165<code>element/index.scss</code>\u4EE5\u907F\u514D sass \u6DF7\u5408\u53D8\u91CF\u7684\u95EE\u9898\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u4F60\u7684\u81EA\u5B9A\u4E49\u53D8\u91CF\u751F\u6210 light-x</p></div><p>\u521B\u5EFA\u4E00\u4E2A <code>element/index.scss</code> \u6587\u4EF6\u6765\u5408\u5E76\u4F60\u7684\u53D8\u91CF\u548C element-plus \u7684\u53D8\u91CF\u3002 \uFF08\u5982\u679C\u4F60\u5728 TypeScript \u4E2D\u5BFC\u5165\u4E86\u5B83\u4EEC\uFF0C\u4ED6\u4EEC\u5C06\u4E0D\u4F1A\u88AB\u5408\u5E76\uFF09</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u9664\u6B64\u4EE5\u5916\uFF0C\u4F60\u5E94\u8BE5\u5C06scss\u4E0E\u5143\u7D20\u53D8\u91CFscss\u533A\u5206\u5F00\u6765\u3002 \u5982\u679C\u5C06\u5B83\u4EEC\u6DF7\u5408\u5728\u4E00\u8D77\uFF0C<code>element-plus</code>\u7684\u6BCF\u6B21\u70ED\u66F4\u65B0\u90FD\u9700\u8981\u7F16\u8BD1\u5927\u91CF\u7684 scss \u6587\u4EF6\uFF0C\u5BFC\u81F4\u7F16\u8BD1\u901F\u5EA6\u53D8\u6162\u3002</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528vite\uFF0C\u5E76\u4E14\u4F60\u60F3\u5728\u6309\u9700\u5BFC\u5165\u65F6\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p><p>\u4F7F\u7528 <code>scss.additionalData</code> \u6765\u7F16\u8BD1\u6240\u6709\u5E94\u7528 scss \u53D8\u91CF\u7684\u7EC4\u4EF6\u3002</p><div class="language-ts"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token comment">// \u4F60\u540C\u6837\u53EF\u4EE5\u4F7F\u7528 unplugin-vue-components</span>
<span class="token comment">// import Components from &#39;unplugin-vue-components/vite&#39;</span>
<span class="token comment">// import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token comment">// \u6216\u8005\u4F7F\u7528 unplugin-element-plus</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>

<span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;~/&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528 unplugin-vue-components</span>
    <span class="token comment">// Components({</span>
    <span class="token comment">//   resolvers: [</span>
    <span class="token comment">//     ElementPlusResolver({</span>
    <span class="token comment">//       importStyle: &quot;sass&quot;,</span>
    <span class="token comment">//       // directives: true,</span>
    <span class="token comment">//       // version: &quot;1.2.0-beta.1&quot;,</span>
    <span class="token comment">//     }),</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// }),</span>
    <span class="token comment">// \u6216\u4F7F\u7528 unplugin-element-plus</span>
    <span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528 webpack\uFF0C\u5E76\u4E14\u9700\u8981\u5728\u6309\u9700\u5BFC\u5165\u65F6\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p><div class="language-ts"><pre><code><span class="token comment">// webpack.config.ts</span>
<span class="token comment">// \u4F7F\u7528 unplugin-element-plus</span>

<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/webpack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u901A\u8FC7-css-\u53D8\u91CF\u8BBE\u7F6E" tabindex="-1">\u901A\u8FC7 CSS \u53D8\u91CF\u8BBE\u7F6E <a class="header-anchor" href="#\u901A\u8FC7-css-\u53D8\u91CF\u8BBE\u7F6E" aria-hidden="true">#</a></h3><p>CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)</p><blockquote><p>\u4ECE\u8FD9\u91CC\u5B66\u4E60\u66F4\u591A\u5173\u4E8E<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">\u4F7F\u7528CSS\u81EA\u5B9A\u4E49\u5C5E\u6027(\u53D8\u91CF) | MDN</a></p></blockquote><p>We have used css variables to reconstruct the style system of almost all components. (Since <code>1.0.2-beta-70</code> <a href="https://github.com/element-plus/element-plus/issues/2242" target="_blank" rel="noopener noreferrer">#2242</a>)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is compatible with the SCSS variable system. We use the function of SCSS to automatically generate css variables for use.</p></div><p>This means you can dynamically change individual variables inside the component to better customize it without having to modify scss and recompile it.</p><blockquote><p>\u4EE5\u540E\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u7684Css\u53D8\u91CF\u540D\u79F0\u548C\u89D2\u8272\u6587\u6863\u5C06\u88AB\u5199\u5165\u5230\u6BCF\u4E2A\u7EC4\u4EF6\u4E2D\u3002</p></blockquote><p>Like this:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you just want to customize a particular component, just add inline styles for certain components individually.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>For performance reasons, it is more recommended to custom css variables under a class rather than the global <code>:root</code>.</p><div class="language-css"><pre><code><span class="token selector">.custom-class</span> <span class="token punctuation">{</span>
  <span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you want to control css var by script, try this:</p><div class="language-ts"><pre><code><span class="token comment">// document.documentElement is global</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
<span class="token comment">// const el = document.getElementById(&#39;xxx&#39;)</span>

<span class="token comment">// get css var</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">--el-color-primary</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// set css var</span>
el<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;--el-color-primary&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre></div><p>If you want a more elegant way, check this out. <a href="https://vueuse.org/core/usecssvar/" target="_blank" rel="noopener noreferrer">useCssVar | VueUse</a></p>`,38),o=[e];function c(l,u,i,r,k,m){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
