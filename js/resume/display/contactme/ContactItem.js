class ContactItem extends Component
{
    constructor(key, value)
    {
        super();
        this.AddClass("contactItem");

        this.key = new Component();
        this.key.AddClass("contactKey");
        this.key.GetElement().innerHTML = key;
        this.AddChild(this.key);

        this.value = new Component();
        this.value.AddClass("contactValue");
        this.value.GetElement().innerHTML = value;
        this.AddChild(this.value);
    }

    Resize(width, height)
    {
        let x = 0;     
        this.key.Resize(30, 30);
        this.key.Place(0, 0);        
        x += this.key.GetWidth() + 30;
        
        this.value.Resize(300, height);
        this.value.Place(x, 0);
        x += this.value.GetWidth() + CssConstants.PADDING2X;

        super.Resize(x, height);
    }
}