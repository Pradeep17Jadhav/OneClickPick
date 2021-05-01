class CertificateSection extends Component
{
    constructor()
    {
        super();

        this.title = new Component();
        this.title.AddClass(CssClassConstants.SECTION_TITLE);
        this.title.SetFontSize(FontSizeConstants.SECTION_TITLE);
        this.title.GetElement().innerHTML = "Certificates";
        this.AddChild(this.title);

        this.description = new Component();
        this.description.AddClass(CssClassConstants.SECTION_DESCRIPTION);
        this.description.GetElement().innerHTML = `Here are some of my Certificates!`;
        this.AddChild(this.description);


        this.certificateData = {
            0: {"index": 0, "name": "Programming with Python", "verify": "https://trainings.internshala.com/verify_certificate"},
            1: {"index": 1, "name": "Python for Data Science", "verify": "https://courses.cognitiveclass.ai/certificates/fd349dd20d31467c9ba0705af8716cb3"},
            2: {"index": 2, "name": "The Web Developer Bootcamp", "verify": "https://www.udemy.com/certificate/UC-CBZYQHZQ/"},
            3: {"index": 3, "name": "Machine Learning with Python", "verify": "https://courses.cognitiveclass.ai/certificates/56ee20f03f334855989651e145d268b5"},
            4: {"index": 4, "name": "Machine Learning A-Z: Hands-On Python & R In Data Science", "verify": "https://www.udemy.com/certificate/UC-JY3QZ8YD/"},
            5: {"index": 5, "name": "Machine Learning by Andrew N.G.", "verify": "https://www.coursera.org/account/accomplishments/verify/832NRQ87FRCG"},
            6: {"index": 6, "name": "Introduction to TensorFlow for AI, ML, and DL", "verify": "https://www.coursera.org/account/accomplishments/verify/A8C7ESBQG383"},
            7: {"index": 7, "name": "Convolutional Neural Networks in TensorFlow", "verify": "https://www.coursera.org/account/accomplishments/verify/RH32NDER9VR8"},
            8: {"index": 8, "name": "Natural Language Processing in TensorFlow", "verify": "https://www.coursera.org/account/accomplishments/verify/NZRC6889XB6C"},
            9: {"index": 9, "name": "Hackerrank Python Assessment", "verify": "https://www.hackerrank.com/certificates/8691963192e8"},
            10: {"index": 10, "name": "Hackerrank Problem Solving Assessment", "verify": "https://www.hackerrank.com/certificates/3017e3d571e1"},
            11: {"index": 11, "name": "Hackerrank JavaScript Assessment", "verify": "https://www.hackerrank.com/certificates/d2c4eeadcacc"},
        }

        this.listCertificateBox = [];
        for(let key in this.certificateData)
        {
            let i = parseInt(key);
            let certificateBox = new CertificateBox(i);
            certificateBox.GetElement().onpointerup = (e) => {
                this.parent.parent.ShowCertificateViewer(this.certificateData, i);
            }
            this.certificateData[i]["certificateBox"] = certificateBox;
            this.AddChild(certificateBox);
            this.listCertificateBox.push(certificateBox);
        }
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let y = 50;
        this.title.SetWidth(600);
        this.title.Place((width - this.title.GetElement().clientWidth) / 2, y);
        y += this.title.GetElement().clientHeight + CssConstants.PADDING3X;
        
        this.description.SetWidth(600);
        this.description.Place((width - this.description.GetElement().clientWidth) / 2, y);
        y += this.description.GetElement().clientHeight + CssConstants.PADDING7X;

        let thumbnailWidth, thumbnailHeight;
        let perLineCount = 0;
        for(let key in this.certificateData)
        {
            let i = parseInt(key);
            if(width < 720)
            {
                perLineCount = 2;
                thumbnailWidth = width / 2;
                thumbnailHeight = thumbnailWidth / 1.4243;
                this.listCertificateBox[i].Resize(thumbnailWidth, thumbnailHeight);

                if(i % 2 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else
                {
                    this.listCertificateBox[i].Place(width / 2, y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
            }
            else if(width < 1080)
            {
                perLineCount = 4;
                thumbnailWidth = width / 4;
                thumbnailHeight = thumbnailWidth / 1.4243;

                this.listCertificateBox[i].Resize(thumbnailWidth, thumbnailHeight);
                if(i % 4 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else if(i % 4 == 3)
                {
                    this.listCertificateBox[i].Place((width / 4) * (i % 4), y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
                else
                {
                    this.listCertificateBox[i].Place((width / 4) * (i % 4), y);
                }
            }
            else
            {
                perLineCount = 6;
                thumbnailWidth = width / 6;
                thumbnailHeight = thumbnailWidth / 1.4243;

                this.listCertificateBox[i].Resize(thumbnailWidth, thumbnailHeight);
                if(i % 6 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else if(i % 6 == 5)
                {
                    this.listCertificateBox[i].Place((width / 6) * (i % 6), y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
                else 
                {
                    this.listCertificateBox[i].Place((width / 6) * (i % 6), y);
                }
            }
            if(i == this.listCertificateBox.length - 1 && this.listCertificateBox.length % perLineCount != 0)
                y += this.listCertificateBox[this.listCertificateBox.length - 1].GetHeight() + 20;
        }
        super.Resize(width, y + 20);
    }
}

class CertificateBox extends Component
{
    constructor(certIndex)
    {
        super();
        this.AddClass("certificateBox");

        this.certificate = new Certificate();
        this.certificate.SetCourseName("Introduction to TensorFlow");
        this.certificate.SetPlatform("Coursera");
        this.certificate.SetCertificateImage("resources/certificates/thumbnails/thumbnail_" + (certIndex + 1) + ".jpg");
        this.AddChild(this.certificate);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        this.certificate.Resize(width, height);
    }
}