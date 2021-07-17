import $ from 'jquery';
import swal from 'sweetalert';


var maxcliqueans=0;

export function trial1(ele){
  
  if($(`#${ele}`).attr("fill")=="blue")
  {
    $(`#${ele}`).attr("fill","url(#personimage)");
  }
  else
    $(`#${ele}`).attr("fill","blue");
  
}


var num=4;
var finalsoln=0;
var store2=[];

export function gennodes(){
  var e = document.getElementById("numnodes")
 num=e.options[e.selectedIndex].text;


for(var i=1;i<=6;i++)
$(`#circ${i}`).attr("fill","url(#personimage)");

  var disp = document.getElementsByClassName('circle_nodes');
  for (var i = 0; i < num; i ++) {
    disp[i].style.display = 'block';

}
for(var i =num;i<disp.length;i++)
disp[i].style.display = 'none';


var sobox=document.getElementsByClassName('boxes');
for(var i =0;i<sobox.length;i++)
sobox[i].style.display='block';




}


var graph;
var adj;
var d;
var store;




function is_clique(b)
{

    // Run a loop for all set of edges
    for (var i = 1; i < b; i++) {
        for (var j = i + 1; j < b; j++)

            // If any edge is missing
            if (adj[store[i]][store[j]] == 0)
                return false;
    }
    return true;
}



function printfriends(m)
{
  
  store2=[];
    for (var i = 1; i < m; i++)
    {
      
      store2.push(store[i]);
    }

   
}


export function viewsoln(){
  // swal("Our First Alert", "With some body text!");
 
  for (var i = 0; i < finalsoln-1; i++){
   
    $(`#circ${store2[i]}`).attr("fill","green");
  }
}


export function checksol(){
  var cnt=0;
  var myans1=[];
  var actualans=[];
  for (var i = 1; i < finalsoln; i++){
    actualans.push(store2[i-1]);
  }



  for (var i = 1; i <=num; i++){
    if($(`#circ${i}`).attr("fill")=="blue")
    {
      cnt++;
      myans1.push(i);
    }


  }
  if(cnt<maxcliqueans)
  swal("There exists a larger group! Please select more Nodes", `Max Clique size is > ${cnt} `);

  else if(cnt>maxcliqueans)
    swal(`The clique is smaller than ${cnt}`, `Try again! `);

    else{
      myans1.sort(function(a, b){return a - b});
      actualans.sort(function(a, b){return a - b});
      var a;
      for ( a = 0; a <cnt; a++){
          if(myans1[a]!=actualans[a])

          break;

      }
      if(a==cnt)
      swal("Congratulations!", `Max group size is ${cnt} `);
      else {
        
        swal("Please try again", `You are very close! `);
      }

    }
}


function findCliques( i,  l,  s)
{
    // Check if any vertices from i+1 can be inserted
    for (var j = i + 1; j <= num - (s - l); j++)
  {
        // If the degree of the graph is sufficient
        if (d[j] >= s - 1) {

            // Add the vertex to store
            store[l] = j;

            // If the graph is not a clique of size k
            // then it cannot be a clique
            // by adding another edge
            if (is_clique(l + 1))

                // If the length of the clique is
                // still less than the desired size
                if (l < s)

                    // Recursion to add vertices
                    findCliques(j, l + 1, s);

                // Size is met
                else
                {
                  printfriends(l + 1);
                  finalsoln=l+1;

                }

        }
      }
}






function maxCliques(i, l)
{
    // Maximal clique size
    var max_ = 0;

    // Check if any vertices from i+1
    // can be inserted
    for (var j = i + 1; j <= num; j++) {

        // Add the vertex to store
        store[l] = j;

        // If the graph is not a clique of size k then
        // it cannot be a clique by adding another edge
        if (is_clique(l + 1)) {

            // Update max
            max_ = Math.max(max_, l);

            // Check if another edge can be added
            max_ = Math.max(max_, maxCliques(j, l + 1));
        }
    }
    return max_;
}





export function gengraph(){
var i,j,n,no;

for(i=1;i<=6;i++)
$(`#circ${i}`).attr("fill","url(#personimage)");

no=num*(num-1)/2;
//n=Math.floor((Math.random() * (no-num+1) ) + num) ;

n=Math.floor(Math.random() * (+no + 1 - +num/2)) + Math.floor(+num/2) +1 ;
if(n>no){
  n=no;
}



graph=[];
graph=new Array(n);
for(i=0;i<n;i++)
graph[i]=new Array(0,0);





var temp=-1,temp1=-1;
for(i=0;i<n;i++)
{

  temp1=Math.floor((Math.random() * num) + 1);

  temp=Math.floor((Math.random() * num) + 1);
  while(temp==temp1)
  {
    temp=Math.floor((Math.random() * num) + 1);
  }
  var f=0;
  for(var k=0;k<n;k++)
  {
    if(graph[k][0]==temp1&&graph[k][1]==temp || (graph[k][0]==temp&&graph[k][1]==temp1))
    {
      f=1;
      break;
    }
  }
  if(f==1)
  {
    i--;
    continue;
  }
  graph[i][0]=temp1;
  graph[i][1]=temp;
}



adj=[];
d=[];
store=[];

d=new Array(num+1);
store=new Array(num+1);

adj=new Array(num+1);
for(i=0;i<=num;i++)
adj[i]=new Array(num);

for(i=0;i<=num;i++){
  d[i]=0;
  store[i]=0;
  for(j=0;j<=num;j++)
  {
    adj[i][j]=0;
  }
 }


for (i = 0; i < n; i++) {
       adj[graph[i][0]][graph[i][1]] = 1;
       adj[graph[i][1]][graph[i][0]] = 1;
       d[graph[i][0]]++;
       d[graph[i][1]]++;
   }

var oldlines = document.getElementsByClassName('line');

for(var l =0;l<oldlines.length;l++)
oldlines[l].style.display = 'none';


for(i=1;i<=n;i++){
var line1 = $(`#line${i}`);


var mycircl1 = document.getElementById(`circ${graph[i-1][0]}`);
var mycircl2 = document.getElementById(`circ${graph[i-1][1]}`);


line1
  .attr('x1', mycircl1.cx.baseVal.value )
  .attr('y1', mycircl1.cy.baseVal.value )
  .attr('x2', mycircl2.cx.baseVal.value )
  .attr('y2', mycircl2.cy.baseVal.value ) ;

oldlines[i-1].style.display = 'block';

}



maxcliqueans=maxCliques(0, 1);

findCliques(0, 1, maxcliqueans);


}
