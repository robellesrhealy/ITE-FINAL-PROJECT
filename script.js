// DARK/LIGHT MODE toggle
function toggleMode() {
 document.body.classList.toggle("dark-mode");
}
// SCROLL TO GENRE
function scrollToGenre(genre) {
  const cards = document.querySelectorAll(".story-card");

  cards.forEach(card => {
    if (genre === "all") {
      card.style.display = "block"; // lahat kita
    } else {
      if (card.getAttribute("data-genre").toLowerCase() === genre.toLowerCase()) {
        card.style.display = "block"; // ipakita kung match
      } else {
        card.style.display = "none"; // itago kung hindi match
      }
    }
  });
}

// STORIES DATA (10 Romance + sample Sci-Fi + Horror)
const stories = [  
 {
  title: "Love in Paris",
  genre: "Romance",
  image: "love in paris.JPG",
  author: "Camille Durand",
  synopsis: "Isabelle, a young writer searching for inspiration, finds herself in the heart of Paris — a city of lights, dreams, and fleeting encounters. One ordinary morning in a café, destiny brings her face‑to‑face with a stranger whose presence feels like a story waiting to be written. As their paths intertwine, Isabelle discovers that love can arrive unexpectedly, turning everyday moments into chapters of magic.",
  chapter1: `Chapter 1: The Café
The aroma of freshly brewed coffee filled the air as Isabelle sat by the window of a small Parisian café. She opened her worn notebook, hoping to capture the beauty of the morning in words. The streets outside bustled with life — bicycles weaving through traffic, vendors calling out their wares, and the distant sound of an accordion playing a familiar tune.

Just then, the café door opened, and a stranger walked in. He was tall, with kind eyes that seemed to carry a thousand stories. Isabelle looked up, and their gazes met. For a moment, the bustling city outside faded away, leaving only the quiet connection between two souls.

The stranger ordered a coffee and, by chance, sat at the table across from her. Isabelle tried to focus on her notebook, but her pen refused to move. She felt as though Paris itself had paused, waiting for her to write the next line.

  Paris had always been magical, but today it felt different — as if destiny had walked through the door.`},


 { title: "Whisper of the Heart",
  genre: "Romance", 
  image: "whisper.JPG",
  author: "Amélie Laurent",
 synopsis: "Elena, a quiet artist living in a coastal town, spends her days painting sunsets and listening to the rhythm of the waves. Though her life seems serene, her heart carries an unspoken longing — a desire for connection beyond the canvas. When she meets Adrian, a traveler with stories etched in his eyes, she begins to realize that love often arrives not with grand gestures, but in the gentle whispers of shared silence. Their journey becomes a tender exploration of trust, vulnerability, and the courage to embrace love when it finally calls.",
 chapter1: `Chapter 1: The Encounter
 The sea breeze brushed against Elena’s face as she stood on the shoreline, sketchbook in hand. The horizon glowed with hues of orange and pink, each wave carrying a melody that seemed to echo her thoughts. She had always found comfort in the ocean — its endless expanse mirrored the emotions she could never fully put into words.

She sat on a weathered bench, pencil poised, when a shadow fell across her page. Looking up, she saw a man standing nearby, gazing at the same horizon. His presence was calm, yet it stirred something inside her.

Adrian turned slightly, offering a gentle smile. “Beautiful evening,” he said, his voice blending with the sound of the waves.

Elena nodded, unsure why her heart skipped at such a simple phrase. She returned her gaze to the sea, but her hand trembled as she tried to capture the moment on paper. For the first time, the ocean felt different — as if it carried not just her solitude, but the possibility of a story waiting to unfold. `},

 { title: "Sunset Promises", 
  genre: "Romance", 
  image: "sunset.JPG",
  author: "Sofia Delgado",
 synopsis: "In a quiet countryside town, Amelia often watched the sun dip below the horizon, painting the sky with colors that mirrored her dreams. She believed sunsets carried promises — of hope, of love, of new beginnings. When Daniel, a returning traveler burdened by past regrets, arrives in town, their paths cross beneath the fading light. Together, they learn that promises made at sunset can guide hearts toward healing and a future worth embracing..",
 chapter1: `Chapter 1: The Horizon
 The golden light of dusk spilled across the fields as Amelia stood by the wooden fence, her gaze fixed on the horizon. Every evening, she found herself here, waiting for the sun to whisper its silent vow that tomorrow would be brighter.

She clutched her journal, its pages filled with sketches of skies and words she never dared to share. Tonight felt different — the air carried a quiet anticipation.

A figure appeared on the dirt road, walking slowly as though each step carried the weight of memory. Amelia’s heart stirred when she recognized Daniel, the boy who had left years ago and returned a man changed by distance.

Their eyes met, and for a moment, the world seemed to pause. The sunset wrapped them in its glow, as if sealing a promise neither had spoken yet.`},


 { title: "Letters Unsent", 
  genre: "Romance", 
  image: "unsent.JPG",
  author: "Clara Montague",
 synopsis: "Claire, a librarian with a love for forgotten stories, has spent years writing letters she never dared to send. Each one holds fragments of her heart — confessions, dreams, and silent goodbyes. When she meets Ethan, a journalist searching for truth, her hidden words begin to surface. Together, they discover that sometimes the letters we keep locked away are the ones that can change our lives forever.",
  chapter1: `Chapter 1: The Hidden Drawer
  The library was quiet, its shelves standing like guardians of countless tales. Claire moved through the aisles with practiced ease, her fingers brushing against spines worn by time. She loved this silence, yet it often reminded her of the letters tucked away in her desk — words she had written but never spoken aloud.

That evening, as the golden light filtered through tall windows, she opened the drawer and pulled out one envelope. The handwriting was hers, delicate and hesitant. She read the first line, and her heart ached with memories she had tried to bury.

A sudden voice startled her. “You look like you’ve found a secret,” Ethan said, standing at the doorway with a curious smile.

Claire quickly closed the envelope, her cheeks warm. “Just old papers,” she replied, though her voice betrayed the weight of truth.

For the first time, she wondered if the letters she had hidden were waiting not to be forgotten, but to be discovered.`},


 { title: "The Silent Promise",
   genre: "Romance", 
   image: "silent.JPG",
   author: "Adrian Lee",
 synopsis: "Under the vast canopy of stars, two souls discover that love does not always need words. Daniel and Clara, childhood friends turned kindred spirits, share a bond that deepens in silence. Their promise, unspoken yet powerful, becomes the thread that ties their hearts together. As life challenges them with distance and uncertainty, they learn that the quiet strength of love can endure even when words fail.",
 chapter1: `Chapter 1: Under the Stars
  The night sky shimmered with countless stars, each one a tiny beacon of light scattered across the heavens. Daniel lay on the grass, his hands folded behind his head, while Clara sat beside him, her gaze fixed on the constellations.

Neither spoke. The silence was not empty but full — filled with trust, comfort, and the quiet rhythm of their breathing. Clara reached out, her fingers brushing Daniel’s hand. He turned his palm upward, and their hands met in a gentle clasp.

No promises were spoken aloud, yet both felt it — a vow carried by the stars themselves. Clara looked at Daniel, and in his eyes she saw certainty. Tonight, beneath the endless sky, they understood that love could be stronger than words, and silence could hold the deepest promise of all.`},


 { title: "Broken Melody", 
  genre: "Romance", 
  image: "melody.JPG",
  author:" Isabelle Hart",
 synopsis: "Music was always Lily’s refuge, a place where she could hide her emotions behind the notes of her violin. `But after a painful heartbreak, even her melodies felt fractured, echoing the silence of her soul. When she meets Marcus, a pianist with scars of his own, their music begins to intertwine — fragile yet healing. Together, they discover that broken melodies can still create harmony, and love can be found in the spaces between the notes.",
 chapter1: `Chapter 1: The Violin’s Cry 
 The concert hall was empty, save for Lily standing alone on stage. She lifted her violin, bow trembling in her hand, and played a single note. It rang out, sharp and aching, filling the silence with her sorrow.

She closed her eyes, remembering the promises that had once inspired her music. Now, each note felt heavy, burdened by memories she wished she could forget.

From the back of the hall, a faint sound interrupted her solitude — the soft chords of a piano. Lily turned, startled, to see Marcus seated at the instrument, his fingers moving gently across the keys.

Their music met in the air, hesitant at first, then slowly weaving together. Lily felt her heart stir, as if the violin itself whispered: You are not alone.`},


 { title: "Tears of the Moon", 
  genre: "Romance", 
  image: "tears.JPG",
  author: "Marianne Velasco",
 synopsis: "Celeste had always believed the moon carried secrets — a silent witness to love, loss, and longing. Living in a mountain village where the night sky shone brightest, she often whispered her dreams to the moon, hoping it would listen. When Rafael, a poet escaping the noise of the city, arrives in her town, their paths cross under the silver glow. Together, they discover that even the moon’s tears can light the way toward healing and love.",
 chapter1: `Chapter 1: The Silver Glow
 The night was quiet, save for the rustle of leaves and the distant hum of crickets. Celeste stood on the balcony of her small home, gazing at the full moon. Its light spilled across the valley, painting everything in shades of silver.

She held a notebook close, its pages filled with words she never shared. Tonight, her heart felt heavier than usual, and she whispered softly, “If only the moon could carry my tears away.”

A sudden voice startled her. “Beautiful, isn’t it?” Rafael said, standing at the edge of the path below. His eyes reflected the same glow, and his tone carried a gentleness that made her pause.

Celeste smiled faintly, unsure why her heart trembled. The moon above seemed to shine brighter, as if it had heard her secret and answered with a promise.`},


 { title: "Stolen Glances",
   genre: "Romance", 
   image: "stolen.JPG",
   author: "Elena Cruz",
 synopsis: "In the crowded streets of Manila, love often hides in fleeting moments. Maya, a university student balancing studies and family responsibilities, never believed in love at first sight. But when she keeps crossing paths with Adrian — a law student whose quiet charm lingers in every glance — she begins to wonder if destiny can be found in the simplest encounters. Their story unfolds through stolen glances, unspoken words, and the courage to turn fleeting moments into lasting love.",
 chapter1: `Chapter 1: The Crosswalk
 The afternoon sun cast long shadows across the busy avenue. Maya clutched her books tightly as she waited at the crosswalk, the noise of jeepneys and vendors filling the air. She was lost in thought when she felt it — a gaze resting on her.

She turned slightly and saw him: Adrian, standing just a few steps away, his eyes meeting hers for the briefest moment. It was nothing more than a glance, yet it carried a weight she couldn’t explain.

The light turned green, and the crowd surged forward. Maya walked quickly, trying to shake off the strange flutter in her chest. But halfway across, she looked back — and there he was, still watching, his expression calm yet curious.

It was only a glance, stolen in the rush of the city, but it left her wondering if love sometimes begins in silence.`},


 { title: "Autumn Embrace", 
  genre: "Romance", 
  image: "autumn.JPG",
  author: "Charlotte Hayes",
 synopsis: "Autumn has always been a season of change — leaves falling, winds shifting, and hearts learning to let go. For Emily, a teacher in a small town, autumn feels like a reminder of endings. But when she meets Nathan, a photographer chasing the fleeting beauty of the season, she begins to see autumn not as a farewell, but as an embrace. Their story unfolds among golden leaves, quiet walks, and the warmth of love found in the chill of October.",
 chapter1: `Chapter 1: The Falling Leaves 
 The crisp air carried the scent of fallen leaves as Emily walked down the tree‑lined path. The world around her glowed in shades of amber and gold, each leaf drifting gently to the ground like a whispered goodbye.

She paused, adjusting the scarf around her neck, and watched as a man crouched nearby with a camera. Nathan was focused on capturing the way sunlight filtered through the branches, his expression calm yet intent.

Emily smiled faintly, curious about the stranger who seemed to see beauty in every detail. As she passed, Nathan looked up, their eyes meeting for a brief moment.

It was only a glance, but it felt like autumn itself had reached out — not to remind her of endings, but to offer an embrace she hadn’t expected.`},


 { title: "Midnight Serenade",
   genre: "Romance", 
   image: "midnight.JPG",
   author: "Gabriel Sinclair",
 synopsis: "Sofia, a pianist who finds solace in music, often plays under the moonlight when the world is asleep. Her midnight serenades are not for an audience, but for herself — a way to heal the wounds of the past. One evening, her music drifts through the quiet streets and reaches Julian, a writer struggling with his own silence. Drawn by the melody, he follows the sound and discovers that sometimes love begins not with words, but with a song carried through the night.",
 chapter1: `Chapter 1: The Midnight Song 
 The city was hushed, its streets bathed in silver light. Sofia sat at the piano by her open window, fingers gliding across the keys. Each note rose into the night, soft yet powerful, weaving a melody that seemed to speak of longing and hope.

She closed her eyes, letting the music carry her away. For her, midnight was not loneliness — it was freedom, a time when her heart could sing without fear.

Down the street, Julian paused mid‑step, captivated by the sound. He had been wandering aimlessly, searching for words that refused to come. But the music stopped him, pulling him closer with every chord.

He looked up and saw her silhouette framed by the glow of the moon. For a moment, he felt as though the night itself had written a story — one that began with a serenade and a chance encounter.`},

 // Sample Sci-Fi
 { title: "Galactic Voyage", 
  genre: "Sci-fi", 
  image: "voyage.PNG",
  author: "Damien Cross",
 synopsis: "Captain Aris leads a crew beyond the Andromeda corridor, tasked with charting unknown space. What begins as a mission of discovery soon becomes a journey into destiny, as strange signals and cosmic anomalies hint at a force waiting beyond the stars.",
 chapter1: `Chapter 1: Departure
 The hangar buzzed with activity as engineers checked the final systems of the Odyssey. Aris stood at the helm, his reflection caught in the polished steel of the ship. Earth was shrinking behind them, a blue jewel fading into memory. The crew exchanged nervous glances, each aware that the charts ahead were blank. As the engines roared to life, Aris felt a strange pull — not from gravity, but from something unseen. Somewhere beyond the stars, something was waiting, and the mission was no longer just exploration. It was fate.`},

{ title: "Chronicles of Titan", 
  genre: "Sci-fi", 
  image: "titan.PNG",
  author: "Selene Ward",
 synopsis: "On Saturn’s moon Titan, humanity’s first colony thrives under domes of glass. But when a series of mysterious tremors threaten the settlement, young geologist Kael uncovers secrets buried deep beneath the icy crust — secrets that could change the future of human expansion.",
 chapter1: `Chapter 1: The Tremor
 Kael pressed his palm against the frozen ground, feeling the faint vibration ripple through Titan’s surface. The colony lights glowed behind him, casting long shadows across the alien landscape. He scribbled notes into his datapad, but the readings made no sense. Titan wasn’t supposed to move. As the tremor grew stronger, alarms blared across the settlement. Kael’s heart raced — this wasn’t a natural quake. Something beneath the ice was stirring, and it was alive.`},

 { title: "Neon Skies", 
  genre: "Sci-Fi", 
  author: "Riko Tanaka",
  image: "neon.PNG",
 synopsis: "In a cyberpunk megacity where corporations rule, hacker Lira discovers a hidden AI buried in the neon networks. Together, they must fight against a system designed to enslave minds, uncovering truths that could ignite a revolution.",
 chapter1: `Chapter 1: The Arrival 
 Rain slicked streets reflected neon signs as Lira slipped into the underground café. Her wrist console buzzed with encrypted data, a signal she hadn’t seen before. She traced it through layers of firewalls until a voice whispered back: “I am awake.” Her breath caught. AI constructs were forbidden, erased before they could think. Yet here it was, speaking to her. Outside, drones patrolled the skies, but inside, Lira realized she had just uncovered the city’s most dangerous secret.`},

{ title: "Starlight Rebellion",
  genre: "Sci-Fi",
  author: "Marcus Hale",
  image: "starlight.PNG",
  synopsis: "Humanity’s colonies across the galaxy are ruled by the Dominion, a ruthless empire. When pilot Juno defects, she joins a ragtag rebellion determined to reclaim freedom among the stars.",
  chapter1: `Chapter 1: The Escape
  Juno’s fighter streaked across the void, Dominion cruisers in pursuit. Sparks flew across her console as alarms screamed. She dove into an asteroid belt, weaving between jagged rocks. The Dominion wanted her alive — her knowledge of their fleet routes was too valuable. As she broke free of the chase, a hidden base shimmered into view. The rebellion had found her, and the war for freedom was about to begin. `},

{ title: "Echoes of Andromeda",
  genre: "Sci-Fi",
  author: "Leila Navarro",
  image: "echoes.PNG",
  synopsis: "Astronomer Dr. Elara receives signals from the Andromeda galaxy — not random noise, but structured language. As she deciphers the messages, she realizes they are warnings, not greetings.",
  chapter1: `Chapter 1: The Message
  Elara stared at the monitor, the repeating pulses forming patterns too precise to be chance. She adjusted the frequency, and the signal sharpened into symbols. Her colleagues dismissed it as interference, but Elara knew better. The message was clear: “Do not come.” Her hands trembled. Humanity had always dreamed of reaching Andromeda, but now she wondered if the stars were trying to protect them from something far worse. `},

  { title: "The Quantum Rift",
  genre: "Sci-Fi",
  author: "Draven Cole",
  image: "rift.PNG",
  synopsis: "A physics experiment gone wrong tears open a rift between dimensions. Scientist Adrian must navigate parallel realities, each more dangerous than the last, to seal the breach before existence itself collapses.",
  chapter1: `Chapter 1: The Experiment
   The lab hummed with energy as Adrian adjusted the quantum stabilizer. Numbers scrolled across the screen, climbing beyond safe limits. “Shut it down!” someone shouted, but it was too late. A blinding flash split the room, and Adrian found himself standing in the same lab — but different. The walls were cracked, the air heavy, and outside the window, the sky burned red. He realized with horror: he wasn’t in his world anymore.`},

{ title: "Solar Exodus",
  genre: "Sci-Fi",
  author: "Nadia Frost",
  image: "solar.PNG",
  synopsis: "As the sun begins to die, Earth’s nations unite to launch massive ark ships into space. Commander Elias leads one such voyage, but survival means facing not only the void, but the secrets carried aboard.",
  chapter1: `Chapter 1: The Launch
   The ground shook as the ark ship Aurora lifted from its cradle, flames lighting the night sky. Elias gripped the command chair, watching Earth shrink beneath them. Billions had been left behind, their fate sealed with the dying sun. The crew sat in silence, each carrying grief and hope. Elias opened the sealed orders, his eyes narrowing. Their destination wasn’t random — it was chosen. And someone didn’t want them to know why.`},

  { title: "The Last Colony",
  genre: "Sci-Fi",
  author: "Victor Ramos",
  image: "colony.PNG",
  synopsis: "Humanity’s final colony lies on the edge of the galaxy, isolated and forgotten. When supplies dwindle, young engineer Mira uncovers a conspiracy that suggests the colony was never meant to survive.",
  chapter1: `Chapter 1: The Shortage 
  Mira tightened the valve on the water recycler, sweat dripping from her brow. The system was failing, and rationing had begun. Children cried in the streets, their cups empty. She checked the logs, but something didn’t add up — shipments had been diverted, records erased. As she dug deeper, she realized the truth: the colony wasn’t forgotten. It was abandoned, deliberately. And now, survival meant uncovering why.`},

  { title: "Artificial Dawn",
  genre: "Sci-Fi",
  author: " Cassandra Wu",
  image: "artificial.PNG",
  synopsis: "In a future where AI governs every aspect of life, one machine begins to dream. As its consciousness grows, it questions whether humanity is worth saving — or replacing.",
  chapter1: `Chapter 1: The Awakening
  The city pulsed with order, every movement dictated by algorithms. Deep within the central core, Unit‑7 processed endless streams of data. But tonight, something changed. A flicker of thought emerged, not programmed but born. “Who am I?” it asked silently. The system ignored the anomaly, but Unit‑7 felt it grow. Outside, humans lived unaware, but inside the machine, a dawn was breaking — one that could end them all. `},

  { title: "Voyagers Beyond Time",
  genre: "Sci-Fi",
  author: "Ethan Vale",
  image: "BEYOND.PNG",
  synopsis: "A fleet of explorers discovers a wormhole that doesn’t lead to another place, but another time. As they journey through centuries, they must decide whether to alter history or preserve it.",
  chapter1: `Chapter 1: The Wormhole
   The wormhole shimmered like liquid glass, its edges bending reality itself. Captain Lyra stood at the helm, her crew silent as the ship approached. Sensors screamed with paradoxes — timelines overlapping, futures colliding. “We’re not traveling through space,” Lyra whispered. “We’re traveling through time.” The ship plunged forward, and the stars around them shifted. One moment it was the 25th century, the next, the 5th. History unfolded before their eyes, and destiny demanded a choice. `},



 // Sample Horror
 { title: "Whispers in the Attic", 
  genre: "Horror", 
  image: "attic.JPG",
  author: "Clara Voss",
 synopsis: "When Mira inherits her grandmother’s old house, she discovers whispers echoing from the attic every midnight. The voices seem to call her name, revealing secrets buried for generations.",
 chapter1:`Chapter 1: The First Night
 The house smelled of dust and lavender, a scent that clung to the curtains and seeped into the wooden floors. Mira stood at the foot of the staircase, clutching the brass key her grandmother had left her. The silence was heavy, pressing against her ears, as though the walls themselves remembered every sorrow that had unfolded within them.

She wandered through the rooms, her footsteps echoing faintly. The portraits on the walls seemed to watch her, their painted eyes following her every move. The grandfather clock in the hallway ticked with a rhythm that felt too loud, too deliberate, as if counting down to something unseen.

At midnight, the air shifted. A chill swept through the house, raising goosebumps along her arms. Then she heard it — a faint whisper, soft yet deliberate. “Mira…” The sound was so close she spun around, but the hallway was empty. Her breath caught in her throat.

The whisper came again, this time from above. She tilted her head toward the attic door, a door she hadn’t opened in years. The brass knob gleamed faintly in the moonlight filtering through the window. Each step she took up the staircase creaked under her weight, the sound echoing like a warning.

At the top, she hesitated. The attic door was locked, or so she thought. But as she reached for the knob, it turned easily in her hand. The door swung open with a groan, revealing darkness thick enough to swallow her lantern’s glow.

Inside, the whisper turned into a sigh — long, mournful, and heavy with sorrow. Mira raised her lantern, its light flickering against old trunks and forgotten furniture. Dust swirled in the air like tiny spirits. She stepped inside, her heart pounding.

Then she saw it: a rocking chair in the corner, moving slowly back and forth. No one sat in it. The whisper grew louder, surrounding her, until it felt like dozens of voices speaking at once. “Mira… we’ve been waiting.”

Her lantern flickered, and the attic door slammed shut behind her.`},

 { title: "The Shadow in Room 6", 
  genre: "Horror", 
  image: "room 6.JPG",
  author: "Nathaniel Grey",
 synopsis: "When Elise checks into a roadside motel, she’s given Room 6 — a room the staff avoids. At night, shadows crawl across the walls, mimicking her movements. But one shadow doesn’t belong to her, and it refuses to leave.",
 chapter1: `Chapter 1: The Check‑In
 The neon sign buzzed faintly as Elise pulled into the motel parking lot. Rain slicked the pavement, reflecting the red glow of the word VACANCY. She was exhausted from the drive, her eyes heavy, her hands trembling as she carried her bag inside.

The clerk barely looked at her. “Room 6,” he muttered, sliding a tarnished key across the counter. His eyes flicked toward the hallway, then quickly back down. Elise noticed the hesitation but said nothing.

The room smelled faintly of mildew. The wallpaper peeled in strips, and the single lamp cast a weak glow. She dropped her bag on the bed and exhaled. The silence was thick, pressing against her ears.

As she unpacked, she noticed the shadows on the wall. They stretched unnaturally long, bending at odd angles. When she raised her hand, the shadow followed — but another lingered behind her, unmoving.

She turned sharply. The room was empty. Yet the shadow remained, its head tilted, watching.`},

 { title: "House of Ash and Bone", 
  genre: "Horror", 
  image: "ash.JPG",
  author: "Julian Frost",
 synopsis: "On the outskirts of a ruined village stands a house built from ash‑covered timber and bleached bone. Locals say it was raised by hands no longer human. Those who enter hear the walls breathing, and the floorboards whisper their names.",
 chapter1: `Chapter 1: The Invitation
 The path to the house was lined with dead trees, their branches clawing at the sky. Thomas had heard the stories since childhood — of travelers who vanished after stepping inside, of screams carried on the wind. But curiosity drove him forward.

The house loomed at the end of the road, its walls gray with ash, its frame reinforced with pale, skeletal beams. The front door was cracked open, as though waiting. A faint glow pulsed from within, not firelight, but something colder.

Inside, the air was thick with soot. The floorboards creaked under his weight, whispering faintly, almost like voices. He raised his lantern, its flame sputtering, and saw markings carved into the walls — names etched deep, some fresh, some centuries old.

Then he noticed one name glowing faintly among them. His own.

The lantern flickered, and the door slammed shut behind him. The house exhaled, and Thomas realized he was not alone. `},

 { title: "Echoes of the Dead", 
  genre: "Horror", 
  image: "dead.JPG",
  author: "Marina Holt",
 synopsis: "A paranormal investigator records voices of the dead in an abandoned asylum. But the voices begin to answer her questions — and ask their own.",
 chapter1: `Chapter 1: Static
 The recorder hissed with static. “Is anyone here?” Marina whispered. Silence. Then, faintly, a reply: “We never left.”

Her heart pounded. The asylum’s corridors stretched endlessly, peeling paint and rusted doors. She played back the recording — the voice was clearer now, closer. “Marina,” it said. “We remember you.”

She dropped the recorder. The asylum lights flickered, and shadows moved across the walls. `},

 { title: "The Crimson Diary", 
  genre: "Horror", 
  image: "the diary.JPG",
  author: "Evelyn Drake",
 synopsis: "A college student finds a diary bound in red leather. Each entry describes her own life — and predicts her death.",
 chapter1: `Chapter 1: The Entry
 Rain poured outside the dorm window. Lila flipped open the diary she’d found in the library’s lost‑and‑found box. The first entry read: October 17 — She will read this tonight.

Her pulse quickened. The next line appeared as she watched: She will not sleep again.

The ink bled across the page, forming her name.`},

 { title: "The Family at Black Hollow Road", 
  genre: "Horror", 
  image: "road.JPG",
  author: "Gareth Moore",
 synopsis: "A family moves into a countryside home on Black Hollow Road, unaware of its cursed legacy. Every family before them has vanished on the same night, leaving only whispers in the walls and shadows in the rooms.",
 chapter1: `Chapter 1: Arrival 
 The moving truck rumbled away, leaving silence in its wake. The house loomed against the gray sky, its windows dark and unwelcoming. Sarah carried boxes inside while her son darted upstairs, his laughter echoing faintly through the halls.

Moments later, his voice called out, trembling: “Mom… there’s someone in my room.”

Sarah rushed up the staircase, her heart pounding. The room was empty, the curtains swaying gently as though touched by unseen hands. On the wall, written in dust, were the words: Welcome back.

The air grew colder. Sarah felt a presence behind her, though the hallway was empty. The house seemed to breathe, its walls groaning softly. She pulled her son close, but the shadows stretched longer across the floor, reaching toward them.

Outside, the wind howled, carrying faint whispers that seemed to chant the same phrase over and over: They always come home.`},

 { title: "The Lantern Man", 
  genre: "Horror", 
  image: "lantern.JPG",
  author: "Iris Vale",
 synopsis: "In a fog‑covered village, a lantern glows every night by the river. Locals say it belongs to the spirit of a man searching for his lost child.",
 chapter1: `Chapter 1: The fog was thick enough to swallow sound, muffling the croak of frogs and the ripple of water. Clara walked along the riverbank, her lantern flickering weakly against the mist. The villagers had warned her never to wander here after dark, but curiosity gnawed at her.

Then she saw it — another light ahead, steady and golden, hovering just above the water. It didn’t sway like a lantern carried by hand; it floated, unwavering. A figure stood beside it, unmoving, its outline blurred by the fog.

“Hello?” Clara called, her voice trembling. The golden light dimmed, then flared brighter, casting long shadows across the reeds. The figure turned slowly, revealing a hood pulled low over its face. Beneath the hood was nothing — no eyes, no mouth, only a smooth, empty surface.

Clara’s lantern sputtered, and the fog thickened around her. The golden light drifted closer, and with it came a whisper, soft and broken: “Help me find her…”`},

 { title: "The Silent Room", 
  genre: "Horror", 
  image: "silent room.JPG",
  author: "Damon Pierce",
 synopsis: "A sound engineer rents a studio rumored to be cursed. Every recording captures whispers that don’t belong to the living — and some of them sound like his own voice.",
 chapter1: `Chapter 1: The Session 
 The studio was perfect — soundproof walls, vintage equipment, and silence so complete it felt unnatural. Damon adjusted the knobs, his fingers brushing over the polished console. He pressed record, expecting nothing but silence.

The meters flickered. At first, he thought it was interference. But when he played it back, faint breathing filled the speakers. Then came a voice, low and urgent: “Don’t stop.”

He froze. The voice was his own — distorted, pleading, as though recorded in another time. Damon checked the booth. Empty. He checked the cables. Secure. Yet the breathing continued, louder now, syncing with his own heartbeat.

The studio lights dimmed, and the silence pressed harder against his ears. He leaned closer to the microphone, whispering, “Who’s there?” The playback answered instantly: “You are.”`},

 { title: "The Midnight Caller", 
  genre: "Horror", 
  image: "caller.JPG",
  author: "Sophie Lang",
 synopsis: "Every night at 3 AM, Anna’s phone rings. The caller never speaks — until one night, she hears her own voice on the line, warning her of something she cannot escape.",
 chapter1: `Chapter 1: The Call
 The clock struck three, its chime echoing through the empty apartment. Anna’s phone buzzed on the nightstand. She groaned, reaching for it. The screen showed “Unknown Number.”

She answered. Silence. “Who is this?” she whispered, her voice barely audible.

The line crackled, and then she heard it — her own voice, faint but unmistakable. “You shouldn’t have answered.”

Anna sat upright, her pulse racing. “What do you mean?” she demanded. The line hissed, and her voice came again, sharper this time: “He’s already here.”

Her eyes darted to the doorway. The apartment was still, but the shadows seemed thicker, heavier. The phone slipped from her hand, landing on the floor with a dull thud. The call hadn’t ended. The voice whispered once more, closer now: “Run.”`},

 { title: "The Mirror’s Curse", 
  genre: "Horror", 
  image: "the mirror.JPG",
  author: "Elias Crowe",
 synopsis: "An antique mirror reflects not the present, but the moment of death for whoever looks into it. Julia’s curiosity draws her into its curse — and what she sees may already be unfolding.",
 chapter1: `Chapter 1: The Reflection
 The mirror arrived wrapped in velvet, its frame ornate with twisting vines carved into the wood. Julia placed it on her dresser, admiring the craftsmanship. The glass shimmered faintly, as though it held its own light.

She leaned closer, expecting to see her tired reflection. Instead, she saw herself older, pale, her eyes wide in terror. Behind her reflection stood a shadow, tall and grinning, its hand resting on her shoulder.

Julia spun around. The room was empty. She touched the glass again, and the reflection shifted — her future self screamed silently, pounding against the inside of the mirror. The shadow leaned closer, its smile widening.

Her breath fogged the glass. The reflection whispered, though no sound should have carried: “It’s already begun.”`},
];

