import $ from 'jquery';
import swal from 'sweetalert';

var adj;
var d;
var store;
var graph;
var finalsoln=0;
var store2=[];
var numb=0;
var maxcliqueans=0;
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
  //console.log("fnal2a "+m);
  store2=[];
    for (var i = 1; i < m; i++)
    {
      //console.log( store[i] + " ");
      store2.push(store[i]);
    }

   // console.log(",");
}


function findCliques( i,  l,  s)
{
    // Check if any vertices from i+1 can be inserted
    for (var j = i + 1; j <= numb - (s - l); j++)
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
    for (var j = i + 1; j <= numb; j++) {

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




export function gengraph(num){
    var i,j,n,no;
    const dispgraph=[];
    no=num*(num-1)/2;
    numb=num;
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
    
    for(i=0;i<n;i++){
        
        dispgraph.push([graph[i][0],graph[i][1]]);
        //console.log();
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

maxcliqueans=maxCliques(0, 1);


findCliques(0, 1, maxcliqueans);
    
    return dispgraph;


}


export function viewsoln(){
    
    for (var i = 0; i < finalsoln-1; i++){
      
    //   $(`.node${store2[i]}`).css('background-color', 'green');
    // $(`.node${store2[i]}`).css('background-image', `url("greenimg.png")`);
    $(`.node${store2[i]}`).css('background-image', `linear-gradient(green, yellow)`);


    }
    swal( `Max group size is ${finalsoln-1}! `);

  }


  export function checksol(){
    var cnt=0;
    var myans1=[];
    var actualans=[];
    for (var i = 1; i < finalsoln; i++){
      actualans.push(store2[i-1]);
    }
  
  
  
    for (var i = 1; i <=numb; i++){
    //    if ($(`.node${i}`).css('background-image') ==`linear-gradient(blue, blue)`)
    if ($(`.node${i}`).css('height') ==`59px`)

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

