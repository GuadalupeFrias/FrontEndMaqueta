

const contenido_acerca_de=document.getElementById("contenido_acerca_de");
$("#edicion_formulario").hide();
const edicionFormulario=document.getElementById("edicionFormulario");

document.getElementById("boton_eliminar").onclick = eliminar;
function eliminar() {
   contenido_acerca_de.remove()
  }

document.getElementById("boton_edicion").onclick = edicion;
function edicion() {
  document.getElementById("edicion_formulario").innerText = edicionFormulario;
  }



/*
$('#boton_edicion').click(function(){
    $('#myModal').modal(('show'))
});
$('#myModal').on('shown.bs.modal', function(){
    console.log("mostrando modal");
});
*/

var data = {
  "nombre": "Guadalupe",
  "apellido": " Frias",
  "backImage": "SRC/fondo1.png",
  "image": "src/trb.gif",
  "position": "Estudiante(Argentina Programa)",
     
  
   "comentario": 
   {
     "comentario": "Solo usuarios con Nivel de Autentificacion 2"
   },
  "usuario": 
    {
      "usuario": "guadalupe",
      "clave": "aquivamosotravez"
    },
  "company": {
    "name": "INTI",
    "img": "src/logo.png",
    "url": "#"
  },
  "school": {
    "name": "U.B.A",
    "img": "SRC/LOGO.PNG",
    "url": "#"
  },
  "proyect": {
      "name": "Proyecto #1",
      "descripcion": "Descripción",
       "url": "River En Madrid"

    },
    "habilidad": {
      "name": "JavaScript",
      "progress": 70,

    },


  "ubication": "Ciudad de Buenos Aires(Argentina)",
         
  "contenido_acerca_de": "   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
 

  "experience": [
      {
        
        "position": "ESTUDIANTE",
        "company": "INTI",
        "img": "SRC/TRB.GIF",
        "mode": "Jornada parcial",
        "start": "2021",
        "end": "actualidad",
        "timeElapsed": "1 años",
        "place":"Buenos Aires, Argentina"
      },
    {
    "position": "Empleada",
      "company": "I.C.B.C",
      "img": "SRC/TRB.GIF",
      "mode": "Jornada Completa",
      "start": "2008",
      "end": "actualidad",
      "timeElapsed": "12 años",
      "place":"Buenos Aires, Argentina"
    },
  ],
  "education": [
    {
      "school": "U.B.A",
      "title": "Licenciatura en Sociologia",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/INSTITUCIONAL.jpg/155px-INSTITUCIONAL.jpg",
      "career": "Ciclo de Grado",
      "score": 8.51,
      "start": "2012",
      "end": "2018"
    },
    {
      "school": "Argentina Programa I.N.T.I",
      "title": "Desarrolladora Web Full Stack",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/UBP_V_D_1-m.png/800px-UBP_V_D_1-m.png",
      "career": "Curso",
      "score": null,
      "start": "2021",
      "end": "2022"
    },
  ],
  "achivements": [
    {
      "proyect": "Proyecto #1",
      "mesInicio": "Diciembre",
      "añoInicio": "2021",
      "mesFin": "Diciembre",
      "añoFin": "2021",
      "url": "River En Madrid",
      "descripcion": "Descripción"
    },
    {
      "proyect": "Proyecto #2",
      "mesInicio": "Diciembre",
      "añoInicio": "2021",
      "mesFin": "Diciembre",
      "añoFin": "2021",
      "url": "River en lugares",
      "descripcion": "Descripción"
    },
  ],
  "aptitudes": [
    {
      "name": "JavaScript",
      "progress": 70,
      
    },
    {
      "name": "Angular",
      "progress": 70,
      
    },
    {
      "name": "Java",
      "progress": 60,
      
    },
    {
      "name": "MySQL",
      "progress": 80,
      
    },
    {
      "name": "Empatia y Escucha Atenta",
      "progress": 99,
      
    },
  ],
  "usuario": [
    {
      "usuario": "guadalupe",
      "clave": "aquivamosotravez"
    }
  ],
  
  "comentario": [
    {
      "comentario": "Solo usuarios con Nivel de Autentificacion 2"
    }
  ]
  


};
updateView();

