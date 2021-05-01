class ContactMeSection extends Component
{
    constructor()
    {
        super();

        this.AddClass("section");
        this.AddClass("contactMeSection");
        
        this.title = new Component();
        this.title.AddClass(CssClassConstants.SECTION_TITLE);
        this.title.SetFontSize(FontSizeConstants.SECTION_TITLE);
        this.title.GetElement().innerHTML = "GET IN TOUCH!";
        this.AddChild(this.title);

        this.description = new Component();
        this.description.AddClass(CssClassConstants.SECTION_DESCRIPTION);
        this.description.GetElement().innerHTML = `Contact me anytime to have a discussion.`;
        this.AddChild(this.description);

        this.mobile = new ContactItem(`<i class="fa fa-phone" aria-hidden="true"></i>`, "+91 9664523347");
        this.AddChild(this.mobile);

        this.email = new ContactItem(`<i class="fa fa-at" aria-hidden="true"></i>`, "pradee17jadhav@gmail.com");
        this.AddChild(this.email);

        this.location = new ContactItem(`<i class="fas fa-map-marker-alt"></i>`, "Dadar, Mumbai");
        this.AddChild(this.location);

        this.socialContainer = new SocialContainer();
        this.AddChild(this.socialContainer);


    }

    Resize(width, height)
    {
        super.Resize(600, 600);

        let y = 50;     
        this.title.SetWidth(600);
        this.title.Place((width - this.title.GetElement().clientWidth) / 2, y);        
        y += this.title.GetElement().clientHeight + CssConstants.PADDING3X;
        
        this.description.SetWidth(600);
        this.description.Place((width - this.description.GetElement().clientWidth) / 2, y);
        y += this.description.GetElement().clientHeight + 50;

        this.mobile.Resize(500, 30);
        this.mobile.Place((width - this.mobile.GetElement().clientWidth) / 2, y);
        y += this.mobile.GetElement().clientHeight + 15;

        this.email.Resize(500, 30);
        this.email.Place((width - this.email.GetElement().clientWidth) / 2, y);
        y += this.email.GetElement().clientHeight + 15;

        this.location.Resize(500, 30);
        this.location.Place((width - this.location.GetElement().clientWidth) / 2, y);
        y += this.location.GetElement().clientHeight + 30;

        this.socialContainer.Resize(500, 50);
        this.socialContainer.Place((600 -this.socialContainer.GetWidth()) / 2, y);
        y += this.socialContainer.GetElement().clientHeight + 30;

        super.Resize(600, y);
    }
}