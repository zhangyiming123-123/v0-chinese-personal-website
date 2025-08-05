"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Calendar, User, TrendingUp, Award, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// 项目详细数据
const projectsData = {
  "1": {
    id: "1",
    title: "求职机会对比器",
    subtitle: "基于NLP的智能职位分析与决策支持系统",
    role: "AI产品经理",
    duration: "2023.06 - 2023.12",
    status: "已上线",
    team: "10人跨职能团队",
    description:
      "主导开发了基于自然语言处理的求职机会对比器，帮助求职者智能分析多个职位描述，提供个性化匹配度评估和决策建议。产品上线6个月内服务了50万+求职用户，平均决策时间缩短70%。",
    background:
      "在竞争激烈的就业市场中，求职者经常面临多个相似职位选择的困扰。传统的手动对比方式效率低下，容易遗漏关键信息，导致决策焦虑。市场急需一款能够智能分析职位信息、提供科学决策支持的产品。",
    challenges: [
      "非结构化职位描述文本的信息提取准确性",
      "多维度职位信息的标准化对比框架设计",
      "个人技能与职位要求的智能匹配算法",
      "大规模用户并发下的系统性能优化",
      "不同行业职位特征的泛化能力提升",
    ],
    solutions: [
      "构建基于BERT的职位信息抽取模型，准确识别薪资、技能、福利等关键信息",
      "设计多维度评估框架，涵盖薪酬、发展、匹配度、公司文化等核心维度",
      "开发技能匹配算法，结合用户简历和职位要求进行智能评分",
      "采用微服务架构和Redis缓存，支持高并发访问",
      "建立行业知识图谱，提升跨行业职位分析的准确性",
    ],
    myContribution: [
      "深入调研求职用户痛点，制定产品需求和功能规划",
      "设计职位对比的核心算法逻辑和评估维度",
      "协调算法、前端、后端团队的产品开发工作",
      "建立用户反馈收集机制，持续优化产品体验",
      "制定A/B测试策略，验证功能效果和用户满意度",
      "负责产品商业化策略和市场推广方案",
    ],
    results: [
      "信息提取准确率达到94.5%，覆盖薪资、技能、福利等15个核心维度",
      "用户决策时间从平均3小时缩短至50分钟，效率提升70%",
      "服务50万+求职用户，月活跃用户达到12万",
      "用户满意度达到4.7分（5分制），推荐率达到89%",
      "为公司带来800万元营收，付费转化率达到15%",
      "获得1项发明专利，在顶级会议发表2篇技术论文",
    ],
    technologies: ["自然语言处理", "BERT", "信息抽取", "推荐算法", "知识图谱", "Python", "TensorFlow", "Redis"],
    learnings: [
      "深入理解了NLP技术在垂直领域的应用挑战和解决方案",
      "掌握了复杂决策支持系统的产品设计方法论",
      "提升了数据驱动的产品优化和用户体验设计能力",
      "积累了B2C产品的用户增长和商业化经验",
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=求职机会对比器主界面",
      "/placeholder.svg?height=300&width=500&text=职位分析报告页面",
      "/placeholder.svg?height=300&width=500&text=技能匹配度评估",
    ],
    demoUrl: "https://job-comparator-demo.example.com",
    githubUrl: "https://github.com/example/job-comparator",
  },
  "4": {
    id: "4",
    title: "AI对话系统优化",
    subtitle: "企业级智能客服系统升级改造",
    role: "产品负责人",
    duration: "2023.01 - 2023.05",
    status: "已上线",
    team: "6人产品技术团队",
    description:
      "优化了企业级AI对话系统，将响应准确率从78%提升至92%。通过改进NLP算法和优化对话流程，显著提升了用户体验和业务转化率。",
    background:
      "公司现有的AI客服系统在处理复杂查询时准确率不高，用户满意度较低。随着业务规模扩大，需要一套更智能、更准确的对话系统来提升客户服务质量。",
    challenges: [
      "多轮对话的上下文理解能力不足",
      "意图识别在复杂场景下准确性低",
      "知识库更新维护成本高",
      "系统响应速度需要优化",
      "个性化推荐准确性有待提升",
    ],
    solutions: [
      "引入Transformer架构改进对话理解模型",
      "设计基于图神经网络的意图识别系统",
      "建立自动化知识库更新和质量控制流程",
      "优化模型推理架构，提升响应速度",
      "开发用户画像系统，实现个性化对话",
    ],
    myContribution: [
      "深入分析用户对话数据，识别核心痛点",
      "设计产品优化方案和技术实现路径",
      "制定A/B测试策略，验证优化效果",
      "协调算法团队进行模型优化和训练",
      "建立数据驱动的产品迭代机制",
      "负责产品上线和效果监控",
    ],
    results: [
      "对话准确率从78%提升至92%，提升幅度达18%",
      "用户满意度从3.2分提升至4.6分（5分制）",
      "系统处理效率提升40%，平均响应时间缩短至1.2秒",
      "客户续约率增长25%，流失率降低30%",
      "为公司节省人工客服成本约800万元/年",
      "获得客户好评率达到96%",
    ],
    technologies: ["NLP", "Transformer", "对话系统", "图神经网络", "A/B测试", "数据分析", "Python", "TensorFlow"],
    learnings: [
      "深化了对自然语言处理技术的理解和应用",
      "掌握了数据驱动的产品优化方法论",
      "提升了用户体验设计和产品迭代能力",
      "积累了企业级AI产品的运营经验",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    demoUrl: "https://chatbot-demo.example.com",
    githubUrl: "https://github.com/example/ai-chatbot",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0E1A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">项目未找到</h1>
          <Link href="/">
            <Button className="bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90">返回首页</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0C0E1A] relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFD0]/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFD0] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00FFD0] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#00FFD0] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* 导航 */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回主页
            </Button>
          </Link>
          <div className="text-gray-400 text-sm">
            <span>项目详情</span> / <span className="text-[#00FFD0]">{project.title}</span>
          </div>
        </div>

        {/* 项目头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Outfit']">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#00FFD0]" />
                  <span>角色: {project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#00FFD0]" />
                  <span>时长: {project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#00FFD0]" />
                  <span>状态: {project.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00FFD0]" />
                  <span>团队: {project.team}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {project.demoUrl && (
                <Button
                  className="bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90"
                  onClick={() => window.open(project.demoUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  查看演示
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 bg-transparent"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  源码
                </Button>
              )}
            </div>
          </div>

          {/* 技术标签 */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* 项目图片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - 图片 ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg border border-[#00FFD0]/30 group-hover:border-[#00FFD0] transition-colors"
                />
                <div className="absolute inset-0 bg-[#00FFD0]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 项目内容 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 项目概述 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#00FFD0]" />
                    项目概述
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  <div className="bg-[#0C0E1A]/50 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">项目背景</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.background}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 挑战与解决方案 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">挑战与解决方案</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        核心挑战
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-red-400 mt-1 text-xs">●</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00FFD0] rounded-full"></span>
                        解决方案
                      </h3>
                      <ul className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-[#00FFD0] mt-1 text-xs">●</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 我的贡献 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <User className="w-6 h-6 text-[#00FFD0]" />
                    我的贡献
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.myContribution.map((contribution, index) => (
                      <div key={index} className="bg-[#0C0E1A]/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00FFD0] mt-1 text-xs">▸</span>
                          {contribution}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 项目成果 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#00FFD0]" />
                    项目成果
                  </h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-[#00FFD0] mt-1 text-xs">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* 学习收获 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">学习收获</h3>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-yellow-400 mt-1 text-xs">💡</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* 底部导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 bg-transparent"
              >
                返回主页
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 bg-transparent"
              >
                了解更多
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
