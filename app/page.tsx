"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  X,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  User,
  Code,
  Palette,
  Brain,
  Target,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react"

// 漂浮元素数据 - 简化为静态卡片布局
const floatingElements = [
  { id: 1, type: "project", title: "求职机会对比器", category: "AI产品", color: "#00FFD0" },
  { id: 2, type: "skill", title: "产品策略", category: "核心技能", color: "#00FFD0" },
  { id: 3, type: "insight", title: "具身智能的未来", category: "行业洞察", color: "#00FFD0" },
  { id: 4, type: "resume", title: "个人简历", category: "关于我", color: "#00FFD0" },
  { id: 5, type: "skill", title: "数据分析", category: "核心技能", color: "#00FFD0" },
  { id: 6, type: "insight", title: "人机交互革命", category: "行业洞察", color: "#00FFD0" },
]

// 联系方式弹窗
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#2F3640] border border-[#00FFD0]/30 rounded-xl p-6 max-w-md w-full relative z-[10000]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00FFD0]" />
              <span className="text-[#00FFD0] text-sm font-medium">联系方式</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">让我们连接</h3>
              <p className="text-gray-300 text-sm">期待与您探讨具身智能的无限可能</p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:2395215106@qq.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0C0E1A]/50 hover:bg-[#0C0E1A] transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#00FFD0]" />
                <span className="text-white group-hover:text-[#00FFD0] transition-colors">2395215106@qq.com</span>
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0C0E1A]/50 hover:bg-[#0C0E1A] transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-[#00FFD0]" />
                <span className="text-white group-hover:text-[#00FFD0] transition-colors">LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </a>

              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0C0E1A]/50 hover:bg-[#0C0E1A] transition-colors group"
              >
                <Github className="w-5 h-5 text-[#00FFD0]" />
                <span className="text-white group-hover:text-[#00FFD0] transition-colors">GitHub Profile</span>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#00FFD0]/20">
              <Button
                className="w-full bg-[#00FFD0] text-[#0C0E1A] hover:bg-[#00FFD0]/90 font-semibold"
                onClick={() => window.open("/resume/download", "_blank")}
              >
                下载简历 PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// 数字统计组件
function StatsCounter({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const targetValue = Number.parseInt(value.replace(/[^\d]/g, ""))

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= targetValue) {
            clearInterval(interval)
            return targetValue
          }
          return prev + Math.ceil(targetValue / 50)
        })
      }, 50)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [targetValue, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-2xl font-bold text-[#00FFD0] mb-1">
        {count}
        {value.includes("+") ? "+" : ""}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </motion.div>
  )
}

// 修改点击处理逻辑，添加简历页面跳转
const handleElementClick = (element: any) => {
  if (element.type === "project") {
    window.location.href = `/projects/${element.id}`
  } else if (element.type === "skill") {
    window.location.href = `/skills/${element.id}`
  } else if (element.type === "insight") {
    window.location.href = `/insights/${element.id}`
  } else if (element.type === "resume") {
    window.location.href = `/resume`
  }
}

