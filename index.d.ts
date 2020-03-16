interface Config {
  path: string // 复制路径
  hooks: Hooks // 钩子
}
interface Hooks {
  /**
   * seed 包启动时回调函数
   * @param op op.env - cmd 参数;
   * @param op op.targetPath 初始化路径;
   */
  beforeStart(op: HookStartOption): Promise<any>
  /**
   * seed 包复制前回调函数
   * @param op op.env - cmd 参数;
   * @param op op.targetPath 初始化路径;
   * @param op op.fileMap 复制 map;
   */
  beforeCopy(op: HookCopyOption): Promise<FileMap>
  /**
   * seed 包复制后回调函数
   * @param op op.env - cmd 参数;
   * @param op op.targetPath 初始化路径;
   * @param op op.fileMap 复制 map;
   */
  afterCopy(op: HookCopyOption): Promise<any> 
}

interface HookStartOption {
  env: Env // cmd 参数
  targetPath: string // 初始化路径
}

interface HookCopyOption {
  fileMap: FileMap,
  targetPath: string, // 初始化路径
  env: Env
}

interface Env {
  type?: string // 类型
}
interface FileMap {
  [orgPath: string]: string[] // 拷贝map
}


declare const config: Config;

export = config;