const tecnologias = [
    "HTML5", "CSS3", "JavaScript", "Kotlin", "Firebase",  "SQL" , "Python"
  ];
  
  const techList = document.getElementById("tech-list");
  
  tecnologias.forEach(tecnologia => {
    const li = document.createElement("li");
    li.textContent = tecnologia;
    techList.appendChild(li);
  });
  