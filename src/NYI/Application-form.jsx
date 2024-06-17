import React from "react";

const questions = [
  "Do you wanna join us as Social member or as a Raider?",
  "What level of raiding are you interested in?",
  "Do you have recent mythic experience (last two raid tier)?",
  "What is your main role?",
  "Please, choose what tanks you can play.",
  "Please, choose what healers you can play.",
  "Please, choose what DPS you can play.",
  "Having functional microphone is mandatory. Do you have it?",
  "Usage of said microphone.",
  "What do you expect from our guild?",
  "Do you have anything else you would like to add into your application?",
  "Lastly, please, provide us with a contact informations.",
  "How did you find us?",
  "Our guild is open to everyone, as long as you are following the rules of our guild. Please, read the rules and choose your answer.",
  "Normal and Heroic runs serves as a gearing instrument first 2-3 weeks of the raid tier. There is 99% chance, that you would not get any loot for first few weeks, because mythic raiders are being prioritised. Are you fine with this?",
  "What are your past mythic experience?",
];

function loadQuestion(index) {
  const currentQuestion = questions[index];
  const questionContainer = document.getElementById("js-question-container");
  questionContainer.innerHTML = `
    <div class="question">
      <p>${currentQuestion}</p>
    </div>
    <div class="response">
      ${generateAnswerButtons(index)}
    </div>
  `;
}

