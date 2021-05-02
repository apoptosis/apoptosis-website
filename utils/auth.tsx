export function auth(a){
    try{
        let name = ''
        for(let atom of a.name){
            name += atom[1]
        }
        return name
    }
    catch(e){
        return "error"
    }
}
