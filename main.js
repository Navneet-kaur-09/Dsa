const arr = ["nemo"];

function find(array){
    let t0 = performance.now();
    for(let i=0;i<array.length;i++){
        if(array[i]==="nemo"){
            console.log("nemo found!!");
        }
    }
    let t1 = performance.now();
    console.log("call to find nemo " + (t1-t0) + " ms.");
}
find(arr);