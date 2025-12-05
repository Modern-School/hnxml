import { Daemon } from "../standard/computer/daemon.ts";
import { Computer, HXComputer } from "../standard/computer/index.ts";
import { HXMissionEmail } from "../standard/mission/email.ts";

export interface ComputerElements {
  Computer: HXComputer;
  adminPass: Computer.adminPass;
  account: Computer.account;
  ports: Computer.ports;
  portRemap: Computer.portRemap;
  proxy: Computer.proxy;
  portsForCrack: Computer.portsForCrack;
  firewall: Computer.firewall;
  trace: Computer.trace;
  admin: Computer.admin;
  dlink: Computer.dlink;
  positionNear: Computer.positionNear;
  file: Computer.file;
  customthemefile: Computer.customthemefile;
  encryptedFile: Computer.encryptedFile;
  tracker: Computer.tracker;

  eosDevice: Computer.eosDevice.root;
  note: Computer.eosDevice.note;
  mail: Computer.eosDevice.mail;

  mailServer: Daemon.mailServer.root;
  email: HXMissionEmail | Daemon.mailServer.email;

  uploadServerDaemon: Daemon.uploadServerDaemon;
  addWebServer: Daemon.addWebServer;
  addOnlineWebServer: Daemon.addOnlineWebServer;
  deathRowDatabase: Daemon.deathRowDatabase;
  academicDatabase: Daemon.academicDatabase;
  ispSystem: Daemon.ispSystem;

  messageBoard: Daemon.messageBoard.root;
  thread: Daemon.messageBoard.thread;

  MedicalDatabase: Daemon.MedicalDatabase;
  HeartMonitor: Daemon.HeartMonitor;
  PointClicker: Daemon.PointClicker;
  SongChangerDaemon: Daemon.SongChangerDaemon;
  variableMissionListingServer: Daemon.variableMissionListingServer;
  missionHubServer: Daemon.missionHubServer;
  CreditsDaemon: Daemon.CreditsDaemon;
  FastActionHost: Daemon.FastActionHost;
  memoryDumpFile: Daemon.memoryDumpFile;

  Memory: Daemon.Memory.root;
  Commands: Daemon.Memory.Commands;
  Command: Daemon.Memory.Command;
  Data: Daemon.Memory.Data | Daemon.DatabaseDaemon.TextRecord.Data;
  Block: Daemon.Memory.Block;
  Images: Daemon.Memory.Images;
  Image: Daemon.Memory.Image;

  CustomConnectDisplayDaemon: Daemon.CustomConnectDisplayDaemon;
  LogoCustomConnectDisplayDaemon: Daemon.LogoCustomConnectDisplayDaemon;
  WhitelistAuthenticatorDaemon: Daemon.WhitelistAuthenticatorDaemon;
  MarkovTextDaemon: Daemon.MarkovTextDaemon;

  IRCDaemon: Daemon.IRCDaemon.root;
  user: Daemon.IRCDaemon.user;
  post: Daemon.IRCDaemon.post;

  DatabaseDaemon: Daemon.DatabaseDaemon.root<
    Daemon.DatabaseDaemon.AllDatabaseDaemon
  >;

  GitCommitEntry: Daemon.DatabaseDaemon.GitCommitEntry.root;
  EntryNumber: Daemon.DatabaseDaemon.GitCommitEntry.EntryNumber;
  ChangeFiles: Daemon.DatabaseDaemon.GitCommitEntry.ChangeFiles;
  String: Daemon.DatabaseDaemon.GitCommitEntry._String;
  Message: Daemon.DatabaseDaemon.GitCommitEntry.Message;
  UserName: Daemon.DatabaseDaemon.GitCommitEntry.UserName;
  SourceIP: Daemon.DatabaseDaemon.GitCommitEntry.SourceIP;

  TextRecord: Daemon.DatabaseDaemon.TextRecord.root;
  Title: Daemon.DatabaseDaemon.TextRecord.Title;
  // Data: Daemon.DatabaseDaemon.TextRecord.Data;
  OnlineAccount: Daemon.DatabaseDaemon.OnlineAccount.root;
  ID: Daemon.DatabaseDaemon.OnlineAccount.ID | Daemon.DatabaseDaemon.Account.ID;
  Username: Daemon.DatabaseDaemon.OnlineAccount.Username;
  BanStatus:
    | Daemon.DatabaseDaemon.OnlineAccount.BanStatus
    | Daemon.DatabaseDaemon.CAROData.BanStatus;
  Notes:
    | Daemon.DatabaseDaemon.OnlineAccount.Notes
    | Daemon.DatabaseDaemon.SurveillanceProfile.Notes;

