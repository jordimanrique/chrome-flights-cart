console.log('carrito chrome extension');

const SURNAME = 'Marpinez';
const EMAIL = 'rafael.mateo@atrapalo.com';
const NAMES = [
    { gender : 'mrs', name : 'Sara' },
    { gender : 'mr', name : 'Sebas' },
    { gender : 'mr',  name : 'Manri' },
    { gender : 'mr',  name : 'Cyril' },
    { gender : 'mr',  name : 'Jordi' },
    { gender : 'mr',  name : 'Fran' },
    { gender : 'mrs',  name : 'Raquel' },
    { gender : 'mr',  name : 'Rafael' },
    { gender : 'mr',  name : 'José Oriol' },
    { gender : 'mr',  name : 'Iñaki' },
    { gender : 'mrs',  name : 'Judit' },
    { gender : 'mrs',  name : 'Ivana' },
    { gender : 'mr',  name : 'Napo' },
    { gender : 'mrs',  name : 'Carla' },
    { gender : 'mr',  name : 'Bauti' },
    { gender : 'mr',  name : 'Pepe' }
];

$(document).ready(() => {
    let numPax = $('div[id^="bloqueAsistente_"]').length;
    let userInfo = { gender : 'mr',  name : 'Rafael' };

    for (indexPax = 0; indexPax < numPax; indexPax++) {
        if (indexPax !== 0) {
            userInfo = getUserInfo();
        }
        fillUserInfo(indexPax, userInfo);
    }

    /*$('#mp3_trato_asistente_0_mr').prop( "checked", true );
    $('#mp3_nombre_0').val('Rafael');
    $('#mp3_apellidos_0').val(SURNAME);

    fillUserInfo(1);
    fillUserInfo(2);
    fillUserInfo(3);

    $('#mp2_email_reg').val(EMAIL);
    $('#mp2_email_reg2').val(EMAIL);
    $('#mp2_cp_reg').val('08830');
    $('#mp2_direccion_reg').val('Carrer de les proves de ticketing');
    $('#mp2_poblacion_reg').val('Sant Boi de Llobregat');
    $('#mp2_regione_reg').val('1').trigger('change');
    $('#mp2_movil_reg').val('+34 646 64 64 64');

    $('#check_addons_rechaza').prop( "checked", true );
    $('#check_seguro_cancelacion_rechaza').prop( "checked", true );

    $('#sync-payer-with-asistente-0').click();

    $('#mp4_num_tarjeta').val('4548812049400004');
    $('#mp4_Month').val('04').trigger('change');
    $('#mp4_Year').val(((new Date).getFullYear()+1).toString().substr(-2)).trigger('change');
    $('#mp4_cvv').val('123');
    $('#mp4_tipo_tarjeta').val('VID').trigger('change');
    // $(window).scrollTop($('#fsCarritoBottom').offset().top);

    setTimeout(function (){
        $('#mp2_use_first_asistant_data').click();
        $('#btn_finalizar_continuar').click();
    }, 1000);*/
});

function getUserInfo() {
    return NAMES[Math.floor(Math.random() * NAMES.length)];
}

function fillUserInfo(index, userInfo) {
    $('#mp3_trato_asistente_' + index + '_' + userInfo.gender).prop( "checked", true );
    $('#mp3_nombre_' + index).val(userInfo.name);
    $('#mp3_f_nacimiento_dia_' + index).val($('#mp3_f_nacimiento_dia_'  + index + ' option:eq(1)').val());
    $('#mp3_f_nacimiento_mes_' + index).val($('#mp3_f_nacimiento_mes_'  + index + ' option:eq(1)').val());
    $('#mp3_f_nacimiento_anyo_' + index).val($('#mp3_f_nacimiento_anyo_'  + index + ' option:eq(1)').val());

    setTimeout(() => {
        $('#mp3_apellidos_' + index).val(SURNAME).trigger('click');
    }, 1000);
}