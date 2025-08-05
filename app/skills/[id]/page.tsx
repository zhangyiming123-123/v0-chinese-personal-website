"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, TrendingUp, Target, Award, BookOpen, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// 技能详细数据
const skillsData = {
  "2": {
    id: "2",
    title: "产品策略",
    subtitle: "AI产品的战略规划与市场洞察",
    category: "核心技能",
    level: "专家级",
    experience: "3年AI产品管理经验",
    description:
      "擅长制定AI产品的长期战略规划，具备敏锐的市场洞察力和用户需求分析能力。能够将复杂的技术概念转化为清晰的产品策略，推动产品从概念到市场成功。",
    coreCompetencies: [
      "市场分析与竞品研究",
      "用户需求挖掘与分析",
      "产品路线图规划",
      "商业模式设计",
      "跨部门协作与沟通",
      "数据驱动决策",
    ],
    keyAchievements: [
      {
        title: "制定了公司AI产品线战略",
        description: "主导制定了覆盖3年的AI产品发展战略，明确了5个核心产品方向，为公司AI业务发展奠定了基础。",
        impact: "指导了8个产品项目的立项和执行，累计创造营收2000万元",
      },
      {
        title: "主导产品从0到1的完整流程",
        description: "独立负责智能机器人导航系统从市场调研、需求分析到产品上线的全流程管理。",
        impact: "产品成功上线并获得50+客户认可，首年营收达到1200万元",
      },
      {
        title: "建立了数据驱动的产品决策体系",
        description: "设计并实施了完整的产品数据分析框架，建立了从用户行为到商业指标的全链路数据体系。",
        impact: "产品决策准确率提升40%，产品迭代效率提升60%",
      },
    ],
    methodologies: [
      {
        name: "精益创业方法论",
        description: "运用MVP、快速验证等方法，降低产品开发风险",
        application: "在AI对话系统项目中，通过MVP快速验证核心功能，节省开发成本30%",
      },
      {
        name: "OKR目标管理",
        description: "建立清晰的目标体系，确保团队聚焦关键结果",
        application: "为产品团队制定季度OKR，团队执行效率提升50%",
      },
      {
        name: "用户故事地图",
        description: "通过用户旅程分析，识别关键痛点和机会点",
        application: "优化机器人导航系统用户体验，用户满意度从3.2提升至4.6",
      },
    ],
    tools: ["Figma", "Miro", "Notion", "Tableau", "Google Analytics", "Mixpanel", "Jira", "Confluence"],
    projects: [
      {
        name: "智能机器人导航系统",
        role: "产品策略制定",
        outcome: "成功商业化，营收1200万",
      },
      {
        name: "AI对话系统优化",
        role: "产品重构策略",
        outcome: "准确率提升至92%",
      },
      {
        name: "企业AI平台规划",
        role: "战略规划",
        outcome: "获得500万投资",
      },
    ],
    learningPath: [
      "产品管理基础理论学习",
      "AI技术原理深入理解",
      "商业分析与市场研究",
      "用户体验设计思维",
      "数据分析与决策科学",
      "团队管理与领导力",
    ],
    certifications: ["PMP项目管理认证", "Google Analytics认证", "Scrum Master认证"],
  },
  "5": {
    id: "5",
    title: "数据分析",
    subtitle: "数据驱动的产品洞察与决策",
    category: "核心技能",
    level: "高级",
    experience: "4年数据分析实战经验",
    description:
      "精通数据挖掘和分析，能够从复杂数据中提取有价值的产品洞察。擅长建立数据指标体系，通过A/B测试和统计分析为产品决策提供科学依据。",
    coreCompetencies: [
      "数据挖掘与建模",
      "统计分析与假设检验",
      "A/B测试设计与分析",
      "用户行为分析",
      "商业智能与报表",
      "机器学习算法应用",
    ],
    keyAchievements: [
      {
        title: "建立了完整的产品数据指标体系",
        description: "设计了覆盖用户获取、激活、留存、变现的全链路数据指标体系，包含50+核心指标。",
        impact: "帮助团队快速识别产品问题，决策效率提升70%",
      },
      {
        title: "通过数据分析优化产品转化率30%",
        description: "深入分析用户行为数据，识别转化漏斗中的关键问题，制定针对性优化方案。",
        impact: "产品整体转化率从12%提升至15.6%，月活用户增长25%",
      },
      {
        title: "设计了多个A/B测试框架",
        description: "建立了标准化的A/B测试流程，包括实验设计、样本计算、结果分析等完整方法论。",
        impact: "累计执行50+次A/B测试，产品优化成功率达到85%",
      },
    ],
    technicalSkills: [
      {
        category: "编程语言",
        skills: ["Python", "SQL", "R", "JavaScript"],
        proficiency: "精通",
      },
      {
        category: "数据工具",
        skills: ["Tableau", "Power BI", "Google Analytics", "Mixpanel"],
        proficiency: "精通",
      },
      {
        category: "机器学习",
        skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
        proficiency: "熟练",
      },
      {
        category: "数据库",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        proficiency: "熟练",
      },
    ],
    analysisFrameworks: [
      {
        name: "AARRR海盗指标",
        description: "用户生命周期分析框架",
        application: "分析用户从获取到变现的完整旅程，识别关键优化点",
      },
      {
        name: "RFM用户分析",
        description: "基于消费行为的用户分群方法",
        application: "将用户分为8个群体，制定差异化运营策略",
      },
      {
        name: "漏斗分析",
        description: "转化路径分析方法",
        application: "优化产品注册流程，转化率提升40%",
      },
    ],
    projects: [
      {
        name: "用户行为分析平台",
        description: "构建实时用户行为分析系统",
        technologies: ["Python", "Kafka", "ClickHouse", "Grafana"],
        outcome: "支撑日均1000万事件分析",
      },
      {
        name: "智能推荐系统优化",
        description: "基于协同过滤的推荐算法优化",
        technologies: ["Python", "Spark", "TensorFlow"],
        outcome: "推荐点击率提升35%",
      },
    ],
    learningResources: [
      "《深入浅出数据分析》",
      "《Python数据科学手册》",
      "《统计学习方法》",
      "Coursera机器学习课程",
      "Kaggle竞赛实践",
    ],
  },
}

