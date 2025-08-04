"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronDown } from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  challenge: string
  solution: string
  impact: string
  insights: string
  techStack: string[]
  image: string
  video?: string
  github?: string
  demo?: string
}

interface Article {
  id: string
  title: string
  summary: string
  date: string
  readTime: string
  link: string
}

interface Skill {
  name: string
  level: number
  x: number
  y: number
  category: string
  projects: string[]
}

const projects: Project[] = [
  {
    id: "embodied-robot",
    title: "智能具身机器人系统",
    subtitle: "基于强化学习的自主导航与操作",
    description: "开发了一套完整的具身智能机器人系统，能够在复杂环境中自主导航并执行精细操作任务。",
    challenge: "传统机器人在动态环境中的适应性差，难以处理未知场景和复杂任务。",
    solution: "设计了多模态感知融合架构，结合深度强化学习和模仿学习，实现了机器人的自主学习和适应能力。",
    impact: "相比传统方法，任务成功率提升45%，适应新环境的时间缩短60%。",
    insights: "具身智能的核心在于感知-认知-行动的闭环优化，需要在物理约束下实现智能涌现。",
    techStack: ["ROS2", "PyTorch", "OpenAI Gym", "Gazebo", "Python", "C++"],
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/username/embodied-robot",
    demo: "https://demo.example.com",
  },
  {
    id: "ai-product-design",
    title: "AI驱动的产品设计平台",
    subtitle: "智能化设计工具与用户体验优化",
    description: "构建了一个AI辅助的产品设计平台，能够根据用户需求自动生成设计方案并优化用户体验。",
    challenge: "传统产品设计流程效率低下，设计师需要大量时间进行重复性工作。",
    solution: "开发了基于生成式AI的设计助手，结合用户行为分析，实现智能化的设计建议和自动化优化。",
    impact: "设计效率提升70%，用户满意度提高35%，获得了10万+用户的积极反馈。",
    insights: "AI产品设计的关键是理解用户真实需求，技术应该无缝融入用户的工作流程中。",
    techStack: ["React", "TensorFlow.js", "Figma API", "Node.js", "MongoDB", "WebGL"],
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/username/ai-design-platform",
  },
  {
    id: "multimodal-interaction",
    title: "多模态人机交互系统",
    subtitle: "语音、视觉、触觉融合的智能交互",
    description: "设计并实现了一套多模态人机交互系统，支持自然语言、手势识别和触觉反馈的无缝融合。",
    challenge: "现有交互方式单一，无法满足复杂场景下的自然交互需求。",
    solution: "构建了多模态融合架构，使用注意力机制整合不同模态信息，实现了更自然的人机交互体验。",
    impact: "交互准确率达到92%，用户学习成本降低50%，获得了多项技术专利。",
    insights: "多模态交互的未来在于理解用户意图的上下文，而不仅仅是识别单一模态的信号。",
    techStack: ["OpenCV", "Whisper", "Transformers", "Unity", "Arduino", "Python"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

const articles: Article[] = [
  {
    id: "embodied-ai-future",
    title: "具身智能的未来：从感知到认知的跃迁",
    summary: "探讨具身智能如何通过物理交互实现真正的智能涌现，以及其在机器人、自动驾驶等领域的应用前景。",
    date: "2024-01-15",
    readTime: "8分钟",
    link: "#",
  },
  {
    id: "ai-product-design-principles",
    title: "AI产品设计的核心原则与实践",
    summary: "分享在AI产品设计中的思考和实践，包括用户体验设计、算法可解释性、伦理考量等关键议题。",
    date: "2024-01-08",
    readTime: "12分钟",
    link: "#",
  },
  {
    id: "multimodal-interaction-trends",
    title: "多模态交互：下一代人机界面的设计思考",
    summary: "从技术和设计角度分析多模态交互的发展趋势，以及如何设计更自然、更高效的交互体验。",
    date: "2023-12-20",
    readTime: "10分钟",
    link: "#",
  },
]

const skills: Skill[] = [
  {
    name: "Python",
    level: 95,
    x: 75,
    y: 20,
    category: "编程语言",
    projects: ["embodied-robot", "multimodal-interaction"],
  },
  { name: "PyTorch", level: 90, x: 80, y: 35, category: "机器学习", projects: ["embodied-robot", "ai-product-design"] },
  { name: "ROS2", level: 85, x: 85, y: 50, category: "机器人", projects: ["embodied-robot"] },
  { name: "React", level: 88, x: 25, y: 25, category: "前端开发", projects: ["ai-product-design"] },
  {
    name: "Figma",
    level: 92,
    x: 15,
    y: 40,
    category: "设计工具",
    projects: ["ai-product-design", "multimodal-interaction"],
  },
  { name: "C++", level: 80, x: 70, y: 65, category: "编程语言", projects: ["embodied-robot"] },
  { name: "TensorFlow", level: 85, x: 75, y: 80, category: "机器学习", projects: ["multimodal-interaction"] },
  { name: "Unity", level: 75, x: 45, y: 70, category: "3D开发", projects: ["multimodal-interaction"] },
  {
    name: "UX设计",
    level: 90,
    x: 20,
    y: 60,
    category: "设计",
    projects: ["ai-product-design", "multimodal-interaction"],
  },
  { name: "强化学习", level: 88, x: 85, y: 25, category: "AI算法", projects: ["embodied-robot"] },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-400 text-lg"
          >
            正在加载中...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Background Effects */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-cyan-400">
            张智能
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {["项目", "思考", "关于", "简历"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: "#64FFDA" }}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:contact@example.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section style={{ y: heroY }} className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            张智能
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-300 mb-8"
          >
            具身智能探索者与构建者 | AI Product Designer & Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            致力于推动具身智能与AI产品设计的前沿探索，以深度技术洞察与创新设计思维，
            构建连接虚拟智能与物理世界的桥梁，创造具有变革意义的智能产品体验。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-3"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              浏览我的项目
            </Button>
            <a href="/resume.pdf" download="张智能-简历.pdf" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                <Download className="mr-2" size={20} />
                下载PDF简历
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">精选项目</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              以下是我在具身智能和AI产品设计领域的核心项目，展示了从概念到实现的完整过程。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                    <p className="text-slate-300 mb-4">{project.subtitle}</p>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="思考" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">我的思考与洞察</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              分享在具身智能和AI产品设计领域的深度思考与实践经验。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3 hover:text-cyan-300 transition-colors">
                      <a href={article.link}>{article.title}</a>
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-3">{article.summary}</p>
                    <a
                      href={article.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      阅读全文 <ExternalLink className="ml-1" size={16} />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="关于" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">关于我</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="张智能"
                  className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-cyan-400/30"
                />
              </div>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  我是一名对世界充满好奇的应届毕业生，专注于具身智能与AI产品设计的交叉领域。
                  我相信真正的智能不仅存在于算法中，更体现在与物理世界的交互中。
                </p>
                <p>
                  在我的研究和实践中，我始终关注技术如何转化为有价值的产品体验。
                  从机器人的感知系统到AI产品的用户界面，我致力于构建既智能又实用的解决方案。
                </p>
                <p>我的目标是成为连接技术与人类需求的桥梁，创造出真正能够改善生活的智能产品。</p>
              </div>
            </motion.div>

            {/* Interactive Skills Matrix */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">交互式技能矩阵</h3>
              <div className="relative bg-slate-800/30 rounded-lg p-8 border border-slate-700">
                {/* Axis Labels */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-slate-400">
                  理论/设计 ← → 工程/实现
                </div>
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-slate-400">
                  感知 ← → 决策 ← → 执行
                </div>

                {/* Skills Grid */}
                <div className="relative h-80 w-full">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${skill.x}%`,
                        top: `${skill.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                        />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-300 whitespace-nowrap">
                          {skill.name}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="联系" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">让我们共创未来</h2>
            <p className="text-xl text-slate-400 mb-12">如果您对具身智能或AI产品设计感兴趣，欢迎与我交流合作。</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">邮箱联系</h3>
                <p className="text-slate-300">contact@zhangzhineng.com</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <Linkedin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">LinkedIn</h3>
                <p className="text-slate-300">linkedin.com/in/zhangzhineng</p>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:contact@example.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={32} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-cyan-400">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-2">挑战与目标</h4>
                    <p className="text-slate-300 mb-4">{selectedProject.challenge}</p>

                    <h4 className="text-lg font-bold text-cyan-400 mb-2">我的解决方案</h4>
                    <p className="text-slate-300">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-2">量化成果</h4>
                    <p className="text-slate-300 mb-4">{selectedProject.impact}</p>

                    <h4 className="text-lg font-bold text-cyan-400 mb-2">具身化思考</h4>
                    <p className="text-slate-300">{selectedProject.insights}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-cyan-400 mb-3">技术栈</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button asChild className="bg-slate-700 hover:bg-slate-600">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        查看代码
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        在线演示
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Skill Detail Modal */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="bg-slate-800 border-slate-700">
          {selectedSkill && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl text-cyan-400">{selectedSkill.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">熟练度</span>
                    <span className="text-cyan-400">{selectedSkill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      className="bg-cyan-400 h-2 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">分类</h4>
                  <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30">
                    {selectedSkill.category}
                  </Badge>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">相关项目</h4>
                  <div className="space-y-2">
                    {selectedSkill.projects.map((projectId) => {
                      const project = projects.find((p) => p.id === projectId)
                      return project ? (
                        <div key={projectId} className="text-slate-300 text-sm">
                          • {project.title}
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
