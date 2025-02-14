import React from "react";
import Markdown from "react-markdown";

function CodeReview(props) {
    const {output} = props;
  return (
    <div class="mockup-window bg-base-100 border border-primary p-4">
        <Markdown className="overflow-y-auto scrollbar-thin break-all">
            {output}
        </Markdown>
    </div>
  );
}

export default CodeReview;
