import React from "react";

export function KeyInList() {
  return (
    <div className="text-left ml-2" id="key">
      <h3 className="ml-4">key :</h3>
      <ul>
        <li>
          A “key” is a special string attribute you need to include when
          creating lists of elements.
        </li>
        <li>Keys give the elements a stable identity.</li>
        <li>
          Keys help React identify which items have changed, are added, or are
          removed.
        </li>
        <li>
          This results in a much more efficient update of the user interface.
        </li>
      </ul>
      <strong className="ml-4"> =&gt; when to use index as key :</strong>
      <ol>
        <li>Item in the list don't have unique value</li>
        <li>list should be static it will not change</li>
        <li>list will never be reordered or filtered</li>
      </ol>
      <span>use index as key when all above 3 conditions are satisfied otherwise useing index as key can generate a problem</span>
      <br/>
      <div>
        <div className="author">~ ANKIT CHAUDHARY</div>
      </div>
    </div>
  );
}
