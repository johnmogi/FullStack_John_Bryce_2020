Single page application : react
angular 2010: google
react 2011: FB

cls - ניקוי טרמינל 
create-react-app -V

npm i -g create-react-app

.open up a new folder- in src folder.
.name it components
.new folder- layout
.2 files- layout.tsx + layout.css
.(use intellisense mostly from now on)
[BASE TEMPLATE]
LAYOUT.TSX:

import React, { Component } from "react";
import "./layout";

export class Layout extends Component {
  public render(): JSX.Element {
    return <div className="layout"></div>;
  }
}

[BASE INDEX.TSX]

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Layout } from './components/layout/layout';

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Layout />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


[Layout update]
import React, { Component } from "react";
import "./layout";
import { Header } from "../header/header";

export class Layout extends Component {
  public render(): JSX.Element {
    return (
      <div className="layout">
        <header>
          <Header />
        </header>
      </div>
    );
  }
}
build a header for test.
[header.tsx]
import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  public render(): JSX.Element {
    return <div className="header"></div>;
  }
}




integrate bootstrap

code . - open VS

create-react-app shoes-store --typescript
create-react-app coinsapp --typescript

create-react-app  יצירת פרוייקט
shoes-store שם הפרוייקט, קייס סנסטיב
 --typescript צורת הכתיבה

index.html- העמוד
app --> LAYOUT: הסידור הכללי של הדף / תבנית


bonus- gh pages:
npm install gh-pages --save-dev

https://johnmogi.github.io/puppies_react/

https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f


הלינק הזה מצוין רק להזהר מהסוף,
לא לעשות איניט לתיקייה פשוט להריץ את הבילד
ז"א שכל זה לא נכון:

Now, create a remote GitHub repository with your app name and go back initialize this
git init
add it as remote
git remote add origin git@github.com:Yuribenjamin/my-app.git

מדהים!
