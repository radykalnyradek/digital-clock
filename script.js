const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("ampm");

function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h -= 12;
    amPm.innerText = "PM";
  }

  if (h < 10) {
    prefixH = "0" + h.toString();
  } else {
    prefixH = m;
  }

  if (m < 10) {
    prefixM = "0" + m.toString();
  } else {
    prefixM = m;
  }

  if (s < 10) {
    prefixS = "0" + s.toString();
  } else {
    prefixS = s;
  }

  hours.innerText = prefixH;
  minutes.innerText = prefixM;
  seconds.innerText = prefixS;

  setTimeout(() => {
    clock();
  }, 1000);
}

clock();
