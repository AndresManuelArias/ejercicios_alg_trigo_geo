let tabla:number[][] =  [
    [30, 25, 22, 42, 31  ],
    [31, 23, 36 , 20 , 37 ],
    [34, 30, 34 , 31 , 27 ],
    [25, 34, 28 , 20 , 31 ],
    [23, 20, 35 , 36 , 26 ],
    [23, 25, 29 , 39 , 33 ]
]
class sumatoria {

    secuencia(start:number,end:number,count:number =1):number[]{
        let colection :number[] = [];
        for (let index = start; index <= end; index+=count) {
            colection.push(index)    
        }
        return colection;
    }
    secuencia_(start:number,end:number,count:number =1): (funcion:(a:any) => number) => number{

        return (funcion:(numero:number) => number)=>{
            let suma:number=0;
            for (let index = start; index <= end; index+=count) {
                suma += funcion(index) 
            }
            return suma;
        };
    }
}

`
 30 # 25 # 22# 42# 31 ## 
 31 # 23 # 36# 20# 37 ##
 34 # 30 # 34# 31# 27 ##
 25 # 34 # 28# 20# 31 ##
 23 # 20 # 35# 36# 26 ##
 23 # 25 # 29# 39# 33 

`