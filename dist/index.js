"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var absPath = path_1.default.resolve('.');
console.log('path: ', absPath);
function getPathAndFileName(fullPath) {
    return [path_1.default.dirname(fullPath), path_1.default.win32.basename(fullPath)];
}
function generate_hoc(fileDir) {
    var _a = getPathAndFileName(fileDir), baseDir = _a[0], fileName = _a[1];
    var indexFile = fs_1.default.readFileSync(absPath + "/templates/hoc-index.txt", {
        encoding: 'utf-8',
        flag: 'r',
    });
    var file = fs_1.default.readFileSync(absPath + "/templates/hoc.txt", {
        encoding: 'utf-8',
        flag: 'r',
    });
    var outputTxt = file.replace(/MyPage/g, fileName);
    var outputIndex = indexFile.replace(/MyPage/g, fileName);
    fs_1.default.mkdirSync("./src/" + baseDir + "/" + fileName + "/with" + fileName, {
        recursive: true,
    });
    fs_1.default.writeFileSync("./src/" + baseDir + "/" + fileName + "/with" + fileName + "/index.tsx", outputIndex, {
        encoding: 'utf-8',
        flag: 'w',
    });
    fs_1.default.writeFileSync("./src/" + baseDir + "/" + fileName + "/with" + fileName + "/with" + fileName + ".tsx", outputTxt, {
        encoding: 'utf-8',
        flag: 'w',
    });
}
function generate_page(fileDir) {
    var _a = getPathAndFileName(fileDir), baseDir = _a[0], fileName = _a[1];
    var file = fs_1.default.readFileSync(absPath + "/templates/page.txt", {
        encoding: 'utf-8',
        flag: 'r',
    });
    var indexFile = fs_1.default.readFileSync(absPath + "/templates/page-index.txt", {
        encoding: 'utf-8',
        flag: 'r',
    });
    var typesFile = fs_1.default.readFileSync(absPath + "/templates/types.txt", {
        encoding: 'utf-8',
        flag: 'r',
    });
    var stylesFile = fs_1.default.readFileSync(absPath + "/templates/styles.txt", {
        encoding: 'utf-8',
        flag: 'r',
    });
    var outputTxt = file.replace(/MyPage/g, fileName);
    var outputIndex = indexFile.replace(/MyPage/g, fileName);
    var outputTypes = typesFile.replace(/MyPage/g, fileName);
    fs_1.default.mkdirSync("./src/" + baseDir + "/" + fileName, { recursive: true });
    fs_1.default.writeFileSync("./src/" + baseDir + "/" + fileName + "/" + fileName + ".tsx", outputTxt, {
        encoding: 'utf-8',
        flag: 'w',
    });
    fs_1.default.writeFileSync("./src/" + baseDir + "/" + fileName + "/index.tsx", outputIndex, {
        encoding: 'utf-8',
        flag: 'w',
    });
    fs_1.default.writeFileSync("./src/" + baseDir + "/" + fileName + "/types.ts", outputTypes, {
        encoding: 'utf-8',
        flag: 'w',
    });
    fs_1.default.writeFileSync("./src/" + baseDir + "/" + fileName + "/styles.ts", stylesFile, {
        encoding: 'utf-8',
        flag: 'w',
    });
}
function main() {
    var args = process.argv.splice(2);
    generate_hoc(args[0]);
    generate_page(args[0]);
}
if (require.main === module) {
    main();
}
