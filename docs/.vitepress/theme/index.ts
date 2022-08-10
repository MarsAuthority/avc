import DefaultTheme from 'vitepress/theme'

/**
 * 使用第三方组件库
 * 详情参考：https://github.com/FightingDesign/fighting-design
 */
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
