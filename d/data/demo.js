const data = {
  title: "xxx",
  photo: "./assets/icon/me.jpg",
  subtitle: "意向岗位：xxx（2024应届）",
  info: [
    { value: "性别：男", icon: "../assets/icon/gender.svg" },
    { value: "出生年月：1999-11", icon: "../assets/icon/birth.svg" },
    { value: "政治面貌：中共党员", icon: "../assets/icon/politics.svg" },
    { value: "籍贯：湖北省武汉市", icon: "../assets/icon/native-place.svg" },
    {
      value: 'tel：<a href="tel:+8615600006332">156xxxx6332</a>',
      icon: "../assets/icon/phone.svg",
    },
    {
      value: '<a href="mailto:xxxxx@qq.com">xxxxx@qq.com</a>',
      icon: "../assets/icon/email.svg",
    },
    {
      value:
        '<a href="https://github.com/wzdong26" target="_blank">GitHub：wzdong26</a>',
      icon: "../assets/icon/github.svg",
    },
    { value: "联系地址：上海市xxxxx", icon: "../assets/icon/address.svg" },
  ],
  chapters: [
    {
      title: "教育背景",
      icon: "../assets/icon/edu.svg",
      sections: [
        {
          titles: [
            "<b>中央大学 | 硕士</b>",
            "<b>软件工程</b>",
            "2021.09-2024.06",
          ],
          fragments: [
            {
              title: "",
              content: `研究方向：xxxx、xxxx、xxxx；
              2023.03在本人所在党支部被民主评议为优秀党员；`,
            },
          ],
        },
        {
          titles: [
            "<b>中央大学 | 本科</b>",
            "<b>软件工程</b>",
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
      icon: "../assets/icon/work.svg",
      sections: [
        {
          titles: ["<b>阿里</b>", "前端开发工程师", "2023.06-2023.09"],
          fragments: [
            {
              title: "【工作描述】",
              content: `xxxxx；
              业务背景：xxxxx；
              技术栈：xxxxx；`,
            },
            {
              title: "【工作业绩】",
              content: `xxxxx；
              xxxxx；
              xxxxx；`,
            },
          ],
        },
        {
          titles: ["<b>字节</b>", "前端开发工程师", "2022.12-2023.03"],
          fragments: [
            {
              title: "【工作描述】",
              content: `xxxxx；
              技术栈：xxxxx；`,
            },
            {
              title: "【工作业绩】",
              content: `xxxxx；
              xxxxx；
              xxxxx；`,
            },
          ],
        },
      ],
    },
    {
      title: "项目经历",
      icon: "../assets/icon/proj.svg",
      sections: [
        {
          titles: ["<b>前端监控系统-字节青训营</b>", "2022.07-2022.08"],
          fragments: [
            {
              title: "【项目描述】",
              content: `xxxxx；
              xxxxx；
              技术栈： xxxxx；`,
            },
            {
              title: "【项目职责】",
              content: `xxxxx；
              xxxxx；`,
            },
          ],
        },
        {
          titles: ["<b>项目B</b>", "2022.01-2023.01"],
          fragments: [
            {
              title: "【项目描述】",
              content: `xxxxx；
              技术栈： xxxxx；`,
            },
            {
              title: "【项目职责】",
              content: `xxxxx；
  xxxxx； `,
            },
          ],
        },
      ],
    },
    {
      title: "个人作品",
      icon: "../assets/icon/contr.svg",
      sections: [
        {
          fragments: [
            {
              content: `xxxxxx;
                xxxxx`,
            },
          ],
        },
      ],
    },
    {
      title: "个人能力",
      icon: "../assets/icon/skill.svg",
      sections: [
        {
          fragments: [
            {
              content: `熟练掌握TypeScript、JavaScript、HTML、CSS；具备良好的前端编码规范；
  熟悉Vue2/3、React前端技术栈及相关技术生态的应用开发；阅读过Vue3部分源码，了解相关原理；
  掌握ThreeJs三维前端渲染库的应用开发；了解前端图形学WebGPU、WebGL、Canvas基础；
  掌握前端项目工程化，包括：Vite、Webpack构建工具的应用及相关原理、pnpm、yarn、npm依赖管理、等；
  了解服务端开发流程；掌握NodeJs、Python服务端编程；掌握数据库SQL编程；`,
            },
          ],
        },
      ],
    },
    {
      title: "自我评价",
      icon: "../assets/icon/self-desc.svg",
      sections: [
        {
          fragments: [
            {
              content: `性格沉着稳重，富有团队精神、集体荣誉感和钻研精神；
  热爱生活，爱好广泛，爱好篮球、游泳，热爱运动，热爱音乐，喜欢听歌、看电影；`,
            },
          ],
        },
      ],
    },
  ],
};
export default data;
