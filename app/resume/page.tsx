"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Trophy,
  Briefcase,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const personalInfo = {
    name: "张熠铭",
    englishName: "ZHANGYIMING",
    politicalStatus: "共青团员",
    birthDate: "2004.1",
    location: "陕西省西安市蓝田县",
    email: "2395215106@qq.com",
    phone: "19829265596",
    wechat: "Mings19829265596",
  }

  const education = {
    university: "西安邮电大学",
    major: "数字媒体艺术",
    degree: "全日制本科",
    courses: ["设计思维", "交互设计", "三维影像设计", "图形图像设计"],
    gpa: "70.12",
    ranking: "7",
    averageScore: "83.69",
  }

  const schoolExperience = [
    {
      period: "2023-2024",
      position: "校大学生艺术团主持部 部长",
      responsibilities: [
        "主持我校璀璨之星主持人大赛",
        "主持我校巡礼月活动",
        "社团日常训练工作",
        "协助大艺团拍摄校庆宣传片",
        "运营我校大学生艺术团抖音号",
      ],
    },
    {
      period: "2023-2024",
      position: "数字艺术学院艺术二十号党员工作站 部长",
      responsibilities: [
        "举办学院党站活动数次，例如：拍摄活动、红色书籍分享、我院的演讲比赛等。",
        "协助党站组织部员与党活动",
      ],
    },
  ]

  const volunteerExperience = [
    "学校联合腾讯公益跑活动志愿者",
    "学院2023年毕业展策展以及布展志愿者活动",
    "学院2023年度招新志愿者活动，宣传学院风采",
    "学院2023年度与陕西省社会联合组织共同举办的研讨会志愿者",
  ]

  const competitions = [
    "互联网加小集市乡村振兴项目负责人之一",
    "在团队中做策划、答辩、PPT制作的工作",
    "项目解化基地创响项目答辩人",
    "第十八届好创意AIGC大赛纹样主题创作比赛团队成员",
    "负责脚本创作、出图工作",
    "第十四届北京国际电影节AIGC电影短片单元比赛团队成员",
    "负责AI剧本创作等工作",
  ]

  const honors = [
    "东方设计奖全国高校创新设计大赛国一等奖",
    "东方创意之星2024泰山文创设计大赛二等奖",
    "中国好创意（第十八届）暨全国数字艺术设计大赛陕西区三等奖",
    "第三届东方创意之星设计大赛铜奖",
    "第十二届纸尚杯贵州省国际高校大学生创业竞赛奖",
    "两项作品在第十届东方创意之星设计大赛中获得大赛陕西赛区三等奖",
    "两项作品在第十二届东方创意之星设计大赛中获得大赛陕西赛区三等奖",
  ]

  const scholarships = [
    "三好学生 2022-2023学年度 二等奖学金",
    "2022-2023学年度 二等奖学金",
    "2023-2024学年度 二等奖学金 助学奖学金",
    "优秀团干部 入党积极分子",
    "主持人大赛优秀获奖者",
    "院级设计比赛获奖者",
    "2023-2024学年度 优秀团干部",
  ]

  const skills = [
    "掌握PS、AI、AE、PR、prpcreate、MAYA、AXURE RP9、剪映",
    "熟悉Midjourney操作、LORA模型训练、SD操作",
    "了解MAYA、AXURE RP9",
  ]

  const selfEvaluation =
    "做事认真，对人有耐心、责任心、恒心，对负责的工作会付出全部的精力和热情，有冲劲、性格开朗、易相处，有团队协作意识，善于沟通，愿意学习和创新、提升自己。"

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
            <span>个人简历</span> / <span className="text-[#00FFD0]">{personalInfo.name}</span>
          </div>
        </div>

        {/* 个人信息头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-8">
                {/* 头像区域 */}
                <div className="flex-shrink-0">
                  <img
                    src="/images/resume.png"
                    alt="个人照片"
                    className="w-32 h-40 object-cover rounded-lg border-2 border-[#00FFD0]/30"
                  />
                </div>

                {/* 基本信息 */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <h1 className="text-4xl font-bold text-white font-['Outfit']">{personalInfo.name}</h1>
                    <span className="text-xl text-gray-300">/ {personalInfo.englishName}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <User className="w-4 h-4 text-[#00FFD0]" />
                      <span>政治面貌：{personalInfo.politicalStatus}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-[#00FFD0]" />
                      <span>籍贯：{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-[#00FFD0]" />
                      <span>出生年月：{personalInfo.birthDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-[#00FFD0]" />
                      <span>邮箱：{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-[#00FFD0]" />
                      <span>电话：{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <User className="w-4 h-4 text-[#00FFD0]" />
                      <span>微信：{personalInfo.wechat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 主要内容区域 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 教育背景 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-[#00FFD0]" />
                    教育背景
                  </h2>
                  <div className="bg-[#0C0E1A]/50 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-white">{education.university}</h3>
                      <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                        {education.degree}
                      </Badge>
                    </div>
                    <p className="text-[#00FFD0] mb-4">{education.major}</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-300">
                      <div>综测平均分：{education.gpa}</div>
                      <div>专业成绩排名：{education.ranking}</div>
                      <div>平均成绩：{education.averageScore}</div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">主修课程：</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, index) => (
                          <Badge key={index} variant="secondary" className="bg-[#00FFD0]/20 text-gray-300">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 校园经历 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-[#00FFD0]" />
                    校园经历
                  </h2>
                  <div className="space-y-6">
                    {schoolExperience.map((exp, index) => (
                      <div key={index} className="bg-[#0C0E1A]/50 rounded-lg p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[#00FFD0] font-medium">{exp.period}</span>
                          <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-[#00FFD0] mt-1 text-xs">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 志愿者经历 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-[#00FFD0]" />
                    志愿者经历
                  </h2>
                  <div className="space-y-3">
                    {volunteerExperience.map((exp, index) => (
                      <div key={index} className="bg-[#0C0E1A]/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00FFD0] mt-1 text-xs">▸</span>
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 参赛经历 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-[#00FFD0]" />
                    参赛经历
                  </h2>
                  <div className="space-y-3">
                    {competitions.map((comp, index) => (
                      <div key={index} className="bg-[#0C0E1A]/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#00FFD0] mt-1 text-xs">🏆</span>
                          {comp}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 右侧边栏 */}
          <div className="space-y-6">
            {/* 个人荣誉 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#00FFD0]" />
                    个人荣誉
                  </h3>
                  <div className="space-y-2">
                    {honors.map((honor, index) => (
                      <div key={index} className="text-gray-300 text-xs flex items-start gap-2">
                        <span className="text-[#00FFD0] mt-1">✓</span>
                        {honor}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 奖学金 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">奖学金与荣誉</h3>
                  <div className="space-y-2">
                    {scholarships.map((scholarship, index) => (
                      <div key={index} className="text-gray-300 text-xs flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">🏅</span>
                        {scholarship}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 职业技能 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">职业技能</h3>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-[#00FFD0] mt-1 text-xs">▸</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 自我评价 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">自我评价</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selfEvaluation}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* 底部导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
            <Button
              className="bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90"
              onClick={() => window.open("mailto:2395215106@qq.com")}
            >
              联系我
            </Button>
            <Button
              className="bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90"
              onClick={() => window.open("/resume/download", "_blank")}
            >
              下载简历
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
