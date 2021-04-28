class Display extends Component
{
    constructor()
    {
        super();
        this.introduction = new Component(null, false);
        this.introduction.AddClass("section");
        this.introduction.BackgroundImage("images/section1.jpg");
        this.introduction.BackgroundAttachment("fixed");

        this.name = new Component("span", true);
        this.name.AddClass("sectionName");
        this.name.GetElement().innerHTML = "Pradeep Jadhav";
        this.introduction.AddChild(this.name);

        this.role = new Component("span", true);
        this.role.AddClass("sectionRole");
        this.role.GetElement().innerHTML = "Software Engineer";
        this.introduction.AddChild(this.role);

        this.AddChild(this.introduction);

        this.aboutMe = new AboutMeSection();
        this.AddChild(this.aboutMe);

        this.certificateSection = new CertificateSection();
        this.AddChild(this.certificateSection);
        
        this.section3 = new Component(null, false);
        this.section3.AddClass("section");
        this.section3.BackgroundImage("images/section2.jpg");
        this.AddChild(this.section3);
    }

    Resize(width, height)
    {
        let y = 0
        this.introduction.Resize(width, SizeConstants.SECTION_HEIGHT);
        this.introduction.Place(0, y);
        y += this.introduction.GetHeight();

        this.aboutMe.Resize(width, SizeConstants.SECTION_HEIGHT_ABOUT_ME);
        this.aboutMe.Place(0, y);
        y += this.aboutMe.GetHeight();
        
        this.name.Resize(width * 0.8, 100);
        this.name.Place((this.introduction.GetElement().clientWidth - this.name.GetWidth()) / 2, (this.introduction.GetElement().clientHeight - this.name.GetHeight()) / 2);

        this.role.Resize(width / 2, 60);
        this.role.Place((this.introduction.GetElement().clientWidth - this.role.GetWidth()) / 2, (this.name.GetTop() + this.name.GetHeight() + CssConstants.PADDING6X));

        this.certificateSection.Resize(width, 650);
        this.certificateSection.Place(0, y);
        y += this.certificateSection.GetHeight();

        this.section3.Resize(width, SizeConstants.SECTION_HEIGHT);
        this.section3.Place(0, y);
        y += this.section3.GetHeight();        


        super.Resize(width, y);
    }
}