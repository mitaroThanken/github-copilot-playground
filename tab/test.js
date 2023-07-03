const runTest = (input, expected) => {
  const actual = target(input)
  if (actual !== expected) {
    throw new Error(`Test failed! expected: ${expected}, actual: ${actual}`)
  }
}

runTest('apple', 'りんごは赤い');
runTest('orange', 'オレンジはオレンジ色');
runTest('banana', 'バナナは黄色');
runTest('melon', 'その他は不明');
