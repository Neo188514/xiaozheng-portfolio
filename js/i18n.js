// i18n - 中英文切换
(function() {
  'use strict';

  const translations = {
    // 侧边栏
    'sidebar.greeting': { zh: '👋 你好！', en: '👋 Hello!' },
    'sidebar.intro': { zh: '我是郑思瑜，一名测试工程师。', en: "I'm Zheng Siyu, a Test Engineer." },
    'sidebar.focus': { zh: '软件工程专业，专注于软件质量保障。', en: 'Software Engineering major, focused on software quality assurance.' },
    'sidebar.passion': { zh: '热爱用严谨的态度保障产品质量。', en: 'Passionate about ensuring product quality with rigorous standards.' },
    'nav.home': { zh: '🏠 首页', en: '🏠 Home' },
    'nav.position': { zh: '💼 职位', en: '💼 Projects' },
    'nav.about': { zh: '📖 关于', en: '📖 About' },
    'nav.contact': { zh: '📬 联系', en: '📬 Contact' },

    // 首页
    'home.title': { zh: '你好！我是郑思瑜 👋', en: "Hello! I'm Zheng Siyu 👋" },
    'home.subtitle': { zh: '测试工程师 · 软件工程学生', en: 'Test Engineer · Software Engineering Student' },
    'home.aboutTitle': { zh: '关于我', en: 'About Me' },
    'home.aboutP1': { zh: '你好！我是郑思瑜（小郑同学），阳光学院软件工程专业 2027 届应届生，专注于软件测试领域。', en: "Hello! I'm Zheng Siyu, a 2027 graduate from Yango University majoring in Software Engineering, focused on software testing." },
    'home.aboutP2': { zh: '我具备扎实的测试理论基础和实践能力，熟悉测试流程、测试用例设计与缺陷管理。具备前后端开发能力，能够从开发角度深入理解业务逻辑，设计更全面的测试场景。', en: 'I have solid testing theory foundation and practical skills, familiar with testing processes, test case design, and defect management. With front-end and back-end development capabilities, I can deeply understand business logic from a development perspective and design more comprehensive test scenarios.' },
    'home.aboutP3': { zh: '我对软件质量保障充满热情，致力于通过严谨的测试为产品质量保驾护航。', en: "I'm passionate about software quality assurance and committed to safeguarding product quality through rigorous testing." },
    'home.skillsTitle': { zh: '测试技能', en: 'Testing Skills' },
    'home.hobbiesTitle': { zh: '兴趣爱好', en: 'Hobbies' },
    'home.hobbies': { zh: '🚀 探索新技术   💻 编程学习   📖 阅读技术文档   🎮 技术小项目', en: '🚀 Exploring Tech   💻 Coding   📖 Reading Docs   🎮 Side Projects' },
    'home.contactTitle': { zh: '联系方式', en: 'Contact' },
    'home.footer': { zh: '© 2026 小郑同学 · 用 ❤️ 构建', en: '© 2026 Xiao Zheng · Built with ❤️' },
    'home.email': { zh: '邮箱', en: 'Email' },

    // 技能标签
    'skill.functional': { zh: '🧪 功能测试', en: '🧪 Functional Testing' },
    'skill.testcase': { zh: '📝 测试用例', en: '📝 Test Cases' },
    'skill.defect': { zh: '🐛 缺陷管理', en: '🐛 Defect Mgmt' },
    'skill.api': { zh: '🔍 接口测试', en: '🔍 API Testing' },
    'skill.js': { zh: '💻 JavaScript', en: '💻 JavaScript' },
    'skill.mysql': { zh: '🗄️ MySQL', en: '🗄️ MySQL' },
    'skill.devtools': { zh: '🛠️ DevTools', en: '🛠️ DevTools' },
    'skill.git': { zh: '🐙 Git', en: '🐙 Git' },

    // 关于页
    'about.title': { zh: '关于我', en: 'About Me' },
    'about.greeting': { zh: '你好！我是郑思瑜 👋', en: "Hello! I'm Zheng Siyu 👋" },
    'about.intro': { zh: '阳光学院软件工程专业 2027 届应届生，专注于软件测试领域，热爱用严谨的态度保障软件质量。', en: 'A 2027 graduate from Yango University majoring in Software Engineering, focused on software testing, passionate about ensuring software quality with rigorous standards.' },
    'about.career': { zh: '🎯 求职意向', en: '🎯 Career Objective' },
    'about.careerDetail': { zh: '意向岗位：测试工程师', en: 'Target Position: Test Engineer' },
    'about.education': { zh: '🎓 教育背景', en: '🎓 Education' },
    'about.edu1': { zh: '阳光学院 | 软件工程 | 本科 | 2023.09 - 至今', en: 'Yango University | Software Engineering | Bachelor | 2023.09 - Present' },
    'about.edu1Detail1': { zh: '学业成绩稳居年级前 15%，荣获校级三等奖学金', en: 'Ranked top 15% in academic performance, awarded university third-class scholarship' },
    'about.edu1Detail2': { zh: '主修软件测试、计算机网络、数据库原理、Web 开发等核心课程', en: 'Major in Software Testing, Computer Networks, Database Principles, Web Development and other core courses' },
    'about.edu1Detail3': { zh: '具备软件工程化测试思维，熟悉测试流程、测试用例设计与缺陷管理', en: 'Possess software engineering testing mindset, familiar with testing processes, test case design and defect management' },
    'about.skills': { zh: '💻 专业技能', en: '💻 Professional Skills' },
    'about.skillTestTheory': { zh: '功能测试、黑盒测试、白盒测试、测试用例设计、缺陷管理', en: 'Functional Testing, Black-box Testing, White-box Testing, Test Case Design, Defect Management' },
    'about.skillTestDoc': { zh: '测试计划、测试用例、测试报告、缺陷报告', en: 'Test Plan, Test Cases, Test Report, Defect Report' },
    'about.skillDB': { zh: 'MySQL、SQL 语句', en: 'MySQL, SQL' },
    'about.skillTools': { zh: 'Postman、JMeter（接口测试）、Chrome DevTools（开发者工具）', en: 'Postman, JMeter (API Testing), Chrome DevTools' },
    'about.skillDefect': { zh: '缺陷跟踪与管理', en: 'Defect Tracking & Management' },
    'about.skillDev': { zh: 'HTML5、CSS3、JavaScript、Node.js、Python 基础', en: 'HTML5, CSS3, JavaScript, Node.js, Python Basics' },
    'about.skillVCS': { zh: 'Git、SVN', en: 'Git, SVN' },
    'about.skillOS': { zh: 'Windows、Linux 基础命令', en: 'Windows, Linux Basic Commands' },
    'about.projects': { zh: '🚀 项目开发经验', en: '🚀 Project Experience' },
    'about.project1Title': { zh: '智慧三农电商平台 | 全栈开发 | 2026.02 - 2026.05', en: 'Smart Agriculture E-commerce Platform | Full-stack Dev | 2026.02 - 2026.05' },
    'about.project1D1': { zh: '独立负责前后端全栈开发，完成农产品商城、购物车、订单、农技资讯、惠农政策等核心模块', en: 'Independently responsible for full-stack development, completing core modules including agricultural product mall, shopping cart, orders, agricultural news, and policies' },
    'about.project1D2': { zh: '前端基于 HTML5 + CSS3 + JavaScript 实现 30+ 页面开发，包含响应式适配、商品交易交互、登录鉴权', en: 'Front-end built with HTML5 + CSS3 + JavaScript for 30+ pages, including responsive design, e-commerce interactions, and authentication' },
    'about.project1D3': { zh: '后端基于 Node.js + JSON Server 搭建轻量服务，设计商品、订单、用户等数据模型', en: 'Back-end built with Node.js + JSON Server, designing data models for products, orders, and users' },
    'about.project1D4': { zh: '开发 RESTful 接口实现数据增删改查，独立完成前后端联调与本地部署', en: 'Developed RESTful APIs for CRUD operations, independently completed front-end and back-end integration and local deployment' },
    'about.project1D5': { zh: '作为项目开发人员，在开发过程中同步进行自测，能够从用户角度发现并修复问题', en: 'As the developer, performed self-testing during development, able to discover and fix issues from a user perspective' },
    'about.project2Title': { zh: '个人作品集网站 | 全栈开发 | 2025.08 - 2025.12', en: 'Personal Portfolio Website | Full-stack Dev | 2025.08 - 2025.12' },
    'about.project2D1': { zh: '基于 Hugo 静态网站生成器搭建，核心展示个人技术栈与项目经验', en: 'Built with Hugo static site generator, showcasing personal tech stack and project experience' },
    'about.project2D2': { zh: '使用 HTML/CSS/JavaScript 实现响应式布局，适配 PC 与移动端', en: 'Implemented responsive layout with HTML/CSS/JavaScript, compatible with PC and mobile devices' },
    'about.project2D3': { zh: '开发中英切换功能，通过 GitHub Pages 完成部署上线', en: 'Developed Chinese/English language switching feature, deployed via GitHub Pages' },
    'about.project2D4': { zh: '作为项目开发者，对网站各功能模块进行充分自测，确保页面正常运行', en: 'As the developer, performed thorough self-testing on all functional modules to ensure proper operation' },
    'about.testExp': { zh: '🧪 测试项目经验', en: '🧪 Testing Experience' },
    'about.test1Title': { zh: '智慧三农电商平台测试 | 测试工程师 | 2026.02 - 2026.05', en: 'Smart Agriculture Platform Testing | Test Engineer | 2026.02 - 2026.05' },
    'about.test1D1': { zh: '参与三农综合服务平台的全流程测试工作，独立负责多个核心模块的测试任务', en: 'Participated in full-cycle testing of the agricultural service platform, independently responsible for testing multiple core modules' },
    'about.test1D2': { zh: '根据需求文档编写测试用例 200+，覆盖农资商城、购物车、订单管理、用户中心等核心模块', en: 'Wrote 200+ test cases based on requirements, covering agricultural mall, shopping cart, order management, user center and other core modules' },
    'about.test1D3': { zh: '执行功能测试，记录并跟踪缺陷生命周期，使用缺陷管理工具进行缺陷跟踪', en: 'Executed functional testing, recorded and tracked defect lifecycle, used defect management tools for tracking' },
    'about.test1D4': { zh: '设计不同场景的测试用例，包括正常流程、异常流程、边界值等', en: 'Designed test cases for different scenarios, including normal flow, abnormal flow, and boundary values' },
    'about.test1D5': { zh: '与开发人员紧密协作，推动缺陷修复，编写测试报告总结测试结果', en: 'Collaborated closely with developers, drove defect resolution, wrote test reports summarizing results' },
    'about.test1D6': { zh: '项目开发经验助力测试：作为项目开发者，熟悉业务逻辑与代码实现，能够更深入地设计测试用例', en: 'Development experience aids testing: As the developer, familiar with business logic and code implementation, able to design more in-depth test cases' },
    'about.test2Title': { zh: '个人作品集网站测试 | 独立测试 | 2025.08 - 2025.12', en: 'Portfolio Website Testing | Independent Tester | 2025.08 - 2025.12' },
    'about.test2D1': { zh: '对个人网站进行全面测试，包括功能测试、兼容性测试、性能测试', en: 'Conducted comprehensive testing on the personal website, including functional, compatibility, and performance testing' },
    'about.test2D2': { zh: '设计测试用例覆盖页面导航、响应式适配、跨浏览器兼容等场景', en: 'Designed test cases covering page navigation, responsive adaptation, cross-browser compatibility' },
    'about.test2D3': { zh: '使用 Postman 进行 API 接口测试，验证接口功能与数据交互正确性', en: 'Used Postman for API testing, verifying interface functionality and data interaction correctness' },
    'about.test2D4': { zh: '发现并修复兼容性问题 15+ 项，优化页面加载速度', en: 'Discovered and fixed 15+ compatibility issues, optimized page loading speed' },
    'about.campus': { zh: '🏫 校园实践', en: '🏫 Campus Activities' },
    'about.campusTitle': { zh: '阳光学院 | 副班长、体育部干事 | 2023.09 - 2024.06', en: 'Yango University | Vice Class Monitor, Sports Dept | 2023.09 - 2024.06' },
    'about.campusD1': { zh: '负责师生沟通对接与班级事务协助，具备团队协作能力', en: 'Responsible for teacher-student communication and class affairs, with teamwork skills' },
    'about.campusD2': { zh: '参与校园活动筹备执行，提升执行力与责任意识', en: 'Participated in campus event planning and execution, improving execution and responsibility' },
    'about.evaluation': { zh: '🌟 自我评价', en: '🌟 Self Assessment' },
    'about.evaluationText': { zh: '熟悉软件测试理论和方法，能够独立完成测试需求分析、测试用例设计、功能测试执行、缺陷跟踪与测试报告编写等全流程工作。掌握 MySQL、Postman、JMeter、Chrome DevTools 等测试工具，具备 HTML/CSS/JavaScript、Node.js 等开发能力，能够从开发角度深入理解业务逻辑，设计更全面、更深入的测试场景。责任心强，注重细节，对软件质量有较高要求，期待加入测试团队，为产品质量保驾护航。', en: 'Familiar with software testing theories and methods, able to independently complete the full testing process including requirement analysis, test case design, functional test execution, defect tracking, and test report writing. Proficient in testing tools such as MySQL, Postman, JMeter, and Chrome DevTools. With development skills in HTML/CSS/JavaScript and Node.js, able to deeply understand business logic from a development perspective and design more comprehensive test scenarios. Strong sense of responsibility, detail-oriented, with high standards for software quality. Looking forward to joining a testing team to safeguard product quality.' },
    'about.contactMe': { zh: '📧 联系我', en: '📧 Contact Me' },
    'about.phone': { zh: '📱 手机：', en: '📱 Phone: ' },
    'about.motto': { zh: '严谨测试，保障质量，持续学习。', en: 'Rigorous testing, quality assurance, continuous learning.' },

    // 联系页
    'contact.title': { zh: '联系我', en: 'Contact Me' },
    'contact.desc': { zh: '如果你有任何问题、合作意向或只是想打个招呼，欢迎联系我！', en: "If you have any questions, collaboration ideas, or just want to say hi, feel free to reach out!" },
    'contact.resumeTitle': { zh: '📄 下载简历', en: '📄 Download Resume' },
    'contact.resumeBtn': { zh: '📥 下载我的简历（PDF）', en: '📥 Download My Resume (PDF)' },
    'contact.closing': { zh: '期待收到你的消息！', en: 'Looking forward to hearing from you!' },

    // 职位页
    'position.title': { zh: '🧪 测试项目经验', en: '🧪 Testing Experience' },
    'position.project1Name': { zh: '🛒 智慧三农电商平台', en: '🛒 Smart Agriculture Platform' },
    'position.project1Role': { zh: '全栈开发 + 测试工程师 | 2026.02 - 2026.05', en: 'Full-stack Dev + Test Engineer | 2026.02 - 2026.05' },
    'position.project1Desc': { zh: '智慧三农是一个面向农户、农资商家及消费者的农业综合服务电商平台。该项目由我独立完成前后端全栈开发，并承担项目测试工作，覆盖了从需求分析、设计开发到测试上线的完整流程。', en: 'Smart Agriculture is a comprehensive agricultural service e-commerce platform for farmers, agricultural merchants, and consumers. I independently completed the full-stack development and testing, covering the entire process from requirement analysis, design and development to testing and deployment.' },
    'position.overview': { zh: '📌 项目概述', en: '📌 Project Overview' },
    'position.overviewText': { zh: '平台采用经典的电商网站结构（顶部导航 + Banner + 分类入口 + 商品推荐），视觉清晰，功能分区明确，以绿色为主色调契合农业主题。', en: 'The platform adopts a classic e-commerce structure (top navigation + banner + category entries + product recommendations), with clear visuals, well-defined functional zones, and a green color scheme matching the agricultural theme.' },
    'position.devDuty': { zh: '💻 开发职责', en: '💻 Development Duties' },
    'position.devFrontend': { zh: '前端开发', en: 'Front-end Dev' },
    'position.devFrontendDetail': { zh: '基于 HTML5 + CSS3 + JavaScript 实现 30+ 页面，包含响应式适配、商品交易交互、登录鉴权', en: 'Built 30+ pages with HTML5 + CSS3 + JavaScript, including responsive design, e-commerce interactions, and authentication' },
    'position.devBackend': { zh: '后端开发', en: 'Back-end Dev' },
    'position.devBackendDetail': { zh: '基于 Node.js + JSON Server 搭建轻量服务，设计商品、订单、用户等数据模型', en: 'Built lightweight service with Node.js + JSON Server, designed data models for products, orders, and users' },
    'position.devAPI': { zh: '接口开发', en: 'API Dev' },
    'position.devAPIDetail': { zh: '开发 RESTful 接口实现数据增删改查，独立完成前后端联调与本地部署', en: 'Developed RESTful APIs for CRUD operations, independently completed integration and local deployment' },
    'position.devCore': { zh: '核心功能', en: 'Core Features' },
    'position.devCoreDetail': { zh: '农产品商城、购物车、订单管理、农技资讯、惠农政策等核心模块', en: 'Agricultural mall, shopping cart, order management, agricultural news, benefit policies and other core modules' },
    'position.testDuty': { zh: '🧪 测试职责', en: '🧪 Testing Duties' },
    'position.testAnalysis': { zh: '需求分析', en: 'Requirement Analysis' },
    'position.testAnalysisDetail': { zh: '参与需求评审，从测试角度评估需求合理性，识别测试重点与风险点', en: 'Participated in requirement reviews, evaluated requirement rationality from a testing perspective, identified testing priorities and risk points' },
    'position.testPlan': { zh: '测试计划', en: 'Test Planning' },
    'position.testPlanDetail': { zh: '制定测试计划，安排测试进度，分配测试任务', en: 'Created test plans, scheduled testing progress, assigned testing tasks' },
    'position.testDesign': { zh: '用例设计', en: 'Test Case Design' },
    'position.testDesignDetail': { zh: '编写测试用例 200+，覆盖农资商城、购物车、订单管理、用户中心等核心模块', en: 'Wrote 200+ test cases, covering agricultural mall, shopping cart, order management, user center modules' },
    'position.testExec': { zh: '功能测试', en: 'Functional Testing' },
    'position.testExecDetail': { zh: '执行测试用例，跟踪缺陷生命周期，使用缺陷管理工具进行缺陷管理', en: 'Executed test cases, tracked defect lifecycle, used defect management tools for defect tracking' },
    'position.testReport': { zh: '测试报告', en: 'Test Reporting' },
    'position.testReportDetail': { zh: '编写测试报告，总结测试结果与质量指标', en: 'Wrote test reports, summarizing test results and quality metrics' },
    'position.techStack': { zh: '🛠️ 技术栈', en: '🛠️ Tech Stack' },
    'position.techFrontend': { zh: '前端：HTML5、CSS3、JavaScript、响应式布局', en: 'Front-end: HTML5, CSS3, JavaScript, Responsive Layout' },
    'position.techBackend': { zh: '后端：Node.js、JSON Server', en: 'Back-end: Node.js, JSON Server' },
    'position.techAPI': { zh: '接口：RESTful API、Token 鉴权', en: 'API: RESTful API, Token Auth' },
    'position.techTest': { zh: '测试：Postman、Chrome DevTools、MySQL', en: 'Testing: Postman, Chrome DevTools, MySQL' },
    'position.devHelpTest': { zh: '🧠 开发经验助力测试', en: '🧠 Dev Experience Helps Testing' },
    'position.devHelpText': { zh: '作为项目的独立开发者，我具备独特优势：', en: 'As the sole developer of the project, I have unique advantages:' },
    'position.devHelp1': { zh: '熟悉业务逻辑：深入理解每个功能模块的业务流程和实现细节', en: 'Familiar with business logic: Deep understanding of each module\'s business flow and implementation details' },
    'position.devHelp2': { zh: '熟悉代码实现：能够从代码层面分析问题根源，提高缺陷定位效率', en: 'Familiar with code: Able to analyze root causes from code level, improving defect localization efficiency' },
    'position.devHelp3': { zh: '覆盖代码路径：结合开发思维，设计更全面的测试用例，覆盖更多代码路径', en: 'Code path coverage: Combined with development mindset, design more comprehensive test cases covering more code paths' },
    'position.devHelp4': { zh: '前后端联调：熟悉接口规范与数据流转，能够进行端到端测试', en: 'Front-end/back-end integration: Familiar with API specifications and data flow, able to perform end-to-end testing' },
    'position.testMethods': { zh: '测试用例设计方法', en: 'Test Case Design Methods' },
    'position.method1': { zh: '等价类划分：将输入数据划分为若干等价类，从每个类中选取少量代表性数据进行测试', en: 'Equivalence Partitioning: Divide input data into equivalence classes, select representative data from each class for testing' },
    'position.method2': { zh: '边界值分析：针对输入范围的边界值进行重点测试，如数量上下限、价格边界', en: 'Boundary Value Analysis: Focus on testing boundary values of input ranges, such as quantity limits and price boundaries' },
    'position.method3': { zh: '场景法：根据用户实际操作场景设计测试用例，覆盖完整业务流程', en: 'Scenario Testing: Design test cases based on actual user scenarios, covering complete business flows' },
    'position.method4': { zh: '错误猜测法：基于经验预测可能出现的错误，针对性设计测试用例', en: 'Error Guessing: Predict potential errors based on experience, design targeted test cases' },
    'position.testScenarios': { zh: '测试场景设计', en: 'Test Scenario Design' },
    'position.scenario1': { zh: '正常流程测试：验证功能在正常情况下的正确性', en: 'Normal Flow Testing: Verify functionality under normal conditions' },
    'position.scenario2': { zh: '异常流程测试：验证错误处理、异常输入的容错性', en: 'Abnormal Flow Testing: Verify error handling and fault tolerance for abnormal inputs' },
    'position.scenario3': { zh: '边界值测试：针对临界值的处理逻辑', en: 'Boundary Value Testing: Logic for handling critical values' },
    'position.scenario4': { zh: '兼容性测试：在不同浏览器、设备上验证页面表现', en: 'Compatibility Testing: Verify page performance across different browsers and devices' },
    'position.scenario5': { zh: '接口测试：使用 Postman 验证接口功能与数据交互正确性', en: 'API Testing: Use Postman to verify API functionality and data interaction correctness' },
    'position.scenario6': { zh: '易用性测试：从用户角度评估操作流程是否友好', en: 'Usability Testing: Evaluate user-friendliness of operation flows from a user perspective' },
    'position.defectMgmt': { zh: '缺陷管理', en: 'Defect Management' },
    'position.defect1': { zh: '使用缺陷管理工具进行缺陷跟踪，记录缺陷标题、复现步骤、预期结果、实际结果', en: 'Use defect management tools for tracking, recording defect title, reproduction steps, expected and actual results' },
    'position.defect2': { zh: '跟踪缺陷修复进度，确保缺陷闭环率 100%', en: 'Track defect resolution progress, ensuring 100% defect closure rate' },
    'position.defect3': { zh: '编写测试报告，包含测试覆盖率、缺陷统计、质量评估等内容', en: 'Write test reports including test coverage, defect statistics, and quality assessment' },
    'position.project2Name': { zh: '🌐 个人作品集网站', en: '🌐 Personal Portfolio Website' },
    'position.project2Role': { zh: '全栈开发 + 独立测试 | 2025.08 - 2025.12', en: 'Full-stack Dev + Independent Tester | 2025.08 - 2025.12' },
    'position.project2Desc': { zh: '基于 Hugo 静态网站生成器搭建的个人作品集网站，由我独立完成开发与测试工作。', en: 'A personal portfolio website built with Hugo static site generator, independently developed and tested by me.' },
    'position.project2Tech': { zh: '技术选型：选用 Hugo（hugo-creative-portfolio-theme）作为基础框架', en: 'Tech Selection: Chose Hugo (hugo-creative-portfolio-theme) as the base framework' },
    'position.project2Frontend': { zh: '前端实现：使用 HTML/CSS/JavaScript 实现响应式布局，适配 PC 与移动端', en: 'Front-end: Implemented responsive layout with HTML/CSS/JavaScript, compatible with PC and mobile' },
    'position.project2I18n': { zh: '功能开发：开发中英切换功能，提升国际化体验', en: 'Feature Dev: Developed Chinese/English switching for internationalization' },
    'position.project2Deploy': { zh: '部署上线：通过 GitHub Pages 完成部署上线', en: 'Deployment: Deployed and published via GitHub Pages' },
    'position.project2FuncTest': { zh: '功能测试', en: 'Functional Testing' },
    'position.project2FuncTestDetail': { zh: '页面导航、链接跳转、表单提交、响应式适配', en: 'Page navigation, link redirects, form submission, responsive adaptation' },
    'position.project2CompatTest': { zh: '兼容性测试', en: 'Compatibility Testing' },
    'position.project2CompatTestDetail': { zh: 'Chrome、Firefox、Safari、Edge 浏览器兼容', en: 'Chrome, Firefox, Safari, Edge browser compatibility' },
    'position.project2PerfTest': { zh: '性能测试', en: 'Performance Testing' },
    'position.project2PerfTestDetail': { zh: '页面加载速度、资源加载优化', en: 'Page loading speed, resource loading optimization' },
    'position.project2APITest': { zh: '接口测试', en: 'API Testing' },
    'position.project2APITestDetail': { zh: '使用 Postman 测试 API 接口，确保数据交互正确性', en: 'Used Postman for API testing, ensuring data interaction correctness' },
    'position.project2Result1': { zh: '发现并修复兼容性问题 15+', en: 'Discovered and fixed 15+ compatibility issues' },
    'position.project2Result2': { zh: '优化页面加载速度，首屏加载时间降低 30%', en: 'Optimized page loading speed, reducing first-screen load time by 30%' },
    'position.project2Result3': { zh: '编写完整测试文档，形成测试知识库', en: 'Wrote comprehensive test documentation, forming a testing knowledge base' },
    'position.skillStack': { zh: '🛠️ 测试技能栈', en: '🛠️ Testing Skill Stack' },
    'position.skillTestTheory': { zh: '测试理论：功能测试 · 黑盒测试 · 白盒测试 · 测试用例设计 · 缺陷管理', en: 'Testing Theory: Functional Testing · Black-box Testing · White-box Testing · Test Case Design · Defect Management' },
    'position.skillTestDoc': { zh: '测试文档：测试计划 · 测试用例 · 测试报告 · 缺陷报告', en: 'Test Docs: Test Plan · Test Cases · Test Report · Defect Report' },
    'position.skillDB': { zh: '数据库：MySQL · SQL 语句', en: 'Database: MySQL · SQL' },
    'position.skillTools': { zh: '工具使用：Postman · JMeter · Chrome DevTools', en: 'Tools: Postman · JMeter · Chrome DevTools' },
    'position.skillDefect': { zh: '缺陷管理：缺陷跟踪与管理', en: 'Defect Mgmt: Defect Tracking & Management' },
    'position.skillDev': { zh: '开发能力：HTML5 · CSS3 · JavaScript · Node.js · Python 基础', en: 'Development: HTML5 · CSS3 · JavaScript · Node.js · Python Basics' },
    'position.skillVCS': { zh: '版本控制：Git · SVN', en: 'Version Control: Git · SVN' },
    'position.methodTitle': { zh: '📊 测试方法论', en: '📊 Testing Methodology' },
    'position.methodEqClass': { zh: '等价类划分', en: 'Equivalence Partitioning' },
    'position.methodEqClassU': { zh: '输入验证、数据分类测试', en: 'Input validation, data classification testing' },
    'position.methodBVA': { zh: '边界值分析', en: 'Boundary Value Analysis' },
    'position.methodBVAU': { zh: '数值范围、分页边界、数组索引', en: 'Numeric ranges, pagination boundaries, array indices' },
    'position.methodCE': { zh: '因果图法', en: 'Cause-Effect Graphing' },
    'position.methodCEU': { zh: '多条件组合逻辑测试', en: 'Multi-condition combinatorial logic testing' },
    'position.methodScene': { zh: '场景法', en: 'Scenario Testing' },
    'position.methodSceneU': { zh: '业务流程、用户操作路径', en: 'Business flows, user operation paths' },
    'position.methodError': { zh: '错误猜测法', en: 'Error Guessing' },
    'position.methodErrorU': { zh: '基于经验的针对性测试', en: 'Experience-based targeted testing' },
    'position.methodOrtho': { zh: '正交试验法', en: 'Orthogonal Testing' },
    'position.methodOrthoU': { zh: '参数组合、配置项测试', en: 'Parameter combination, configuration testing' },
    'position.backHome': { zh: '← 返回首页', en: '← Back to Home' },

    // 表格列名
    'col.module': { zh: '模块', en: 'Module' },
    'col.work': { zh: '工作内容', en: 'Description' },
    'col.stage': { zh: '阶段', en: 'Stage' },
    'col.type': { zh: '测试类型', en: 'Test Type' },
    'col.method': { zh: '方法', en: 'Method' },
    'col.scenario': { zh: '应用场景', en: 'Use Case' },
  };

  let currentLang = localStorage.getItem('lang') || 'zh';

  function t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[currentLang] || entry['zh'] || key;
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateToggleButton();
  }

  function toggleLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  }

  function updateToggleButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = currentLang === 'zh' ? 'EN' : '中';
      btn.title = currentLang === 'zh' ? 'Switch to English' : '切换到中文';
    }
    const sidebarBtn = document.getElementById('lang-toggle-sidebar');
    if (sidebarBtn) {
      sidebarBtn.textContent = currentLang === 'zh' ? 'EN' : '中';
      sidebarBtn.title = currentLang === 'zh' ? 'Switch to English' : '切换到中文';
    }
  }

  function applyTranslations() {
    // Apply data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      const text = t(key);
      if (text !== key) {
        el.textContent = text;
      }
    });

    // Apply data-i18n-html (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-html');
      const text = t(key);
      if (text !== key) {
        el.innerHTML = text;
      }
    });

    // Update page title
    document.title = currentLang === 'zh' ? '小郑同学' : "Xiao Zheng's Portfolio";
  }

  // Initialize on DOM ready
  function init() {
    applyTranslations();
    updateToggleButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose to global
  window.i18n = {
    t: t,
    setLang: setLang,
    toggleLang: toggleLang,
    getCurrentLang: function() { return currentLang; }
  };
})();
