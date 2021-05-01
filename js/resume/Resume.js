class Resume extends Main
{
    constructor(parent, docElement)
    {
        super(parent);
        this.parentEl = parent;
        this.docElement = docElement;
        this.RemoveClass("box");

        
        this.blocker = new Component();
        this.blocker.AddClass("blocker");

        this.AddChild(this.blocker);
        this.blocker.Hide();

        this.certificateViewer = new CertificateViewer();
        this.AddChild(this.certificateViewer);
        this.certificateViewer.Hide();

        this.header = new Header();
        this.AddChild(this.header);

        this.display = new Display();
        this.AddChild(this.display);

        this.footer = new Footer();
        this.AddChild(this.footer);

        this.Resize(parent.clientWidth, parent.clientHeight);
    }

    Resize(width, height)
    {
        super.Resize(width, height)
        this.header.Resize(width, 70);

        let y = 70;
        this.display.Resize(width, height)
        this.display.Place(0, y);
        y += this.display.GetHeight();

        this.footer.Resize(width, 70);
        this.footer.Place(0, y);

        let size = width - 50;
        if(size > 1024)
            size = 1024;
        this.certificateViewer.Resize(size, size);
        this.certificateViewer.Place((width - this.certificateViewer.GetWidth()) / 2, 50);

        this.blocker.Resize(this.parentEl.clientWidth, this.parentEl.clientHeight);
        this.blocker.Place(0, 0);
    }

    MoveTo(target)
    {
        let top = 0;
        switch(target)
        {
            case "About Me":
                top = this.display.aboutMeSection.GetTop();
                break;
            case "Certificates":
                top = this.display.certificateSection.GetTop();
                break;
            case "Skills":
                top = this.display.skillsSection.GetTop();
                break;
            case "Projects":
                top = this.display.projectsSection.GetTop();
                break;
            case "Contact":
                top = this.display.contactMeSection.GetTop();
                break;
            default:
                top = 0;
        }

        this.docElement.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }

    OnScroll(e)
    {
        if(this.certificateViewer.isVisible())
        {
            this.docElement.scrollTop = this.scrollTop;
            return;
        }
        this.scrollTop = this.docElement.scrollTop;

        let scrollTop = this.docElement.scrollTop;
        let sectionList = this.display.GetSectionList();
        for(let i = 0; i < sectionList.length; i++)
        {
            if(scrollTop >= sectionList[i].GetTop())
            {
                this.header.SetActiveSection(i);
            }
        }
    }

    ShowCertificateViewer(certificateData, index)
    {
        this.certificateViewer.RemoveClass("hidden");
        this.certificateViewer.Show();
        this.certificateViewer.SetCertificateData(certificateData, index);
        this.certificateViewer.Update(index);
        this.blocker.Show();
        
        this.Resize(this.parentEl.clientWidth, this.parentEl.clientHeight);
    }

    CloseCertificateViewer()
    {       
        let self = this;
        this.certificateViewer.RemoveClass("visible");
        this.certificateViewer.AddClass("hidden");
        this.blocker.Hide();
        setTimeout(function(){
            self.certificateViewer.Hide();
        }, 500);
    }
}