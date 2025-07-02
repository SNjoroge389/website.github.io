// JS Basics Examples
function showArray() {
  const arr = ["JS", "HTML", "CSS"];
  document.getElementById("output").textContent = "Array: " + arr.join(" | ");
}

function showLoop() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += `Number ${i}<br>`;
  }
  document.getElementById("output").innerHTML = output;
}

function checkCondition() {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  document.getElementById("output").textContent = message;
}

// Clock Widget
const clockDiv = document.getElementById("clock");
const timezoneSelect = document.getElementById("timezone");

function updateTime() {
  const tz = timezoneSelect.value || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();

  const options = {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedTime = now.toLocaleString("en-US", options);
  clockDiv.textContent = `📍 ${tz}\n🕒 ${formattedTime}`;
}

setInterval(updateTime, 1000);

// Populate time zone dropdown
const timezones = Intl.supportedValuesOf('timeZone');
timezones.forEach(tz => {
  const option = document.createElement('option');
  option.value = tz;
  option.textContent = tz;
  timezoneSelect.appendChild(option);
});

// Load saved timezone
const savedTZ = localStorage.getItem('timezone');
if (savedTZ) {
  timezoneSelect.value = savedTZ;
}
timezoneSelect.addEventListener('change', () => {
  localStorage.setItem('timezone', timezoneSelect.value);
  updateTime();
});

// Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
  document.body.classList.add("dark-mode");
  modeToggle.checked = true;
}

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  }
});

// Theme Picker
const themeSelect = document.getElementById("theme-select");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeSelect.value = savedTheme;
}

themeSelect.addEventListener("change", () => {
  document.body.classList.remove("default", "ocean", "sunset");
  document.body.classList.add(themeSelect.value);
  localStorage.setItem("theme", themeSelect.value);
});
