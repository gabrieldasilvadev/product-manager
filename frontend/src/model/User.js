export default class User {
  constructor(obj) {
    this.id = obj.id;
    this.nome = obj.nome;
    this.email = obj.email;
    this.imagem = obj.imagem;
    this.perfil = obj.perfil;
  }
}

class Perfil {
  constructor(obj) {
    obj = obj || {};
    this.id = obj.id;
    this.descricao = obj.descricao;
  }
}