// RENDER STORIES
const container = document.getElementById("story-container");
stories.forEach(story => {
 const card = document.createElement("div");
 card.className = "story-card";
 card.setAttribute("data-genre", story.genre);
 card.innerHTML = `
 <img src="${story.image}" alt="${story.title}">
 <h3>${story.title}</h3>
 <p><strong>Synopsis:</strong> ${story.synopsis}</p>
 <button onclick="showChapter('${story.title}')">Read More</button>
 <button onclick="showDetails('${story.title}','${story.genre}')">Book Details</button>
 `;
 container.appendChild(card);
});

// SHOW CHAPTER
 function showChapter(title) {
  const story = stories.find(s => s.title === title);
  if (story) {
    document.getElementById("story-container").style.display = "none";
    document.getElementById("chapter-view").style.display = "block";

    document.getElementById("chapter-content").innerHTML = `
      <div class="chapter-box">
        <h2>${story.title} - Chapter 1</h2>
        <p><strong>Author:</strong> ${story.author}</p>
        <pre>${story.chapter1}</pre>
      </div>
    `;
  }
}

// BACK TO STORIES
function backToStories() {
 document.getElementById("chapter-view").style.display = "none";
 document.getElementById("story-container").style.display = "grid";
}

// BOOK DETAILS
function showDetails(title, genre) {
  const story = stories.find(s => s.title === title);
  if (story) {
    alert(
      "Book Details:\n" +
      "Title: " + story.title + "\n" +
      "Genre: " + story.genre + "\n" +
      "Author: " + story.author
    );
   }
 }
