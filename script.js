				const translations = {
			ru: {
				themeLabel: "Выберите тему:",
				languageLabel: "Выберите язык:",
				title: "Калькулятор процентов",
				importlabel: "Введите данные ниже, либо сделайте импорт из файла:",
				importbutton: "Импорт из Excel",
				redirectbutton: "Перейти в Kundelik.kz",
      		  instructionbutton: "Инструкция",
    		    subjectLabel: "Введите название предмета:",
    		    foScoresLabel: "Введите ФО:",
		        foScoresPlaceholder: "Например: 8, 9, 10",
    		    sorScoresLabel: "Введите оценки СОР:",
        		sorScoresPlaceholder: "Например: 8/10, 9/10, 10/10",
        		hasSochLabel: "Есть СОЧ?",
				yes: "Да",
				no: "Нет",
				sochScoresLabel: "Введите оценку СОЧ:",
				sochScoresPlaceholder: "Например: 9/10",
				timePeriodLabel: "Посчитать за:",
				quarter: "За четверть",
				halfYear: "За полугодие",
				calculateButton: "Рассчитать",
				resultSubject: "Предмет",
				resultOverall: "Ваш общий процент",
				resultGrade: "Ваша оценка",
				exportbutton: "Экспорт в Excel",
				instruction: `
						<h2>Инструкция по эксплуатации</h2>
						<p>
							<div class="form-group">
							1. Введите название предмета. (При экспорте в excel оно используется в качестве названия файла)<br>
							</div> <div class="form-group">
							2. Введите оценки ФО и СОР, используя формат "1, 2, 3" для ФО и "1/2, 3/4, 5/6" для СОР.<br>
							</div> <div class="form-group">
							3. Если по предмету есть СОЧ, выберите "Да" и введите оценку СОЧ в формате "1/2".<br>
							</div> <div class="form-group">
							4. Если по предмету не пишется СОЧ, выберите "Нет" и выберите, за какой промежуток рассчитать процент.<br>
							</div> <div class="form-group">
							5. Нажмите кнопку "Рассчитать", чтобы увидеть ваш результат и итоговую оценку.<br>
							</div> <div class="form-group">
							6. Для смены языка или темы используйте выпадающие списки наверху страницы.
							</div>
						</p>
					`
			},
			en: {
				themeLabel: "Select Theme:",
				languageLabel: "Select Language:",
				title: "Percentage Calculator",
				importlabel: "Enter the data below, or import from a file:",
				importbutton: "Import from Excel",
				redirectbutton: "Go to Kundelik.kz",
				instructionbutton: "Instruction",
				subjectLabel: "Enter subject name:",
				foScoresLabel: "Enter FAs:",
				foScoresPlaceholder: "For example: 8, 9, 10",
				sorScoresLabel: "Enter SAU scores:",
				sorScoresPlaceholder: "For example: 8/10, 9/10, 10/10",
				hasSochLabel: "Is there a SAT?",
				yes: "Yes",
				no: "No",
				sochScoresLabel: "Enter SAT score:",
				sochScoresPlaceholder: "For example: 9/10",
				timePeriodLabel: "Calculate for:",
				quarter: "Quarter",
				halfYear: "Half-year",
				calculateButton: "Calculate",
				resultSubject: "Subject",
				resultOverall: "Your overall percentage",
				resultGrade: "Your grade",
				exportbutton: "Export to Excel",
				instruction: `
						<h2>Instruction manual</h2>
						<p>
							<div class="form-group">
							1. Enter the name of the subject. (When exporting to excel, it is used as the file name)<br>
							</div> <div class="form-group">
							2. Enter the FA and SAU scores using the format "1, 2, 3" for FA and "1/2, 3/4, 5/6" for SAU.<br>
							</div> <div class="form-group">
							3. If the subject has a SAT, select "Yes" and enter the SAT grade in the "1/2" format.<br>
							</div> <div class="form-group">
							4. If the subject does not require a SAT, select "No" and choose the period for which to calculate the percentage.
							</div> <div class="form-group">
							5. Click the "Calculate" button to see your result and final grade.<br>
							</div> <div class="form-group">
							6. To change the language or theme, use the drop-down lists at the top of the page.
							</div>
						</p>
					`
			},
			kk: {
				themeLabel: "Тақырыпты таңдаңыз:",
				languageLabel: "Тілді таңдаңыз:",
				title: "Пайыз калькуляторы",
				importlabel: "Төмендегі деректерді енгізіңіз немесе файлдан импорттаңыз:",
				importbutton: "Excel-ден импорттау",
				redirectbutton: "Өту Kundelik.kz",
				instructionbutton: "Нұсқаулық",
				subjectLabel: "Пән атауын енгізіңіз:",
				foScoresLabel: "ФБ енгізіңіз:",
				foScoresPlaceholder: "Мысалы: 8, 9, 10",
				sorScoresLabel: "БЖБ бағаларын енгізіңіз:",
				sorScoresPlaceholder: "Мысалы: 8/10, 9/10, 10/10",
				hasSochLabel: "ТЖБ бар ма?",
				yes: "Иә",
				no: "Жоқ",
    		    sochScoresLabel: "ТЖБ бағасын енгізіңіз:",
    		    sochScoresPlaceholder: "Мысалы: 9/10",
    		    timePeriodLabel: "Қандай мерзімге есептеу:",
    		    quarter: "Тоқсанға",
    		    halfYear: "Жартыжылдыққа",
    		    calculateButton: "Есептеу",
				resultSubject: "Пән",
				resultOverall: "Жалпы пайыз",
				resultGrade: "Сіздің бағаңыз",
				exportbutton: "Excel-ге экспорттау",
				instruction: `
					<h2>Пайдалану</h2>
					<p>
						<div class="form-group">
						1. Пән атауын енгізіңіз. (Excel-ге экспорттау кезінде ол Файл атауы ретінде қолданылады)<br>
						</div> <div class="form-group">
						2. ФБ үшін "1, 2, 3" және БЖБ үшін "1/2, 3/4, 5/6" пішімін пайдаланып, ФБ және БЖБ бағаларын енгізіңіз.<br>
						</div> <div class="form-group">
						3. Егер пәнде ТЖБ болса, «Иә» опциясын таңдап, «1/2» пішімінде ТЖБ бағасын енгізіңіз.<br>
						</div> <div class="form-group">
						4. Пән үшін ТЖБ жазылмаған болса, «Жоқ» тармағын таңдап, пайызды қай кезеңге есептеу керектігін таңдаңыз.
						</div> <div class="form-group">
						5. Нәтижені және қорытынды бағаны көру үшін "есептеу" түймесін басыңыз.<br>
						</div> <div class="form-group">
						6. Тілді немесе тақырыпты өзгерту үшін беттің жоғарғы жағындағы ашылмалы тізімдерді пайдаланыңыз.
						</div>
					</p>
				`
            }
		};



		
				let lastCalculation = null;

      		function changeLanguage() {
      		    const language = document.getElementById('language').value;
				const strings = translations[language];
    
			document.getElementById('themeLabel').textContent = strings.themeLabel;
			document.getElementById('languageLabel').textContent = strings.languageLabel;
			document.getElementById('title').textContent = strings.title;
			document.getElementById('import-label').textContent = strings.importlabel;
			document.getElementById('import-button').textContent = strings.importbutton;
			document.getElementById('redirect-button').textContent = strings.redirectbutton;
			document.getElementById('instruction-button').textContent = strings.instructionbutton;
			document.getElementById('subject-label').textContent = strings.subjectLabel;
			document.getElementById('hasSoch-label').textContent = strings.hasSochLabel;
			document.getElementById('foScores-label').textContent = strings.foScoresLabel;
			document.getElementById('sorScores-label').textContent = strings.sorScoresLabel;
			document.getElementById('sochScores-label').textContent = strings.sochScoresLabel;
			document.getElementById('timePeriodSection').querySelector('label').textContent = strings.timePeriodLabel;
    
			const timePeriodSelect = document.getElementById('timePeriod');
			timePeriodSelect.options[0].text = strings.quarter;
			timePeriodSelect.options[1].text = strings.halfYear;
    
			document.getElementById('calculate-button').textContent = strings.calculateButton;
			document.getElementById('export-button').textContent = strings.exportbutton;
			document.getElementById('foScores').placeholder = strings.foScoresPlaceholder;
			document.getElementById('sorScores').placeholder = strings.sorScoresPlaceholder;
			document.getElementById('sochScores').placeholder = strings.sochScoresPlaceholder;
			document.getElementById('yes').textContent = strings.yes;
			document.getElementById('no').textContent = strings.no;
			document.querySelector('.modal-content').innerHTML = strings.instruction;
					if (lastCalculation) {
						updateResult(lastCalculation);
					}
					localStorage.setItem('language', language);
				}
		
		function updateResult({ subject, percentageFoSor, percentageSoch, overallPercentage, grade }) {
			const language = document.getElementById('language').value;
			const strings = translations[language];
			const hasSoch = document.getElementById("hasSoch").value;

			let resultDiv = `
				${strings.resultSubject}: ${subject}<br>
				${strings.resultOverall}: ${percentageFoSor.toFixed(1)}%
			`;

			if (hasSoch === 'да') {
				resultDiv += ` + ${percentageSoch.toFixed(1)}% = ${overallPercentage.toFixed(0)}%`;
			} else {
				resultDiv += ` = ${percentageFoSor.toFixed(0)}%`; // Только ФО и СОР
			}

			const timePeriod = document.getElementById("timePeriod").value;
    
			if (timePeriod !== 'quarter' || hasSoch === 'да') {
				resultDiv += `<br>${strings.resultGrade} - ${grade}`;
			}

			document.getElementById('result').innerHTML = resultDiv;
		}

		
		function changeTheme() {
            const selectedTheme = document.getElementById('theme').value;
            document.body.className = selectedTheme;
            localStorage.setItem('theme', selectedTheme);
        }
		
		function openInstruction() {
			const modal = document.getElementById("instruction-modal");
			const modalContent = modal.querySelector(".modal-content");

			modal.style.display = "block";
			modal.style.animation = "fadeIn 0.4s ease";

			setTimeout(() => {
				modalContent.style.transform = "scale(1)";
				modalContent.style.opacity = "1";
			}, 100);
		}

		function closeInstruction() {
			const modal = document.getElementById("instruction-modal");
			const modalContent = modal.querySelector(".modal-content");

			modalContent.style.transform = "scale(0.7)";
			modalContent.style.opacity = "0";

			setTimeout(() => {
				modal.style.animation = "fadeOut 0.4s ease";
				setTimeout(() => {
					modal.style.display = "none";
				}, 400);
			}, 400);
		}

		window.onclick = function(event) {
			const modal = document.getElementById("instruction-modal");
			if (event.target === modal) {
				closeInstruction();
			}
		}
		
		
		function loadSettings() {
            const savedTheme = localStorage.getItem('theme');
            const savedLanguage = localStorage.getItem('language');

            if (savedTheme) {
                document.getElementById('theme').value = savedTheme;
                document.body.className = savedTheme;
            }

            if (savedLanguage) {
                document.getElementById('language').value = savedLanguage;
                changeLanguage();
            }
        }
		
		window.onload = function() {
            loadSettings();
				const hasSoch = document.getElementById('hasSoch').value;
				const timePeriodSection = document.getElementById('timePeriodSection');
    
			if (hasSoch === 'нет') {
				timePeriodSection.style.display = 'block';
			}
		
		 const params = new URLSearchParams(window.location.search);
  const subject = params.get("subject");
  const foScores = params.get("foScores");
  const sorScores = params.get("sorScores");
  const sochScores = params.get("sochScores");

  // Заполнение полей
  if (subject) document.getElementById("subject").value = subject;
  if (foScores) document.getElementById("foScores").value = foScores; // Числа
  if (sorScores) document.getElementById("sorScores").value = sorScores; // X/Y

  if (sochScores && sochScores !== "") {
    document.getElementById("hasSoch").value = "да";
    document.getElementById("sochScores").value = sochScores;
    document.getElementById("sochSection").style.display = "block";
    document.getElementById("timePeriodSection").style.display = "none";
  } else {
    document.getElementById("hasSoch").value = "нет";
    document.getElementById("sochSection").style.display = "none";
    document.getElementById("timePeriodSection").style.display = "block";
  }

  validateForm(); // Проверка данных
};
		
		
		
		function validateForm() {
			const subject = document.getElementById("subject").value.trim();
			const foScores = document.getElementById("foScores").value.trim();
			const sorScores = document.getElementById("sorScores").value.trim();
			const hasSoch = document.getElementById("hasSoch").value;
			const sochScores = document.getElementById("sochScores").value.trim();
			const allFieldsFilled = subject !== "" && foScores !== "" && sorScores !== "" && (hasSoch === "нет" || sochScores !== "");

			
		}
		
		function showError(message, fieldId) {
			alert(message);
			document.getElementById(fieldId).style.borderColor = 'red';
		}
	
		function clearError(fieldId) {
			document.getElementById(fieldId).style.borderColor = '';
		}

		
		function exportToExcel() {
			const subject = document.getElementById("subject").value || 'Предмет';
			const foScores = document.getElementById("foScores").value;
			const sorScores = document.getElementById("sorScores").value;
			const sochScores = document.getElementById("sochScores").value || '0/1';
		
			const data = [
				['Предмет', 'ФО', 'СОР', 'СОЧ'],
				[subject, foScores, sorScores, sochScores]
			];
			const worksheet = XLSX.utils.aoa_to_sheet(data);
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, "Оценки");
			const filename = `${subject}.xlsx`;
			XLSX.writeFile(workbook, filename);
		}

		function importFromExcel(event) {
			const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = function(e) {
			const data = new Uint8Array(e.target.result);
			const workbook = XLSX.read(data, { type: 'array' });
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];
			const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length > 1) {
            document.getElementById("subject").value = jsonData[1][0] || '';
            document.getElementById("foScores").value = jsonData[1][1] || '';
            document.getElementById("sorScores").value = jsonData[1][2] || '';
            document.getElementById("sochScores").value = jsonData[1][3] || '';

            const sochScore = jsonData[1][3];
            const hasSoch = sochScore && sochScore !== '0/1' ? 'да' : 'нет';
            document.getElementById("hasSoch").value = hasSoch;
            const sochSection = document.getElementById("sochSection");
            const timePeriodSection = document.getElementById("timePeriodSection");

            if (hasSoch === 'да') {
                sochSection.style.display = 'block';
                timePeriodSection.style.display = 'none';  // Скрываем "Посчитать за"
            } else {
                sochSection.style.display = 'none';
                timePeriodSection.style.display = 'block';  // Показываем "Посчитать за"
            }


            validateForm();
			}
			};

			reader.readAsArrayBuffer(file);
		}


		
        function calculate() {
			clearError("subject");
			clearError("foScores");
			clearError("sorScores");
			clearError("sochScores");

			const subject = document.getElementById("subject").value.trim();
			const foScores = document.getElementById('foScores').value.trim();
			const sorScores = document.getElementById("sorScores").value.trim();
			const hasSoch = document.getElementById("hasSoch").value;
			const sochScores = document.getElementById("sochScores").value.trim();
			const timePeriod = document.getElementById("timePeriod").value;

			if (subject === "") {
				showError("Поле 'Название предмета' не должно быть пустым!", "subject");
				return;
			}

			if (foScores === "") {
				showError("Поле 'ФО' не должно быть пустым!", "foScores");
				return;
			}

			if (sorScores === "") {
				showError("Поле 'СОР' не должно быть пустым!", "sorScores");
				return;
			}

			if (hasSoch === "да" && sochScores === "") {
				showError("Поле 'СОЧ' не должно быть пустым, если СОЧ выбран!", "sochScores");
				return;
			}

			const foArray = foScores.split(/[\s,]+/).map(score => parseInt(score.trim()));
			for (const score of foArray) {
 			   if (isNaN(score) || score < 1 || score > 10) {
   			     showError("Оценки ФО должны быть числами от 1 до 10!", "foScores");
   			     return;
 			   }
			}

			const sorArray = sorScores.split(/[\s,]+/).map(score => score.trim());
			for (const score of sorArray) {
  			  const [num1, num2] = score.split('/').map(Number);
			    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num1 > num2) {
			        showError("Оценки СОР должны быть в формате X/Y, где X <= Y!", "sorScores");
   			     return;
 			   }
			}
			
			if (hasSoch === "да") {
				const [num1, num2] = sochScores.split('/').map(Number);
				if (isNaN(num1) || isNaN(num2) || num1 < 0 || num1 > num2) {
					showError("Оценка СОЧ должна быть в формате X/Y, где X <= Y!", "sochScores");
					return;
				}
			}


			const numFo = foArray.length;
			const sorScoresArray = sorArray.map(score => score.split('/').map(Number));
			let sorSum = 0;
			let sorMax = 0;

			sorScoresArray.forEach(([score, max]) => {
				sorSum += score;
				sorMax += max;
			});
        
			const foSum = foArray.reduce((acc, score) => acc + score, 0);
			const foMax = foArray.length * 10;

			let percentageFoSor;
			if (hasSoch === 'нет') {
				if (timePeriod === 'quarter') {
					percentageFoSor = ((foSum + sorSum) / (foMax + sorMax)) * 50;
				} else {
					percentageFoSor = ((foSum + sorSum) / (foMax + sorMax)) * 100;
				}
			} else {
				percentageFoSor = ((foSum + sorSum) / (foMax + sorMax)) * 50;
			}

			let percentageSoch = 0;
			if (hasSoch === "да") {
				const [sochScore, sochMax] = sochScores.split('/').map(Number);
				percentageSoch = (sochScore / sochMax) * 50;
			}

			const overallPercentage = percentageFoSor + percentageSoch;
			let grade;
			if (overallPercentage.toFixed(0) >= 85) {
				grade = 5;
			} else if (overallPercentage.toFixed(0) >= 65) {
				grade = 4;
			} else if (overallPercentage.toFixed(0) >= 45) {
				grade = 3;
			} else {
				grade = 2;
			}

			lastCalculation = { subject, percentageFoSor, percentageSoch, overallPercentage, grade };
			updateResult(lastCalculation);
        
			document.getElementById('export-button').style.display = 'block';
			}

		
		
			document.getElementById('hasSoch').addEventListener('change', function () {
				const sochSection = document.getElementById('sochSection');
				const timePeriodSection = document.getElementById('timePeriodSection');
	
				if (this.value === 'да') {
					sochSection.style.display = 'block';
					timePeriodSection.style.display = 'none';
				} else {
					sochSection.style.display = 'none';
					timePeriodSection.style.display = 'block';
				}
				document.getElementById('result').innerHTML = '';
			});

			
        document.getElementById('sochSection').style.display = 'none';
