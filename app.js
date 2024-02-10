const slides = document.getElementsByClassName('carousel-item');
        const dots = document.querySelectorAll('.dot');

        let currslide = 1;

        document.getElementById('prev').addEventListener('click',function(){
            // console.log("Hay i am prev");
            // console.log(currslide -= 1); // go to negetaive side and no end

            carousel(currslide -= 1);

        });

        document.getElementById('next').addEventListener('click',function(){
            // console.log("Hay i am next");
            // console.log(currslide += 1); // go to positive side and no end

            carousel(currslide += 1);
        });

        carousel(currslide);

        function carousel(slidenum){
            

            var x,y,q;

            //hide all slide 
            for(x = 0;x < slides.length;x++){
                // console.log(x);
                // console.log(slides[x]);
                slides[x].style.display = "none";
            }

            dots.forEach((dot)=>{
                // console.log(dot);
                dot.classList.remove('active');
            });

            if(slidenum > slides.length){
		        currslide = 1;
	        }else if(slidenum < 1){
		        currslide = slides.length;
	        }

            console.log(currslide);

            slides[currslide - 1].style.display = "block";
            dots[currslide - 1].classList.add('active');

        }

        dots.forEach((dot)=>{
                // console.log(dot);
                dot.addEventListener('click',function(){

                    currslide = this.getAttribute('data-bs-slide-to');

                    carousel(currslide);

                })
            });