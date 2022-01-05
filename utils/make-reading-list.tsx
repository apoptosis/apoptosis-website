import ReactFlow from 'react-flow-renderer'
// import fac from './factorial'

// typescript factorial function
function fac(n:number): number {
    if (n === 0) {
        return 1
    }
    return n * fac(n - 1)
}

function nCk(n:number,k:number): number{
    if(0<=k && k<n){
        return (fac(n)/(fac(k) * fac(n-k)))
    }
    else{
        return 0
    }
}

export default function make_rl(rl:any[], farr:number[], cats:string[], vis:{}): any[]{
    let rl_elements = []
    for(let i=0,j=0; i<cats.length; i++){
        if(!!cats[i]){
            rl_elements.push(
                {
                    id: `${j}`,
                    type: 'input',
                    data: { label: cats[i] },
                    position: { x: (vis['category-width']/2) + (vis['category-width']*j), y: vis['category-input-y'] },
                }
            )
            j++
        }
    }
    for(let i=0;
        i<(() => {
            let all_flags = 0
            for(let f of farr){
                all_flags |= f
            }
            return all_flags
        })();
        i++){
        switch(i){

        }
    }
    return rl_elements
}
