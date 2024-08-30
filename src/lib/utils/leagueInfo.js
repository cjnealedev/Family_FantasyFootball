/*   STEP 1   */
export const leagueID = "1124825409142132736"; // your league ID
export const leagueName = "Family Fantasy"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `

<p>In a draft filled with surprises, gambles, and some downright head-scratchers, each team walked away with a roster they hope will carry them to fantasy glory. Here’s a closer look at how each team fared, complete with grades and a few chuckles along the way.</p>

<div class="team">
    <h2>1. Team amartin513</h2>
    <p><span class="best-worst">Best Pick:</span> Tyreek Hill</p>
    <p><span class="best-worst">Worst Pick:</span> George Kittle</p>
    <p>Tyreek Hill is poised to "cheetah" his way through defenses, making this a solid WR1 pick. George Kittle is an elite tight end when healthy, but he’s as fragile as a porcelain doll. The RB depth? It’s more like a kiddie pool—shallow and concerning.</p>
    <p class="grade">Grade: B+</p>
</div>

<div class="team">
    <h2>2. Team rozdoyle</h2>
    <p><span class="best-worst">Best Pick:</span> Josh Allen</p>
    <p><span class="best-worst">Worst Pick:</span> Sam LaPorta</p>
    <p>Josh Allen brings elite QB production and is a potential MVP. But Sam LaPorta as your second pick is a bit of a head-scratcher, unless you’re in a tight end premium league—otherwise, it’s like reaching for the last donut only to realize it’s gluten-free.</p>
    <p class="grade">Grade: A</p>
</div>

<div class="team">
    <h2>3. Team nursenr</h2>
    <p><span class="best-worst">Best Pick:</span> C.J. Stroud</p>
    <p><span class="best-worst">Worst Pick:</span> Kadarius Toney</p>
    <p>Drafting C.J. Stroud is like buying stock in a promising startup—high risk, high reward. Kadarius Toney, on the other hand, has all the consistency of a weather forecast—good luck predicting his performance. This team might strike gold with Stroud, but Toney is more of a lottery ticket.</p>
    <p class="grade">Grade: B</p>
</div>

<div class="team">
    <h2>4. Team seejaykneel</h2>
    <p><span class="best-worst">Best Pick:</span> Ja’Marr Chase</p>
    <p><span class="best-worst">Worst Pick:</span> Dallas Cowboys Defense</p>
    <p>Ja’Marr Chase is a home run pick—consistent, explosive, and a potential league winner. But the Dallas Cowboys Defense in the 4th round? That’s like buying a snowblower in the middle of summer—there might be a better use for that pick. The RB situation here is thinner than a slice of deli meat.</p>
    <p class="grade">Grade: B</p>
</div>

<div class="team">
    <h2>5. Team popmartin615</h2>
    <p><span class="best-worst">Best Pick:</span> Joe Burrow</p>
    <p><span class="best-worst">Worst Pick:</span> Sam Howell</p>
    <p>Joe Burrow is the steady hand you want guiding your fantasy ship. But Sam Howell? He’s more of a backup plan that screams, “I panicked!” Howell’s upside is there, but he’s as unproven as that new restaurant down the street. Still, the core of this team is solid, with Burrow leading the way.</p>
    <p class="grade">Grade: A-</p>
</div>

<div class="team">
    <h2>6. Team shanecmartin</h2>
    <p><span class="best-worst">Best Pick:</span> Lamar Jackson</p>
    <p><span class="best-worst">Worst Pick:</span> Michael Thomas</p>
    <p>Lamar Jackson is a high-upside QB who could single-handedly carry your team—if he stays healthy. Michael Thomas, though, is like that movie you keep hearing about but haven’t seen—it might be great, but is it still relevant? If this team stays upright, it could be dangerous, but Thomas might be past his prime.</p>
    <p class="grade">Grade: B</p>
</div>

<div class="team">
    <h2>7. Team BekahMcD</h2>
    <p><span class="best-worst">Best Pick:</span> A.J. Brown</p>
    <p><span class="best-worst">Worst Pick:</span> Darren Waller</p>
    <p>A.J. Brown is a beast, and he’ll likely continue to eat up yardage like a buffet. Darren Waller, however, has the durability of a cell phone charger—always breaking when you need him the most. The rest of the roster has solid potential, but Waller could be a bust if he spends more time on the bench than the field.</p>
    <p class="grade">Grade: B+</p>
</div>

<div class="team">
    <h2>8. Team Popsracer</h2>
    <p><span class="best-worst">Best Pick:</span> Patrick Mahomes</p>
    <p><span class="best-worst">Worst Pick:</span> J.K. Dobbins</p>
    <p>Patrick Mahomes is the fantasy football equivalent of a cheat code—unstoppable and reliable. J.K. Dobbins, though, is a bit of a gamble coming off injury. He could be a steal, or he could spend more time in the recovery room. Mahomes gives this team a high floor, but Dobbins’ health could determine the ceiling.</p>
    <p class="grade">Grade: A-</p>
</div>

<div class="team">
    <h2>9. Team lneale</h2>
    <p><span class="best-worst">Best Pick:</span> Bijan Robinson</p>
    <p><span class="best-worst">Worst Pick:</span> Jonathan Taylor</p>
    <p>Bijan Robinson could be the next big thing, or he could be the next big bust—only time will tell. Jonathan Taylor’s situation is as murky as your friend’s Instagram filter. If Taylor doesn’t return to form, this team might be in trouble. But if Robinson delivers, this could be a breakout season for Team lneale.</p>
    <p class="grade">Grade: B</p>
</div>

<div class="team">
    <h2>10. Team JustMarkingTime</h2>
    <p><span class="best-worst">Best Pick:</span> Stefon Diggs</p>
    <p><span class="best-worst">Worst Pick:</span> Kyle Pitts</p>
    <p>Stefon Diggs is a target hog, a surefire WR1 who should provide consistency all season. Kyle Pitts, on the other hand, has been all potential and little production—a pick that might leave you frustrated if his QB can’t get him the ball. This team has strong points, but Pitts needs to deliver to avoid another disappointing season.</p>
    <p class="grade">Grade: B</p>
</div>

<p>In the end, each team has the potential to shine—or crash and burn spectacularly. The season ahead will reveal who’s a genius and who’s been hoodwinked by their own draft-day optimism. Until then, let the trash-talking commence!</p>`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Your Name",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    