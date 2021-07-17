export function bubbleanimations(arr){
    
    const animation=bsort(arr);

    return animation;
}

function bsort(arr){

const animate=[];
const n=arr.length;

for(let i=0;i<n;i++)
{
    for(let j=0;j<n-i-1;j++){
        animate.push([j,j+1]);
        animate.push([j,j+1,1]);
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j];
            animate.push([j,arr[j],j+1,arr[j+1]]);
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
// for(let k=0;k<n;k++)
// animate.push([k]);

return animate;
}


export function msortanimations(arr){
    
    const animate=[];
    
    const n=arr.length;
    console.log(n);
    mergsort(arr,0,n-1,animate);
    // for(let x=0;x<n;x++)
    // {
    //     animate.push([x]);
    // }

    return animate;
}


export function quicksortanimations(arr){
const animate=[];
const n=arr.length;
quicksort(arr,0,n-1,animate);
return animate;

}

export function heapsortanimations(arr){
const animate=[];
const n=arr.length;
heapsort(arr,n,animate);
return animate;
}



function mergehelp(ar,start,mid,end,animate)
{
    
    let i=start;
    let j=mid+1;
    let aux=[];
    let k=start;

    while(i<=mid&&j<=end){
        animate.push([i,j]);
        animate.push([i,j]);
        if(ar[i]<ar[j])
        {
            aux.push(ar[i]);   
            animate.push([k,ar[i]]);
            k++;
            i++;
        }
        else{
        aux.push(ar[j]);
        animate.push([k,ar[j]]);
        k++;

        j++;
        }
    }
    while(i<=mid)
    {
        animate.push([i,i]);
        animate.push([i,i]);
        aux.push(ar[i]);
        animate.push([k,ar[i]]);
        k++;
        i++;

    }
    
    while(j<=end){
        aux.push(ar[j]);
        animate.push([j,j]);
        animate.push([j,j]);
        animate.push([k,ar[j]]);
        k++;
        j++;
    }
    console.log("aux len",aux.length);

    
    let y=0;
    for(let x=start;x<=end;x++){
    ar[x]=aux[y];
    y++;
    console.log("ar[x]",ar[x]);
    
    }
console.log("/n");
}


function mergsort(ar,start,end,animate){
    
    
if(start<end){
    //console.log("hello",start);
    console.log("start",start);
    console.log("end",end);
    const mid=parseInt((start+end)/2);
    mergsort(ar,start,mid,animate);
    mergsort(ar,mid+1,end,animate);
    mergehelp(ar,start,mid,end,animate);
    
}

else return;


}


function partition(arr,start,end,animate)
{

    let pivot=arr[end];
    let i=start-1;

    animate.push([end,pivot,1]);


    for(let j=start;j<end;j++){
    
        animate.push([j]);
        animate.push([j]);
        if(arr[j]<pivot){
            i++;
           
             animate.push([i,arr[i],j,arr[j]]);

            let tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;

            
        }
        
    }
    animate.push([end,pivot]);
    
    animate.push([i+1,arr[i+1],end,arr[end]]);

    let tmp=arr[i+1];
    arr[i+1]=arr[end];
    arr[end]=tmp;
    

return i+1;

}







function quicksort(arr,start,end,animate){
   

if(start<end){
   
    let pi=partition(arr,start, end,animate);
    quicksort(arr,start,pi-1,animate);
    quicksort(arr,pi+1,end,animate);
}


}


function heapify(arr,n,i,animate){

    let largest=i;
    let l=2*i+1;
    let r=2*i+2;

    if(l<n&&arr[l]>arr[largest]){
        largest=l;
        animate.push([largest,1]);
        animate.push([0,0,0,0,0]);
        



        animate.push([largest,1,1]);

    }
    if (r < n && arr[r] > arr[largest])
    {
        largest = r;
        animate.push([largest,1]);
        animate.push([0,0,0,0,0]);
        



        animate.push([largest,1,1]);
        
    }
        

    if(largest!=i){
        animate.push(i,arr[i],largest,arr[largest]);
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        heapify(arr,n,largest,animate);

    }


}


function heapsort(arr,n,animate){

    let i=0;
    for(i=parseInt(n/2)-1;i>=0;i--){
        heapify(arr,n,i,animate);
    }

    for(i=n-1;i>0;i--){
        animate.push([i]);
        animate.push([i]);

        animate.push([0,arr[0],i,arr[i]]);
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0,animate);
    }

}