const formOpenButton = document.querySelector('.connect__bottom');
const connectForm = document.querySelector('body');
formOpenButton.addEventListener("click", (e)=>{
    formOpenButton.style.zIndex = '-1';
    connectForm.insertAdjacentHTML('afterbegin', `
    <div class="modal_window" id="modal_window">
                <form class="free_consultation">
                  <button class="form_close">X</button>
                    <div class="form_text">
                        <h2 class="freeconsultation_form_title"><span class="green_text">Бесплатная</span> консультация</h2>
                        <p class="freeconsultation_form_description">Заполните короткую форму и мы свяжемся с вами в течение 5 минут</p>
                    </div>
                    <div class="free_consultation_el name_input">
                      <input type="text" class="form-control" id="name" placeholder="Имя*">
                    </div>
                    <div class="free_consultation_el tel_input">
                      <input type="tel" class="form-control" id="telephone" placeholder="Телефон*">
                    </div>
                    <div class="free_consultation_el form-check">
                      <input type="checkbox" class="form_check_input" id="personal_check">
                      <label class="form_check_label" for="personal_check">Согласен на обработку персональных данных</label>
                    </div>
                    <button type="submit" class="btn_submit">Отправить</button>
                  
                  </form>
                  <div class="overlay"></div>
                </div>
    `);
    const formClose = document.querySelector('.form_close');
const modalForm = document.querySelector('.modal_window');
formClose.addEventListener("click", (e)=>{
    modalForm.remove();
    formOpenButton.style.zIndex = '0';
});
});


$(document).ready(function() {
  $('.doc_profile_slider').slick({
    dots:true,
    adaptiveHeight:true,
    speed: 5000,
    autoplay:true,


  });
  
})




