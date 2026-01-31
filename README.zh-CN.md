# BlockSuite

[English](./README.md) | 简体中文

<p align="center">
  <picture style="width: 500px">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/toeverything/blocksuite/main/assets/logo-and-name-h.svg" />
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/toeverything/blocksuite/main/assets/logo-and-name-h-white.svg" />
    <img src="https://raw.githubusercontent.com/toeverything/blocksuite/main/assets/logo-and-name-h.svg" width="500" alt="BlockSuite 标志与名称" />
  </picture>
</p>

<!--
[![Codecov](https://codecov.io/gh/toeverything/blocksuite/branch/main/graph/badge.svg?token=T86JYCDSMN)](https://codecov.io/gh/toeverything/blocksuite)
-->

[![Checks Status](https://img.shields.io/github/checks-status/toeverything/blocksuite/main)](https://github.com/toeverything/blocksuite/actions?query=branch%3Amain)
[![Issues Closed](https://img.shields.io/github/issues-closed/toeverything/blocksuite?color=6880ff)](https://github.com/toeverything/blocksuite/issues?q=is%3Aissue+is%3Aclosed)
[![NPM Latest Release](https://img.shields.io/npm/v/@blocksuite/store.svg?maxAge=300&color=6880ff)](./packages/framework/store/package.json)
[![NPM Canary Release](https://img.shields.io/npm/v/@blocksuite/presets/canary?color=6880ff)](https://github.com/toeverything/blocksuite/actions/workflows/canary-release.yml?query=branch%3Amain)
[![Open in StackBlitz](https://img.shields.io/badge/open%20in-StackBlitz-black)](https://stackblitz.com/github/toeverything/blocksuite)
[![Join Discord](https://img.shields.io/discord/959027316334407691)](https://discord.gg/9vwSWmYYcZ)
[![Gurubase](https://img.shields.io/badge/Gurubase-Ask%20BlockSuite%20Guru-006BFF)](https://gurubase.io/g/blocksuite)

---

## 概览

> _真正认真对待编辑器的人，应该打造自己的框架。_

BlockSuite 是一个用于构建编辑器与协作应用的工具包。它独立实现了一整套内容编辑基础设施、UI 组件与编辑器。

你可以将 BlockSuite 视为用于构建各类编辑器的 [UI 组件库](https://blocksuite.io/components/overview.html)，其运行时基于一个极简的原生（vanilla）框架。借助 BlockSuite，你可以：

- 复用多个 BlockSuite 官方编辑器：
  - [**`PageEditor`**](https://blocksuite.io/components/editors/page-editor.html)：完整的块式文档编辑器，提供丰富的自定义与扩展能力。
  - [**`EdgelessEditor`**](https://blocksuite.io/components/editors/edgeless-editor.html)：图形编辑器，可选择启用基于画布的渲染，同时与 `PageEditor` 共享同样强大的富文本能力。
- 使用丰富的 [BlockSuite 组件](https://blocksuite.io/components/overview.html) 与 [示例](./examples/) 来定制、扩展与增强这些编辑器。所有 BlockSuite 组件（包括编辑器）都是原生 Web Components，因此与框架无关，并且能轻松与主流框架互操作。
- 或者，基于底层的原生框架从零开始构建新编辑器。

> 🚧 BlockSuite 目前仍处于早期阶段，组件与扩展能力仍在持续打磨中。欢迎持续关注、试用，并分享你的反馈！

## 动机

BlockSuite 源自知识库产品 [AFFiNE](https://github.com/toeverything/AFFiNE)。它的设计目标包括：

- **支持多模态的可编辑内容**：当我们把知识视为单一事实来源（single source of truth）时，要构建其不同的视图形态（如文本、幻灯片、思维导图、表格）通常仍需要多套彼此不兼容的框架。理想状态是：无论内容的呈现方式如何变化，都能有一套一致的框架为其提供支撑。
- **组织与可视化复杂知识**：现有编辑器通常聚焦于编辑单篇文档，但在处理交织引用等复杂结构时往往力不从心。这要求框架能够原生地管理跨多文档的状态。
- **面向协作而生**：实时协作常被视为可选插件，但实际上我们可以原生使用底层 CRDT 技术来管理编辑器状态，从而构建更 [清晰且更可靠的数据流](https://blocksuite.io/blog/crdt-native-data-flow.html)。

在 AFFiNE 的开发过程中，我们逐渐意识到 BlockSuite 已经不再只是内部编辑器，而是在演进为一个通用框架。因此我们选择将其开源，并独立维护。

<!-- ## 示例 -->

## 特性

使用 BlockSuite 编辑器，你可以按需复用 [AFFiNE](https://affine.pro/) 中的全部编辑能力：

[![affine-demo](./packages/docs/images/affine-demo.jpg)](https://affine.pro)

在底层，这个原生的 BlockSuite 框架支持：

- 定义 [自定义 block](https://blocksuite.io/guide/working-with-block-tree.html#defining-new-blocks) 与行内嵌入（inline embeds）。
- 增量更新、[实时协作](https://github.com/toeverything/blocksuite/blob/main/BUILDING.md#test-collaboration)，甚至基于文档的 [document streaming](https://blocksuite.io/guide/data-synchronization.html#document-streaming) 机制实现去中心化数据同步。
- 基于 [command](https://blocksuite.io/guide/command.html) 机制编写类型安全的复杂编辑逻辑（类似为文档编辑场景设计的 React hooks）。
- 基于 block 的 [snapshot](https://blocksuite.io/guide/data-synchronization.html#snapshot-api) 与 transformer 来实现文档持久化，并兼容多种第三方格式（如 Markdown、HTML）。
- 跨多文档的状态调度，以及在多个编辑器中复用同一份文档。

想要快速体验 BlockSuite，请参考 [Quick Start](https://blocksuite.io/guide/quick-start.html)，并从 `@blocksuite/presets` 中的预置编辑器开始。

## 架构

BlockSuite 与 AFFiNE 的关系类似于 [Monaco Editor](https://github.com/microsoft/monaco-editor) 与 [VSCode](https://code.visualstudio.com/) 的关系，但有一个关键区别：BlockSuite 并不是从 AFFiNE 代码库自动生成的，而是以不同的技术栈独立维护——AFFiNE 使用 React，而 BlockSuite 使用 [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)。

这种差异让 BlockSuite 基于“组件优先”的理念划定了清晰边界，从而确保：

- AFFiNE 与其它项目都可以同等地通过组件来复用并扩展 BlockSuite，不存在任何“特权”。
- 无论你使用 React 还是其它框架，BlockSuite 组件都能被轻松复用。

因此，BlockSuite 项目围绕关键 packages 进行组织，并分为两大类：无头（headless）的 [framework](https://github.com/toeverything/blocksuite/tree/main/packages/framework) 与预构建的编辑组件。

<table>
  <tr>
    <th colspan="2">Framework</th>
  </tr>
  <tr>
    <td><code>@blocksuite/store</code></td>
    <td>用于建模协作文档状态的数据层。它原生构建在 CRDT 库 <a href="https://github.com/yjs/yjs">Yjs</a> 之上，为所有 BlockSuite 文档提供内置的实时协作与时间回溯（time-travel）能力。</td>
  </tr>
  <tr>
    <td><code>@blocksuite/inline</code></td>
    <td>用于行内编辑的极简富文本组件。BlockSuite 允许将不同 block 节点内的富文本内容拆分为多个 inline 编辑器，让复杂内容更易于组合。<strong>这显著降低了实现传统富文本编辑功能所需的复杂度。</strong></td>
  </tr>
  <tr>
    <td><code>@blocksuite/block-std</code></td>
    <td>与框架无关的可编辑 block 建模库。能力覆盖 block 字段结构、事件、选择（selection）、剪贴板支持等。</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="2">Components</th>
  </tr>
  <tr>
    <td><code>@blocksuite/blocks</code></td>
    <td>用于组装预置编辑器的默认 block 实现，包含每个 block 对应的 widgets。</td>
  </tr>
  <tr>
    <td><code>@blocksuite/presets</code></td>
    <td>开箱即用的可编辑组件，包含 <i>editors</i>（<code>PageEditor</code> / <code>EdgelessEditor</code>）以及名为 <i>fragments</i> 的辅助 UI 组件（<code>CopilotPanel</code>、<code>DocTitle</code>...）。</td>
  </tr>
</table>

## 资源

- 🚚 资源
  - [Canary Playground](https://try-blocksuite.vercel.app/starter/?init)
  - [Examples](./examples/)
  - [BlockSuite in StackBlitz](https://stackblitz.com/github/toeverything/blocksuite)
  - [测试实时协作](https://github.com/toeverything/blocksuite/blob/main/BUILDING.md#test-collaboration)
  - [BlockSuite Ecosystem CI](https://github.com/toeverything/blocksuite-ecosystem-ci)
  - [基于 Vue 的 BlocksVite Editor](https://github.com/zuozijian3720/blocksvite)
- 📝 [文档](https://blocksuite.io/guide/overview.html)
- 📍 [Good First Issues](https://github.com/toeverything/blocksuite/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)
- 🎙️ [GitHub Discussions](https://github.com/toeverything/blocksuite/discussions)
- 💬 [Discord 频道](https://discord.gg/9vwSWmYYcZ)
- 🚀 [Releases](https://github.com/toeverything/blocksuite/releases)

## 构建

构建与从源码测试 BlockSuite 的方法见 [BUILDING.md](BUILDING.md)。

## 贡献

BlockSuite 接受来自 GitHub 的 Pull Request。**在开始贡献之前，请确保你已阅读并同意我们的 [Contributor License Agreement](https://github.com/toeverything/blocksuite/edit/main/.github/CLA.md)。** 你只需编辑该文件并提交一个 PR，即可表示同意。

## 许可证

[MPL 2.0](./LICENSE)
