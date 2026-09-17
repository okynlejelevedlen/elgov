// I don't know any JS so I used ChatGPT :sob:

const nameDays = [
    // January
    { name: "Marija", month: "January", day:1},
    // Don't forget to add the January name days!
    { name: "Basíl", month: "January", day:2},
    { name: "", month: "January", day:3},
    { name: "", month: "January", day:4},
    { name: "", month: "January", day:5},
    { name: "", month: "January", day:6},
    { name: "", month: "January", day:7},
    { name: "", month: "January", day:8},
    { name: "", month: "January", day:9},
    { name: "", month: "January", day:10},
    { name: "", month: "January", day:11},
    { name: "", month: "January", day:12},
    { name: "", month: "January", day:13},
    { name: "", month: "January", day:14},
    { name: "", month: "January", day:15},
    { name: "", month: "January", day:16},
    { name: "", month: "January", day:17},
    { name: "", month: "January", day:18},
    { name: "", month: "January", day:19},
    { name: "", month: "January", day:20},
    { name: "", month: "January", day:21},
    { name: "", month: "January", day:22},
    { name: "", month: "January", day:23},
    { name: "Timöt", month: "January", day:24},
    { name: "Polus", month: "January", day:25},
    { name: "Sanofon", month: "January", day:26},
    { name: "Jovan Chisöstön", month: "January", day:27},
    { name: "Nolas", month: "January", day:28},
    { name: "Inhasö", month: "January", day:29},
    { name: "Martina", month: "January", day:30},
    { name: "Kirüs", month: "January", day:31},
    
    // February
    { name: "Brichida", month: "February", day:1},
    { name: "Anna", month: "February", day:2},
    { name: "Simi, Simiön", month: "February", day:3},
    { name: "Isídra, Sgalos", month: "February", day:4 },
    { name: "Agatha", month: "February", day:5 },
    { name: "Doratha", month: "February", day:6 },
    { name: "Romaltos", month: "February", day:7 },
    { name: "Zaharias", month: "February", day:8 },
    { name: "Apolonyja", month: "February", day:9 },
    { name: "Skolastyka", month: "February", day:10 },
    { name: "Lazarus", month: "February", day:11 },
    { name: "Meleci", month: "February", day:12 },
    { name: "Katarina", month: "February", day:13 },
    { name: "Valentin", month: "February", day:14 },
    { name: "Favstin, Jovyta", month: "February", day:15 },
    { name: "Onasymo", month: "February", day:16 },
    { name: "Teadör", month: "February", day:17 },
    { name: "Simiön Biskop", month: "February", day:18 },
    { name: "Arggyntos", month: "February", day:19 },
    { name: "Evses", month: "February", day:20 },
    { name: "Severin", month: "February", day:21 },
    { name: "Margreta", month: "February", day:22 },
    { name: "Polykarp", month: "February", day:23 },
    { name: "Mathijas", month: "February", day:24},
    { name: "Tarasis", month: "February", day:25},
    { name: "Nestar", month: "February", day:26},
    { name: "Frethrekes", month: "February", day:27},
    { name: "Roman", month: "February", day:28},
    { name: "Basil", month: "February", day:29},
]

function loadNameDay() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("en-US", { month: "long" });

  const saintSpan = document.querySelector(".name-day");
  if (!saintSpan) return;

  const match = nameDays.find(entry =>
    entry.month === month && entry.day === day
  );

  saintSpan.textContent = match ? match.name : "None Available";
}

document.addEventListener("DOMContentLoaded", loadNameDay);