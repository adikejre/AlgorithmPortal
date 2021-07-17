import React, { Component } from 'react';
import mergeimg from './mergeimg.png';
import quickimg from './quickimg.png';
import heapimg from './heapimg.png'
import {Helmet} from "react-helmet";
import { Button } from 'react-bootstrap';
import './implementalgs_style.css'
import {Link} from 'react-router-dom'
class Sortinginfo extends Component {
    state = {  }
    render() { 




        return (
        <React.Fragment>


<Helmet>
                <style>{'body { background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2); }'}</style>
            </Helmet>

{/* <article>

<p class="explain"> <h2>Merge Sort</h2><br></br><br></br>

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis est veniam ad, reprehenderit repellendus accusamus eius labore quas soluta doloribus eum temporibus illo, libero vitae id numquam assumenda porro sapiente.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat esse ea sed quibusdam cumque maxime vero soluta enim veniam placeat ratione, minima facere itaque suscipit eos tenetur et? Explicabo.
</p>

<p class="explain"> Algo2
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, sit molestias! Optio natus iste sed, nostrum molestias a consequatur corrupti facere? Eaque autem quia voluptatem illum rem debitis error harum!
1. Merge Sort:
        Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
       The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
</p>

</article>

<article>

<p class="explain"> Algo2
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, sit molestias! Optio natus iste sed, nostrum molestias a consequatur corrupti facere? Eaque autem quia voluptatem illum rem debitis error harum!
1. Merge Sort:
        Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
       The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
</p>

</article>

<article>

<p class="explain"> Algo3</p>

</article> */}


            
        <h1>Sorting Techniques Explained</h1> 
        <div class="sortingalgos">
            <b>
                <u>
                    <h2>Merge Sort</h2>
                </u>
            </b>
            <p>
        Merge Sort:<br></br>
        Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
       The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
        </p>
        <div class="pseudo">
            <img src={mergeimg}></img>
            <p >
                <h2>Psuedo code</h2>
            MergeSort(arr[], l,  r)
            <br></br>
            
                If r {'>'} l
            <br></br>
             1. Find the middle point to divide the array into two halves:
            <br></br>
                     middle m = l+ (r-l)/2
            <br></br>
             2. Call mergeSort for first half:
            <br></br>
                     Call mergeSort(arr, l, m)
            <br></br>
             3. Call mergeSort for second half:
            <br></br>
                     Call mergeSort(arr, m+1, r)
            <br></br>
             4. Merge the two halves sorted in step 2 and 3:
            <br></br>
                     Call merge(arr, l, m, r)
            <br></br>
            </p>
        </div>
<Link to="/sortexecute"><Button size="lg"> See how it works!</Button></Link>


        </div>
        

<div class="sortingalgos">

<b>
                <u>
                    <h2>Quick Sort</h2>
                </u>
            </b>
            <p>
            QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

Always pick first element as pivot.
Always pick last element as pivot (implemented below)
Pick a random element as pivot.
Pick median as pivot.
The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
        </p>
        <div class="pseudo">
            <img src={quickimg}></img>
            <p >
                <h2>Psuedo code</h2>
                quickSort(arr[], low, high)
<br></br>
                /* pi is partitioning index, arr[pi] is now
           at right place */
<br></br>

        pi = partition(arr, low, high);
        <br></br>

        quickSort(arr, low, pi - 1);  // Before pi
<br></br>

        quickSort(arr, pi + 1, high); // After pi
<br></br>

            </p>
        </div>
<Link to="/quicksortcode"><Button size="lg"> See how it works!</Button></Link>



</div>


<div class="sortingalgos">

<b>
                <u>
                    <h2>Heap Sort</h2>
                </u>
            </b>
            <p>
            Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.
            Since a Binary Heap is a Complete Binary Tree, it can be easily represented as an array and the array-based representation is space-efficient. If the parent node is stored at index I, the left child can be calculated by 2 * I + 1 and the right child by 2 * I + 2 (assuming the indexing starts at 0).
<br></br>

        </p>
        <div class="pseudo">
            <img src={heapimg}></img>
            <p >
            <b>Heap Sort Algorithm for sorting in increasing order:</b> <br></br>
1. Build a max heap from the input data. <br></br>
2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of the tree. <br></br>
3. Repeat step 2 while the size of the heap is greater than 1.
<br></br>

            </p>
        </div>
<Link to="/heapsortcode"><Button size="lg"> See how it works!</Button></Link>



</div>








        </React.Fragment>
        
            
            
            
            
            );

    }
}
 
export default Sortinginfo;