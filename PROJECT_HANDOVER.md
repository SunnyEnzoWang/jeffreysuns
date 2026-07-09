# Jeffrey Sun 个人网站 — 项目交接指南

> 本文档记录 jeffreysuns.com 的完整背景、架构决策、部署历史与未来规划。
> 如果你是 Claude Code / AI 助手,请优先读根目录的 `CLAUDE.md`(更精简、面向操作)。
> 本文档面向人类协作者,提供「为什么这样做」的完整脉络。

---

## 一、项目是什么

**孙建华(Jeffrey Sun)** 的个人作品集网站。孙董在业界被称为「帽子哥 / Hat Brother」,是富美集团(Foremost Group)创始人,同时是雕塑家、作家、收藏家,被誉为帽饰文化领军人物。

网站定位:孙董面向**国际客户、艺术圈、商业伙伴、媒体**的官方数字名片与作品集。

- **线上地址**:https://jeffreysuns.com
- **临时地址**:https://jeffreysuns.pages.dev(Cloudflare 默认域名,国内访问可能不稳)
- **代码仓库**:https://github.com/SunnyEnzoWang/jeffreysuns

网站内容分区:About(关于)、Books(著作)、Works(雕塑作品)、Philosophy(哲学)、Art(艺术特写)、Photo(摄影)、Industry(产业)、Contact(联系)。全站中英双语。

---

## 二、技术架构(以及为什么这么选)

### 核心特征:零构建静态网站

这个项目最重要的一点:**它没有构建步骤**。

- React 通过 CDN 引入,不是 npm 安装
- `.jsx` 文件靠 **Babel Standalone 在浏览器里实时转译**
- 没有 `package.json`、`node_modules`、webpack、vite
- 部署就是把文件原样丢到 CDN,Cloudflare 不做任何编译

**为什么这样选**:
- 网站源自 Claude Design 生成的原型,天然是这种「单文件夹、开箱即跑」的形态
- 对一个作品集网站,这种架构足够了:维护简单、部署极快、没有依赖地狱
- 代价:浏览器要多加载一个 Babel 运行时(约 300 KB),首屏有极短暂的转译延迟——对作品集场景可接受

**什么时候该重构**:如果未来要加复杂功能(留言、用户系统、大量动态数据),届时可以迁移到 Vite/Next.js 正规构建。但在那之前,不要为了「更规范」而引入构建步骤——会把简单问题复杂化。

### 文件职责

| 文件 | 职责 |
|---|---|
| `index.html` | 入口。`<head>` 放 SEO/favicon/字体/JSON-LD;`<body>` 按顺序加载 5 个 jsx |
| `data.jsx` | 所有内容(文案、作品、图片路径)。**改内容主要在这里** |
| `components.jsx` | 可复用组件:Lightbox、Marquee、ScrollProgress、useReveal Hook 等 |
| `sections.jsx` | 各页面区块组件:Hero、About、Books、Works、Philosophy、Feature、Photography、Industry、Contact |
| `app.jsx` | 主 App 组件 + 渲染入口。含导航、滚动监听、区块高亮、主题面板 |
| `tweaks-panel.jsx` | 主题调试面板 + `useTweaks` Hook。**app.jsx 依赖它,勿删** |
| `styles.css` | 全部样式。用 CSS 变量(`--accent`、`--serif`)做主题 |
| `robots.txt` | 爬虫规则,显式允许搜索引擎 + AI 爬虫 |
| `sitemap.xml` | 站点地图 |
| `assets/` | 图片(WebP)、favicon(5 尺寸)、PDF 简历 |

### 关键技术约定

1. **无模块系统**:jsx 之间不用 import/export,全靠全局作用域。组件定义后用 `Object.assign(window, {...})` 暴露给其他文件。
2. **加载顺序**:data → components → sections → tweaks-panel → app(app 必须最后,它渲染根)。
3. **双语**:文案多为 `{ en, zh }` 结构,靠 `lang` state 切换。
4. **主题变量**:`--accent`(强调色)、`--serif`(标题字体)通过 JS 动态设置到 `:root`。

---

## 三、部署与基础设施

### 架构图

```
本地修改 → git push → GitHub(main 分支)
                         ↓ webhook 自动触发
                    Cloudflare Pages 构建
                         ↓(无构建步骤,直接发布)
                    全球 CDN(300+ 节点)
                         ↓
                    https://jeffreysuns.com
```

### 各环节

- **域名**:jeffreysuns.com,在 **Cloudflare Registrar** 注册。DNS 也托管在 Cloudflare,所以绑定子域、加记录都是即时生效,无需改 nameserver。
- **代码托管**:GitHub `SunnyEnzoWang/jeffreysuns`(账号 wcx930@gmail.com,public 仓库)。
- **网站托管**:Cloudflare Pages,项目名 `jeffreysuns`。自动 HTTPS、全球 CDN、自动部署。
- **成本**:Cloudflare Pages 免费(无限带宽/请求),GitHub public 免费,唯一花费是域名年费。

### 部署命令

```bash
git add .
git commit -m "描述你的改动"
git push
```

推送后 Cloudflare 自动部署,30 秒-2 分钟生效。

### ⚠️ 部署避坑(踩过的坑)

1. **不要点 Cloudflare 的 "Retry deployment"**:它会重新部署**列表里选中的那次旧 commit**,而不是最新代码,会导致线上回退到旧版本。要重新触发部署,就 push 一个新 commit:
   ```bash
   git commit --allow-empty -m "trigger redeploy"
   git push
   ```

