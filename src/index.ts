"use strict"

// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

function calculandoMedia(num1: number, num2: number) {
    const media = (num1 + num2) / 2;
    const aprovado = media >= 6;
  
    const resultado = {
      media,
      aprovado,
    };
  
    return resultado;
  }

const resultado = calculandoMedia(8, 6);
console.log('Atividade 1:')
console.log(resultado);
console.log('----------------------------------------')

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface notas {
  nota:number
  peso:number
}

function calcularMediaPonderada(notas: notas[]): number {
  let somaNotas = 0;
  let somaPesos = 0;

  for (const item of notas) {
    somaNotas += (item.nota * item.peso);
    somaPesos += item.peso;
  }
  const mediaPonderada = somaNotas / somaPesos;
  return mediaPonderada;
}

 const notasPesos: notas[] = [
  {nota:9, peso:3},
  {nota:7, peso:2},
 ] 
 
 const mediaPonderada: string = calcularMediaPonderada(notasPesos).toFixed(1);

 console.log('Atividade 2:')
 console.log(`A Média ponderada é: ${mediaPonderada} `)
 console.log('--------------------------------------')

//  3. Crie um programa que simule uma carteira de dinheiro. Este
//  programa vai precisar ter uma carteira contendo saldo, transações
//  de entrada e saídas. Ou seja, será um objeto com estas
//  propriedades. Depois crie uma função para lançar uma entrada e
//  uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
//  um erro ou avisar.

class Carteira {
  private saldo: number
  private transacoes: number[]

  constructor() {
    this.saldo = 4000
    this.transacoes = []
  }

  mostrarSaldo(): number {
    return this.saldo
  }

  mostrarTransacoes(): number[] {
    return this.transacoes
  }

  lancarEntrada(valor: number): void {
    if (valor <= 0) {
      throw new Error('O valor da entrada deve ser maior que zero.')
    }

    this.saldo += valor
    this.transacoes.push(valor)
  }

  lancarSaida(valor: number): void {
    if (valor <= 0) {
      throw new Error('O valor da saída deve ser maior que zero.')
    }

    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente para realizar esta transação.')
    }

    this.saldo -= valor
    this.transacoes.push(-valor)
  }
}

const minhaCarteira = new Carteira()

console.log('Atividade 3:')
console.log('Saldo inicial:', minhaCarteira.mostrarSaldo())

minhaCarteira.lancarEntrada(800);
console.log('Saldo após entrada de 800:', minhaCarteira.mostrarSaldo())

minhaCarteira.lancarSaida(950);
console.log('Saldo após saída de 950:', minhaCarteira.mostrarSaldo())

console.log('Transações:', minhaCarteira.mostrarTransacoes())
console.log('------------------------------------------')

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

interface Produto {
  id: number
  nome: string
  preco: number
}

class ListaDeProdutos {
  private produtos: Produto[] = []
  private proximoId: number = 1

  cadastrarProduto(nome: string, preco: number): void {
    const produto: Produto = {
      id: this.proximoId,
      nome,
      preco,
    }

    this.produtos.push(produto)
    this.proximoId++
  }

  listarProdutos(): Produto[] {
    return this.produtos
  }

  excluirProduto(id: number): void {
    const indice = this.produtos.findIndex((produto) => produto.id === id);

    if (indice !== -1) {
      this.produtos.splice(indice, 1)
    }
  }
}

const listaDeProdutos = new ListaDeProdutos()

listaDeProdutos.cadastrarProduto('Produto 1', 1.99)
listaDeProdutos.cadastrarProduto('Produto 2', 30.15)
listaDeProdutos.cadastrarProduto('Produto 3', 67.99)

console.log('Atividade 4:')
console.log('Lista de Produtos:')
console.log(listaDeProdutos.listarProdutos())

listaDeProdutos.excluirProduto(3)

console.log('Lista de Produtos após a exclusão do Produto 3:')
console.log(listaDeProdutos.listarProdutos())
console.log('------------------------------------------')

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”


type User = {
  nome: string
  idade: number
  ocupação: string
  salário?: number
}


function mostrarInformacoes(usuario: User): string {
  const salario = usuario.salário ? `salário R$ ${usuario.salário.toFixed(2)}` : 'salário N/A'

  return `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupação}, ${salario}`
}


const usuario1: User = {
  nome: 'Julia',
  idade: 39,
  ocupação: 'desenvolvedora web',
  salário: 5000,
}

const usuario2: User = {
  nome: 'Lucas',
  idade: 35,
  ocupação: 'programador',
}

const usuario3: User = {
  nome: 'Lais',
  idade: 31,
  ocupação: 'jornalista',
}

console.log('Atividade 5:');
console.log(mostrarInformacoes(usuario1))
console.log(mostrarInformacoes(usuario2))
console.log(mostrarInformacoes(usuario3))
console.log('-----------------------------------')


// 6. Usando o contexto do exercício 5, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”


type Diretor = User & {
  nívelDeComissionamento: number
}


function informacoesDoDiretor(diretor: Diretor): string {
  const salario = diretor.salário ? `salário R$ ${diretor.salário.toFixed(2)}` : 'salário N/A'

  return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nívelDeComissionamento}, ${salario}`
}

const diretor1: Diretor = {
  nome: 'Julia',
  idade: 39,
  ocupação: 'Diretor(a)',
  nívelDeComissionamento: 5,
  salário: 2300,
}

const diretor2: Diretor = {
  nome: 'Lucas',
  idade: 35,
  ocupação: 'Diretor(a)',
  nívelDeComissionamento: 5,
}

const diretor3: Diretor = {
  nome: 'Lais',
  idade: 31,
  ocupação: 'Diretor(a)',
  nívelDeComissionamento: 5,
  salário: 2100,
}

console.log('Atividade 6:');
console.log(informacoesDoDiretor(diretor1))
console.log(informacoesDoDiretor(diretor2))
console.log(informacoesDoDiretor(diretor3))
console.log('---------------------------------')

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

type UsuarioOuDiretor = User | Diretor;

function mostrarInformacoesUD(usuarioOuDiretor: UsuarioOuDiretor): void {
  if ("nívelDeComissionamento" in usuarioOuDiretor) {
    const diretor = usuarioOuDiretor as Diretor;
    const salarioTexto = diretor.salário ? `salário R$ ${diretor.salário.toFixed(2)}` : 'salário N/A';
    console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nívelDeComissionamento}, ${salarioTexto}`);
  } else {
    const usuario = usuarioOuDiretor as User;
    const salarioTexto = usuario.salário ? `salário R$ ${usuario.salário.toFixed(2)}` : 'salário N/A';
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupação}, ${salarioTexto}`);
  }
}

const lista: UsuarioOuDiretor[] = [
  {
    nome: 'Julia',
    idade: 39,
    ocupação: 'desenvolvedora web',
    salário: 5000,
  },
  {
    nome: 'Lucas',
    idade: 35,
    ocupação: 'programador',
  },
  {
    nome: 'Lais',
    idade: 31,
    ocupação: 'Diretor(a)',
    nívelDeComissionamento: 5,
    salário: 2100,
  },
];

console.log('Atividade 7:');
lista.forEach((item) => mostrarInformacoesUD(item))
