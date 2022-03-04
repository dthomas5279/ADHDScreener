
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

let results=[];
let symptoms=[];
let nonsymptoms=[];
let globalsymptoms=[];

slide()
document.getElementById("start").addEventListener('click',start)
document.getElementById("next").addEventListener('click',next)
document.getElementById("previous").addEventListener('click',previous)
document.getElementById("submit").addEventListener('click',submit)
document.getElementById("showInstructions").addEventListener('click', instructions)

function slide(){
    document.getElementById("slideValue"); // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        document.getElementById("slideValue").innerText = this.value;

        if (this.value==1){
            document.getElementById("labelValue").innerText=": Never"
        }

        else if (this.value==2){
            document.getElementById("labelValue").innerText=": Rarely"
        }

        else if (this.value==3){ 
            document.getElementById("labelValue").innerText=": Sometimes"
        }

        else if (this.value==4){
            document.getElementById("labelValue").innerText=": Often"
        }

        else if (this.value==5){
            document.getElementById("labelValue").innerText=": Very Often"
        }
    }

}

function start(){
    var questionNumber = 1
    document.getElementById("questionNumber").innerText = questionNumber;

    var hideArray = document.querySelectorAll('.hidden');
    var showArray = document.querySelectorAll('.home');

    Array.from(hideArray).forEach(element => element.classList.toggle('hidden'))

    Array.from(showArray).forEach(element => element.classList.toggle('hidden'))

    document.getElementById('intro').style.display = "none"

    document.getElementById('showInstructions').style.display = "block"

    document.getElementById('questionNumber').style.display = "inline"

    document.getElementById('question').style.display = "inline"

    document.getElementById('question').innerHTML = questions[questionNumber - 1]

    element = document.querySelector("#previous")

element.classList.add("hidden");

document.getElementById('readInstructions').classList.toggle('hidden');


    // let hide = document.getElementsByClassName('hidden')
    // let show = document.getElementsByClassName('home')

    // hide.classList.toggle('hidden')
    // show.classList.toggle('hidden')

    // for (var i = 0; i < obj.length; i++) {
    //     document.getElementsByClassName([obj[i]]).style.display = 'none';
    //   }
}



function previous(){

    let element = document.getElementById('questionNumber');
    
    let value = element.innerHTML;
    
    --value;
    
    document.getElementById('questionNumber').innerHTML = value
    
    document.getElementById('question').innerHTML = questions[value - 1]
    
    if (value == 1){
    
    element = document.querySelector("#previous")
    
    element.classList.add("hidden");
    
    }
    
    document.getElementById('myRange').value = 1;
    
    document.getElementById("slideValue").innerText = "1"
    
    document.getElementById("labelValue").innerText=": Never"
    
    }
    
    function next(){

    let resultElement = document.getElementById("slideValue");

    let resultValue= resultElement.innerHTML

    let element = document.getElementById('questionNumber');

    let value = element.innerHTML;
    

        
    results[value-1]=resultValue
    
  
    
    
    
    ++value;
    
    document.getElementById('questionNumber').innerHTML = value
    
    document.getElementById('question').innerHTML = questions[value - 1]
    
    if (value == 18){
    
    document.querySelector('#next').classList.toggle('hidden')

    document.querySelector('#previous').classList.toggle('hidden')
    
    document.querySelector('#submit').style.display = 'block'
    
    }
    
    if (value == 2){
    
    element = document.querySelector("#previous")
    
    element.classList.remove("hidden");
    
    }
    
    
    
    document.getElementById('myRange').value = 1;
    
    document.getElementById("slideValue").innerText = "1"
    
    document.getElementById("labelValue").innerText=": Never"
    
    }

function submit(){
    document.querySelector('.results').style.display="unset"

    document.querySelector("#quiz").style.display="none"

    for(let i=0; i< 17; i++){
        limit(i+1, results[i])
    }

    for(i=0; i < symptoms.length; i++){

        if (i <3){
            var ul = document.getElementById("page1")
        }

        if (i>=3 && i < 6){
            var ul = document.getElementById("page2")
        }

        if (i>=6 && i < 9){
            var ul = document.getElementById("page3")
        }

        if (i>=9 && i < 12){
            var ul = document.getElementById("page4")
        }

        if (i>=12 && i < 15){
            var ul = document.getElementById("page5")
        }

        if (i>=15 && i < 18){
            var ul = document.getElementById("page6")
        }
        

        var li = document.createElement('li');
        let textNode= document.createTextNode(symptoms[i])

        li.appendChild(textNode)


        ul.appendChild(li);
    }
    


}

