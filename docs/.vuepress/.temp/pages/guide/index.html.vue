<template><div><h1 id="gitexec-guide" tabindex="-1"><a class="header-anchor" href="#gitexec-guide"><span>GitExec Guide</span></a></h1>
<h2 id="simplest-api" tabindex="-1"><a class="header-anchor" href="#simplest-api"><span>Simplest API</span></a></h2>
<ul>
<li>
<p>Use a sub folder of a repo as dependency (master branch will be used)</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://gitexec.now.sh/&lt;repo>/&lt;subdir>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>If you want to use another branch or commit instead</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://gitexec.now.sh/&lt;repo>/&lt;subdir>?&lt;commit-ish>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Usually, a commit-ish can be a <code v-pre>branch</code>, a <code v-pre>commit</code>, or a <code v-pre>tag</code>, etc.</p>
<p>For more information, see: <a href="https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefcommit-ishacommit-ishalsocommittish" target="_blank" rel="noopener noreferrer">git docs &gt; commit-ish<ExternalLinkIcon/></a></p>
</div>
</li>
<li>
<p>In fact, usage without sub folder is also available:</p>
<p><code v-pre>https://gitexec.now.sh/&lt;repo&gt;</code></p>
<p><code v-pre>https://gitexec.now.sh/&lt;repo&gt;?&lt;commit-ish&gt;</code></p>
<p>But <code v-pre>yarn add</code> and <code v-pre>npm install</code> support using github url directly:</p>
<p><code v-pre>&lt;repo&gt;</code></p>
<p><code v-pre>&lt;repo&gt;#&lt;commit-ish&gt;</code></p>
</li>
</ul>
<p>Examples:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> init <span class="token parameter variable">-y</span>

<span class="token comment"># dep: repo=[neopilot/gitexec-hello] > sub folder=[packages/hello]</span>
<span class="token function">yarn</span> <span class="token function">add</span> https://gitexec.now.sh/neopilot/gitexec-hello/packages/hello

