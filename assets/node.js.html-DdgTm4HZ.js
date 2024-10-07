import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as l}from"./app-C95VGJ3p.js";const e={};function t(h,i){return l(),n("div",null,i[0]||(i[0]=[a(`<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>node.js</span></a></h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1. 安装</span></a></h2><h3 id="_1-1-安装node管理工具nvm" tabindex="-1"><a class="header-anchor" href="#_1-1-安装node管理工具nvm"><span>1.1 安装node管理工具nvm</span></a></h3><ul><li>从<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm项目地址</a>找到安装包或安装脚本，执行安装 <ul><li>如果之前安装了<code>node</code>，需要先删除<code>node</code>再安装，<code>windows</code>可以在控制面板卸载，卸载完成要保证命令行无法找到<code>npm</code></li></ul></li><li>安装<code>node</code>并使用安装好的<code>node</code>：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 切换安装node的镜像源</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 阿里云(淘宝)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node_mirror:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://npmmirror.com/mirrors/node/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm_mirror:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://npmmirror.com/mirrors/npm/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 腾讯云</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node_mirror:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirrors.cloud.tencent.com/npm/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm_mirror:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirrors.cloud.tencent.com/nodejs-release/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装最新版node</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装特定版本node，比如：18.17.1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.17.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出已下载的所有node版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出所有可安装版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> available</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用特定版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.17.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除特定版本node</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.17.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-配置node" tabindex="-1"><a class="header-anchor" href="#_1-2-配置node"><span>1.2 配置node</span></a></h3><ul><li>切换<code>npm</code>镜像</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置为淘宝镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装npm镜像管理工具nrm(可选)</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nrm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看可选源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用对应源仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加自定义源仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y&gt; &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ur</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">l&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除对应源仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> del</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 测试速度</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">registr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">y&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看当前使用源和url</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nrm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> current</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新建下载目录存放npm下载文件：通过npm安装会将下载文件存放到<code>C:\\Users\\用户名\\AppData\\Local\\npm-cache</code>，全局包存放在<code>nodejs</code>根目录下</li><li>为了管理方便，并空出<code>c</code>盘空间，在<code>nodejs</code>目录下创建两个文件夹<code>node_global</code>和<code>node_cache</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改使用新建目录下载文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prefix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;D:\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;D:\\nodejs\\node_cache&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>添加<code>node_global</code>文件夹环境变量，对于全局包而言，一般都是需要命令行使用的脚本</p><ul><li>将文件夹<code>D:\\nodejs\\node_global\\node_modules</code>添加到环境变量中</li></ul><blockquote><p>之前和node在同一文件夹下，而nrm安装时已经添加了环境变量，如果不修改目录不需要额外添加环境变量</p></blockquote></li><li><p>npm常见命令：</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 初始化项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装所有依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加依赖，可以简写成 i </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 卸载依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行package中的命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前项目已安装依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>快速删除<code>node_modules</code>文件夹</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装rimraf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rimraf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除node_modules</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rimraf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_modules</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>自动重启node运行的文件：node支持直接运行js文件，但并不能在文件改变后自动重启，如果有此需求可以安装<code>nodemon</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodemon</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 相对于使用 node test 运行 test.js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nodemon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-安装其他node包管理工具" tabindex="-1"><a class="header-anchor" href="#_1-2-安装其他node包管理工具"><span>1.2 安装其他node包管理工具</span></a></h3><ul><li>由于npm安装存在速度慢，安装空间占用大的问题，社区中出现了一些新的包管理工具</li></ul><h4 id="_1-2-1-yarn" tabindex="-1"><a class="header-anchor" href="#_1-2-1-yarn"><span>1.2.1 yarn</span></a></h4><ul><li><code>Yarn</code>是<code>facebook</code>发布的一款取代<code>npm</code>的包管理工具，主要是改进了安装速度、正确性，并添加了工作区等新功能，相关命令文档见<a href="https://yarn.nodejs.cn/cli" target="_blank" rel="noopener noreferrer">yarn中文网</a></li><li>安装与更新：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新，npm中的yarn定格在了1.X版本，因此下载后需要手动更新</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置<code>yarn</code>：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置缓存目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cache-folder</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;D:\\nodejs\\.yarn-cache&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置镜像，当然也可以使用yrm进行管理 yarn global add yrm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://registry.npmmirror.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常用命令基本与<code>npm</code>相同：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 全局安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 为项目添加依赖，-D添加为生产依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 移除依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 升级所有依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 升级某个依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行package中的脚本，相对于npm run ...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前项目已安装的依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>yarn项目需要添加到.gitignore的文件</li></ul><div class="language-gitignore line-numbers-mode" data-highlighter="shiki" data-ext="gitignore" data-title="gitignore" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.yarn/*</span></span>
<span class="line"><span>!.yarn/cache</span></span>
<span class="line"><span>!.yarn/patches</span></span>
<span class="line"><span>!.yarn/plugins</span></span>
<span class="line"><span>!.yarn/releases</span></span>
<span class="line"><span>!.yarn/sdks</span></span>
<span class="line"><span>!.yarn/versions</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-2-2-pnpm"><span>1.2.2 pnpm</span></a></h4><ul><li>pnpm是速度快、节省磁盘空间的软件包管理器 <ul><li>同yarn和npm一样，pnpm仍然使用缓存来保存已经安装过的包，以及使用pnpm-lock.yaml来记录详细的依赖版本</li><li>不同于yarn和npm， pnpm使用<strong>符号链接和硬链接</strong>的做法来放置依赖，从而规避了从缓存中拷贝文件的时间，使得安装和卸载的速度更快</li><li>由于使用了<strong>符号链接和硬链接</strong>，它选择使用树形的依赖结果，有着几乎完美的依赖管理。也因为如此，项目中<strong>只能使用直接依赖</strong>，而不能使用间接依赖</li></ul><blockquote><p>由于pnpm的原理，目前只支持扁平的项目依赖结构，即无法使用来自依赖的依赖，只能使用项目的依赖(已修复)</p></blockquote></li><li>安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://registry.npmmirror.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改下载目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> store-dir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;D:\\nodejs\\.pnpm-store&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 对项目级别设置目录，修改pnpm-store.yaml，添加以下内容</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># storeDir: &quot;/path/to/project-store&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常见命令</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看某依赖的所有版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> view</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 全局安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装所有依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新所有依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 当前项目已安装依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const k=s(e,[["render",t],["__file","node.js.html.vue"]]),r=JSON.parse('{"path":"/note/node_js/node.js.html","title":"node.js","lang":"zh-CN","frontmatter":{"description":"node.js 1. 安装 1.1 安装node管理工具nvm 从nvm项目地址找到安装包或安装脚本，执行安装 如果之前安装了node，需要先删除node再安装，windows可以在控制面板卸载，卸载完成要保证命令行无法找到npm 安装node并使用安装好的node： 1.2 配置node 切换npm镜像 安装npm镜像管理工具nrm(可选) 新建下载...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/note-vuepress/note/node_js/node.js.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"node.js"}],["meta",{"property":"og:description","content":"node.js 1. 安装 1.1 安装node管理工具nvm 从nvm项目地址找到安装包或安装脚本，执行安装 如果之前安装了node，需要先删除node再安装，windows可以在控制面板卸载，卸载完成要保证命令行无法找到npm 安装node并使用安装好的node： 1.2 配置node 切换npm镜像 安装npm镜像管理工具nrm(可选) 新建下载..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node.js\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装","slug":"_1-安装","link":"#_1-安装","children":[{"level":3,"title":"1.1 安装node管理工具nvm","slug":"_1-1-安装node管理工具nvm","link":"#_1-1-安装node管理工具nvm","children":[]},{"level":3,"title":"1.2 配置node","slug":"_1-2-配置node","link":"#_1-2-配置node","children":[]},{"level":3,"title":"1.2 安装其他node包管理工具","slug":"_1-2-安装其他node包管理工具","link":"#_1-2-安装其他node包管理工具","children":[]}]}],"readingTime":{"minutes":4.28,"words":1285},"filePathRelative":"note/node_js/node.js.md","excerpt":"\\n<h2>1. 安装</h2>\\n<h3>1.1 安装node管理工具nvm</h3>\\n<ul>\\n<li>从<a href=\\"https://github.com/nvm-sh/nvm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nvm项目地址</a>找到安装包或安装脚本，执行安装\\n<ul>\\n<li>如果之前安装了<code>node</code>，需要先删除<code>node</code>再安装，<code>windows</code>可以在控制面板卸载，卸载完成要保证命令行无法找到<code>npm</code></li>\\n</ul>\\n</li>\\n<li>安装<code>node</code>并使用安装好的<code>node</code>：</li>\\n</ul>","autoDesc":true}');export{k as comp,r as data};
