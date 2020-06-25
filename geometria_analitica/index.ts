 export interface Punto {
     x:number
     y:number
 }
 export interface linea {
     puntoA:Punto,
     puntoB:Punto
 }
 export function medirDistanciaDospuntos(punto1:Punto,punto2:Punto):number{
   let  deltaX:number = punto2.x-punto1.x
   let  deltaY:number = punto2.y-punto1.y
    let distancia:number = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2))
    return distancia
 }
 export function puntoMedio(punto1:Punto,punto2:Punto):number[]{
    let  deltaX:number = punto2.x+punto1.x
   let  deltaY:number = punto2.y+punto1.y
    return[deltaX/2,deltaY/2]
 }
 export function medirDistanciaVariosPuntos(puntos:Punto[]){
    let distancia:number= 0 
    for (let index = 0; index < puntos.length-1; index++) {
        distancia += medirDistanciaDospuntos(puntos[index],puntos[index+1]) 
        console.log(distancia)     
     }
     return distancia
 }

export interface AreaTrapecio{
    lineaB:linea
    lineab:linea
    lineah:linea
 }
 export function areaTrapecio(B:number,b:number,h:number):number{
    return (B+b)*h/2
 }
 export function areaTrapecioPuntos(lineaB:linea,lineab:linea,lineah:linea):number{
    let distanciaB:number = medirDistanciaDospuntos(lineaB.puntoA,lineaB.puntoB);
    let distanciab:number = medirDistanciaDospuntos(lineab.puntoA,lineab.puntoB);
    let distanciah:number = medirDistanciaDospuntos(lineah.puntoA,lineah.puntoB);
    return areaTrapecio(distanciaB,distanciab,distanciah)
 }

 export function areaCuadradoPuntos(lineab:linea,lineah:linea):number{
    let distanciab:number = medirDistanciaDospuntos(lineab.puntoA,lineab.puntoB);
    let distanciah:number = medirDistanciaDospuntos(lineah.puntoA,lineah.puntoB);
    return distanciab *distanciah;
 }

 export function areaTrianguloPuntos(lineab:linea,lineah:linea):number{
    return areaCuadradoPuntos(lineab,lineah)/2
 }