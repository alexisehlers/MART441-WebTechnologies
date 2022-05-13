
var myViewFinderArray = new Array();

class ViewFinder {

    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
   
    toString() {
        return "Title: " + this.title + "<br>Image: " + this.image + "<br>Description: " + this.description + "<br>Author: " + this.author + "<br>Year: " + this.year;
    }
  
    get theTitle() {
        return this.title;
    }
    get theImage() {
        return this.image;
    }
    get theDescription() {
        return this.description;
    }
    get theAuthor() {
        return this.author;
    }
    get theYear() {
        return this.year;
    }
}

function initializeArray() {
    // first object from the class ViewFinder
    var myViewFinder = new ViewFinder + ("Members of the Sinn Fein party at the First Dail Eireann, Ireland’s first self-governing assembly.Hulton-Deutsch Collection/Corbis, Getty Images. 1916.")
    // second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("Followers of the Irish freedom fighter Eamon De Valera. Ireland. Associated Press. 1923.");
    // third object from the class Viewfinder
    var myViewFinder2 = new ViewFinder("Eamon de Valera, center, with several of his advisors. The other men are, left to right, Harry Boland; Art O’Brien, S.T. Kelly and Count O’Byrne. Dublin. Associated Press. 1922.");
    //forth object from the class Viewfinder
    var myViewFinder3 = new ViewFinder("A British soldier pushes a Catholic protester. Londonderry, Northern Ireland. Thopson/Agence France-Presse — Getty Images. 1972. ");
    // fifth object from the class Viewfinder
    var myViewFinder4 = new ViewFinder("Captured Irish rebels being marched through Dublin. Independent News and Media / Getty Images. 1916");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);
    // add the third object to the array
    myViewFinderArray.push(myViewFinder2);
    // add the forth object to the array
    myViewFinderArray.push(myViewFinder3);
    // add the fifth object to the array
    myViewFinderArray.push(myViewFinder4);



}


function accessInformation() {
  
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}