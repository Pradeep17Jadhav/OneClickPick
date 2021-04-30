class Certificate extends Component
{
    constructor()
    {
        super();
        this.AddClass(CssClassConstants.CERTIFICATE);

        this.courseName = "";

        this.platform = "";
    }

    Resize(width, height)
    {
        super.Resize(width, height);
    }

    SetCourseName(courseName)
    {
        this.courseName = courseName;
    }

    SetPlatform(platform)
    {
        this.platform = platform;
    }

    SetCertificateImage(url)
    {
        this.SetBackgroundImage(url);
    }
}