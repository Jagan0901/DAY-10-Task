const header = document.createElement('h1');
document.body.appendChild(header); 
setTimeout(()=>{
    console.log(10);
    header.innerText= '10'
    setTimeout(()=>{
        console.log(9);
        header.innerText= '9'
        setTimeout(()=>{
            console.log(8);
            header.innerText= '8'
            setTimeout(()=>{
                console.log(7);
                header.innerText= '7'
                setTimeout(()=>{
                    console.log(6);
                    header.innerText= '6'
                    setTimeout(()=>{
                        console.log(5);
                        header.innerText= '5'
                        setTimeout(()=>{
                            console.log(4);
                            header.innerText= '4'
                            setTimeout(()=>{
                                console.log(3);
                                header.innerText= '3'
                                setTimeout(()=>{
                                    console.log(2);
                                    header.innerText= '2'
                                    setTimeout(()=>{
                                        console.log(1);
                                        header.innerText= '1'
                                        setTimeout(()=>{
                                            console.log('Happy Independence Day');
                                            header.innerText= 'Happy Independence Day 🎈🎈🎈'
                                        },1000)                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)






