class CertificateViewer extends Component
{
    constructor()
    {
        super();
        this.AddClass("certificateViewer");
        this.activeIndex = 0;

        this.titleBar = new Component();
        this.titleBar.AddClass("titlebar");
        
        this.title = new Component();
        this.title.AddClass("title");
        this.title.GetElement().innerHTML = "Certificate";
        this.titleBar.AddChild(this.title);

        this.counter = new Component();
        this.counter.AddClass("title");
        this.counter.GetElement().innerHTML = "";
        this.titleBar.AddChild(this.counter);

        this.btnClose = new Component("button");
        this.btnClose.GetElement().innerHTML = `<i class="far fa-times"></i>`;
        this.btnClose.AddClass("btnClose");
        this.btnClose.GetElement().onpointerup = (e) => {
            this.parent.CloseCertificateViewer();
        }
        this.titleBar.AddChild(this.btnClose);
        this.AddChild(this.titleBar);

        this.certificateViewer = new Component();
        this.certificateViewer.AddClass("viewer");
        this.AddChild(this.certificateViewer);

        this.navigator = new Component();
        this.navigator.AddClass("navigator");

        this.btnPrev = new Component("button");
        this.btnPrev.GetElement().innerHTML = "Previous";
        this.btnPrev.GetElement().onpointerup = (e) => {
            this.ShowPrevCertificate();
        }
        this.navigator.AddChild(this.btnPrev);

        this.btnVerify = new Component("button");
        this.btnVerify.GetElement().innerHTML = "Verify Certificate";
        this.btnVerify.GetElement().onpointerup = (e) => {
            window.open(this.certificateData[this.index].verify);
        }
        this.navigator.AddChild(this.btnVerify); 

        this.btnNext = new Component("button");
        this.btnNext.GetElement().innerHTML = "Next";
        this.btnNext.GetElement().onpointerup = (e) => {
            this.ShowNextCertificate();
        }
        this.navigator.AddChild(this.btnNext);
        this.AddChild(this.navigator);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let x = CssConstants.PADDING4X;
        let y = 0;
        let availableWidth = width - 2*x;
        let viewerHeight = availableWidth / 1.4243;

        this.titleBar.Resize(width, 50);
        this.titleBar.Place(0, y);
        y += this.titleBar.GetHeight() + CssConstants.PADDING5X;

        this.btnClose.Resize(30, 30);
        this.btnClose.Place(availableWidth - this.btnClose.GetWidth(), 10);
        
        this.counter.Resize(60, 30);
        this.counter.Place(availableWidth - this.btnClose.GetWidth() - this.counter.GetWidth(), 10);
        
        this.title.Resize(availableWidth - this.btnClose.GetWidth() - this.counter.GetWidth() - 25, 30);
        this.title.Place(20, 10);

        this.certificateViewer.Resize(availableWidth, viewerHeight);
        this.certificateViewer.Place(x, y);
        y += this.certificateViewer.GetHeight() + CssConstants.PADDING3X;


        this.navigator.Resize(width, 80);
        this.navigator.Place(0, y);
        y += this.navigator.GetHeight();
        
        this.btnVerify.Resize(180, 50);
        this.btnVerify.Place((this.navigator.GetWidth() - this.btnVerify.GetWidth()) / 2, 15);

        this.btnPrev.Resize(100, 50);
        this.btnPrev.Place(this.btnVerify.GetLeft() - this.btnPrev.GetWidth() - CssConstants.PADDING4X, 15);

        this.btnNext.Resize(100, 50);
        this.btnNext.Place(this.btnVerify.GetLeft() + this.btnVerify.GetWidth() + CssConstants.PADDING4X, 15);

        super.Resize(width, y);
    }

    SetCertificateData(certificateData, index)
    {
        this.certificateData = certificateData;
        this.index = index;
    }

    Update()
    {
        this.title.GetElement().innerHTML = this.certificateData[this.index].name;
        this.counter.GetElement().innerHTML = (this.index + 1) + "/" + Object.keys(this.certificateData).length;
        this.certificateViewer.SetBackgroundImage("resources/certificates/fullres/cert_" + (this.index + 1) + ".jpg");
    }
    
    ShowNextCertificate()
    {
        if(this.index++ == Object.keys(this.certificateData).length - 1)
            this.index = 0;
            
        this.Update(this.index);
    }

    
    ShowPrevCertificate()
    {
        if(--this.index == -1)
            this.index = Object.keys(this.certificateData).length - 1;
            
        this.Update(this.index);
    }
}