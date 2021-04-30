class Header extends Component
{
    constructor()
    {
        super();
        this.AddClass("header");
        this.RemoveClass("box");

        this.name = new Component("span");
        this.name.AddClass("headerName");
        this.name.GetElement().innerHTML = "Pradeep Jadhav";
        this.AddChild(this.name);

        this.aboutMe = new HeaderItem("About Me");
        this.AddChild(this.aboutMe);

        this.career = new HeaderItem("Career");
        this.AddChild(this.career);
        
        this.skills = new HeaderItem("Skills");
        this.AddChild(this.skills);
                
        this.projects = new HeaderItem("Projects");
        this.AddChild(this.projects);

        this.contact = new HeaderItem("Contact");
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
        this.aboutMe.Resize(80, CssConstants.PADDING7X);
        this.aboutMe.Place(width - this.aboutMe.GetWidth() - right, 14);
        right += this.aboutMe.GetWidth() + CssConstants.PADDING3X;

        this.career.Resize(80, CssConstants.PADDING7X);
        this.career.Place(width - this.aboutMe.GetWidth() - right, 14);
        right += this.career.GetWidth() + CssConstants.PADDING3X;

        this.skills.Resize(80, CssConstants.PADDING7X);
        this.skills.Place(width - this.aboutMe.GetWidth() - right, 14);
        right += this.skills.GetWidth() + CssConstants.PADDING3X;
        
        this.projects.Resize(80, CssConstants.PADDING7X);
        this.projects.Place(width - this.aboutMe.GetWidth() - right, 14);
        right += this.projects.GetWidth() + CssConstants.PADDING3X;

        this.contact.Resize(80, CssConstants.PADDING7X);
        this.contact.Place(width - this.aboutMe.GetWidth() - right, 14);
        right += this.contact.GetWidth() + CssConstants.PADDING3X;

        super.Resize(width, height);
    }
}