var io = io();
var json;

var icons = {
    c75z:               "http://vignette1.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150626152223",
    deagle:             "http://vignette1.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400?cb=20150907155251",
    elites:             "http://vignette1.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150926004749",
    fiveseven:          "http://vignette1.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png/revision/latest?cb=20150928010625",
    glock:              "http://vignette1.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150929052129",
    p250:               "http://vignette1.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png/revision/latest/scale-to-width-down/400?cb=20150930045325",
    hkp2000:            "http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png/revision/latest/scale-to-width-down/400?cb=20150930051148",
    tec9:               "http://vignette1.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150531170942",
    usp_silencer:       "http://vignette1.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150524215538",
    mag7:               "http://vignette1.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150611155415",
    nova:               "http://vignette1.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150605211827",
    sawedoff:           "http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150607002133",
    xm1014:             "http://vignette1.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151003033234",
    mac10:              "http://vignette1.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151008213859",
    mp7:                "http://vignette1.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150611031417",
    mp9:                "http://vignette1.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150611032320",
    p90:                "http://vignette1.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151029071118",
    bizon:              "http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150601124505",
    upm45:              "http://vignette1.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151031101819",
    ak47:               "http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150530195655",
    aug:                "http://vignette1.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151107081650",
    famas:              "http://vignette1.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151108053236",
    galilar:            "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png/revision/latest/scale-to-width-down/400?cb=20151104020743",
    m4a1_silencer:               "http://vignette1.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150524003032",
    m4a4:               "http://vignette1.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png/revision/latest/scale-to-width-down/400?cb=20151109050429",
    sg556:              "http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150618212907",
    awp:                "http://vignette1.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151111052858",
    g3sg1:              "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151114060243",
    ssg08:              "http://vignette1.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150530173524",
    scar20:             "http://vignette1.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150617233705",
    m249:               "http://vignette1.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151115043500",
    negev:              "http://vignette1.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png/revision/latest/scale-to-width-down/400?cb=20151102025426",
    
    c4:                 "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png/revision/latest/scale-to-width-down/400?cb=20150527204001",
    hegrenade:          "http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png/revision/latest/scale-to-width-down/400?cb=20151119040334",
    molotov:            "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151118070335",
    flashbang:          "http://vignette1.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151118065832",
    decoy:              "http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png/revision/latest/scale-to-width-down/400?cb=20150620150731",
    smokegrenade:       "http://vignette1.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20151118071411",
    incgrenade:         "http://vignette1.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png/revision/latest/scale-to-width-down/400?cb=20150622014842",
    
    knife:              "http://vignette1.wikia.nocookie.net/cswikia/images/b/b9/Inventory_icon_weapon_knife.png/revision/latest?cb=20151011225825",
    knife_t:            "http://vignette1.wikia.nocookie.net/cswikia/images/a/ac/Inventory_icon_weapon_knife_t.png/revision/latest?cb=20151011230019",
    knife_bayonet:      "http://vignette1.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png/revision/latest/scale-to-width-down/400?cb=20151121094052",
    knife_butterfly:    "http://vignette1.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151121094022",
    knife_falchion:     "http://vignette1.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151121093921",
    knife_flip:         "http://vignette1.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151121093845",
    knife_gut:          "http://vignette1.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151121093734",
    knife_huntsman:     "http://vignette1.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151121093647",
    knife_karambit:     "http://vignette1.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151121093552",
    knife_m9bayonet:    "http://vignette1.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png/revision/latest/scale-to-width-down/400?cb=20151120233905",
    knife_shadowdagger: "http://vignette1.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png/revision/latest/scale-to-width-down/400?cb=20151120233801"
    
}


var interval;

var roundtime = 0;
var bombtime = 0;

io.on("update", function(status) {
    json = JSON.parse(status);

    $(".t-score").html(json.map.team_t.score);
    $(".ct-score").html(json.map.team_ct.score);

    if (interval) {
        clearInterval(interval);
    }
    console.log(json.player.name);
    $(".name").html(json.player.name);
    
    roundtime = parseInt(json.extra.round.time);
    bombtime = parseInt(json.extra.round.bomb.time);

    interval = setInterval(timer, 500);
    
    updateWeapons();

});

function updateWeapons() {
    var html = "";
    var g = 1;
    $("td.pic").html("");
    $("td.ammo").html("");
    for (var key in json.player.weapons) {
        if (json.player.weapons.hasOwnProperty(key)) {
            var weapon = json.player.weapons[key];
            var name = weapon.name.replace("weapon_", "");
            console.log(weapon);
            var type = weapon.type.toLowerCase();
            var clazz = ".rifle";
            if(type === "pistol") 
                clazz = ".pistol";
            else if(type === "c4")
                clazz = ".c4";
            else if(type === "knife") 
                clazz = ".knife";
            else if(type === "grenade") {
                clazz = ".g" + g;
                g++;
            }
            else
                clazz = ".rifle";
            $(clazz + " td.pic").html("<img src='" + icons[name] + "'>");
            $(clazz + " td.ammo").html(weapon.ammo_clip+ "/" + weapon.ammo_reserve);
            $(clazz + " td.reload").html(weapon.ammo_clip < 7 ? "Reload" : "");

        }
    }
}


var flashing = false;

function timer() {
    var intbomb = parseInt(bombtime);
    var inttime = parseInt(roundtime);

    if (json.extra.round.bomb.planted) {
        $(".time").html(intbomb);
        $(".time").css("font-size", "15em");
        $(".timelabel").html("Bomb Planted");

        if (bombtime <= 0) {
            flashing = false;
            $(".time").html("BOOM!");
        } else if (bombtime <= 5) {
            flash();
        } else if (bombtime <= 10) {
            $("body").css('background-color', "red");   
        } else {
            $("body").css('background-color', 'Green');
        }
    } else {
        var min = 0;
        var sec = 0;

        if (roundtime > 59) {
            min = 1;
            sec = inttime - 59;
        } else {
            sec = inttime;
        }

        $(".time").css("font-size", "7em");

        if (json.round.phase === 'freezetime') {
            $(".timelabel").html("Freeze Time");
        } else if (json.round.phase === 'live') {
            $(".timelabel").html("Round Time");
        } else if (json.round.phase === 'over') {
            $(".timelabel").html("Round Over");
        }

        $(".time").html(min > 0 ? min + ":" + sec : sec);
        $("body").css('background-color', 'white');
    }

    bombtime -= 0.5;
    roundtime -= 0.5;
}

function flash() {
    $("body").css('background-color', function() {
        this.switch = !this.switch;
        return this.switch ? "red" : "orange";
    });
    /*if (json.extra.round.bomb.planted) {
    	setTimeout(flash, 200);
    }*/
}
