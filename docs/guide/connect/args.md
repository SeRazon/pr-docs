# 参数

- 参数解析  
  执行 `--help` 获取详细信息 / Run `--help` to get more information  

  ```bash
  phi-recorder --render <谱面文件> [选项]
  phi-recorder --preview <谱面文件> [选项]

  选项:
    --output <文件/路径>
    --config <TOML文件/JSON字符串>
  
  示例:
    phi-recorder --render E:/Phi/Chronostasis.pez --config "{\"fps\": 30, \"resolution\": [1280, 720]}" --output E:/Phi/
    phi-recorder --render E:/Phi/Chronostasis.pez --config E:/config.toml --output E:/Phi/
  ```
