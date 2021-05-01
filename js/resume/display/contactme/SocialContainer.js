class SocialContainer extends Component
{
    constructor(key, value)
    {
        super();
        this.AddClass("socialContainer");

        this.linkedin = new Component();
        this.linkedin.AddClass("linkedin");
        this.linkedin.AddClass("social");
        this.linkedin.GetElement().onpointerup = () => {
            window.open("https://www.linkedin.com/in/pradeep-jadhav/");
        }
        this.linkedin.GetElement().innerHTML = `<i class="fab fa-linkedin"></i>`;
        this.AddChild(this.linkedin);

        this.github = new Component();
        this.github.AddClass("github");
        this.github.AddClass("social");
        this.github.GetElement().onpointerup = () => {
            window.open("https://github.com/Pradeep17Jadhav/");
        }
        this.github.GetElement().innerHTML = `<i class="fab fa-github"></i>`;
        this.AddChild(this.github);

        this.facebook = new Component();
        this.facebook.AddClass("facebook");
        this.facebook.AddClass("social");
        this.facebook.GetElement().onpointerup = () => {
            window.open("https://www.facebook.com/pradeep1jadhav");
        }
        this.facebook.GetElement().innerHTML = `<i class="fab fa-facebook"></i>`;
        this.AddChild(this.facebook);

        this.instagram = new Component();
        this.instagram.AddClass("instagram");
        this.instagram.AddClass("social");
        this.instagram.GetElement().onpointerup = () => {
            window.open("https://www.instagram.com/pradeep_jadhav/");
        }
        this.instagram.GetElement().innerHTML = `<i class="fab fa-instagram"></i>`;
        this.AddChild(this.instagram);
        
        this.hackerrank = new Component();
        this.hackerrank.AddClass("hackerrank");
        this.hackerrank.AddClass("social");
        this.hackerrank.GetElement().onpointerup = () => {
            window.open("https://www.hackerrank.com/PradeepJadhav");
        }
        this.hackerrank.GetElement().innerHTML = `<i class="fab fa-hackerrank"></i>`;
        this.AddChild(this.hackerrank);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let x = 0;
        this.linkedin.Resize(50, 50);
        this.linkedin.Place(x, 0);
        x += 60;

        this.github.Resize(50, 50);
        this.github.Place(x, 0);
        x += 60;
        
        this.facebook.Resize(50, 50);
        this.facebook.Place(x, 0);
        x += 60;
        
        this.instagram.Resize(50, 50);
        this.instagram.Place(x, 0);
        x += 60;
                
        this.hackerrank.Resize(50, 50);
        this.hackerrank.Place(x, 0);
        x += 60;

        super.Resize(x, height);
    }
}