import React from 'react';
import DMCandidateItem from './dm_candidate_item';

const DMCandidateList = ({ addToCandidates, users, candidates, candidateFilter }) => {
  return(
    <ul className="channel-browse-list">
      {
        users.filter(user => {
          return candidateFilter == "" || user.username.includes(candidateFilter);
        }).map(user =><DMCandidateItem
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
