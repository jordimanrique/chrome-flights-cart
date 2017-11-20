console.log('carrito chrome extension');

const SURNAME = 'Marpinez';
const EMAIL = 'rafael.mateo@atrapalo.com';

$(document).ready(()=> {
    $('#mp3_trato_asistente_0_mr').prop( "checked", true );
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
    }, 1000);
});

function fillUserInfo(index) {
    $('#mp3_trato_asistente_' + index + '_mrs').prop( "checked", true );
    $('#mp3_nombre_' + index).val('Raquel');
    $('#mp3_apellidos_' + index).val(SURNAME);
    $('#mp3_f_nacimiento_dia_' + index).val('10');
    $('#mp3_f_nacimiento_mes_' + index).val('10');
    $('#mp3_f_nacimiento_anyo_' + index).val('2016');
}