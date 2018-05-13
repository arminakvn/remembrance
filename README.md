## setup
This app is written for a [*NIX](https://en.wikipedia.org/wiki/Unix-like) environment only, all commands are run in terminal.
You need Nodejs and [npm](https://www.npmjs.com/) (Node Package Manager) for package management.     
In Mac, you can install npm using [Homebrew](http://brew.sh/)– Install Homebrew if you don't have it from their webpage.     
After brew installed, in your terminal:

```brew install npm```     




## develop     
For development, we will need to have a distributed version control system set up. See this [short intro](https://storage.googleapis.com/arminakhavan-dot-co/introgit/intro_to_git.html#6) for general information on git.



First, fork this repository to your Github account. You can do this by clicking on __Fork__ on the project's Github page at https://github.com/arminakvn/remembrance.git.       


After Forking to your account, __Clone__ the repository to your local machine by:      

``` git clone <your-github-repository>```


Point into the project folder in terminal:     



```cd remembrance```


Install the project dependencies with npm.   


```
npm install
```   
Run the node server with:    

```
npm start
```

Check out the application live on `localhost:8080` in your browser.
