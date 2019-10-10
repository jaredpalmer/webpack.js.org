(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{418:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/worker-loader"><img src="https://img.shields.io/npm/v/worker-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/worker-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/worker-loader"><img src="https://david-dm.org/webpack-contrib/worker-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/worker-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/worker-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=worker-loader"><img src="https://packagephobia.now.sh/badge?p=worker-loader" alt="size"></a></p>\n<p>worker loader module for webpack</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>worker-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install worker-loader --save-dev\n</code></pre>\n<h3 id="inlined">Inlined<a href="#inlined" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token comment">// App.js</span>\n<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">\'worker-loader!./Worker.js\'</span><span class="token punctuation">;</span></code></pre>\n<h3 id="config">Config<a href="#config" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.worker\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span> <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// App.js</span>\n<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">\'./file.worker.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nworker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nworker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nworker<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="fallback"><code>fallback</code><a href="#fallback" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>false</code></p>\n<p>Require a fallback for non-worker supporting environments</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> fallback<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="inline"><code>inline</code><a href="#inline" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>false</code></p>\n<p>You can also inline the worker as a BLOB with the <code>inline</code> parameter</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> inline<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p><em>Note: Inline mode will also create chunks for browsers without support for\ninline workers, to disable this behavior just set <code>fallback</code> parameter as\n<code>false</code>.</em></p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> inline<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> fallback<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="name"><code>name</code><a href="#name" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>[hash].worker.js</code></p>\n<p>To set a custom name for the output script, use the <code>name</code> parameter. The name\nmay contain the string <code>[hash]</code>, which will be replaced with a content dependent\nhash for caching purposes. When using <code>name</code> alone <code>[hash]</code> is omitted.</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'WorkerName.[hash].js\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="publicpath">publicPath<a href="#publicpath" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>null</code></p>\n<p>Overrides the path from which worker scripts are downloaded. If not specified,\nthe same public path used for other webpack assets is used.</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> publicPath<span class="token punctuation">:</span> <span class="token string">\'/scripts/workers/\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The worker file can import dependencies just like any other file:</p>\n<pre><code class="hljs language-js"><span class="token comment">// Worker.js</span>\n<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'lodash\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">\'foo\'</span> <span class="token punctuation">}</span>\n\n_<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'foo\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Post data to parent thread</span>\nself<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">\'foo\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Respond to message from parent thread</span>\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n<h3 id="integrating-with-es2015-modules">Integrating with ES2015 Modules<a href="#integrating-with-es2015-modules" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><em>Note: You can even use ES2015 Modules if you have the\n<a href="https://github.com/babel/babel-loader"><code>babel-loader</code></a> configured.</em></p>\n<pre><code class="hljs language-js"><span class="token comment">// Worker.js</span>\n<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">\'lodash\'</span>\n\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">\'foo\'</span> <span class="token punctuation">}</span>\n\n_<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'foo\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Post data to parent thread</span>\nself<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">\'foo\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Respond to message from parent thread</span>\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n<h3 id="integrating-with-typescript">Integrating with TypeScript<a href="#integrating-with-typescript" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>To integrate with TypeScript, you will need to define a custom module for the exports of your worker</p>\n<pre><code class="hljs language-typescript"><span class="token comment">// typings/custom.d.ts</span>\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"worker-loader!*"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">class</span> <span class="token class-name">WebpackWorker</span> <span class="token keyword">extends</span> <span class="token class-name">Worker</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> WebpackWorker<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-typescript"><span class="token comment">// Worker.ts</span>\n<span class="token keyword">const</span> ctx<span class="token punctuation">:</span> Worker <span class="token operator">=</span> self <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Post data to parent thread</span>\nctx<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">"foo"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Respond to message from parent thread</span>\nctx<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-typescript"><span class="token comment">// App.ts</span>\n<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">"worker-loader!./Worker"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nworker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nworker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nworker<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cross-origin-policy">Cross-Origin Policy<a href="#cross-origin-policy" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"><code>WebWorkers</code></a>\nare restricted by a\n<a href="https://en.wikipedia.org/wiki/Same-origin_policy">same-origin policy</a>, so if\nyour <code>webpack</code> assets are not being served from the same origin as your\napplication, their download may be blocked by your browser. This scenario can\ncommonly occur if you are hosting your assets under a CDN domain. Even downloads\nfrom the <code>webpack-dev-server</code> could be blocked. There are two workarounds:</p>\n<p>Firstly, you can inline the worker as a blob instead of downloading it as an\nexternal script via the <a href="#inline"><code>inline</code></a> parameter</p>\n<pre><code class="hljs language-js"><span class="token comment">// App.js</span>\n<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">\'./file.worker.js\'</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> inline<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Secondly, you may override the base download URL for your worker script via the\n<a href="#publicpath"><code>publicPath</code></a> option</p>\n<pre><code class="hljs language-js"><span class="token comment">// App.js</span>\n<span class="token comment">// This will cause the worker to be downloaded from `/workers/file.worker.js`</span>\n<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">\'./file.worker.js\'</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'worker-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span> publicPath<span class="token punctuation">:</span> <span class="token string">\'/workers/\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<h4 id="contributing-1"><a href="https://github.com/webpack-contrib/worker-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a><a href="#contributing-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/worker-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);