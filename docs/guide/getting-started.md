# 快速开始

## 下载

- [Phi Recorder](https://github.com/2278535805/Phi-Recorder/releases) (软件本体)
- [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/latest) (渲染视频依赖)

## 依赖安装

### 设置环境变量 (推荐)

1. 下载 FFmpeg-full 并解压到合适的地方，例如 `C:/Program Files/ffmpeg`
2. 将 `ffmpeg.exe` 所在的目录添加到环境变量 `Path` 中
3. 打开命令行，输入 `ffmpeg -version`，如果出现版本信息，则说明环境变量设置成功

### 复制进软件安装目录 (备选)

1. 将 `ffmpeg.exe` 以及其余的库 复制到 `Phi Recorder` 软件安装目录

## 推荐设置

1. 选择 `指定 AVC 编码器` 和 `指定 HEVC 编码器` 右侧的按钮自动选择或手动填写一个合适的视频编码器，填写后不会每次渲染都获取一次编码器，可节省加载时间，但更换显卡后需要重新填写此项
2. `绑定 RPE` 在文件对话框中选择 `Re:PhiEdit` 所在的目录即可完成绑定

## 常见问题

- 主程序无法显示但可以正常打开谱面文件预览，也可以使用命令行正常发起渲染  
  请检查 Edge 浏览器是否能够正常运行，可尝试重装 Edge 浏览器 或 自行安装 WebView2  
  [下载 Edge](https://www.microsoft.com/zh-cn/edge/download)
