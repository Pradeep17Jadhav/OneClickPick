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
            x += this.name.GetWidth() + 10;
        }

        let right = 30;
        this.aboutMe.Resize(80, height);
        this.aboutMe.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.aboutMe.GetWidth() + 10;

        this.career.Resize(80, height);
        this.career.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.career.GetWidth() + 10;

        this.skills.Resize(80, height);
        this.skills.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.skills.GetWidth() + 10;
        
        this.projects.Resize(80, height);
        this.projects.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.projects.GetWidth() + 10;

        this.contact.Resize(80, height);
        this.contact.Place(width - this.aboutMe.GetWidth() - right, 0);
        right += this.contact.GetWidth() + 10;


        super.Resize(width, height);
    }
}