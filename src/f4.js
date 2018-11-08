export const f4 = ( cb )=>{

    let permission = true;

    return function (){

        permission &&
        setTimeout(()=>{
           cb();
           permission=true
           
        },300)
        permission=false;

    }



}