2. **Git 授权范围**:Cloudflare Pages 通过 GitHub App 访问仓库。如果 Cloudflare 顶部提示 "disconnected from Git",去 GitHub → Settings → Applications → Cloudflare Pages → 确认 `jeffreysuns` 在授权仓库列表里(Repository access)。

3. **国内 git push 网络**:在中国大陆推送需要代理。本机 Clash 的混合端口是 **33210**(非默认 7890)。如遇网络错误:
   ```bash
   git config --global http.proxy http://127.0.0.1:33210
   git config --global https.proxy http://127.0.0.1:33210
   ```
   push 完可选择性清除:`git config --global --unset http.proxy`

4. **macOS 解压丢失隐藏文件**:系统自带解压会丢掉 `.gitignore` 这种点开头文件。如果丢了,手动在终端创建。

---

## 四、SEO 与 GEO(搜索引擎 + AI 可发现性)

### 已完成的配置(都在 index.html 的 `<head>`)

**SEO(传统搜索引擎)**:
- `<title>`:`Jeffrey Sun · 孙建华 — Hat Brother`(英文优先,国际化)
- meta description / keywords:中英双语,兼顾两种语言搜索
- canonical URL:防止重复收录
- Open Graph + Twitter Card:社交平台分享时显示标题、描述、头像预览
- `robots.txt` + `sitemap.xml`:主动引导爬虫

**GEO(让 AI 能引用孙董)**:
- robots.txt 显式允许 ClaudeBot、GPTBot、PerplexityBot、Google-Extended 等
- JSON-LD `Person` schema:声明孙董的 5 个别名、11 个身份头衔、14 个知识领域、创办的组织(富美集团/富美帽饰博物馆/920 中国帽子节)、获得的荣誉
- JSON-LD `WebSite` schema

### 已提交的搜索引擎

- **Google Search Console**:已验证(DNS TXT 记录方式)、已提交 sitemap、已请求主页收录
- **Bing Webmaster Tools**:已添加(同时覆盖 ChatGPT/Perplexity 等用 Bing 索引的 AI)
- **百度**:未做。原因:域名未在中国大陆 ICP 备案 + 服务器不在境内,百度对这类站点不友好。当前决定放弃百度,靠社交平台(微信/小红书)传播。

### 结构化数据注意事项

- **不要用 Schema.org `Event` 类型**:Google 对 Event 的校验极严(必须有 location、ISO 8601 格式的 startDate 等),缺字段会报 "invalid item"。「920 中国帽子节」已改用 `CreativeWork` 类型规避。
- 改孙董身份信息时,记得同步更新 JSON-LD,保持数据一致。

### 收录时间线(参考)

| 时间 | 状态 |
|---|---|
| 提交后 1-3 天 | 主页可被 Google/Bing 搜到 |
| 1-2 周 | 「Jeffrey Sun」「Hat Brother」等词可搜到 |
| 1-3 个月 | 「孙建华」「帽子哥」等竞争词获得自然排名 |

**维护建议**:每周花 5 分钟看 Google Search Console 的 Pages(收录情况)、Performance(搜索词与点击)、以及有无 Validation 错误。

---

## 五、已做过的优化(部署时的工作)

| 项目 | 结果 |
|---|---|
| 项目体积 | 60.7 MB → 9.1 MB(↓ 85%) |
| 文件数量 | 60+ → 27 |
| 图片体积 | 约 14 MB → 1.9 MB(↓ 86%) |
| 图片格式 | 17 张 PNG/JPG 全部转 WebP |
| 冗余清理 | 删除 uploads/ scraps/(46 MB 无用素材) |
| 加载优化 | 非首屏图 lazy loading,首屏图 fetchpriority=high |
| Favicon | 孙董头像,5 个尺寸(浏览器/iOS/Android/PWA) |
| SEO/GEO | 完整元数据 + 结构化数据 |

---

## 六、未来规划

### 短期(维护)
- 观察 Search Console 数据,关注搜索词与收录进度
- 内容更新随时通过 git push 上线

### 中期:观众留言功能(已规划)

目标:让访客在孙董的雕塑、摄影作品下方留言互动。

这一步会把「纯静态展示网站」升级为「带后端数据库的应用」。推荐技术路线(全 Cloudflare 生态,与现有架构无缝衔接):

- **前端**:继续现有 React(或届时重构为 Vite)
- **后端**:Cloudflare Pages Functions(Serverless 函数)
- **数据库**:Cloudflare D1(SQLite,免费 5 GB,存留言足够)
- **图片/附件**:Cloudflare R2(如需要)
- **登录/防刷**:Cloudflare Access 或 Turnstile(防机器人)

选这套的理由:全部在同一个 Cloudflare 账号下,不用跨平台拼凑,免费额度充足,Claude Code 对 Cloudflare 生态支持成熟。实现时建议先做最小版本(匿名留言 + 人工审核),再逐步加功能。

### 长期(战略)
- 以 jeffreysuns.com 作为孙董所有公开身份的唯一权威入口
- 名片、邮件签名、媒体采访统一引用此地址
- 社交媒体(微信/小红书/LinkedIn)个人简介均链接至此
- 逐步建立孙董在国际语境中的「数字身份资产」

---

## 七、快速上手(Claude Code 场景)

1. 克隆仓库到本地:
   ```bash
   git clone https://github.com/SunnyEnzoWang/jeffreysuns.git
   cd jeffreysuns
   ```
2. Claude Code 启动后会自动读 `CLAUDE.md`,理解项目约定。
3. 本地预览:`python3 -m http.server 8000` → 打开 http://localhost:8000
4. 改完 → `git add . && git commit -m "..." && git push` → 自动部署。

有任何架构级改动(尤其引入构建工具、加后端),先在本文档记录决策原因,方便未来回溯。