function updateView() {
  $('#nombre')[0].innerText = data.nombre;
  $('#apellido')[0].innerText = data.apellido;
 
  //$('#info-company')[0].innerText = data.company.name;
  $('#ubication')[0].innerText = data.ubication;
  $('#contenido_acerca_de')[0].innerText = data.contenido_acerca_de;
  //$('#info-position')[0].innerText = data.position;
  //$('#expList').empty();
  //$('#eduList').empty();
  //$('#achList').empty();
  //$('#aptList').empty();
  //$('#comList').empty();
  //$('#logList').empty();
  //populateExp();
  //populateEducation();
  //populateAch();
  //populateApt();
  //populateCom()
 
}
/*
function populateExp() {
  document.getElementById('expList').innerHTML = data.experience.map(company => `
    <li>
      <div class="data-container">
        <a href="#">
          <div class="logo-image-container"><img id="exp-img" class="logo-image" src="${company.img}"></div>
          <div class="list-info">
            <div>
              <h2 id="exp-position">${company.position}</h2>
              <p><span id="exp-company">${company.company}</span>, <span id="exp-mode">${company.mode}</span></p>
              <p><span id="exp-initial">${company.start}</span> - <span id="exp-end">${company.end}</span>, <span id="exp-time">${company.timeElapsed}</span>,
             <span id="place"> ${company.place}</span></p>
            </div>
          </div>
        </a>
        </li>
      </div>
      <div class="data-control">
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditExpModal('${company.company}')"></i></a></div>
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteExp('${company.company}')"></i></a></div>
      </div>
    
    `).join('');
}

function populateEducation() {
  document.getElementById('eduList').innerHTML = data.education.map(school => `
  <li>
    <div class="data-container">
      <a href="#">
        <div class="logo-image-container"><img id="edu-img" class="logo-image" src="${school.img}"></div>
        <div class="list-info">
          <div>
            <h3 id="edu-school">${school.school}</h3>
            <p><span id="edu-title">${school.title}</span>, <span id="edu-career">${school.career}</span>, <span id="edu-score">${school.score}</span></p>
            <p><time id="edu-start">${school.start}</time> - <time id="edu-end">${school.end}</time></p>
          </div>
        </div>
      </a>
    </div>
    <div class="data-control">
      <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditEduModal('${school.school}')"></i></a></div>
      <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteEdu('${school.school}')"></i></a></div>
    </div>
  </li>
    `).join('');
}
function populateAch() {
  document.getElementById('achList').innerHTML = data.achivements.map(proyect => `
    <li>
      <div class="data-container">
        <a href="#">
        <div class="achivements">
       
       
          
          <div class="proyect-info">
            <div>
            
              <h2 id="ach-proyect">${proyect.proyect}</h2>
              <p><span id="ach-mesIncio">${proyect.mesInicio}</span> - <span id="ach-añoInicio">${proyect.añoInicio}</span> </span>-
              <span id="ach-mesFin">${proyect.mesFin} - <span id="acch-añoFin">${proyect.añoFin}</span></p><p> <span id="ach-url">${proyect.url}</span> 
             <span id="ach-descripcion"> ${proyect.descripcion}</span></p>
            </div>
        </div>
      <div class="data-control">
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditAchModal('${proyect.proyect}')"></i></a></div>
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteAch('${proyect.proyect}')"></i></a></div>
      </div>
    </li>
    `).join('');
}




function populateApt() {
 
  document.getElementById('aptList').innerHTML = data.aptitudes.map(habilidad => `
  
  <li>
      
  <div class="aptitude-info">
    <a href="#">
      <P></P>
      <div class="progress" style="height: 30px">
      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

  
      
      
      <p><span id="apt-name">${habilidad.name}</span> - <span id="apt-progress">${habilidad.progress}</span>  </p>
    
     
      
  </div>

<div class="data-control">
<div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditAptModal('${habilidad.name}')"></i></a></div>
<div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteApt('${habilidad.name}')"></i></a></div>
</div>
</li>
    `).join('');
}







function populateCom() {
 
  document.getElementById('comList').innerHTML = data.comentario.map(comentario => `
  <li>
  <div class="data-container">
   
      <div class="list-info">
        <div>
          <p id="comentario">${comentario.comentario}</p>
          
    </li>
  </div>

<div class="data-control">

<div class="btn-edit" disabled="false" ><a href="#" class="btn-right" ><i class="fa fa-trash" onclick="deleteCom('${comentario.comentario}')" ></i></a></div>
</div>
</li>
    `).join('');
} 
*/
function showEditProfileModal() {
  $('#inputName')[0].value = data.name;
  $('#inputPosition')[0].value = data.position;
  $('#inputCompany')[0].value = data.company.name;
  $('#inputUbication')[0].value = data.ubication;
  $('#editProfile').modal("toggle");
}
function showNewEduModal() {
  $('#newEdu').modal("toggle");
}

