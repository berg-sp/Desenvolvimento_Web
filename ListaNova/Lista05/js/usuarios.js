var usuarios = [ {
                nome: "Marta",
                idade: 36,
                ehAdmin: true,
                email: "marta@vendedora.com"
            },
            {
                nome: "Fernando",
                idade: 62,
                ehAdmin: false,
                email: "fernando@politico.com"
            },
            {
                nome: "Adison",
                idade: 24,
                ehAdmin: false,
                email: "adison@jogador.com"
            },
            {
                nome: "Isis",
                idade: 29,
                ehAdmin: false,
                email: "isis@cosmonalta.com"
            },
            {
                nome: "Luiz",
                idade: 45,
                ehAdmin: true,
                email: "luiz@tecnico.com"
            } ];
    
    console.log(usuarios);
    console.log("Administradores")
    for(var i = 0; i < usuarios.length; i++) {
        if(usuarios[i].ehAdmin == true){
            console.log(" Olá " + usuarios[i].nome + "! Bem vindo(a) você é admin do sistema, enviamos um email para " + usuarios[i].email + "para você criar uma senha")
        }
    }