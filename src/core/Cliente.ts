export default class Cliente {
  #id?: string; //# usado para trabalharr com dados privados
  #nome: string;
  #idade: number;

  constructor(nome: string, idade: number, id?: string) {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id;
  }

  static vazio() {
    return new Cliente("", 0);
  }
  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }
  get idade() {
    return this.#idade;
  }
}