function showEditAboutModal() {
  $('#newCom').modal("toggle");
}

function showSalirModal() {
  $('#salir').modal("toggle");
}
   


function showEditExpModal(companyName) {
  var company = data.experience.filter(obj => obj.company === companyName)[0];
 
  $('#inputPositionExpEdit')[0].value = company.position;
  $('#inputCompanyExpEdit')[0].value = company.company;
  $('#inputImgExpEdit')[0].value = company.img;
  $('#inputModeExpEdit')[0].value = company.mode;
  $('#inputInitialExpEdit')[0].value = company.start;
  $('#inputEndExpEdit')[0].value = company.end;
  $('#inputTimeExpEdit')[0].value = company.timeElapsed;
  $('#inputPlaceExpEdit')[0].value = company.place;
  $('#editExp').modal("toggle");

}

function showNewExpModal() {
  $('#newExp').modal("toggle");
}

function deleteExp(companyName) {
  data.experience = data.experience.filter(obj => obj.company !== companyName);
  updateView();
}
function deleteCom(comentarioComentario) {
  data.comentario = data.comentario.filter(obj => obj.comentario !== comentarioComentario);
  updateView();
}
function showNewComModal(){
  $('#newCom').modal("toggle");
}
function saveNewComModal() {
  data.comentario.push({
    "comentario": $('#inputComentario')[0].value,
    
  });
  updateView();
  $('#newCom').modal("toggle");
}

function showEditEduModal(schoolName) {
  var school = data.education.filter(obj => obj.school === schoolName)[0];
  $('#inputSchoolEdit')[0].value = school.school;
  $('#inputTitleEdit')[0].value = school.title;
  $('#inputSchoolImageEdit')[0].value = school.img;
  $('#inputCareerEdit')[0].value = school.career;
  $('#inputScoreEdit')[0].value = school.score;
  $('#inputSchoolInitialEdit')[0].value = school.start;
  $('#inputSchoolEndEdit')[0].value = school.end;
  $('#editEdu').modal("toggle");
}

function deleteEdu(schoolName) {
  data.education = data.education.filter(obj => obj.school !== schoolName);
  updateView();
}

function showNewAptModal() {
  $('#newApt').modal("toggle");
}

function deleteAch(proyectName) {
  data.achivements = data.achivements.filter(obj => obj.proyect !== proyectName);
  updateView();
}
function showNewAchModal() {
  $('#newAch').modal("toggle");
}
function showEditAchModal(proyectName) {
  var proyect = data.achivements.filter(obj => obj.proyect === proyectName)[0];
  $('#inputProyectEdit')[0].value = proyect.proyect;
  $('#inputMesInicioEdit')[0].value = proyect.mesInicio;
  $('#inputMesFinEdit')[0].value = proyect.mesFin;
  $('#inputAñoInicioEdit')[0].value = proyect.añoInicio;
  $('#inputAñoFinEdit')[0].value = proyect.añoFin;
  $('#inputUrlEdit')[0].value = proyect.url;
  $('#inputDescripcionEdit')[0].value = proyect.descripcion;

  $('#editAch').modal("toggle");

}
function deleteApt(habilidadName) {
  data.aptitudes = data.aptitudes.filter(obj => obj.name !== habilidadName);
  updateView();
}
function showEditAptModal(habilidadName) {
  var habilidad = data.aptitudes.filter(obj => obj.name === habilidadName)[0];
  $('#inputNameEdit')[0].value = habilidad.name;
  $('#inputProgress')[0].value = habilidad.progress;
 
  $('#editApt').modal("toggle");

}

function saveEditProfileModal() {
  data.name = $('#inputName')[0].value;
  data.position = $('#inputPosition')[0].value;;
  data.company.name = $('#inputCompany')[0].value;
  data.ubication = $('#inputUbication')[0].value;
  updateView();
  $('#editProfile').modal("toggle");
}

