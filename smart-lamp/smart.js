const btnArduino = document.querySelector(".btn-arduino");
const btnServo = document.querySelector(".btn-servo");
const btnSensorGerak = document.querySelector(".btn-sensorGerak");
const btnDht11 = document.querySelector(".btn-dht11");
const btnRelay = document.querySelector(".btn-relay");
const btnLampuAC = document.querySelector(".btn-lampuAC");
const btnBread = document.querySelector(".btn-bread");
const btnKabel = document.querySelector(".btn-kabel");
const btnSolenoid = document.querySelector(".btn-solenoid");
const deskripsi = document.querySelector(".modal-body");
const title = document.querySelector(".modal-title");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const gmbr = document.querySelector(".gmbr");
const ctPembuatan = document.querySelector(".ct-pembuatan");
const ctxtPembuatan = document.querySelector(".ctxt-pembuatan");
const syntax = document.querySelector(".syntax");

btnArduino.addEventListener("click", () => {
    title.innerHTML = descArduino[0]
    deskripsi.innerHTML = descArduino[1];
});

btnServo.addEventListener("click", () => {
    title.innerHTML = descServo[0]
    deskripsi.innerHTML = descServo[1];
});

btnSensorGerak.addEventListener("click", () => {
    title.innerHTML = descSensorGerak[0]
    deskripsi.innerHTML = descSensorGerak[1];
});

btnDht11.addEventListener("click", () => {
    title.innerHTML = descDHT11[0]
    deskripsi.innerHTML = descDHT11[1];
});

btnRelay.addEventListener("click", () => {
    title.innerHTML = descRelay[0]
    deskripsi.innerHTML = descRelay[1];
});

btnLampuAC.addEventListener("click", () => {
    title.innerHTML = descLampuAC[0]
    deskripsi.innerHTML = descLampuAC[1];
});

btnBread.addEventListener("click", () => {
    title.innerHTML = descBread[0]
    deskripsi.innerHTML = descBread[1];
});

btnKabel.addEventListener("click", () => {
    title.innerHTML = descKabel[0]
    deskripsi.innerHTML = descKabel[1];
});

btnSolenoid.addEventListener("click", () => {
    title.innerHTML = descSolenoid[0]
    deskripsi.innerHTML = descSolenoid[1];
});

window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.querySelector(".link-produk").classList.remove("active");
    document.querySelector(".link-komponen").classList.add("active");
    document.querySelector(".link-pembuatan").classList.remove("active");
    document.querySelector(".link-penggunaan").classList.remove("active");
    document.querySelector(".link-tentang").classList.remove("active");
  } 
  else if (document.body.scrollTop = 0 || document.documentElement.scrollTop == 0) {
    document.querySelector(".link-produk").classList.add("active");
    document.querySelector(".link-komponen").classList.remove("active");
    document.querySelector(".link-pembuatan").classList.remove("active");
    document.querySelector(".link-penggunaan").classList.remove("active");
    document.querySelector(".link-tentang").classList.remove("active");
  } 
  if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
    document.querySelector(".link-produk").classList.remove("active");
    document.querySelector(".link-komponen").classList.remove("active");
    document.querySelector(".link-pembuatan").classList.add("active");
    document.querySelector(".link-penggunaan").classList.remove("active");
    document.querySelector(".link-tentang").classList.remove("active");
  }
  if (document.body.scrollTop > 10500 || document.documentElement.scrollTop > 10500) {
    document.querySelector(".link-produk").classList.remove("active");
    document.querySelector(".link-komponen").classList.remove("active");
    document.querySelector(".link-pembuatan").classList.remove("active");
    document.querySelector(".link-penggunaan").classList.add("active");
    document.querySelector(".link-tentang").classList.remove("active");
  }
  if (document.body.scrollTop > 13500 || document.documentElement.scrollTop > 13500) {
    document.querySelector(".link-produk").classList.remove("active");
    document.querySelector(".link-komponen").classList.remove("active");
    document.querySelector(".link-pembuatan").classList.remove("active");
    document.querySelector(".link-penggunaan").classList.remove("active");
    document.querySelector(".link-tentang").classList.add("active");
  }
}

function prev() {
    if(ctPembuatan.innerHTML == rServo[1]) {
        gmbr.src = rPir[0];
        ctPembuatan.innerHTML = rPir[1];
        ctxtPembuatan.innerHTML = rPir[2];
    } else if(ctPembuatan.innerHTML == rDHT[1]) {
        gmbr.src = rServo[0];
        ctPembuatan.innerHTML = rServo[1];
        ctxtPembuatan.innerHTML = rServo[2];
    } else if(ctPembuatan.innerHTML == rSolenoid[1]) {
        gmbr.src = rDHT[0];
        ctPembuatan.innerHTML = rDHT[1];
        ctxtPembuatan.innerHTML = rDHT[2];
    } else if(ctPembuatan.innerHTML == rLampu[1]) {
        gmbr.src = rSolenoid[0];
        ctPembuatan.innerHTML = rSolenoid[1];
        ctxtPembuatan.innerHTML = rSolenoid[2];
    } else if(ctPembuatan.innerHTML == comp[1]) {
        gmbr.src = rLampu[0];
        ctPembuatan.innerHTML = rLampu[1];
        ctxtPembuatan.innerHTML = rLampu[2];
    }
}

function next() {
    if(ctPembuatan.innerHTML == rPir[1]) {
        gmbr.src = rServo[0];
        ctPembuatan.innerHTML = rServo[1];
        ctxtPembuatan.innerHTML = rServo[2];
    } else if(ctPembuatan.innerHTML == rServo[1]) {
        gmbr.src = rDHT[0];
        ctPembuatan.innerHTML = rDHT[1];
        ctxtPembuatan.innerHTML = rDHT[2];
    } else if(ctPembuatan.innerHTML == rDHT[1]) {
        gmbr.src = rSolenoid[0];
        ctPembuatan.innerHTML = rSolenoid[1];
        ctxtPembuatan.innerHTML = rSolenoid[2];
    } else if(ctPembuatan.innerHTML == rSolenoid[1]) {
        gmbr.src = rLampu[0];
        ctPembuatan.innerHTML = rLampu[1];
        ctxtPembuatan.innerHTML = rLampu[2];
    } else if(ctPembuatan.innerHTML == rLampu[1]) {
        gmbr.src = comp[0];
        ctPembuatan.innerHTML = comp[1];
        ctxtPembuatan.innerHTML = comp[2];
    }
}

btnPrev.addEventListener("click", () => {
    prev();
});

btnNext.addEventListener("click", () => {
    next();
});

function copy() {  
    navigator.clipboard.writeText(code);
  }

  var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}




