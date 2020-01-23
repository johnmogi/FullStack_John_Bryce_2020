// Generics

class SMS<T>{
    public phone:string;
    public message:T;
}
---***---

state
הדאטא של ה
component
לדוגמא:
רכיב המציג מוצר 1
אובייקט מוצר
לדוגמא רכיב המוציג טבלת מוצרים. ה
STATE
    שלויהיה אוסף מוצרים
    

---***---
props
המידע הנשלח ל
component
מבחוץ

<USER />
parent component
child component

ההורה יכול לשלוח מידע ל
child


1.export class Cat extends Component- אין לנו פרופס ואין לנו סטייט
2.component- סוג הפרופס
3.compenent <any, state> אין לנו פרופס ויש לנו סטייט
4.component<סוג הפרופס, סוג הסטייט>

BINDING
קישור בין מקור ליעד.
כל שינוי של המקור גורם מיידית לשינוי היעד
מקור -> BINDING -< יעד

ישנם 4 סוגי בינדינג
INTERPOLATION
PROPERTY BINDING - מאפיין תגית
ערך = 
EVENT BINDING
קריאה לפונקציה הקיימת במחלקה מאירוע של תגית
HTML


IIFE - immediately Invoked Function Expression

function f(){
    }

(function(){
  function f(){
    } 
})();

