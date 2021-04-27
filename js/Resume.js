class Resume extends Main
{
    constructor(parent)
    {
        super(parent);
        this.header = new Header();
        this.AddChild(this.header);

        this.container = new Display();
        this.AddChild(this.container);

        this.footer = new Footer();
        this.AddChild(this.footer);
    }
}