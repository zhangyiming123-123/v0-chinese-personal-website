"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, Calendar, Clock, Share2, BookOpen, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import type { JSX } from "react" // Declare JSX variable

// 洞察详细数据
const insightsData = {
  "3": {
    id: "3",
    title: "具身智能的未来",
    subtitle: "从虚拟到现实：AI与物理世界的深度融合",
    category: "行业洞察",
    publishDate: "2024-01-15",
    readTime: "8分钟",
    summary:
      "具身智能将是AI发展的下一个重要阶段。通过将AI与物理世界深度结合，我们能够创造出真正理解和适应环境的智能系统。",
    content: `
## 引言

在人工智能发展的历程中，我们正站在一个重要的转折点。传统的AI系统主要在数字世界中运行，处理文本、图像和数据，但缺乏对物理世界的直接感知和交互能力。具身智能（Embodied AI）的出现，标志着AI从虚拟走向现实的关键一步。

## 什么是具身智能？

具身智能是指具有物理实体、能够感知环境并与之交互的人工智能系统。与传统AI不同，具身智能强调：

- **物理交互**：通过机器人、传感器等物理载体与环境互动
- **感知融合**：整合视觉、听觉、触觉等多模态感知信息
- **环境适应**：能够理解和适应复杂的物理环境
- **学习进化**：通过与环境的交互不断学习和改进

## 技术发展现状

### 1. 感知技术的突破

现代传感器技术的发展为具身智能提供了强大的"感官"：
- 高精度激光雷达实现厘米级环境建模
- 深度摄像头提供三维空间理解
- 触觉传感器让机器人具备"触感"
- 多模态传感器融合技术日趋成熟

### 2. 运动控制的进步

机器人运动控制技术的发展让AI系统能够精确操控物理世界：
- 动态平衡算法让双足机器人稳定行走
- 精密操作技术实现复杂物体抓取
- 路径规划算法优化移动效率
- 力控制技术实现安全的人机交互

### 3. 学习算法的创新

强化学习和模仿学习为具身智能提供了学习能力：
- 深度强化学习在复杂环境中的应用
- 模仿学习加速技能获取过程
- 元学习提升适应新环境的能力
- 持续学习实现长期技能积累

## 应用场景与机遇

### 1. 服务机器人

具身智能在服务机器人领域展现出巨大潜力：
- **家庭服务**：清洁、烹饪、照护等日常任务
- **商业服务**：导购、配送、接待等商业场景
- **医疗辅助**：手术辅助、康复训练、药物配送

### 2. 工业自动化

制造业正在经历具身智能驱动的变革：
- **智能制造**：自适应生产线、质量检测、设备维护
- **物流仓储**：智能分拣、库存管理、配送优化
- **建筑施工**：自动化施工、安全监控、质量控制

### 3. 智慧城市

城市基础设施的智能化升级：
- **交通管理**：自动驾驶、交通优化、事故预防
- **环境监测**：空气质量、噪音监控、能源管理
- **公共安全**：智能监控、应急响应、灾害预警

## 面临的挑战

### 1. 技术挑战

- **复杂性管理**：物理世界的不确定性和复杂性
- **实时性要求**：毫秒级的感知和决策需求
- **安全可靠性**：确保系统在各种条件下的稳定运行
- **能耗优化**：平衡性能与能源消耗

### 2. 伦理与社会挑战

- **隐私保护**：传感器数据的收集和使用
- **就业影响**：自动化对传统工作岗位的冲击
- **责任归属**：AI系统行为的法律责任界定
- **社会接受度**：公众对智能机器人的接受程度

### 3. 商业化挑战

- **成本控制**：硬件和开发成本的优化
- **标准化**：行业标准和规范的建立
- **生态建设**：产业链协同和生态系统构建
- **人才培养**：跨学科人才的培养和储备

## 未来发展趋势

### 1. 技术融合加速

- **AI + 机器人**：深度学习与机器人技术的深度融合
- **5G + 边缘计算**：低延迟、高带宽的通信支撑
- **数字孪生**：虚拟仿真与现实世界的无缝连接
- **量子计算**：为复杂计算提供算力支撑

### 2. 应用场景扩展

- **个人助理**：更智能、更贴心的个人AI助手
- **教育培训**：沉浸式、个性化的学习体验
- **娱乐文化**：虚实结合的娱乐新形态
- **科学研究**：AI辅助的科学发现和实验

### 3. 生态系统成熟

- **开放平台**：标准化的开发平台和工具链
- **产业联盟**：跨行业的合作与标准制定
- **人才体系**：完善的教育和培训体系
- **政策支持**：政府层面的政策引导和支持

## 对产品经理的启示

作为AI产品经理，具身智能的发展为我们带来了新的机遇和挑战：

### 1. 产品思维的转变

- **从软件到硬件**：需要考虑物理约束和硬件成本
- **从功能到体验**：关注用户与物理系统的交互体验
- **从单点到系统**：考虑整个生态系统的协同效应

### 2. 技能要求的提升

- **跨学科知识**：需要了解机械、电子、算法等多个领域
- **系统思维**：具备复杂系统的设计和管理能力
- **安全意识**：重视产品的安全性和可靠性

### 3. 商业模式的创新

- **服务化转型**：从产品销售向服务提供转变
- **生态化布局**：构建完整的产业生态链
- **数据价值**：挖掘物理世界数据的商业价值

## 结语

具身智能代表了人工智能发展的新方向，它将AI从虚拟世界带入现实世界，创造出真正能够理解和改变物理环境的智能系统。虽然面临诸多挑战，但其巨大的应用潜力和商业价值不容忽视。

作为AI领域的从业者，我们需要保持开放的心态，积极拥抱这一技术变革，在实践中探索具身智能的无限可能。只有这样，我们才能在这个充满机遇的时代中，创造出真正有价值的产品和服务。

未来已来，让我们一起迎接具身智能的时代！
    `,
    tags: ["具身智能", "未来趋势", "技术洞察", "AI发展", "机器人技术"],
    relatedTopics: ["人机交互革命", "AI产品设计思考", "智能制造的未来"],
    references: [
      "MIT Technology Review - The Future of Embodied AI",
      "Nature Machine Intelligence - Embodied Intelligence",
      "IEEE Robotics & Automation Magazine",
      "OpenAI Research Papers on Robotics",
    ],
    keyPoints: [
      "具身智能是AI从虚拟到现实的关键转变",
      "技术融合推动感知、控制、学习能力提升",
      "应用场景广泛，从服务机器人到智慧城市",
      "面临技术、伦理、商业化多重挑战",
      "未来将实现技术融合、应用扩展、生态成熟",
    ],
  },
  "6": {
    id: "6",
    title: "人机交互革命",
    subtitle: "从屏幕界面到空间交互的范式转变",
    category: "行业洞察",
    publishDate: "2024-01-20",
    readTime: "6分钟",
    summary: "随着具身智能技术的发展，人机交互正在从屏幕界面向空间交互转变。这种变革将重新定义我们与技术的关系。",
    content: `
## 交互范式的演进

人机交互的历史就是一部不断简化和自然化的发展史。从最初的命令行界面，到图形用户界面，再到触摸屏和语音交互，每一次变革都让人与计算机的交互变得更加直观和自然。

### 传统交互方式的局限

当前主流的交互方式虽然已经相当成熟，但仍然存在明显的局限性：

- **二维约束**：屏幕界面将三维世界压缩到二维平面
- **单一通道**：主要依赖视觉和触觉，缺乏多感官体验
- **设备依赖**：需要特定的输入设备如键盘、鼠标、触摸屏
- **认知负担**：用户需要学习特定的操作规则和界面逻辑
- **情境割裂**：数字世界与物理世界相互分离

## 空间交互的兴起

随着AR/VR技术、手势识别、语音交互等技术的成熟，空间交互正在成为新的交互范式：

### 1. 自然手势交互

- **直觉操作**：用自然手势控制虚拟对象
- **空间定位**：在三维空间中精确定位和操作
- **多手协作**：双手协同完成复杂任务
- **触觉反馈**：通过触觉设备提供真实的触感体验

### 2. 语音与对话交互

- **自然语言**：用日常语言与系统交流
- **上下文理解**：系统能理解对话的上下文和意图
- **多轮对话**：支持复杂的多轮交互流程
- **情感识别**：识别用户的情感状态并做出相应反应

### 3. 眼动与脑机接口

- **视线追踪**：通过眼动控制界面元素
- **意念控制**：直接通过大脑信号控制设备
- **注意力感知**：系统能感知用户的注意力焦点
- **认知负荷监测**：实时监测用户的认知状态

## 技术驱动因素

### 1. 硬件技术的进步

- **传感器小型化**：高精度传感器的小型化和成本降低
- **计算能力提升**：边缘计算设备的性能大幅提升
- **显示技术革新**：AR/VR显示技术的突破性进展
- **网络连接优化**：5G和WiFi 6提供低延迟高带宽支持

### 2. 算法技术的突破

- **计算机视觉**：实时手势识别和物体跟踪
- **自然语言处理**：更准确的语音识别和语义理解
- **机器学习**：个性化交互模式的学习和适应
- **多模态融合**：不同感知通道信息的有效整合

### 3. 生态系统的完善

- **开发工具**：更易用的AR/VR开发框架和工具
- **内容生态**：丰富的应用场景和内容资源
- **标准规范**：行业标准和最佳实践的建立
- **用户教育**：用户对新交互方式的接受和适应

## 应用场景展望

### 1. 工作场景革新

- **虚拟办公室**：在虚拟空间中进行协作和会议
- **3D设计**：直接在三维空间中进行产品设计
- **数据可视化**：将复杂数据以立体形式呈现
- **远程操控**：通过手势控制远程设备和机器人

### 2. 教育培训变革

- **沉浸式学习**：在虚拟环境中体验历史和科学
- **技能训练**：通过VR进行安全的技能练习
- **个性化教学**：根据学习者状态调整教学内容
- **协作学习**：多人在虚拟空间中共同学习

### 3. 娱乐体验升级

- **游戏革命**：全身体感游戏和虚拟世界探索
- **社交互动**：在虚拟空间中的真实社交体验
- **内容创作**：用手势和语音创作数字内容
- **艺术表达**：新的艺术创作和表达形式

### 4. 医疗健康应用

- **康复训练**：通过VR进行物理和认知康复
- **手术辅助**：AR辅助的精密手术操作
- **心理治疗**：虚拟环境中的心理治疗和干预
- **健康监测**：通过多模态交互监测健康状态

## 设计原则与挑战

### 1. 用户体验设计原则

- **自然性**：交互方式应符合人类的自然行为习惯
- **一致性**：在不同场景下保持交互逻辑的一致性
- **可发现性**：用户能够直观地发现可用的交互方式
- **容错性**：系统应能处理用户的误操作和意外情况
- **可访问性**：考虑不同能力用户的交互需求

### 2. 技术实现挑战

- **延迟问题**：实现毫秒级的响应时间
- **精度要求**：提高手势和语音识别的准确性
- **环境适应**：在不同环境条件下保持稳定性能
- **能耗优化**：平衡功能丰富性与电池续航
- **隐私保护**：保护用户的生物特征和行为数据

### 3. 社会接受度挑战

- **学习成本**：降低用户学习新交互方式的门槛
- **文化差异**：考虑不同文化背景下的交互习惯
- **代际差异**：满足不同年龄群体的使用需求
- **社会规范**：建立新交互方式的社会使用规范

## 对产品设计的启示

### 1. 设计思维转变

- **从平面到立体**：考虑三维空间中的用户体验
- **从单一到多元**：整合多种感知通道的交互设计
- **从静态到动态**：设计动态响应的交互系统
- **从个人到协作**：支持多人协作的交互体验

### 2. 技术能力要求

- **跨学科知识**：需要了解心理学、人体工程学等
- **原型验证**：快速构建和测试交互原型
- **数据分析**：分析用户的交互行为和偏好
- **持续优化**：基于用户反馈不断改进交互设计

### 3. 商业模式创新

- **体验经济**：从功能导向转向体验导向
- **平台生态**：构建支持新交互方式的平台生态
- **服务化转型**：从产品销售转向服务提供
- **数据价值**：挖掘交互数据的商业价值

## 未来展望

人机交互的未来将是一个更加自然、直观、智能的世界。我们正在向着"无界面"的方向发展，技术将变得越来越透明，用户与数字世界的交互将变得如同与物理世界交互一样自然。

### 关键发展趋势

1. **交互无处不在**：任何表面、任何物体都可能成为交互界面
2. **智能预测**：系统能预测用户意图，主动提供服务
3. **情感计算**：系统能理解和响应用户的情感状态
4. **个性化适应**：交互方式根据个人习惯自动调整
5. **无缝切换**：在不同设备和环境间无缝切换交互模式

### 对行业的影响

这场交互革命将深刻影响各个行业：
- **软件开发**：需要掌握新的开发框架和工具
- **硬件制造**：传感器和显示设备需求激增
- **内容创作**：需要适应新的内容形式和创作工具
- **教育培训**：交互设计成为重要的专业技能

## 结语

人机交互革命不仅仅是技术的进步，更是人类与数字世界关系的重新定义。作为产品设计者和技术从业者，我们需要深入理解这一变革的本质，积极探索新的交互可能性，为用户创造更加自然、高效、愉悦的交互体验。

未来的交互世界将是一个充满无限可能的空间，让我们一起迎接这个激动人心的时代！
    `,
    tags: ["人机交互", "UX设计", "交互革命", "空间交互", "AR/VR"],
    relatedTopics: ["具身智能的未来", "AI产品设计思考", "虚拟现实技术发展"],
    references: [
      "ACM CHI Conference Proceedings",
      "MIT Media Lab Research",
      "Google Research on Spatial Interaction",
      "Apple Human Interface Guidelines",
    ],
    keyPoints: [
      "传统交互方式存在二维约束和认知负担",
      "空间交互通过手势、语音、眼动等方式实现自然交互",
      "技术进步推动硬件、算法、生态系统完善",
      "应用场景涵盖工作、教育、娱乐、医疗等领域",
      "设计需要考虑自然性、一致性、可发现性等原则",
    ],
  },
}