  CAROData: Daemon.DatabaseDaemon.CAROData.root;
  UserID: Daemon.DatabaseDaemon.CAROData.UserID;
  Headshots: Daemon.DatabaseDaemon.CAROData.Headshots;
  Kills:
    | Daemon.DatabaseDaemon.CAROData.Kills
    | Daemon.DatabaseDaemon.Account.Kills;
  Rank:
    | Daemon.DatabaseDaemon.CAROData.Rank
    | Daemon.DatabaseDaemon.Account.Rank;
  Crowbars: Daemon.DatabaseDaemon.CAROData.Crowbars;
  InventoryID: Daemon.DatabaseDaemon.CAROData.InventoryID;
  // BanStatus: Daemon.DatabaseDaemon.CAROData.BanStatus;

  Account: Daemon.DatabaseDaemon.Account.root;
  // ID: Daemon.DatabaseDaemon.Account.ID;
  Cash: Daemon.DatabaseDaemon.Account.Cash;
  Bank: Daemon.DatabaseDaemon.Account.Bank;
  Apartments: Daemon.DatabaseDaemon.Account.Apartments;
  Vehicles: Daemon.DatabaseDaemon.Account.Vehicles;
  PegasusVehicles: Daemon.DatabaseDaemon.Account.PegasusVehicles;
  // Rank: Daemon.DatabaseDaemon.Account.Rank;
  RP: Daemon.DatabaseDaemon.Account.RP;
  // Kills: Daemon.DatabaseDaemon.Account.Kills;

  SurveillanceProfile: Daemon.DatabaseDaemon.SurveillanceProfile.root;
  Name: Daemon.DatabaseDaemon.SurveillanceProfile.Name;
  Age: Daemon.DatabaseDaemon.SurveillanceProfile.Age;
  HomeCity: Daemon.DatabaseDaemon.SurveillanceProfile.HomeCity;
  // Notes: Daemon.DatabaseDaemon.SurveillanceProfile.Notes;
  CriminalRecord: Daemon.DatabaseDaemon.SurveillanceProfile.CriminalRecord;
}

const _Computer = "Computer";
export { _Computer as Computer };

export const MedicalDatabase = "MedicalDatabase";
export const HeartMonitor = "HeartMonitor";
export const PointClicker = "PointClicker";
export const SongChangerDaemon = "SongChangerDaemon";
export const CreditsDaemon = "CreditsDaemon";
export const FastActionHost = "FastActionHost";
export const CustomConnectDisplayDaemon = "CustomConnectDisplayDaemon";
export const LogoCustomConnectDisplayDaemon = "LogoCustomConnectDisplayDaemon";
export const WhitelistAuthenticatorDaemon = "WhitelistAuthenticatorDaemon";
export const MarkovTextDaemon = "MarkovTextDaemon";
export const IRCDaemon = "IRCDaemon";
export const DatabaseDaemon = "DatabaseDaemon";
export const GitCommitEntry = "GitCommitEntry";
export const EntryNumber = "EntryNumber";
export const ChangeFiles = "ChangeFiles";
export const String = "String";
export const Message = "Message";
export const UserName = "UserName";
export const SourceIP = "SourceIP";
export const TextRecord = "TextRecord";
export const Title = "Title";
export const OnlineAccount = "OnlineAccount";
export const ID = "ID";
export const Username = "Username";
export const BanStatus = "BanStatus";
export const Notes = "Notes";
export const CAROData = "CAROData";
export const UserID = "UserID";
export const Headshots = "Headshots";
export const Kills = "Kills";
export const Rank = "Rank";
export const Crowbars = "Crowbars";
export const InventoryID = "InventoryID";
export const Account = "Account";
export const Cash = "Cash";
export const Bank = "Bank";
export const Apartments = "Apartments";
export const Vehicles = "Vehicles";
export const PegasusVehicles = "PegasusVehicles";
export const RP = "RP";
export const SurveillanceProfile = "SurveillanceProfile";
export const Name = "Name";
export const Age = "Age";
export const HomeCity = "HomeCity";
export const CriminalRecord = "CriminalRecord";
