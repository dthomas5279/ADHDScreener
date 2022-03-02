var pdf,page_section,HTML_Width,HTML_Height,top_left_margin,PDF_Width,PDF_Height,canvas_image_width,canvas_image_height;

function generatePDF() {
        pdf = "";
		$("#downloadbtn").hide();
		$("#genmsg").show();

        symptomNumber=symptoms.length

            if (symptomNumber>0 && symptomNumber<5){
            page1()
            
            }

            if (symptomNumber>=5 && symptomNumber<10){
                page2()
            }
            if (symptomNumber>=10 && symptomNumber<15){
                page3()
            }

            if (symptomNumber>=15 && symptomNumber<=18){
            page4()
            }

        }


    function calculatePDF_height_width(selector,index){
		page_section = screen.height
		HTML_Width = page_section.offsetWidth;
		HTML_Height = page_section.offsetHeight
		top_left_margin = 1;
		PDF_Width = HTML_Width + (top_left_margin * 2);
		PDF_Height = (PDF_Width * 1.2) + (top_left_margin * 2);
		canvas_image_width = HTML_Width;
		canvas_image_height = HTML_Height;
	}

    // function test(n){
    //     console.log(n)
    //     console.log(symptoms.length-1)

    //     if (n==(symptoms.length-1)){
    //             pdf.save("results.pdf")
                       
    //     }

    //     else {
    //         console.log('return')
    //         return;
    //     }

    // }

    function page1(){
        html2canvas($(".listResults:eq(0)")[0], { allowTaint: true }).then(function(canvas) {

            calculatePDF_height_width(".listResults",0);
            var imgData = canvas.toDataURL("image/png", 1.0);
			pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

            console.log(i)
             pdf.save("results.pdf");

        });

    }

    function page2(){

        html2canvas($(".listResults:eq(0)")[0], { allowTaint: true }).then(function(canvas) {

            calculatePDF_height_width(".listResults",0);
            var imgData = canvas.toDataURL("image/png", 1.0);
			pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

            

        });

        html2canvas($(".listResults:eq(1)")[0], { allowTaint: true }).then(function(canvas) {

            var imgData = canvas.toDataURL("image/png", 1.0);
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

            console.log(i)
             pdf.save("results.pdf");
    });
}

    function page3(){

        html2canvas($(".listResults:eq(0)")[0], { allowTaint: true }).then(function(canvas) {

            calculatePDF_height_width(".listResults",0);
            var imgData = canvas.toDataURL("image/png", 1.0);
			pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);


        });

        html2canvas($(".listResults:eq(1)")[0], { allowTaint: true }).then(function(canvas) {

            var imgData = canvas.toDataURL("image/png", 1.0);
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);
        });

            html2canvas($(".listResults:eq(2)")[0], { allowTaint: true }).then(function(canvas) {

                var imgData = canvas.toDataURL("image/png", 1.0);
                pdf.addPage();
                pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);
    
                console.log(i)
                 pdf.save("results.pdf");
            });


    }

    function page4 (){

        html2canvas($(".listResults:eq(0)")[0], { allowTaint: true }).then(function(canvas) {

            calculatePDF_height_width(".listResults",0);
            var imgData = canvas.toDataURL("image/png", 1.0);
			pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);


        });

        html2canvas($(".listResults:eq(1)")[0], { allowTaint: true }).then(function(canvas) {

            var imgData = canvas.toDataURL("image/png", 1.0);
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);
        });

            html2canvas($(".listResults:eq(2)")[0], { allowTaint: true }).then(function(canvas) {

                var imgData = canvas.toDataURL("image/png", 1.0);
                pdf.addPage();
                pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);});

    

    html2canvas($(".listResults:eq(3)")[0], { allowTaint: true }).then(function(canvas) {

        var imgData = canvas.toDataURL("image/png", 1.0);
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

        console.log(i)  
         pdf.save("results.pdf");
    });
}