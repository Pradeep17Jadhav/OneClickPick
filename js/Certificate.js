class Certificate extends Component
{
    constructor()
    {
        super();
        this.AddClass(CssClassConstants.CERTIFICATE);
        
        this.courseName = new Component("span");
        this.AddChild(this.courseName);

        this.platform = new Component("span");
        this.AddChild(this.platform);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
    }

    SetCourseName(courseName)
    {
        this.courseName.GetElement().innerHTML = courseName;
    }

    SetPlatform(platform)
    {
        this.platform.GetElement().innerHTML = platform;
    }

    SetBackgroundImage(url)
    {
        this.BackgroundImage(url);
    }
}