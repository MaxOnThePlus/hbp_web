const surveyOpenButton = document.querySelector('.hbp_risk_button');
async function submitButton(){
    let data = {
        'priem': document.getElementById('priem').value,
        'debjut_v_vozraste': document.getElementById('debjut_v_vozraste').value,
        'vozrast_gruppa_debjut': document.getElementById('vozrast_gruppa_debjut').value,
        'dz': document.getElementById('dz').value,
        'pol': document.getElementById('pol').value,
        'vozrast_gruppy': document.getElementById('vozrast_gruppy').value,
        'tr_v_den': document.getElementById('tr_v_den').value,
        'trpenia_debjut': document.getElementById('trpenia_debjut').value,
        'dlit_trpenii': document.getElementById('dlit_trpenii').value,
        'nv_v_den': document.getElementById('nv_v_den').value,
        'er_v_den': document.getElementById('er_v_den').value,
        'ley_v_den': document.getElementById('ley_v_den').value,
        'kr_v_den': document.getElementById('kr_v_den').value,
        'kr_max': document.getElementById('kr_max').value,
        'skf_v_den': document.getElementById('skf_v_den').value,
        'skf_min': document.getElementById('skf_min').value,
        'dlit_skf': document.getElementById('dlit_skf').value,
        'mochevina_v_den': document.getElementById('mochevina_v_den').value,
        'mochevina_max': document.getElementById('mochevina_max').value,
        'alt_v_den': document.getElementById('alt_v_den').value,
        'alt_v_max': document.getElementById('alt_v_max').value,
        'ast_v_den': document.getElementById('ast_v_den').value,
        'ast_max': document.getElementById('ast_max').value,
        'ldg_v_den': document.getElementById('ldg_v_den').value,
        'ldg_max': document.getElementById('ldg_max').value,
        'ob_v_den': document.getElementById('ob_v_den').value,
        'soe_max': document.getElementById('soe_max').value,
        'soe_v_den': document.getElementById('soe_v_den').value,
        'srb_max': document.getElementById('srb_max').value,
        'srb_v_den': document.getElementById('srb_v_den').value,
        'c3_min': document.getElementById('c3_min').value,
        'c4_min': document.getElementById('c4_min').value,
        'gaptoglobin_min': document.getElementById('gaptoglobin_min').value,
        'cns': document.getElementById('cns').value,
        'porazhenie_cns': document.getElementById('porazhenie_cns').value,
        'porazhenie_serdca': document.getElementById('porazhenie_serdca').value,
        'echo_ks': document.getElementById('echo_ks').value,
        'chls': document.getElementById('chls').value,
        'parenhima_pochek': document.getElementById('parenhima_pochek').value,
        'debjut_zabolevaniya': document.getElementById('debjut_zabolevaniya').value,
        'gemokolit': document.getElementById('gemokolit').value,
        'diareya': document.getElementById('diareya').value,
        'temperature': document.getElementById('temperature').value,
        'rvota': document.getElementById('rvota').value,
        'ag': document.getElementById('ag').value,
        'sad': document.getElementById('sad').value,
        'dad': document.getElementById('dad').value,
        'jkt': document.getElementById('jkt').value,
        'pechen': document.getElementById('pechen').value,
        'sut_belok_max': document.getElementById('sut_belok_max').value,
        'protenuria_dan': document.getElementById('protenuria_dan').value,
        'gematury': document.getElementById('gematury').value,
        'gematury_dney': document.getElementById('gematury_dney').value,
        'leykocituria': document.getElementById('leykocituria').value,
        'leykuria_dney': document.getElementById('leykuria_dney').value,
        'narushenie_mochespuskania': document.getElementById('narushenie_mochespuskania').value,
        'olig_anuria_dney': document.getElementById('olig_anuria_dney').value,
        'ekulizymab': document.getElementById('ekulizymab').value,
        'dlit_OPP': document.getElementById('dlit_OPP').value,
        'peritonealny': document.getElementById('peritonealny').value,
        'gemodializ': document.getElementById('gemodializ').value,
        'giuk5': document.getElementById('giuk5').value,
        'NT5VPlazme': document.getElementById('NT5VPlazme').value
    }
    const body = JSON.stringify(data);
    let response = await fetch('http://127.0.0.1:5000/get-result/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: body
    });
    document.getElementById('response').innerHTML = await response.json();
}
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
                        <div class="age_variants">
                        <select name=vozrast_gruppy id="vozrast_gruppy"/>
                          <option value=0>До года</option>
                          <option value=1>От 1 до 3 лет</option>
                          <option value=2>От трех до 5 лет</option>
                          <option value=3>Старше 5 лет</option>
                        </select>
                      </div>
                      </div>
                    </div>
                    
                    <div>
                      <p><span class="green_text">2/</span>Прием</p>
                      <div class="age_variants_priem">
                        <div class="age_variants_priem">
                        <select name=priem id="priem"/>
                          <option value=0>До года</option>
                          <option value=1>От 1 до 3 лет</option>
                          <option value=2>От трех до 5 лет</option>
                          <option value=3>Старше 5 лет</option>
                        </select>
                      </div>
                      </div>
                    </div>
                    
                    <div>
                      <p><span class="green_text">3/</span>Дебют в возрасте</p>
                      <div class="age_debyut">
                        <div class="age_debyut">
                            <input type='number' placeholder="Введите ответ" id="debjut_v_vozraste" min="0"/>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p><span class="green_text">4/</span>Возрастная группа дебют</p>
                      <div class="age_variants">
                        <div class="age_variants">
                        <select name=vozrast_gruppa_debjut id="vozrast_gruppa_debjut"/>
                          <option value=0>До года</option>
                          <option value=1>От 1 до 3 лет</option>
                          <option value=2>От трех до 5 лет</option>
                          <option value=3>Старше 5 лет</option>
                        </select>
                      </div>
                      </div>
                    </div>
                    
                    <div>
                      <p><span class="green_text">5/</span>Диагноз</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variant">
                        <select name=dz id="dz"/>
                          <option value='ГУС'>ГУС</option>
                          <option value='аГУС'>аГУС</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <p><span class="green_text">6/</span>Пол</p>
                      <div class="age_variants">
                        <div class="age_variants">
                        <select name="pol" id="pol"/>
                          <option value='Мальчик'>Мальчик</option>
                          <option value='Девочка'>Девочка</option>
                        </select>
                      </div>
                    </div>
                    
                      <div class="survey_el">
                        <label for="tr_v_den" class="question"><span class="green_text">7/</span>Уровень тромбоцитов в крови</label><br>
                        <input type="text" class="question_answer" id="tr_v_den" placeholder="Введите ответ">
                      </div>
                      
                      <div class="survey_el">
                        <label for="trpenia_debjut" class="question"><span class="green_text">8/</span>Трпения дебют</label><br>
                        <input type="text" class="question_answer" id="trpenia_debjut" placeholder="Введите ответ">
                      </div>
                      
                      
                      <div class="survey_el">
                        <label for="dlit_trpenii" class="question"><span class="green_text">9/</span>Длительность трпении</label><br>
                        <input type="text" class="question_answer" id="dlit_trpenii" placeholder="Введите ответ">
                      </div>
                      
                      <div class="survey_el">
                        <label for="nv_v_den" class="question"><span class="green_text">10/</span>Нв в день</label><br>
                        <input type="text" class="question_answer" id="nv_v_den" placeholder="Введите ответ">
                      </div>
                      
                      <div class="survey_el">
                        <label for="er_v_den" class="question"><span class="green_text">11/</span>Уровень эритроцитов в крови</label><br>
                        <input type="text" class="question_answer" id="er_v_den" placeholder="Введите ответ">
                      </div>
                      
                      <div class="survey_el">
                        <label for="ley_v_den" class="question"><span class="green_text">12/</span>Уровень лейкоцитов в крови</label><br>
                        <input type="text" class="question_answer" id="ley_v_den" placeholder="Введите ответ">
                      </div>
                      
                      <div class="survey_el">
                        <label for="kr_v_den" class="question"><span class="green_text">13/</span>Кр в крови</label><br>
                        <input type="text" class="question_answer" id="kr_v_den" placeholder="Введите ответ">
                      </div>
                       
                      <div class="survey_el">
                        <label for="kr_max" class="question"><span class="green_text">14/</span>Максимум кр</label><br>
                        <input type="text" class="question_answer" id="kr_max" placeholder="Введите ответ">
                      </div>
                        
                      <div class="survey_el">
                        <label for="skf_v_den" class="question"><span class="green_text">15/</span>Скф в крови</label><br>
                        <input type="text" class="question_answer" id="skf_v_den" placeholder="Введите ответ">
                      </div>
                        
                      <div class="survey_el">
                        <label for="skf_min" class="question"><span class="green_text">16/</span>Минимум скф</label><br>
                        <input type="text" class="question_answer" id="skf_min" placeholder="Введите ответ">
                      </div>
                         
                      <div class="survey_el">
                        <label for="dlit_skf" class="question"><span class="green_text">17/</span>Длительность скф</label><br>
                        <input type="text" class="question_answer" id="dlit_skf" placeholder="Введите ответ">
                      </div>
                         
                      <div class="survey_el">
                        <label for="mochevina_v_den" class="question"><span class="green_text">18/</span>Мочевина в крови</label><br>
                        <input type="text" class="question_answer" id="mochevina_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="mochevina_max" class="question"><span class="green_text">19/</span>Максимум мочевины</label><br>
                        <input type="text" class="question_answer" id="mochevina_max" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="alt_v_den" class="question"><span class="green_text">20/</span>АЛТ в крови</label><br>
                        <input type="text" class="question_answer" id="alt_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="alt_v_max" class="question"><span class="green_text">21/</span>Максимум АЛТ</label><br>
                        <input type="text" class="question_answer" id="alt_v_max" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="ast_v_den" class="question"><span class="green_text">22/</span>АСТ в крови</label><br>
                        <input type="text" class="question_answer" id="ast_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="ast_max" class="question"><span class="green_text">23/</span>Максимум АСТ</label><br>
                        <input type="text" class="question_answer" id="ast_max" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="ldg_v_den" class="question"><span class="green_text">24/</span>ЛДГ в крови</label><br>
                        <input type="text" class="question_answer" id="ldg_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="ldg_max" class="question"><span class="green_text">25/</span>Максимум ЛДГ</label><br>
                        <input type="text" class="question_answer" id="ldg_max" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="ob_v_den" class="question"><span class="green_text">26/</span>ОБ в крови</label><br>
                        <input type="text" class="question_answer" id="ob_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="soe_max" class="question"><span class="green_text">27/</span>Макс СОЭ</label><br>
                        <input type="text" class="question_answer" id="soe_max" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="soe_v_den" class="question"><span class="green_text">28/</span>СОЭ в крови</label><br>
                        <input type="text" class="question_answer" id="soe_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="srb_max" class="question"><span class="green_text">29/</span>Максимум СРБ</label><br>
                        <input type="text" class="question_answer" id="srb_max" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="srb_v_den" class="question"><span class="green_text">30/</span>СРБ в крови</label><br>
                        <input type="text" class="question_answer" id="srb_v_den" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="c3_min" class="question"><span class="green_text">31/</span>Минимум C3</label><br>
                        <input type="text" class="question_answer" id="c3_min" placeholder="Введите ответ">
                      </div>
                          
                      <div class="survey_el">
                        <label for="c4_min" class="question"><span class="green_text">32/</span>Минимум С4</label><br>
                        <input type="text" class="question_answer" id="c4_min" placeholder="Введите ответ">
                      </div>  
                        
                      <div class="survey_el">
                        <label for="gaptoglobin_min" class="question"><span class="green_text">33/</span>Минимум гаптоглобина</label><br>
                        <input type="text" class="question_answer" id="gaptoglobin_min" placeholder="Введите ответ">
                      </div>
                      
                      <div>
                      <p><span class="green_text">34/</span>ЦНС</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=cns id="cns"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                       
                      <div>
                      <p><span class="green_text">35/</span>Поражение ЦНС</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=porazhenie_cns id="porazhenie_cns"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                       
                      <div>
                      <p><span class="green_text">36/</span>Поражение сердца</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=porazhenie_serdca id="porazhenie_serdca"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                      
                    <div class="survey_el">
                        <label for="echo_ks" class="question"><span class="green_text">37/</span>Эхо КС</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="echo_ks" min="0" step="1" max="9"/>
                    </div>
                         
                    <div class="survey_el">
                        <label for="chls" class="question"><span class="green_text">38/</span>ЧЛС</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="chls" min="0" step="1" max="2"/>
                    </div>
                           
                    <div class="survey_el">
                        <label for="parenhima_pochek" class="question"><span class="green_text">39/</span>Перенхима почек</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="parenhima_pochek" min="0" step="1" max="2"/>
                    </div>
                             
                    <div class="survey_el">
                        <label for="debjut_zabolevaniya" class="question"><span class="green_text">40/</span>Дебют заболевания</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="debjut_zabolevaniya" min="0" step="1" max="2"/>
                    </div>
                         
                    <div>
                      <p><span class="green_text">41/</span>Гемоколит</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=gemokolit id="gemokolit"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                               
                    <div class="survey_el">
                        <label for="diareya" class="question"><span class="green_text">42/</span>Диарея</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="diareya" min="0" step="1" max="2"/>
                    </div>
                    
                    <div class="survey_el">
                        <label for="temperature" class="question"><span class="green_text">43/</span>Температура</label><br>
                        <input type="text" class="question_answer" id="temperature" placeholder="Введите ответ">
                    </div>
                       
                    <div class="survey_el">
                        <label for="rvota" class="question"><span class="green_text">44/</span>Рвота</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="rvota" min="0" step="1" max="2"/>
                    </div>
                    
                    <div>
                      <p><span class="green_text">45/</span>АГ</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=ag id="ag"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                    
                    <div class="survey_el">
                        <label for="sad" class="question"><span class="green_text">46/</span>САД</label><br>
                        <input type="text" class="question_answer" id="sad" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="dad" class="question"><span class="green_text">47/</span>ДАД</label><br>
                        <input type="text" class="question_answer" id="dad" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="jkt" class="question"><span class="green_text">48/</span>ЖКТ</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="jkt" min="0" step="1" max="8"/>
                    </div>
                    
                    <div class="survey_el">
                        <label for="pechen" class="question"><span class="green_text">49/</span>Печень</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="pechen" min="0" step="2" max="8"/>
                    </div>
                    
                    <div class="survey_el">
                        <label for="sut_belok_max" class="question"><span class="green_text">50/</span>Максимум суточного белка</label><br>
                        <input type="text" class="question_answer" id="sut_belok_max" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="protenuria_dan" class="question"><span class="green_text">51/</span>Протенурия дан</label><br>
                        <input type="text" class="question_answer" id="protenuria_dan" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="gematury" class="question"><span class="green_text">52/</span>Гематурия</label><br>
                        <input type="text" class="question_answer" id="gematury" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="gematury_dney" class="question"><span class="green_text">53/</span>Гематурия дней</label><br>
                        <input type="text" class="question_answer" id="gematury_dney" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="leykocituria" class="question"><span class="green_text">54/</span>Лекоцитурия</label><br>
                        <input type="text" class="question_answer" id="leykocituria" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="leykuria_dney" class="question"><span class="green_text">55/</span>Лекоцитурия дней</label><br>
                        <input type="text" class="question_answer" id="leykuria_dney" placeholder="Введите ответ">
                    </div>
                     
                     <div class="survey_el">
                        <label for="narushenie_mochespuskania" class="question"><span class="green_text">56/</span>Нарушение мочеиспускания</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="narushenie_mochespuskania" min="0" step="1" max="2"/>
                     </div>
                     
                    <div class="survey_el">
                        <label for="olig_anuria_dney" class="question"><span class="green_text">57/</span>Олиг анурия дней</label><br>
                        <input type="text" class="question_answer" id="olig_anuria_dney" placeholder="Введите ответ">
                    </div>
                    
                    <div class="survey_el">
                        <label for="ekulizymab" class="question"><span class="green_text">58/</span>Экулизимаб</label><br>
                        <input type='number' class="question_answer" placeholder="Введите ответ" id="ekulizymab" min="0" step="1" max="7"/>
                    </div>
                    
                    <div class="survey_el">
                        <label for="dlit_OPP" class="question"><span class="green_text">59/</span>Длительность ОПП</label><br>
                        <input type="text" class="question_answer" id="dlit_OPP" placeholder="Введите ответ">
                    </div>
                    
                    <div>
                      <p><span class="green_text">60/</span>Перитониалный</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=peritonealny id="peritonealny"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <p><span class="green_text">61/</span>Гемодиализ</p>
                      <div class="diagnosis_variants">
                        <div class="diagnosis_variants">
                        <select name=gemodializ id="gemodializ"/>
                          <option value=0>Нет</option>
                          <option value=1>Да</option>
                        </select>
                      </div>
                    </div>
                    
                    <div class="survey_el">
                        <label for="giuk5" class="question"><span class="green_text">62/</span>ГИУК-5</label><br>
                        <input type="text" class="question_answer" id="giuk5" placeholder="Введите ответ">
                    </div>
                     
                    <div class="survey_el">
                        <label for="NT5VPlazme" class="question"><span class="green_text">63/</span>НТ5 в плазме</label><br>
                        <input type="text" class="question_answer" id="NT5VPlazme" placeholder="Введите ответ">
                    </div>
                    
                    </div>
                        <button type="submit" class="survey_submit" onclick="submitButton()">Получить расшифровку</button>
                    </div>
                    
                    <div>
                        <label for="response"> Вероятность болезни: </label><br/>
                        <fieldset id='response'></fieldset><br/>
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