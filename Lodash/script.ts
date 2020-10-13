class Lodash{

    sum(Arr:number[]):number{
        let sum = 0
        for(let i=0;i<Arr.length;i++){
            sum += Arr[i]
        }
        return sum
    }

    chunk(Arr:number[],size:number):number[]{
        let output = []
        for(let i=0;i<Arr.length;i+=size){
            let j = i
            let chunk = []
            while(j<i+size && j<Arr.length){
                chunk.push(Arr[j])
                j++;
            }
            output.push(chunk)
        }
        console.log("Chunks of size ",size," of array ",Arr," is ",output)
        return output
    }

    find(Arr:number[],elm:number):number{
        for(let i=0;i<Arr.length;i++){
            if(Arr[i] === elm){
                console.log("Element "+elm+" is found at index ",i," in array",Arr)
                return i
            }
        }
        console.log("Element "+elm+" is not present in the Array ",Arr)
        return -1
    }

    filter(Arr:number[],func:Function):number[]{
        let output = []
        for(let i=0;i<Arr.length;i++){
            if(func(Arr[i])){
                output.push(Arr[i])
            }
        }
        return output
    }

    reduce(Arr:number[],func:Function,initialVal:number):number{
        for(let i of Arr){
            initialVal = func(initialVal, i)
          }
          return initialVal
    }

}

let obj = new Lodash()
let Arr = [1,2,3,4,5]
//Sum
console.log("Sum of [1,2,3,4,5] is :",obj.sum(Arr))

//Find
obj.find(Arr,2)
obj.find(Arr,8)

//Chunk
obj.chunk(Arr,2)
obj.chunk([1,2,3,4,5,2,32,3,4,5,4,5],4)
obj.chunk(Arr,1)
obj.chunk(Arr,6)

//Filter
console.log("Filter by greater than 5 - [10,2,3,14,8] --> ",obj.filter([10,2,3,14,8],(value:number)=>{return value>5}))
console.log("Filter by divisible by 5 - [10,20,3,14,80] --> ",obj.filter([10,20,3,14,80],(value:number)=>{return value%5===0}))

//Reduce
console.log("Reduce - Sum of [1,2,3,4,5] :",obj.reduce(Arr,(a:number,b:number)=>{return a+b},0))
console.log("Reduce - Product of [1,2,3,4,5] :",obj.reduce(Arr,(a:number,b:number)=>{return a*b},1))
