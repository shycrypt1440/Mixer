import { Chance } from 'chance';
import { mock } from 'jest-mock-extended';
import { TFile } from 'obsidian';

const chance = new Chance();

const mockTFile = jest.fn<TFile, [basename?: string, extension?: string]>(
  (basename = chance.word(), extension = 'md') => {
    const name = `${basename}.${extension}`;

    return mock<TFile>({
      path: `path/to/${name}`,
      basename,
      extension,
      name,
    });
  },
);

export { mockTFile as TFile };
