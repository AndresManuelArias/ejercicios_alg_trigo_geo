import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as geometria_analitica from "../geometria_analitica/index.ts"


interface datosProbar {
    puntos:geometria_analitica.Punto[]
    resultado:number|number[]|any;
}
let probar:datosProbar[]= [
    {puntos:[{x:6,y:0},{x:3,y:-4}],
        resultado:5
    },
    {puntos:[{x:-6,y:-4},{x:1,y:7}],
        resultado:13.038404810405298
    },
    {puntos:[{x:2,y:3},{x:5,y:-1}],
        resultado:5
    },
    {puntos:[{x:1,y:1},{x:-3,y:0}],
        resultado:4.123105625617661
    },
    {puntos:[{x:-1,y:2},{x:-2,y:0}],
        resultado:2.23606797749979
    },
    {puntos:[{x:4,y:2},{x:8,y:5}],
        resultado:5
    },
    {puntos:[{x:-6,y:8},{x:-3,y:9}],
        resultado:Math.sqrt(10)
    },
    {puntos:[{x:-6,y:8},{x:-3,y:9}],
        resultado:Math.sqrt(10)
    },
    {puntos:[{x:-2,y:-7},{x:7,y:-9}],
        resultado:Math.sqrt(85)
    },
    {puntos:[{x:8,y:-3},{x:4,y:-7}],
        resultado:Math.sqrt(32)
    },
    {puntos:[{x:-5,y:-4},{x:-6,y:4}],
        resultado:Math.sqrt(65)
    },
    {puntos:[{x:-6,y:4},{x:-8,y:6}],
        resultado:Math.sqrt(8)
    },
        {puntos:[{x:1,y:5},{x:6,y:5}],
        resultado:5
    },
    {puntos:[{x:6,y:-1},{x:1,y:-3}],
    resultado:Math.sqrt(29)},
    {puntos:[{x:-6,y:2},{x:1,y:5}],
    resultado:Math.sqrt(58)},
    {puntos:[{x:-11,y:6},{x:1,y:-4}],
    resultado:Math.sqrt(244)},
    {puntos:[{x:-5,y:1},{x:0,y:7}],
    resultado:Math.sqrt(61)},
    {puntos:[{x:-2,y:3},{x:-4,y:1}],
    resultado:Math.sqrt(8)},
    {puntos:[{x:-4,y:1},{x:3,y:-4},],
    resultado:Math.sqrt(74)},
    {puntos:[{x:3,y:-4},{x:-2,y:3}],
    resultado:Math.sqrt(74)},
    {puntos:[{x:-6,y:4},{x:6,y:7}],
    resultado:Math.sqrt(153)},
    {puntos:[{x:2,y:6},{x:4,y:-2}],
    resultado:Math.sqrt(68)},
    {puntos:[{x:-4,y:-1},{x:8,y:5}],
    resultado:Math.sqrt(180)},
    {puntos:[{x:-2,y:5},{x:4,y:8}],
    resultado:Math.sqrt(45)},
    {puntos:[{x:4,y:8},{x:6,y:4}],
    resultado:Math.sqrt(20)},
    //B
    {puntos:[{x:-7,y:4},{x:5,y:1}],
    resultado:Math.sqrt(153)},
    //b
    {puntos:[{x:-4,y:-1},{x:0,y:-2}],
    resultado:Math.sqrt(17)},
    //h
    {puntos:[{x:1,y:2},{x:0,y:-2}],
    resultado:Math.sqrt(17)},
    //--
    {puntos:[{x:-6,y:3},{x:3,y:-3}],
    resultado:Math.sqrt(117)},
    {puntos:[{x:-6,y:-2},{x:-1,y:1}],
    resultado:Math.sqrt(34)},  
    {puntos:[{x:-6,y:-2},{x:-10,y:-7}],
    resultado:Math.sqrt(41)},
    {puntos:[{x:2,y:4},{x:0,y:8}],
    resultado:Math.sqrt(20)},
    {puntos:[{x:2,y:4},{x:6,y:7}],
    resultado:Math.sqrt(25)}, 
    {puntos:[{x:1,y:-5},{x:4,y:-1}],
    resultado:5}, 
    {puntos:[{x:2,y:-3},{x:-5,y:4}],
    resultado:Math.sqrt(98)}, 
    {puntos:[{x:2,y:-3},{x:-7,y:-6}],
    resultado:Math.sqrt(90)}, 
    {puntos:[{ x: 6, y: -1 },{ x: 2, y: 1 }],
    resultado:Math.sqrt(20)}, 
]

