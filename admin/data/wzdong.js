const data = {
  docTitle: "2024-王志东-前端开发",
  title: "王志东",
  photo: "./assets/img/me.jpg",
  subtitle: "意向岗位：前端开发（2024应届）",
  info: [
    { field: "性别", value: "男", icon: "" },
    { field: "出生年月", value: "1999-11", icon: "" },
    { field: "政治面貌", value: "中共党员", icon: "" },
    { field: "籍贯", value: "湖北省武汉市", icon: "" },
    {
      field: "电话",
      value: '<a href="tel:+8615623856332">15623856332</a>',
      icon: "",
    },
    {
      field: "邮箱",
      value: '<a href="mailto:wzdong.26@qq.com">wzdong.26@qq.com</a>',
      icon: "",
    },
    {
      field: "GitHub",
      value:
        '<a href="https://github.com/wzdong26" target="_blank">wzdong26</a>',
      icon: "",
    },
    { field: "联系地址", value: "上海市闵行区虹梅南路5800号", icon: "" },
  ],
  chapters: [
    {
      title: "教育背景",
      icon: "./assets/img/edu.svg",
      sections: [
        {
          titles: [
            "<b>华东师范大学 | 硕士</b>",
            "<b>地图学与地理信息系统</b>",
            "2021.09-2024.06",
          ],
          fragments: [
            {
              title: "",
              content: `研究方向：WebGIS 开发、高精地图前端开发、前端三维引擎渲染；
2023.03在本人所在党支部被民主评议为优秀党员；2022.08获第四届字节跳动青训营“万码奔腾奖”，结题项目评选第一；`,
            },
          ],
        },
        {
          titles: [
            "<b>武汉科技大学 | 本科</b>",
            "<b>人文地理与城乡规划</b>",
            "2017.09-2021.06",
          ],
          fragments: [
            {
              content: `绩点排名专业前10%；CET-6；校级优秀学生干部、优秀共青团员；
2018.09-2019.09担任本专业团支部书记、学院学习部副部长；2018年度获校级优秀学生二等奖学金；`,
            },
          ],
        },
      ],
    },
    {
      title: "实习经历",
      icon: "./assets/img/work.svg",
      sections: [
        {
          titles: [
            "<b>阿里本地生活</b>",
            "前端开发 - 物流技术部",
            "2023.06-2023.09",
          ],
          fragments: [
            {
              title: "【工作描述】",
              content: `参与蜂鸟物流前端中台项目研发，参与项目包括：GridWise作战地图、物流地图孵化器、优策实验平台；
业务背景：物流履约全链路数据聚合时空分析、数据驱动态的物流空间分析模型、履约分流调度实验配置分析；
技术栈：react + mobx + ts + ...；`,
            },
            {
              title: "【工作业绩】",
              content: `独立负责GridWise项目的后期功能迭代和优化，开发完成骑手画像、物流检索指标分享等业务功能；完成首屏秒开优化提升、地图动画卡顿优化、等；
负责物流地图孵化器核心模块-图层配置模块的开发，实现支持多类空间可视化图层表达，完成包括图层颜色分类器、字段选择器、泛地理格式兼容图层等多种通用组件物料的产出；
参与优策项目的后期功能迭代，开发完成实验配置、轮转计划监控、实验地图监控等业务功能；`,
            },
          ],
        },
        {
          titles: [
            "<b>顺丰丰图科技</b>",
            "前端开发 - 平台研发部",
            "2021.02-2021.07",
          ],
          fragments: [
            {
              title: "【工作描述】",
              content: `参与二维码门牌地址采集平台的项目研发，应用于门牌采集数据的审核管理的web端后台管理系统；
项目前端技术栈主要包括：vue2 + vuex + elementUI + openLayers + ...；`,
            },
            {
              title: "【工作业绩】",
              content: `参与web端后管平台页面功能开发工作，开发完成数据采集项列表管理、用户信息管理、列表地图联动等业务功能；
参与解决前端大数据量列表渲染优化、地图大量点数据渲染优化等相关问题；`,
            },
          ],
        },
      ],
    },
    {
      title: "项目经历",
      icon: "./assets/img/proj.svg",
      sections: [
        {
          titles: [
            "<b>前端监控系统-字节青训营</b>",
            "前端监控sdk研发",
            "2022.07-2022.08",
          ],
          fragments: [
            {
              title: "【项目描述】",
              content: `该项目在第四届字节青训营的四十余个小组（共两千余人）中结题评选第一名；
项目主要包含前端监控sdk、监控可视化平台以及测试应用（仿掘金平台）三部分，采用 monorepo 分包管理；
技术栈： lerna + vue3 + vite + ts + pinia + echarts(前端) , nestJs + ts + mysql + apifox + docker(后端)；`,
            },
            {
              title: "【项目职责】",
              content: `负责监控sdk方案设计与开发、方案文档与成果文档的撰写、以及部分监控可视化平台页面的开发等相关工作；
监控sdk实现了异常监控、性能监控和用户行为监控三个部分；完成了异常监控完整链路的构建；构建RAIL性能指标监控大盘；并实现路由跳转、点击等用户行为监控；`,
            },
          ],
        },
        {
          titles: [
            "<b>普陀山古树名木数字化系统</b>",
            "webapp前端开发",
            "2022.01-2023.01",
          ],
          fragments: [
            {
              title: "【项目描述】",
              content: `项目已上线投入普陀山公共事业中心正常使用，用于日常古树巡护管理工作；
技术栈： vue3 + vite + ts + pinia + vantUI + amap + openLayers + ...；`,
            },
            {
              title: "【项目职责】",
              content: `负责巡护管理应用模块的项目完整开发链路，包括：原型设计、技术选型、项目搭建、实施部署、等；
实现了列表管理、古树地图、巡护填报、前端扫码等业务功能，并产出独立功能组件可迁移至同类应用场景；基于ts封装实现了多类组合式api函数以及常用directive；
基于用户角色权限管理对项目结构进行了一次ts重构，设计实现了一种动态页面结构并支持迁移应用于多种移动端应用场景；`,
            },
          ],
        },
      ],
    },
    {
      title: "个人作品",
      icon: "./assets/img/contr.svg",
      sections: [
        {
          fragments: [
            {
              content: `<b>webgpu-samples</b> 基于chrome最新支持的WebGPU API实现的简单Web三维示例，作品在线地址: https://wzdong26.github.io/webgpu-samples/
<b>@wzdong/idb</b> 基于 Promise 封装的 IndexedDB 读写 api ，介绍文档: https://juejin.cn/post/7166856136748957704
<b>@wzdong/geo</b> 基于geolocation.watchPosition 封装的前端持续定位 api ，用于复杂前端位置服务应用的定位功能，介绍文档: https://github.com/wzdong26/-wzdong/blob/main/packages/geo/md/doc.md#1-watchgeolocation
<b>@wzdong/utils</b> 一些 ts 工具 api ，如防抖节流、事件订阅器、惰性单例函数包装器等，介绍文档: https://github.com/wzdong26/-wzdong/blob/main/packages/utils/md/doc.md`,
            },
          ],
        },
      ],
    },
    {
      title: "个人能力",
      icon: "./assets/img/skill.svg",
      sections: [
        {
          fragments: [
            {
              content: `熟练掌握TypeScript、JavaScript、HTML、CSS；具备良好的前端编码规范；
熟悉Vue2/3、React前端技术栈及相关技术生态的应用开发；阅读过Vue3部分源码，了解相关原理；
掌握ThreeJs三维前端渲染库的应用开发；了解前端图形学WebGPU、WebGL、Canvas基础；
掌握前端项目工程化，包括：Vite、Webpack构建工具的应用及相关原理、pnpm、yarn、npm依赖管理、等；
掌握OpenLayers、Leaflet等开源前端地图库、Cesium三维数字地球库的应用开发；
掌握了解二三维标准地理数据格式和开放标准地图服务；掌握并实践完成过地图开发相关的性能优化；
了解服务端开发流程；掌握NodeJs、Python服务端编程；掌握数据库SQL编程；`,
            },
          ],
        },
      ],
    },
    {
      title: "自我评价",
      icon: "./assets/img/self-desc.svg",
      sections: [
        {
          fragments: [
            {
              content: `性格沉着稳重，富有团队精神、集体荣誉感和钻研精神；
目标导向强，工作效率高，擅长逻辑推导、归纳总结，抽象思维能力强;
自主学习能力强，有较强的适应能力和抗压能力；热爱技术、对新技术有较敏感的洞察力；
热爱生活，爱好广泛，爱好篮球、游泳，热爱运动，热爱音乐，喜欢听歌、看电影；`,
            },
          ],
        },
      ],
    },
  ],
};
export default data;
