# 上海市文旅知识图谱可视化

本项目建立了一个知识图谱，包含 30000+实体和 3000+关系。

并基于知识图谱开发了问答机器人和 3D 可视化

# Usage

启动项目

```
pnpm i && pnpm dev
```

进入：localhost:5174/node

# 基于 KBQA 的解析式知识问答流程

## 意图分类

地理位置：  在哪、在什么地方、在什么位置

询问价格：多少钱、要多少、怎么卖

周边信息：附近、周围、周边

询问评分：评分是多少、多少分

开放时间：开放时间、什么时候开、什么时候关、什么时候闭园

## 标签识别

识别出实体、属性、关系，即**槽位识别。**

例如，给定问句：**东方明珠**的**门票价格**是多少？提取出**景区实体“东方明珠”、属性类型“门票价格”**

## 条件体和目标体识别

条件体：答案搜索过程中需要进行匹配的条件，如某个实体应该满足的属性值或关系类型。即**意图槽填充**

目标体：具体需要返回的数据。

本人主要采用**基于问题模板**的识别方法，即对目标实体条件体和目标体进行符号化，通过符号化所在索引位置
直接进行相应的取值。

例如，在文旅知识图谱问答中，在识别出景区名称、门票价格、地理位置等标签后，可自定义模板为：

“景区门票价格是多少”“景区在哪里”

## 查询语句生成

基于识别出的意图，伪代码如下：

地理位置：  在哪、在什么地方、在什么位置

询问价格：多少钱、要多少、怎么卖

周边信息：附近、周围、周边

询问评分：评分是多少、多少分

开放时间：开放时间、什么时候开、什么时候关、什么时候闭园

    	# 问地点
    if intention == 'where':
      if entity == '景区':
        cypher = ''
      elif entity == '酒店':
        cypher = ''
      elif entity == '美食':
        cypher = ''

    	# 问价格
    elif intention == 'price':
      if entity == '景区':
        cypher = ''
      elif entity == '酒店':
        cypher = ''
      elif entity == '美食':
        cypher = ''

       # 问周边
    elif intention == 'nearby':
      if entity == '景区':
        cypher = ''
      elif entity == '酒店':
        cypher = ''
      elif entity == '美食':
        cypher = ''

​

# 文旅知识图谱设计

## 实体类型

| 实体类型 | 中文含义 | 举例                                                             |
| -------- | -------- | ---------------------------------------------------------------- |
| scenic   | 景区     | 东方明珠；上海迪士尼；上海金茂大厦                               |
| hotel    | 酒店     | 艾扉酒店(上海浦东大道歇浦路地铁站店)；维也纳酒店(上海浦东机场店) |
| food     | 美食     | 渝大狮老火锅；百果园 PAGODA                                      |

## 实体关系类型

| 关系类型 | 中文含义 | 举例                             |
| -------- | -------- | -------------------------------- |
| nearby   | 附近     | <东方明珠，附近，上海野生动物园> |

we

## 实体属性类型

| 属性类型        | 中文含义     | 举例                                                                                                                                           |
| --------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| position        | 位置         | 上海市浦东新区陆家嘴世纪大道 1 号                                                                                                              |
| price           | 价格         | 成人 190 元（遇上上海旅游节首周、中国旅游日，门票半价）                                                                                        |
| score           | 评分         | 4.5                                                                                                                                            |
| scenic_name     | 景区名称     | 上海迪士尼                                                                                                                                     |
| hotel_name      | 酒店名称     | 维也纳酒店（上海浦东机场店）                                                                                                                   |
| food_name       | 美食名称     | 百果园 PAGODA                                                                                                                                  |
| scenic_image    | 景区图片     | [https://dimg04.c-ctrip.com/images/010691200097uy8rk36FE_C_220_140.jpg](https://dimg04.c-ctrip.com/images/010691200097uy8rk36FE_C_220_140.jpg) |
| scenic_level    | 景点级别     | AAAAA                                                                                                                                          |
| scenic_opentime | 景区开放时间 | 11:00 ～ 21:00(20:00  停止入场)                                                                                                                |

## 问句意图设计

地理位置：  在哪、在什么地方、在什么位置

询问价格：多少钱、要多少、怎么卖

周边信息：附近、周围、周边

询问评分：评分是多少、多少分

开放时间：开放时间、什么时候开、什么时候关、什么时候闭园

| 问句类型  | 中文含义     | 问句举例                                   |
| --------- | ------------ | ------------------------------------------ |
| location  | 地理位置     | 东方明珠在什么地方？                       |
| price     | 价格         | 维也纳酒店（上海浦东机场店）住一晚多少钱？ |
| score     | 评分         | 渝大狮老火锅好吃吗？                       |
| open_time | 景区开放时间 | 上海迪士尼什么时候闭园？                   |
| nearby    | 周边信息     | 广富林遗迹周边有什么好吃的？               |