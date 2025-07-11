export class HackerScript {
  public static TARGET_COMP = "[TARGET_COMP]";
  public static SOURCE_COMP = "[SOURCE_COMP]";

  private readonly enter: string = "$#%#$";
  private scripts: string[] = [];
  private append(str: string): void {
    this.scripts.push(`${str} ${this.enter}`);
  }
  public end(): string {
    this.scripts.push("");
    return this.scripts.join("\n");
  }
  public config(target: string, source: string, basedelay: number): this {
    this.append(`config ${target} ${source} ${basedelay}`);
    return this;
  }
  public connect(): this {
    this.append("connect");
    return this;
  }
  public disconnect(): this {
    this.append("disconnect");
    return this;
  }
  public delay(time: number): this {
    this.append(`delay ${time}`);
    return this;
  }
  public openPort(port: number): this {
    this.append(`openPort ${port}`);
    return this;
  }
  public stopMusic(): this {
    this.append("stopMusic");
    return this;
  }
  public startMusic(): this {
    this.append("startMusic");
    return this;
  }
  public clearTerminal(): this {
    this.append("clearTerminal");
    return this;
  }

  public write(content: string): this {
    this.append(`write ${content}`);
    return this;
  }
  public write_silent(content: string): this {
    this.append(`write_silent ${content}`);
    return this;
  }
  public writel(content: string): this {
    this.append(`writel ${content}`);
    return this;
  }
  public writel_silent(content: string): this {
    this.append(`writel_silent ${content}`);
    return this;
  }
  public hideNetMap(): this {
    this.append("hideNetMap");
    return this;
  }
  public hideRam(): this {
    this.append("hideRam");
    return this;
  }
  public hideDisplay(): this {
    this.append("hideDisplay");
    return this;
  }
  public hideTerminal(): this {
    this.append("clearTerminal");
    return this;
  }
  public showNetMap(): this {
    this.append("showNetMap");
    return this;
  }
  public showRam(): this {
    this.append("showRam");
    return this;
  }
  public showDisplay(): this {
    this.append("showDisplay");
    return this;
  }
  public showTerminal(): this {
    this.append("clearTerminal");
    return this;
  }
  public trackseq(): this {
    this.append("trackseq");
    return this;
  }
  public instanttrace(): this {
    this.append("instanttrace");
    return this;
  }
  public forkbomb(): this {
    this.append("forkbomb");
    return this;
  }
  public flash(): this {
    this.append("flash");
    return this;
  }
  public delete(filepath: string, filename: string): this {
    this.append(`delete ${filepath} ${filename}`);
    return this;
  }
  public setAdminPass(newpass: string): this {
    this.append(`setAdminPass ${newpass}`);
    return this;
  }
  public makeFile(path: string, name: string, content: string): this {
    this.append(`makeFile ${path} ${name} ${content}`);
    return this;
  }
  public openCDTray(): this {
    this.append("openCDTray");
    return this;
  }
  public closeCDTray(): this {
    this.append("closeCDTray");
    return this;
  }
}
