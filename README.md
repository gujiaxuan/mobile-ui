# 安装pnpm

参考官网 https://pnpm.io/zh/installation

# 前端规范和说明

- 全局安装可视化git提交工具
  - pnpm install -g commitizen , 提交commit，使用命令git cz
- vscode 插件 安装eslint
- 接口统一放在根目录api下面,按模块分类
- 常量配置在当前文件夹下新建constants文件，定义常量
- routes和proxy都在umirc下
- 引入less文件统一 ,避免重名影响。

````jsx | pure
  import styles from 'index.less';

  const a = () => <div className={styles['类名']} >hh</div>
  ```

# 本地运行
pnpm dev
````
