import storage from "@system.storage";

export function setStorage(key, value) {
  let that = this;
  // 设置storage
  storage.set({
    key,
    value: JSON.stringify(value),
    success() {
      that.showHint("数据存储成功");
    },
    fail(data, code) {
      that.showHint(`setStorage fail, code = ${code}`);
    }
  });
}
export function getStorage(key) {
  let that = this;
  return new Promise((resolve, reject) => {
    // 获取storage
    storage.get({
      key,
      success(data) {
        if (data) {
          resolve(JSON.parse(data));
        }
      },
      fail(data, code) {
        that.showHint(`getStorage fail, code = ${code}`);
        reject({ data, code });
      }
    });
  });
}