export default function InsightDetailPage() {
  const params = useParams()
  const insightId = params.id as string
  const insight = insightsData[insightId as keyof typeof insightsData]

  if (!insight) {
    return (
      <div className="min-h-screen bg-[#0C0E1A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">洞察未找到</h1>
          <Link href="/">
            <Button className="bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90">返回首页</Button>
          </Link>
        </div>
      </div>
    )
  }

  // 将markdown内容转换为JSX（简化版本）
  const renderContent = (content: string): JSX.Element[] => {
    const lines = content.split("\n")
    const elements: JSX.Element[] = []
    const currentIndex = 0

    lines.forEach((line, index) => {
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-3">
            <span className="w-2 h-6 bg-[#00FFD0] rounded"></span>
            {line.replace("## ", "")}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>,
        )
      } else if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.*?)\*\*：(.*)/)
        if (match) {
          elements.push(
            <div key={index} className="mb-3 pl-4 border-l-2 border-[#00FFD0]/30">
              <span className="text-[#00FFD0] font-semibold">{match[1]}</span>
              <span className="text-gray-300">：{match[2]}</span>
            </div>,
          )
        }
      } else if (line.startsWith("- ")) {
        elements.push(
          <div key={index} className="mb-2 flex items-start gap-2">
            <span className="text-[#00FFD0] mt-1 text-sm">•</span>
            <span className="text-gray-300">{line.replace("- ", "")}</span>
          </div>,
        )
      } else if (line.trim() && !line.startsWith("#")) {
        elements.push(
          <p key={index} className="text-gray-300 leading-relaxed mb-4">
            {line}
          </p>,
        )
      }
    })

    return elements
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
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
            <span>行业洞察</span> / <span className="text-[#00FFD0]">{insight.title}</span>
          </div>
        </div>

        {/* 文章头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-[#00FFD0]" />
            <Badge variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
              {insight.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Outfit']">{insight.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{insight.subtitle}</p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{insight.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>阅读时长 {insight.readTime}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-[#00FFD0] p-0 h-auto"
              onClick={() => navigator.share?.({ title: insight.title, url: window.location.href })}
            >
              <Share2 className="w-4 h-4 mr-1" />
              分享
            </Button>
          </div>

          {/* 摘要 */}
          <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30 mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">文章摘要</h3>
              <p className="text-gray-300 leading-relaxed">{insight.summary}</p>
            </CardContent>
          </Card>

          {/* 关键要点 */}
          <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30 mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00FFD0]" />
                关键要点
              </h3>
              <div className="space-y-3">
                {insight.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#00FFD0] font-bold text-sm mt-1">{index + 1}</span>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-[#00FFD0]/50 text-[#00FFD0]">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* 文章内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">{renderContent(insight.content)}</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 相关主题和参考资料 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* 相关主题 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#00FFD0]" />
                  相关主题
                </h3>
                <div className="space-y-2">
                  {insight.relatedTopics.map((topic, index) => (
                    <div key={index} className="text-gray-300 hover:text-[#00FFD0] cursor-pointer transition-colors">
                      {topic}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 参考资料 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-[#2F3640]/80 border-[#00FFD0]/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#00FFD0]" />
                  参考资料
                </h3>
                <div className="space-y-2">
                  {insight.references.map((reference, index) => (
                    <div key={index} className="text-gray-300 text-sm">
                      {reference}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 底部导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
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
