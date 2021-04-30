class SkillsChart extends Component
{
    constructor()
    {
        super();

        this.languages = {
            "HTML": 90,
            "CSS": 90,
            "C++": 70,
            "C#": 70,
            "JavaScript": 85,
            "Python": 90,
            "ReactJs": 50,
            "SQL": 75,
            "MongoDB": 60
        }
        this.lstSkillItems = [];

        for(let key in this.languages)
        {
            let lang = new SkillItem(key, this.languages[key]);
            this.lstSkillItems.push(lang);        
            this.AddChild(lang);
        }
    }

    Resize(width, height)
    {
        let y = 20;
        for(let i = 0; i < this.lstSkillItems.length; i++)
        {
            this.lstSkillItems[i].Resize(width, 30);
            this.lstSkillItems[i].Place(0, y);
            y += this.lstSkillItems[i].GetHeight() + 5;
        }

        super.Resize(width, y);
    }
}

class SkillItem extends Component
{
    constructor(skillName, percent)
    {
        super();
        this.skillName = new Component();
        this.skillName.AddClass("skillsItemText");
        this.skillName.GetElement().innerHTML = skillName;
        this.AddChild(this.skillName);

        this.bar = new Component();
        this.bar.AddClass("skillsBar");
        this.AddChild(this.bar);
        
        this.percent = new Component();
        this.percent.AddClass("skillsItemText");
        this.percent.GetElement().innerHTML = percent;
        this.AddChild(this.percent);
    }

    Resize(width, height)
    {
        let x = 0;
        let barAvailableWidth = width - 10;

        this.skillName.Resize(50, height);
        this.skillName.Place(x, 0);
        x += this.skillName.GetWidth() + CssConstants.PADDING3X;

        this.bar.Resize(barAvailableWidth * this.percent / 100, height);
        this.bar.Place(x, 0);
        x += this.bar.GetWidth() + CssConstants.PADDING3X;

        this.percent.Resize(50, height);
        this.percent.Place(x, 0);
        x += this.percent.GetWidth() + CssConstants.PADDING3X;

        super.Resize(width, height);
    }
}