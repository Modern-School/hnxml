interface HXGoals {
  /**
   * 必须显式声明 children 才能禁止自闭和写法 `<goals/>`
   *
   * 若内容为空，要求书写jsx时使用 `<goals>{" " as const}<goals>`
   */
  children: " " | HXGoal | HXGoal[];
  key?: never;
}

/**
 * Represents all possible mission goal types
 */
type HXGoal =
  & (
    | Goal.Filedeletion
    | Goal.Clearfolder
    | Goal.Filedownload
    | Goal.Filechange
    | Goal.Getadmin
    | Goal.Getstring
    | Goal.Delay
    | Goal.Hasflag
    | Goal.Fileupload
    | Goal.AddDegree
    | Goal.Wipedegrees
    | Goal.Sendemail
    | Goal.Getadminpasswordstring
  )
  & { children?: never };

export namespace Goal {
  /**
   * Task to delete the file on node target, at path/file
   * @example This entry asks for deletion of home/asdf.txt on machine with ID "missionTestNode"
   * ```xml
   * <goal type="filedeletion" target="advExamplePC" file="asdf.txt" path="home"/>
   * ```
   */
  export type Filedeletion = {
    type: "filedeletion";
    target: string;
    file: string;
    path: string;
  };

  /**
   * Task to delete ALL files on node target, in the folder at path
   * @example
   * ```xml
   * <goal type="clearfolder" target="advExamplePC" path="home"/>
   * ```
   */
  export type Clearfolder = {
    type: "clearfolder";
    target: string;
    path: string;
  };

  /**
   * Task to download the file at the path
   * @example This entry asks for the player to download (SCP) home/asdf.txt on machine with ID "missionTestNode"
   * ```xml
   * <goal type="filedownload" target="advExamplePC" file="downloadFile.txt" path="home"/>
   * ```
   */
  export type Filedownload = {
    type: "filedownload";
    target: string;
    file: string;
    path: string;
  };

  /**
   * Task to add the text specified by keyword to the specified file. This is usually achieved by the "replace" command.
   * @example It's possible to make the keyword a larger block and task the player to replace one file with another.
   *
   * ```xml
   * <!-- This entry asks for the player to add the text "extension" to the file -->
   * <goal type="filechange" target="advExamplePC" file="changeFile.txt" path="home" keyword="extension"/>
   * ```
   * Task to remove the text specified by keyword to the specified file. This is usually achieved by the "replace" command.
   * The extra attribute "removal" tasks the player with removing a block of text from a file. Combining this with another filechange task can require a "replacement" of text (removing some, adding a different block).
   * @example This entry asks for the player to remove the text "data" from the file
   * ```xml
   * <goal type="filechange" target="advExamplePC" file="changeFile.txt" path="home" keyword="data" removal="true" caseSensitive="true"/>
   * ```
   */
  export type Filechange = {
    type: "filechange";
    target: string;
    file: string;
    path: string;
    keyword: string;
    removal?: string;
    caseSensitive?: string;
  };

  /**
   * Task to get admin on the target system
   *
   * 获取目标系统的管理员权限
   * @example NOTE: This will only be 'passed' if the player responds *while they are the admin of the system*
   * Servers that have an "admin" field that resets the password automatically will make this mission not complete if
   * it's reset in the time that the player takes to disconnect from the system and respond
   * ```xml
   * <goal type="getadmin" target="advExamplePC"/>
   * ```
   */
  export type Getadmin = {
    type: "getadmin";
    target: string;
  };

  /**
   *  Task to require a string passed in via the "Additional Info" field in the reply email screen.
   * @example This task requires the player to reply with the string "password" added.
   * ```xml
   * <goal type="getstring" target="password"/>
   * ```
   */
  export type Getstring = {
    type: "getstring";
    target: string;
  };

  /**
   * This task will not complete until [time] seconds after the first attempt to complete it has been made.
   *
   * This is mostly only useful for use with the "activeCheck" flag on the mission set to true.
   * A mission with a delay goal, that is silenced and that's set to auto-check essentially acts as a delay timer buffer between responses for missions
   * This can add a human-feeling response time to missions.
   * @example
   * ```xml
   * <goal type="delay" time="10.0"/>
   * ```
   */
  export type Delay = {
    type: "delay";
    time: string;
  };