probar.forEach((data:datosProbar,index)=>{
    Deno.test(`Distancia entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.medirDistanciaDospuntos(data.puntos[0],data.puntos[1]),data.resultado)
    });
})
let distancia:datosProbar[]= [
    {puntos:[{x:2,y:-3},{x:-5,y:4},{x:8,y:5},{x:-7,y:-6}],
        resultado:{   
            distancia:Math.sqrt(90),
            punto:{x:-7,y:-6}
        }
    },

]
distancia.forEach((data:datosProbar,index)=>{
    Deno.test(`Distancia menor ${index}`, () => {
        let puntos:geometria_analitica.Punto[]=data.puntos.splice(1)
        assertEquals(geometria_analitica.encontrarPuntoMasCercano(data.puntos[0],puntos),data.resultado)
    });
})

let probarPuntoMedio:datosProbar[]= [
    {puntos:[{x:5,y:3},{x:1,y:7}],
        resultado:[3,5]
    },
    {puntos:[{x:6,y:2},{x:10,y:0}],
        resultado:[8,1]
    },
    {puntos:[{x:1,y:-2},{x:-7,y:6}],
        resultado:[-3,2]
    },
    {puntos:[{x:-5,y:2},{x:2,y:-7}],
        resultado:[-3/2,-5/2]
    },
    {puntos:[{x:2,y:7},{x:8,y:2}],
        resultado:[5,4.5]
    },
    {puntos:[{x:-2,y:4},{x:7,y:3}],
        resultado:[2.5,3.5]
    },
    {puntos:[{x:-4,y:8},{x:6,y:7}],
        resultado:[1,7.5]
    },
    {puntos:[{x:3,y:4},{x:8,y:-4}],
        resultado:[5.5,0]
    },
    {puntos:[{x:-7,y:-9},{x:6,y:3}],
        resultado:[-0.5,-3]
    }
]
probarPuntoMedio.forEach((data:datosProbar,index)=>{
    Deno.test(`punto medio entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.puntoMedio(data.puntos[0],data.puntos[1]),data.resultado)
    });
})

let probarMedirDistancias:datosProbar[]= [
    {puntos:[{x:1,y:5},{x:6,y:5},{x:6,y:-1},{x:1,y:-3},{x:-6,y:-3},{x:-6,y:2},{x:1,y:5}],
        resultado:36.00093791299841
    },
    {puntos:[{x:-2,y:3},{x:-4,y:1},{x:3,y:-4},{x:-2,y:3}],
    resultado:20.033077658831445},
    {puntos:[{x:2,y:7},{x:6,y:7},{x:-4,y:-3},{x:2,y:7}],
    resultado:29.804039413421552},
    {puntos:[{x:0,y:7},{x:6,y:0},{x:3,y:-4},{x:-3,y:-4},{x:-6,y:0},{x:0,y:7}],
    resultado:34.439088914585774},
    {puntos:[{x:-2,y:6},{x:3,y:3},{x:-3,y:-7},{x:-8,y:-4},{x:-2,y:6}],
    resultado:34.98571136907181},
    {puntos:[{x:4,y:5},{x:8,y:-3},{x:-2,y:-8},{x:-6,y:0},{x:4,y:5}],
    resultado:40.24922359499622},
    {puntos:[{x:-5,y:-2},{x:1,y:5},{x:5,y:-2},{x:2,y:-6},{x:-5,y:-2}],
    resultado:30.344059953889985},
    {puntos:[{x:-3,y:2},{x:6,y:-2},{x:3,y:-6},{x:0,y:-6},{x:-3,y:2}],
    resultado:26.392861547113633},
    {puntos:[{x:-6,y:5},{x:-2,y:5},{x:6,y:0},{x:2,y:-4},{x:-6,y:1},{x:-6,y:5}],
    resultado:32.524816513605586},
    {puntos:[{x:-6,y:9},{x:5,y:9},{x:8,y:1},{x:2,y:-6},{x:-3,y:-6},{x:-9,y:1},{x:-6,y:9}],
    resultado:51.52709640522084},
    {puntos:[{x:-3,y:3},{x:7,y:-3}],
    resultado:Math.sqrt(136)},
    {puntos:[{x:-3,y:3},{x:-4,y:-5},{x:7,y:-3}],
    resultado:19.242597635797498},
    {puntos:[{x:1,y:1},{x:3,y:5},{x:4,y:2},{x:1,y:1}],
    resultado:2*Math.sqrt(5)+2*Math.sqrt(10)},
    {puntos:[{x:3,y:1},{x:2,y:4},{x:-1,y:2},{x:3,y:1}],
    resultado:Math.sqrt(10)+Math.sqrt(13)+Math.sqrt(17)},
    {puntos:[{x:5,y:3},{x:1,y:-2}],
    resultado:Math.sqrt(41)}
]
probarMedirDistancias.forEach((data:datosProbar,index)=>{
    Deno.test(`distancia entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.medirDistanciaVariosPuntos(data.puntos),data.resultado)
    });
})

interface probarAreaTrapecio {
    areaTrapecio:geometria_analitica.AreaTrapecio
    resultado: number
}

let probarAreaTrapecioPuntos:probarAreaTrapecio[]=[
    {
        areaTrapecio:{
        lineaB:{puntoA:{x:-7,y:4},puntoB:{x:5,y:1}},
        lineab:{puntoA:{x:-4,y:-1},puntoB:{x:0,y:-2}},
        lineah:{puntoA:{x:1,y:2},puntoB:{x:0,y:-2}},
        },
        resultado:34
    }
]
probarAreaTrapecioPuntos.forEach((data:probarAreaTrapecio,index)=>{
    Deno.test(`area trapecio entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaTrapecioPuntos(data.areaTrapecio.lineaB,data.areaTrapecio.lineab,data.areaTrapecio.lineah),data.resultado)
    });
})

