import { ATOMS } from '../data/data'

const { ATOM_IS_NAME
      , ATOM_IS_PREFIX
      , ATOM_IS_MIDFIX
      , ATOM_IS_POSTFIX
      , ATOM_IS_HYPHEN
      , ATOM_IS_SPANISH_PRIMARY
      , ATOM_IS_SPANISH_SECONDARY
      , ATOM_IS_ORG
      } = ATOMS

export function auth(a:{name:[number,string],id:string}, format:(name:[number,string]) => any): string{
    try{
        return format(a.name)
    }
    catch(e){
        return `ERROR at auth(): ${e}\nCheck to see if the author ID is valid.`
    }
}

export const formats = {
    verbose: (name:[number,string]) => {
        let n = ''
        for(let atom of name){
            n += atom[1]
        }
        return n
    },
    surname_forename: (name:[number,string]) => {
        let n = ''
        for(let atom of name){
            switch(atom[0]){
                case ATOM_IS_NAME:
                case ATOM_IS_SPANISH_PRIMARY:{
                    {
                        n += atom[1] + ' '
                    }
                    break;
                }
                case ATOM_IS_HYPHEN:{
                    {
                        n += atom[1] + '-'
                    }
                    break;
                }
            }
        }
        return n
    },
    truncated: (name:[number,string]) => {
        let n = ''
        let narr = []
        for(let atom of name){
            switch(atom[0]){
                    case ATOM_IS_NAME:
                    case ATOM_IS_SPANISH_PRIMARY:
                    case ATOM_IS_POSTFIX:{
                        {
                            narr.push(atom[1] + ' ')
                        }
                        break;
                    }
                    case ATOM_IS_HYPHEN:{
                        {
                            narr.push(atom[1] + '-')
                        }
                        break;
                    }
            }
        }
        for(let i=0; i<narr.length; i++){
            switch(i){
                    case 0:
                    case narr.length-1:{
                        {
                            n += narr[i]
                        }
                        break;
                    }
                    default:{
                        {
                            n += narr[i].substring(0,1) + '. '
                        }
                        break;
                    }
            }
        }
        return n
    },
}
