# qisehua-worktap

面向公益机构的 AI 信息管理工作台。

以个人和组织为主体节点，通过关系连接形成主体网络，支持 Excel/聊天记录上传、AI 提取、去重匹配、人工审核入库与主体画像展示。

## 技术栈

- 前端：React + TypeScript + Vite
- 后端：Python + FastAPI
- 数据库：PostgreSQL
- AI：模型 API 结构化信息提取

## 目录结构

```
qisehua-worktap/
├── frontend/          # React 前端
│   ├── src/
│   │   ├── api/       # 接口封装
│   │   ├── components/# 通用组件
│   │   ├── pages/     # 页面
│   │   ├── types/     # TS 类型定义
│   │   └── utils/     # 工具函数
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/           # FastAPI 后端
│   ├── app/
│   │   ├── api/       # 路由层
│   │   ├── core/      # 配置
│   │   ├── models/    # SQLAlchemy 模型
│   │   ├── schemas/   # Pydantic 模型
│   │   ├── services/  # 业务逻辑
│   │   ├── db/        # 数据库连接
│   │   └── main.py
│   └── requirements.txt
└── docs/              # 设计文档
    └── P0-系统设计方案.md
```

## 快速开始

### 前端

```bash
cd frontend
npm install
npm run dev
```

### 后端

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 设计文档

详见 [docs/P0-系统设计方案.md](./docs/P0-系统设计方案.md)
