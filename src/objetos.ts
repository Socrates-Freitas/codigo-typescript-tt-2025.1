type PontoX = {x:number}
type PontoY = {y:number}

type PontoParcial = PontoX | PontoY

let pontoParicalX:PontoParcial = {x:5}


type Ponto = {
    x:number
    y:number
}

type Ponto3D = Ponto & {
    z:number
} 

interface Coordenada{
    x:number,
    y:number
}

interface Coordenada3D extends Coordenada{
    z:number
}



function tamanho(ponto:Ponto):number{
    return (ponto.x*ponto.x)+(ponto.y*ponto.y)
}

function somaXY(cordenada:Coordenada):number{

    return (cordenada.x*cordenada.x)+(cordenada.y*cordenada.y)
}


function somaPonto3D(ponto3D:Ponto3D):number{
    return ponto3D.x + ponto3D.y + ponto3D.z
}

function somaCoordenada3D(cordenada3D:Coordenada3D):number{
    return cordenada3D.x + cordenada3D.y + cordenada3D.z   
}


class Pessoa{
    protected nome:string
    protected cpf:string
    protected idade:number

    constructor(nome:string,cpf:string,idade:number){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }

    correr(kilometros:number){
        console.log(`Estou correndo ${kilometros}!`)
    }

}

class Estudante extends Pessoa{
    dre:string

    constructor(nome:string,cpf:string,idade:number,dre:string){
        super(nome,cpf,idade)
        this.dre = dre
    }

    estudar(){
        console.log("Estudando...")
    }
    
}
    





interface Acariciavel{
    acariciar():void
}




class Animal {
    nome:string
    peso:number


    constructor(nome:string,peso:number){
        this.nome = nome
        this.peso = peso
    }

    comer(){
        console.log("Comendo")
    }
}


class Baleia extends Animal implements Acariciavel{
    constructor(nome:string,peso:number){
        super(nome,peso)
    }

    acariciar(): void {
        console.log("Sons de baleia feliz")
    }
}














