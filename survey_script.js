const surveyOpenButton = document.querySelector('.hbp_risk_button');
const bodyForSurvey = document.querySelector('body');
// const formOpenButton = document.querySelector('.connect__bottom');
surveyOpenButton.addEventListener("click", (e)=>{
    formOpenButton.style.zIndex = '-1';
    connectForm.insertAdjacentHTML('afterbegin', `
    <div class="survey_background">
        <div class="survey_modal_border">
        <div class="survey_modal">

                    <button class="survey_close">X</button>
                      <div class="form_text">
                          <h2 class="survey_title">Пройдите опрос и узнайте <span class="green_text">о риске развития ХБП</span></h2>
                      </div>
                      <div class="full_survey">
                        <div class="survey_img"><img src="img/kidneys.svg" alt="kidneys"></div>
                        <div class="survey_content">
                      <div>
                      <p><span class="green_text">1/</span>Возраст пациента</p>
                      <div class="age_variants">
                        <div class="age_variant">
                        <input type="radio" id="age_1"
                        name="age" class="radio_button" value="up-to-year" checked>
                        <label for="age_1">до 1 года</label>
                        </div>
                        <div class="age_variant">
                        <input type="radio" id="age_2"
                        name="age" class="radio_button" value="from-one-to-three">
                        <label for="age_2">от 1 до 3 лет</label>
                        </div>
                        <div class="age_variant">
                        <input type="radio" id="age_3"
                        name="age" class="radio_button" value="from-three-to-five">
                        <label for="age_3">от 3 до 5 лет</label>
                      </div>
                      <div class="age_variant">
                        <input type="radio" id="age_4"
                        name="age" class="radio_button" value="older-than-one">
                        <label for="age_4">старше 5 лет</label>
                      </div>
                      </div>
                    </div>
                    <div>
                      <p><span class="green_text">2/</span>Диагноз</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variant">
                        <input type="radio" id="gus"
                        name="diagnosis" class="radio_button" value="gus" checked>
                        <label for="gus">ГУС</label><br>
                      </div>
                      <div class="diagnosis_variant">
                        <input type="radio" id="a-gus"
                        name="diagnosis" class="radio_button" value="a-gus">
                        <label for="a-gus">аГУС</label>
                      </div>
                      </div>
                    </div>
                      <div class="survey_el">
                        <label for="trombocytes" class="question"><span class="green_text">3/</span>Уровень тромбоцитов в крови</label><br>
                  <input type="text" class="question_answer" id="trombocytes" placeholder="Введите ответ">
                      </div>
                      <div class="survey_el">
                        <label for="hemoglobin" class="question"><span class="green_text">4/</span>Уровень гемоглобина в крови</label><br>
                  <input type="text" class="question_answer" id="hemoglobin" placeholder="Введите ответ">
                      </div>
                      
                    <div class="survey_el">
                      <label for="creatinine" class="question"><span class="green_text">5/</span>Уровень креатинина в крови</label><br>
                <input type="text" class="question_answer" id="creatinine" placeholder="Введите ответ">
                    </div>
                    <div class="survey_el">
                      <label for="urea" class="question"><span class="green_text">6/</span>Уровень мочевины в крови</label><br>
                <input type="text" class="question_answer" id="urea" placeholder="Введите ответ">
                    </div>
                    <div class="survey_el">
                      <label for="serum_serotonin" class="question"><span class="green_text">7/</span>Уровень серотонина в плазме крови</label><br>
                <input type="text" class="question_answer" id="serum_serotonin" placeholder="Введите ответ">
                    </div>
                    <div class="survey_el">
                      <label for="plasma_serototnin" class="question"><span class="green_text">8/</span>Уровень серотонина в плазме обогащенной тромбоцитами</label><br>
                <input type="text" class="question_answer" id="plasma_serototnin" placeholder="Введите ответ">
                    </div>
                    <div class="survey_el">
                      <label for="giuk" class="question"><span class="green_text">9/</span>Уровень  5-ГИУК в сыворотке крови</label><br>
                <input type="text" class="question_answer" id="giuk" placeholder="Введите ответ">
                    </div>
                    <button type="submit" class="survey_submit">Получить расшифровку</button>
                    </div>
                  </div>
        </div>
    </div>
</div>
    `);
    const surveyClose = document.querySelector('.survey_close');
const modalSurvey = document.querySelector('.survey_background');
surveyClose.addEventListener("click", (e)=>{
    modalSurvey.remove();
    formOpenButton.style.zIndex = '0';
});
});