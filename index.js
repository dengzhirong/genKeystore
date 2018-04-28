/*
 * 批量生成签名keystore脚本
 * author: dengzhirong
 * Date: 2018-04-28 19:59
 */
const exec = require('child_process').exec;
const fs = require('fs');
const Path = require('path');

const outputPath = './keys'; // 签名文件导出目录
const KeysData = require('./keysData.js');

// 执行签名脚本
makeOutputDir();
batchGenKeyStore(KeysData);

// 批量生成签名文件
function batchGenKeyStore(keystoreMaps) {
    console.log(typeof keystoreMaps);
    if(!keystoreMaps || typeof keystoreMaps != 'object') {return;}
    keystoreMaps.forEach(keyCfg => {
        genKeyStore(keyCfg);
    });
}

// 生成签名文件
function genKeyStore(keyCfg) {
    if(!keyCfg || typeof keyCfg != 'object') {return;}
    let outputDir = Path.join(__dirname, outputPath);
    let keyCommand = `keytool -genkey -v -alias tomcat -keyalg RSA -keystore ${outputDir}/${keyCfg[0]}.keystore -dname "CN=${keyCfg[2]},OU=${keyCfg[3]},O=${keyCfg[3]},L=guangdong,ST=guangdong,C=CN" -validity 3650 -storepass ${keyCfg[1]} -keypass ${keyCfg[1]}`;
    console.log(`正在生成 ${keyCfg[0]}.keystore ...`);
    exec(keyCommand, function(error, stdout, stderr){
        if(error) {
            console.log(`生成 ${keyCfg[0]}.keystore 失败`);
            console.error('error: ' + error);
            return;
        }
        console.log(`已生成 ${keyCfg[0]}.keystore`);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });
}

// 创建output文件夹
function makeOutputDir() {
    let outputDir = Path.join(__dirname, outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
}