  /**
   * This will only accept if the target flag has been set.
   *
   * Mission end functions can use the function addFlags:[flagname],[flagname2],[etc] to set flags, then you can have a mission only complete if a flag is set.
   * Some daemons add flags when events happen. For example, a pacemaker server adds the flag "PATIENT_NAME:DEAD" when the patient dies.
   * @example
   * ```xml
   * <goal type="hasflag" target="flagName"/>
   * ```
   */
  export type Hasflag = {
    type: "hasflag";
    target: string;
  };

  /**
   * Task to upload the file on server bitMission00 at bin/target_filename.txt to server with ID "destComp" to folder bin
   * The folder name Dest/Uploads is the folder that files are uploaded to when using an Upload server daemon, so it's the most useful location normally
   * @example
   * ```xml
   * <goal type="fileupload" target="advExamplePC" file="asdf.txt" path="home" destTarget="introFactionHomeNode" destPath="Drop/Uploads"/>
   * ```
   * For upload tasks, adding the flag decrypt=true requires the player the decypher the file before uploading it. If that file is password protected, you must include the password
   * in the goal with decryptPass="password"
   *
   * For uploading encrypted files - put the encrypted name here (ending with .dec usually). It doesn't matter what the filename of the decrypted one becomes
   * The code will check for the right content.
   * @example
   * ```xml
   * <goal type="fileupload" target="advExamplePC" file="asdf2.dec" path="home" destTarget="introFactionHomeNode" destPath="home" decrypt="true" decryptPass="password"/>
   * ```
   */
  export type Fileupload = {
    type: "fileupload";
    target: string;
    file: string;
    path: string;
    destTarget: string;
    destPath: string;
    decrypt?: string;
    decryptPass?: string;
  };

  /**
   * Task to add the degree matching the degree name and uni and GPA details for the listed owner. This task *requires* an academic server to exist.
   *
   * An owner is defined by name - to add a person to the simulation, define them in the People folder and refer to them by name here\
   * The academic server must have the following properties:\
   * 1: ID must be "academic" \
   * 2: It must contain an Academic Database Daemon-
   * @example
   * ```xml
   * <goal type="AddDegree" owner="John Stalvern" degree="Masters in Digital Security" uni="Manchester University" gpa="3.0"/>
   * ```
   */
  export type AddDegree = {
    type: "AddDegree";
    owner: string;
    degree: string;
    uni: string;
    gpa: string;
  };

  /**
   * Task to remove all degrees from the academic server for a specified owner. Note that for this one, you *MUST* have the ID of your database be "academic" or it wont find it.
   * @example
   * ```xml
   * <goal type="wipedegrees" owner="John Stalvern"/>
   * ```
   */
  export type Wipedegrees = {
    type: "wipedegrees";
    owner: string;
  };

  /**
   * Task to have an email sent to a specified address with a defined subject. This one requires an email
   *
   * This is mostly useful for detecting sent medical records from a medical database. Medical records have the subject line: "MedicalRecord - Lastname_Firstname"
   * @example be sent to mailuser123@jmail.com with the subject "Email Subject!". More specifically, it requires that file to exist in their inbox
   * folder on the server ID "jmail" that contains a mail server.
   * ```xml
   * <goal type="sendemail" mailServer="jmail" recipient="mailuser123" subject="Email Subject!"/>
   * ```
   */
  export type Sendemail = {
    type: "sendemail";
    mailServer: string;
    recipient: string;
    subject: string;
  };

  /**
   * Task to get admin password string (DLC only)
   * @example
   * ```xml
   * <!-- DLC Goals -->
   * <goal type="getadminpasswordstring" target="advExamplePC"/>
   * ```
   */
  export type Getadminpasswordstring = {
    type: "getadminpasswordstring";
    target: string;
  };

  /** Death row missions **not implemented** for mods yet. This type is declared but will never be used.
   * @example
   * ```xml
   * <!-- Death row missions not implemented for mods yet -->
   * <goal type="removeDeathRowRecord" fname="Matt" lname="Trobbiani"/> -->
   * ```
   */
  type RemoveDeathRowRecord = never;

  /** Death row missions **not implemented** for mods yet. This type is declared but will never be used.
   * @example
   * ```xml
   * <!-- Death row missions not implemented for mods yet -->
   * <goal type="modifyDeathRowRecord" fname="Matt" lname="Trobbiani">Last Words Here</DeathRowMission>
   */
  type ModifyDeathRowRecord = never;
}
export type { HXGoal, HXGoals };
