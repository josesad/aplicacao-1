export class Usuario {
    public id: number;
    public nome: string;
    public email: string;
    public pais: string;
    public estado: string;
    public municipio: string;
    public cep: number;
    public rua: string;
    public numero: number;
    public complemento: number;
    public cpf: string;
    public pis: string;
    public senha: string;
  
    constructor()
    constructor(id?: number, nome?: string, email?: string, pais?: string, estado?: string,
                municipio?: string, cep?: number, rua?: string, numero?: number, complemento?: number,
                pis?: string, cpf?: string, senha?: string, genero?: string, favoritos?:string[]) {
     this.id = (id)? id : 0;
     this.nome = (nome)? nome : '';
     this.email = (email)? email : '';
     this.pais = (pais)? pais : '';
     this.estado = (estado)? estado : '';
     this.municipio = (municipio)? municipio : '';
     this.cep = (cep)? cep : 0;
     this.rua = (rua)? rua : '';
     this.numero = (numero)? numero : 0;
     this.complemento = (complemento)? complemento : 0;
     this.cpf = (cpf)? cpf : '';
     this.pis = (pis)? pis : '';
     this.senha = (senha)? senha : '';
    }
  }