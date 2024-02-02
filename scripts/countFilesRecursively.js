const fs = require('fs');
const path = require('path');

function countFilesRecursively(directory) {
    let count = 0;

    function traverseDirectory(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isFile()) {
                count++;
            } else if (stats.isDirectory()) {
                traverseDirectory(filePath); // 递归遍历子文件夹
            }
        });
    }

    traverseDirectory(directory);
    return count;
}

const folderPath = 'D:/PrivateFiles/LearningCenter/data-structure&algorithm/algorithm/leetcode/src'; // 替换为实际文件夹路径
const totalFilesCount = countFilesRecursively(folderPath);
console.log(`Total number of files: ${totalFilesCount}`);