function saveEditAboutModal() {
  data.about = $('#inputAbout')[0].value;
  updateView();
  $('#editAbout').modal("toggle");
}

function saveNewExpModal() {
  data.experience.push({
    "position": $('#inputPositionExp')[0].value,
    "company": $('#inputCompanyExp')[0].value,
    "img": $('#inputImgExp')[0].value,
    "mode": $('#inputModeExp')[0].value,
    "start": $('#inputInitialExp')[0].value,
    "end": $('#inputEndExp')[0].value,
    "timeElapsed": $('#inputTimeExp')[0].value,
    "place": $('#inputPlaceExp')[0].value
  });
  updateView();
  $('#newExp').modal("toggle");
}

function saveEditExpModal(companyName) {
  data.experience.forEach(company => {
    if (companyName === company.company) {
      console.log(company)
      company.position = $('#inputPositionExpEdit')[0].value;
      company.img = $('#inputImgExpEdit')[0].value;
      company.mode = $('#inputModeExpEdit')[0].value;
      company.start = $('#inputInitialExpEdit')[0].value;
      company.end = $('#inputEndExpEdit')[0].value;
      company.timeElapsed = $('#inputTimeExpEdit')[0].value;
      company.place = $('#inputPlaceExpEdit')[0].value
    }
  })
  updateView();
  $('#editExp').modal("toggle");
}

function saveNewEduModal() {
  data.education.push({
    "school": $('#inputSchool')[0].value,
    "title": $('#inputTitle')[0].value,
    "img": $('#inputSchoolImage')[0].value,
    "career": $('#inputCareer')[0].value,
    "score": $('#inputScore')[0].value,
    "start": $('#inputSchoolInitial')[0].value,
    "end": $('#inputSchoolEnd')[0].value
  });
  updateView();
  $('#newEdu').modal("toggle");

}

function saveEditEduModal(schoolName) {
  data.education.forEach(school => {
    if (schoolName === school.school) {
      console.log(school)
      school.title = $('#inputTitleEdit')[0].value;
      school.img = $('#inputSchoolImageEdit')[0].value;
      school.career = $('#inputCareerEdit')[0].value;
      school.score = $('#inputScoreEdit')[0].value;
      school.start = $('#inputSchoolInitialEdit')[0].value;
      school.end = $('#inputSchoolEndEdit')[0].value;
    }
  })
  updateView();
  $('#editEdu').modal("toggle");
}

function saveNewAptModal() {
  data.aptitudes.push({
    "name": $('#inputName')[0].value,
    "progress": $('#inputProgress')[0].value,
   
  });
  updateView();
  $('#newApt').modal("toggle");
}

function saveNewAchModal() {
  data.achivements.push({
    "proyect": $('#inputProyect')[0].value,
    "mesInicio": $('#inputMesInicio')[0].value,
    "mesFin": $('#inputMesFin')[0].value,
    "añoInicio": $('#inputAñoInicio')[0].value,
    "añoFin": $('#inputAñoFin')[0].value,
    "url": $('#inputUrl')[0].value,
    "descripcion": $('#inputDescripcion')[0].value
  });
  updateView();
  $('#newAch').modal("toggle");
}
function saveEditAchModal(proyectName) {
  data.achivements.forEach(proyect => {
    if (proyectName === proyect.proyect) {
      console.log(proyect)
      proyect.proyect=$('#inputProyectEdit')[0].value;
      proyect.mesInicio= $('#inputMesInicioEdit')[0].value;
      proyect.mesFin = $('#inputMesFinEdit')[0].value;
      proyect.añoInicio = $('#inputAñoInicioEdit')[0].value;
      proyect.añoFin = $('#inputAñoFinEdit')[0].value;
      proyect.url = $('#inputUrlEdit')[0].value;
      proyect.descripcion = $('#inputDescripcionEdit')[0].value;
    }
  })
  updateView();
  $('#editAch').modal("toggle");
}
function saveEditAptModal(habilidadName) {
  data.aptitudes.forEach(habilidad => {
    if (habilidadName === habilidad.name) {
      console.log(habilidad);
     habilidad.name= $('#inputNameEdit')[0].value;
      habilidad.progress = $('#inputProgress')[0].value;
      
      
    }
  })
  updateView();
  $('#editApt').modal("toggle");
}


function salirConf(){ 
  window.location="index.html";return;
}


