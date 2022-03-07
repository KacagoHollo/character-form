const formTitle = (title) => {
    return `
        <h2>
            ${title}
        </h2>
    `;
}

const inputCharacteristic = (type, id, label) => {
    return `
        <div>
            <label for="${id}">${label}</label>
            <input type="${type}" id="${id}">
        </div>
    `;
}

const selectAttributes = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `
        <option>${option}</option>
        `;
    }
    return `
        <div>
            <label>${label}</label>
            <${type} name="${name}" id="${name}">
                ${optionElements}
            </${type}>
        </div>
    `;
}

const rpgForm = `
<form id="form">
    ${formTitle("Choose your character")}
    ${inputCharacteristic("text", "name", "Say your name!")}
    ${selectAttributes("select", "gender", "Choose your gender!", ["", "Male", "Female"])}
    ${selectAttributes("select", "race", "Choose your race!", ["", "Dark Elf", "Draconian", "Dwarf", "Frostling", "High Elf", "Necromancer"])}
    ${selectAttributes("select", "class", "Choose your class!", ["", "Arch Druid", "Archer", "Knight", "Rogue", "Runemage", "Sorcerer","Warlock"])}
    <button>Save</button>
</form>
`;

const genderCH = (event) => {
    document.querySelector("#inputContent").innerHTML = event.target.value;
}

const genderImg = (event) => {
    let genderChoose = event.target.value;
    let divGen = document.querySelector("#divGen");

    if (genderChoose === "Male") {
        divGen.innerHTML = `
        <img src="sources/male.png" class="gender man">
        `;
    }
    else if (genderChoose === "Female") {
        divGen.innerHTML = `
        <img src="sources/female.png" class="gender woman">
        `;
    }

}
const raceCh = (event) => {
    document.querySelector("#inputContentR").innerHTML = event.target.value;
}

const raceImg = (event) => {
    let raceChoose = event.target.value;
    let divRace = document.querySelector("#divRace");

    switch(raceChoose) {
        case "Dark Elf":
            divRace.innerHTML = `
            <img src="sources/darkelf.png" class="race">
            `;
            break;
        case "Draconian":
            divRace.innerHTML = `
            <img src="sources/draconian.png" class="race">
            `;
            break;
        case "Dwarf":
            divRace.innerHTML = `
            <img src="sources/dwarf.png" class="race">
            `;
            break;
        case "Frostling":
            divRace.innerHTML = `
            <img src="sources/frostling.webp" class="race">
            `;
            break;
        case "High Elf":
            divRace.innerHTML = `
            <img src="sources/highelf.png" class="race">
            `;
            break;
        case "Necromancer":
            divRace.innerHTML = `
            <img src="sources/necromancer.png" class="race">
            `;
            break;
    }
}

const classImg = (event) => {
    let classChoose = event.target.value;
    let divClass = document.querySelector("#divClass");

    switch(classChoose) {
        case "Arch Druid":
            divClass.innerHTML = `
            <img src="sources/archdruid.png" class="class">
            `;
            break;
        case "Archer":
            divClass.innerHTML = `
            <img src="sources/archer.webp" class="class">
            `;
            break;
        case "Knight":
            divClass.innerHTML = `
            <img src="sources/knight.png" class="class">
            `;
            break;
        case "Rogue":
            divClass.innerHTML = `
            <img src="sources/rogue.png" class="class">
            `;
            break;
        case "Runemage":
            divClass.innerHTML = `
            <img src="sources/runemage.png" class="class">
            `;
            break;
        case "Sorcerer":
            divClass.innerHTML = `
            <img src="sources/sorcerer.png" class="class">
            `;
            break;
        case "Warlock":
            divClass.innerHTML = `
            <img src="sources/warlock.png" class="class">
            `;
            break;
    }
}

const classCh = (event) => {
    document.querySelector("#inputContentC").innerHTML = event.target.value;
}

const nameCh = (event) => {
    document.querySelector("#inputContentN").innerHTML = event.target.value;
}

const submitForm = () => {

            document.querySelector("body").insertAdjacentHTML("beforebegin", `<div id="loading"><h1>Loading...</h1>
            </div>
           
            `);
}

function loadEvent() {
    const root = document.querySelector('#root');
    root.insertAdjacentHTML("beforeend", rpgForm);
    root.insertAdjacentHTML("beforeend", `
    <p class="gender">Your gender is:</p>
    <div id="inputContent"></div>
    <div id="divGen"></div>
    <p class="race">Your race is:</p>
    <div id="inputContentR"></div>
    <div id="divRace"></div>
    <p class="class">Your class is:</p>
    <div id="inputContentC"></div>
    <div id="divClass"></div>
    <div id="inputContentN"></div>
   
    `);


    const nameSelect = document.getElementById("name");
    nameSelect.addEventListener("input", nameCh);

    const genderSelect = document.getElementById("gender");
    genderSelect.addEventListener("input", genderCH);
    genderSelect.addEventListener("input", genderImg);


    const raceSelect = document.getElementById("race");
    raceSelect.addEventListener("input", raceCh);
    raceSelect.addEventListener("input", raceImg);

    const classSelect = document.getElementById("class");
    classSelect.addEventListener("input", classCh);
    classSelect.addEventListener("input", classImg);

    const saveButton = document.querySelector("button").form;
    saveButton.addEventListener("submit", () => submitForm());
}


window.addEventListener("load", loadEvent);