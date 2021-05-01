class CertificateViewer extends Component
{
    constructor()
    {
        super();
        this.AddClass("certificateViewer");

        this.titleBar = new Component();
        this.title = new Component();
        this.title.AddClass("title");
        this.title.GetElement().innerHTML = "Machine Learning Demo Certificate Name";

        this.titleBar.AddChild(this.title);
        this.titleBar.AddClass("titlebar");
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
        this.btnPrev = new Component("button");
        this.btnPrev.GetElement().innerHTML = "Previous";
        this.navigator.AddChild(this.btnPrev);
        this.btnVerify = new Component("button");
        this.btnVerify.GetElement().innerHTML = "Verify Certificate";
        this.navigator.AddChild(this.btnVerify);        
        this.btnNext = new Component("button");
        this.btnNext.GetElement().innerHTML = "Next";
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
        
        this.title.Resize(availableWidth - this.btnClose.GetWidth(), 30);
        this.title.Place(20, 10);

        this.certificateViewer.Resize(availableWidth, viewerHeight);
        this.certificateViewer.Place(x, y);
        y += this.certificateViewer.GetHeight() + CssConstants.PADDING5X;


        this.navigator.Resize(availableWidth, 50);
        this.navigator.Place(x, y);
        y += this.navigator.GetHeight() + CssConstants.PADDING5X;
        
        this.btnVerify.Resize(180, 50);
        this.btnVerify.Place((this.navigator.GetWidth() - this.btnVerify.GetWidth()) / 2, 0);

        this.btnPrev.Resize(150, 50);
        this.btnPrev.Place(this.btnVerify.GetLeft() - this.btnPrev.GetWidth() - CssConstants.PADDING4X, 0);

        this.btnNext.Resize(150, 50);
        this.btnNext.Place(this.btnVerify.GetLeft() + this.btnVerify.GetWidth() + CssConstants.PADDING4X, 0);

        super.Resize(width, y);
    }

    SetSelectedIndex(index)
    {
        this.certificateViewer.SetBackgroundImage("resources/certificates/fullres/cert_" + (index + 1) + ".jpg");
    }
}