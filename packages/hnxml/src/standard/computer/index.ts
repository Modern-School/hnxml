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
   */
  security: string;
  /**
   * AllowsDefaultBootModule is default to true and means that when you connect to a node
   * it will automatically launch it's program (the last daemon defined in this file) and
   * put it up on the display module.
   */
  allowsDefaultBootModule: string;
  /**
   * icon:  not including this uses the default set by security level:
   * laptop, chip, kellis, tablet, ePhone, ePhone2
   *
   * LABYRINTHS ONLY:
   * Psylance, PacificAir, Alchemist, DLCLaptop, DLCPC1, DLCPC2, DLCServer
   */
  icon: ComputerIcon;
  /**
   * for the type flag:  1=  corporate, 2 = Home, 3 = server 4 = empty
   *
   * you can also use the word "empty" to make sure it launches without generating junk files and IRC.
   */
  type: "1" | "2" | "3" | "4" | "5" | "empty";
}
export namespace Computer {
  export interface adminPass {
    pass: string;
    children?: never;
  }
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
  export interface ports {
    children: string;
  }
  export interface proxy {
    time: string;
    children?: never;
  }
  export interface portsForCrack {
    val: string;
    children?: never;
  }
  export interface firewall {
    level: string;
    solution: string;
    additionalTime: string;
    children?: never;
  }
  export interface trace {
    time: string;
    children?: never;
  }
  export interface admin {
    type: "basic" | "progress" | "fase" | "none";
    resetPassword?: "true" | "false";
    isSuper?: "true" | "false";
    children?: never;
  }
  export interface portRemap {
    children: string;
  }
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
}
