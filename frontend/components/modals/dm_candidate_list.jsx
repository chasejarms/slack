import React from 'react';
import DMCandidateItem from './dm_candidate_item';

const DMCandidateList = ({ addToCandidates, users, candidates }) => {
  return(
    <ul className="channel-browse-list">
      {
        users.map(user =><DMCandidateItem
          key={ user.id }
          addToCandidates={ addToCandidates }
          username={user.username}
          candidates={candidates}
        />)
      }
    </ul>
  );
};

export default DMCandidateList;
