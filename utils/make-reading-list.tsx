import ReactFlow from 'react-flow-renderer'

const ids = {
    topid: 0,
    labelmap: {}
}

function id(label){
    if(!!ids.labelmap[label]){
        return ids.labelmap[label]
    }
    else{
        ids.labelmap[label] = ids.topid++
    }
}

export default function make_rl(rl:any[], farr:number[], cats:string[], vis:{}): any[]{
    let rl_elements = []
    for(let i=0,j=0; i<cats.length; i++){
        if(!!cats[i]){
            rl_elements.push(
                {
                    id: `${id(cats[j])}`,
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
    console.log(rl_elements)
    return rl_elements
}
