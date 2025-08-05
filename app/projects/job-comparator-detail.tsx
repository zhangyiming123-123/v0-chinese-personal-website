"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Zap, TrendingUp, Brain, Search } from "lucide-react"

// 求职机会对比器的详细功能展示组件
export function JobComparatorDetail() {
  const coreFeatures = [
    {
      icon: <Search className="w-6 h-6 text-[#00FFD0]" />,
      title: "智能信息提取",
      description: "从非结构化职位描述中自动提取薪资、技能要求、福利待遇等关键信息",
      details: ["支持多种格式的职位描述解析", "94.5%的信息提取准确率", "覆盖15个核心评估维度", "实时处理，秒级响应"],
    },
    {
      icon: <Target className="w-6 h-6 text-[#00FFD0]" />,
      title: "多维度对比分析",
      description: "建立标准化对比框架，从薪酬、发展、匹配度等多个维度进行科学评估",
      details: ["薪酬福利综合评估", "职业发展路径分析", "公司文化匹配度", "工作地点便利性评估"],
    },
    {
      icon: <Brain className="w-6 h-6 text-[#00FFD0]" />,
      title: "个人技能匹配",
      description: "基于用户简历和职位要求，智能计算技能匹配度和能力缺口",
      details: ["技能匹配度智能评分", "能力缺口可视化展示", "学习建议个性化推荐", "面试准备重点提示"],
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00FFD0]" />,
      title: "智能决策建议",
      description: "结合用户偏好和职位特征，提供个性化的职业选择建议",
      details: ["综合评分排序推荐", "决策风险评估提醒", "职业发展路径建议", "薪资谈判策略指导"],
    },
    {
      icon: <Users className="w-6 h-6 text-[#00FFD0]" />,
      title: "面试问题生成",
      description: "根据职位要求和用户背景，智能生成针对性的面试问题和回答建议",
      details: ["个性化面试问题库", "回答思路和要点提示", "行为面试场景模拟", "技术面试重点梳理"],
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00FFD0]" />,
      title: "市场趋势分析",
      description: "提供行业薪资水平、技能需求趋势等市场洞察，辅助决策",
      details: ["行业薪资水平对比", "技能需求热度分析", "职位竞争激烈程度", "未来发展趋势预测"],
    },
  ]

  const userJourney = [
    {
      step: "1",
      title: "上传职位信息",
      description: "用户上传多个职位描述或Offer信息",
      details: "支持文本粘贴、文件上传、链接导入等多种方式",
    },
    {
      step: "2",
      title: "信息智能解析",
      description: "系统自动提取和结构化职位关键信息",
      details: "NLP算法识别薪资、技能、福利、公司等核心要素",
    },
    {
      step: "3",
      title: "个人匹配分析",
      description: "结合用户简历进行技能匹配度评估",
      details: "计算匹配分数，识别能力缺口和优势技能",
    },
    {
      step: "4",
      title: "多维度对比",
      description: "生成可视化的职位对比报告",
      details: "雷达图、评分表等多种形式展示对比结果",
    },
    {
      step: "5",
      title: "决策建议输出",
      description: "提供个性化的职业选择建议",
      details: "综合评分、风险提示、发展建议等决策支持",
    },
    {
      step: "6",
      title: "面试准备支持",
      description: "生成针对性的面试问题和准备建议",
      details: "个性化问题库、回答要点、注意事项等",
    },
  ]

  return (
    <div className="space-y-8">
      {/* 核心功能展示 */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">核心功能特性</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0C0E1A]/50 rounded-lg p-6 hover:bg-[#0C0E1A]/70 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-[#00FFD0] mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 用户使用流程 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">用户使用流程</h2>
            <div className="space-y-6">
              {userJourney.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00FFD0] rounded-full flex items-center justify-center">
                    <span className="text-[#0C0E1A] font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-2">{step.description}</p>
                    <p className="text-[#00FFD0] text-sm">{step.details}</p>
                  </div>
                  {index < userJourney.length - 1 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-6 bg-[#00FFD0]/30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 技术亮点 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">技术创新亮点</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[#0C0E1A]/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">智能信息抽取引擎</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    基于BERT预训练模型，结合领域特定的微调数据，实现对职位描述的精准信息提取。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      BERT
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      NER
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      正则表达式
                    </Badge>
                  </div>
                </div>

                <div className="bg-[#0C0E1A]/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">多维度评估算法</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    设计层次化评估框架，结合用户偏好权重，生成个性化的职位评分和排序。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      AHP
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      加权评分
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      归一化
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0C0E1A]/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">技能匹配算法</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    构建技能知识图谱，使用语义相似度计算和技能层次匹配，精准评估匹配度。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      知识图谱
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      Word2Vec
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      余弦相似度
                    </Badge>
                  </div>
                </div>

                <div className="bg-[#0C0E1A]/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">智能问题生成</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    基于职位要求和用户背景，使用模板匹配和生成式AI，创建个性化面试问题。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      GPT
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      模板引擎
                    </Badge>
                    <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                      个性化
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