<span class="token comment"># dep: [neopilot/gitexec-hello] > [packages/core] # branch=[feat/md]</span>
<span class="token function">yarn</span> <span class="token function">add</span> https://gitexec.now.sh/neopilot/gitexec-hello/packages/core?feat/md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="more-formal-api" tabindex="-1"><a class="header-anchor" href="#more-formal-api"><span>More Formal API</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://gitexec.now.sh/api/pkg?url=&lt;repo>/&lt;subdir>
https://gitexec.now.sh/api/pkg?url=&lt;repo>/&lt;subdir>&amp;commit=&lt;commit-ish>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Or if you want to make the file format clear:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://gitexec.now.sh/api/pkg.tgz?url=&amp;commit=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="custom-scripts" tabindex="-1"><a class="header-anchor" href="#custom-scripts"><span>Custom Scripts</span></a></h2>
<h3 id="why-we-need-custom-scripts" tabindex="-1"><a class="header-anchor" href="#why-we-need-custom-scripts"><span>Why we need custom scripts</span></a></h3>
<p>Many github repositories contains source code only, which you can't use directly as a npm/yarn dependency.</p>
<p>So this service provide the option to configure custom scripts</p>
<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to use</span></a></h3>
<h4 id="edit-with-the-web-ui" tabindex="-1"><a class="header-anchor" href="#edit-with-the-web-ui"><span>edit with the Web UI</span></a></h4>
<p>All you need is go to the <RouteLink to="/">main page</RouteLink>,
click the <code v-pre>Add a custom script</code> button,
edit the script name and content,
then the install command will include the custom scripts.</p>
<p>You can try the <a href="#custom-script-example">example</a>.</p>
<h4 id="advanced-setup-the-url-by-yourself" tabindex="-1"><a class="header-anchor" href="#advanced-setup-the-url-by-yourself"><span>(Advanced) setup the url by yourself</span></a></h4>
<p>If you don't want to use the UI, you can setup the url by your self</p>
<ul>
<li>
<p>Simplest API</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://gitexec.now.sh/&lt;repo>/&lt;subdir>?&lt;commit-ish>&amp;scripts.&lt;script-name>=&lt;script-content>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>More Formal API</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>https://gitexec.now.sh/pkg?url=&lt;repo>/&lt;subdir>&amp;scripts.&lt;script-name>=&lt;script-content>
https://gitexec.now.sh/pkg?url=&lt;repo>/&lt;subdir>&amp;commit=&lt;commit-ish>&amp;scripts.&lt;script-name>=&lt;script-content>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code v-pre>&lt;script-name&gt;</code> and <code v-pre>&lt;script-content&gt;</code> must NOT contain special chars including <code v-pre>&amp; ? =</code>. You can use <code v-pre>encodeURIComponent</code> to encode them before putting them in the query param.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>If you use windows, then using <code v-pre>yarn install &lt;url&gt;</code> or <code v-pre>npm install &lt;url&gt;</code> if <code v-pre>&lt;url&gt;</code> contains <code v-pre>&amp;</code> may lead to errors.</p>
<p>In such cases, you have to manually add <code v-pre>&quot;&lt;package-name&gt;&quot;: &quot;&lt;url&gt;&quot;</code> to the <code v-pre>dependency</code> or <code v-pre>devDependency</code> of <code v-pre>package.json</code>.</p>
</div>
<h5 id="replace-append-to-or-prepend-to-the-original-script" tabindex="-1"><a class="header-anchor" href="#replace-append-to-or-prepend-to-the-original-script"><span>replace, append to, or prepend to the original script</span></a></h5>
<p>If the original <code v-pre>package.json</code> contains the script with the same name,
you can choose to whether to replace it. For example:</p>
<p>The <code v-pre>package.json</code> is like:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"node original-install.js"</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>To <strong>replace</strong> the original, just use <code v-pre>scripts.postinstall=command-from-gitexec</code>,
then the generated <code v-pre>package.json</code> will be like:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"command-from-gitexec"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>To <strong>append</strong> to the original, add <code v-pre>&amp;&amp;</code> (encoded as <code v-pre>%26%26</code>) <strong>before</strong> your script content: <code v-pre>scripts.postinstall=%26%26command-from-gitexec</code>.
Then the generated <code v-pre>package.json</code> will be like:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"node original-install.js &amp;&amp; command-from-gitexec"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>To <strong>prepend</strong> to the original, add <code v-pre>&amp;&amp;</code> <strong>after</strong> your script content: <code v-pre>scripts.postinstall=command-from-gitexec%26%26</code>.
Then the generated <code v-pre>package.json</code> will be like:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"command-from-gitexec &amp;&amp; node original-install.js"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="advanced-how-this-function-is-implemented" tabindex="-1"><a class="header-anchor" href="#advanced-how-this-function-is-implemented"><span>(Advanced) How this function is implemented</span></a></h3>
<p>GitExec service process the tar file of the github repo in the form of stream,
so that only a few memory is used.</p>
<p>This means when a user (yarn or npm actually) requests <code v-pre>my-sub-dir</code> folder from repo <code v-pre>example-user/example-repo</code>,
GitExec service requests the tarball of whole repo <code v-pre>example-user/example-repo</code> from github,
open a stream from the tarball response.</p>
<p>Then the stream is parsed as an <code v-pre>tar entry stream</code>,
and each entry is checked for whether it is in <code v-pre>my-sub-dir</code> folder.</p>
<p>If yes, this entry is added to the stream which responses to the user.
If not, this entry is ignored.</p>
<p>To add the custom scripts, when an entry's path is <code v-pre>my-sub-dir/package.json</code>,
this entry's file content will be loaded,
and modified (the custom scripts are added to the <code v-pre>scripts</code> prop).
Then the modified version is added to the stream which responses to the user.</p>
<p>So when the user, or yarn and npm, receive the tarball,
the tarball only contains files under <code v-pre>my-sub-dir</code>.
And if custom scripts are specified,
the <code v-pre>package.json</code> is modified to include the specified scripts.</p>
<p>This is how GitExec works.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>
<h3 id="custom-script-example" tabindex="-1"><a class="header-anchor" href="#custom-script-example"><span>Custom script example</span></a></h3>
<p>This example shows how to install <a href="https://github.com/neopilot/gitexec-hello/tree/master/packages/hello-ts" target="_blank" rel="noopener noreferrer">neopilot/gitexec-hello &gt; packages/hello-ts<ExternalLinkIcon/></a> as dependency.
The sub folder of this repo only contains typescript source code so we need to use custom scripts:
<code v-pre>scripts.postinstall=npm install --ignore-scripts &amp;&amp; npm run build</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> hello-gitexec
<span class="token builtin class-name">cd</span> hello-gitexec
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token string">'https://gitexec.now.sh/neopilot/gitexec-hello/packages/hello-ts?master&amp;scripts.postinstall=npm%20install%20--ignore-scripts%20%26%26%20npm%20run%20build'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then make a new file <code v-pre>test.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"hello-ts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Running it should outputs <code v-pre>Hello world from TypeScript!</code></p>
</div></template>


