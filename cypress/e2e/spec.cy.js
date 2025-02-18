import mainPage from '../pages/mainPage.js'
import loginPage from '../pages/loginPage.js'

const pgContas = new loginPage
const testeCB = new mainPage

describe('Desafio QA Voll', () => {

  it('Entrar na pagina principal', () => {
    pgContas.clickEntendi()
  })

  it('Teste de entrada nas contas com nome correto', () => {
    pgContas.clickEntendi()
    testeCB.clickCB1()
    testeCB.checkCB1()

  })

})