
//Ao clicar no botão salvar vai ter que conferir se todos os campos estao
//preenchidos e então exibir
$(".btnsalvar").on('click',function(e){
    e.preventDefault(); //para evitar reload na pagina
    let status = '';
    if($(".txtNome").val().length < 3){ //nome precisa ter mais de 2 caracteres
        status = status + '<br />Campo Nome inválido';
    }
    if($(".selSexo").val() == 'null'){ //verifica se um sexo esta selecioado
        status = status + '<br />Escolha o sexo';
    }
    if($(".selCidade").val() == 'null'){ //verifica se selecionou uma cidade
        status = status + '<br />Escolha a cidade mais próxima'
    }

    if(status.length > 2){
        //caso faltou algum campo
        $(".alertmessage").html(status);
        $(".alertmessage").css('background','red');
    }
    else console.log( //caso não exiba os campos
    $(".txtNome").val() + ' - ' +
     $(".selSexo").val() + ' - ' +
     $("input[name='ufs']:checked").val() + ' - ' +
     $(".selCidade").val()
     );


});


//aqui é onde muda as cidades aonde vc escolhe o estados
//usamos agora o CHANGE como um outro evento semelhante ao CLICK
//Resumindo: Ao eu MUDAR o que deve acontecer?
$("input[name='ufs']").on('change',function(){
        if($(this).val() == 'sp'){
            $(".selCidade").html('');
            $(".selCidade").html(
                "<option value='null' selected>Cidade...</option>" +
                "<option value='saocarlos'>São Carlos</option>" +
                "<option value='araraquara'>Araraquara</option>" +
                "<option value='saopaulo'>São Paulo</option>"
            );
        }else if($(this).val() == 'rj'){
            $(".selCidade").html('');
            $(".selCidade").html(
                "<option value='null' selected>Cidade...</option>" +
                "<option value='riodejaneiro'>Rio de Janeiro</option>" +
                "<option value='angradosreis'>Angra dos Reis</option>"
            );
        }else{
            $(".selCidade").html('');
            $(".selCidade").html(
                "<option value='null' selected>Cidade...</option>" +
                "<option value='goiania'>Goiania</option>"
            );
        }

    });


