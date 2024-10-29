import { SWAP } from '../helper/constants.js';
import { swap } from '../helper/swap.js';

// Comb Sort returns a container with 2 indexes and SWAP or no swap action
export const combSort = async (array, length) => {
    let moves = [];
    let gap = length;
    let sorted = false;

    // Define the shrink factor, which is typically 1.3
    const shrinkFactor = 1.3;

    while (gap > 1 || !sorted) {
        // Update the gap value
        gap = Math.floor(gap / shrinkFactor);
        if (gap < 1) gap = 1; // Minimum gap is 1

        sorted = true;

        // Perform a "comb" through the array with the current gap
        for (let i = 0; i + gap < length; i++) {
            if (array[i] > array[i + gap]) {
                await swap(array, i, i + gap);
                moves.push([i, i + gap, SWAP]); // Log the swap move
                sorted = false; // Array isn't sorted if a swap is made
            } else {
                moves.push([i, i + gap, !SWAP]); // Log the comparison with no swap
            }
        }
    }

    return moves;
};
