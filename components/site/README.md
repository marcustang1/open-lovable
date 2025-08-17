# SiteCloner AI 组件文档

## 组件概览

本目录包含 SiteCloner AI 网站的所有页面组件，严格遵循现有的设计系统和技术规范。

## 组件结构

```
components/site/
├── Header.tsx          # 导航栏组件
├── HeroSection.tsx     # 主标题区域（包含URL输入）
├── Benefits.tsx        # 核心优势展示
├── Features.tsx        # 功能详细介绍
├── Testimonials.tsx    # 用户证言
├── Pricing.tsx         # 价格方案
├── Footer.tsx          # 底部信息
└── README.md          # 本文档
```

## 设计规范

### 视觉风格
- **配色方案**: 主色调橙色 (#f97316)，辅助色锌色系
- **字体系统**: Inter 字体，保持现有字号层级
- **间距系统**: 遵循 8px 网格系统
- **圆角**: 统一使用 rounded-xl (12px) 和 rounded-2xl (16px)
- **阴影**: 使用 shadow-sm, shadow-lg 等预设阴影

### 响应式设计
- **移动端优先**: 所有组件都从移动端开始设计
- **断点**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **网格系统**: 使用 Tailwind 的 grid 和 flex 布局

### 交互效果
- **Hover 状态**: 所有可交互元素都有 hover 效果
- **过渡动画**: 使用 transition-all duration-300
- **加载状态**: 按钮和表单都有加载状态处理

## 组件详细说明

### Header.tsx
- **功能**: 顶部导航栏，包含 logo、导航链接和 CTA 按钮
- **特性**: 粘性定位、背景模糊、移动端菜单
- **技术**: React Server Component

### HeroSection.tsx
- **功能**: 主标题区域，包含 URL 输入框和演示视频占位符
- **特性**: 渐变背景、网格图案、实时输入验证
- **技术**: Client Component (包含交互状态)

### Benefits.tsx
- **功能**: 展示三个核心优势
- **特性**: 卡片布局、图标动画、悬停效果
- **技术**: React Server Component

### Features.tsx
- **功能**: 详细功能介绍，每个功能包含详细列表
- **特性**: 三列网格、图标系统、特性列表
- **技术**: React Server Component

### Testimonials.tsx
- **功能**: 用户证言展示
- **特性**: 用户头像、引用样式、社会证明
- **技术**: React Server Component，图片使用 WebP 格式

### Pricing.tsx
- **功能**: 价格方案对比
- **特性**: 两列布局、特性对比、FAQ 部分
- **技术**: React Server Component

### Footer.tsx
- **功能**: 底部信息，包含链接、社交媒体、版权信息
- **特性**: 多列布局、社交图标、深色主题
- **技术**: React Server Component

## 使用方式

### 完整页面使用
```tsx
import Header from '@/components/site/Header';
import HeroSection from '@/components/site/HeroSection';
import Benefits from '@/components/site/Benefits';
import Features from '@/components/site/Features';
import Testimonials from '@/components/site/Testimonials';
import Pricing from '@/components/site/Pricing';
import Footer from '@/components/site/Footer';

export default function SiteClonerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Benefits />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
```

### 单独组件使用
```tsx
import { HeroSection } from '@/components/site/HeroSection';

export default function CustomPage() {
  return (
    <div>
      <HeroSection />
      {/* 其他内容 */}
    </div>
  );
}
```

## 自定义和扩展

### 修改配色
所有颜色都使用 Tailwind CSS 类名，可以通过修改类名来改变配色：
```tsx
// 将橙色改为蓝色
className="bg-orange-500" // 改为
className="bg-blue-500"
```

### 添加新功能
1. 在对应组件中添加新的数据项
2. 确保遵循现有的数据结构
3. 保持视觉风格一致性

### 响应式调整
使用 Tailwind 的响应式前缀：
```tsx
className="text-lg md:text-xl lg:text-2xl"
```

## 性能优化

### 图片优化
- 所有图片使用 WebP 格式
- 添加 `loading="lazy"` 属性
- 明确指定 `width` 和 `height`

### 代码分割
- 大部分组件使用 Server Components
- 只有需要交互的组件使用 Client Components

### SEO 优化
- 使用语义化 HTML 标签
- 合理的标题层级 (h1, h2, h3)
- 添加适当的 meta 标签

## 维护指南

### 代码规范
- 使用 TypeScript 严格模式
- 遵循函数式编程风格
- 保持组件单一职责

### 测试建议
- 测试响应式布局
- 验证可访问性
- 检查跨浏览器兼容性

### 更新流程
1. 修改组件代码
2. 测试所有断点
3. 验证视觉一致性
4. 更新文档