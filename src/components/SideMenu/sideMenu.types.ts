export interface ISideMenu {
  links: ILinkChildren[];
}

export type ILinkChildren = {
  name: string;
  link: string;
};
