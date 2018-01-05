const storage = chrome.storage.local;

console.log('carrito chrome extension');

const SURNAME = 'Marpinez';
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

let userDefault = {
    gender: 'mr',
    name: 'Rafael',
    email: 'rafael.mateo@atrapalo.com'
};

let active = false;

$(document).ready(() => {
  validateUserFromStorage();
});

function validateUserFromStorage() {
    storage.get(['results'], (items) => {
        refreshDefaultUser(items.results);
        fillForm();
    });
}

function fillForm() {

    if (active) {
      let numPax = $('div[id^="bloqueAsistente_"]').length;
      let userInfo = userDefault;

      $('#mp3_trato_asistente_0_' + userDefault.gender).prop("checked", true);
      $('#mp3_nombre_0').val(userDefault.name);
      $('#mp2_email_reg').val(userDefault.email);
      $('#mp2_email_reg2').val(userDefault.email);

      for (let indexPax = 0; indexPax < numPax; indexPax++) {
        if (indexPax !== 0) {
          userInfo = getUserInfo();
        }
        fillUserInfo(indexPax, userInfo);
      }

      $('#mp2_nombre_reg').val(userDefault.name);
      $('#mp2_email_reg').val(userDefault.email);
      $('#mp2_email_reg2').val(userDefault.email);
      $('#mp2_cp_reg').val('08830');
      $('#mp2_direccion_reg').val('Carrer de les proves de ticketing');
      $('#mp2_poblacion_reg').val('Sant Boi de Llobregat');
      $('#mp2_regione_reg').val('1').trigger('change');
      $('#mp2_movil_reg').val('+34 646 64 64 64');
      $('#mp2_apellidos_reg').val(SURNAME);

      $('#check_addons_rechaza').prop("checked", true);
      $('#check_seguro_cancelacion_rechaza').prop("checked", true);

      $('#sync-payer-with-asistente-0').click();

      $('#mp4_num_tarjeta').val('4548812049400004');
      $('#mp4_Month').val('04').trigger('change');
      $('#mp4_Year').val(((new Date).getFullYear() + 1).toString().substr(-2)).trigger('change');
      $('#mp4_cvv').val('123');
      $('#mp4_tipo_tarjeta').val('VID').trigger('change');
      // $(window).scrollTop($('#fsCarritoBottom').offset().top);

      setTimeout(function () {
        $('#btn_finalizar_continuar').click();
      }, 1000);
    }
}

function getUserInfo() {
    return NAMES[Math.floor(Math.random() * NAMES.length)];
}

function fillUserInfo(index, userInfo) {
    $('#mp3_trato_asistente_' + index + '_' + userInfo.gender).prop( "checked", true );
    $('#mp3_nombre_' + index).val(userInfo.name);
    $('#mp3_f_nacimiento_dia_' + index).val($('#mp3_f_nacimiento_dia_'  + index + ' option:eq(1)').val());
    $('#mp3_f_nacimiento_mes_' + index).val($('#mp3_f_nacimiento_mes_'  + index + ' option:eq(1)').val());
    $('#mp3_f_nacimiento_anyo_' + index).val($('#mp3_f_nacimiento_anyo_'  + index + ' option:eq(1)').val());
    $('#mp3_'+ index +'_caducidad_documento_dia').val($('#mp3_'+ index +'_caducidad_documento_dia option:eq(1)').val());
    $('#mp3_'+ index +'_caducidad_documento_mes').val($('#mp3_'+ index +'_caducidad_documento_mes option:eq(1)').val());
    $('#mp3_'+ index +'_caducidad_documento_anyo').val($('#mp3_'+ index +'_caducidad_documento_anyo option:eq(3)').val());

    setTimeout(() => {
        $('#mp3_apellidos_' + index).val(SURNAME).trigger('click');
    }, 1000);
}

chrome.runtime.onMessage.addListener((message) => {
    switch (message.type) {
        case 'COMMAND':
            switch (message.payload) {
                case 'change-userDefault':
                    getDataFormStorage();
                    break;
            }
    }
});

function getDataFormStorage() {
    storage.get(['results'], (items) => {
        refreshDefaultUser(items.results);
        fillForm();
    });
}

function refreshDefaultUser(user) {
  if (user) {
    userDefault.gender = user.gender;
    userDefault.name = user.name;
    userDefault.email = user.email;
  }

  active = user.active === 'on';
}