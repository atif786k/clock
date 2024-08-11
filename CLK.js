        let sec = document.getElementById("sec");
        let min = document.getElementById("min");
        let hr = document.getElementById("hr");
        
        setInterval(() =>{
            let d = new Date();
            hrtime = d.getHours();
            mintime = d.getMinutes();
            sectime = d.getSeconds();
            
            hrROT = (30*hrtime) + (mintime/2);
            minROT = 6 * mintime;
            secROT = 6 * sectime;

            hr.style.transform = `rotate(${hrROT}deg)`; 
            min.style.transform = `rotate(${minROT}deg)`; 
            sec.style.transform = `rotate(${secROT}deg)`; 
        }, 1000);


        //Digital Clock--->

        let hour = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");
        let day = document.getElementById("day");
        let month = document.getElementById("month");
        let date = document.getElementById("date");
        let year = document.getElementById("year");
        

        setInterval(() =>{
            let time = new Date();
            hour.innerText = time.getHours();
            minutes.innerText = time.getMinutes();
            seconds.innerText = time.getSeconds();
        

        } , 1000);
