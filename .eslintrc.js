// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 别人可以直接使用你配置好的eslint
  root: true,
  // 指定解析器选项
  parserOptions: {
    // 指定解析器
    parser: 'babel-eslint' // 解析es6
  },
  // 指定脚本运行的环境
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // 请用的规则及其各自添加的错误级别
  // 每个规则对应的0，1，2分别表示off，warning，error三个错误级别
  // never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格 
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 定义了变量但没有使用
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used"
    }],
    // 限制使用单引号, 
    "quotes": 0,
    // 关闭语句强制分号结尾 防止压缩代码的时候出现意外情况
    "semi": [2, 'always'],
    //空行最多不能超过100行 
    "no-multiple-empty-lines": [0, {
      'max': 0
    }],
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": [2, "never"],
    "eol-last": 0, //文件以单一的换行符结束,强制文件末尾至少保留一行空行
    "comma-dangle": [2, "never"], //对象字面量项尾不能有逗号
    "no-redeclare": 2,
    "no-undef": 1, //不能有未定义的变量
    "no-multi-spaces": 1, //不能用多余的空格
    "no-trailing-spaces": 1, //一行结束后面不要有空格
    "key-spacing": [0, {
      "beforeColon": false,
      "afterColon": true
    }], //对象字面量中冒号的前后空格
    "indent": [2, 2], //缩进风格
    "no-multi-str": 1, //禁止使用多行字符串
    "linebreak-style": 1, //强制使用一致的换行风格
    // "defalut-case": 2, // switch语句必须包含default
  }
}