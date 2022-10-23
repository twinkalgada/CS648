
var submit = document.getElementById("submit");

var employees = [
	['John Doe','CFO',1234],
    ['Alice Mary', 'Product Manager', 1111],
    ['Mark Luke', 'Program Manager', 2345],
	['Dave Johnson', 'CEO', 7875],
    ['Jenny K','HR Manager',9843]
];
var tbody = document.createElement('tbody');
var table = document.querySelector("table");

function createTable(employees){
   "use strict";
   var i, k;

   if(employees.length==0)
   {
	document.getElementById("count").removeChild;
	document.getElementById("count").innerHTML = employees.length;  
   }


    for ( i = 0; i < employees.length; i += 1) {
        var employee = employees[i];
        var trow = document.createElement('tr');
        trow.id = 'tr';
         for (k = 0; k <= employee.length ; k += 1) {
            var td = document.createElement('td');
            if ( k == employee.length){
				var btn = document.createElement('input');
				btn.type = "button";
				btn.value="Delete";
				btn.className="del-btn";
				btn.onclick = function (){
					window.console.log(this.parentNode.parentNode.rowIndex);
					let index = this.parentNode.parentNode.rowIndex - 1;

					employees.splice(index,1);
					table.deleteRow(this.parentNode.parentNode.rowIndex);
					
					document.getElementById("count").removeChild;
					document.getElementById("count").innerHTML = employees.length;
                };
                td.appendChild(btn);
                trow.appendChild(td);
            } else {
                var text = document.createTextNode(employee[k]);
                td.appendChild(text);
                trow.appendChild(td);
            }
         }
         tbody.appendChild(trow);
    }
   table.appendChild(tbody);
}   
function validate() {
    "use strict";
    var error = 0;
    window.console.log("Submit was clicked");
    var emp_name = document.getElementById("emp_name");
    var emp_title = document.getElementById("emp_title");
    var emp_extension = document.getElementById("emp_extension");
    document.getElementById('error_ename').innerHTML = '';
    document.getElementById('error_emptitle').innerHTML = '';
    document.getElementById('error_empextension').innerHTML = '';
    if (emp_name.value === "") {
        error += 1;
        document.getElementById('error_ename').innerHTML = 'Please Enter Name';
    }
    if (emp_title.value === "") {
        error += 1;
        document.getElementById('error_emptitle').innerHTML = 'Please Enter Title';
    }
    if (emp_extension.value === "") {
        error += 1;
        document.getElementById('error_empextension').innerHTML = 'Please Enter Extension';
    }

    if (error === 0) {
		var newArray = [emp_name.value, emp_title.value, emp_extension.value];
		employees.push(newArray);
		var trow = document.createElement('tr');
		trow.id='tr';
		for (var k = 0; k <= newArray.length; k += 1) {
			var td = document.createElement('td');
			if ( k === newArray.length){
				var btn = document.createElement('input');
				btn.type = "button";
				btn.value = "Delete";
				btn.className="del-btn";
				btn.onclick = function (){
					let index = this.parentNode.parentNode.rowIndex - 1;
					window.console.log();
					employees.splice(index,1);
					table.deleteRow(this.parentNode.parentNode.rowIndex);
					document.getElementById("count").removeChild;
					document.getElementById("count").innerHTML = employees.length;
				};            
				td.appendChild(btn);
				trow.appendChild(td);
			} 
			else {
				var text = document.createTextNode(newArray[k]);
				td.appendChild(text);
				trow.appendChild(td);
			}
		}
		tbody.appendChild(trow);
		document.getElementById("count").removeChild;
		document.getElementById("count").innerHTML = employees.length;
		emp_name.value='';
		emp_title.value='';
		emp_extension.value='';
	}
}
submit.addEventListener("click", validate);
document.getElementById("count").innerHTML = employees.length;
createTable(employees);