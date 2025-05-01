import { LinkCache, TFile } from 'obsidian';

export function stripExtension(file: TFile): string {
  let retVal: string = null;

  if (file) {
    const { path } = file;
    retVal = path;

    if (file.extension === 'md') {
      const index = path.lastIndexOf('.');

      if (index !== -1 && index !== path.length - 1 && index !== 0) {
        retVal = path.slice(0, index);
      }
    }
  }

  return retVal;
}

export enum LinkType {
  None = 0,
  Normal = 1,
  Heading = 2,
  Block = 4,
}

export function getLinkType(linkCache: LinkCache): LinkType {
  let type = LinkType.None;

  if (linkCache) {
    // remove the display text before trying to parse the link target
    const linkStr = linkCache.link.split('|')[0];

    if (linkStr.includes('#^')) {
      type = LinkType.Block;
    } else if (linkStr.includes('#')) {
      type = LinkType.Heading;
    } else {
      type = LinkType.Normal;
    }
  }

  return type;
}
