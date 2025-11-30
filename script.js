// Data for countries
const countries = {
  usa: {
    name: "United States",
    flag: "https://flagcdn.com/w320/us.png",
    description: "The United States is a large and diverse country in North America. It is known for its global influence in technology, entertainment, science, and politics. The landscapes vary from deserts and mountains to big modern cities like New York and Los Angeles. The US is home to many cultures, making it one of the most multicultural countries in the world."
  },

  uk: {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w320/gb.png",
    description: "The United Kingdom includes England, Scotland, Wales, and Northern Ireland. It has a long history, a constitutional monarchy, and famous landmarks such as Big Ben and Stonehenge. The UK influenced global culture through literature, music, and science."
  },

  france: {
    name: "France",
    flag: "https://flagcdn.com/w320/fr.png",
    description: "France is known for its art, fashion, architecture, and cuisine. Paris, the capital, is one of the most visited cities in the world. The country has historic castles, museums, beautiful villages, and a strong cultural identity."
  },

  germany: {
    name: "Germany",
    flag: "https://flagcdn.com/w320/de.png",
    description: "Germany is one of Europe’s strongest economies and is known for engineering, cars, science, and classical music. The country has historic cities, forests, and castles. German culture values efficiency, education, and innovation."
  },

  italy: {
    name: "Italy",
    flag: "https://flagcdn.com/w320/it.png",
    description: "Italy is famous for ancient Roman ruins, Renaissance art, and delicious cuisine. Cities like Rome, Venice, and Florence attract millions of visitors. Italy has a rich cultural heritage and a long history in science, art, and architecture."
  },

  japan: {
    name: "Japan",
    flag: "https://flagcdn.com/w320/jp.png",
    description: "Japan is an island country known for its unique blend of tradition and modern technology. It has temples, cherry blossoms, high-speed trains, and futuristic cities. Japanese culture includes anime, tea ceremonies, martial arts, and centuries-old customs."
  },

  canada: {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    description: "Canada is a peaceful and multicultural country known for its huge natural landscapes, forests, lakes, and wildlife. It has friendly people, safe cities, and excellent quality of life. The country has both English and French as official languages."
  },

  australia: {
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
    description: "Australia is a large island continent with unique animals like kangaroos and koalas. It is known for beaches, deserts, coral reefs, and relaxed lifestyle. Major cities include Sydney, Melbourne, and Brisbane."
  },

  brazil: {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
    description: "Brazil is the largest country in South America, famous for the Amazon rainforest, Carnival festival, and football. It has diverse cultures, music styles, and natural landmarks like Iguazu Falls."
  },

  india: {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
    description: "India is a colorful and diverse country with ancient traditions, many languages, and rich culture. It is known for its festivals, spices, historic buildings, and fast-growing technology sector. India has one of the largest populations in the world."
  },

  srilanka: {
    name: "Sri Lanka",
    flag: "https://flagcdn.com/w320/lk.png",
    description: "Sri Lanka is a tropical island in the Indian Ocean. It is known for tea plantations, beautiful beaches, wildlife, and ancient temples. The country has a long history and cultural traditions, including festivals and colorful arts."
  },

  russia: {
    name: "Russia",
    flag: "https://flagcdn.com/w320/ru.png",
    description: "Russia is the largest country on Earth, stretching across Eastern Europe and Asia. It has a varied climate, vast natural resources, and rich cultural history. Russia is known for literature, classical music, and scientific achievements."
  },

  china: {
    name: "China",
    flag: "https://flagcdn.com/w320/cn.png",
    description: "China is one of the world’s oldest civilizations and most populated countries. Its landmarks include the Great Wall, Forbidden City, and famous rivers. China has a fast-growing economy and plays an important role in global development."
  },

  spain: {
    name: "Spain",
    flag: "https://flagcdn.com/w320/es.png",
    description: "Spain is known for sunny weather, beaches, colorful festivals, historic architecture, and vibrant culture. It has famous regions like Catalonia and Andalusia and cities such as Madrid and Barcelona."
  },

  egypt: {
    name: "Egypt",
    flag: "https://flagcdn.com/w320/eg.png",
    description: "Egypt is the land of pyramids, pharaohs, and the Nile River. It has one of the oldest civilizations in the world. Modern Egypt combines ancient traditions with growing urban cities like Cairo and Alexandria."
  },

  mexico: {
    name: "Mexico",
    flag: "https://flagcdn.com/w320/mx.png",
    description: "Mexico is known for ancient civilizations like the Maya and Aztecs, colorful festivals, and diverse landscapes. It has deserts, beaches, mountains, and tasty cuisine enjoyed worldwide."
  },

  argentina: {
    name: "Argentina",
    flag: "https://flagcdn.com/w320/ar.png",
    description: "Argentina is known for tango music, football, and the Patagonia region. It has varied landscapes, from glaciers to grasslands, and strong European cultural influences."
  },

  southkorea: {
    name: "South Korea",
    flag: "https://flagcdn.com/w320/kr.png",
    description: "South Korea is a modern and technologically advanced country. It is known for K-pop, electronics, entertainment, and historic palaces. Its rapid economic growth transformed it into a global powerhouse."
  },

  northkorea: {
    name: "North Korea",
    flag: "https://flagcdn.com/w320/kp.png",
    description: "North Korea is an isolated country in East Asia. It has a strict political system and limited contact with the outside world. Most information about the country is controlled by the government."
  },

  thailand: {
    name: "Thailand",
    flag: "https://flagcdn.com/w320/th.png",
    description: "Thailand is known for beautiful islands, golden temples, friendly people, and vibrant street markets. It has a warm climate, rich traditions, and popular tourist destinations."
  },

  indonesia: {
    name: "Indonesia",
    flag: "https://flagcdn.com/w320/id.png",
    description: "Indonesia is the largest island country in the world, made up of thousands of islands. It has volcanoes, rainforests, and popular tourist spots like Bali and Jakarta."
  },

  philippines: {
    name: "Philippines",
    flag: "https://flagcdn.com/w320/ph.png",
    description: "The Philippines is an archipelago of over 7,000 islands known for tropical beaches, friendly people, and diverse wildlife. It has Spanish and Asian cultural influences."
  },

  vietnam: {
    name: "Vietnam",
    flag: "https://flagcdn.com/w320/vn.png",
    description: "Vietnam is known for beautiful landscapes, rice fields, historic cities, and delicious cuisine. It has a long history and a fast-growing economy."
  },

  pakistan: {
    name: "Pakistan",
    flag: "https://flagcdn.com/w320/pk.png",
    description: "Pakistan has diverse landscapes including mountains, deserts, and beaches. It has ancient sites like Mohenjo-daro and rich cultural traditions in music, poetry, and textiles."
  },

  bangladesh: {
    name: "Bangladesh",
    flag: "https://flagcdn.com/w320/bd.png",
    description: "Bangladesh is a river-filled country with rich culture, fast-growing cities, and beautiful nature. It has a strong textile industry and vibrant traditions."
  },

  nepal: {
    name: "Nepal",
    flag: "https://flagcdn.com/w320/np.png",
    description: "Nepal is home to Mount Everest and the Himalayan mountains. It is a peaceful country known for trekking, temples, and spiritual traditions."
  },

  turkey: {
    name: "Turkey",
    flag: "https://flagcdn.com/w320/tr.png",
    description: "Turkey connects Europe and Asia and has a unique mix of cultures. It has historic sites, beautiful mosques, and modern cities like Istanbul."
  },

  saudi: {
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w320/sa.png",
    description: "Saudi Arabia is the center of the Islamic world, home to Mecca and Medina. It has vast deserts, oil resources, and rapidly modernizing cities."
  },

  uae: {
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/w320/ae.png",
    description: "The UAE is known for futuristic skyscrapers, luxury tourism, and modern architecture. Dubai and Abu Dhabi are global business hubs."
  },

  qatar: {
    name: "Qatar",
    flag: "https://flagcdn.com/w320/qa.png",
    description: "Qatar is a wealthy Gulf nation known for modern buildings, international sports events, and rapid development."
  },

  israel: {
    name: "Israel",
    flag: "https://flagcdn.com/w320/il.png",
    description: "Israel has a long history and is important to many religions. It is also known for technological innovations and historic sites."
  },

  iran: {
    name: "Iran",
    flag: "https://flagcdn.com/w320/ir.png",
    description: "Iran has ancient Persian history, poetry, traditional architecture, and beautiful landscapes. It has one of the world’s oldest cultures."
  },

  iraq: {
    name: "Iraq",
    flag: "https://flagcdn.com/w320/iq.png",
    description: "Iraq is the historic land of Mesopotamia, where some of the earliest civilizations began. It has ancient cities and important archaeological sites."
  },

  southafrica: {
    name: "South Africa",
    flag: "https://flagcdn.com/w320/za.png",
    description: "South Africa has diverse wildlife, national parks, and beautiful landscapes. It is culturally rich and known for its history, including Nelson Mandela."
  },

  nigeria: {
    name: "Nigeria",
    flag: "https://flagcdn.com/w320/ng.png",
    description: "Nigeria is Africa’s most populated country with rich cultures, music, and languages. It has growing cities and strong traditions."
  },

  kenya: {
    name: "Kenya",
    flag: "https://flagcdn.com/w320/ke.png",
    description: "Kenya is world-famous for safaris, wildlife, and national parks. It has friendly people, mountains, and beautiful savannas."
  },

  morocco: {
    name: "Morocco",
    flag: "https://flagcdn.com/w320/ma.png",
    description: "Morocco has deserts, mountains, ancient markets, and colorful cities like Marrakech. Its culture mixes Arab, African, and European influences."
  },

  algeria: {
    name: "Algeria",
    flag: "https://flagcdn.com/w320/dz.png",
    description: "Algeria is a large North African country with Mediterranean beaches, deserts, and ancient ruins. Most of the country is covered by the Sahara."
  },

  sweden: {
    name: "Sweden",
    flag: "https://flagcdn.com/w320/se.png",
    description: "Sweden is known for innovation, clean cities, forests, and modern design. It has high quality of life and beautiful nature."
  },

  norway: {
    name: "Norway",
    flag: "https://flagcdn.com/w320/no.png",
    description: "Norway is known for fjords, northern lights, and snowy mountains. It is one of the safest and most developed countries in the world."
  },

  finland: {
    name: "Finland",
    flag: "https://flagcdn.com/w320/fi.png",
    description: "Finland is famous for education, saunas, and thousands of lakes. It is peaceful, clean, and ranks high in happiness."
  },

  denmark: {
    name: "Denmark",
    flag: "https://flagcdn.com/w320/dk.png",
    description: "Denmark is a Scandinavian country known for bicycles, design, historic cities, and high quality of life."
  },

  poland: {
    name: "Poland",
    flag: "https://flagcdn.com/w320/pl.png",
    description: "Poland has a rich history, medieval towns, and modern cities. It is known for culture, food, and beautiful nature."
  },

  czech: {
    name: "Czech Republic",
    flag: "https://flagcdn.com/w320/cz.png",
    description: "The Czech Republic has castles, forests, and the beautiful city of Prague with its historic architecture."
  },

  switzerland: {
    name: "Switzerland",
    flag: "https://flagcdn.com/w320/ch.png",
    description: "Switzerland is known for the Alps, chocolate, watches, and peaceful neutrality. It has stunning mountain landscapes."
  },

  austria: {
    name: "Austria",
    flag: "https://flagcdn.com/w320/at.png",
    description: "Austria is famous for classical music, the Alps, and beautiful historic cities like Vienna and Salzburg."
  },

  netherlands: {
    name: "Netherlands",
    flag: "https://flagcdn.com/w320/nl.png",
    description: "The Netherlands has canals, tulip fields, windmills, and bicycles everywhere. Amsterdam is its most famous city."
  },

  belgium: {
    name: "Belgium",
    flag: "https://flagcdn.com/w320/be.png",
    description: "Belgium is known for chocolate, waffles, medieval towns, and being the home of EU institutions."
  },

  portugal: {
    name: "Portugal",
    flag: "https://flagcdn.com/w320/pt.png",
    description: "Portugal has beaches, historic cities, and beautiful coastal landscapes. It is known for its explorers and maritime history."
  },

  greece: {
    name: "Greece",
    flag: "https://flagcdn.com/w320/gr.png",
    description: "Greece is the birthplace of democracy and ancient philosophy. It has beautiful islands, blue seas, and historical ruins."
  },

  cyprus: {
    name: "Cyprus",
    flag: "https://flagcdn.com/w320/cy.png",
    description: "Cyprus is a Mediterranean island with warm beaches, ancient sites, and a mix of Greek and Middle Eastern cultures."
  },

  newzealand: {
    name: "New Zealand",
    flag: "https://flagcdn.com/w320/nz.png",
    description: "New Zealand is known for its stunning landscapes, mountains, and Maori culture. It is peaceful, clean, and a popular place for nature lovers."
  },

  singapore: {
    name: "Singapore",
    flag: "https://flagcdn.com/w320/sg.png",
    description: "Singapore is a modern city-state with futuristic architecture, cleanliness, and strong economy. It is a global financial hub."
  },

  malaysia: {
    name: "Malaysia",
    flag: "https://flagcdn.com/w320/my.png",
    description: "Malaysia has rainforests, tropical islands, and diverse cultures including Malay, Chinese, and Indian influences."
  },

  chile: {
    name: "Chile",
    flag: "https://flagcdn.com/w320/cl.png",
    description: "Chile is a long country with deserts in the north and the Patagonia region in the south. It has mountains, lakes, and rich history."
  },

  colombia: {
    name: "Colombia",
    flag: "https://flagcdn.com/w320/co.png",
    description: "Colombia is known for coffee, mountains, and colorful culture. It has warm Caribbean beaches and beautiful Andean scenery."
  },

  peru: {
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png",
    description: "Peru is home to Machu Picchu and ancient Inca civilization. It has mountains, jungles, deserts, and rich cultural traditions."
  }
};


// On index page
if (document.getElementById("country-list")) {
  const container = document.getElementById("country-list");

  Object.keys(countries).forEach(code => {
    const c = countries[code];
    const card = document.createElement("div");
    card.className = "country-card";
    card.dataset.country = code;
    card.innerHTML = `
      <img src="${c.flag}" alt="${c.name} flag">
      <h3>${c.name}</h3>
    `;
    container.appendChild(card);
  });

  container.addEventListener("click", e => {
    const card = e.target.closest(".country-card");
    if (card) {
      const code = card.dataset.country;
      window.open(`country.html?country=${code}`, "_blank");
    }
  });
}

// On country page
if (window.location.pathname.includes("country.html")) {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("country");
  const country = countries[code];

  if (country) {
    document.getElementById("country-name").textContent = country.name;
    document.getElementById("country-flag").src = country.flag;
    document.getElementById("country-description").textContent = country.description;
  } else {
    document.getElementById("country-name").textContent = "Country not found";
  }
}

