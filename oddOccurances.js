function solve(input){
    let elements = input.split(' ').map((ele)=> ele.toLowerCase());


    let obj = generateObject(new Set(elements));

    elements.forEach((ele)=>{

      obj.set(ele, obj.get(ele)+1)
    })
   let output = '';
    Array.from(obj.entries()).forEach((kvpArr) => {
        let [key, value] = kvpArr;
        if (Number(value) %2!==0){
            output+=key + " "
        }
    })
    console.log(output)

    function generateObject(set){
        let obj = new Map;
        set.forEach((ele)=>{
            obj.set (ele, 0);
        });
        return obj
    }

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')