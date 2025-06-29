/**
 * icons that computers can use.
 * @localeCN 节点可以使用的图标大全
 */
export type ComputerIcon =
  | "laptop"
  | "chip"
  | "kellis"
  | "tablet"
  | "ePhone"
  | "ePhone2"
  | "Psylance"
  | "PacificAir"
  | "Alchemist"
  | "DLCLaptop"
  | "DLCPC1"
  | "DLCPC2"
  | "DLCServer";

export interface HXComputer {
  id: string;
  name: string;
  ip: string;
  /**
   * Security is a number from 0 to 5 that represents how hard it is to hack
   * From 1-4 it will need that many ports to open, 4 and above will automatically
   * add other security to scale it up easily, you can overwrite specifics below (recommended)
   * @localeCN 安全性是一个从0到5的数字，代表被入侵的难度。
   *
   * 默认情况下：
   *
   * |安全等级 | 需要破解端口数 | 代理 | 防火墙 | 追踪 |
   * | --- | --- | --- | --- | --- |
   * | 1-3 | 总端口数 - 1 | 不启用 | 不启用 | 不启用 |
   * | 4 | 总端口数 - 1 | 不启用 | 不启用 | 启用 |
   * | ≥5 | 总端口数 - 2 | 启用 | 启用 | 启用 |
   *
   * 参考：<https://github.com/Modern-School/OpenHacknet/blob/main/Computer.cs#L109-L140>
   */
  security: string;
  /**
   * AllowsDefaultBootModule is default to true and means that when you connect to a node
   * it will automatically launch it's program (the last daemon defined in this file) and
   * put it up on the display module.
   * @localeCN AllowsDefaultBootModule 默认为 true，意味着当你连接到一个节点时，它会自动打开节点中定义的最后一个守护进程页面，并将其显示在 `display` 上。
   */
  allowsDefaultBootModule: string;
  /**
   * icon:  not including this uses the default set by security level:
   * laptop, chip, kellis, tablet, ePhone, ePhone2
   *
   * LABYRINTHS ONLY:
   * Psylance, PacificAir, Alchemist, DLCLaptop, DLCPC1, DLCPC2, DLCServer
   * @localeCN 没主动声明的话会根据安全等级设置图标。
   */
  icon: ComputerIcon;
  /**
   * for the type flag:  1=  corporate, 2 = Home, 3 = server 4 = empty
   *
   * you can also use the word "empty" to make sure it launches without generating junk files and IRC.
   * @localeCN 上述内容有误，实际情况是只有 3 种处理方式：
   * | type | 处理方式 |
   * | --- | --- |
   * | `4`, 特例 `"empty"`| 不生成垃圾文件 |
   * | `5` | 生成 eos 设备的文件 |
   * | 其他 `number` | 随机生成垃圾文件，且逻辑一致 |
   *
   * 参考：<https://github.com/Modern-School/OpenHacknet/blob/main/ComputerLoader.cs#L73-L81>
   * <https://github.com/Modern-School/OpenHacknet/blob/main/Computer.cs#L51-L106>
   */
  type: "empty" | number;
}
export namespace Computer {
  /**
   * This will determine the password for the "admin" login.
   * @localeCN "admin" 账号的密码
   * @example
   * ```xml
   * <adminPass pass="password" />
   * ```
   */
  export interface adminPass {
    pass: string;
    children?: never;
  }
  /**
   * Accounts for nodes within
   * @localeCN 节点的账号
   * @example
   * ```xml
   * <account username="Matt" password="testpass" type="ALL" />
   * ```
   */
  export interface account {
    username: string;
    password: string;
    /**
     * Adds an account to this computer.
     * Type represents it's privileges :
     *
     * ADMIN = 0;
     * ALL = 1; (Can Delete files)
     * MAIL = 2; (for mail accounts)
     * MISSIONLIST = 3; (for mission listing server accounts)
     *
     * You can use the number or the name of the type.
     */
    type: string;
    children?: never;
  }
  /**
   * Node's ports
   * @localeCN 节点拥有的所有端口
   * @example
   * ```xml
   * <ports>21, 22, 25, 80, 1433, 104, 6881, 443, 192, 554</ports>
   * ```
   */
  export interface ports {
    children: string;
  }
  /**
   * Allows you to remap ports. You can use as many as you'd like.
   * @localeCN 更改某些协议的端口号
   * @example
   * ```xml
   * <portRemap>21=265,80=8080</portRemap>
   * ```
   */
  export interface portRemap {
    children: string;
  }
  /**
   * Proxy server. Set value to -1 to make it disappear. Time is a multiplier on the base time (30 seconds).
   * Time of 1 is "normal" and time of 2 is "long" - use the multiplier here to change the feel of it.
   * @localeCN 代理。`val` 为 `-1` 时不启用代理。代理阻碍时间将会是 基础时间（30秒）✕ val 值
   * @example
   * ```xml
   * <proxy time="2" />
   * ```
   */
  export interface proxy {
    time: string | number;
    children?: never;
  }
  /**
   * Number of ports to be open to allow porthack to run
   * @locale 多少端口开放后允许使用 `PortHack`
   * @example
   * ```xml
   * <portsForCrack val="0" />
   * ```
   */
  export interface portsForCrack {
    val: string | number;
    children?: never;
  }
  /**
   * Adds a firewall - set level to -1 to remove it.
   * Solution is the solution the player will need to find to break it,
   * the level should ideally be equal to the solution length, but can be longer
   * (Not shorter though!) - additional time is the nonstandard extra evaluation time
   * per step that the Hacknet solver will need
   * @example
   * ```xml
   * <firewall level="6" solution="Scypio" additionalTime="1.0"/>
   * ```
   */
  export interface firewall {
    level: string | number;
    solution: string;
    additionalTime: string | number;
    children?: never;
  }
  /**
   * Adds a trace timer of this many seconds. Set to -1 to remove
   * @example
   * ```xml
   * <trace time="5678" />
   * ```
   */
  export interface trace {
    time: string | number;
    children?: never;
  }
  /**
   * Auto-administrator adder - this resets the ports and stuff when the player
   * disconnects. Available types are `"basic"`, `"progress"` and `"fast"` -
   * basic only resets after 15 seconds or so.
   * Progress admins reset ports, firewall and proxy progress, but only if the player isn't the admin.
   * Super admins reset passwords instantly on fast mode
   *
   * for servers that insta-reset whenever you disconnect use:
   * ```<admin type="fast" resetPassword="true" isSuper="true">```
   *
   * for general computers, it's best practice to use a progress admin unless you want port changes to persist between disconnects.
   * ```<admin type="progress">```
   *
   * For computers that have the "security" number in the header set to more than 4, remove the auto-added admin with this:
   * ```<admin type="none">```
   * @localeCN 自动管理员添加器 - 当玩家断开连接时，此功能会重置端口等设置。
   * 可用类型包括 `"basic"`、`"progress"`和 `"fast"`：
   * basic 仅在大约15秒后重置。
   * progress 会重置端口、防火墙和代理进度，但仅当玩家不是管理员时生效。
   * fast 会立即重置密码。
   *
   * 若需在玩家断开连接时立即重置的服务器，请使用：
   * ```<admin type="fast" resetPassword="true" isSuper="true">```
   *
   * 对于普通计算机，最佳实践是使用进度管理员，除非你希望在断开连接后端口不关闭：
   * ```<admin type="progress">```
   *
   * 对于"security"属性值大于4的节点，可通过这样声明移除自动添加的管理员：
   * ````<admin type="none">````
   */
  export interface admin {
    type: "basic" | "progress" | "fase" | "none";
    resetPassword?: "true" | "false";
    isSuper?: "true" | "false";
    children?: never;
  }
  /**
   * This links this computer to another (one way) - if you scan from it, it reveals the links
   */
  export interface dlink {
    target: string;
    children?: never;
  }
  export interface positionNear {
    target: string;
    pisition: string;
    total: string;
    extraDistance: string;
    force: "true" | "false";
    children?: never;
  }
  export interface file {
    path: string;
    name: string;
    children: void | string;
  }
  export interface customthemefile {
    path: string;
    name: string;
    themePath: string;
    childre: void | string;
  }
  export interface encryptedFile {
    path: string;
    name: string;
    extension?: string;
    ip: string;
    header: string;
    pass?: String;
  }
  /**
   * The tracker is the 'passive trace' - if this tag is here, after a player disconnects from this machine
   * if they have left logs downloading or deleting a file, they will be attacked by an auto-generated AI hacker
   * that will try and reset them, or make them do the ETAS if the player has the flag `CSEC_Member`
   */
  export type tracker = { children?: never };
  /**
   * Adding this section will create a second computer on load, attached to this
   * which is an eos device, all set up, with these files on it.
   *
   * It'll also automatically generate some apps and save files and things
   * for flavor.
   */
  export namespace eosDevice {
    export interface root {
      name: string;
      id: string;
      icon: ComputerIcon;
      empty?: "true" | "false";
      passOverride?: string;
      children: void | Children | Children[];
    }
    export type note = { children: void | string };
    export interface mail {
      username: string;
      pass: string;
      children?: never;
    }
    export type file = Computer.file;
    export type Children = note | mail | file;
  }
}
