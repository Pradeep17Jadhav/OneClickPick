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

        this.aboutMe = new Component();
        this.aboutMe.AddClass("headerItem");
        this.aboutMe.GetElement().innerHTML = "About Me";
        this.aboutMe.GetElement().onpointerup = () => {
            this.parent.MoveTo("aboutMe");
        }
        this.AddChild(this.aboutMe);

        this.career = new Component();
        this.career.AddClass("headerItem");
        this.career.GetElement().innerHTML = "Career";
        this.AddChild(this.career);
        
        this.skills = new Component();
        this.skills.AddClass("headerItem");
        this.skills.GetElement().innerHTML = "Skills";
        this.AddChild(this.skills);
                
        this.projects = new Component();
        this.projects.AddClass("headerItem");
        this.projects.GetElement().innerHTML = "Projects";
        this.AddChild(this.projects);

        this.contact = new Component();
        this.contact.AddClass("headerItem");
        this.contact.GetElement().innerHTML = "Projects";
        this.AddChild(this.contact);
    }


    Resize(width, height)
    {
        let x = 30;

        this.name.Resize(220, height);
        this.name.Place(x, 0);
        x += this.name.GetWidth() + 10;

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