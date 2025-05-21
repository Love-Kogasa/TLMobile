# API 文档 v2

**基础地址**: `https://api.lapis-net.top/`  
**TIP**: Content-Type也是headers的一部分，我下文是单独列出的

## 认证说明
所有需要认证的接口需在请求头中添加 `key: [你的APIKey]`

---

## 1. 获取APIKey

**Endpoint**: `/v2/key`

### 请求
- **方法**: POST
- **Content-Type**: `application/json`

**请求体参数**:
| 字段  | 类型   | 必填 | 说明           |
|-------|--------|------|----------------|
| email | string | 是   | 注册使用的邮箱 |

**示例请求体**:
```json
{
  "email": "user@example.com"
}
```

### 响应
**成功响应示例**:
```json
{
  "status": "success"
}
```

---

## 2. 上传Mod

**Endpoint**: `/v2/mod`

### 请求
- **方法**: POST
- **Content-Type**: `application/json`
- **Headers**:
  - `key: [你的APIKey]`

**请求体参数**:
| 字段  | 类型   | 必填 | 说明                                                                 |
|-------|--------|------|----------------------------------------------------------------------|
| email | string | 是   | 注册使用的邮箱                                                      |
| data  | object | 是   | Mod数据对象，格式参考[Mod数据规范](https://tlm.lapis-net.top/data/mods.json) |

**示例请求体**:
```json
{
  "email": "user@example.com",
  "data": {
    /* Mod数据对象 */
  }
}
```

### 响应
**成功响应示例**:
```json
{
  "status": "success",
  "hash": "abc123def456",
  "response": null
}
```

**字段说明**:
- `hash`: 该Mod的唯一标识符（创建后不会变更）
- `response`: 错误时为错误信息，成功时为null

---

## 3. 更新Mod

**Endpoint**: `/v2/uploadMod`

### 请求
- **方法**: POST
- **Content-Type**: `application/json`
- **Headers**:
  - `key: [你的APIKey]`

**请求体参数**:
| 字段  | 类型   | 必填 | 说明                                                                 |
|-------|--------|------|----------------------------------------------------------------------|
| email | string | 是   | 注册使用的邮箱                                                      |
| data  | object | 是   | 更新后的Mod数据对象                                                 |
| hash  | string | 是   | 要更新的Mod的唯一标识符                                             |

**示例请求体**:
```json
{
  "email": "user@example.com",
  "data": {
    /* 更新后的Mod数据对象 */
  },
  "hash": "abc123def456"
}
```

### 响应
**成功响应示例**:
```json
{
  "status": "success",
  "response": null
}
```

### 特殊说明
如需删除Mod：
1. 将Mod数据中的 `engine` 字段值设为 `"disable"`
2. 联系开发者手动删除（目前未实现自动删除功能）

---

## 数据规范
- Mod数据格式请参考: [Mod数据实例](https://tlm.lapis-net.top/data/mods.json)

