import { INavLink } from "./INavLink";

interface ICta extends INavLink {
  icon: React.ReactNode;
  variant?:string
}
export type { ICta };
