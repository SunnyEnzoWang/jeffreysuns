# Jeffrey Sun · Personal Site

孙建华(帽子哥)个人作品集网站。

## 本地预览

直接用浏览器打开 `index.html` 即可。

或用任意静态服务器:

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署

部署在 [Cloudflare Pages](https://pages.cloudflare.com/),自定义域名 `jeffreysuns.com`。
推送到 `main` 分支后会自动部署。

## 项目结构

```
├── index.html          # 入口
├── app.jsx             # 主应用
├── sections.jsx        # 各页面区块
├── components.jsx      # 通用组件
├── data.jsx            # 内容数据
├── tweaks-panel.jsx    # 主题配置
├── styles.css          # 样式
└── assets/             # 图片与资源
```

## 图片格式

所有图片为 WebP 格式,首屏图带 `fetchpriority="high"`,其余 `loading="lazy"`。