function limit(qNumber, testvalue){
    let temp;
    if (qNumber<=3 || qNumber == 12 || qNumber == 16 || qNumber == 18){
        if (testvalue >= 3) {
            temp = globalsymptoms.shift();
            symptoms.push(temp);
        }
        else{
            temp=globalsymptoms.shift();
            nonsymptoms.push(temp);
        }
    }

    else if(qNumber> 3 && qNumber <= 8 || qNumber == 10 || qNumber == 11 || qNumber >= 13 && qNumber <= 15 || qNumber == 17){
        if (testvalue >= 4){
            temp = globalsymptoms.shift();
            symptoms.push(temp)
        }
        else{
            temp = globalsymptoms.shift();
            nonsymptoms.push(temp)
        }
    }
}

function instructions(){
    document.getElementById('readInstructions').classList.toggle('hidden');
}

let questions = [". How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
". How often do you have difficulty getting things in order when you have to do a task that requires organization?",
". How often do you have problems remembering appointments or obligations?",
". When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
". How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
". How often do you feel overly active and compelled to do things, like you were driven by a motor?",". How often do you make careless mistakes when you have to work on a boring or difficult project?",
". How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
". How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
". How often do you misplace or have difficulty finding things at home or at work?",
". How often are you distracted by activity or noise around you?",
"How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
". How often do you feel restless or fidgety?",
". How often do you have difficulty unwinding and relaxing when you have time to yourself?",
". How often do you find yourself talking too much when you are in social situations?",
". When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
". How often do you have difficulty waiting your turn in situations when turn taking is required?",
". How often do you interrupt others when they are busy?",]

globalsymptoms=["Have trouble wrapping up the final details of a project, once the challenging parts have been done",
"Have difficulty getting things in order when you have to do a task that requires organization",
"Have problems remembering appointments or obligations",
"Have a task that requires a lot of thought, how often do you avoid or delay getting started",
"Fidget or squirm with your hands or feet when you have to sit down for a long time",
"Feel overly active and compelled to do things, like you were driven by a motor","Make careless mistakes when you have to work on a boring or difficult project",
"Have difficulty keeping your attention when you are doing boring or repetitive work",
"Have difficulty concentrating on what people say to you, even when they are speaking to you directly",
"Misplace or have difficulty finding things at home or at work",
"Distracted by activity or noise around you",
"Leave your seat in meetings or other situations in which you are expected to remain seated",
"Feel restless or fidgety",
"Have difficulty unwinding and relaxing when you have time to yourself",
"Talking too much when you are in social situations",
"Find yourself finishing the sentences of the people you are talking to, before they can finish them themselves",
"Have difficulty waiting your turn in situations when turn taking is required",
"Interrupt others when they are busy"]

$(document).ready(function($) 
			{ 
		
				$(document).on('click', '.btn_print', function(event) 
				{
					event.preventDefault();
		
					//credit : https://ekoopmans.github.io/html2pdf.js
					
					var element = document.querySelector('#symptomPDF'); 
		
					//easy
					//html2pdf().from(element).save();
		
					//custom file name
					//html2pdf().set({filename: 'code_with_mark_'+js.AutoCode()+'.pdf'}).from(element).save();
		
		
					//more custom settings
					var opt = 
					{
					  margin:       0.5,
					  filename:     'results.pdf',
					  image:        { type: 'jpeg', quality: 0.98 },
					  html2canvas:  { scale: 1 },
					  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
					};
		
					// New Promise-based usage:
					html2pdf().set(opt).from(element).save();
		
					 
				});
		
		 
		 
			});


            var opacity = 0;
            var intervalID = 0;
            window.onload = fadeIn;
                  
            function fadeIn() {
                setInterval(show, 200);
            }
                  
            function show() {
                var body = document.getElementById("intro");

                opacity = Number(window.getComputedStyle(body)
                .getPropertyValue("opacity"));

                    if (opacity < 1) {
                        opacity = opacity + 0.1;
                        body.style.opacity = opacity
                        } else {
                            clearInterval(intervalID);
                        }
                }
