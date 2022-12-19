console.log('Hello, typescript')

function add(a: number, b: number){
    return a+b
}

const sum = add(3,4)
console.log(sum)
//------------------------Tipados---------------------//
//Boolean
let muted: boolean = true
muted = false

//Números
let numerador:number = 42
let denominador:number = 6
let resultado = numerador/denominador

//String
let nombre:string = 'Jesus'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people:string[] = []
people = ['isabel', 'nicole', 'raul']

let peopleNumbers:Array<string|number> = []
peopleNumbers.push('jesus')
peopleNumbers.push(27)

//Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin:any = 'Joker'
comodin = {type: 'wildcard'}

//Object
let someObject:object = {type: 'wildcard'}

//--------------------Funciones--------------------------//

function add2(a:number, b:number):number{
    return a+b
}

const sum2 =  add2(4,6)

function createAdder(a:number): (number)=>number{
    return function(b:number){
        return a+b
    }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)

function fullName(first:string, last?:string):string{
    return `${first} ${last}`
}

const jesus = fullName('jesus')
console.log(jesus)

//-------------------Interfaces-------------------//
interface Rectangulo {
    ancho:number
    alto:number,
    color?:Color
}

let rect:Rectangulo = {
    ancho: 4,
    alto: 6
}

function area(r:Rectangulo):number{
    return r.alto*r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function(){
    return this.Color ? `Un rectángulo ${this.color}`: 'Un rect'
}
console.log(rect.toString())