export default function HomePage() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="min-h-screen bg-[#0C0E1A] relative overflow-hidden">
      {/* 左侧复杂装饰性背景 */}
      <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
        {/* 多层几何装饰 */}
        <div className="absolute top-16 left-8 w-40 h-40 border border-[#00FFD0]/15 rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-12 w-32 h-32 border-2 border-[#00FFD0]/25 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-24 left-16 w-24 h-24 bg-[#00FFD0]/5 rounded-full animate-pulse delay-500"></div>

        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-16 h-full w-full">
            {Array.from({ length: 128 }).map((_, i) => (
              <div key={i} className="border border-[#00FFD0]/20"></div>
            ))}
          </div>
        </div>

        {/* 动态粒子效果 */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFD0] rounded-full"
            style={{
              left: `${Math.random() * 50}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* 复杂SVG路径动画 */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 400 800">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFD0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00FFD0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00FFD0" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <motion.path
            d="M50,100 Q150,200 100,300 T200,500 Q300,600 250,700"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          <motion.path
            d="M20,200 Q120,300 80,400 T180,600 Q280,700 230,800"
            stroke="#00FFD0"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          />

          <motion.path
            d="M80,50 Q180,150 130,250 T230,450 Q330,550 280,650"
            stroke="#00FFD0"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
          />
        </svg>

        {/* 多层渐变光效 */}
        <div className="absolute top-1/6 left-0 w-80 h-80 bg-gradient-radial from-[#00FFD0]/15 via-[#00FFD0]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-8 w-64 h-64 bg-gradient-radial from-[#00FFD0]/10 via-[#00FFD0]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-16 w-48 h-48 bg-gradient-radial from-[#00FFD0]/8 to-transparent rounded-full blur-xl"></div>

        {/* 几何线条装饰 */}
        <div className="absolute top-32 left-4 w-1 h-24 bg-gradient-to-b from-[#00FFD0]/40 to-transparent"></div>
        <div className="absolute top-48 left-6 w-16 h-1 bg-gradient-to-r from-[#00FFD0]/40 to-transparent"></div>
        <div className="absolute top-64 left-2 w-20 h-20 border border-[#00FFD0]/20 rotate-45 transform origin-center"></div>

        {/* 动态六边形 */}
        <motion.div
          className="absolute top-80 left-12 w-12 h-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <polygon
              points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
              fill="none"
              stroke="#00FFD0"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </div>

      {/* 右侧漂浮元素区域 - 增强版 */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex flex-wrap items-center justify-center gap-6 p-8">
        {floatingElements.map((element, index) => (
          <motion.div
            key={element.id}
            initial={{ opacity: 0, y: 100, scale: 0.5, rotateY: -90 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              rotateY: 0,
              transition: {
                duration: 1.2,
                delay: index * 0.3,
                type: "spring",
                stiffness: 80,
                damping: 12
              }
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -10, 
              rotateY: 5,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            whileTap={{ 
              scale: 0.95,
              rotateY: -5,
              transition: {
                duration: 0.1
              }
            }}
            className="cursor-pointer group relative"
            onClick={() => handleElementClick(element)}
          >
            {/* 悬浮光效 */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#00FFD0]/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
            
            {/* 脉冲边框效果 */}
            <motion.div
              className="absolute -inset-1 border border-[#00FFD0]/30 rounded-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            />

            {/* 主卡片内容 */}
            <motion.div 
              className="relative bg-[#2F3640]/90 backdrop-blur-md border border-[#00FFD0]/40 rounded-xl p-5 min-w-[160px] shadow-2xl shadow-[#00FFD0]/10"
              whileHover={{
                borderColor: "#00FFD0",
                boxShadow: "0 0 30px rgba(0, 255, 208, 0.4)",
                transition: { duration: 0.3 }
              }}
            >
              {/* 顶部装饰线 */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FFD0] to-transparent rounded-t-xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
              />
              
              {/* 类别标签 */}
              <motion.div 
                className="text-[#00FFD0] text-xs font-medium mb-3 flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
              >
                <motion.div
                  className="w-2 h-2 bg-[#00FFD0] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  }}
                />
                {element.category}
              </motion.div>
              
              {/* 标题 */}
              <motion.div 
                className="text-white text-sm font-semibold leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 1.0 }}
              >
                {element.title}
              </motion.div>
              
              {/* 底部指示器 */}
              <motion.div
                className="absolute bottom-2 right-2 w-6 h-6 border border-[#00FFD0]/30 rounded-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 1.2 }}
                whileHover={{ scale: 1.2, borderColor: "#00FFD0" }}
              >
                <motion.div
                  className="w-2 h-2 bg-[#00FFD0] rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 代码流背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFD0]/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFD0] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00FFD0] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#00FFD0] rounded-full animate-pulse delay-500"></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen p-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          {/* 增强的个人头像区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              {/* 多层光环效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00FFD0]/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00FFD0]/30 to-transparent rounded-full blur-lg animate-pulse delay-500"></div>

              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#00FFD0]/30 via-[#00FFD0]/20 to-[#00FFD0]/10 border-2 border-[#00FFD0]/50 flex items-center justify-center mb-4 backdrop-blur-sm">
                <User className="w-12 h-12 text-[#00FFD0]" />

                {/* 旋转装饰环 */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent border-t-[#00FFD0]/60 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>

              {/* 状态指示器 */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-[#00FFD0] to-[#00FFD0]/80 rounded-full flex items-center justify-center shadow-lg shadow-[#00FFD0]/50">
                <Sparkles className="w-4 h-4 text-[#0C0E1A]" />
              </div>
            </div>
          </motion.div>

          {/* 动态标题 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Outfit'] leading-tight">
              <span className="inline-block">具身智能的</span>
              <motion.span
                className="text-[#00FFD0] block relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                实践者与创新者
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#00FFD0] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
            通过严谨的执行力将前沿AI技术变为现实
          </motion.p>

          {/* 增强的技能标签云 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-4">
              {/* AI产品标签 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.9,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8, 
                  rotate: 5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }} 
                whileTap={{ scale: 0.9, rotate: -5 }}
                className="relative group"
              >
                {/* 悬浮光效 */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#00FFD0]/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                
                <Badge
                  variant="outline"
                  className="relative border-[#00FFD0]/60 text-[#00FFD0] bg-[#00FFD0]/15 hover:bg-[#00FFD0]/25 transition-all duration-300 cursor-pointer shadow-xl shadow-[#00FFD0]/30 backdrop-blur-sm px-4 py-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                  </motion.div>
                  AI产品
                </Badge>
              </motion.div>

              {/* 交互设计标签 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8, 
                  rotate: -5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }} 
                whileTap={{ scale: 0.9, rotate: 5 }}
                className="relative group"
              >
                {/* 悬浮光效 */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#00FFD0]/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                />
                
                <Badge
                  variant="outline"
                  className="relative border-[#00FFD0]/60 text-[#00FFD0] bg-[#00FFD0]/15 hover:bg-[#00FFD0]/25 transition-all duration-300 cursor-pointer shadow-xl shadow-[#00FFD0]/30 backdrop-blur-sm px-4 py-2"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }}
                  >
                    <Palette className="w-4 h-4 mr-2" />
                  </motion.div>
                  交互设计
                </Badge>
              </motion.div>

              {/* 创意研发标签 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8, 
                  rotate: 3,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }} 
                whileTap={{ scale: 0.9, rotate: -3 }}
                className="relative group"
              >
                {/* 悬浮光效 */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#00FFD0]/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                />
                
                <Badge
                  variant="outline"
                  className="relative border-[#00FFD0]/60 text-[#00FFD0] bg-[#00FFD0]/15 hover:bg-[#00FFD0]/25 transition-all duration-300 cursor-pointer shadow-xl shadow-[#00FFD0]/30 backdrop-blur-sm px-4 py-2"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -2, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }}
                  >
                    <Code className="w-4 h-4 mr-2" />
                  </motion.div>
                  创意研发
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* 数据统计卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 1.0, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative bg-[#2F3640]/60 backdrop-blur-md border border-[#00FFD0]/30 rounded-xl p-6 mb-8 max-w-lg shadow-2xl shadow-[#00FFD0]/20 overflow-hidden"
          >
            {/* 背景装饰效果 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FFD0] via-[#00FFD0]/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            
            {/* 角落装饰 */}
            <motion.div
              className="absolute top-2 right-2 w-8 h-8 border border-[#00FFD0]/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            
            <div className="grid grid-cols-3 gap-6 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <StatsCounter value="50+" label="服务用户(万)" delay={1200} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <StatsCounter value="92" label="准确率(%)" delay={1400} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <StatsCounter value="70" label="效率提升(%)" delay={1600} />
              </motion.div>
            </div>

            <motion.div 
              className="border-t border-[#00FFD0]/20 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h3 className="text-[#00FFD0] font-semibold mb-2 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Target className="w-4 h-4" />
                </motion.div>
                张熠铭 / ZHANGYIMING
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                西安邮电大学数字媒体艺术专业2026届毕业生，专注于将创意思维与AI技术相结合，创造有温度的智能产品。
              </p>
            </motion.div>
          </motion.div>

          {/* 成就亮点 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  <Award className="w-4 h-4 text-[#00FFD0]" />
                </motion.div>
                <span>东方设计奖国一等奖</span>
              </motion.div>
              
              <motion.div 
                className="w-1 h-1 bg-gray-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.6 }}
              />
              
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -2, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  <TrendingUp className="w-4 h-4 text-[#00FFD0]" />
                </motion.div>
                <span>校大学生艺术团部长</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-gray-400 text-sm mb-12"
          >
            <p className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00FFD0]" />
              探索右侧的漂浮元素，发现我的专业世界
            </p>
            <p className="mt-1 ml-6">点击任意元素深入了解</p>
          </motion.div>

          {/* 增强的快速导航按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex gap-6"
          >
            {/* 了解更多按钮 */}
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.6,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }} 
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* 按钮光效 */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#00FFD0]/30 to-transparent rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
              
              <Button
                className="relative bg-gradient-to-r from-[#00FFD0] to-[#00FFD0]/80 text-[#0C0E1A] hover:from-[#00FFD0]/90 hover:to-[#00FFD0]/70 font-semibold shadow-xl shadow-[#00FFD0]/40 transition-all duration-300 px-6 py-3"
                onClick={() => (window.location.href = "/about")}
              >
                <motion.span
                  animate={{ 
                    x: [0, 2, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  了解更多
                </motion.span>
              </Button>
            </motion.div>

            {/* 联系我按钮 */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.8,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }} 
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* 按钮光效 */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#00FFD0]/20 to-transparent rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
              
              <Button
                variant="outline"
                className="relative border-[#00FFD0]/60 text-[#00FFD0] hover:bg-[#00FFD0]/15 bg-transparent backdrop-blur-sm shadow-xl shadow-[#00FFD0]/30 transition-all duration-300 px-6 py-3"
                onClick={() => setShowContact(true)}
              >
                <motion.span
                  animate={{ 
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  联系我
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 固定导航按钮 */}
      <div className="fixed top-6 right-6 z-[100] flex gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowContact(true)}
          className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 backdrop-blur-sm"
        >
          <Mail className="w-4 h-4 mr-2" />
          联系我
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => (window.location.href = "/about")}
          className="border-[#00FFD0]/50 text-[#00FFD0] hover:bg-[#00FFD0]/10 backdrop-blur-sm"
        >
          <User className="w-4 h-4 mr-2" />
          关于我
        </Button>
      </div>

      {/* 底部提示 */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-[#2F3640]/80 backdrop-blur-sm border border-[#00FFD0]/30 rounded-full px-4 py-2 shadow-lg shadow-[#00FFD0]/20"
        >
          <p className="text-[#00FFD0] text-xs font-medium">意识流实验室 - Stream of Consciousness Lab</p>
        </motion.div>
      </div>

      {/* 弹窗 */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}