interface ProbarAreaCuadrado {
    lineas:geometria_analitica.linea[]
    resultado: number|boolean
}
let probarAreaCuadradosPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:-8,y:0},puntoB:{x:4,y:4}},
            {puntoA:{x:4,y:4},puntoB:{x:6,y:-2}}
        ],
        resultado:80.00000000000001
    },
    {
        lineas:[
            {puntoA:{x:1,y:-1},puntoB:{x:-3,y:-9}},
            {puntoA:{x:1,y:-1},puntoB:{x:5,y:-3}}
        ],
        resultado:40.00000000000001
    },
    {
        lineas:[
            {puntoA:{x:-2,y:-3},puntoB:{x:2,y:-2}},
            {puntoA:{x:-2,y:-3},puntoB:{x:-4,y:5}}
        ],
        resultado:34
    },
    {
        lineas:[
            {puntoA:{x:35,y:5},puntoB:{x:45,y:-25}},
            {puntoA:{x:35,y:5},puntoB:{x:-25,y:-15}}
        ],
        resultado:2000
    }
]
probarAreaCuadradosPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`area cuadrado entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaCuadradoPuntos(data.lineas[0],data.lineas[1]),data.resultado)
    });
})

let probarAreaTriangulosPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:-4,y:-6},puntoB:{x:2,y:-8}},
            {puntoA:{x:-6,y:-2},puntoB:{x:-7,y:-5}}
        ],
        resultado:10.000000000000002
    },
    {
        lineas:[
            {puntoA:{x:1,y:8},puntoB:{x:6,y:6}},
            {puntoA:{x:1,y:8},puntoB:{x:-5,y:-7}}
        ],
        resultado:43.49999999999999
    },
    {
        lineas:[
            {puntoA:{x:-3,y:-4},puntoB:{x:7,y:-2}},
            {puntoA:{x:2,y:-3},puntoB:{x:0,y:7}}
        ],
        resultado:51.99999999999999
    }
]
probarAreaTriangulosPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`area triangulos entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaTrianguloPuntos(data.lineas[0],data.lineas[1]),data.resultado)
    });
})

let probarAreaCirculoPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:-20,y:20},puntoB:{x:10,y:20}}
        ],
        resultado:2827.4333882308138
    }
]
probarAreaCirculoPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`area circulos entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaCirculoPuntos(data.lineas[0].puntoA,data.lineas[0].puntoB),data.resultado)
    });
})

interface ProbarTriangulo{
    lineas:geometria_analitica.linea[]
    resultados: any[]
}

let probarTriangulos:ProbarTriangulo[]=[
    {
        lineas:[
            {puntoA:{x:2,y:1},puntoB:{x:3,y:-2}},
            {puntoA:{x:3,y:-2},puntoB:{x:6,y:-1}},
            {puntoA:{x:6,y:-1},puntoB:{x:2,y:1}}
        ],
        resultados:[2,
            {
                linea: { puntoA: { x: 6, y: -1 }, puntoB: { x: 2, y: 1 } },
                distancia: Math.sqrt(20)
           }      
        ,true
        ],
    },
    {
    lineas:[
            {puntoA:{x:1,y:1},puntoB:{x:3,y:0}},
            {puntoA:{x:3,y:0},puntoB:{x:4,y:2}},
            {puntoA:{x:4,y:2},puntoB:{x:1,y:1}}
        ],
        resultados:[2,
            {
                linea: { puntoA: { x: 4, y: 2 }, puntoB: { x: 1, y: 1 } },
                distancia: Math.sqrt(10)
            },
            true
        ]
    },
    {
    lineas:[
            {puntoA:{x:0,y:0},puntoB:{x:1,y:2}},
            {puntoA:{x:1,y:2},puntoB:{x:3,y:1}},
            {puntoA:{x:3,y:1},puntoB:{x:0,y:0}}
        ],
        resultados:[2,
            {
                linea: {puntoA:{x:3,y:1},puntoB:{x:0,y:0}},
                distancia: Math.sqrt(10)
            },
            true
        ]
    }
    , {
        lineas:[
                {puntoA:{x:0,y:2},puntoB:{x:2,y:4}},
                {puntoA:{x:2,y:4},puntoB:{x:6,y:0}},
                {puntoA:{x:6,y:0},puntoB:{x:0,y:2}}
            ],
            resultados:[0,
                {
                    linea: {puntoA:{x:6,y:0},puntoB:{x:0,y:2}},
                    distancia: Math.sqrt(40)
                },
                true
            ]
        }
]
probarTriangulos.forEach((data:ProbarTriangulo,index)=>{
    Deno.test(`Si es isoceles ${index}`, () => {
        assertEquals(geometria_analitica.conteo_lados_iguales(data.lineas),data.resultados[0])
    });
    Deno.test(`Lado mayor ${index}`, () => {
        assertEquals(geometria_analitica.ladoMayor(data.lineas),data.resultados[1])
    });
    Deno.test(`Es triangulo Rectangulo ${index}`, () => {
        assertEquals(geometria_analitica.saber_si_es_triangulo_rectangulo(data.lineas),data.resultados[2])
    });
})

let lados_iguales:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:2,y:1},puntoB:{x:3,y:-2}},
            {puntoA:{x:3,y:-2},puntoB:{x:6,y:-1}},
            {puntoA:{x:6,y:-1},puntoB:{x:2,y:1}}
        ],
        resultado:2
    },
    {
    lineas:[
            {puntoA:{x:1,y:1},puntoB:{x:3,y:0}},
            {puntoA:{x:3,y:0},puntoB:{x:4,y:2}},
            {puntoA:{x:4,y:2},puntoB:{x:1,y:1}}
        ],
        resultado:2
    }
]
lados_iguales.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`Si es isoceles ${index}`, () => {
        assertEquals(geometria_analitica.conteo_lados_iguales(data.lineas),data.resultado)
    });
})

interface ProbarAreaPoligono {
    puntos:geometria_analitica.Punto[]
    apotema:geometria_analitica.linea
    resultado:number|number[]|any;
}
// let probarAreaPoligonoPuntos:ProbarAreaPoligono[]=[
//     {
//         puntos:[
//             {x:-20,y:20},{x:10,y:20}
//         ],
//         apotema:{puntoA:{x:2,y:3},puntoB:{x:2,y:3}},
//         resultado:2827.4333882308138
//     }
// ]
// probarAreaPoligonoPuntos.forEach((data:ProbarAreaPoligono,index)=>{
//     Deno.test(`area poligonos entre puntos ${index}`, () => {
//         assertEquals(geometria_analitica.areaPoligonoRegularPuntos(data.puntos,data.apotema),data.resultado)
//     });
// })
