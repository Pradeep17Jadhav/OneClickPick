class Resume extends Main
{
    constructor(parent)
    {
        super(parent);
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

        this.display.Resize(width, height)
        this.display.Place(0, 70);

        this.footer.Resize(width, 70);
    }
}