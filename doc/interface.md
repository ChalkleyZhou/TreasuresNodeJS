# 统一返回值

所有接口使用post请求, 返回类型为application/json, 请求类型也是application/json, 文件上传为multipart.

注意，所有的借口返回都必须有以下字段：

returnCode   返回代码 0表示成功 －1表示失败  其它自定义
returnDesc   返回描述 一般为错误描述
body         返回主体 除上面两个字段外 都在body中

# 用户接口

## 用户名密码登录

### 请求地址

/login

### 请求参数

username 用户名／建议手机号

password 密码（加密）

### 返回参数

uid 用户id

username 用户名/手机号

...


## 注册

### 请求地址

/register

### 请求参数

username 用户名／手机号

password 密码（加密）

checkcode 验证码

### 返回参数

无


## 检查用户

### 请求地址

/userCheck

### 请求参数

username

### 返回参数

uid 用户id


## 短信验证

### 请求地址

/checkForgotCode

### 请求参数

uid 用户id

checkcode 验证码

### 返回参数

无


## 重置密码

### 请求地址

/resetPassword

### 请求参数

uid      用户id

password 密码（加密）

### 返回参数

无
