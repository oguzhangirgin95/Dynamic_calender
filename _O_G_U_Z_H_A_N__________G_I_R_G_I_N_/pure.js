
function my(come)
{
var calender='';
var day=0;
var data=come;


for(var row=0; row<6; row++)
{
    if(row==0)
    {
        calender=calender+'<tr>';
        calender=calender+'<th>'+'<center>'+'Pazartesi'+'</center>'+'</th>'
        calender=calender+'<th>'+'<center>'+'Sali'+'</center>'+'</th>'
        calender=calender+'<th>'+'<center>'+'Carsamba'+'</center>'+'</th>'
        calender=calender+'<th>'+'<center>'+'Persembe'+'</center>'+'</th>'
        calender=calender+'<th>'+'<center>'+'Cuma'+'</center>'+'</th>'
        calender=calender+'<th>'+'<center>'+'Cumartesi'+'</center>'+'</th>'
        calender=calender+'<th>'+'<center>'+'Pazar'+'</center>'+'</th>'
        calender=calender+'</tr>'
    }
    else
    {
    calender=calender+'<tr>';
    var control_condition=0;
    var control_crush=0;
    var total_day=0;
    for(var column=0; column<7; column++)
    {
        day=day+1;
       
        for(var i=0; i<data.length; i++)
        {
            if(data[i].date && data[i].enddate)
            {
                var eventday_start_control = data[i].date.split("/");
                var eventday_finish_control = data[i].enddate.split("/");
                 total_day=eventday_finish_control[2]-eventday_start_control[2]+1;
                if(eventday_start_control[2]==day)
                {
                    calender=calender+'<td>'+'<center>'+'<p>'+'<a>'+data[i].title+'</a>'+'</p>'+'</center>'+'<center>'+day+'</center>'+'</td>';
                    control_condition=1;
                    control_crush=1;
                    total_day=total_day-1;
                }
            }
             else if(data[i].date && !data[i].enddate)
            {
                if(control_crush==1)
                {
                    var eventday_start_control=data[i].date.split("/");
                    if(eventday_start_control[2]==day)
                    {
                        calender=calender+'<td>'+'<center>'+'<p class=def>'+'<a class=def>'+'</a>'+'</p>'+'</center>'+'<center>'+'<p class=top >'+'<a>'+data[i].title+'</a>'+'</p>'+'</center>'+'<center>'+day+'</center>'+'</td>';
                        control_condition=1;
                    }
                    total_day=total_day-1;
                }
                if(control_crush==0)
                {
                    var eventday_start_control=data[i].date.split("/");
                    if(eventday_start_control[2]==day)
                    {
                    calender=calender+'<td>'+'<center>'+'<p>'+'<a>'+data[i].title+'</a>'+'</p>'+'</center>'+'<center>'+day+'</center>'+'</td>';
                    control_condition=1;
                    }
                }
            }
        }
        if(total_day==0)
        {
            control_crush=0;
        }
        if(control_crush==1 && control_condition==0)
        {
            calender=calender+'<td>'+'<center>'+'<p >'+'<a class=def>'+'</a>'+'</p>'+'</center>'+'<center>'+day+'</center>'+'</td>';
            control_condition=1;
            total_day=total_day-1;

        }
        if(control_crush==0)
        {
            if(control_condition==0)
            {
                 calender=calender+'<td>'+'<center>'+day+'</center>'+'</td>';
            }
        }
        control_condition=0;
        if(day==30)
        {
            break;
        }
    }
    calender=calender+'</td>'
    }
}

document.write('<table >'+calender+'</table>');
}