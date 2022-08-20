import React from "react";

export default function Portals() {
  return (
    <div>
      <h5>Portals</h5>
      <div>
        <ul>
          <li>
            Portals provide a first-class way to render children into a DOM node
            that exists outside the DOM hierarchy of the parent component.
          </li>
          <li>Syntax: ReactDOM.createPortal(child, container)</li>
          <strong>Event Bubbling</strong>
          <li>
            Even though a portal can be anywhere in the DOM tree, it behaves
            like a normal React child in every other way. Features like context
            work exactly the same regardless of whether the child is a portal,
            as the portal still exists in the React tree regardless of position
            in the DOM tree.
          </li>
          <li>
            An event fired from inside a portal will propagate to ancestors in
            the containing React tree, even if those elements are not ancestors
            in the DOM tree.
          </li>
        </ul>
      </div>
    </div>
  );
}
