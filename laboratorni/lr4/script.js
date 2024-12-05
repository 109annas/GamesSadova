
  let birthday = new Date('January 9, ' + (new Date().getFullYear()) + ' 00:00:00');
  if (birthday < new Date()) {
      birthday.setFullYear(birthday.getFullYear() + 1);
  }

  function happpyyy() {
      let today = new Date();
      let difference = birthday - today;

      let days = Math.floor(difference / (1000 * 3600 * 24));
      let hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
      let minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("congratulations").innerHTML = 
         "всього лише "+ days + " днів, " + hours + " годин, " + minutes + " хвилин, " + seconds + " секунд.";
      setTimeout(happpyyy, 1000);
  }

  happpyyy();