class Display extends Component
{
    constructor()
    {
        super();
        
        //list to maintain all sections added in dom
        this.sectionList = [];

        this.introductionSection = new Introduction();
        this.sectionList.push(this.introductionSection);
        this.AddChild(this.introductionSection);

        this.aboutMeSection = new AboutMeSection();
        this.sectionList.push(this.aboutMeSection);
        this.AddChild(this.aboutMeSection);

        this.certificateSection = new CertificateSection();
        this.sectionList.push(this.certificateSection);
        this.AddChild(this.certificateSection);
        
        this.skillsSection = new SkillsSection();
        this.sectionList.push(this.skillsSection);
        this.AddChild(this.skillsSection);
        

        this.section3 = new Component(null, false);
        this.section3.AddClass("section");
        this.section3.BackgroundImage("resources/images/section2.jpg");
        this.sectionList.push(this.section3);
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
        
        this.skillsSection.Resize(width, 650);
        this.skillsSection.Place(0, y);
        y += this.skillsSection.GetHeight();

        this.section3.Resize(width, SizeConstants.SECTION_HEIGHT);
        this.section3.Place(0, y);
        y += this.section3.GetHeight();        


        super.Resize(width, y);
    }

    GetSectionList()
    {
        return this.sectionList;
    }
}