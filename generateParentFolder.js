const fs = require('fs');
const path = require('path');

function generateParentFolders(dirPath) {
  // 读取指定文件夹中的所有文件
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // 遍历文件
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);

      // 检查文件状态
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        // 只处理文件，忽略文件夹
        if (stats.isFile()) {
          const fileExt = path.extname(file);
          const fileName = path.basename(file, fileExt);
          const parentFolder = path.dirname(filePath);

          // 生成上一级文件夹
          const newFolder = path.join(parentFolder, fileName);
          fs.mkdir(newFolder, (err) => {
            if (err) {
              console.error(err);
              return;
            }

            // 将文件移动到新文件夹中
            const newFilePath = path.join(newFolder, file);
            fs.rename(filePath, newFilePath, (err) => {
              if (err) {
                console.error(err);
                return;
              }

              console.log(`Moved file: ${file} to ${newFolder}`);
            });
          });
        }
      });
    });
  });
}

// 指定文件夹路径
const targetFolder = './src/lcci';

// 调用函数生成上一级文件夹并移动文件
generateParentFolders(targetFolder);
