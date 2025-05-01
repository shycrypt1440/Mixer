import { TFile } from 'obsidian';
import { stripExtension } from 'src/utils';

describe('stripExtension', () => {
  it('should return null on falsy input', () => {
    const result = stripExtension(null);
    expect(result).toBe(null);
  });

  it('should return full path if input does not have md extension', () => {
    const file = new TFile();
    file.path = 'path/to/foo.bar';
    file.extension = 'bar';

    const result = stripExtension(file);
    expect(result).toBe(file.path);
  });

  it('should strip the md extension', () => {
    const file = new TFile();
    file.path = 'path/to/foo.md';
    file.extension = 'md';

    const result = stripExtension(file);
    expect(result).toBe('path/to/foo');
  });

  it('should not strip md if it is a dot file', () => {
    const file = new TFile();
    file.path = '.md';
    file.extension = 'md';

    const result = stripExtension(file);
    expect(result).toBe(file.path);
  });
});
