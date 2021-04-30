class CertificateViewer extends Component
{
    constructor()
    {
        super();
        this.AddClass("certificateViewer");

        this.titleBar = new Component();
        this.title = new Component();
        this.title.GetElement().innerHTML = "DEMO TITLEEE";

        this.titleBar.AddChild(this.title);
        this.btnClose = new Component("button");
        this.btnClose.GetElement().onpointerup = (e) => {
            //handle
        }
        this.titleBar.AddChild(this.btnClose);
        this.AddChild(this.titleBar);

        this.certificateViewer = new Component();
        this.certificateViewer.AddClass("viewer");
        this.AddChild(this.certificateViewer);

        this.navigator = new Component();
        this.btnPrev = new Component("button");
        this.navigator.AddChild(this.btnPrev);
        this.btnVerify = new Component("button");
        this.navigator.AddChild(this.btnVerify);
        this.btnNext = new Component("button");
        this.navigator.AddChild(this.btnNext);
        this.AddChild(this.navigator);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let x = CssConstants.PADDING4X;
        let y = CssConstants.PADDING4X;
        let availableWidth = width - 2*x;

        this.titleBar.Resize(availableWidth, 50);
        this.titleBar.Place(x, y);
        y += this.titleBar.GetHeight() + CssConstants.PADDING4X;

        this.btnClose.Resize(50, 50);
        this.btnClose.Place(availableWidth - this.btnClose.GetWidth(), 0);
        
        this.title.Resize(availableWidth - this.btnClose.GetWidth(), 50);
        this.title.Place(0, 0);

        this.certificateViewer.Resize(availableWidth, 400);
        this.certificateViewer.Place(x, y);
        y += this.certificateViewer.GetHeight() + CssConstants.PADDING4X;


        this.navigator.Resize(availableWidth, 50);
        this.navigator.Place(x, y);
        y += this.navigator.GetHeight() + CssConstants.PADDING4X;
        
        this.btnVerify.Resize(180, 50);
        this.btnVerify.Place((this.navigator.GetWidth() - this.btnVerify.GetWidth()) / 2, 0);

        this.btnPrev.Resize(150, 50);
        this.btnPrev.Place(this.btnVerify.GetLeft() - this.btnPrev.GetWidth() - CssConstants.PADDING4X, 0);

        this.btnNext.Resize(150, 50);
        this.btnNext.Place(this.btnVerify.GetLeft() + this.btnVerify.GetWidth() + CssConstants.PADDING4X, 0);

        super.Resize(width, y);

    }
}