export default function SkillDetailPage() {
  const params = useParams()
  const skillId = params.id as string
  const skill = skillsData[skillId as keyof typeof skillsData]

  if (!skill) {
    return (
      <div className="min-h-screen bg-[#0C0E1A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">技能未找到</h1>
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
            <span>技能详情</span> / <span className="text-[#00FFD0]">{skill.title}</span>
          </div>
        </div>

        {/* 技能头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-[#00FFD0]" />
                <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                  {skill.category}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Outfit']">{skill.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{skill.subtitle}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00FFD0]" />
                  <span>水平: {skill.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#00FFD0]" />
                  <span>{skill.experience}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">{skill.description}</p>
        </motion.div>

        {/* 主要内容 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主要内容区 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 核心能力 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#00FFD0]" />
                    核心能力
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {skill.coreCompetencies.map((competency, index) => (
                      <div key={index} className="bg-[#0C0E1A]/50 rounded-lg p-4">
                        <p className="text-gray-300 flex items-center gap-2">
                          <span className="text-[#00FFD0] text-sm">▸</span>
                          {competency}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 主要成就 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-[#00FFD0]" />
                    主要成就
                  </h2>
                  <div className="space-y-6">
                    {skill.keyAchievements.map((achievement, index) => (
                      <div key={index} className="border-l-2 border-[#00FFD0] pl-6">
                        <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 mb-3">{achievement.description}</p>
                        <div className="bg-[#0C0E1A]/50 rounded-lg p-3">
                          <p className="text-[#00FFD0] text-sm font-medium">影响与成果</p>
                          <p className="text-gray-300 text-sm">{achievement.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 方法论/技术技能 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-[#00FFD0]" />
                    {skill.methodologies ? "方法论与框架" : "技术技能"}
                  </h2>

                  {skill.methodologies ? (
                    <div className="space-y-6">
                      {skill.methodologies.map((methodology, index) => (
                        <div key={index} className="bg-[#0C0E1A]/30 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{methodology.name}</h3>
                          <p className="text-gray-300 mb-3">{methodology.description}</p>
                          <div className="bg-[#00FFD0]/10 rounded-lg p-3">
                            <p className="text-[#00FFD0] text-sm font-medium">实际应用</p>
                            <p className="text-gray-300 text-sm">{methodology.application}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {skill.technicalSkills?.map((category, index) => (
                        <div key={index} className="bg-[#0C0E1A]/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                            <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                              {category.proficiency}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="bg-[#00FFD0]/20 text-gray-300">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 相关项目 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#00FFD0]" />
                    相关项目
                  </h3>
                  <div className="space-y-4">
                    {skill.projects.map((project, index) => (
                      <div key={index} className="bg-[#0C0E1A]/50 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-1">{project.name}</h4>
                        <p className="text-[#00FFD0] text-sm mb-2">{project.role || project.description}</p>
                        <p className="text-gray-300 text-xs">{project.outcome}</p>
                        {project.technologies && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-[#00FFD0]/30 text-[#00FFD0] text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 工具与认证 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">工具与认证</h3>

                  {skill.tools && (
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">常用工具</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="bg-[#00FFD0]/20 text-gray-300">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {skill.certifications && (
                    <div>
                      <h4 className="text-white font-medium mb-3">专业认证</h4>
                      <ul className="space-y-2">
                        {skill.certifications.map((cert, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                            <span className="text-[#00FFD0] text-xs">✓</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* 学习资源 */}
            {skill.learningResources && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-[#00FFD0]" />
                      学习资源
                    </h3>
                    <ul className="space-y-2">
                      {skill.learningResources.map((resource, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00FFD0] mt-1 text-xs">📚</span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
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
