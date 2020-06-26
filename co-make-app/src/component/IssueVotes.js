import React, { useState } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-regular-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const IssueVotes = props => {
  const [vote, newVotes] = useState(0);
  const newVote = () => {
    console.log(vote)
  newVotes(vote + 1);
  }
  return (
   
    <div>
      <div
        className="IssueVotes-section"
        key="IssueVotes-icons-container"
      >
        <div className="IssueVotes-section-wrapper">
          <FontAwesomeIcon icon={faArrowUp} onClick = {() => newVote()}/>
        </div>
        <div className="IssueVotes-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="IssueVotes-number">{props.upvotes}</p>
    </div>
  )
};

export default IssueVotes;