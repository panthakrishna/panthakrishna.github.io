
function showHome() {
    /*to send data of Contact to google script*/
    //document.getElementById("contact_form").method = "POST";
    //document.getElementById("contact_form").class = "pure-form pure-form-stacked";
    //document.getElementById("contact_form").action = "https://script.google.com/macros/s/AKfycbwjugdQTkMNr2Ajbrh7T4cAet1vZj9Uf0iEyiLFOA/exec";
    
    /*buttons content resolve*/
    var homekeywordscontainer = document.getElementById("homekeywordscontainer");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var experience = document.getElementById("experience");
    var contact = document.getElementById("contact");
    var awards = document.getElementById("awards");

    aboutme.style.display = "none"
    projects.style.display = "none"
    experience.style.display = "none"
    contact.style.display = "none"
    awards.style.display = "none"

    /*Refresh form after the button is clicked*/
    document.getElementById('gform').reset();
}

function showAboutme() {
    var homekeywordscontainer = document.getElementById("homekeywordscontainer");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var experience = document.getElementById("experience");
    var contact = document.getElementById("contact");
    var awards = document.getElementById("awards");

    homekeywordscontainer.style.display = "none"
    aboutme.style.display = "block"
    projects.style.display = "none"
    experience.style.display = "none"
    contact.style.display = "none"
    awards.style.display = "none"

    /*Refresh form after the button is clicked*/
    document.getElementById('gform').reset();
}

function showProjects() {
    var homekeywordscontainer = document.getElementById("homekeywordscontainer");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var experience = document.getElementById("experience");
    var contact = document.getElementById("contact");
    var awards = document.getElementById("awards");

    homekeywordscontainer.style.display = "none"
    aboutme.style.display = "none"
    projects.style.display = "block"
    experience.style.display = "none"
    contact.style.display = "none"
    awards.style.display = "none"

    /*Refresh form after the button is clicked*/
    document.getElementById('gform').reset();
}

function showExperience() {
    var homekeywordscontainer = document.getElementById("homekeywordscontainer");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var experience = document.getElementById("experience");
    var contact = document.getElementById("contact");
    var awards = document.getElementById("awards");

    homekeywordscontainer.style.display = "none"
    aboutme.style.display = "none"
    projects.style.display = "none"
    experience.style.display = "block"
    contact.style.display = "none"
    awards.style.display = "none"

    /*Refresh form after the button is clicked*/
    document.getElementById('gform').reset();
}

function showContact() {
    var homekeywordscontainer = document.getElementById("homekeywordscontainer");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var experience = document.getElementById("experience");
    var contact = document.getElementById("contact");
    var awards = document.getElementById("awards");

    homekeywordscontainer.style.display = "none"
    aboutme.style.display = "none"
    projects.style.display = "none"
    experience.style.display = "none"
    contact.style.display = "block"
    awards.style.display = "none"

    /*Refresh form after the button is clicked*/
    document.getElementById('gform').reset();
}

function showAwards() {
    var homekeywordscontainer = document.getElementById("homekeywordscontainer");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var experience = document.getElementById("experience");
    var contact = document.getElementById("contact");
    var awards = document.getElementById("awards");
    
    homekeywordscontainer.style.display = "none"
    aboutme.style.display = "none"
    projects.style.display = "none"
    experience.style.display = "none"
    contact.style.display = "none"
    awards.style.display = "block"

    /*Refresh form after the button is clicked*/
    document.getElementById('gform').reset();
}