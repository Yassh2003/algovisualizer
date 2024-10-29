import { SWAP } from '../helper/constants.js';

// Shell Sort returns a container with 2 indexes and SWAP or no swap action
export const shellSort = async (array, length) => {
    let moves = [];
    
    // Start with a large gap and reduce it
    for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < length; i++) {
            let temp = array[i];
            let j = i;
            
            // Shift elements until the correct position is found for temp
            while (j >= gap && array[j - gap] > temp) {
                // Record the comparison and swap move
                moves.push([j, j - gap, SWAP]);
                array[j] = array[j - gap]; // Shift element
                j -= gap;
            }
            
            // Place temp in its correct position
            array[j] = temp;
            moves.push([j, i, !SWAP]); // Log the placement of temp without a swap
        }
    }
    
    return moves;
};