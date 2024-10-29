import { SWAP } from '../helper/constants.js';
import { swap } from '../helper/swap.js';

// Cocktail Shaker Sort returns moves containing two indexes and SWAP or no swap action
export const cocktailShakerSort = async (array, length) => {
    let moves = [];
    let start = 0;
    let end = length - 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        // Traverse from left to right
        for (let i = start; i < end; i++) {
            if (array[i] > array[i + 1]) {
                await swap(array, i, i + 1);
                moves.push([i, i + 1, SWAP]); // Log the swap
                swapped = true;
            } else {
                moves.push([i, i + 1, !SWAP]); // Log the comparison with no swap
            }
        }

        // If no swaps occurred, array is sorted
        if (!swapped) break;

        // Prepare for next pass from right to left
        swapped = false;
        end--;

        // Traverse from right to left
        for (let i = end; i > start; i--) {
            if (array[i] < array[i - 1]) {
                await swap(array, i, i - 1);
                moves.push([i, i - 1, SWAP]); // Log the swap
                swapped = true;
            } else {
                moves.push([i, i - 1, !SWAP]); // Log the comparison with no swap
            }
        }

        start++;
    }

    return moves;
};
