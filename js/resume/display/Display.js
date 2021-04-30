class Display extends Component
{
    constructor()
    {
        super();
        this.introductionSection = new Introduction();
        this.AddChild(this.introductionSection);

        this.aboutMeSection = new AboutMeSection();
        this.AddChild(this.aboutMeSection);

        this.certificateSection = new CertificateSection();
        this.AddChild(this.certificateSection);
        
        this.section3 = new Component(null, false);
        this.section3.AddClass("section");
        this.section3.BackgroundImage("resources/images/section2.jpg");
        this.AddChild(this.section3);
    }

    Resize(width, height)
    {
        let y = 0;
        this.introductionSection.Resize(width, SizeConstants.SECTION_HEIGHT);
        this.introductionSection.Place(0, y);
        y += this.introductionSection.GetHeight();

        this.aboutMeSection.Resize(width, SizeConstants.SECTION_HEIGHT_ABOUT_ME);
        this.aboutMeSection.Place(0, y);
        y += this.aboutMeSection.GetHeight();

        this.certificateSection.Resize(width, 650);
        this.certificateSection.Place(0, y);
        y += this.certificateSection.GetHeight();

        this.section3.Resize(width, SizeConstants.SECTION_HEIGHT);
        this.section3.Place(0, y);
        y += this.section3.GetHeight();        


        super.Resize(width, y);
    }

 
}