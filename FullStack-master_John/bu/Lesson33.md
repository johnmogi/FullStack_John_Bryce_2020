להשלים 
{/*two-way bininding */}

two way binding react
תנאים ולולאות

(תנאי) ? value1 : value2

<p>{this.isWinter() ? "Avocados" : "no Avocados"} </p>
                    {this.isWinter() && <p>oranges</p>} {/*conditional rendering /*}


private isWinter():boolean{
    const date = New date();
    const month = date.getMonth()+1;
    return month == 12 || month <=3;
    
}

