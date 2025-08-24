# 参数

- 参数解析  
  执行 `--help` 获取详细信息 / Run `--help` to get more information  

  ```bash
  phi-recorder --render --input <谱面文件> [选项]
  phi-recorder --preview --input <谱面文件> [选项]

  选项:
    --input   -i   <文件/路径>
    --output  -o   <文件/路径>
    --config  -c   <TOML文件/JSON字符串>
    --info    -ci  <JSON字符串>
  
  示例:
    phi-recorder --render --input "E:/Phi/Chronostasis.pez" --config "{\"fps\": 30, \"resolution\": [1280, 720]}" --output "E:/Phi/"
    phi-recorder --render --input "E:/Phi/Chronostasis.pez" --config "E:/config.toml" --output "E:/Phi/"
  ```
