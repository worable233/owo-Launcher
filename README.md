# owo-Launcher

基于 Tauri + Vue3 的全新 Minecraft 启动器

> 项目还在开发中 ing 耐心等待吧

## 🏗️ 技术架构

### 前端框架
- **Vue 3** - 渐进式 JavaScript 框架，使用 Composition API
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具

### 桌面应用框架
- **Tauri 2.0** - 轻量级跨平台桌面应用框架
  - 使用 Rust 编写后端逻辑
  - 系统原生 WebView，更小的包体积
  - 更高的安全性和性能

### 核心依赖
- **LightyLauncher** - Rust Minecraft 启动器核心库

## 📦 项目结构

```
owo-Launcher/
├── src/                    # Vue3 前端源码
│   ├── assets/            # 静态资源
│   ├── components/        # Vue 组件
│   ├── views/             # 页面视图
│   ├── main.ts            # 应用入口
│   └── App.vue            # 根组件
├── src-tauri/             # Tauri 后端源码 (Rust)
│   ├── src/
│   │   ├── lib.rs         # Rust 库入口
│   │   └── main.rs        # Rust 主入口
│   ├── capabilities/      # Tauri 权限配置
│   ├── icons/             # 应用图标
│   ├── Cargo.toml         # Rust 依赖配置
│   └── tauri.conf.json    # Tauri 配置
├── public/                # 公共静态资源
├── package.json           # Node.js 依赖配置
├── vite.config.ts         # Vite 构建配置
└── tsconfig.json          # TypeScript 配置
```

## 🚀 开发环境

### 前置要求
- Node.js >= 18
- Rust >= 1.70
- pnpm / npm / yarn


## 📝 功能特性

- [ ] 多版本 Minecraft 管理
- [ ] 账户登录与管理
- [ ] 模组支持
- [ ] 整合包管理
- [ ] 自定义主题
- [ ] 实时游戏状态监控

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm tauri dev
```

### 构建生产版本
```bash
pnpm tauri build
```

## 📄 许可证
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) - Attribution-NonCommercial-ShareAlike 4.0 International

这个许可证要求：
- BY - 署名（必须注明原作者）
- NC - 非商业性使用（不得用于商业目的）
- SA - 相同方式共享（衍生作品必须使用相同许可证）