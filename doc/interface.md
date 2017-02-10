# 接口规范

restful规范， 所有的接口无非就是增、删、查、改，对应http请求的四种method，分别为 GET（查）、POST（增）、PUT（改）、DELETE（删），
一般用不到DELETE，因为后端不会真正执行删除操作。

因此，我们将接口写成套，例如address（地址），只需要定义一个接口，四种method即可。

GET： /address/{uid}

POST: /address

PUT: /address/{uid}

DELETE: /address/{aid}

接口返回成功与否通过Http Header中的 status来判断。

# 用户接口

用户暂时采用简单的登录，不用Open Auth。

## 用户名密码登录

### 请求地址

POST /login

### 请求参数

username 用户名／建议手机号

password 密码（加密）

### 返回参数

uid 用户id

username 用户名/手机号

...


## 注册

### 请求地址

POST: /user

### 请求参数

username 用户名／手机号

password 密码（加密）

checkcode 验证码

### 返回参数

无


## 检查用户

### 请求地址

GET: /user/check

### 请求参数

username

### 返回参数

uid 用户id


## 短信验证

### 请求地址

POST: /user/checkCode

### 请求参数

uid 用户id

checkcode 验证码

### 返回参数

无


## 重置密码

### 请求地址

PUT: /user/resetPassword

### 请求参数

uid      用户id

password 密码（加密）

### 返回参数

无


## 修改密码

### 请求地址

PUT: /user/modifyPassword

### 请求参数

uid      用户id

password 旧密码（加密）

new_password 密码（加密）

### 返回参数

无


# 路线接口

## 获取起点附近路线

### 请求地址

GET: /routes

### 请求参数

uid 用户id

latitude 当前纬度

longitude 当前经度

### 返回参数

routes 路线列表


## 根据id获取路线

### 请求地址

GET: /routes/{rid}

### 请求参数

无

### 返回参数

Object route 一条路线的对象


# 地点接口

## 根据Id查找地点

### 请求地址

GET: /location/{lid}

### 请求参数

无

### 返回参数

Object location 一个地点的对象


# 问题接口

## 根据Id查找问题

### 请求地址

GET: /question/{qid}

### 请求参数

无

### 返回参数

Object question 一个问题的对象


## 回答问题

### 请求地址

GET: /question/{qid}/answer

### 请求参数

answer 答案

### 返回

isRight  是否答对了