function generateAnswerButtons(index) {
  switch (index) {
    case 0:
      return `
        <button onclick="LoadQuestion(12)">Social</button>
        <button onclick="LoadQuestion(1)">Raider</button>
      `;
    case 1:
      return `
        <button onclick="LoadQuestion(14)">Normal/Heroic</button>
        <button onclick="LoadQuestion(2)">Mythic</button>
      `;
    case 2:
      return `
        <button onclick="LoadQuestion(3)">Yes</button>
        <button onclick="LoadQuestion(13)">No</button>
      `;
    case 3:
      return `
        <button onclick="LoadQuestion(4)">Tank</button>
        <button onclick="LoadQuestion(5)">Healer</button>
        <button onclick="LoadQuestion(6)">DPS</button>
        <button onclick="LoadQuestion(7)">Flex</button>
      `;

    case 4:
      return `
        <form onsubmit="event.preventDefault();">
          <input type="checkbox" id="protwar" name="protwar" value="protwar">
            <label for="protwar"> Protection warrior</label><br>
          <input type="checkbox" id="protpal" name="protpal" value="protpal">
            <label for="protpal"> Protection paladin</label><br>
          <input type="checkbox" id="vengeance" name="vengeance" value="vengeance">
            <label for="vengeance"> Vengeance demon hunter</label><br>
          <input type="checkbox" id="brew" name="brew" value="brew">
            <label for="brew"> Brewmaster monk</label><br>
          <input type="checkbox" id="bdk" name="bdk" value="bdk">
            <label for="bdk"> Blood death knight</label><br>
          <input type="checkbox" id="gdudu" name="gdudu" value="gdudu">
            <label for="gdudu"> Guardian druid</label><br>
          <input class="continue" type="submit" value="Continue" onclick="LoadQuestion(7)">
        </form>
      `;

    case 5:
      return `
        <form onsubmit="event.preventDefault();">
          <input type="checkbox" id="holypriest" name="holypriest" value="holypriest">
            <label for="holypriest"> Holy priest</label><br>
          <input type="checkbox" id="disciplinepriest" name="disciplinepriest" value="disciplinepriest">
            <label for="disciplinepriest"> Discipline priest</label><br>
          <input type="checkbox" id="holypaladin" name="holypaladin" value="holypaladin">
            <label for="holypaladin"> Holy paladin</label><br>
          <input type="checkbox" id="prevoker" name="prevoker" value="prevoker">
            <label for="prevoker"> Preservation evoker</label><br>
          <input type="checkbox" id="mwmonk" name="mwmonk" value="mwmonk">
            <label for="mwmonk"> Mistweaver monk</label><br>
          <input type="checkbox" id="rdudu" name="rdudu" value="rdudu">
            <label for="rdudu"> Restoration druid</label><br>
          <input type="checkbox" id="rshaman" name="rshaman" value="rshaman">
            <label for="rshaman"> Restoration shaman</label><br>
          <input class="continue" type="submit" value="Continue" onclick="LoadQuestion(7)">
        </form>
      `;

    case 6:
      return `
        <form onsubmit="event.preventDefault();">
          <input type="checkbox" id="frostdk" name="frostdk" value="frostdk">
            <label for="frostdk"> Frost Death Knight</label><br>
          <input type="checkbox" id="unholy" name="unholy" value="unholy">
            <label for="unholy"> Unholy Death Knight</label><br>
          <input type="checkbox" id="arcane" name="arcane" value="arcane">
            <label for="arcane"> Arcane mage</label><br>
          <input type="checkbox" id="fire" name="fire" value="fire">
            <label for="fire"> Fire Mage</label><br>
          <input type="checkbox" id="frost" name="frost" value="frost">
            <label for="frost"> Frost Mage</label><br>
          <input type="checkbox" id="assa" name="assa" value="assa">
            <label for="assa"> Assassination Rogue</label><br>
          <input type="checkbox" id="outlaw" name="outlaw" value="outlaw">
            <label for="outlaw"> Outlaw Rogue</label><br>
          <input type="checkbox" id="sub" name="sub" value="sub">
            <label for="sub"> Subtlety Rogue</label><br>
          <input type="checkbox" id="havoc" name="havoc" value="havoc">
            <label for="havoc"> Havoc demon hunter</label><br>
          <input type="checkbox" id="wwmonk" name="wwmonk" value="wwmonk">
            <label for="wwmonk"> Windwalker Monk</label><br>
          <input type="checkbox" id="ele" name="ele" value="ele">
            <label for="ele"> Elemental Shaman</label><br>
          <input type="checkbox" id="enh" name="enh" value="enh">
            <label for="enh"> Enhancement Shaman</label><br>
          <input type="checkbox" id="balance" name="balance" value="balance">
            <label for="balance"> Balance Druid</label><br>
          <input type="checkbox" id="feral" name="feral" value="feral">
            <label for="feral"> Feral Druid</label><br>
          <input type="checkbox" id="retri" name="retri" value="retri">
            <label for="retri"> Retribution Paladin</label><br>
          <input type="checkbox" id="affli" name="affli" value="affli">
            <label for="affli"> Affliction Warlock</label><br>
          <input type="checkbox" id="demo" name="demo" value="demo">
            <label for="demo"> Demonology Warlock</label><br>
          <input type="checkbox" id="destro" name="destro" value="destro">
            <label for="destro"> Destruction Warlock</label><br>
          <input type="checkbox" id="deva" name="deva" value="deva">
            <label for="deva"> Devastation Evoker</label><br>
          <input type="checkbox" id="aug" name="aug" value="aug">
            <label for="aug"> Augmentation Evoker</label><br>
          <input type="checkbox" id="shadow" name="shadow" value="shadow">
            <label for="shadow"> Shadow Priest</label><br>
          <input type="checkbox" id="arms" name="arms" value="arms">
            <label for="arms"> Arms Warrior</label><br>
          <input type="checkbox" id="Fury" name="Fury" value="Fury">
            <label for="Fury"> Fury Warrior</label><br>
          <input type="checkbox" id="bm" name="bm" value="bm">
            <label for="bm"> Beast Mastery Hunter</label><br>
          <input type="checkbox" id="marks" name="marks" value="marks">
            <label for="marks"> Marksmanship Hunter</label><br>
          <input type="checkbox" id="surv" name="surv" value="surv">
            <label for="surv"> Survival Hunter</label><br>
          <input class="continue" type="submit" value="Continue" onclick="LoadQuestion(7)">
        </form>
      `;

    case 7:
      return `
        <button onclick="LoadQuestion(8)">Yes</button>
        <button onclick="showAlertAndLoadNextQuestion()">No</button>
      `;

    case 8:
      return `
        <form onsubmit="event.preventDefault();">
          <input type="checkbox" id="talkative" name="talkative" value="talkative">
            <label for="talkative"> I am talkative, but if the rules require me to be quiet, I will be quiet.</label><br>
          <input type="checkbox" id="lesstalkative" name="lesstalkative" value="lesstalkative">
            <label for="lesstalkative"> I am talkative in smaller group content. In the raid, I usually type in chat.</label><br>
          <input type="checkbox" id="quiet" name="quiet" value="quiet">
            <label for="quiet"> I prefer not to talk.</label><br> 
          <input class="continue" type="submit" value="Continue" onclick="LoadQuestion(9)">
        </form>
      `;

    case 9:
      return `
        <form onsubmit="event.preventDefault();">
          <textarea class="type-answer" placeholder="Type your answer."name="message" rows="5" cols="80"></textarea><br><br>
            <input class="continue" type="submit" value="Continue" onclick="LoadQuestion(10)">
        </form>
      `;

    case 10:
      return `
        <form onsubmit="event.preventDefault();">
          <textarea class="type-answer" placeholder="Type your answer." name="message" rows="5" cols="80"></textarea><br><br>
            <input class="continue" value="Continue" type="submit" onclick="LoadQuestion(13)">
        </form>
      `;

    case 11:
      return `
        <form onsubmit="event.preventDefault();">
          <input class="answer2" placeholder="type your discord tag" type="text" id="discord" name="discord"><br>
            <p class="or">OR</p>
          <input class="answer2" placeholder="type your battlenet tag" type="text" id="battlenet" name="battlenet"><br><br>
          <input class="continue" type="submit" value="Finish">
      `;

    case 12:
      return `
        <form onsubmit="event.preventDefault();">
          <input type="checkbox" id="WCL" name="WCL" value="WCL">
            <label for="WCL"> warcraftlogs.com</label><br>
          <input type="checkbox" id="GoW" name="GoW" value="GoW">
            <label for="GoW"> Guild of WoW</label><br>
          <input type="checkbox" id="MMOCH" name="MMOCH" value="MMOCH">
            <label for="MMOCH"> MMO Champion</label><br>
          <input type="checkbox" id="RAIDERIO" name="RAIDERIO" value="RAIDERIO">
            <label for="RAIDERIO"> Raider.IO</label><br>
          <input type="checkbox" id="WOWFORUM" name="WOWFORUM" value="WOWFORUM">
            <label for="WOWFORUM"> WoW Forums</label><br>
          <input type="checkbox" id="WOWPROG" name="WOWPROG" value="WOWPROG">
            <label for="WOWPROG"> WoW Progress</label><br>
          <input type="checkbox" id="RC" name="RC" value="RC">
            <label for="RC"> Recruitment Community [EU]</label><br>
          <input class="continue" type="submit" value="Continue" onclick="LoadQuestion(13)">
        </form>
      `;

    case 13:
      return `
        <ul>
          <li>Stay polite. We're all grown ups.</li>
          <li>Don't rage at your teammates! - You're just playing a game.</li>
          <li>No politics or religion. This isn't the place for ANY of that!</li>
          <li>Fluent English is mandatory.</li>
          <li>We do NOT tolerate any form of Cheating. Cheaters will be banned instantly.</li>
          <li>Do not advertise other Discord Servers.</li>
          <li>Its allowed to self-promote yourself and your streams on the Server, as long as you also promote the Server on your Stream.</li>
          <li>Other than that, have fun!</li>
        </ul>
        <button onclick="LoadQuestion(11)">I accept the rules.</button>
        <button onclick="showAlert1()">I do not accept these rules.</button>
      `;

    case 14:
      return `
        <button onclick="LoadQuestion(13)">It is fine, I will get atleast full vault.</button>
        <button onclick="LoadQuestion(13)">I will join raids, once there is a chance of me getting loot.</button>
        <button onclick="showAlert1()">I do not accept this setup.</button>
      `;

    default:
      return `<button onclick="LoadQuestion(${index + 1})">Continue</button>`;
  }
}

function showAlert1() {
  alert(
    "We are afraid that our guild is not a place for you. Good luck in your future adventures!",
  );
}

function showAlertAndLoadNextQuestion() {
  alert(
    "Quick communication is a key factor in mythic progression. While you will be ordering your new microphone, you can join us as a Social. Otherwise, there is not reason for you to apply into mythic team.",
  );
  // Assuming you have a function named loadNextQuestion to load the next question
  loadNextQuestion();
}

function loadNextQuestion() {
  loadQuestion(13);
}

// Initial loading
loadQuestion(0);
