import { useRef } from "react"

interface PicType {
  appRef: any
  calcRate: () => void
  windowDraw: () => void
}
export default function useIndex(): PicType {
  // * 指向最外层容器
  const appRef = useRef<any>()
  // * 定时函数
  let timer = useRef<any>(0)
  // * 默认缩放值
  const scale = {
    width: '1920',
    height: '1080'
  }
  // * 设计稿尺寸（px）
  const baseWidth = 1920
  const baseHeight = 1080
  // * 需保持的比例（默认1.77778）
  const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
  const calcRate = () => {
    // 当前宽高比
    const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
    if (appRef.current) {
      if (currentRate > baseProportion) {
        // 表示更宽
        scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
        scale.height = (window.innerHeight / baseHeight).toFixed(5)
        appRef.current.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
      } else {
        // 表示更高
        scale.height = (window.innerWidth / baseProportion / baseHeight).toFixed(5)
        scale.width = (window.innerWidth / baseWidth).toFixed(5)
        appRef.current.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
      }
    }
  }

  const resize = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      calcRate()
    }, 200)
  }

  // 改变窗口大小重新绘制
  const windowDraw = () => {
    window.addEventListener('resize', resize)
  }

  return {
    appRef,
    calcRate,
    windowDraw
  }
}
