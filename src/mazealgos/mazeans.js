import swal from 'sweetalert';

let num=0;
let n=0;
var found=false;
var blockcells=new Map();
let animations=[];
let removeanims=[];

class Queue extends Array {
    enqueue(val) {
        this.push(val);
    }

    dequeue() {
        return this.shift();
    }

    peek() {
        return this[0];
    }

    isEmpty() {
        return this.length === 0;
    }
}

class Stack extends Array {
    peek() {
        return this[this.length -1];
    }

    isEmpty() {
        return this.length === 0;
    }
}



let q = new Queue();
let stck=new Stack();
let path=[];
let visited=[]; 


function getneighbours(ele)
{
 var i,vert;

 let direction=[1,n,-n,-1];
 for(i=0;i<4;i++)
 {
     vert=ele+direction[i];

     if(vert>=0&&vert<num&&visited[vert]!=1&&!blockcells.has(vert))
     {
         if((ele%n==0&&vert==ele-1)||(vert%n==0&&ele==vert-1))
             continue;
         else{

         q.enqueue(vert);
         visited[vert]=1;
         path[vert]=ele;
         animations.push([vert]);
         }

     }
 }
}




function dfsgetneighbours(ele)
{
 var i,vert;

 let direction=[1,n,-n,-1];
 for(i=0;i<4;i++)
 {
     vert=ele+direction[i];

     if(vert>=0&&vert<num&&visited[vert]!=1&&!blockcells.has(vert))
     {
         if((ele%n==0&&vert==ele-1)||(vert%n==0&&ele==vert-1))
             continue;
         else{

         stck.push(vert);
         visited[vert]=1;
         path[vert]=ele;
         animations.push([vert]);
         //console.log(vert);
        removeanims.push(vert);

         }

     }
 }
}





export function bfspath(src,dst,ncols,blocks){
num=ncols**2;
n=ncols;
path=[];
visited=[];
while(!q.isEmpty())
{
    q.dequeue();
}

for(var x=0;x<num;x++)
{
    path.push([-1]);
    visited.push([0]);
}
found=false;
animations=[];

blockcells=new Map();
for(var y=0;y<blocks.length;y++)
{
    blockcells.set(blocks[y],blocks[y]);
}


    var ele=src;

    q.enqueue(src);
    visited[src]=1;

    while(!q.isEmpty())
    {
        ele=q.peek();
        animations.push([ele,ele]);
        q.dequeue();
        animations.push([ele,ele]);


        if(ele==dst)
        {
            found=true;
            break;
        }
     getneighbours(ele);

    }
   

    if(found)
    {
    var jj=dst;
    while(jj!=-1)
    {

        animations.push([jj,jj,jj]);
        jj=path[jj];
    }
    
   
}
else{
swal("No Path exists!","Try another maze");
return 0;

}


    return animations

}


export function dfspath(src,dst,ncols,blocks)
{
num=ncols**2;
n=ncols;
path=[];
visited=[];
while(!stck.isEmpty())
{
    stck.pop();
}

for(var x=0;x<num;x++)
{
    path.push([-1]);
    visited.push([0]);
}
found=false;
animations=[];
removeanims=[];

blockcells=new Map();
for(var y=0;y<blocks.length;y++)
{
    blockcells.set(blocks[y],blocks[y]);
}

var ele=src;

stck.push(src);
visited[src]=1;
while(!stck.isEmpty())
{
        ele=stck.peek();
        animations.push([ele,ele]);
        stck.pop();
        animations.push([ele,ele]);


        if(ele==dst)
        {
            found=true;
            break;
        }

     dfsgetneighbours(ele);

}

if(found)
{
var jj=dst;
//animations.push(removeanims);
//console.log(removeanims);
for(let itr in removeanims)
{
    //console.log(itr);
    animations.push([removeanims[itr],removeanims[itr],removeanims[itr],removeanims[itr]]);
}
while(jj!=-1)
{

    animations.push([jj,jj,jj]);
    jj=path[jj];
}


}
else{
    swal("No Path exists!","Try another maze");
    return 0;
    
    }


return animations





}
