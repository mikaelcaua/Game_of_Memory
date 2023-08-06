let v = [0,0,0,0,0,0]

let cont_shinji = 0
let cont_asuka = 0
let cont_rei = 0
let c1 = window.document.querySelector('div.cartas#c1 picture img') 
c1.addEventListener('mousedown', entrar1)

let c2 = window.document.querySelector('div.cartas#c2 picture img') 
c2.addEventListener('mousedown', entrar2)

let c3 = window.document.querySelector('div.cartas#c3 picture img') 
c3.addEventListener('mousedown', entrar3)

let c4 = window.document.querySelector('div.cartas#c4 picture img') 
c4.addEventListener('mousedown', entrar4)

let c5 = window.document.querySelector('div.cartas#c5 picture img') 
c5.addEventListener('mousedown', entrar5)

let c6 = window.document.querySelector('div.cartas#c6 picture img') 
c6.addEventListener('mousedown', entrar6)

function entrar1(){
        
        if(v[0]!=1){
            let rand = 1+ parseInt(Math.random() * 6)
            if((rand==1 || rand ==2) && cont_rei<2){
                c1.src = 'imagens/rei.jpg'
                v[0] = 1
                cont_rei = cont_rei + 1
            }

            if((rand==3 || rand ==4) && cont_asuka<2){
                c1.src = 'imagens/asuka.jpg'
                v[0] = 1
                cont_asuka = cont_asuka + 1
            }

            if((rand==5 || rand ==6) && cont_shinji<2){
                c1.src = 'imagens/shinji.jpg'
                v[0] = 1
                cont_shinji = cont_shinji + 1
            }
        }
        
        
}

function entrar2(){
        
    if(v[1]!=1){
        let rand = 1+ parseInt(Math.random() * 6)
        if((rand==1 || rand ==2) && cont_rei<2){
            c2.src = 'imagens/rei.jpg'
            v[1] = 1
            cont_rei = cont_rei + 1
        }

        if((rand==3 || rand ==4) && cont_asuka<2){
            c2.src = 'imagens/asuka.jpg'
            v[1] = 1
            cont_asuka = cont_asuka + 1
        }

        if((rand==5 || rand ==6) && cont_shinji<2){
            c2.src = 'imagens/shinji.jpg'
            v[1] = 1
            cont_shinji = cont_shinji + 1
        }
    }
    
    
}

function entrar3(){
        
    if(v[2]!=1){
        let rand = 1+ parseInt(Math.random() * 6)
        if((rand==1 || rand ==2) && cont_rei<2){
            c3.src = 'imagens/rei.jpg'
            v[2] = 1
            cont_rei = cont_rei + 1
        }

        if((rand==3 || rand ==4) && cont_asuka<2){
            c3.src = 'imagens/asuka.jpg'
            v[2] = 1
            cont_asuka = cont_asuka + 1
        }

        if((rand==5 || rand ==6) && cont_shinji<2){
            c3.src = 'imagens/shinji.jpg'
            v[2] = 1
            cont_shinji = cont_shinji + 1
        }
    }
    
    
}

function entrar4(){
        
    if(v[3]!=1){
        let rand = 1+ parseInt(Math.random() * 6)
        if((rand==1 || rand ==2) && cont_rei<2){
            c4.src = 'imagens/rei.jpg'
            v[3] = 1
            cont_rei = cont_rei + 1
        }

        if((rand==3 || rand ==4) && cont_asuka<2){
            c4.src = 'imagens/asuka.jpg'
            v[3] = 1
            cont_asuka = cont_asuka + 1
        }

        if((rand==5 || rand ==6) && cont_shinji<2){
            c4.src = 'imagens/shinji.jpg'
            v[3] = 1
            cont_shinji = cont_shinji + 1
        }
    }
    
    
}

function entrar5(){
        
    if(v[4]!=1){
        let rand = 1+ parseInt(Math.random() * 6)
        if((rand==1 || rand ==2) && cont_rei<2){
            c5.src = 'imagens/rei.jpg'
            v[4] = 1
            cont_rei = cont_rei + 1
        }

        if((rand==3 || rand ==4) && cont_asuka<2){
            c5.src = 'imagens/asuka.jpg'
            v[4] = 1
            cont_asuka = cont_asuka + 1
        }

        if((rand==5 || rand ==6) && cont_shinji<2){
            c5.src = 'imagens/shinji.jpg'
            v[4] = 1
            cont_shinji = cont_shinji + 1
        }
    }
    
    
}

function entrar6(){
        
    if(v[5]!=1){
        let rand = 1+ parseInt(Math.random() * 6)
        if((rand==1 || rand ==2) && cont_rei<2){
            c6.src = 'imagens/rei.jpg'
            v[5] = 1
            cont_rei = cont_rei + 1
        }

        if((rand==3 || rand ==4) && cont_asuka<2){
            c6.src = 'imagens/asuka.jpg'
            v[5] = 1
            cont_asuka = cont_asuka + 1
        }

        if((rand==5 || rand ==6) && cont_shinji<2){
            c6.src = 'imagens/shinji.jpg'
            v[5] = 1
            cont_shinji = cont_shinji + 1
        }
    }
    
    
}



