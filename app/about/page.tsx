"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, Target, Lightbulb, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0C0E1A] relative">
      {/* 背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFD0]/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFD0] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00FFD0] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#00FFD0] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* 返回按钮 */}
        <Link href="/">
          <Button
            variant="outline"
            className="mb-8 border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回主页
          </Button>
        </Link>

        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Outfit']">关于我</h1>
          <p className="text-xl text-gray-300">一个对具身智能充满热情的实践者</p>
        </motion.div>

        {/* 个人故事 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-[#00FFD0]" />
                <h2 className="text-2xl font-bold text-white">我的故事</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-[#00FFD0] mb-4">从数字媒体艺术到AI产品经理</h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  我叫张熠铭，是西安邮电大学数字媒体艺术专业2026年的毕业生。你可能会好奇，一个数字媒体专业的学生为什么会选择AI产品经理这条路？在很多人眼里，这两个领域似乎相去甚远，但对我而言，这正是我的优势所在。
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  我深信，优秀的AI产品不只是冰冷的技术，它更需要洞察人性的温度和打动人心的创意。这正是我四年数字媒体学习的核心：如何通过视觉、交互和叙事，创造出能与用户产生情感共鸣的产品体验。
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  在校期间，我不仅掌握了设计工具，更在多个项目中担任了运营和组织的角色。我曾带领团队为校园活动策划并落地了一系列创意推广方案，从早期的概念构思、中期的内容制作，到最终的数据复盘，我始终冲在一线。我们设计的AIGC短片，在短短两天内获得了超过万次的点击量，而我们的创意宣传片也成为当年的"爆款"。
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  这些经历让我深刻理解，一个好的创意只有通过精细化的运营才能发挥最大的价值。我一直对新兴技术保持着强烈的好奇心和学习能力。当AI技术开始崭露头角时，我便主动利用课余时间系统学习了产品经理的知识体系，并深入研究了AI在数字内容创作、个性化推荐等领域的应用案例。
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  我坚信，未来AI将是驱动创意产业变革的核心引擎，而我所具备的跨界思维，正是连接技术和艺术，将AI能力转化为用户价值的关键。我拥有从0到1的创意构思能力和从1到100的运营落地能力。
                </p>

                <p className="text-gray-300 leading-relaxed">
                  数字媒体艺术的背景赋予了我敏锐的用户洞察和审美直觉，而我的组织和学习能力则确保了这些创意能够高效地被实现。我渴望将这些能力应用于AI产品经理的岗位上，与团队一起，创造出既有技术深度，又有情感温度的AI产品。我准备好了，希望能有机会与你深入交流，分享更多我的想法。
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 个性特质 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-[#00FFD0]" />
            个性标签
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-[#00FFD0]" />
                  <h3 className="text-lg font-semibold text-white">爱尝试</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">主动探索新技术和新方法，不满足于现状。</p>
                <p className="text-[#00FFD0] text-xs">案例：率先在团队中引入GPT-4进行产品原型设计，提升效率40%</p>
              </CardContent>
            </Card>

            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#00FFD0]" />
                  <h3 className="text-lg font-semibold text-white">实干能力强</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">从想法到落地，具备完整的执行能力。</p>
                <p className="text-[#00FFD0] text-xs">案例：6个月内从0到1完成智能导航系统的产品化，成功商业部署</p>
              </CardContent>
            </Card>

            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-[#00FFD0]" />
                  <h3 className="text-lg font-semibold text-white">爱学习</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">持续学习新知识，保持技术敏感度。</p>
                <p className="text-[#00FFD0] text-xs">案例：自学深度学习和机器人学，获得相关技术认证3项</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* 教育背景与技能 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* 教育背景 */}
            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-[#00FFD0]" />
                  <h3 className="text-xl font-semibold text-white">教育背景</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium">西安邮电大学</h4>
                    <p className="text-gray-300 text-sm">全日制本科 2026届</p>
                    <p className="text-[#00FFD0] text-sm mt-1">数字媒体艺术</p>
                    <div className="mt-3 space-y-1 text-xs text-gray-400">
                      <p>综测平均分：70.12</p>
                      <p>专业成绩排名：7</p>
                      <p>平均成绩：83.69</p>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-300 text-xs mb-2">主修课程：</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                          设计思维
                        </Badge>
                        <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                          交互设计
                        </Badge>
                        <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                          三维影像设计
                        </Badge>
                        <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0] text-xs">
                          图形图像设计
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 核心技能 */}
            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-5 h-5 text-[#00FFD0]" />
                  <h3 className="text-xl font-semibold text-white">核心技能</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">产品管理</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        产品策略
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        需求分析
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        项目管理
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">技术能力</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        AI产品
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        机器学习
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        数据分析
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">专业领域</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        网页交互设计
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        AI产品
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        创意研发
                      </Badge>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        具身智能
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* 联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">让我们连接</h3>
              <p className="text-gray-300 mb-6">
                如果您对具身智能领域感兴趣，或者想要了解更多关于我的项目经验，欢迎与我交流。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90"
                  onClick={() => window.open("mailto:your.email@example.com")}
                >
                  发送邮件
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 bg-transparent"
                  onClick={() => window.open("/resume/download", "_blank")}
                >
                  下载简历
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
