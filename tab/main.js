// 指定されたフルーツの説明を返却する
module.exports = function (fruit) {
  switch (fruit) {
    case 'apple':
      return 'りんごは赤い';
    case 'orange':
      return 'オレンジはオレンジ色';
    case 'banana':
      return 'バナナは黄色';
    default:
      return 'その他は不明';
  }
}
