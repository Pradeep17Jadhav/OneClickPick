class Header extends Component
{
    constructor()
    {
        super();
        this.AddClass("header");
        this.RemoveClass("box");

        this.sectionList = [];

        this.name = new Component("span");
        this.name.AddClass("headerName");
        this.name.AddClass("headerNameActive");
        this.name.GetElement().innerHTML = "Pradeep Jadhav";
        this.name.GetElement().onpointerup = () => {
            this.parent.MoveTo();
        }
        this.AddChild(this.name);

        this.aboutMe = new HeaderItem("About Me");
        this.sectionList.push(this.aboutMe);
        this.AddChild(this.aboutMe);

        this.career = new HeaderItem("Certificates");
        this.sectionList.push(this.career);
        this.AddChild(this.career);
        
        this.skills = new HeaderItem("Skills");
        this.sectionList.push(this.skills);
        this.AddChild(this.skills);
                
        this.projects = new HeaderItem("Projects");
        this.sectionList.push(this.projects);
        this.AddChild(this.projects);

        this.contact = new HeaderItem("Contact");
        this.sectionList.push(this.contact);
        this.AddChild(this.contact);
    }


    Resize(width, height)
    {
        let x = 30;

        if(width < 720)
        {
            if(this.name.isVisible())
                this.name.Hide();
        }
        else
        {
            if(!this.name.isVisible())
                this.name.Show();
                
            this.name.Resize(220, height);
            this.name.Place(x, 0);
            x += this.name.GetWidth() + CssConstants.PADDING3X;
        }

        let right = CssConstants.PADDING5X;
        this.aboutMe.Resize(80, 65);
        this.aboutMe.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.aboutMe.GetWidth() + CssConstants.PADDING3X;

        this.career.Resize(80, 65);
        this.career.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.career.GetWidth() + CssConstants.PADDING3X;

        this.skills.Resize(80, 65);
        this.skills.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.skills.GetWidth() + CssConstants.PADDING3X;
        
        this.projects.Resize(80, 65);
        this.projects.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.projects.GetWidth() + CssConstants.PADDING3X;

        this.contact.Resize(80, 65);
        this.contact.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.contact.GetWidth() + CssConstants.PADDING3X;

        super.Resize(width, height);
    }

    SetActiveSection(index)
    {
        for(let i = 0; i < this.sectionList.length; i++)
        {
            if(index == 0)
                this.name.AddClass("headerNameActive");
            else if(i == index)
                this.sectionList[i].AddClass("headerItemActive");
            else
            {
                this.sectionList[i].RemoveClass("headerItemActive");
                this.name.RemoveClass("headerNameActive");
            }
        }
    }
}