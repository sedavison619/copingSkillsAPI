const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const copingSkills = {
    'box breathing': {
        'materials': 'imagination or hands or box drawn/printed on a surface',
        'method' : 'trace one side of the box either in your mind or on your palm or another surface while breathing in, continue traceing the next side and hold that breath, continue tracing the next side as you exhale, continue tracing the next side as you hold your exhale. Alternatively you can count to a certain number (such as 5) instead of tracing.'
    },
    'progressive muscle relaxation': {
        'materials' : 'your body',
        'method': "beginning at either your head or your toes tighten/flex a muscle group (such as scrunching your toes or squinting your face) and hold for a few seconds, then specifically relax and stretch that muscle group for a few seconds, then move up or down the body to the next muscle group. Note: this can also be effective even if you are unable to go through your whole body. Simply doing your hands or feet, for instance, will have an affect although it will be smaller."
    },
    'scent': {
        'materials': 'scent or scent object',
        'method' : "mist the scent into the air or smell your scent object"
    },
    'listing': {
        'materials': "imagination or paper and writing tool",
        'method': "choose a category (for instance: animals) and list all of the words you can think of that fit that category (eg. dog, cat, horse...)"
    },
    'counting': {
        "materials": "imagination or paper and writing implement",
        "method": 'choose a category (such as a certain color, or type of item) and count how many you can see'
    }
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:copingSkill', (req, res) => {
    const skillName = req.params.copingSkill.toLowerCase();
    if (copingSkills[skillName]){
        res.json(copingSkills[skillName]);
    }
    else {
        res.json('Coping skill not found');
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.');
})