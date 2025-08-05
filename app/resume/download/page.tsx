"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

export default function ResumeDownloadPage() {
  useEffect(() => {
    // 设置打印样式
    const style = document.createElement("style")
    style.textContent = `
      @media print {
        body { margin: 0; padding: 0; }
        .no-print { display: none !important; }
        .print-page { 
          width: 210mm; 
          min-height: 297mm; 
          margin: 0; 
          padding: 20mm;
          box-shadow: none;
          background: white !important;
        }
        .print-section { break-inside: avoid; }
        .print-header { border-bottom: 2px solid #00FFD0; }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // 触发浏览器的打印对话框，用户可以选择"保存为PDF"
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 操作按钮 - 不打印 */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
          <Printer className="w-4 h-4 mr-2" />
          打印
        </Button>
        <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700">
          <Download className="w-4 h-4 mr-2" />
          下载PDF
        </Button>
      </div>

      {/* 简历内容 - A4纸张格式 */}
      <div className="print-page max-w-4xl mx-auto bg-white shadow-lg" style={{ minHeight: "297mm" }}>
        {/* 头部信息 */}
        <div className="print-header pb-6 mb-6">
          <div className="flex items-start gap-8">
            {/* 个人照片 */}
            <div className="flex-shrink-0">
              <img
                src="/images/resume.png"
                alt="张熠铭"
                className="w-32 h-40 object-cover border-2 border-gray-300"
                style={{ width: "120px", height: "160px" }}
              />
            </div>

            {/* 基本信息 */}
            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">张熠铭</h1>
                <p className="text-lg text-gray-600">ZHANGYIMING</p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">政治面貌:</span>
                  <span>共青团员</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">籍贯:</span>
                  <span>陕西省西安市蓝田县</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">出生年月:</span>
                  <span>2004.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">邮箱:</span>
                  <span>2395215106@qq.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">电话:</span>
                  <span>19829265596</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">微信:</span>
                  <span>Mings19829265596</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 教育背景 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">🎓 教育背景</h2>
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">西安邮电大学</h3>
              <span className="text-sm text-gray-600">全日制本科</span>
            </div>
            <p className="text-blue-600 font-medium mb-2">数字媒体艺术</p>
            <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
              <div>综测平均分: 70.12</div>
              <div>专业成绩排名: 7</div>
              <div>平均成绩: 83.69</div>
            </div>
            <div>
              <span className="font-medium">主修课程: </span>
              <span>设计思维、交互设计、三维影像设计、图形图像设计</span>
            </div>
          </div>
        </div>

        {/* 校园经历 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">🏛️ 校园经历</h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-blue-600 font-medium">2023-2024</span>
                <h3 className="font-semibold">校大学生艺术团主持部 部长</h3>
              </div>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 主持我校"璀璨之星"主持人大赛/主持我校"巡礼月"活动</li>
                <li>• 社团日常训练工作</li>
                <li>• 协助大艺团拍摄校庆宣传片</li>
                <li>• 运营我校大学生艺术团抖音号</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-blue-600 font-medium">2023-2024</span>
                <h3 className="font-semibold">数字艺术学院艺术二十号党员工作站 部长</h3>
              </div>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 举办学院党站活动数次，例如：拍摄活动、红色书籍分享、我院的演讲比赛等</li>
                <li>• 协助党站组织部员与党活动</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 志愿者经历 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">⭐ 志愿者经历</h2>
          <ul className="text-sm space-y-2">
            <li>• 学校联合腾讯"公益跑"活动志愿者</li>
            <li>• 学院2023年毕业展策展以及布展志愿者活动</li>
            <li>• 学院2023年度招新志愿者活动，宣传学院风采</li>
            <li>• 学院2023年度与陕西省社会联合组织共同举办的研讨会志愿者</li>
          </ul>
        </div>

        {/* 参赛经历 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">🏆 参赛经历</h2>
          <ul className="text-sm space-y-2">
            <li>• 互联网加"小集市"乡村振兴项目负责人之一</li>
            <li>• 在团队中做策划、答辩、PPT制作的工作</li>
            <li>• 项目孵化基地"创响"项目答辩人</li>
            <li>• 第十八届好创意AIGC大赛"纹样"主题创作比赛团队成员</li>
            <li>• 负责脚本创作、出图工作</li>
            <li>• 第十四届北京国际电影节AIGC电影短片单元比赛团队成员</li>
            <li>• 负责AI剧本创作等工作</li>
          </ul>
        </div>

        {/* 个人荣誉 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">🏅 个人荣誉</h2>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div>• 东方设计奖全国高校创新设计大赛国一等奖</div>
            <div>• 东方创意之星2024泰山文创设计大赛二等奖</div>
            <div>• 中国好创意（第十八届）暨全国数字艺术设计大赛陕西区三等奖</div>
            <div>• 第三届东方创意之星设计大赛铜奖</div>
            <div>• 第十二届"纸尚杯"贵州省国际高校大学生创业竞赛奖</div>
            <div>• 两项作品在第十届东方创意之星设计大赛中获得大赛陕西赛区三等奖</div>
            <div>• 两项作品在第十二届东方创意之星设计大赛中获得大赛陕西赛区三等奖</div>
          </div>
        </div>

        {/* 奖学金与荣誉 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">💰 奖学金与荣誉</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>• 三好学生 2022-2023学年度 二等奖学金</div>
            <div>• 2022-2023学年度 二等奖学金</div>
            <div>• 2023-2024学年度 二等奖学金 助学奖学金</div>
            <div>• 优秀团干部 入党积极分子</div>
            <div>• 主持人大赛优秀获奖者</div>
            <div>• 院级设计比赛获奖者</div>
            <div>• 2023-2024学年度 优秀团干部</div>
          </div>
        </div>

        {/* 职业技能 */}
        <div className="print-section mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">🛠️ 职业技能</h2>
          <ul className="text-sm space-y-2">
            <li>• 掌握PS、AI、AE、PR、prpcreate、MAYA、AXURE RP9、剪映</li>
            <li>• 熟悉Midjourney操作、LORA模型训练、SD操作</li>
            <li>• 了解MAYA、AXURE RP9</li>
          </ul>
        </div>

        {/* 自我评价 */}
        <div className="print-section">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">💭 自我评价</h2>
          <p className="text-sm leading-relaxed">
            做事认真，对人有耐心、责任心、恒心，对负责的工作会付出全部的精力和热情，有冲劲、性格开朗、易相处，
            有团队协作意识，善于沟通，愿意学习和创新、提升自己。
          </p>
        </div>
      </div>

      {/* 底部提示 - 不打印 */}
      <div className="no-print text-center py-8 text-gray-600">
        <p>点击右上角的"下载PDF"按钮保存简历，或使用"打印"按钮进行打印</p>
      </div>
    </div>
  )
}
