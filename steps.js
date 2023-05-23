
let globalData = [
    {
        "name": "Miles Artorio",
        "points": 213,
        "avatar": "https://i.pravatar.cc/300"
    },
    {
        "name": "Pavitr Prabhakar",
        "points": 325,
        "avatar": "https://i.pravatar.cc/292"
    },
    {
        "name": "Kane",
        "points": 324,
        "avatar": "https://i.pravatar.cc/293"
    },
    {
        "name": "Tris Adams",
        "points": 123,
        "avatar": "https://i.pravatar.cc/294"
    },
    {
        "name": "Aron with an A",
        "points": 454,
        "avatar": "https://i.pravatar.cc/295"
    },
    {
        "name": "NoobMaster",
        "points": 422,
        "avatar": "https://i.pravatar.cc/296"
    },
    {
        "name": "Sergio Robertson",
        "points": 14,
        "avatar": "https://i.pravatar.cc/297"
    },
    {
        "name": "Quinn Mayer",
        "points": 339,
        "avatar": "https://i.pravatar.cc/298"
    },
    {
        "name": "Johnathan Avatar",
        "points": 900,
        "avatar": "https://i.pravatar.cc/299"
    }
];

let ranker =[1,2,3];
let ranker_pos = ["first", "second", "third"];

const above = document.querySelector("#topper"); //top sections
const bottom = document.querySelector("#common"); //lower section



globalData.sort(function(a ,b){
    return b.points - a.points;
});

rank(globalData);



function rank (globaldata) {
    // put values into rankings
    let idx = 1;
    globalData.forEach(row => {
    
        if(idx === 1 || idx === 2 || idx === 3){
            
            const t = document.createElement('div');

            t.setAttribute('id', ranker_pos[idx-1]);
            t.className = "rankers";

            insVal(t, globalData, idx-1);
            //add div to top div
            above.appendChild(t);
        }

        else{

            const t = document.createElement('div');
            t.className = "commoners";
            t.style.order = idx-3;

            insVal(t, globalData, idx-1);
            //add div to lower div
            bottom.appendChild(t);
        }

        idx=idx+1;
    })
    
}


function insVal (x, globaldata, i){
    //four values for each cell

    const r = document.createElement("p"); //stores rank
    const im = document.createElement("img");
    const pt = document.createElement("p"); //stores points
    const naam = document.createElement("h2");

    r.textContent = i+1;
    r.className = "number";

    naam.textContent = globaldata[i].name;

    pt.textContent = globaldata[i].points;
    pt.className = "pts";
    
    im.setAttribute('src', globaldata[i].avatar);

    x.appendChild(r);
    x.appendChild(im);
    x.appendChild(naam);
    x.appendChild(pt);

}

//search in array
function inArray(needle, haystack){
    var count = haystack.length;

    for(var i=0; i < count; i++){
        if(haystack[i] === needle){
            {return true;}
        }
        return false;
    }
}
