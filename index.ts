import fs from 'fs';
import path from 'path';

function getPathAndFileName(fullPath: string): [string, string] {
  return [path.dirname(fullPath), path.win32.basename(fullPath)];
}

function generate_hoc(fileDir: string) {
  const [baseDir, fileName] = getPathAndFileName(fileDir);
  const indexFile = fs.readFileSync('./templates/hoc-index.txt', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const file = fs.readFileSync('./templates/hoc.txt', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const outputTxt = file.replace(/MyPage/g, fileName);
  const outputIndex = indexFile.replace(/MyPage/g, fileName);

  fs.mkdirSync(`./src/${baseDir}/${fileName}/with${fileName}`, {
    recursive: true,
  });
  fs.writeFileSync(
    `./src/${baseDir}/${fileName}/with${fileName}/index.tsx`,
    outputIndex,
    {
      encoding: 'utf-8',
      flag: 'w',
    }
  );
  fs.writeFileSync(
    `./src/${baseDir}/${fileName}/with${fileName}/with${fileName}.tsx`,
    outputTxt,
    {
      encoding: 'utf-8',
      flag: 'w',
    }
  );
}

function generate_page(fileDir: string) {
  const [baseDir, fileName] = getPathAndFileName(fileDir);
  const file = fs.readFileSync('./templates/page.txt', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const indexFile = fs.readFileSync('./templates/page-index.txt', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const typesFile = fs.readFileSync('./templates/types.txt', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const stylesFile = fs.readFileSync('./templates/styles.txt', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const outputTxt = file.replace(/MyPage/g, fileName);
  const outputIndex = indexFile.replace(/MyPage/g, fileName);
  const outputTypes = typesFile.replace(/MyPage/g, fileName);
  fs.mkdirSync(`./src/${baseDir}/${fileName}`, { recursive: true });
  fs.writeFileSync(`./src/${baseDir}/${fileName}/${fileName}.tsx`, outputTxt, {
    encoding: 'utf-8',
    flag: 'w',
  });
  fs.writeFileSync(`./src/${baseDir}/${fileName}/index.tsx`, outputIndex, {
    encoding: 'utf-8',
    flag: 'w',
  });
  fs.writeFileSync(`./src/${baseDir}/${fileName}/types.ts`, outputTypes, {
    encoding: 'utf-8',
    flag: 'w',
  });
  fs.writeFileSync(`./src/${baseDir}/${fileName}/styles.ts`, stylesFile, {
    encoding: 'utf-8',
    flag: 'w',
  });
}

function main() {
  const args: string[] = process.argv.splice(2);
  generate_hoc(args[0]);
  generate_page(args[0]);
}

if (require.main === module) {
  main();
}
