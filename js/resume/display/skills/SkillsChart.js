class SkillsChart extends Component
{
    constructor()
    {
        super();
        this.AddClass("skillsChart");

        this.languages = {
            "HTML": 100,
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
            let lang = new SkillsItem(key, this.languages[key]);
            this.lstSkillItems.push(lang);        
            this.AddChild(lang);
        }
    }

    Resize(width, height)
    {
        let y = 20;
        for(let i = 0; i < this.lstSkillItems.length; i++)
        {
            this.lstSkillItems[i].Resize(width, 15);
            this.lstSkillItems[i].Place(0, y);
            y += this.lstSkillItems[i].GetHeight() + CssConstants.PADDING6X;
        }

        super.Resize(width, y);
    }
}

class SkillsItem extends Component
{
    constructor(skillName, percent)
    {
        super();
        this.AddClass("skillsItem");
        this.percent = percent;

        this.skillName = new Component();
        this.skillName.AddClass("skillsItemText");
        this.skillName.GetElement().innerHTML = skillName;
        this.AddChild(this.skillName);

        this.bar = new Component();
        this.bar.AddClass("skillsBar");
        this.AddChild(this.bar);
        
        this.percentLabel = new Component();
        this.percentLabel.AddClass("skillsItemText");
        this.percentLabel.GetElement().innerHTML = this.percent + "%";
        this.AddChild(this.percentLabel);
    }

    Resize(width, height)
    {
        let x = 0;
        let barAvailableWidth = width - 100;

        this.skillName.Resize(80, height);
        this.skillName.Place(x, 0);
        x += this.skillName.GetWidth() + CssConstants.PADDING7X;

        this.bar.Resize(barAvailableWidth * this.percent / 100, height);
        this.bar.Place(x, 0);
        x += this.bar.GetWidth() + CssConstants.PADDING3X;

        this.percentLabel.Resize(30, height);
        this.percentLabel.Place(x, 0);
        x += this.percentLabel.GetWidth() + CssConstants.PADDING3X;

        super.Resize(x, height);
    }
}