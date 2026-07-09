# CLAUDE.md

> 本文件供 Claude Code 在每次会话启动时自动读取,帮助快速理解本项目。
> 人类协作者请阅读同目录下的 `PROJECT_HANDOVER.md` 获取完整背景。

## 项目一句话

孙建华(Jeffrey Sun,业界称「帽子哥 / Hat Brother」)的个人作品集网站,已上线于 **https://jeffreysuns.com**。

## 技术栈(重要 — 这不是常规 React 项目)

这是一个**零构建(no-build)的静态网站**,靠浏览器内实时转译运行:

- **React 18 + ReactDOM**:通过 CDN(unpkg)引入,非 npm 安装
- **Babel Standalone**:在浏览器里实时把 `.jsx` 编译成 JS(`<script type="text/babel">`)
- **没有 package.json、没有 node_modules、没有 webpack/vite、没有构建步骤**
- **纯 CSS**:手写 `styles.css`,用 CSS 变量做主题(`--accent`、`--serif` 等)
- 字体:Google Fonts(Cormorant Garamond / Inter / Noto Serif SC / Ma Shan Zheng / JetBrains Mono)

> ⚠️ 因此:不要引入 npm 依赖、不要加 `import`/`export`、不要建 build 流程,除非明确决定重构整个架构。所有 jsx 文件通过全局作用域共享变量。

## 文件结构

```
├── index.html          # 入口。<head> 含全部 SEO/favicon/JSON-LD;<body> 按顺序加载所有 jsx
├── app.jsx             # 主应用 + 入口:定义 App() 组件,最后 ReactDOM.createRoot 渲染
├── components.jsx      # 可复用组件(Lightbox/Marquee/ScrollProgress/useReveal 等)
├── sections.jsx        # 页面各区块(Hero/About/Books/Works/Philosophy/Photography/Industry/Contact)
├── data.jsx            # 所有内容数据(文案、作品列表、图片路径)—— 改文案主要动这里
├── tweaks-panel.jsx    # 主题调试面板 + useTweaks Hook(app.jsx 依赖它,勿删)
├── styles.css          # 全部样式,CSS 变量主题
├── robots.txt          # 允许所有爬虫(含 GPTBot/ClaudeBot/PerplexityBot)
├── sitemap.xml         # 站点地图(6 个 URL)
└── assets/             # 图片(全 WebP)+ favicon(5 尺寸)+ PDF 简历
```

## 关键约定(改代码前必读)

1. **全局作用域共享**:jsx 之间不用 import/export。组件定义后通过 `Object.assign(window, {...})` 或直接全局函数暴露。新增组件要沿用这个模式,否则其他文件引用不到。

2. **加载顺序有依赖**:`index.html` 里 jsx 的加载顺序是 data → components → sections → tweaks-panel → app。app.jsx 必须最后(它渲染根组件)。新增 jsx 文件要插在 app.jsx 之前。

3. **`/*EDITMODE-BEGIN*/ ... /*EDITMODE-END*/` 标记**:app.jsx 里 `TWEAK_DEFAULTS` 外面这对注释是原设计工具(Claude Design)的编辑锚点。改默认主题值可以动里面,但保留这对注释。

4. **双语机制**:全站中英双语,靠 `lang` state 切换。data.jsx 里文案通常是 `{ en: '...', zh: '...' }` 结构。加新文案要同时给两种语言。

5. **图片必须是 WebP**:所有图已优化为 WebP。新增图片先转 WebP 再放 assets/,并在 data.jsx 里用相对路径 `assets/xxx.webp` 引用。非首屏 `<img>` 加 `loading="lazy"`,首屏关键图加 `fetchpriority="high"`。

6. **SEO/GEO 数据在 index.html 的 `<head>`**:包含 title、meta description(中英双语)、Open Graph、Twitter Card、两段 JSON-LD(Person + WebSite)。改孙董的身份/头衔/组织信息要同步更新 JSON-LD。注意:结构化数据里避免用 Schema.org `Event` 类型(Google 校验极严),用 `CreativeWork` 代替。

## 部署流程(已全自动)

```bash
git add .
git commit -m "描述改动"
git push
```

- 推送到 `main` 分支后,**Cloudflare Pages 自动部署**,约 30 秒-2 分钟全球生效。
- **不要在 Cloudflare 网页点 "Retry" 按钮**——它会重新部署最旧的 commit,导致回退。要重新部署就 push 新 commit(可用 `git commit --allow-empty -m "redeploy"`)。
- 部署无构建步骤:Cloudflare 直接把文件发布到 CDN。

## 基础设施

- **域名**:jeffreysuns.com(在 Cloudflare Registrar 注册,DNS 也在 Cloudflare)
- **托管**:Cloudflare Pages(项目名 jeffreysuns),全球 CDN + 自动 HTTPS
- **代码**:GitHub `SunnyEnzoWang/jeffreysuns`(public)
- **成本**:除域名年费外全免费

## 本地预览

因为是纯静态 + 浏览器转译,直接开本地服务器即可(不能用 file:// 直接打开,jsx 的 CORS 会报错):

```bash
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 常见任务速查

| 想做的事 | 动哪个文件 |
|---|---|
| 改文案 / 作品信息 | `data.jsx` |
| 改页面结构 / 区块顺序 | `sections.jsx`、`app.jsx` |
| 改样式 / 配色 / 字体 | `styles.css`(或 app.jsx 里 TWEAK_DEFAULTS 改默认主题) |
| 加 / 换图片 | 转 WebP → `assets/` → 在 `data.jsx` 引用 |
| 改 SEO / 分享预览 / 结构化数据 | `index.html` 的 `<head>` |
| 加交互组件 | `components.jsx`(记得全局暴露) |
| 换 favicon | 替换 `assets/favicon-*.png` 和 `favicon.ico` |

## 未来规划(来自项目交接)

- **中期**:计划加「观众留言」功能(在作品下方留言互动)。这会把纯静态网站升级为带后端的应用,推荐用 Cloudflare 全家桶:Pages Functions + D1 数据库 + Cloudflare Access 登录。详见 PROJECT_HANDOVER.md。
- 保持「国际访客优先」定位:默认英文,但 SEO 元数据保留中英双语。
